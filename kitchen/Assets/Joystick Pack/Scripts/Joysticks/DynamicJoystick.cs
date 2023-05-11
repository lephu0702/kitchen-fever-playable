using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class DynamicJoystick : Joystick
{
    public CharacterBehaviour character;

    public float MoveThreshold { get { return moveThreshold; } set { moveThreshold = Mathf.Abs(value); } }

    [SerializeField] private float moveThreshold = 1;

    public Color on, off;
    public Image imgBG;
    public Image imgHandle;

    protected override void Start()
    {
        MoveThreshold = moveThreshold;
        base.Start();
    }

    public override void OnPointerDown(PointerEventData eventData)
    {
        //ActiveVisual(true);
        //objParent.gameObject.SetActive(true);
        background.anchoredPosition = ScreenPointToAnchoredPosition(eventData.position);
        base.OnPointerDown(eventData);
    }

    public override void OnPointerUp(PointerEventData eventData)
    {
        //ActiveVisual(false);
        //objParent.gameObject.SetActive(false);
        base.OnPointerUp(eventData);
        character.timeNotMove = 0;
    }

    protected override void HandleInput(float magnitude, Vector2 normalised, Vector2 radius, Camera cam)
    {
        if (magnitude > moveThreshold)
        {
            Vector2 difference = normalised * (magnitude - moveThreshold) * radius;
            background.anchoredPosition += difference;
        }
        base.HandleInput(magnitude, normalised, radius, cam);
    }

    public override void OnDrag(PointerEventData eventData)
    {
        if (eventData == null)
        {
            Debug.Log("Null EventData");
            return;
        }
        base.OnDrag(eventData);
    }

    public void ActiveVisual(bool isActive)
    {
        imgHandle.color = isActive ? on : off;
        imgBG.color = isActive ? on : off;
    }
}