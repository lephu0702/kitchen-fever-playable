using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class CollectObjectPlace : MonoBehaviour, IPlaceInteractable
{
    public float isTimeDelay;

    public StackControl stackControl;
    public TutController tutController;
    private bool collectable;

    public void PreInteract(CharacterBehaviour characterController)
    {
        if(collectable) return;
        characterController.IsCanMove = false;
        tutController.DoneTut();
    }

    public void OnInteract(CharacterBehaviour characterController)
    {
        if(collectable) return;
        
        if (stackControl.IsEmpty())
        {
            collectable = true;
            DOVirtual.DelayedCall(.5f, () =>
            {
                characterController.IsCanMove = true;
            });
            tutController.Next(0);
            return;
        }
        
        characterController.stackControl.Add(stackControl.Pop());

    }

    public void PostInteract(CharacterBehaviour characterController)
    {
    }

    public GameObject GetGameObject()
    {
        return gameObject;
    }

    public float GetTimeDelayOnInteract()
    {
        return isTimeDelay;
    }
}
