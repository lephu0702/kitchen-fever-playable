using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EndCard : MonoBehaviour
{
    public static EndCard instance;
    public GameObject endCard;
    public Canvas canvasIngame;
    public Canvas canvasEnd;

    private void Start()
    {
        endCard.gameObject.SetActive(false);
        instance = this;
    }

    public void ShowEndCard()
    {
        CharacterBehaviour.instance.IsCanMove = false;
        canvasIngame.enabled = false;
        canvasEnd.enabled = true;
        endCard.gameObject.SetActive(true);
    }

    public void InstallApp()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
