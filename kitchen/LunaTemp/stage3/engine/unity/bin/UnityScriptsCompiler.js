if ( TRACE ) { TRACE( JSON.parse( '["CharacterAnimator#init","CharacterAnimator#ChangeAnimRun","CharacterAnimator#ChangeAnimIdle","CharacterAnimator#ChangeCarryState","CharacterBehaviour#debug","CharacterBehaviour#FixedUpdate","CharacterBehaviour#Move","CharacterBehaviour#SetLookAt","Joystick#Horizontal#get","Joystick#Vertical#get","Joystick#Direction#get","Joystick#HandleRange#get","Joystick#HandleRange#set","Joystick#DeadZone#get","Joystick#DeadZone#set","Joystick#AxisOptions#get","Joystick#AxisOptions#set","Joystick#SnapX#get","Joystick#SnapX#set","Joystick#SnapY#get","Joystick#SnapY#set","Joystick#init","Joystick#Start","Joystick#OnPointerDown","Joystick#OnDrag","Joystick#HandleInput","Joystick#FormatInput","Joystick#SnapFloat","Joystick#OnPointerUp","Joystick#ScreenPointToAnchoredPosition","FollowPosition#init","FollowPosition#Awake","FollowPosition#Update","JoystickPlayerExample#FixedUpdate","JoystickSetterExample#ModeChanged","JoystickSetterExample#AxisChanged","JoystickSetterExample#SnapX","JoystickSetterExample#SnapY","JoystickSetterExample#Update","MoveByJoystick#init","MoveByJoystick#MovePhysic","MoveByJoystick#LookAtMove","MoveByJoystick#SetVectorVelocity","MoveByJoystick#IsCanMove","MoveByJoystick#StopMove","MoveByJoystick#LookAtTarget","DynamicJoystick#MoveThreshold#get","DynamicJoystick#MoveThreshold#set","DynamicJoystick#init","DynamicJoystick#Start","DynamicJoystick#OnPointerDown","DynamicJoystick#OnPointerUp","DynamicJoystick#HandleInput","DynamicJoystick#OnDrag","DynamicJoystick#ActiveVisual","FloatingJoystick#Start","FloatingJoystick#OnPointerDown","FloatingJoystick#OnPointerUp","VariableJoystick#MoveThreshold#get","VariableJoystick#MoveThreshold#set","VariableJoystick#init","VariableJoystick#SetMode","VariableJoystick#Start","VariableJoystick#OnPointerDown","VariableJoystick#OnPointerUp","VariableJoystick#HandleInput"]' ) ); }
/**
 * @version 1.0.8529.27526
 * @copyright anton
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
            moveSpeedHash: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CharacterAnimator#init", this ); }

                this.keyIdle = "Idle";
                this.keyRun = "Walk";
                this.keyCarry = "Carry";
                this.moveSpeedHash = UnityEngine.Animator.StringToHash("speedMove");
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

                //unitCharacter.anim.SetBool(keyCarry,isCarry);
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


        }
    });
    /*CharacterAnimator end.*/

    /*CharacterBehaviour start.*/
    Bridge.define("CharacterBehaviour", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            moveByJoystick: null,
            characterAnimator: null
        },
        methods: {
            /*CharacterBehaviour.debug start.*/
            debug: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#debug", this ); }

                this.gameObject.SetActive(false);
            },
            /*CharacterBehaviour.debug end.*/

            /*CharacterBehaviour.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#FixedUpdate", this ); }

                this.Move();
            },
            /*CharacterBehaviour.FixedUpdate end.*/

            /*CharacterBehaviour.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#Move", this ); }

                if (this.moveByJoystick.IsCanMove()) {
                    this.moveByJoystick.MovePhysic();
                    this.SetLookAt();
                    /* if (!isMoving)
                    {
                       movingEff.ForEach((eff) => eff.SetActive(true));
                       characterAnimator.ChangeAnimRun();
                       isMoving = true;
                    }*/
                    this.characterAnimator.ChangeAnimRun();
                    this.characterAnimator.ChangeCarryState(false);
                } else {
                    /* movingEff.ForEach((eff) => eff.SetActive(false));
                    characterAnimator.ChangeAnimIdle();
                    isMoving = false;*/
                    this.characterAnimator.ChangeAnimIdle();
                    this.moveByJoystick.StopMove();
                    this.characterAnimator.ChangeCarryState(false);
                }
            },
            /*CharacterBehaviour.Move end.*/

            /*CharacterBehaviour.SetLookAt start.*/
            SetLookAt: function () {
if ( TRACE ) { TRACE( "CharacterBehaviour#SetLookAt", this ); }

                this.moveByJoystick.LookAtMove();
            },
            /*CharacterBehaviour.SetLookAt end.*/


        }
    });
    /*CharacterBehaviour end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            handleRange: 0,
            deadZone: 0,
            axisOptions: 0,
            snapX: false,
            snapY: false,
            background: null,
            handle$1: null,
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

                    return (this.snapX) ? this.SnapFloat(this.input.x, AxisOptions.Horizontal) : this.input.x;
                }
            },
            Vertical: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Vertical#get", this ); }

                    return (this.snapY) ? this.SnapFloat(this.input.y, AxisOptions.Vertical) : this.input.y;
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
                this.handleRange = 1;
                this.deadZone = 0;
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
                /* background.pivot = center;
                handle.anchorMin = center;
                handle.anchorMax = center;
                handle.pivot = center;*/
                //    handle.anchoredPosition = Vector2.zero;
            },
            /*Joystick.Start end.*/

            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerDown", this ); }

                if (Bridge.referenceEquals(this.handle$1, null)) {
                    this.handle$1 = this.handleObj.GetComponent(UnityEngine.RectTransform);
                    return;
                }
                this.OnDrag(eventData);
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
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2 ) );
                this.input = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize().$clone(), radius.$clone(), this.cam);
                this.handle$1.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "Joystick#HandleInput", this ); }

                if (magnitude > this.deadZone) {
                    if (magnitude > 1) {
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
                } else {
                    if (this.axisOptions === AxisOptions.Vertical) {
                        this.input = new pc.Vec2( 0.0, this.input.y );
                    }
                }
            },
            /*Joystick.FormatInput end.*/

            /*Joystick.SnapFloat start.*/
            SnapFloat: function (value, snapAxis) {
if ( TRACE ) { TRACE( "Joystick#SnapFloat", this ); }

                if (value === 0) {
                    return value;
                }

                if (this.axisOptions === AxisOptions.Both) {
                    var angle = pc.Vec2.angle( this.input, pc.Vec2.UP.clone() );
                    if (snapAxis === AxisOptions.Horizontal) {
                        if (angle < 22.5 || angle > 157.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    } else if (snapAxis === AxisOptions.Vertical) {
                        if (angle > 67.5 && angle < 112.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    }
                    return value;
                } else {
                    if (value > 0) {
                        return 1;
                    }
                    if (value < 0) {
                        return -1;
                    }
                }
                return 0;
            },
            /*Joystick.SnapFloat end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerUp", this ); }

                this.input = pc.Vec2.ZERO.clone();
                this.handle$1.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
if ( TRACE ) { TRACE( "Joystick#ScreenPointToAnchoredPosition", this ); }

                var localPoint = { v : pc.Vec2.ZERO.clone() };
                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    return localPoint.v.$clone().sub( (this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta )) ).add( pivotOffset );
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
                    default: 
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
                    default: 
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

                this.valueText.text = "Current Value: " + this.variableJoystick.Direction;
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
                if (this.vtVelocity.x !== 0 || this.vtVelocity.z !== 0) {
                    this.vtVelocity.y = 0;
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

                return this.variableJoystick.Vertical !== 0 || this.variableJoystick.Horizontal !== 0;
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
                this.moveThreshold = 1;
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

                //ActiveVisual(true);
                //objParent.gameObject.SetActive(true);
                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerDown end.*/

            /*DynamicJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerUp", this ); }

                //ActiveVisual(false);
                //objParent.gameObject.SetActive(false);
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
                    return;
                }
                Joystick.prototype.OnDrag.call(this, eventData);
            },
            /*DynamicJoystick.OnDrag end.*/

            /*DynamicJoystick.ActiveVisual start.*/
            ActiveVisual: function (isActive) {
if ( TRACE ) { TRACE( "DynamicJoystick#ActiveVisual", this ); }

                this.imgHandle.color = isActive ? this.on.$clone() : this.off.$clone();
                this.imgBG.color = isActive ? this.on.$clone() : this.off.$clone();
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
                this.moveThreshold = 1;
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

                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                    this.background.gameObject.SetActive(true);
                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*VariableJoystick.OnPointerDown end.*/

            /*VariableJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerUp", this ); }

                if (this.joystickType !== JoystickType.Fixed) {
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
        $n = ["System","UnityEngine","UnityEngine.UI","UnityEngine.EventSystems"];

    /*FollowPosition start.*/
    $m("FollowPosition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"objFollow","t":4,"rt":$n[1].Transform,"sn":"objFollow"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smooth","t":4,"rt":$n[0].Single,"sn":"smooth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"},{"a":1,"n":"vtDel","t":4,"rt":$n[1].Vector3,"sn":"vtDel"}]}; }, $n);
    /*FollowPosition end.*/

    /*CharacterAnimator start.*/
    $m("CharacterAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ChangeAnimIdle","t":8,"sn":"ChangeAnimIdle","rt":$n[0].Void},{"a":2,"n":"ChangeAnimRun","t":8,"sn":"ChangeAnimRun","rt":$n[0].Void},{"a":2,"n":"ChangeCarryState","t":8,"pi":[{"n":"isCarry","pt":$n[0].Boolean,"ps":0}],"sn":"ChangeCarryState","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator"},{"a":1,"n":"keyCarry","t":4,"rt":$n[0].String,"sn":"keyCarry","ro":true},{"a":1,"n":"keyIdle","t":4,"rt":$n[0].String,"sn":"keyIdle","ro":true},{"a":1,"n":"keyRun","t":4,"rt":$n[0].String,"sn":"keyRun","ro":true},{"a":1,"n":"moveSpeedHash","t":4,"rt":$n[0].Int32,"sn":"moveSpeedHash","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*CharacterAnimator end.*/

    /*CharacterBehaviour start.*/
    $m("CharacterBehaviour", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"SetLookAt","t":8,"sn":"SetLookAt","rt":$n[0].Void},{"a":2,"n":"debug","t":8,"sn":"debug","rt":$n[0].Void},{"a":2,"n":"characterAnimator","t":4,"rt":CharacterAnimator,"sn":"characterAnimator"},{"a":2,"n":"moveByJoystick","t":4,"rt":MoveByJoystick,"sn":"moveByJoystick"}]}; }, $n);
    /*CharacterBehaviour end.*/

    /*MoveByJoystick start.*/
    $m("MoveByJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"IsCanMove","t":8,"sn":"IsCanMove","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LookAtMove","t":8,"sn":"LookAtMove","rt":$n[0].Void},{"a":2,"n":"LookAtTarget","t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0}],"sn":"LookAtTarget","rt":$n[0].Void,"p":[$n[1].Transform]},{"a":2,"n":"MovePhysic","t":8,"sn":"MovePhysic","rt":$n[0].Void},{"a":2,"n":"SetVectorVelocity","t":8,"pi":[{"n":"v","pt":$n[0].Single,"ps":0},{"n":"h","pt":$n[0].Single,"ps":1}],"sn":"SetVectorVelocity","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"StopMove","t":8,"sn":"StopMove","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoothMove","t":4,"rt":$n[0].Single,"sn":"smoothMove","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoothRotation","t":4,"rt":$n[0].Single,"sn":"smoothRotation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoothRotationByTarget","t":4,"rt":$n[0].Single,"sn":"smoothRotationByTarget","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transf","t":4,"rt":$n[1].Transform,"sn":"transf"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"variableJoystick","t":4,"rt":Joystick,"sn":"variableJoystick"},{"a":1,"n":"vtDirrectMove","t":4,"rt":$n[1].Vector3,"sn":"vtDirrectMove"},{"a":1,"n":"vtVelocity","t":4,"rt":$n[1].Vector3,"sn":"vtVelocity"}]}; }, $n);
    /*MoveByJoystick end.*/

    /*JoystickPlayerExample start.*/
    $m("JoystickPlayerExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    $m("JoystickSetterExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AxisChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"AxisChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"ModeChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ModeChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SnapX","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapX","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SnapY","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapY","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"axisSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"axisSprites"},{"a":2,"n":"background","t":4,"rt":$n[2].Image,"sn":"background"},{"a":2,"n":"valueText","t":4,"rt":$n[2].Text,"sn":"valueText"},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickSetterExample end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[0].Void},{"v":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"v":true,"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"v":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"v":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":3,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"SnapFloat","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"snapAxis","pt":AxisOptions,"ps":1}],"sn":"SnapFloat","rt":$n[0].Single,"p":[$n[0].Single,AxisOptions],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"AxisOptions","t":16,"rt":AxisOptions,"g":{"a":2,"n":"get_AxisOptions","t":8,"rt":AxisOptions,"fg":"AxisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},"s":{"a":2,"n":"set_AxisOptions","t":8,"p":[AxisOptions],"rt":$n[0].Void,"fs":"AxisOptions"},"fn":"AxisOptions"},{"a":2,"n":"DeadZone","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_DeadZone","t":8,"rt":$n[0].Single,"fg":"DeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_DeadZone","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"DeadZone"},"fn":"DeadZone"},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"HandleRange","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HandleRange","t":8,"rt":$n[0].Single,"fg":"HandleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandleRange","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HandleRange"},"fn":"HandleRange"},{"a":2,"n":"Horizontal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[0].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"SnapX","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapX","t":8,"rt":$n[0].Boolean,"fg":"SnapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapX","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapX"},"fn":"SnapX"},{"a":2,"n":"SnapY","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapY","t":8,"rt":$n[0].Boolean,"fg":"SnapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapY","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapY"},"fn":"SnapY"},{"a":2,"n":"Vertical","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[0].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axisOptions","t":4,"rt":AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"background","t":4,"rt":$n[1].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[1].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[1].Canvas,"sn":"canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"handle","t":4,"rt":$n[1].RectTransform,"sn":"handle$1"},{"a":2,"n":"handleObj","t":4,"rt":$n[1].GameObject,"sn":"handleObj"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRange","t":4,"rt":$n[0].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"input","t":4,"rt":$n[1].Vector2,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapX","t":4,"rt":$n[0].Boolean,"sn":"snapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapY","t":4,"rt":$n[0].Boolean,"sn":"snapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Joystick end.*/

    /*AxisOptions start.*/
    $m("AxisOptions", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}}]}; }, $n);
    /*AxisOptions end.*/

    /*DynamicJoystick start.*/
    $m("DynamicJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActiveVisual","t":8,"pi":[{"n":"isActive","pt":$n[0].Boolean,"ps":0}],"sn":"ActiveVisual","rt":$n[0].Void,"p":[$n[0].Boolean]},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":2,"n":"imgBG","t":4,"rt":$n[2].Image,"sn":"imgBG"},{"a":2,"n":"imgHandle","t":4,"rt":$n[2].Image,"sn":"imgHandle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"off","t":4,"rt":$n[1].Color,"sn":"off"},{"a":2,"n":"on","t":4,"rt":$n[1].Color,"sn":"on"}]}; }, $n);
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    $m("FixedJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    $m("FloatingJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    $m("VariableJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"SetMode","t":8,"pi":[{"n":"joystickType","pt":JoystickType,"ps":0}],"sn":"SetMode","rt":$n[0].Void,"p":[JoystickType]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":1,"n":"fixedPosition","t":4,"rt":$n[1].Vector2,"sn":"fixedPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickType","t":4,"rt":JoystickType,"sn":"joystickType","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*VariableJoystick end.*/

    /*JoystickType start.*/
    $m("JoystickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dynamic","is":true,"t":4,"rt":JoystickType,"sn":"Dynamic","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Fixed","is":true,"t":4,"rt":JoystickType,"sn":"Fixed","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Floating","is":true,"t":4,"rt":JoystickType,"sn":"Floating","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}}]}; }, $n);
    /*JoystickType end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
