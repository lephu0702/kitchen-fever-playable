using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveByJoystick : MonoBehaviour
{
    [SerializeField] private float speed;
    [SerializeField] private Rigidbody rb;
    [SerializeField] private Joystick variableJoystick;
    private Vector3 vtVelocity;
    private Vector3 vtDirrectMove;
    [SerializeField] private Transform transf;
    [SerializeField] private float smoothRotation;
    [SerializeField] private float smoothMove;
    [SerializeField] private float smoothRotationByTarget = .5f;

    public void MovePhysic()
    {
        vtDirrectMove = Vector3.forward * variableJoystick.Vertical + Vector3.right * variableJoystick.Horizontal;

        vtDirrectMove = Vector3.Normalize(vtDirrectMove);
        rb.MovePosition(Vector3.Lerp(transf.position, transf.position + vtDirrectMove * (Time.timeScale * speed), smoothMove));
        transf.rotation = Quaternion.Lerp(transf.rotation, Quaternion.LookRotation(vtVelocity), smoothRotation);
    }
    
    public void LookAtMove()
    {
        SetVectorVelocity(variableJoystick.Vertical, variableJoystick.Horizontal);
        if (vtVelocity.x != 0 || vtVelocity.z != 0) {
            vtVelocity.y = 0;
            transf.rotation = Quaternion.Lerp(transform.rotation, Quaternion.LookRotation(vtVelocity), smoothRotation);
        }
    }
    
    public void SetVectorVelocity(float v, float h) {
        vtVelocity.x = h * speed;
        vtVelocity.z = v * speed;
        vtVelocity.y = rb.velocity.y;
    }

    public bool IsCanMove()
    {
        return variableJoystick.Vertical != 0 || variableJoystick.Horizontal != 0;
    }

    public void StopMove()
    {
        rb.velocity = Vector3.zero;
    }
    public void LookAtTarget(Transform target)
    {
        transf.rotation = Quaternion.Lerp(transf.rotation, target.rotation, smoothRotationByTarget);
    }
}
