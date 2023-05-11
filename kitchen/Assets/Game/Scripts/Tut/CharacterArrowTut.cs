using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CharacterArrowTut : MonoBehaviour
{
    [SerializeField] private Transform traf;
    public Transform target;
    
    private Vector3 pos;
    private float disHide = 3;
    private float disToTarget;

    public void Init()
    {
        pos = target.position;
        pos.y = traf.position.y;
    }

    private void FixedUpdate()
    {
        traf.rotation = Quaternion.LookRotation( pos - transform.position);
        
        disToTarget = Vector3.Distance(traf.position, pos);
        if (disToTarget <= disHide)
            traf.localScale = Vector3.Lerp(traf.localScale, Vector3.one * ( disToTarget / disHide), .1f);
        else traf.localScale = Vector3.Lerp(traf.localScale, Vector3.one, .1f);
    }
}
