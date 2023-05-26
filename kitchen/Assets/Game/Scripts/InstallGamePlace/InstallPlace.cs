using UnityEngine;

public class InstallPlace : MonoBehaviour, IPlaceInteractable
{

    public void PreInteract(CharacterBehaviour characterController)
    {
        Debug.Log("install");
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
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