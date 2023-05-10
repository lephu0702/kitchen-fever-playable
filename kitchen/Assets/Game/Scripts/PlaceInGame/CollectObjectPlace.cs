using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollectObjectPlace : MonoBehaviour, IPlaceInteractable
{
    public float isTimeDelay;

    public StackControl stackControl;
    
    
    public void PreInteract(CharacterBehaviour characterController)
    {
        if(stackControl.IsEmpty()) return;
    }

    public void OnInteract(CharacterBehaviour characterController)
    {
        if(stackControl.IsEmpty()) return;

        Debug.Log("add");
        characterController.stackControl.Add(stackControl.Pop());
    }

    public void PostInteract(CharacterBehaviour characterController)
    {
        if(stackControl.IsEmpty()) return;
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
