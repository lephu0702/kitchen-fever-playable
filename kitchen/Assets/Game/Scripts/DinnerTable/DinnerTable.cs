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

    public TutController tutController;
    private bool isDone;

    public void PreInteract(CharacterBehaviour characterController)
    {
        if (!isDone)
        {
            isDone = true;
            tutController.DoneTut();
        }
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
            stackControl.gameObject.SetActive(false);
            customer.Purchase();
        }
        
        tutController.Next(3);
    }
}
