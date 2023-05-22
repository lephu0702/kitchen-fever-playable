using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TutController : MonoBehaviour
{
    public GameObject[] objectActives;
    public Transform[] posTut;
    public GameObject arrowTut;
    public int index = -1;

    public CharacterArrowTut characterArrowTut;


    public void Next(int index)
    {
        if(index >= objectActives.Length || index<= this.index) return;
        
        characterArrowTut.target = posTut[index];
        characterArrowTut.Init();
        characterArrowTut.gameObject.SetActive(true);
        
        objectActives[index].SetActive(true);
        ActiveArrow(posTut[index]);
        this.index = index;
    }

    private void ActiveArrow(Transform positionArrow)
    {
        arrowTut.gameObject.SetActive(true);
        arrowTut.transform.position = positionArrow.position;
    }

    public void DoneTut()
    {
        arrowTut.gameObject.SetActive(false);
        characterArrowTut.gameObject.SetActive(false);
    }
}
