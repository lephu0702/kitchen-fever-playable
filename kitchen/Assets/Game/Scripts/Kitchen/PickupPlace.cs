using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PickupPlace : MonoBehaviour, IPlaceInteractable
{
    public TutController tutController;
    public float timeDelay;
    public StackControl stackInput;
    public Collider col;

    public void PreInteract(CharacterBehaviour characterController)
    {
        characterController.IsCanMove = false;
        tutController.DoneTut();
    }
    
    public void OnInteract(CharacterBehaviour characterController)
    {
        if (!characterController.stackControl.IsEmpty())
        {
            stackInput.Add(characterController.stackControl.Pop());
        }
        else col.enabled = false;
    }
    
    public void PostInteract(CharacterBehaviour characterController)
    {
        characterController.IsCanMove = true;
        tutController.Next(1);
    }
    
    public GameObject GetGameObject()
    {
        return this.gameObject;
    }
    
    public float GetTimeDelayOnInteract()
    {
        return timeDelay;
    }
}
