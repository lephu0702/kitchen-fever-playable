using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class MoveByPath : MonoBehaviour
{
    public Transform[] paths;
    public Vector3[] path;
    public Transform target;
    public float timeMove;
    public bool isReady;

    private void Start()
    {
        Init();
        target.position = paths[0].position;
        target.DOPath(path, timeMove, PathType.CatmullRom).SetEase(Ease.Linear).SetLoops(-1);
    }

    private void OnEnable()
    {
        target.DOKill();
        if (isReady)
        {
            
            target.position = paths[0].position;
            target.DOPath(path, timeMove, PathType.CatmullRom).SetEase(Ease.Linear).SetLoops(-1);
        }
    }

    private void OnDisable()
    {
        target.DOKill();
    }

    public void Init()
    {
        path = new Vector3[paths.Length];
        for (int i = 0; i < paths.Length; i++)
        {
            path[i] = paths[i].position;
        }
        isReady = true;
    }
}
