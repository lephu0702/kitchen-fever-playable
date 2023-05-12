using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class CashierTable : MonoBehaviour, IPlaceInteractable
{
    public CustomerController[] customerControllers;
    public List<StackObject> moneys;
    private bool isUsed;
    public TutController tutController;
    public StackControl stackMoney;
    public bool isReady;
    
    public AudioSource audioSource;
    public AudioClip audioClip;
    
    public void PreInteract(CharacterBehaviour characterController)
    {
        if (isUsed) return;
        tutController.DoneTut();
        isUsed = true;
        foreach (var customerController in customerControllers)
        {
            customerController.transform.DOScale(0, .5f);
        }

        foreach (var money in moneys)
        {
            money.transf.position = customerControllers[0].transform.position;
            stackMoney.Add(money);
        }
        isReady = false;
        
        characterController.IsCanMove = false;
        DOVirtual.DelayedCall(1f, () => isReady = true);
    }
    
    public void OnInteract(CharacterBehaviour characterController)
    {
        if (moneys.Count <= 0)
        {
            tutController.Next(4);
            characterController.IsCanMove = true;
            return;
        }
        if(!isReady) return;
        
        var money = moneys[moneys.Count - 1];
        moneys.RemoveAt(moneys.Count - 1);
        
        audioSource.PlayOneShot(audioClip);
        money.transf.DOJump(characterController.transform.position, 1, 1, .5f).OnComplete(() =>
        {
            money.gameObject.SetActive(false);
        });;
    }
    
    public void PostInteract(CharacterBehaviour characterController)
    {

    }
    
    public GameObject GetGameObject()
    {
        return this.gameObject;
    }
}
