using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class StackControl : MonoBehaviour
{
    public List<StackObject> stackObjects;
    public List<Transform> stackPositions;

    public void Add(StackObject element)
    {
        stackObjects.Add(element);
        element.transf.parent = transform;
        element.transform.DOJump(stackPositions[stackObjects.Count - 1].position, 1, 1, .5f).OnComplete(() =>
        {
            element.transform.rotation = stackPositions[stackObjects.Count - 1].rotation;
        });
        /*element.transf.position = stackPositions[stackObjects.Count-1].position;*/
    }

    public StackObject Pop()
    {
        if (stackObjects.Count > 0)
        {
            var s = stackObjects[stackObjects.Count - 1];
            stackObjects.RemoveAt(stackObjects.Count - 1) ;
            return s;
        }
        return null;
    }

    public bool IsEmpty()
    {
        return stackObjects.Count <= 0;
    }
}
