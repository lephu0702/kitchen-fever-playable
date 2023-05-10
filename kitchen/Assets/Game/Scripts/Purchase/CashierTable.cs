using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class CashierTable : MonoBehaviour, IPlaceInteractable
{
    public CustomerController[] customerControllers;
    public Transform[] moneys;
    private bool isUsed;
    
    public void PreInteract(CharacterBehaviour characterController)
    {
        if (isUsed) return;
        
        isUsed = true;
        foreach (var customerController in customerControllers)
        {
            customerController.transform.DOScale(0, .15f);
        }

        foreach (var money in moneys)
        {
            money.DOMove(characterController.transform.position, .5f);
        }

        DOVirtual.DelayedCall(.5f, () =>
        {
            foreach (var money in moneys)
            {
                money.gameObject.SetActive(false);
            }
        });
    }
    
    public void OnInteract(CharacterBehaviour characterController)
    {

    }
    
    public void PostInteract(CharacterBehaviour characterController)
    {

    }
    
    public GameObject GetGameObject()
    {
        return this.gameObject;
    }
}
