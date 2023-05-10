using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DetectPlaceComponent : MonoBehaviour
{
    public CharacterBehaviour character;
    [SerializeField] public LayerMask layerWaitPlace;
    private IPlaceInteractable placeInteractable;
    private Collider[] hitColliders;
    [SerializeField] private float radius;
    [Header("State")]
    public bool enableDetect;
    private bool isDetected;
    private bool isFirstDetected;
    private Collider hitCollider;

    [Header("Detect By Time")]
    [SerializeField] private float timeDelayDetect;
    private float timeCount;
    private float timeCountDetected;
    public float detectDelay;
    
    private void DetectLayerMask()
    {
        hitColliders = Physics.OverlapSphere(transform.position, radius,layerWaitPlace);
        if (hitColliders.Length > 0)
        {
            hitCollider = hitColliders[0];
            foreach (var hitCollider1 in hitColliders)
            {
                if (Vector3.Distance(transform.position, hitCollider1.ClosestPoint(transform.position)) <=
                    Vector3.Distance(transform.position, hitCollider.ClosestPoint(transform.position)))
                    hitCollider = hitCollider1;
            }
            if ( placeInteractable == null || placeInteractable.GetGameObject() != hitCollider.gameObject)
            {
                ResetOldDetect();
                isFirstDetected = false;
                placeInteractable = hitCollider.GetComponent<IPlaceInteractable>();
                //timeDetect = Time.time;
            }
            isDetected = true; 
        }
        else
        {
            StopDetect();
            /*ResetOldDetect();
            characterInteractable = null;
            isDetected = false;*/
        }
    }

    private void StopDetect()
    {
        ResetOldDetect();
        placeInteractable = null;
        isDetected = false;
    }
    
    private void DetectedInteract()
    {
        if (!isFirstDetected)
        {
            isFirstDetected = true;
            placeInteractable?.PreInteract(character);
        }
        placeInteractable?.OnInteract(character);
    }

    private void ResetOldDetect()
    {
        placeInteractable?.PostInteract(character);
    }
    
    public void CheckDetectByTime()
    {
        if (!enableDetect)
            return;
        if (timeCount <= Time.time)
        {
            DetectLayerMask();
            timeCount = timeDelayDetect + Time.time;
        }
    }

    public void DetectedByTime()
    {
        if (!isDetected) return;
        if (timeCountDetected <= Time.time)
        {
            DetectedInteract();
            timeCountDetected = detectDelay+ Time.time;
        }
    }

    /*#if UNITY_EDITOR
    private void OnDrawGizmos()
    {
        if (hitColliders == null || hitColliders.Length <= 0)
            Gizmos.color = Color.blue;
        else Gizmos.color = Color.red;
        Gizmos.DrawWireSphere(transform.position,radius);
    }
    #endif*/
}
