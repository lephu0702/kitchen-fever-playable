if ( TRACE ) { TRACE( JSON.parse( '["CharacterAnimator#init","CharacterAnimator#ChangeAnimRun","CharacterAnimator#ChangeAnimIdle","CharacterAnimator#ChangeCarryState","CharacterAnimator#PlayCook","CharacterAnimator#EndCook","CharacterBehaviour#IsCanMove#get","CharacterBehaviour#IsCanMove#set","CharacterBehaviour#Start","CharacterBehaviour#FixedUpdate","CharacterBehaviour#Update","CharacterBehaviour#Move","CharacterBehaviour#StartCook","CharacterBehaviour#EndCook","CharacterBehaviour#SetLookAt","DetectPlaceComponent#init","DetectPlaceComponent#DetectLayerMask","DetectPlaceComponent#StopDetect","DetectPlaceComponent#DetectedInteract","DetectPlaceComponent#ResetOldDetect","DetectPlaceComponent#CheckDetectByTime","DetectPlaceComponent#DetectedByTime","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","Joystick#Horizontal#get","Joystick#Vertical#get","Joystick#Direction#get","Joystick#HandleRange#get","Joystick#HandleRange#set","Joystick#DeadZone#get","Joystick#DeadZone#set","Joystick#AxisOptions#get","Joystick#AxisOptions#set","Joystick#SnapX#get","Joystick#SnapX#set","Joystick#SnapY#get","Joystick#SnapY#set","Joystick#init","Joystick#Start","Joystick#OnPointerDown","Joystick#OnDrag","Joystick#HandleInput","Joystick#FormatInput","Joystick#SnapFloat","Joystick#OnPointerUp","Joystick#ScreenPointToAnchoredPosition","FollowPosition#init","FollowPosition#Awake","FollowPosition#Update","JoystickPlayerExample#FixedUpdate","JoystickSetterExample#ModeChanged","JoystickSetterExample#AxisChanged","JoystickSetterExample#SnapX","JoystickSetterExample#SnapY","JoystickSetterExample#Update","MoveByJoystick#init","MoveByJoystick#MovePhysic","MoveByJoystick#LookAtMove","MoveByJoystick#SetVectorVelocity","MoveByJoystick#IsCanMove","MoveByJoystick#StopMove","MoveByJoystick#LookAtTarget","StackControl#Add","StackControl#Pop","StackControl#IsEmpty","CollectObjectPlace#PreInteract","CollectObjectPlace#OnInteract","CollectObjectPlace#PostInteract","CollectObjectPlace#GetGameObject","CollectObjectPlace#GetTimeDelayOnInteract","DynamicJoystick#MoveThreshold#get","DynamicJoystick#MoveThreshold#set","DynamicJoystick#init","DynamicJoystick#Start","DynamicJoystick#OnPointerDown","DynamicJoystick#OnPointerUp","DynamicJoystick#HandleInput","DynamicJoystick#OnDrag","DynamicJoystick#ActiveVisual","FloatingJoystick#Start","FloatingJoystick#OnPointerDown","FloatingJoystick#OnPointerUp","KitchenPlace#init","KitchenPlace#PreInteract","KitchenPlace#OnInteract","KitchenPlace#PostInteract","KitchenPlace#GetGameObject","KitchenPlace#GetTimeDelayOnInteract","KitchenPlace#Cook","KitchenPlace#StartCook","KitchenPlace#CookComplete","KitchenPlace#EndCook","PickupPlace#PreInteract","PickupPlace#OnInteract","PickupPlace#PostInteract","PickupPlace#GetGameObject","PickupPlace#GetTimeDelayOnInteract","VariableJoystick#MoveThreshold#get","VariableJoystick#MoveThreshold#set","VariableJoystick#init","VariableJoystick#SetMode","VariableJoystick#Start","VariableJoystick#OnPointerDown","VariableJoystick#OnPointerUp","VariableJoystick#HandleInput"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.30-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AxisOptions start.*/
    Bridge.define("AxisOptions", {
        $kind: 6,
        statics: {
            fields: {
                Both: 0,
                Horizontal: 1,
                Vertical: 2
            }
        }
    });
    /*AxisOptions end.*/

    /*CharacterAnimator start.*/
    Bridge.define("CharacterAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            animator: null,
            keyIdle: null,
            keyRun: null,
            keyCarry: null,
            keyCook: null,
            keyAnimCook: null,
            objCook: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#init", this ); }

                this.keyIdle = "Idle";
                this.keyRun = "Walk";
                this.keyCarry = "Carry";
                this.keyCook = "cook";
                this.keyAnimCook = "Cook";
            }
        },
        methods: {
            /*CharacterAnimator.ChangeAnimRun start.*/
            ChangeAnimRun: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#ChangeAnimRun", this ); }

                this.animator.SetBool$1(this.keyRun, true);
                this.animator.SetBool$1(this.keyIdle, false);
            },
            /*CharacterAnimator.ChangeAnimRun end.*/

            /*CharacterAnimator.ChangeAnimIdle start.*/
            ChangeAnimIdle: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#ChangeAnimIdle", this ); }

                this.animator.SetBool$1(this.keyIdle, true);
                this.animator.SetBool$1(this.keyRun, false);
            },
            /*CharacterAnimator.ChangeAnimIdle end.*/

            /*CharacterAnimator.ChangeCarryState start.*/
            ChangeCarryState: function (isCarry) {
if ( TRACE ) { TRACE( "CharacterAnimator#ChangeCarryState", this ); }

                this.animator.SetBool$1(this.keyCarry, isCarry);
            },
            /*CharacterAnimator.ChangeCarryState end.*/

            /*CharacterAnimator.PlayCook start.*/
            PlayCook: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#PlayCook", this ); }

                this.objCook.gameObject.SetActive(true);
                this.animator.SetBool$1(this.keyCook, true);
                this.animator.Play$4(this.keyAnimCook, 0, 0.0);
            },
            /*CharacterAnimator.PlayCook end.*/

            /*CharacterAnimator.EndCook start.*/
            EndCook: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#EndCook", this ); }

                this.objCook.gameObject.SetActive(false);
                this.animator.SetBool$1(this.keyCook, false);
            },
            /*CharacterAnimator.EndCook end.*/


        }
    });
    /*CharacterAnimator end.*/

    /*CharacterBehaviour start.*/
    Bridge.define("CharacterBehaviour", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            moveByJoystick: null,
            characterAnimator: null,
            detectPlaceComponent: null,
            stackControl: null,
            isCanMove: false
        },
        props: {
            IsCanMove: {
                get: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#IsCanMove#get", this ); }

                    return this.isCanMove;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "CharacterBehaviour#IsCanMove#set", this ); }

                    this.isCanMove = value;
                }
            }
        },
        methods: {
            /*CharacterBehaviour.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#Start", this ); }

                this.isCanMove = true;
            },
            /*CharacterBehaviour.Start end.*/

            /*CharacterBehaviour.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#FixedUpdate", this ); }

                this.Move();
            },
            /*CharacterBehaviour.FixedUpdate end.*/

            /*CharacterBehaviour.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#Update", this ); }

                this.detectPlaceComponent.CheckDetectByTime();
                this.detectPlaceComponent.DetectedByTime();
            },
            /*CharacterBehaviour.Update end.*/

            /*CharacterBehaviour.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#Move", this ); }

                if (this.moveByJoystick.IsCanMove() && this.isCanMove) {
                    this.moveByJoystick.MovePhysic();
                    this.SetLookAt();
                    this.characterAnimator.ChangeAnimRun();
                    this.characterAnimator.ChangeCarryState(false);
                } else {
                    this.characterAnimator.ChangeAnimIdle();
                    this.moveByJoystick.StopMove();
                    this.characterAnimator.ChangeCarryState(false);
                }
            },
            /*CharacterBehaviour.Move end.*/

            /*CharacterBehaviour.StartCook start.*/
            StartCook: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#StartCook", this ); }

                this.stackControl.gameObject.SetActive(true);
                this.isCanMove = false;
            },
            /*CharacterBehaviour.StartCook end.*/

            /*CharacterBehaviour.EndCook start.*/
            EndCook: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#EndCook", this ); }

                this.stackControl.gameObject.SetActive(false);
                this.isCanMove = true;
            },
            /*CharacterBehaviour.EndCook end.*/

            /*CharacterBehaviour.SetLookAt start.*/
            SetLookAt: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#SetLookAt", this ); }

                this.moveByJoystick.LookAtMove();
            },
            /*CharacterBehaviour.SetLookAt end.*/


        }
    });
    /*CharacterBehaviour end.*/

    /*IPlaceInteractable start.*/
    Bridge.define("IPlaceInteractable", {
        $kind: 3
    });
    /*IPlaceInteractable end.*/

    /*DetectPlaceComponent start.*/
    Bridge.define("DetectPlaceComponent", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            character: null,
            layerWaitPlace: null,
            placeInteractable: null,
            hitColliders: null,
            radius: 0,
            enableDetect: false,
            isDetected: false,
            isFirstDetected: false,
            hitCollider: null,
            timeDelayDetect: 0,
            timeCount: 0,
            timeCountDetected: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DetectPlaceComponent#init", this ); }

                this.layerWaitPlace = new UnityEngine.LayerMask();
            }
        },
        methods: {
            /*DetectPlaceComponent.DetectLayerMask start.*/
            DetectLayerMask: function () {
if ( TRACE ) { TRACE( "DetectPlaceComponent#DetectLayerMask", this ); }

                var $t;
                this.hitColliders = UnityEngine.Physics.OverlapSphere(this.transform.position, this.radius, UnityEngine.LayerMask.op_Implicit(this.layerWaitPlace.$clone()));
                if (this.hitColliders.length !== 0) {
                    this.hitCollider = this.hitColliders[0];
                    var array = this.hitColliders;
                    $t = Bridge.getEnumerator(array);
                    try {
                        while ($t.moveNext()) {
                            var hitCollider1 = $t.Current;
                            if (pc.Vec3.distance( this.transform.position, hitCollider1.ClosestPoint(this.transform.position) ) <= pc.Vec3.distance( this.transform.position, this.hitCollider.ClosestPoint(this.transform.position) )) {
                                this.hitCollider = hitCollider1;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    if (this.placeInteractable == null || UnityEngine.GameObject.op_Inequality(this.placeInteractable.IPlaceInteractable$GetGameObject(), this.hitCollider.gameObject)) {
                        this.ResetOldDetect();
                        this.isFirstDetected = false;
                        this.placeInteractable = this.hitCollider.GetComponent(IPlaceInteractable);
                    }
                    this.isDetected = true;
                } else {
                    this.StopDetect();
                }
            },
            /*DetectPlaceComponent.DetectLayerMask end.*/

            /*DetectPlaceComponent.StopDetect start.*/
            StopDetect: function () {
if ( TRACE ) { TRACE( "DetectPlaceComponent#StopDetect", this ); }

                this.ResetOldDetect();
                this.placeInteractable = null;
                this.isDetected = false;
            },
            /*DetectPlaceComponent.StopDetect end.*/

            /*DetectPlaceComponent.DetectedInteract start.*/
            DetectedInteract: function () {
if ( TRACE ) { TRACE( "DetectPlaceComponent#DetectedInteract", this ); }

                if (!this.isFirstDetected) {
                    this.isFirstDetected = true;
                    this.placeInteractable != null ? this.placeInteractable.IPlaceInteractable$PreInteract(this.character) : null;
                }
                this.placeInteractable != null ? this.placeInteractable.IPlaceInteractable$OnInteract(this.character) : null;
            },
            /*DetectPlaceComponent.DetectedInteract end.*/

            /*DetectPlaceComponent.ResetOldDetect start.*/
            ResetOldDetect: function () {
if ( TRACE ) { TRACE( "DetectPlaceComponent#ResetOldDetect", this ); }

                this.placeInteractable != null ? this.placeInteractable.IPlaceInteractable$PostInteract(this.character) : null;
            },
            /*DetectPlaceComponent.ResetOldDetect end.*/

            /*DetectPlaceComponent.CheckDetectByTime start.*/
            CheckDetectByTime: function () {
if ( TRACE ) { TRACE( "DetectPlaceComponent#CheckDetectByTime", this ); }

                if (this.enableDetect && this.timeCount <= UnityEngine.Time.time) {
                    this.DetectLayerMask();
                    this.timeCount = this.timeDelayDetect + UnityEngine.Time.time;
                }
            },
            /*DetectPlaceComponent.CheckDetectByTime end.*/

            /*DetectPlaceComponent.DetectedByTime start.*/
            DetectedByTime: function () {
if ( TRACE ) { TRACE( "DetectPlaceComponent#DetectedByTime", this ); }

                if (this.isDetected && this.timeCountDetected <= UnityEngine.Time.time) {
                    this.DetectedInteract();
                    this.timeCountDetected = this.placeInteractable.IPlaceInteractable$GetTimeDelayOnInteract() + UnityEngine.Time.time;
                }
            },
            /*DetectPlaceComponent.DetectedByTime end.*/


        }
    });
    /*DetectPlaceComponent end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0.0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0.0) {
                        endValue = 0.0;
                    } else if (endValue > 1.0) {
                        endValue = 1.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var value = { };
                        target.GetFloat(floatName, value);
                        return value.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = ((!System.Nullable.hasValue(up)) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up).$clone());
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, jumpPower, 0.0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0.0, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var position = target.position.$clone();
                        position.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(position);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var vector = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        vector.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(vector.$clone());
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x.$clone());
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x.$clone());
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1.0) {
                        endValue = 1.0;
                    } else if (endValue < 0.0) {
                        endValue = 0.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var anchoredPosition = target.anchoredPosition.$clone();
                        anchoredPosition.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = anchoredPosition.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var cInfo = ((!addThousandsSeparator) ? null : (culture || System.Globalization.CultureInfo.invariantCulture));
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return fromValue;
                    }, function (x) {
                        fromValue = x;
                        target.text = (addThousandsSeparator ? System.Int32.format(fromValue, "N0", cInfo) : Bridge.toString(fromValue));
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position.$clone());
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    var localPoint = { v : new UnityEngine.Vector2() };
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.SetColor$1(property, c.color.$clone());
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x.$clone());
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x.$clone());
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (!DG.Tweening.DOTweenModuleUtils._initialized) {
                        DG.Tweening.DOTweenModuleUtils._initialized = true;
                        DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = (isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode));
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IEventSystemHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            handleRange: 0,
            deadZone: 0,
            axisOptions: 0,
            snapX: false,
            snapY: false,
            background: null,
            handleTranf: null,
            handleObj: null,
            baseRect: null,
            canvas: null,
            cam: null,
            input: null
        },
        props: {
            Horizontal: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Horizontal#get", this ); }

                    return this.snapX ? this.SnapFloat(this.input.x, AxisOptions.Horizontal) : this.input.x;
                }
            },
            Vertical: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Vertical#get", this ); }

                    return this.snapY ? this.SnapFloat(this.input.y, AxisOptions.Vertical) : this.input.y;
                }
            },
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Direction#get", this ); }

                    return new pc.Vec2( this.Horizontal, this.Vertical );
                }
            },
            HandleRange: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#HandleRange#get", this ); }

                    return this.handleRange;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#HandleRange#set", this ); }

                    this.handleRange = Math.abs(value);
                }
            },
            DeadZone: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#DeadZone#get", this ); }

                    return this.deadZone;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#DeadZone#set", this ); }

                    this.deadZone = Math.abs(value);
                }
            },
            AxisOptions: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#get", this ); }

                    return this.AxisOptions;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#set", this ); }

                    this.axisOptions = value;
                }
            },
            SnapX: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapX#get", this ); }

                    return this.snapX;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapX#set", this ); }

                    this.snapX = value;
                }
            },
            SnapY: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapY#get", this ); }

                    return this.snapY;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapY#set", this ); }

                    this.snapY = value;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Joystick#init", this ); }

                this.input = new UnityEngine.Vector2();
                this.handleRange = 1.0;
                this.deadZone = 0.0;
                this.axisOptions = AxisOptions.Both;
                this.snapX = false;
                this.snapY = false;
                this.input = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*Joystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Joystick#Start", this ); }

                this.HandleRange = this.handleRange;
                this.DeadZone = this.deadZone;
                this.baseRect = this.GetComponent(UnityEngine.RectTransform);
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);
                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    UnityEngine.Debug.LogError$2("The Joystick is not placed inside a canvas");
                }
                var center = new pc.Vec2( 0.5, 0.5 );
            },
            /*Joystick.Start end.*/

            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerDown", this ); }

                if (this.handleTranf == null) {
                    this.handleTranf = this.handleObj.GetComponent(UnityEngine.RectTransform);
                } else {
                    this.OnDrag(eventData);
                }
            },
            /*Joystick.OnPointerDown end.*/

            /*Joystick.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnDrag", this ); }

                this.cam = null;
                if (this.canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    this.cam = this.canvas.worldCamera;
                }
                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.cam, this.background.position.$clone());
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2.0 ) );
                this.input = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize().$clone(), radius.$clone(), this.cam);
                this.handleTranf.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "Joystick#HandleInput", this ); }

                if (magnitude > this.deadZone) {
                    if (magnitude > 1.0) {
                        this.input = normalised.$clone();
                    }
                } else {
                    this.input = pc.Vec2.ZERO.clone();
                }
            },
            /*Joystick.HandleInput end.*/

            /*Joystick.FormatInput start.*/
            FormatInput: function () {
if ( TRACE ) { TRACE( "Joystick#FormatInput", this ); }

                if (this.axisOptions === AxisOptions.Horizontal) {
                    this.input = new pc.Vec2( this.input.x, 0.0 );
                } else if (this.axisOptions === AxisOptions.Vertical) {
                    this.input = new pc.Vec2( 0.0, this.input.y );
                }
            },
            /*Joystick.FormatInput end.*/

            /*Joystick.SnapFloat start.*/
            SnapFloat: function (value, snapAxis) {
if ( TRACE ) { TRACE( "Joystick#SnapFloat", this ); }

                if (value === 0.0) {
                    return value;
                }
                if (this.axisOptions === AxisOptions.Both) {
                    var angle = pc.Vec2.angle( this.input, pc.Vec2.UP.clone() );
                    switch (snapAxis) {
                        case AxisOptions.Horizontal: 
                            if (angle < 22.5 || angle > 157.5) {
                                return 0.0;
                            }
                            return (value > 0.0) ? 1 : (-1);
                        case AxisOptions.Vertical: 
                            if (angle > 67.5 && angle < 112.5) {
                                return 0.0;
                            }
                            return (value > 0.0) ? 1 : (-1);
                        default: 
                            return value;
                    }
                }
                if (value > 0.0) {
                    return 1.0;
                }
                if (value < 0.0) {
                    return -1.0;
                }
                return 0.0;
            },
            /*Joystick.SnapFloat end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerUp", this ); }

                this.input = pc.Vec2.ZERO.clone();
                this.handleTranf.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
if ( TRACE ) { TRACE( "Joystick#ScreenPointToAnchoredPosition", this ); }

                var localPoint = { v : pc.Vec2.ZERO.clone() };
                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    return localPoint.v.$clone().sub( this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta ) ).add( pivotOffset );
                }
                return pc.Vec2.ZERO.clone();
            },
            /*Joystick.ScreenPointToAnchoredPosition end.*/


        }
    });
    /*Joystick end.*/

    /*FollowPosition start.*/
    Bridge.define("FollowPosition", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            objFollow: null,
            target: null,
            smooth: 0,
            vtDel: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FollowPosition#init", this ); }

                this.vtDel = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*FollowPosition.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FollowPosition#Awake", this ); }

                this.vtDel = this.target.position.$clone().sub( this.objFollow.position );
            },
            /*FollowPosition.Awake end.*/

            /*FollowPosition.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FollowPosition#Update", this ); }

                this.objFollow.position = new pc.Vec3().lerp( this.objFollow.position, this.target.position.$clone().sub( this.vtDel ), this.smooth );
            },
            /*FollowPosition.Update end.*/


        }
    });
    /*FollowPosition end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*JoystickPlayerExample start.*/
    Bridge.define("JoystickPlayerExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            variableJoystick: null,
            rb: null
        },
        methods: {
            /*JoystickPlayerExample.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "JoystickPlayerExample#FixedUpdate", this ); }

                var direction = new pc.Vec3( 0, 0, 1 ).clone().scale( this.variableJoystick.Vertical ).add( pc.Vec3.RIGHT.clone().clone().scale( this.variableJoystick.Horizontal ) );
                this.rb.AddForce$1(direction.$clone().clone().scale( this.speed ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.VelocityChange);
            },
            /*JoystickPlayerExample.FixedUpdate end.*/


        }
    });
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    Bridge.define("JoystickSetterExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            variableJoystick: null,
            valueText: null,
            background: null,
            axisSprites: null
        },
        methods: {
            /*JoystickSetterExample.ModeChanged start.*/
            ModeChanged: function (index) {
if ( TRACE ) { TRACE( "JoystickSetterExample#ModeChanged", this ); }

                switch (index) {
                    case 0: 
                        this.variableJoystick.SetMode(JoystickType.Fixed);
                        break;
                    case 1: 
                        this.variableJoystick.SetMode(JoystickType.Floating);
                        break;
                    case 2: 
                        this.variableJoystick.SetMode(JoystickType.Dynamic);
                        break;
                }
            },
            /*JoystickSetterExample.ModeChanged end.*/

            /*JoystickSetterExample.AxisChanged start.*/
            AxisChanged: function (index) {
if ( TRACE ) { TRACE( "JoystickSetterExample#AxisChanged", this ); }

                switch (index) {
                    case 0: 
                        this.variableJoystick.AxisOptions = AxisOptions.Both;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 1: 
                        this.variableJoystick.AxisOptions = AxisOptions.Horizontal;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 2: 
                        this.variableJoystick.AxisOptions = AxisOptions.Vertical;
                        this.background.sprite = this.axisSprites[index];
                        break;
                }
            },
            /*JoystickSetterExample.AxisChanged end.*/

            /*JoystickSetterExample.SnapX start.*/
            SnapX: function (value) {
if ( TRACE ) { TRACE( "JoystickSetterExample#SnapX", this ); }

                this.variableJoystick.SnapX = value;
            },
            /*JoystickSetterExample.SnapX end.*/

            /*JoystickSetterExample.SnapY start.*/
            SnapY: function (value) {
if ( TRACE ) { TRACE( "JoystickSetterExample#SnapY", this ); }

                this.variableJoystick.SnapY = value;
            },
            /*JoystickSetterExample.SnapY end.*/

            /*JoystickSetterExample.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "JoystickSetterExample#Update", this ); }

                this.valueText.text = "Current Value: " + (Bridge.toString(this.variableJoystick.Direction) || "");
            },
            /*JoystickSetterExample.Update end.*/


        }
    });
    /*JoystickSetterExample end.*/

    /*JoystickType start.*/
    Bridge.define("JoystickType", {
        $kind: 6,
        statics: {
            fields: {
                Fixed: 0,
                Floating: 1,
                Dynamic: 2
            }
        }
    });
    /*JoystickType end.*/

    /*MoveByJoystick start.*/
    Bridge.define("MoveByJoystick", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            rb: null,
            variableJoystick: null,
            vtVelocity: null,
            vtDirrectMove: null,
            transf: null,
            smoothRotation: 0,
            smoothMove: 0,
            smoothRotationByTarget: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MoveByJoystick#init", this ); }

                this.vtVelocity = new UnityEngine.Vector3();
                this.vtDirrectMove = new UnityEngine.Vector3();
                this.smoothRotationByTarget = 0.5;
            }
        },
        methods: {
            /*MoveByJoystick.MovePhysic start.*/
            MovePhysic: function () {
if ( TRACE ) { TRACE( "MoveByJoystick#MovePhysic", this ); }

                this.vtDirrectMove = new pc.Vec3( 0, 0, 1 ).clone().scale( this.variableJoystick.Vertical ).add( pc.Vec3.RIGHT.clone().clone().scale( this.variableJoystick.Horizontal ) );
                this.vtDirrectMove = this.vtDirrectMove.$clone().normalize();
                this.rb.MovePosition(new pc.Vec3().lerp( this.transf.position, this.transf.position.$clone().add( this.vtDirrectMove.$clone().clone().scale( (UnityEngine.Time.timeScale * this.speed) ) ), this.smoothMove ));
                this.transf.rotation = new pc.Quat().slerp( this.transf.rotation, new pc.Quat().setLookAt( this.vtVelocity, pc.Vec3.UP ), this.smoothRotation );
            },
            /*MoveByJoystick.MovePhysic end.*/

            /*MoveByJoystick.LookAtMove start.*/
            LookAtMove: function () {
if ( TRACE ) { TRACE( "MoveByJoystick#LookAtMove", this ); }

                this.SetVectorVelocity(this.variableJoystick.Vertical, this.variableJoystick.Horizontal);
                if (this.vtVelocity.x !== 0.0 || this.vtVelocity.z !== 0.0) {
                    this.vtVelocity.y = 0.0;
                    this.transf.rotation = new pc.Quat().slerp( this.transform.rotation, new pc.Quat().setLookAt( this.vtVelocity, pc.Vec3.UP ), this.smoothRotation );
                }
            },
            /*MoveByJoystick.LookAtMove end.*/

            /*MoveByJoystick.SetVectorVelocity start.*/
            SetVectorVelocity: function (v, h) {
if ( TRACE ) { TRACE( "MoveByJoystick#SetVectorVelocity", this ); }

                this.vtVelocity.x = h * this.speed;
                this.vtVelocity.z = v * this.speed;
                this.vtVelocity.y = this.rb.velocity.y;
            },
            /*MoveByJoystick.SetVectorVelocity end.*/

            /*MoveByJoystick.IsCanMove start.*/
            IsCanMove: function () {
if ( TRACE ) { TRACE( "MoveByJoystick#IsCanMove", this ); }

                return this.variableJoystick.Vertical !== 0.0 || this.variableJoystick.Horizontal !== 0.0;
            },
            /*MoveByJoystick.IsCanMove end.*/

            /*MoveByJoystick.StopMove start.*/
            StopMove: function () {
if ( TRACE ) { TRACE( "MoveByJoystick#StopMove", this ); }

                this.rb.velocity = pc.Vec3.ZERO.clone();
            },
            /*MoveByJoystick.StopMove end.*/

            /*MoveByJoystick.LookAtTarget start.*/
            LookAtTarget: function (target) {
if ( TRACE ) { TRACE( "MoveByJoystick#LookAtTarget", this ); }

                this.transf.rotation = new pc.Quat().slerp( this.transf.rotation, target.rotation, this.smoothRotationByTarget );
            },
            /*MoveByJoystick.LookAtTarget end.*/


        }
    });
    /*MoveByJoystick end.*/

    /*StackControl start.*/
    Bridge.define("StackControl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            stackObjects: null,
            stackPositions: null
        },
        methods: {
            /*StackControl.Add start.*/
            Add: function (element) {
if ( TRACE ) { TRACE( "StackControl#Add", this ); }

                this.stackObjects.add(element);
                element.transf.parent = this.transform;
                element.transf.position = this.stackPositions.getItem(((this.stackObjects.Count - 1) | 0)).position.$clone();
            },
            /*StackControl.Add end.*/

            /*StackControl.Pop start.*/
            Pop: function () {
if ( TRACE ) { TRACE( "StackControl#Pop", this ); }

                if (this.stackObjects.Count > 0) {
                    var s = this.stackObjects.getItem(((this.stackObjects.Count - 1) | 0));
                    this.stackObjects.removeAt(((this.stackObjects.Count - 1) | 0));
                    return s;
                }
                return null;
            },
            /*StackControl.Pop end.*/

            /*StackControl.IsEmpty start.*/
            IsEmpty: function () {
if ( TRACE ) { TRACE( "StackControl#IsEmpty", this ); }

                return this.stackObjects.Count <= 0;
            },
            /*StackControl.IsEmpty end.*/


        }
    });
    /*StackControl end.*/

    /*StackObject start.*/
    Bridge.define("StackObject", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            transf: null
        }
    });
    /*StackObject end.*/

    /*CollectObjectPlace start.*/
    Bridge.define("CollectObjectPlace", {
        inherits: [UnityEngine.MonoBehaviour,IPlaceInteractable],
        fields: {
            isTimeDelay: 0,
            stackControl: null
        },
        alias: [
            "PreInteract", "IPlaceInteractable$PreInteract",
            "OnInteract", "IPlaceInteractable$OnInteract",
            "PostInteract", "IPlaceInteractable$PostInteract",
            "GetGameObject", "IPlaceInteractable$GetGameObject",
            "GetTimeDelayOnInteract", "IPlaceInteractable$GetTimeDelayOnInteract"
        ],
        methods: {
            /*CollectObjectPlace.PreInteract start.*/
            PreInteract: function (characterController) {
if ( TRACE ) { TRACE( "CollectObjectPlace#PreInteract", this ); }
 },
            /*CollectObjectPlace.PreInteract end.*/

            /*CollectObjectPlace.OnInteract start.*/
            OnInteract: function (characterController) {
if ( TRACE ) { TRACE( "CollectObjectPlace#OnInteract", this ); }

                if (!this.stackControl.IsEmpty()) {
                    characterController.stackControl.Add(this.stackControl.Pop());
                }
            },
            /*CollectObjectPlace.OnInteract end.*/

            /*CollectObjectPlace.PostInteract start.*/
            PostInteract: function (characterController) {
if ( TRACE ) { TRACE( "CollectObjectPlace#PostInteract", this ); }
 },
            /*CollectObjectPlace.PostInteract end.*/

            /*CollectObjectPlace.GetGameObject start.*/
            GetGameObject: function () {
if ( TRACE ) { TRACE( "CollectObjectPlace#GetGameObject", this ); }

                return Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject;
            },
            /*CollectObjectPlace.GetGameObject end.*/

            /*CollectObjectPlace.GetTimeDelayOnInteract start.*/
            GetTimeDelayOnInteract: function () {
if ( TRACE ) { TRACE( "CollectObjectPlace#GetTimeDelayOnInteract", this ); }

                return this.isTimeDelay;
            },
            /*CollectObjectPlace.GetTimeDelayOnInteract end.*/


        }
    });
    /*CollectObjectPlace end.*/

    /*DynamicJoystick start.*/
    Bridge.define("DynamicJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0,
            on: null,
            off: null,
            imgBG: null,
            imgHandle: null
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#init", this ); }

                this.on = new UnityEngine.Color();
                this.off = new UnityEngine.Color();
                this.moveThreshold = 1.0;
            }
        },
        methods: {
            /*DynamicJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#Start", this ); }

                this.MoveThreshold = this.moveThreshold;
                Joystick.prototype.Start.call(this);
            },
            /*DynamicJoystick.Start end.*/

            /*DynamicJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerDown end.*/

            /*DynamicJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerUp", this ); }

                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerUp end.*/

            /*DynamicJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "DynamicJoystick#HandleInput", this ); }

                if (magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*DynamicJoystick.HandleInput end.*/

            /*DynamicJoystick.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnDrag", this ); }

                if (eventData == null) {
                    UnityEngine.Debug.Log$1("Null EventData");
                } else {
                    Joystick.prototype.OnDrag.call(this, eventData);
                }
            },
            /*DynamicJoystick.OnDrag end.*/

            /*DynamicJoystick.ActiveVisual start.*/
            ActiveVisual: function (isActive) {
if ( TRACE ) { TRACE( "DynamicJoystick#ActiveVisual", this ); }

                this.imgHandle.color = (isActive ? this.on.$clone() : this.off.$clone());
                this.imgBG.color = (isActive ? this.on.$clone() : this.off.$clone());
            },
            /*DynamicJoystick.ActiveVisual end.*/


        }
    });
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    Bridge.define("FixedJoystick", {
        inherits: [Joystick]
    });
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    Bridge.define("FloatingJoystick", {
        inherits: [Joystick],
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*FloatingJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FloatingJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*FloatingJoystick.Start end.*/

            /*FloatingJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerDown end.*/

            /*FloatingJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerUp end.*/


        }
    });
    /*FloatingJoystick end.*/

    /*KitchenPlace start.*/
    Bridge.define("KitchenPlace", {
        inherits: [UnityEngine.MonoBehaviour,IPlaceInteractable],
        fields: {
            posCook: null,
            foodProduct: null,
            foodSpawnPos: null,
            isTimeDelay: 0,
            cookAnim: null,
            keyAnimCook: null,
            stackInput: null,
            stackOutput: null,
            timeCook: 0,
            isCooking: false,
            isCookComplete: false
        },
        alias: [
            "PreInteract", "IPlaceInteractable$PreInteract",
            "OnInteract", "IPlaceInteractable$OnInteract",
            "PostInteract", "IPlaceInteractable$PostInteract",
            "GetGameObject", "IPlaceInteractable$GetGameObject",
            "GetTimeDelayOnInteract", "IPlaceInteractable$GetTimeDelayOnInteract"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "KitchenPlace#init", this ); }

                this.keyAnimCook = "Cook";
            }
        },
        methods: {
            /*KitchenPlace.PreInteract start.*/
            PreInteract: function (characterController) {
if ( TRACE ) { TRACE( "KitchenPlace#PreInteract", this ); }

                if (!this.stackInput.IsEmpty()) {
                    var transform1 = characterController.transform;
                    transform1.position = this.posCook.position.$clone();
                    transform1.rotation = this.posCook.rotation.$clone();
                    characterController.StartCook();
                    this.isCooking = false;
                    this.isCookComplete = false;
                }
            },
            /*KitchenPlace.PreInteract end.*/

            /*KitchenPlace.OnInteract start.*/
            OnInteract: function (characterController) {
if ( TRACE ) { TRACE( "KitchenPlace#OnInteract", this ); }

                if (!this.stackInput.IsEmpty()) {
                    if (!this.isCooking) {
                        this.Cook(characterController);
                    }
                    if (this.isCookComplete && !this.stackOutput.IsEmpty()) {
                        characterController.stackControl.Add(this.stackOutput.Pop());
                    }
                }
            },
            /*KitchenPlace.OnInteract end.*/

            /*KitchenPlace.PostInteract start.*/
            PostInteract: function (characterController) {
if ( TRACE ) { TRACE( "KitchenPlace#PostInteract", this ); }
 },
            /*KitchenPlace.PostInteract end.*/

            /*KitchenPlace.GetGameObject start.*/
            GetGameObject: function () {
if ( TRACE ) { TRACE( "KitchenPlace#GetGameObject", this ); }

                return Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject;
            },
            /*KitchenPlace.GetGameObject end.*/

            /*KitchenPlace.GetTimeDelayOnInteract start.*/
            GetTimeDelayOnInteract: function () {
if ( TRACE ) { TRACE( "KitchenPlace#GetTimeDelayOnInteract", this ); }

                return this.isTimeDelay;
            },
            /*KitchenPlace.GetTimeDelayOnInteract end.*/

            /*KitchenPlace.Cook start.*/
            Cook: function (characterController) {
if ( TRACE ) { TRACE( "KitchenPlace#Cook", this ); }

                this.isCooking = true;
                var f = this.stackInput.Pop();
                f.gameObject.SetActive(false);
                this.StartCook(characterController);
            },
            /*KitchenPlace.Cook end.*/

            /*KitchenPlace.StartCook start.*/
            StartCook: function (characterController) {
if ( TRACE ) { TRACE( "KitchenPlace#StartCook", this ); }

                this.cookAnim.gameObject.SetActive(true);
                this.cookAnim.Play$4(this.keyAnimCook, 0, 0.0);
                characterController.characterAnimator.PlayCook();
                DG.Tweening.DOVirtual.DelayedCall(this.timeCook, Bridge.fn.bind(this, function () {
                    this.CookComplete(characterController);
                }));
            },
            /*KitchenPlace.StartCook end.*/

            /*KitchenPlace.CookComplete start.*/
            CookComplete: function (characterController) {
if ( TRACE ) { TRACE( "KitchenPlace#CookComplete", this ); }

                this.isCooking = false;
                this.cookAnim.gameObject.SetActive(false);
                var f = UnityEngine.Object.Instantiate$2(StackObject, this.foodProduct, this.foodSpawnPos.position.$clone(), this.foodSpawnPos.rotation.$clone());
                this.stackOutput.Add(f);
                this.EndCook(characterController);
            },
            /*KitchenPlace.CookComplete end.*/

            /*KitchenPlace.EndCook start.*/
            EndCook: function (characterController) {
if ( TRACE ) { TRACE( "KitchenPlace#EndCook", this ); }

                if (this.stackInput.IsEmpty()) {
                    characterController.EndCook();
                    characterController.characterAnimator.EndCook();
                    this.isCookComplete = true;
                }
            },
            /*KitchenPlace.EndCook end.*/


        }
    });
    /*KitchenPlace end.*/

    /*PickupPlace start.*/
    Bridge.define("PickupPlace", {
        inherits: [UnityEngine.MonoBehaviour,IPlaceInteractable],
        fields: {
            timeDelay: 0,
            stackInput: null,
            col: null
        },
        alias: [
            "PreInteract", "IPlaceInteractable$PreInteract",
            "OnInteract", "IPlaceInteractable$OnInteract",
            "PostInteract", "IPlaceInteractable$PostInteract",
            "GetGameObject", "IPlaceInteractable$GetGameObject",
            "GetTimeDelayOnInteract", "IPlaceInteractable$GetTimeDelayOnInteract"
        ],
        methods: {
            /*PickupPlace.PreInteract start.*/
            PreInteract: function (characterController) {
if ( TRACE ) { TRACE( "PickupPlace#PreInteract", this ); }
 },
            /*PickupPlace.PreInteract end.*/

            /*PickupPlace.OnInteract start.*/
            OnInteract: function (characterController) {
if ( TRACE ) { TRACE( "PickupPlace#OnInteract", this ); }

                if (!characterController.stackControl.IsEmpty()) {
                    this.stackInput.Add(characterController.stackControl.Pop());
                } else {
                    this.col.enabled = false;
                }
            },
            /*PickupPlace.OnInteract end.*/

            /*PickupPlace.PostInteract start.*/
            PostInteract: function (characterController) {
if ( TRACE ) { TRACE( "PickupPlace#PostInteract", this ); }
 },
            /*PickupPlace.PostInteract end.*/

            /*PickupPlace.GetGameObject start.*/
            GetGameObject: function () {
if ( TRACE ) { TRACE( "PickupPlace#GetGameObject", this ); }

                return Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject;
            },
            /*PickupPlace.GetGameObject end.*/

            /*PickupPlace.GetTimeDelayOnInteract start.*/
            GetTimeDelayOnInteract: function () {
if ( TRACE ) { TRACE( "PickupPlace#GetTimeDelayOnInteract", this ); }

                return this.timeDelay;
            },
            /*PickupPlace.GetTimeDelayOnInteract end.*/


        }
    });
    /*PickupPlace end.*/

    /*VariableJoystick start.*/
    Bridge.define("VariableJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0,
            joystickType: 0,
            fixedPosition: null
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "VariableJoystick#init", this ); }

                this.fixedPosition = new UnityEngine.Vector2();
                this.moveThreshold = 1.0;
                this.joystickType = JoystickType.Fixed;
                this.fixedPosition = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*VariableJoystick.SetMode start.*/
            SetMode: function (joystickType) {
if ( TRACE ) { TRACE( "VariableJoystick#SetMode", this ); }

                this.joystickType = joystickType;
                if (joystickType === JoystickType.Fixed) {
                    this.background.anchoredPosition = this.fixedPosition.$clone();
                    this.background.gameObject.SetActive(true);
                } else {
                    this.background.gameObject.SetActive(false);
                }
            },
            /*VariableJoystick.SetMode end.*/

            /*VariableJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "VariableJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.fixedPosition = this.background.anchoredPosition.$clone();
                this.SetMode(this.joystickType);
            },
            /*VariableJoystick.Start end.*/

            /*VariableJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerDown", this ); }

                if (this.joystickType !== 0) {
                    this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                    this.background.gameObject.SetActive(true);
                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*VariableJoystick.OnPointerDown end.*/

            /*VariableJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerUp", this ); }

                if (this.joystickType !== 0) {
                    this.background.gameObject.SetActive(false);
                }
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*VariableJoystick.OnPointerUp end.*/

            /*VariableJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "VariableJoystick#HandleInput", this ); }

                if (this.joystickType === JoystickType.Dynamic && magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*VariableJoystick.HandleInput end.*/


        }
    });
    /*VariableJoystick end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.EventSystems","UnityEngine.UI","System.Collections.Generic","DG.Tweening","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*AxisOptions start.*/
    $m("AxisOptions", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}}]}; }, $n);
    /*AxisOptions end.*/

    /*CharacterAnimator start.*/
    $m("CharacterAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ChangeAnimIdle","t":8,"sn":"ChangeAnimIdle","rt":$n[0].Void},{"a":2,"n":"ChangeAnimRun","t":8,"sn":"ChangeAnimRun","rt":$n[0].Void},{"a":2,"n":"ChangeCarryState","t":8,"pi":[{"n":"isCarry","pt":$n[0].Boolean,"ps":0}],"sn":"ChangeCarryState","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"EndCook","t":8,"sn":"EndCook","rt":$n[0].Void},{"a":2,"n":"PlayCook","t":8,"sn":"PlayCook","rt":$n[0].Void},{"a":2,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator"},{"a":1,"n":"keyAnimCook","t":4,"rt":$n[0].String,"sn":"keyAnimCook","ro":true},{"a":1,"n":"keyCarry","t":4,"rt":$n[0].String,"sn":"keyCarry","ro":true},{"a":1,"n":"keyCook","t":4,"rt":$n[0].String,"sn":"keyCook","ro":true},{"a":1,"n":"keyIdle","t":4,"rt":$n[0].String,"sn":"keyIdle","ro":true},{"a":1,"n":"keyRun","t":4,"rt":$n[0].String,"sn":"keyRun","ro":true},{"a":2,"n":"objCook","t":4,"rt":$n[1].GameObject,"sn":"objCook"}]}; }, $n);
    /*CharacterAnimator end.*/

    /*CharacterBehaviour start.*/
    $m("CharacterBehaviour", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"EndCook","t":8,"sn":"EndCook","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"SetLookAt","t":8,"sn":"SetLookAt","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartCook","t":8,"sn":"StartCook","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"IsCanMove","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsCanMove","t":8,"rt":$n[0].Boolean,"fg":"IsCanMove","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsCanMove","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsCanMove"},"fn":"IsCanMove"},{"a":2,"n":"characterAnimator","t":4,"rt":CharacterAnimator,"sn":"characterAnimator"},{"a":2,"n":"detectPlaceComponent","t":4,"rt":DetectPlaceComponent,"sn":"detectPlaceComponent"},{"a":1,"n":"isCanMove","t":4,"rt":$n[0].Boolean,"sn":"isCanMove","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"moveByJoystick","t":4,"rt":MoveByJoystick,"sn":"moveByJoystick"},{"a":2,"n":"stackControl","t":4,"rt":StackControl,"sn":"stackControl"}]}; }, $n);
    /*CharacterBehaviour end.*/

    /*CollectObjectPlace start.*/
    $m("CollectObjectPlace", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetGameObject","t":8,"sn":"GetGameObject","rt":$n[1].GameObject},{"a":2,"n":"GetTimeDelayOnInteract","t":8,"sn":"GetTimeDelayOnInteract","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"OnInteract","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":2,"n":"PostInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"PostInteract","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":2,"n":"PreInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"PreInteract","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":2,"n":"isTimeDelay","t":4,"rt":$n[0].Single,"sn":"isTimeDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"stackControl","t":4,"rt":StackControl,"sn":"stackControl"}]}; }, $n);
    /*CollectObjectPlace end.*/

    /*DetectPlaceComponent start.*/
    $m("DetectPlaceComponent", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CheckDetectByTime","t":8,"sn":"CheckDetectByTime","rt":$n[0].Void},{"a":1,"n":"DetectLayerMask","t":8,"sn":"DetectLayerMask","rt":$n[0].Void},{"a":2,"n":"DetectedByTime","t":8,"sn":"DetectedByTime","rt":$n[0].Void},{"a":1,"n":"DetectedInteract","t":8,"sn":"DetectedInteract","rt":$n[0].Void},{"a":1,"n":"ResetOldDetect","t":8,"sn":"ResetOldDetect","rt":$n[0].Void},{"a":1,"n":"StopDetect","t":8,"sn":"StopDetect","rt":$n[0].Void},{"a":2,"n":"character","t":4,"rt":CharacterBehaviour,"sn":"character"},{"at":[new UnityEngine.HeaderAttribute("State")],"a":2,"n":"enableDetect","t":4,"rt":$n[0].Boolean,"sn":"enableDetect","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"hitCollider","t":4,"rt":$n[1].Collider,"sn":"hitCollider"},{"a":1,"n":"hitColliders","t":4,"rt":System.Array.type(UnityEngine.Collider),"sn":"hitColliders"},{"a":1,"n":"isDetected","t":4,"rt":$n[0].Boolean,"sn":"isDetected","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isFirstDetected","t":4,"rt":$n[0].Boolean,"sn":"isFirstDetected","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"layerWaitPlace","t":4,"rt":$n[1].LayerMask,"sn":"layerWaitPlace"},{"a":1,"n":"placeInteractable","t":4,"rt":IPlaceInteractable,"sn":"placeInteractable"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeCount","t":4,"rt":$n[0].Single,"sn":"timeCount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeCountDetected","t":4,"rt":$n[0].Single,"sn":"timeCountDetected","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Detect By Time"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeDelayDetect","t":4,"rt":$n[0].Single,"sn":"timeDelayDetect","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DetectPlaceComponent end.*/

    /*DynamicJoystick start.*/
    $m("DynamicJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActiveVisual","t":8,"pi":[{"n":"isActive","pt":$n[0].Boolean,"ps":0}],"sn":"ActiveVisual","rt":$n[0].Void,"p":[$n[0].Boolean]},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":2,"n":"imgBG","t":4,"rt":$n[3].Image,"sn":"imgBG"},{"a":2,"n":"imgHandle","t":4,"rt":$n[3].Image,"sn":"imgHandle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"off","t":4,"rt":$n[1].Color,"sn":"off"},{"a":2,"n":"on","t":4,"rt":$n[1].Color,"sn":"on"}]}; }, $n);
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    $m("FixedJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    $m("FloatingJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*FloatingJoystick end.*/

    /*FollowPosition start.*/
    $m("FollowPosition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"objFollow","t":4,"rt":$n[1].Transform,"sn":"objFollow"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smooth","t":4,"rt":$n[0].Single,"sn":"smooth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"},{"a":1,"n":"vtDel","t":4,"rt":$n[1].Vector3,"sn":"vtDel"}]}; }, $n);
    /*FollowPosition end.*/

    /*IPlaceInteractable start.*/
    $m("IPlaceInteractable", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"GetGameObject","t":8,"sn":"IPlaceInteractable$GetGameObject","rt":$n[1].GameObject},{"ab":true,"a":2,"n":"GetTimeDelayOnInteract","t":8,"sn":"IPlaceInteractable$GetTimeDelayOnInteract","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ab":true,"a":2,"n":"OnInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"IPlaceInteractable$OnInteract","rt":$n[0].Void,"p":[CharacterBehaviour]},{"ab":true,"a":2,"n":"PostInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"IPlaceInteractable$PostInteract","rt":$n[0].Void,"p":[CharacterBehaviour]},{"ab":true,"a":2,"n":"PreInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"IPlaceInteractable$PreInteract","rt":$n[0].Void,"p":[CharacterBehaviour]}]}; }, $n);
    /*IPlaceInteractable end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[0].Void},{"v":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"v":true,"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"v":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"v":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"a":3,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"SnapFloat","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"snapAxis","pt":AxisOptions,"ps":1}],"sn":"SnapFloat","rt":$n[0].Single,"p":[$n[0].Single,AxisOptions],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"AxisOptions","t":16,"rt":AxisOptions,"g":{"a":2,"n":"get_AxisOptions","t":8,"rt":AxisOptions,"fg":"AxisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},"s":{"a":2,"n":"set_AxisOptions","t":8,"p":[AxisOptions],"rt":$n[0].Void,"fs":"AxisOptions"},"fn":"AxisOptions"},{"a":2,"n":"DeadZone","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_DeadZone","t":8,"rt":$n[0].Single,"fg":"DeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_DeadZone","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"DeadZone"},"fn":"DeadZone"},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"HandleRange","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HandleRange","t":8,"rt":$n[0].Single,"fg":"HandleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandleRange","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HandleRange"},"fn":"HandleRange"},{"a":2,"n":"Horizontal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[0].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"SnapX","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapX","t":8,"rt":$n[0].Boolean,"fg":"SnapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapX","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapX"},"fn":"SnapX"},{"a":2,"n":"SnapY","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapY","t":8,"rt":$n[0].Boolean,"fg":"SnapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapY","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapY"},"fn":"SnapY"},{"a":2,"n":"Vertical","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[0].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axisOptions","t":4,"rt":AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"background","t":4,"rt":$n[1].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[1].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[1].Canvas,"sn":"canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"handleObj","t":4,"rt":$n[1].GameObject,"sn":"handleObj"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRange","t":4,"rt":$n[0].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"handleTranf","t":4,"rt":$n[1].RectTransform,"sn":"handleTranf"},{"a":1,"n":"input","t":4,"rt":$n[1].Vector2,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapX","t":4,"rt":$n[0].Boolean,"sn":"snapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapY","t":4,"rt":$n[0].Boolean,"sn":"snapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Joystick end.*/

    /*JoystickPlayerExample start.*/
    $m("JoystickPlayerExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    $m("JoystickSetterExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AxisChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"AxisChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"ModeChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ModeChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SnapX","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapX","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SnapY","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapY","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"axisSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"axisSprites"},{"a":2,"n":"background","t":4,"rt":$n[3].Image,"sn":"background"},{"a":2,"n":"valueText","t":4,"rt":$n[3].Text,"sn":"valueText"},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickSetterExample end.*/

    /*JoystickType start.*/
    $m("JoystickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dynamic","is":true,"t":4,"rt":JoystickType,"sn":"Dynamic","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Fixed","is":true,"t":4,"rt":JoystickType,"sn":"Fixed","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Floating","is":true,"t":4,"rt":JoystickType,"sn":"Floating","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}}]}; }, $n);
    /*JoystickType end.*/

    /*KitchenPlace start.*/
    $m("KitchenPlace", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Cook","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"Cook","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":1,"n":"CookComplete","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"CookComplete","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":1,"n":"EndCook","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"EndCook","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":2,"n":"GetGameObject","t":8,"sn":"GetGameObject","rt":$n[1].GameObject},{"a":2,"n":"GetTimeDelayOnInteract","t":8,"sn":"GetTimeDelayOnInteract","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"OnInteract","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":2,"n":"PostInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"PostInteract","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":2,"n":"PreInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"PreInteract","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":1,"n":"StartCook","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"StartCook","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":2,"n":"cookAnim","t":4,"rt":$n[1].Animator,"sn":"cookAnim"},{"a":2,"n":"foodProduct","t":4,"rt":StackObject,"sn":"foodProduct"},{"a":2,"n":"foodSpawnPos","t":4,"rt":$n[1].Transform,"sn":"foodSpawnPos"},{"a":2,"n":"isCookComplete","t":4,"rt":$n[0].Boolean,"sn":"isCookComplete","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isCooking","t":4,"rt":$n[0].Boolean,"sn":"isCooking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTimeDelay","t":4,"rt":$n[0].Single,"sn":"isTimeDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"keyAnimCook","t":4,"rt":$n[0].String,"sn":"keyAnimCook","ro":true},{"a":2,"n":"posCook","t":4,"rt":$n[1].Transform,"sn":"posCook"},{"a":2,"n":"stackInput","t":4,"rt":StackControl,"sn":"stackInput"},{"a":2,"n":"stackOutput","t":4,"rt":StackControl,"sn":"stackOutput"},{"at":[new UnityEngine.SpaceAttribute.$ctor1(10.0)],"a":2,"n":"timeCook","t":4,"rt":$n[0].Single,"sn":"timeCook","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*KitchenPlace end.*/

    /*MoveByJoystick start.*/
    $m("MoveByJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"IsCanMove","t":8,"sn":"IsCanMove","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LookAtMove","t":8,"sn":"LookAtMove","rt":$n[0].Void},{"a":2,"n":"LookAtTarget","t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0}],"sn":"LookAtTarget","rt":$n[0].Void,"p":[$n[1].Transform]},{"a":2,"n":"MovePhysic","t":8,"sn":"MovePhysic","rt":$n[0].Void},{"a":2,"n":"SetVectorVelocity","t":8,"pi":[{"n":"v","pt":$n[0].Single,"ps":0},{"n":"h","pt":$n[0].Single,"ps":1}],"sn":"SetVectorVelocity","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"StopMove","t":8,"sn":"StopMove","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoothMove","t":4,"rt":$n[0].Single,"sn":"smoothMove","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoothRotation","t":4,"rt":$n[0].Single,"sn":"smoothRotation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoothRotationByTarget","t":4,"rt":$n[0].Single,"sn":"smoothRotationByTarget","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transf","t":4,"rt":$n[1].Transform,"sn":"transf"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"variableJoystick","t":4,"rt":Joystick,"sn":"variableJoystick"},{"a":1,"n":"vtDirrectMove","t":4,"rt":$n[1].Vector3,"sn":"vtDirrectMove"},{"a":1,"n":"vtVelocity","t":4,"rt":$n[1].Vector3,"sn":"vtVelocity"}]}; }, $n);
    /*MoveByJoystick end.*/

    /*PickupPlace start.*/
    $m("PickupPlace", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetGameObject","t":8,"sn":"GetGameObject","rt":$n[1].GameObject},{"a":2,"n":"GetTimeDelayOnInteract","t":8,"sn":"GetTimeDelayOnInteract","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"OnInteract","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":2,"n":"PostInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"PostInteract","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":2,"n":"PreInteract","t":8,"pi":[{"n":"characterController","pt":CharacterBehaviour,"ps":0}],"sn":"PreInteract","rt":$n[0].Void,"p":[CharacterBehaviour]},{"a":2,"n":"col","t":4,"rt":$n[1].Collider,"sn":"col"},{"a":2,"n":"stackInput","t":4,"rt":StackControl,"sn":"stackInput"},{"a":2,"n":"timeDelay","t":4,"rt":$n[0].Single,"sn":"timeDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PickupPlace end.*/

    /*StackControl start.*/
    $m("StackControl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Add","t":8,"pi":[{"n":"element","pt":StackObject,"ps":0}],"sn":"Add","rt":$n[0].Void,"p":[StackObject]},{"a":2,"n":"IsEmpty","t":8,"sn":"IsEmpty","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Pop","t":8,"sn":"Pop","rt":StackObject},{"a":2,"n":"stackObjects","t":4,"rt":$n[4].List$1(StackObject),"sn":"stackObjects"},{"a":2,"n":"stackPositions","t":4,"rt":$n[4].List$1(UnityEngine.Transform),"sn":"stackPositions"}]}; }, $n);
    /*StackControl end.*/

    /*StackObject start.*/
    $m("StackObject", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"transf","t":4,"rt":$n[1].Transform,"sn":"transf"}]}; }, $n);
    /*StackObject end.*/

    /*VariableJoystick start.*/
    $m("VariableJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"a":2,"n":"SetMode","t":8,"pi":[{"n":"joystickType","pt":JoystickType,"ps":0}],"sn":"SetMode","rt":$n[0].Void,"p":[JoystickType]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":1,"n":"fixedPosition","t":4,"rt":$n[1].Vector2,"sn":"fixedPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickType","t":4,"rt":JoystickType,"sn":"joystickType","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*VariableJoystick end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[5].DOTweenCYInstruction.WaitForCompletion,$n[5].DOTweenCYInstruction.WaitForRewind,$n[5].DOTweenCYInstruction.WaitForKill,$n[5].DOTweenCYInstruction.WaitForElapsedLoops,$n[5].DOTweenCYInstruction.WaitForPosition,$n[5].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[5].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[8].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[5].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[5].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[8].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[5].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[5].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[5].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[8].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[8].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[5].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[5].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[5].Tweener,"p":[$n[3].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[5].Tweener,"p":[$n[3].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[5].Tweener,"p":[$n[3].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[9].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[7].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[3].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[9].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[3].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[5].Tweener,"p":[$n[3].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[5].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[5].Tweener,"p":[$n[3].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[5].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[5].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[5].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[5].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[5].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[5].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[5].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[5].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[7].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[3].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[5].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[5].Tweener,"p":[$n[3].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[5].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[5].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[5].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[5].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[8].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[5].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[8].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[10].PathOptions,"ps":0},{"n":"t","pt":$n[5].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[10].PathOptions,$n[5].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});
