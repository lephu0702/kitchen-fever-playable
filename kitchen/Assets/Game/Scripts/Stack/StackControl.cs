using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StackControl : MonoBehaviour
{
    public List<StackObject> stackObjects;
    public List<Transform> stackPositions;

    public void Add(StackObject element)
    {
        Debug.Log("Add");
        stackObjects.Add(element);
        element.transf.parent = transform;
        element.transf.position = stackPositions[stackObjects.Count-1].position;
    }

    public StackObject Pop()
    {
        if (stackObjects.Count > 0)
        {
            var s = stackObjects[^1];
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
