using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class CustomerController : MonoBehaviour
{
    public CustomerAnimator customerAnimator;
    public Transform purchasePos;
    public float timeMove;

    public void Purchase()
    {
        customerAnimator.ChangeAnimRun();
        transform.DOPath(new Vector3[] {
            transform.position,
            purchasePos.position
        }, timeMove).SetLookAt(1).SetEase(Ease.Linear).OnComplete(()=> customerAnimator.ChangeAnimIdle());
        //transform.DOMove(purchasePos.position, timeMove).SetEase(Ease.Linear).OnComplete(()=> customerAnimator.ChangeAnimIdle());
    }
}
