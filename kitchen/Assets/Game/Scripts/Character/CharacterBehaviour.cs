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

    private bool isCanMove;
    
    public bool IsCanMove {
        get => isCanMove;
        set => isCanMove = value;
    }

    private void Start()
    {
        isCanMove = true;
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
            /*if (!isMoving)
            {
                movingEff.ForEach((eff) => eff.SetActive(true));
                characterAnimator.ChangeAnimRun();
                isMoving = true;
            }*/
            characterAnimator.ChangeAnimRun();
            characterAnimator.ChangeCarryState(false);
        }
        else
        {
            /*movingEff.ForEach((eff) => eff.SetActive(false));
            characterAnimator.ChangeAnimIdle();
            isMoving = false;*/
            characterAnimator.ChangeAnimIdle();
            moveByJoystick.StopMove();
            characterAnimator.ChangeCarryState(false);
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
