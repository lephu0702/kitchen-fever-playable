using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollectObjectPlace : MonoBehaviour, IPlaceInteractable
{
    public float isTimeDelay;

    public StackControl stackControl;
    
    
    public void PreInteract(CharacterBehaviour characterController)
    {
    }

    public void OnInteract(CharacterBehaviour characterController)
    {
        if(stackControl.IsEmpty()) return;
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
