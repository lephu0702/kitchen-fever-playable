using UnityEngine;

public class CharacterAnimator : MonoBehaviour
{
    public Animator animator;
    private readonly string keyIdle = "Idle";
    private readonly string keyRun = "Walk";
    private readonly string keyCarry = "Carry";
    
    private int moveSpeedHash = Animator.StringToHash("speedMove");
    
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
        animator.SetBool(keyCarry,isCarry);
    }
}
