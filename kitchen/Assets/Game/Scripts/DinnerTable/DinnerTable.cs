using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class DinnerTable : MonoBehaviour, IPlaceInteractable
{
    public CustomerController[] customerControllers;
    public StackControl stackControl;
    private bool isEating;
    public float timeEat;

    public void PreInteract(CharacterBehaviour characterController)
    {
        
    }
    public void OnInteract(CharacterBehaviour characterController)
    {
        if (characterController.stackControl.IsEmpty())
        {
            if (!isEating)
            {
                isEating = true;
                DOVirtual.DelayedCall(timeEat, EatComplete);
            }
            return;
        }
        
        stackControl.Add(characterController.stackControl.Pop());

        foreach (var customer in customerControllers)
        {
            customer.customerAnimator.ChangeAnimStartEat();
        }
        
    }
    
    public void PostInteract(CharacterBehaviour characterController)
    {
    }
    
    public GameObject GetGameObject()
    {
        return this.gameObject;
    }

    private void EatComplete()
    {
        foreach (var customer in customerControllers)
        {
            customer.customerAnimator.ChangeAnimStopEat();
            customer.Purchase();
        }
    }
}
