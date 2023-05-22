using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CharacterBehaviour : MonoBehaviour
{
    public MoveByJoystick moveByJoystick;
    public CharacterAnimator characterAnimator;   
    public DetectPlaceComponent detectPlaceComponent;
    public StackControl stackControl;
    public CharacterArrowTut tut;

    private bool isCanMove;
    public float timeNotMove;    
    public GameObject effTut;
    public float timeCheckMove = 3;
    public static CharacterBehaviour instance;
    
    public bool IsCanMove {
        get => isCanMove;
        set => isCanMove = value;
    }

    private void Start()
    {
        tut.Init();
        isCanMove = true;
        instance = this;
    }

    private void FixedUpdate()
    {
        Move();
    }
    
    private void Update()
    {
        detectPlaceComponent.CheckDetectByTime();
        detectPlaceComponent.DetectedByTime();
    }
    
    private void Move()
    {
        if (moveByJoystick.IsCanMove() && isCanMove )
        {
            moveByJoystick.MovePhysic();
            SetLookAt();
            characterAnimator.ChangeAnimRun();
            characterAnimator.ChangeCarryState(!stackControl.IsEmpty());
            effTut.gameObject.SetActive(false);
        }
        else
        {
            characterAnimator.ChangeAnimIdle();
            moveByJoystick.StopMove();
            characterAnimator.ChangeCarryState(!stackControl.IsEmpty());
            if (isCanMove && timeNotMove < timeCheckMove)
            {
                timeNotMove += Time.deltaTime;
                if (timeNotMove >= timeCheckMove)
                {
                    effTut.gameObject.SetActive(true);
                }
            }
        }
    }

    public void StartCook()
    {
        stackControl.gameObject.SetActive(false);
        isCanMove = false;
    }

    public void EndCook()
    {
        stackControl.gameObject.SetActive(true);
        isCanMove = true;
    }
    
    private void SetLookAt()
    {
        moveByJoystick.LookAtMove();
    }
    
}
