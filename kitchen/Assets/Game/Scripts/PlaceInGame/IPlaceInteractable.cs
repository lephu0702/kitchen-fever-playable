using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IPlaceInteractable
{
    void PreInteract(CharacterBehaviour characterController);
    void OnInteract(CharacterBehaviour characterController);
    void PostInteract(CharacterBehaviour characterController);
    GameObject GetGameObject();
}