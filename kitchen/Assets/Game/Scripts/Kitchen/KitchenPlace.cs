using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class KitchenPlace : MonoBehaviour, IPlaceInteractable
{
    public Transform posCook;
    public StackObject foodProduct;
    public Transform foodSpawnPos;
    public float isTimeDelay;

    public Animator cookAnim;
    private readonly string keyAnimCook = "Cook";
    
    public StackControl stackInput;
    public StackControl stackOutput;

    [Space(10)]
    public float timeCook;
    public bool isCooking;
    public bool isCookComplete;
    public TutController tutController;
    public GameObject objTut;
    public AudioSource sound;
    public AudioClip clip;

    public void PreInteract(CharacterBehaviour characterController)
    {
        if (!stackInput.IsEmpty())
        {
            tutController.DoneTut();
            var transform1 = characterController.transform;
            transform1.DOMove(posCook.position, .3f);
            transform1.rotation = posCook.rotation;
            
            characterController.StartCook();
            isCooking = false;
            isCookComplete = false;
            objTut.gameObject.SetActive(false);
        }
    }
    
    public void OnInteract(CharacterBehaviour characterController)
    {
        if(!isCooking && !stackInput.IsEmpty()) Cook(characterController);
        
        if (isCookComplete && !stackOutput.IsEmpty())
        {
            characterController.stackControl.Add(stackOutput.Pop());
        }
        
    }
    
    public void PostInteract(CharacterBehaviour characterController)
    {
    }
    
    public GameObject GetGameObject()
    {
        return this.gameObject;
    }
    
    public float GetTimeDelayOnInteract()
    {
        return isTimeDelay;
    }

    private void Cook(CharacterBehaviour characterController)
    {
        isCooking = true;
        var f = stackInput.Pop();
        /*f.transf.DOMove(foodSpawnPos.position, .2f).OnComplete(() =>
        {
            f.gameObject.SetActive(false);
            StartCook(characterController);
        });*/
        
        f.transf.transform.DOJump(foodSpawnPos.position, 1, 1, .5f).OnComplete(() =>
        {
            f.gameObject.SetActive(false);
            StartCook(characterController);
        });
    }

    private void StartCook(CharacterBehaviour characterController)
    {
        cookAnim.gameObject.SetActive(true);
        cookAnim.Play(keyAnimCook, 0, 0);
        characterController.characterAnimator.PlayCook();
        DOVirtual.DelayedCall(timeCook, () => CookComplete(characterController));
        sound.PlayOneShot(clip);
    }
    
    private void CookComplete(CharacterBehaviour characterController)
    {
        isCooking = false;
        
        sound.Stop();
        cookAnim.gameObject.SetActive(false);
        var f = Instantiate(foodProduct, foodSpawnPos.position, foodSpawnPos.rotation);
        stackOutput.Add(f);
        EndCook(characterController);
    }

    private void EndCook(CharacterBehaviour characterController)
    {
        if (stackInput.IsEmpty() && !isCookComplete)
        {
            characterController.EndCook();
            characterController.characterAnimator.EndCook();
            isCookComplete = true;
            tutController.Next(2);
        }
    }
}
