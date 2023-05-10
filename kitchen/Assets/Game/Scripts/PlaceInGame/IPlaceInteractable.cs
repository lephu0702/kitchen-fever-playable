using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IPlaceInteractable
{
    public void PreInteract(CharacterBehaviour characterController);

    public void OnInteract(CharacterBehaviour characterController);

    public void PostInteract(CharacterBehaviour characterController);
    
    public GameObject GetGameObject();

    public float GetTimeDelayOnInteract();
}
