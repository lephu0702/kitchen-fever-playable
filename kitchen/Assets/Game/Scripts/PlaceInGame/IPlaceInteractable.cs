using UnityEngine;

public interface IPlaceInteractable
{
    void PreInteract(CharacterBehaviour characterController);

    void OnInteract(CharacterBehaviour characterController);

    void PostInteract(CharacterBehaviour characterController);

    GameObject GetGameObject();
}