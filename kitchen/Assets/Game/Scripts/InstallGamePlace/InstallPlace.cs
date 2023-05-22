using UnityEngine;

public class InstallPlace : MonoBehaviour, IPlaceInteractable
{

    public void PreInteract(CharacterBehaviour characterController)
    {
        EndCard.instance.ShowEndCard();
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