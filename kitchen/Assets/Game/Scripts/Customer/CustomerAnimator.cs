using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

public class CustomerAnimator : MonoBehaviour
{
    [SerializeField] private Animator animator;
    private readonly string keyIdle = "Idle";
    private readonly string keyRun = "Walk";
    private readonly string keyCarry = "Carry";
    private readonly string keyEat = "StartEat";
    private readonly string keyStopEat = "SitIdle";
    public GameObject eatObj;

    public void ChangeAnimRun()
    {
        animator.SetBool(keyRun, true);
        animator.SetBool(keyIdle, false);
    }
    
    public void ChangeAnimIdle()
    {
        //unitCharacter.anim.SetBool(keyCarry,isCarry);
        animator.SetBool(keyIdle, true);        
        animator.SetBool(keyRun, false);
    }
    
    public void ChangeCarryState(bool isCarry)
    {
        animator.SetBool(keyCarry,isCarry);
    }

    public void ChangeAnimStartEat()
    {
        animator.Play(keyEat);
        eatObj.gameObject.SetActive(false);
    }

    public void ChangeAnimStopEat()
    {
        animator.Play(keyStopEat);
    }
}
