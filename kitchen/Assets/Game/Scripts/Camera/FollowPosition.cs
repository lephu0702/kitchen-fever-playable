using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FollowPosition : MonoBehaviour
{
    [SerializeField] private Transform objFollow;
    [SerializeField] private Transform target;
    [SerializeField] private float smooth;
    private Vector3 vtDel;
    
    private void Awake()
    {
        vtDel = target.position - objFollow.position;
    }

    private void Update()
    {
        objFollow.position = Vector3.Lerp(objFollow.position, target.position - vtDel, smooth);
    }

}
