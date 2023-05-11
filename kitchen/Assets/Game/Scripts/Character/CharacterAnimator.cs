using UnityEngine;

public class CharacterAnimator : MonoBehaviour
{
    public Animator animator;
    private readonly string keyIdle = "Idle";
    private readonly string keyRun = "Walk";
    private readonly string keyCarry = "Carry";
    private readonly string keyCook = "cook";
    private readonly string keyAnimCook = "Cook";

    public GameObject objCook;
    
    public void ChangeAnimRun()
    {
        animator.SetBool(keyRun, true);
        animator.SetBool(keyIdle, false);
    }
    
    public void ChangeAnimIdle()
    {
        //unitCharacter.anim.SetBool(keyCarry,isCarry);
        animator.SetBool(keyIdle, true);        
        animator.SetBool(keyRun, false);
    }
    
    public void ChangeCarryState(bool isCarry)
    {
        if(!animator.GetBool(keyCarry) && isCarry) animator.Play("IdleCarry");
        else if(animator.GetBool(keyCarry) && !isCarry) animator.Play("Idle");
        animator.SetBool(keyCarry,isCarry);
    }

    public void PlayCook()
    {
        objCook.gameObject.SetActive(true);
        animator.SetBool(keyCook, true);  
        animator.Play(keyAnimCook, 0 ,0);
    }

    public void EndCook()
    {
        objCook.gameObject.SetActive(false);
        animator.SetBool(keyCook, false);  
    }
}
