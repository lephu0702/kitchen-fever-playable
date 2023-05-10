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
        transform.DOMove(purchasePos.position, timeMove);
    }
}
