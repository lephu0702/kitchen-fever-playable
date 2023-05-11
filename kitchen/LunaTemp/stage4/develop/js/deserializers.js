var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.JointSpring' )
  var i2581 = data
  i2580.spring = i2581[0]
  i2580.damper = i2581[1]
  i2580.targetPosition = i2581[2]
  return i2580
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.JointMotor' )
  var i2583 = data
  i2582.m_TargetVelocity = i2583[0]
  i2582.m_Force = i2583[1]
  i2582.m_FreeSpin = i2583[2]
  return i2582
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2584 = root || request.c( 'UnityEngine.JointLimits' )
  var i2585 = data
  i2584.m_Min = i2585[0]
  i2584.m_Max = i2585[1]
  i2584.m_Bounciness = i2585[2]
  i2584.m_BounceMinVelocity = i2585[3]
  i2584.m_ContactDistance = i2585[4]
  i2584.minBounce = i2585[5]
  i2584.maxBounce = i2585[6]
  return i2584
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2586 = root || request.c( 'UnityEngine.JointDrive' )
  var i2587 = data
  i2586.m_PositionSpring = i2587[0]
  i2586.m_PositionDamper = i2587[1]
  i2586.m_MaximumForce = i2587[2]
  return i2586
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2588 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2589 = data
  i2588.m_Spring = i2589[0]
  i2588.m_Damper = i2589[1]
  return i2588
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2591 = data
  i2590.m_Limit = i2591[0]
  i2590.m_Bounciness = i2591[1]
  i2590.m_ContactDistance = i2591[2]
  return i2590
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2592 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2593 = data
  i2592.m_ExtremumSlip = i2593[0]
  i2592.m_ExtremumValue = i2593[1]
  i2592.m_AsymptoteSlip = i2593[2]
  i2592.m_AsymptoteValue = i2593[3]
  i2592.m_Stiffness = i2593[4]
  return i2592
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2594 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2595 = data
  i2594.m_LowerAngle = i2595[0]
  i2594.m_UpperAngle = i2595[1]
  return i2594
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2597 = data
  i2596.m_MotorSpeed = i2597[0]
  i2596.m_MaximumMotorTorque = i2597[1]
  return i2596
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2599 = data
  i2598.m_DampingRatio = i2599[0]
  i2598.m_Frequency = i2599[1]
  i2598.m_Angle = i2599[2]
  return i2598
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2600 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2601 = data
  i2600.m_LowerTranslation = i2601[0]
  i2600.m_UpperTranslation = i2601[1]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2602 = root || new pc.UnityMaterial()
  var i2603 = data
  i2602.name = i2603[0]
  request.r(i2603[1], i2603[2], 0, i2602, 'shader')
  i2602.renderQueue = i2603[3]
  i2602.enableInstancing = !!i2603[4]
  var i2605 = i2603[5]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2605[i + 0]) );
  }
  i2602.floatParameters = i2604
  var i2607 = i2603[6]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2607[i + 0]) );
  }
  i2602.colorParameters = i2606
  var i2609 = i2603[7]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2609[i + 0]) );
  }
  i2602.vectorParameters = i2608
  var i2611 = i2603[8]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2611[i + 0]) );
  }
  i2602.textureParameters = i2610
  var i2613 = i2603[9]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2613[i + 0]) );
  }
  i2602.materialFlags = i2612
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2617 = data
  i2616.name = i2617[0]
  i2616.value = i2617[1]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2621 = data
  i2620.name = i2621[0]
  i2620.value = new pc.Color(i2621[1], i2621[2], i2621[3], i2621[4])
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2625 = data
  i2624.name = i2625[0]
  i2624.value = new pc.Vec4( i2625[1], i2625[2], i2625[3], i2625[4] )
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2629 = data
  i2628.name = i2629[0]
  request.r(i2629[1], i2629[2], 0, i2628, 'value')
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2633 = data
  i2632.name = i2633[0]
  i2632.enabled = !!i2633[1]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2635 = data
  i2634.position = new pc.Vec3( i2635[0], i2635[1], i2635[2] )
  i2634.scale = new pc.Vec3( i2635[3], i2635[4], i2635[5] )
  i2634.rotation = new pc.Quat(i2635[6], i2635[7], i2635[8], i2635[9])
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2637 = data
  i2636.name = i2637[0]
  i2636.tagId = i2637[1]
  i2636.enabled = !!i2637[2]
  i2636.isStatic = !!i2637[3]
  i2636.layer = i2637[4]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2639 = data
  i2638.enabled = !!i2639[0]
  request.r(i2639[1], i2639[2], 0, i2638, 'sharedMaterial')
  var i2641 = i2639[3]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 2) {
  request.r(i2641[i + 0], i2641[i + 1], 2, i2640, '')
  }
  i2638.sharedMaterials = i2640
  i2638.receiveShadows = !!i2639[4]
  i2638.shadowCastingMode = i2639[5]
  i2638.sortingLayerID = i2639[6]
  i2638.sortingOrder = i2639[7]
  i2638.lightmapIndex = i2639[8]
  i2638.lightmapSceneIndex = i2639[9]
  i2638.lightmapScaleOffset = new pc.Vec4( i2639[10], i2639[11], i2639[12], i2639[13] )
  i2638.lightProbeUsage = i2639[14]
  i2638.reflectionProbeUsage = i2639[15]
  request.r(i2639[16], i2639[17], 0, i2638, 'sharedMesh')
  var i2643 = i2639[18]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 2) {
  request.r(i2643[i + 0], i2643[i + 1], 2, i2642, '')
  }
  i2638.bones = i2642
  i2638.updateWhenOffscreen = !!i2639[19]
  i2638.localBounds = i2639[20]
  request.r(i2639[21], i2639[22], 0, i2638, 'rootBone')
  var i2645 = i2639[23]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2645[i + 0]) );
  }
  i2638.blendShapesWeights = i2644
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2653 = data
  i2652.weight = i2653[0]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2655 = data
  i2654.name = i2655[0]
  i2654.width = i2655[1]
  i2654.height = i2655[2]
  i2654.mipmapCount = i2655[3]
  i2654.anisoLevel = i2655[4]
  i2654.filterMode = i2655[5]
  i2654.hdr = !!i2655[6]
  i2654.format = i2655[7]
  i2654.wrapMode = i2655[8]
  i2654.alphaIsTransparency = !!i2655[9]
  i2654.alphaSource = i2655[10]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2657 = data
  i2656.name = i2657[0]
  i2656.halfPrecision = !!i2657[1]
  i2656.vertexCount = i2657[2]
  i2656.aabb = i2657[3]
  var i2659 = i2657[4]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( !!i2659[i + 0] );
  }
  i2656.streams = i2658
  i2656.vertices = i2657[5]
  var i2661 = i2657[6]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2661[i + 0]) );
  }
  i2656.subMeshes = i2660
  var i2663 = i2657[7]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 16) {
    i2662.push( new pc.Mat4().setData(i2663[i + 0], i2663[i + 1], i2663[i + 2], i2663[i + 3],  i2663[i + 4], i2663[i + 5], i2663[i + 6], i2663[i + 7],  i2663[i + 8], i2663[i + 9], i2663[i + 10], i2663[i + 11],  i2663[i + 12], i2663[i + 13], i2663[i + 14], i2663[i + 15]) );
  }
  i2656.bindposes = i2662
  var i2665 = i2657[8]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2665[i + 0]) );
  }
  i2656.blendShapes = i2664
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2671 = data
  i2670.triangles = i2671[0]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2677 = data
  i2676.name = i2677[0]
  var i2679 = i2677[1]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2679[i + 0]) );
  }
  i2676.frames = i2678
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2681 = data
  request.r(i2681[0], i2681[1], 0, i2680, 'sharedMesh')
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2683 = data
  request.r(i2683[0], i2683[1], 0, i2682, 'additionalVertexStreams')
  i2682.enabled = !!i2683[2]
  request.r(i2683[3], i2683[4], 0, i2682, 'sharedMaterial')
  var i2685 = i2683[5]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 2) {
  request.r(i2685[i + 0], i2685[i + 1], 2, i2684, '')
  }
  i2682.sharedMaterials = i2684
  i2682.receiveShadows = !!i2683[6]
  i2682.shadowCastingMode = i2683[7]
  i2682.sortingLayerID = i2683[8]
  i2682.sortingOrder = i2683[9]
  i2682.lightmapIndex = i2683[10]
  i2682.lightmapSceneIndex = i2683[11]
  i2682.lightmapScaleOffset = new pc.Vec4( i2683[12], i2683[13], i2683[14], i2683[15] )
  i2682.lightProbeUsage = i2683[16]
  i2682.reflectionProbeUsage = i2683[17]
  return i2682
}

Deserializers["StackObject"] = function (request, data, root) {
  var i2686 = root || request.c( 'StackObject' )
  var i2687 = data
  request.r(i2687[0], i2687[1], 0, i2686, 'transf')
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2689 = data
  i2688.playAutomatically = !!i2689[0]
  request.r(i2689[1], i2689[2], 0, i2688, 'clip')
  var i2691 = i2689[3]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 2) {
  request.r(i2691[i + 0], i2691[i + 1], 2, i2690, '')
  }
  i2688.clips = i2690
  i2688.wrapMode = i2689[4]
  i2688.enabled = !!i2689[5]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2695 = data
  i2694.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2695[0], i2694.main)
  i2694.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2695[1], i2694.colorBySpeed)
  i2694.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2695[2], i2694.colorOverLifetime)
  i2694.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2695[3], i2694.emission)
  i2694.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2695[4], i2694.rotationBySpeed)
  i2694.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2695[5], i2694.rotationOverLifetime)
  i2694.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2695[6], i2694.shape)
  i2694.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2695[7], i2694.sizeBySpeed)
  i2694.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2695[8], i2694.sizeOverLifetime)
  i2694.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2695[9], i2694.textureSheetAnimation)
  i2694.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2695[10], i2694.velocityOverLifetime)
  i2694.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2695[11], i2694.noise)
  i2694.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2695[12], i2694.inheritVelocity)
  i2694.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2695[13], i2694.forceOverLifetime)
  i2694.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2695[14], i2694.limitVelocityOverLifetime)
  i2694.useAutoRandomSeed = !!i2695[15]
  i2694.randomSeed = i2695[16]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2696 = root || new pc.ParticleSystemMain()
  var i2697 = data
  i2696.duration = i2697[0]
  i2696.loop = !!i2697[1]
  i2696.prewarm = !!i2697[2]
  i2696.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[3], i2696.startDelay)
  i2696.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[4], i2696.startLifetime)
  i2696.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[5], i2696.startSpeed)
  i2696.startSize3D = !!i2697[6]
  i2696.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[7], i2696.startSizeX)
  i2696.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[8], i2696.startSizeY)
  i2696.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[9], i2696.startSizeZ)
  i2696.startRotation3D = !!i2697[10]
  i2696.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[11], i2696.startRotationX)
  i2696.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[12], i2696.startRotationY)
  i2696.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[13], i2696.startRotationZ)
  i2696.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2697[14], i2696.startColor)
  i2696.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[15], i2696.gravityModifier)
  i2696.simulationSpace = i2697[16]
  request.r(i2697[17], i2697[18], 0, i2696, 'customSimulationSpace')
  i2696.simulationSpeed = i2697[19]
  i2696.useUnscaledTime = !!i2697[20]
  i2696.scalingMode = i2697[21]
  i2696.playOnAwake = !!i2697[22]
  i2696.maxParticles = i2697[23]
  i2696.emitterVelocityMode = i2697[24]
  i2696.stopAction = i2697[25]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2698 = root || new pc.MinMaxCurve()
  var i2699 = data
  i2698.mode = i2699[0]
  i2698.curveMin = new pc.AnimationCurve( { keys_flow: i2699[1] } )
  i2698.curveMax = new pc.AnimationCurve( { keys_flow: i2699[2] } )
  i2698.curveMultiplier = i2699[3]
  i2698.constantMin = i2699[4]
  i2698.constantMax = i2699[5]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2700 = root || new pc.MinMaxGradient()
  var i2701 = data
  i2700.mode = i2701[0]
  i2700.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2701[1], i2700.gradientMin)
  i2700.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2701[2], i2700.gradientMax)
  i2700.colorMin = new pc.Color(i2701[3], i2701[4], i2701[5], i2701[6])
  i2700.colorMax = new pc.Color(i2701[7], i2701[8], i2701[9], i2701[10])
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2703 = data
  i2702.mode = i2703[0]
  var i2705 = i2703[1]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2705[i + 0]) );
  }
  i2702.colorKeys = i2704
  var i2707 = i2703[2]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2707[i + 0]) );
  }
  i2702.alphaKeys = i2706
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2708 = root || new pc.ParticleSystemColorBySpeed()
  var i2709 = data
  i2708.enabled = !!i2709[0]
  i2708.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2709[1], i2708.color)
  i2708.range = new pc.Vec2( i2709[2], i2709[3] )
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2713 = data
  i2712.color = new pc.Color(i2713[0], i2713[1], i2713[2], i2713[3])
  i2712.time = i2713[4]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2717 = data
  i2716.alpha = i2717[0]
  i2716.time = i2717[1]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2718 = root || new pc.ParticleSystemColorOverLifetime()
  var i2719 = data
  i2718.enabled = !!i2719[0]
  i2718.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2719[1], i2718.color)
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2720 = root || new pc.ParticleSystemEmitter()
  var i2721 = data
  i2720.enabled = !!i2721[0]
  i2720.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[1], i2720.rateOverTime)
  i2720.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2721[2], i2720.rateOverDistance)
  var i2723 = i2721[3]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2723[i + 0]) );
  }
  i2720.bursts = i2722
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2726 = root || new pc.ParticleSystemBurst()
  var i2727 = data
  i2726.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2727[0], i2726.count)
  i2726.cycleCount = i2727[1]
  i2726.minCount = i2727[2]
  i2726.maxCount = i2727[3]
  i2726.repeatInterval = i2727[4]
  i2726.time = i2727[5]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2728 = root || new pc.ParticleSystemRotationBySpeed()
  var i2729 = data
  i2728.enabled = !!i2729[0]
  i2728.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2729[1], i2728.x)
  i2728.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2729[2], i2728.y)
  i2728.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2729[3], i2728.z)
  i2728.separateAxes = !!i2729[4]
  i2728.range = new pc.Vec2( i2729[5], i2729[6] )
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2730 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2731 = data
  i2730.enabled = !!i2731[0]
  i2730.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2731[1], i2730.x)
  i2730.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2731[2], i2730.y)
  i2730.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2731[3], i2730.z)
  i2730.separateAxes = !!i2731[4]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2732 = root || new pc.ParticleSystemShape()
  var i2733 = data
  i2732.enabled = !!i2733[0]
  i2732.shapeType = i2733[1]
  i2732.randomDirectionAmount = i2733[2]
  i2732.sphericalDirectionAmount = i2733[3]
  i2732.randomPositionAmount = i2733[4]
  i2732.alignToDirection = !!i2733[5]
  i2732.radius = i2733[6]
  i2732.radiusMode = i2733[7]
  i2732.radiusSpread = i2733[8]
  i2732.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2733[9], i2732.radiusSpeed)
  i2732.radiusThickness = i2733[10]
  i2732.angle = i2733[11]
  i2732.length = i2733[12]
  i2732.boxThickness = new pc.Vec3( i2733[13], i2733[14], i2733[15] )
  i2732.meshShapeType = i2733[16]
  request.r(i2733[17], i2733[18], 0, i2732, 'mesh')
  request.r(i2733[19], i2733[20], 0, i2732, 'meshRenderer')
  request.r(i2733[21], i2733[22], 0, i2732, 'skinnedMeshRenderer')
  i2732.useMeshMaterialIndex = !!i2733[23]
  i2732.meshMaterialIndex = i2733[24]
  i2732.useMeshColors = !!i2733[25]
  i2732.normalOffset = i2733[26]
  i2732.arc = i2733[27]
  i2732.arcMode = i2733[28]
  i2732.arcSpread = i2733[29]
  i2732.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2733[30], i2732.arcSpeed)
  i2732.donutRadius = i2733[31]
  i2732.position = new pc.Vec3( i2733[32], i2733[33], i2733[34] )
  i2732.rotation = new pc.Vec3( i2733[35], i2733[36], i2733[37] )
  i2732.scale = new pc.Vec3( i2733[38], i2733[39], i2733[40] )
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2734 = root || new pc.ParticleSystemSizeBySpeed()
  var i2735 = data
  i2734.enabled = !!i2735[0]
  i2734.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2735[1], i2734.x)
  i2734.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2735[2], i2734.y)
  i2734.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2735[3], i2734.z)
  i2734.separateAxes = !!i2735[4]
  i2734.range = new pc.Vec2( i2735[5], i2735[6] )
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2736 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2737 = data
  i2736.enabled = !!i2737[0]
  i2736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2737[1], i2736.x)
  i2736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2737[2], i2736.y)
  i2736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2737[3], i2736.z)
  i2736.separateAxes = !!i2737[4]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2738 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2739 = data
  i2738.enabled = !!i2739[0]
  i2738.mode = i2739[1]
  i2738.animation = i2739[2]
  i2738.numTilesX = i2739[3]
  i2738.numTilesY = i2739[4]
  i2738.useRandomRow = !!i2739[5]
  i2738.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2739[6], i2738.frameOverTime)
  i2738.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2739[7], i2738.startFrame)
  i2738.cycleCount = i2739[8]
  i2738.rowIndex = i2739[9]
  i2738.flipU = i2739[10]
  i2738.flipV = i2739[11]
  i2738.spriteCount = i2739[12]
  var i2741 = i2739[13]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 2) {
  request.r(i2741[i + 0], i2741[i + 1], 2, i2740, '')
  }
  i2738.sprites = i2740
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2744 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2745 = data
  i2744.enabled = !!i2745[0]
  i2744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[1], i2744.x)
  i2744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[2], i2744.y)
  i2744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[3], i2744.z)
  i2744.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2745[4], i2744.speedModifier)
  i2744.space = i2745[5]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2746 = root || new pc.ParticleSystemNoise()
  var i2747 = data
  i2746.enabled = !!i2747[0]
  i2746.separateAxes = !!i2747[1]
  i2746.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[2], i2746.strengthX)
  i2746.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[3], i2746.strengthY)
  i2746.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[4], i2746.strengthZ)
  i2746.frequency = i2747[5]
  i2746.damping = !!i2747[6]
  i2746.octaveCount = i2747[7]
  i2746.octaveMultiplier = i2747[8]
  i2746.octaveScale = i2747[9]
  i2746.quality = i2747[10]
  i2746.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[11], i2746.scrollSpeed)
  i2746.scrollSpeedMultiplier = i2747[12]
  i2746.remapEnabled = !!i2747[13]
  i2746.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[14], i2746.remapX)
  i2746.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[15], i2746.remapY)
  i2746.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[16], i2746.remapZ)
  i2746.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[17], i2746.positionAmount)
  i2746.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[18], i2746.rotationAmount)
  i2746.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2747[19], i2746.sizeAmount)
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2748 = root || new pc.ParticleSystemInheritVelocity()
  var i2749 = data
  i2748.enabled = !!i2749[0]
  i2748.mode = i2749[1]
  i2748.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2749[2], i2748.curve)
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2750 = root || new pc.ParticleSystemForceOverLifetime()
  var i2751 = data
  i2750.enabled = !!i2751[0]
  i2750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[1], i2750.x)
  i2750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[2], i2750.y)
  i2750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2751[3], i2750.z)
  i2750.space = i2751[4]
  i2750.randomized = !!i2751[5]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2752 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2753 = data
  i2752.enabled = !!i2753[0]
  i2752.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[1], i2752.limit)
  i2752.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[2], i2752.limitX)
  i2752.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[3], i2752.limitY)
  i2752.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[4], i2752.limitZ)
  i2752.dampen = i2753[5]
  i2752.separateAxes = !!i2753[6]
  i2752.space = i2753[7]
  i2752.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[8], i2752.drag)
  i2752.multiplyDragByParticleSize = !!i2753[9]
  i2752.multiplyDragByParticleVelocity = !!i2753[10]
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2755 = data
  i2754.enabled = !!i2755[0]
  request.r(i2755[1], i2755[2], 0, i2754, 'sharedMaterial')
  var i2757 = i2755[3]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 2) {
  request.r(i2757[i + 0], i2757[i + 1], 2, i2756, '')
  }
  i2754.sharedMaterials = i2756
  i2754.receiveShadows = !!i2755[4]
  i2754.shadowCastingMode = i2755[5]
  i2754.sortingLayerID = i2755[6]
  i2754.sortingOrder = i2755[7]
  i2754.lightmapIndex = i2755[8]
  i2754.lightmapSceneIndex = i2755[9]
  i2754.lightmapScaleOffset = new pc.Vec4( i2755[10], i2755[11], i2755[12], i2755[13] )
  i2754.lightProbeUsage = i2755[14]
  i2754.reflectionProbeUsage = i2755[15]
  request.r(i2755[16], i2755[17], 0, i2754, 'mesh')
  i2754.meshCount = i2755[18]
  i2754.activeVertexStreamsCount = i2755[19]
  i2754.alignment = i2755[20]
  i2754.renderMode = i2755[21]
  i2754.sortMode = i2755[22]
  i2754.lengthScale = i2755[23]
  i2754.velocityScale = i2755[24]
  i2754.cameraVelocityScale = i2755[25]
  i2754.normalDirection = i2755[26]
  i2754.sortingFudge = i2755[27]
  i2754.minParticleSize = i2755[28]
  i2754.maxParticleSize = i2755[29]
  i2754.pivot = new pc.Vec3( i2755[30], i2755[31], i2755[32] )
  request.r(i2755[33], i2755[34], 0, i2754, 'trailMaterial')
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2759 = data
  i2758.name = i2759[0]
  i2758.atlasId = i2759[1]
  i2758.mipmapCount = i2759[2]
  i2758.hdr = !!i2759[3]
  i2758.size = i2759[4]
  i2758.anisoLevel = i2759[5]
  i2758.filterMode = i2759[6]
  i2758.wrapMode = i2759[7]
  var i2761 = i2759[8]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 4) {
    i2760.push( UnityEngine.Rect.MinMaxRect(i2761[i + 0], i2761[i + 1], i2761[i + 2], i2761[i + 3]) );
  }
  i2758.rects = i2760
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2765 = data
  i2764.name = i2765[0]
  i2764.index = i2765[1]
  i2764.startup = !!i2765[2]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2767 = data
  i2766.enabled = !!i2767[0]
  i2766.aspect = i2767[1]
  i2766.orthographic = !!i2767[2]
  i2766.orthographicSize = i2767[3]
  i2766.backgroundColor = new pc.Color(i2767[4], i2767[5], i2767[6], i2767[7])
  i2766.nearClipPlane = i2767[8]
  i2766.farClipPlane = i2767[9]
  i2766.fieldOfView = i2767[10]
  i2766.depth = i2767[11]
  i2766.clearFlags = i2767[12]
  i2766.cullingMask = i2767[13]
  i2766.rect = i2767[14]
  request.r(i2767[15], i2767[16], 0, i2766, 'targetTexture')
  i2766.usePhysicalProperties = !!i2767[17]
  i2766.focalLength = i2767[18]
  i2766.sensorSize = new pc.Vec2( i2767[19], i2767[20] )
  i2766.lensShift = new pc.Vec2( i2767[21], i2767[22] )
  i2766.gateFit = i2767[23]
  return i2766
}

Deserializers["FollowPosition"] = function (request, data, root) {
  var i2768 = root || request.c( 'FollowPosition' )
  var i2769 = data
  request.r(i2769[0], i2769[1], 0, i2768, 'objFollow')
  request.r(i2769[2], i2769[3], 0, i2768, 'target')
  i2768.smooth = i2769[4]
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2771 = data
  i2770.enabled = !!i2771[0]
  i2770.type = i2771[1]
  i2770.color = new pc.Color(i2771[2], i2771[3], i2771[4], i2771[5])
  i2770.cullingMask = i2771[6]
  i2770.intensity = i2771[7]
  i2770.range = i2771[8]
  i2770.spotAngle = i2771[9]
  i2770.shadows = i2771[10]
  i2770.shadowNormalBias = i2771[11]
  i2770.shadowBias = i2771[12]
  i2770.shadowStrength = i2771[13]
  i2770.shadowResolution = i2771[14]
  i2770.lightmapBakeType = i2771[15]
  i2770.renderMode = i2771[16]
  request.r(i2771[17], i2771[18], 0, i2770, 'cookie')
  i2770.cookieSize = i2771[19]
  return i2770
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2772 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2773 = data
  request.r(i2773[0], i2773[1], 0, i2772, 'm_FirstSelected')
  i2772.m_sendNavigationEvents = !!i2773[2]
  i2772.m_DragThreshold = i2773[3]
  return i2772
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2774 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2775 = data
  i2774.m_HorizontalAxis = i2775[0]
  i2774.m_VerticalAxis = i2775[1]
  i2774.m_SubmitButton = i2775[2]
  i2774.m_CancelButton = i2775[3]
  i2774.m_InputActionsPerSecond = i2775[4]
  i2774.m_RepeatDelay = i2775[5]
  i2774.m_ForceModuleActive = !!i2775[6]
  i2774.m_SendPointerHoverToParent = !!i2775[7]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2777 = data
  i2776.pivot = new pc.Vec2( i2777[0], i2777[1] )
  i2776.anchorMin = new pc.Vec2( i2777[2], i2777[3] )
  i2776.anchorMax = new pc.Vec2( i2777[4], i2777[5] )
  i2776.sizeDelta = new pc.Vec2( i2777[6], i2777[7] )
  i2776.anchoredPosition3D = new pc.Vec3( i2777[8], i2777[9], i2777[10] )
  i2776.rotation = new pc.Quat(i2777[11], i2777[12], i2777[13], i2777[14])
  i2776.scale = new pc.Vec3( i2777[15], i2777[16], i2777[17] )
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2779 = data
  i2778.enabled = !!i2779[0]
  i2778.planeDistance = i2779[1]
  i2778.referencePixelsPerUnit = i2779[2]
  i2778.isFallbackOverlay = !!i2779[3]
  i2778.renderMode = i2779[4]
  i2778.renderOrder = i2779[5]
  i2778.sortingLayerName = i2779[6]
  i2778.sortingOrder = i2779[7]
  i2778.scaleFactor = i2779[8]
  request.r(i2779[9], i2779[10], 0, i2778, 'worldCamera')
  i2778.overrideSorting = !!i2779[11]
  i2778.pixelPerfect = !!i2779[12]
  i2778.targetDisplay = i2779[13]
  i2778.overridePixelPerfect = !!i2779[14]
  return i2778
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2780 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2781 = data
  i2780.m_UiScaleMode = i2781[0]
  i2780.m_ReferencePixelsPerUnit = i2781[1]
  i2780.m_ScaleFactor = i2781[2]
  i2780.m_ReferenceResolution = new pc.Vec2( i2781[3], i2781[4] )
  i2780.m_ScreenMatchMode = i2781[5]
  i2780.m_MatchWidthOrHeight = i2781[6]
  i2780.m_PhysicalUnit = i2781[7]
  i2780.m_FallbackScreenDPI = i2781[8]
  i2780.m_DefaultSpriteDPI = i2781[9]
  i2780.m_DynamicPixelsPerUnit = i2781[10]
  i2780.m_PresetInfoIsWorld = !!i2781[11]
  return i2780
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2782 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2783 = data
  i2782.m_IgnoreReversedGraphics = !!i2783[0]
  i2782.m_BlockingObjects = i2783[1]
  i2782.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2783[2] )
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2785 = data
  i2784.cullTransparentMesh = !!i2785[0]
  return i2784
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2786 = root || request.c( 'UnityEngine.UI.Text' )
  var i2787 = data
  i2786.m_FontData = request.d('UnityEngine.UI.FontData', i2787[0], i2786.m_FontData)
  i2786.m_Text = i2787[1]
  request.r(i2787[2], i2787[3], 0, i2786, 'm_Material')
  i2786.m_Maskable = !!i2787[4]
  i2786.m_Color = new pc.Color(i2787[5], i2787[6], i2787[7], i2787[8])
  i2786.m_RaycastTarget = !!i2787[9]
  i2786.m_RaycastPadding = new pc.Vec4( i2787[10], i2787[11], i2787[12], i2787[13] )
  return i2786
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2788 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2789 = data
  request.r(i2789[0], i2789[1], 0, i2788, 'm_Font')
  i2788.m_FontSize = i2789[2]
  i2788.m_FontStyle = i2789[3]
  i2788.m_BestFit = !!i2789[4]
  i2788.m_MinSize = i2789[5]
  i2788.m_MaxSize = i2789[6]
  i2788.m_Alignment = i2789[7]
  i2788.m_AlignByGeometry = !!i2789[8]
  i2788.m_RichText = !!i2789[9]
  i2788.m_HorizontalOverflow = i2789[10]
  i2788.m_VerticalOverflow = i2789[11]
  i2788.m_LineSpacing = i2789[12]
  return i2788
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2790 = root || request.c( 'UnityEngine.UI.Image' )
  var i2791 = data
  request.r(i2791[0], i2791[1], 0, i2790, 'm_Sprite')
  i2790.m_Type = i2791[2]
  i2790.m_PreserveAspect = !!i2791[3]
  i2790.m_FillCenter = !!i2791[4]
  i2790.m_FillMethod = i2791[5]
  i2790.m_FillAmount = i2791[6]
  i2790.m_FillClockwise = !!i2791[7]
  i2790.m_FillOrigin = i2791[8]
  i2790.m_UseSpriteMesh = !!i2791[9]
  i2790.m_PixelsPerUnitMultiplier = i2791[10]
  request.r(i2791[11], i2791[12], 0, i2790, 'm_Material')
  i2790.m_Maskable = !!i2791[13]
  i2790.m_Color = new pc.Color(i2791[14], i2791[15], i2791[16], i2791[17])
  i2790.m_RaycastTarget = !!i2791[18]
  i2790.m_RaycastPadding = new pc.Vec4( i2791[19], i2791[20], i2791[21], i2791[22] )
  return i2790
}

Deserializers["MoveByPath"] = function (request, data, root) {
  var i2792 = root || request.c( 'MoveByPath' )
  var i2793 = data
  var i2795 = i2793[0]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 2) {
  request.r(i2795[i + 0], i2795[i + 1], 2, i2794, '')
  }
  i2792.paths = i2794
  var i2797 = i2793[1]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 3) {
    i2796.push( new pc.Vec3( i2797[i + 0], i2797[i + 1], i2797[i + 2] ) );
  }
  i2792.path = i2796
  request.r(i2793[2], i2793[3], 0, i2792, 'target')
  i2792.timeMove = i2793[4]
  i2792.isReady = !!i2793[5]
  return i2792
}

Deserializers["DynamicJoystick"] = function (request, data, root) {
  var i2800 = root || request.c( 'DynamicJoystick' )
  var i2801 = data
  request.r(i2801[0], i2801[1], 0, i2800, 'background')
  request.r(i2801[2], i2801[3], 0, i2800, 'handleTranf')
  request.r(i2801[4], i2801[5], 0, i2800, 'handleObj')
  request.r(i2801[6], i2801[7], 0, i2800, 'character')
  i2800.on = new pc.Color(i2801[8], i2801[9], i2801[10], i2801[11])
  i2800.off = new pc.Color(i2801[12], i2801[13], i2801[14], i2801[15])
  request.r(i2801[16], i2801[17], 0, i2800, 'imgBG')
  request.r(i2801[18], i2801[19], 0, i2800, 'imgHandle')
  i2800.moveThreshold = i2801[20]
  i2800.handleRange = i2801[21]
  i2800.deadZone = i2801[22]
  i2800.axisOptions = i2801[23]
  i2800.snapX = !!i2801[24]
  i2800.snapY = !!i2801[25]
  return i2800
}

Deserializers["CharacterBehaviour"] = function (request, data, root) {
  var i2802 = root || request.c( 'CharacterBehaviour' )
  var i2803 = data
  request.r(i2803[0], i2803[1], 0, i2802, 'moveByJoystick')
  request.r(i2803[2], i2803[3], 0, i2802, 'characterAnimator')
  request.r(i2803[4], i2803[5], 0, i2802, 'detectPlaceComponent')
  request.r(i2803[6], i2803[7], 0, i2802, 'stackControl')
  request.r(i2803[8], i2803[9], 0, i2802, 'tut')
  i2802.timeNotMove = i2803[10]
  request.r(i2803[11], i2803[12], 0, i2802, 'effTut')
  i2802.timeCheckMove = i2803[13]
  return i2802
}

Deserializers["MoveByJoystick"] = function (request, data, root) {
  var i2804 = root || request.c( 'MoveByJoystick' )
  var i2805 = data
  i2804.speed = i2805[0]
  request.r(i2805[1], i2805[2], 0, i2804, 'rb')
  request.r(i2805[3], i2805[4], 0, i2804, 'variableJoystick')
  request.r(i2805[5], i2805[6], 0, i2804, 'transf')
  i2804.smoothRotation = i2805[7]
  i2804.smoothMove = i2805[8]
  i2804.smoothRotationByTarget = i2805[9]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2807 = data
  i2806.mass = i2807[0]
  i2806.drag = i2807[1]
  i2806.angularDrag = i2807[2]
  i2806.useGravity = !!i2807[3]
  i2806.isKinematic = !!i2807[4]
  i2806.constraints = i2807[5]
  i2806.maxAngularVelocity = i2807[6]
  i2806.collisionDetectionMode = i2807[7]
  i2806.interpolation = i2807[8]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2809 = data
  i2808.enabled = !!i2809[0]
  i2808.isTrigger = !!i2809[1]
  request.r(i2809[2], i2809[3], 0, i2808, 'material')
  i2808.center = new pc.Vec3( i2809[4], i2809[5], i2809[6] )
  i2808.radius = i2809[7]
  return i2808
}

Deserializers["CharacterAnimator"] = function (request, data, root) {
  var i2810 = root || request.c( 'CharacterAnimator' )
  var i2811 = data
  request.r(i2811[0], i2811[1], 0, i2810, 'animator')
  request.r(i2811[2], i2811[3], 0, i2810, 'objCook')
  return i2810
}

Deserializers["DetectPlaceComponent"] = function (request, data, root) {
  var i2812 = root || request.c( 'DetectPlaceComponent' )
  var i2813 = data
  request.r(i2813[0], i2813[1], 0, i2812, 'character')
  i2812.layerWaitPlace = UnityEngine.LayerMask.FromIntegerValue( i2813[2] )
  i2812.enableDetect = !!i2813[3]
  i2812.detectDelay = i2813[4]
  i2812.radius = i2813[5]
  i2812.timeDelayDetect = i2813[6]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2815 = data
  request.r(i2815[0], i2815[1], 0, i2814, 'animatorController')
  i2814.updateMode = i2815[2]
  var i2817 = i2815[3]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 2) {
  request.r(i2817[i + 0], i2817[i + 1], 2, i2816, '')
  }
  i2814.humanBones = i2816
  i2814.enabled = !!i2815[4]
  return i2814
}

Deserializers["StackControl"] = function (request, data, root) {
  var i2818 = root || request.c( 'StackControl' )
  var i2819 = data
  var i2821 = i2819[0]
  var i2820 = new (System.Collections.Generic.List$1(Bridge.ns('StackObject')))
  for(var i = 0; i < i2821.length; i += 2) {
  request.r(i2821[i + 0], i2821[i + 1], 1, i2820, '')
  }
  i2818.stackObjects = i2820
  var i2823 = i2819[1]
  var i2822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2823.length; i += 2) {
  request.r(i2823[i + 0], i2823[i + 1], 1, i2822, '')
  }
  i2818.stackPositions = i2822
  return i2818
}

Deserializers["CharacterArrowTut"] = function (request, data, root) {
  var i2828 = root || request.c( 'CharacterArrowTut' )
  var i2829 = data
  request.r(i2829[0], i2829[1], 0, i2828, 'target')
  request.r(i2829[2], i2829[3], 0, i2828, 'traf')
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2831 = data
  i2830.enabled = !!i2831[0]
  request.r(i2831[1], i2831[2], 0, i2830, 'sharedMaterial')
  var i2833 = i2831[3]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 2) {
  request.r(i2833[i + 0], i2833[i + 1], 2, i2832, '')
  }
  i2830.sharedMaterials = i2832
  i2830.receiveShadows = !!i2831[4]
  i2830.shadowCastingMode = i2831[5]
  i2830.sortingLayerID = i2831[6]
  i2830.sortingOrder = i2831[7]
  i2830.lightmapIndex = i2831[8]
  i2830.lightmapSceneIndex = i2831[9]
  i2830.lightmapScaleOffset = new pc.Vec4( i2831[10], i2831[11], i2831[12], i2831[13] )
  i2830.lightProbeUsage = i2831[14]
  i2830.reflectionProbeUsage = i2831[15]
  i2830.color = new pc.Color(i2831[16], i2831[17], i2831[18], i2831[19])
  request.r(i2831[20], i2831[21], 0, i2830, 'sprite')
  i2830.flipX = !!i2831[22]
  i2830.flipY = !!i2831[23]
  i2830.drawMode = i2831[24]
  i2830.size = new pc.Vec2( i2831[25], i2831[26] )
  i2830.tileMode = i2831[27]
  i2830.adaptiveModeThreshold = i2831[28]
  i2830.maskInteraction = i2831[29]
  i2830.spriteSortPoint = i2831[30]
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2835 = data
  i2834.center = new pc.Vec3( i2835[0], i2835[1], i2835[2] )
  i2834.size = new pc.Vec3( i2835[3], i2835[4], i2835[5] )
  i2834.enabled = !!i2835[6]
  i2834.isTrigger = !!i2835[7]
  request.r(i2835[8], i2835[9], 0, i2834, 'material')
  return i2834
}

Deserializers["CollectObjectPlace"] = function (request, data, root) {
  var i2836 = root || request.c( 'CollectObjectPlace' )
  var i2837 = data
  i2836.isTimeDelay = i2837[0]
  request.r(i2837[1], i2837[2], 0, i2836, 'stackControl')
  request.r(i2837[3], i2837[4], 0, i2836, 'tutController')
  return i2836
}

Deserializers["KitchenPlace"] = function (request, data, root) {
  var i2838 = root || request.c( 'KitchenPlace' )
  var i2839 = data
  request.r(i2839[0], i2839[1], 0, i2838, 'posCook')
  request.r(i2839[2], i2839[3], 0, i2838, 'foodProduct')
  request.r(i2839[4], i2839[5], 0, i2838, 'foodSpawnPos')
  i2838.isTimeDelay = i2839[6]
  request.r(i2839[7], i2839[8], 0, i2838, 'cookAnim')
  request.r(i2839[9], i2839[10], 0, i2838, 'stackInput')
  request.r(i2839[11], i2839[12], 0, i2838, 'stackOutput')
  i2838.timeCook = i2839[13]
  i2838.isCooking = !!i2839[14]
  i2838.isCookComplete = !!i2839[15]
  request.r(i2839[16], i2839[17], 0, i2838, 'tutController')
  request.r(i2839[18], i2839[19], 0, i2838, 'objTut')
  request.r(i2839[20], i2839[21], 0, i2838, 'sound')
  request.r(i2839[22], i2839[23], 0, i2838, 'clip')
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2841 = data
  request.r(i2841[0], i2841[1], 0, i2840, 'clip')
  request.r(i2841[2], i2841[3], 0, i2840, 'outputAudioMixerGroup')
  i2840.playOnAwake = !!i2841[4]
  i2840.loop = !!i2841[5]
  i2840.time = i2841[6]
  i2840.volume = i2841[7]
  i2840.pitch = i2841[8]
  i2840.enabled = !!i2841[9]
  return i2840
}

Deserializers["PickupPlace"] = function (request, data, root) {
  var i2842 = root || request.c( 'PickupPlace' )
  var i2843 = data
  request.r(i2843[0], i2843[1], 0, i2842, 'tutController')
  i2842.timeDelay = i2843[2]
  request.r(i2843[3], i2843[4], 0, i2842, 'stackInput')
  request.r(i2843[5], i2843[6], 0, i2842, 'col')
  return i2842
}

Deserializers["DinnerTable"] = function (request, data, root) {
  var i2844 = root || request.c( 'DinnerTable' )
  var i2845 = data
  var i2847 = i2845[0]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 2) {
  request.r(i2847[i + 0], i2847[i + 1], 2, i2846, '')
  }
  i2844.customerControllers = i2846
  request.r(i2845[1], i2845[2], 0, i2844, 'stackControl')
  i2844.timeEat = i2845[3]
  request.r(i2845[4], i2845[5], 0, i2844, 'tutController')
  return i2844
}

Deserializers["CustomerAnimator"] = function (request, data, root) {
  var i2850 = root || request.c( 'CustomerAnimator' )
  var i2851 = data
  request.r(i2851[0], i2851[1], 0, i2850, 'eatObj')
  request.r(i2851[2], i2851[3], 0, i2850, 'animator')
  return i2850
}

Deserializers["CustomerController"] = function (request, data, root) {
  var i2852 = root || request.c( 'CustomerController' )
  var i2853 = data
  request.r(i2853[0], i2853[1], 0, i2852, 'customerAnimator')
  request.r(i2853[2], i2853[3], 0, i2852, 'purchasePos')
  i2852.timeMove = i2853[4]
  return i2852
}

Deserializers["CashierTable"] = function (request, data, root) {
  var i2854 = root || request.c( 'CashierTable' )
  var i2855 = data
  var i2857 = i2855[0]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 2) {
  request.r(i2857[i + 0], i2857[i + 1], 2, i2856, '')
  }
  i2854.customerControllers = i2856
  var i2859 = i2855[1]
  var i2858 = new (System.Collections.Generic.List$1(Bridge.ns('StackObject')))
  for(var i = 0; i < i2859.length; i += 2) {
  request.r(i2859[i + 0], i2859[i + 1], 1, i2858, '')
  }
  i2854.moneys = i2858
  request.r(i2855[2], i2855[3], 0, i2854, 'tutController')
  request.r(i2855[4], i2855[5], 0, i2854, 'stackMoney')
  i2854.isReady = !!i2855[6]
  return i2854
}

Deserializers["InstallPlace"] = function (request, data, root) {
  var i2860 = root || request.c( 'InstallPlace' )
  var i2861 = data
  return i2860
}

Deserializers["TutController"] = function (request, data, root) {
  var i2862 = root || request.c( 'TutController' )
  var i2863 = data
  var i2865 = i2863[0]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 2) {
  request.r(i2865[i + 0], i2865[i + 1], 2, i2864, '')
  }
  i2862.objectActives = i2864
  var i2867 = i2863[1]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 2) {
  request.r(i2867[i + 0], i2867[i + 1], 2, i2866, '')
  }
  i2862.posTut = i2866
  request.r(i2863[2], i2863[3], 0, i2862, 'arrowTut')
  i2862.index = i2863[4]
  request.r(i2863[5], i2863[6], 0, i2862, 'characterArrowTut')
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2871 = data
  i2870.ambientIntensity = i2871[0]
  i2870.reflectionIntensity = i2871[1]
  i2870.ambientMode = i2871[2]
  i2870.ambientLight = new pc.Color(i2871[3], i2871[4], i2871[5], i2871[6])
  i2870.ambientSkyColor = new pc.Color(i2871[7], i2871[8], i2871[9], i2871[10])
  i2870.ambientGroundColor = new pc.Color(i2871[11], i2871[12], i2871[13], i2871[14])
  i2870.ambientEquatorColor = new pc.Color(i2871[15], i2871[16], i2871[17], i2871[18])
  i2870.fogColor = new pc.Color(i2871[19], i2871[20], i2871[21], i2871[22])
  i2870.fogEndDistance = i2871[23]
  i2870.fogStartDistance = i2871[24]
  i2870.fogDensity = i2871[25]
  i2870.fog = !!i2871[26]
  request.r(i2871[27], i2871[28], 0, i2870, 'skybox')
  i2870.fogMode = i2871[29]
  var i2873 = i2871[30]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2873[i + 0]) );
  }
  i2870.lightmaps = i2872
  i2870.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2871[31], i2870.lightProbes)
  i2870.lightmapsMode = i2871[32]
  i2870.mixedBakeMode = i2871[33]
  i2870.environmentLightingMode = i2871[34]
  i2870.ambientProbe = new pc.SphericalHarmonicsL2(i2871[35])
  i2870.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2871[36])
  i2870.useReferenceAmbientProbe = !!i2871[37]
  request.r(i2871[38], i2871[39], 0, i2870, 'customReflection')
  request.r(i2871[40], i2871[41], 0, i2870, 'defaultReflection')
  i2870.defaultReflectionMode = i2871[42]
  i2870.defaultReflectionResolution = i2871[43]
  i2870.sunLightObjectId = i2871[44]
  i2870.pixelLightCount = i2871[45]
  i2870.defaultReflectionHDR = !!i2871[46]
  i2870.hasLightDataAsset = !!i2871[47]
  i2870.hasManualGenerate = !!i2871[48]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2877 = data
  request.r(i2877[0], i2877[1], 0, i2876, 'lightmapColor')
  request.r(i2877[2], i2877[3], 0, i2876, 'lightmapDirection')
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2878 = root || new UnityEngine.LightProbes()
  var i2879 = data
  return i2878
}

Deserializers["FixedJoystick"] = function (request, data, root) {
  var i2884 = root || request.c( 'FixedJoystick' )
  var i2885 = data
  request.r(i2885[0], i2885[1], 0, i2884, 'background')
  request.r(i2885[2], i2885[3], 0, i2884, 'handleTranf')
  request.r(i2885[4], i2885[5], 0, i2884, 'handleObj')
  i2884.handleRange = i2885[6]
  i2884.deadZone = i2885[7]
  i2884.axisOptions = i2885[8]
  i2884.snapX = !!i2885[9]
  i2884.snapY = !!i2885[10]
  return i2884
}

Deserializers["FloatingJoystick"] = function (request, data, root) {
  var i2886 = root || request.c( 'FloatingJoystick' )
  var i2887 = data
  request.r(i2887[0], i2887[1], 0, i2886, 'background')
  request.r(i2887[2], i2887[3], 0, i2886, 'handleTranf')
  request.r(i2887[4], i2887[5], 0, i2886, 'handleObj')
  i2886.handleRange = i2887[6]
  i2886.deadZone = i2887[7]
  i2886.axisOptions = i2887[8]
  i2886.snapX = !!i2887[9]
  i2886.snapY = !!i2887[10]
  return i2886
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i2888 = root || request.c( 'VariableJoystick' )
  var i2889 = data
  request.r(i2889[0], i2889[1], 0, i2888, 'background')
  request.r(i2889[2], i2889[3], 0, i2888, 'handleTranf')
  request.r(i2889[4], i2889[5], 0, i2888, 'handleObj')
  i2888.moveThreshold = i2889[6]
  i2888.joystickType = i2889[7]
  i2888.handleRange = i2889[8]
  i2888.deadZone = i2889[9]
  i2888.axisOptions = i2889[10]
  i2888.snapX = !!i2889[11]
  i2888.snapY = !!i2889[12]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2891 = data
  var i2893 = i2891[0]
  var i2892 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.add(i2893[i + 0]);
  }
  i2890.invalidShaderVariants = i2892
  i2890.name = i2891[1]
  i2890.guid = i2891[2]
  var i2895 = i2891[3]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( i2895[i + 0] );
  }
  i2890.shaderDefinedKeywords = i2894
  var i2897 = i2891[4]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2897[i + 0]) );
  }
  i2890.passes = i2896
  var i2899 = i2891[5]
  var i2898 = []
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2899[i + 0]) );
  }
  i2890.usePasses = i2898
  var i2901 = i2891[6]
  var i2900 = []
  for(var i = 0; i < i2901.length; i += 1) {
    i2900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2901[i + 0]) );
  }
  i2890.defaultParameterValues = i2900
  request.r(i2891[7], i2891[8], 0, i2890, 'unityFallbackShader')
  i2890.readDepth = !!i2891[9]
  i2890.isCreatedByShaderGraph = !!i2891[10]
  i2890.usedBatchUniforms = i2891[11]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2908 = root || new pc.UnityShaderPass()
  var i2909 = data
  i2908.id = i2909[0]
  i2908.subShaderIndex = i2909[1]
  i2908.name = i2909[2]
  i2908.passType = i2909[3]
  i2908.usePass = !!i2909[4]
  i2908.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[5], i2908.zTest)
  i2908.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[6], i2908.zWrite)
  i2908.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[7], i2908.culling)
  i2908.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2909[8], i2908.blending)
  i2908.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2909[9], i2908.alphaBlending)
  i2908.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[10], i2908.colorWriteMask)
  i2908.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[11], i2908.offsetUnits)
  i2908.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[12], i2908.offsetFactor)
  i2908.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[13], i2908.stencilRef)
  i2908.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[14], i2908.stencilReadMask)
  i2908.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[15], i2908.stencilWriteMask)
  i2908.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2909[16], i2908.stencilOp)
  i2908.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2909[17], i2908.stencilOpFront)
  i2908.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2909[18], i2908.stencilOpBack)
  var i2911 = i2909[19]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2911[i + 0]) );
  }
  i2908.tags = i2910
  var i2913 = i2909[20]
  var i2912 = []
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.push( i2913[i + 0] );
  }
  i2908.passDefinedKeywords = i2912
  var i2915 = i2909[21]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2915[i + 0]) );
  }
  i2908.passDefinedKeywordGroups = i2914
  var i2917 = i2909[22]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 1) {
    i2916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2917[i + 0]) );
  }
  i2908.variants = i2916
  var i2919 = i2909[23]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2919[i + 0]) );
  }
  i2908.excludedVariants = i2918
  i2908.hasDepthReader = !!i2909[24]
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2921 = data
  i2920.val = i2921[0]
  i2920.name = i2921[1]
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2923 = data
  i2922.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[0], i2922.src)
  i2922.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[1], i2922.dst)
  i2922.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[2], i2922.op)
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2925 = data
  i2924.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2925[0], i2924.pass)
  i2924.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2925[1], i2924.fail)
  i2924.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2925[2], i2924.zFail)
  i2924.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2925[3], i2924.comp)
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2929 = data
  i2928.name = i2929[0]
  i2928.value = i2929[1]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2933 = data
  var i2935 = i2933[0]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.push( i2935[i + 0] );
  }
  i2932.keywords = i2934
  i2932.hasDiscard = !!i2933[1]
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2939 = data
  i2938.passId = i2939[0]
  i2938.subShaderIndex = i2939[1]
  var i2941 = i2939[2]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( i2941[i + 0] );
  }
  i2938.keywords = i2940
  i2938.vertexProgram = i2939[3]
  i2938.fragmentProgram = i2939[4]
  i2938.readDepth = !!i2939[5]
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2945 = data
  request.r(i2945[0], i2945[1], 0, i2944, 'shader')
  i2944.pass = i2945[2]
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2949 = data
  i2948.name = i2949[0]
  i2948.type = i2949[1]
  i2948.value = new pc.Vec4( i2949[2], i2949[3], i2949[4], i2949[5] )
  i2948.textureValue = i2949[6]
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2951 = data
  i2950.name = i2951[0]
  request.r(i2951[1], i2951[2], 0, i2950, 'texture')
  i2950.aabb = i2951[3]
  i2950.vertices = i2951[4]
  i2950.triangles = i2951[5]
  i2950.textureRect = UnityEngine.Rect.MinMaxRect(i2951[6], i2951[7], i2951[8], i2951[9])
  i2950.packedRect = UnityEngine.Rect.MinMaxRect(i2951[10], i2951[11], i2951[12], i2951[13])
  i2950.border = new pc.Vec4( i2951[14], i2951[15], i2951[16], i2951[17] )
  i2950.transparency = i2951[18]
  i2950.bounds = i2951[19]
  i2950.pixelsPerUnit = i2951[20]
  i2950.textureWidth = i2951[21]
  i2950.textureHeight = i2951[22]
  i2950.nativeSize = new pc.Vec2( i2951[23], i2951[24] )
  i2950.pivot = new pc.Vec2( i2951[25], i2951[26] )
  i2950.textureRectOffset = new pc.Vec2( i2951[27], i2951[28] )
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2953 = data
  i2952.name = i2953[0]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2955 = data
  i2954.name = i2955[0]
  i2954.wrapMode = i2955[1]
  i2954.isLooping = !!i2955[2]
  i2954.length = i2955[3]
  var i2957 = i2955[4]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2957[i + 0]) );
  }
  i2954.curves = i2956
  var i2959 = i2955[5]
  var i2958 = []
  for(var i = 0; i < i2959.length; i += 1) {
    i2958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2959[i + 0]) );
  }
  i2954.events = i2958
  i2954.halfPrecision = !!i2955[6]
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2963 = data
  i2962.path = i2963[0]
  i2962.componentType = i2963[1]
  i2962.property = i2963[2]
  i2962.keys = i2963[3]
  var i2965 = i2963[4]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2965[i + 0]) );
  }
  i2962.objectReferenceKeys = i2964
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2969 = data
  i2968.time = i2969[0]
  request.r(i2969[1], i2969[2], 0, i2968, 'value')
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2973 = data
  i2972.functionName = i2973[0]
  i2972.floatParameter = i2973[1]
  i2972.intParameter = i2973[2]
  i2972.stringParameter = i2973[3]
  request.r(i2973[4], i2973[5], 0, i2972, 'objectReferenceParameter')
  i2972.time = i2973[6]
  return i2972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2975 = data
  i2974.name = i2975[0]
  i2974.ascent = i2975[1]
  i2974.originalLineHeight = i2975[2]
  i2974.fontSize = i2975[3]
  var i2977 = i2975[4]
  var i2976 = []
  for(var i = 0; i < i2977.length; i += 1) {
    i2976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2977[i + 0]) );
  }
  i2974.characterInfo = i2976
  request.r(i2975[5], i2975[6], 0, i2974, 'texture')
  i2974.originalFontSize = i2975[7]
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2981 = data
  i2980.index = i2981[0]
  i2980.advance = i2981[1]
  i2980.bearing = i2981[2]
  i2980.glyphWidth = i2981[3]
  i2980.glyphHeight = i2981[4]
  i2980.minX = i2981[5]
  i2980.maxX = i2981[6]
  i2980.minY = i2981[7]
  i2980.maxY = i2981[8]
  i2980.uvBottomLeftX = i2981[9]
  i2980.uvBottomLeftY = i2981[10]
  i2980.uvBottomRightX = i2981[11]
  i2980.uvBottomRightY = i2981[12]
  i2980.uvTopLeftX = i2981[13]
  i2980.uvTopLeftY = i2981[14]
  i2980.uvTopRightX = i2981[15]
  i2980.uvTopRightY = i2981[16]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2983 = data
  i2982.name = i2983[0]
  var i2985 = i2983[1]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2985[i + 0]) );
  }
  i2982.states = i2984
  var i2987 = i2983[2]
  var i2986 = []
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2987[i + 0]) );
  }
  i2982.layers = i2986
  var i2989 = i2983[3]
  var i2988 = []
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2989[i + 0]) );
  }
  i2982.parameters = i2988
  i2982.animationClips = i2983[4]
  i2982.HasSubStateMachines = !!i2983[5]
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2993 = data
  i2992.cycleOffset = i2993[0]
  i2992.cycleOffsetParameter = i2993[1]
  i2992.cycleOffsetParameterActive = !!i2993[2]
  i2992.mirror = !!i2993[3]
  i2992.mirrorParameter = i2993[4]
  i2992.mirrorParameterActive = !!i2993[5]
  i2992.motionId = i2993[6]
  i2992.nameHash = i2993[7]
  i2992.fullPathHash = i2993[8]
  i2992.speed = i2993[9]
  i2992.speedParameter = i2993[10]
  i2992.speedParameterActive = !!i2993[11]
  i2992.tag = i2993[12]
  i2992.name = i2993[13]
  i2992.layer = i2993[14]
  i2992.writeDefaultValues = !!i2993[15]
  var i2995 = i2993[16]
  var i2994 = []
  for(var i = 0; i < i2995.length; i += 1) {
    i2994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2995[i + 0]) );
  }
  i2992.transitions = i2994
  var i2997 = i2993[17]
  var i2996 = []
  for(var i = 0; i < i2997.length; i += 2) {
  request.r(i2997[i + 0], i2997[i + 1], 2, i2996, '')
  }
  i2992.behaviours = i2996
  return i2992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3001 = data
  i3000.fullPath = i3001[0]
  i3000.canTransitionToSelf = !!i3001[1]
  i3000.duration = i3001[2]
  i3000.exitTime = i3001[3]
  i3000.hasExitTime = !!i3001[4]
  i3000.hasFixedDuration = !!i3001[5]
  i3000.interruptionSource = i3001[6]
  i3000.offset = i3001[7]
  i3000.orderedInterruption = !!i3001[8]
  i3000.destinationStateNameHash = i3001[9]
  i3000.destinationStateMachineId = i3001[10]
  i3000.isExit = !!i3001[11]
  i3000.mute = !!i3001[12]
  i3000.solo = !!i3001[13]
  var i3003 = i3001[14]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3003[i + 0]) );
  }
  i3000.conditions = i3002
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3007 = data
  i3006.mode = i3007[0]
  i3006.parameter = i3007[1]
  i3006.threshold = i3007[2]
  return i3006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3013 = data
  i3012.blendingMode = i3013[0]
  i3012.defaultWeight = i3013[1]
  i3012.name = i3013[2]
  i3012.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3013[3], i3012.stateMachine)
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3015 = data
  i3014.id = i3015[0]
  i3014.defaultStateNameHash = i3015[1]
  var i3017 = i3015[2]
  var i3016 = []
  for(var i = 0; i < i3017.length; i += 1) {
    i3016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3017[i + 0]) );
  }
  i3014.entryTransitions = i3016
  var i3019 = i3015[3]
  var i3018 = []
  for(var i = 0; i < i3019.length; i += 1) {
    i3018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3019[i + 0]) );
  }
  i3014.anyStateTransitions = i3018
  return i3014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3023 = data
  i3022.destinationStateNameHash = i3023[0]
  i3022.destinationStateMachineId = i3023[1]
  i3022.isExit = !!i3023[2]
  i3022.mute = !!i3023[3]
  i3022.solo = !!i3023[4]
  var i3025 = i3023[5]
  var i3024 = []
  for(var i = 0; i < i3025.length; i += 1) {
    i3024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3025[i + 0]) );
  }
  i3022.conditions = i3024
  return i3022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3029 = data
  i3028.defaultBool = !!i3029[0]
  i3028.defaultFloat = i3029[1]
  i3028.defaultInt = i3029[2]
  i3028.name = i3029[3]
  i3028.nameHash = i3029[4]
  i3028.type = i3029[5]
  return i3028
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3030 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3031 = data
  i3030.useSafeMode = !!i3031[0]
  i3030.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3031[1], i3030.safeModeOptions)
  i3030.timeScale = i3031[2]
  i3030.unscaledTimeScale = i3031[3]
  i3030.useSmoothDeltaTime = !!i3031[4]
  i3030.maxSmoothUnscaledTime = i3031[5]
  i3030.rewindCallbackMode = i3031[6]
  i3030.showUnityEditorReport = !!i3031[7]
  i3030.logBehaviour = i3031[8]
  i3030.drawGizmos = !!i3031[9]
  i3030.defaultRecyclable = !!i3031[10]
  i3030.defaultAutoPlay = i3031[11]
  i3030.defaultUpdateType = i3031[12]
  i3030.defaultTimeScaleIndependent = !!i3031[13]
  i3030.defaultEaseType = i3031[14]
  i3030.defaultEaseOvershootOrAmplitude = i3031[15]
  i3030.defaultEasePeriod = i3031[16]
  i3030.defaultAutoKill = !!i3031[17]
  i3030.defaultLoopType = i3031[18]
  i3030.debugMode = !!i3031[19]
  i3030.debugStoreTargetId = !!i3031[20]
  i3030.showPreviewPanel = !!i3031[21]
  i3030.storeSettingsLocation = i3031[22]
  i3030.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3031[23], i3030.modules)
  i3030.createASMDEF = !!i3031[24]
  i3030.showPlayingTweens = !!i3031[25]
  i3030.showPausedTweens = !!i3031[26]
  return i3030
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3032 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3033 = data
  i3032.logBehaviour = i3033[0]
  i3032.nestedTweenFailureBehaviour = i3033[1]
  return i3032
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3034 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3035 = data
  i3034.showPanel = !!i3035[0]
  i3034.audioEnabled = !!i3035[1]
  i3034.physicsEnabled = !!i3035[2]
  i3034.physics2DEnabled = !!i3035[3]
  i3034.spriteEnabled = !!i3035[4]
  i3034.uiEnabled = !!i3035[5]
  i3034.textMeshProEnabled = !!i3035[6]
  i3034.tk2DEnabled = !!i3035[7]
  i3034.deAudioEnabled = !!i3035[8]
  i3034.deUnityExtendedEnabled = !!i3035[9]
  i3034.epoOutlineEnabled = !!i3035[10]
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3037 = data
  var i3039 = i3037[0]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3039[i + 0]) );
  }
  i3036.files = i3038
  i3036.componentToPrefabIds = i3037[1]
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3043 = data
  i3042.path = i3043[0]
  request.r(i3043[1], i3043[2], 0, i3042, 'unityObject')
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3045 = data
  var i3047 = i3045[0]
  var i3046 = []
  for(var i = 0; i < i3047.length; i += 1) {
    i3046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3047[i + 0]) );
  }
  i3044.scriptsExecutionOrder = i3046
  var i3049 = i3045[1]
  var i3048 = []
  for(var i = 0; i < i3049.length; i += 1) {
    i3048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3049[i + 0]) );
  }
  i3044.sortingLayers = i3048
  var i3051 = i3045[2]
  var i3050 = []
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3051[i + 0]) );
  }
  i3044.cullingLayers = i3050
  i3044.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3045[3], i3044.timeSettings)
  i3044.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3045[4], i3044.physicsSettings)
  i3044.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3045[5], i3044.physics2DSettings)
  i3044.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3045[6], i3044.qualitySettings)
  i3044.enableRealtimeShadows = !!i3045[7]
  i3044.enableAutoInstancing = !!i3045[8]
  i3044.enableDynamicBatching = !!i3045[9]
  i3044.lightmapEncodingQuality = i3045[10]
  i3044.desiredColorSpace = i3045[11]
  var i3053 = i3045[12]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.push( i3053[i + 0] );
  }
  i3044.allTags = i3052
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3057 = data
  i3056.name = i3057[0]
  i3056.value = i3057[1]
  return i3056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3061 = data
  i3060.id = i3061[0]
  i3060.name = i3061[1]
  i3060.value = i3061[2]
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3065 = data
  i3064.id = i3065[0]
  i3064.name = i3065[1]
  return i3064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3067 = data
  i3066.fixedDeltaTime = i3067[0]
  i3066.maximumDeltaTime = i3067[1]
  i3066.timeScale = i3067[2]
  i3066.maximumParticleTimestep = i3067[3]
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3069 = data
  i3068.gravity = new pc.Vec3( i3069[0], i3069[1], i3069[2] )
  i3068.defaultSolverIterations = i3069[3]
  i3068.bounceThreshold = i3069[4]
  i3068.autoSyncTransforms = !!i3069[5]
  i3068.autoSimulation = !!i3069[6]
  var i3071 = i3069[7]
  var i3070 = []
  for(var i = 0; i < i3071.length; i += 1) {
    i3070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3071[i + 0]) );
  }
  i3068.collisionMatrix = i3070
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3075 = data
  i3074.enabled = !!i3075[0]
  i3074.layerId = i3075[1]
  i3074.otherLayerId = i3075[2]
  return i3074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3077 = data
  request.r(i3077[0], i3077[1], 0, i3076, 'material')
  i3076.gravity = new pc.Vec2( i3077[2], i3077[3] )
  i3076.positionIterations = i3077[4]
  i3076.velocityIterations = i3077[5]
  i3076.velocityThreshold = i3077[6]
  i3076.maxLinearCorrection = i3077[7]
  i3076.maxAngularCorrection = i3077[8]
  i3076.maxTranslationSpeed = i3077[9]
  i3076.maxRotationSpeed = i3077[10]
  i3076.baumgarteScale = i3077[11]
  i3076.baumgarteTOIScale = i3077[12]
  i3076.timeToSleep = i3077[13]
  i3076.linearSleepTolerance = i3077[14]
  i3076.angularSleepTolerance = i3077[15]
  i3076.defaultContactOffset = i3077[16]
  i3076.autoSimulation = !!i3077[17]
  i3076.queriesHitTriggers = !!i3077[18]
  i3076.queriesStartInColliders = !!i3077[19]
  i3076.callbacksOnDisable = !!i3077[20]
  i3076.reuseCollisionCallbacks = !!i3077[21]
  i3076.autoSyncTransforms = !!i3077[22]
  var i3079 = i3077[23]
  var i3078 = []
  for(var i = 0; i < i3079.length; i += 1) {
    i3078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3079[i + 0]) );
  }
  i3076.collisionMatrix = i3078
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3083 = data
  i3082.enabled = !!i3083[0]
  i3082.layerId = i3083[1]
  i3082.otherLayerId = i3083[2]
  return i3082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3085 = data
  var i3087 = i3085[0]
  var i3086 = []
  for(var i = 0; i < i3087.length; i += 1) {
    i3086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3087[i + 0]) );
  }
  i3084.qualityLevels = i3086
  var i3089 = i3085[1]
  var i3088 = []
  for(var i = 0; i < i3089.length; i += 1) {
    i3088.push( i3089[i + 0] );
  }
  i3084.names = i3088
  i3084.shadows = i3085[2]
  i3084.anisotropicFiltering = i3085[3]
  i3084.antiAliasing = i3085[4]
  i3084.lodBias = i3085[5]
  i3084.shadowCascades = i3085[6]
  i3084.shadowDistance = i3085[7]
  i3084.shadowmaskMode = i3085[8]
  i3084.shadowProjection = i3085[9]
  i3084.shadowResolution = i3085[10]
  i3084.softParticles = !!i3085[11]
  i3084.softVegetation = !!i3085[12]
  i3084.activeColorSpace = i3085[13]
  i3084.desiredColorSpace = i3085[14]
  i3084.masterTextureLimit = i3085[15]
  i3084.maxQueuedFrames = i3085[16]
  i3084.particleRaycastBudget = i3085[17]
  i3084.pixelLightCount = i3085[18]
  i3084.realtimeReflectionProbes = !!i3085[19]
  i3084.shadowCascade2Split = i3085[20]
  i3084.shadowCascade4Split = new pc.Vec3( i3085[21], i3085[22], i3085[23] )
  i3084.streamingMipmapsActive = !!i3085[24]
  i3084.vSyncCount = i3085[25]
  i3084.asyncUploadBufferSize = i3085[26]
  i3084.asyncUploadTimeSlice = i3085[27]
  i3084.billboardsFaceCameraPosition = !!i3085[28]
  i3084.shadowNearPlaneOffset = i3085[29]
  i3084.streamingMipmapsMemoryBudget = i3085[30]
  i3084.maximumLODLevel = i3085[31]
  i3084.streamingMipmapsAddAllCameras = !!i3085[32]
  i3084.streamingMipmapsMaxLevelReduction = i3085[33]
  i3084.streamingMipmapsRenderersPerFrame = i3085[34]
  i3084.resolutionScalingFixedDPIFactor = i3085[35]
  i3084.streamingMipmapsMaxFileIORequests = i3085[36]
  i3084.currentQualityLevel = i3085[37]
  return i3084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3095 = data
  i3094.weight = i3095[0]
  i3094.vertices = i3095[1]
  i3094.normals = i3095[2]
  i3094.tangents = i3095[3]
  return i3094
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[2],"69":[14],"70":[39],"71":[39],"72":[39],"73":[39],"74":[39],"75":[39],"76":[39],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[14],"92":[7],"93":[94],"95":[94],"22":[21],"96":[21],"97":[7,21],"98":[21,25],"99":[21],"100":[25,21],"101":[7],"102":[25,21],"103":[21],"104":[105],"106":[21],"107":[21],"24":[22],"28":[25,21],"108":[21],"23":[22],"109":[21],"110":[21],"111":[21],"112":[21],"113":[21],"114":[21],"115":[21],"116":[21],"117":[21],"118":[25,21],"119":[21],"120":[21],"121":[21],"122":[21],"26":[25,21],"123":[21],"124":[19],"125":[19],"20":[19],"126":[19],"127":[14],"128":[14],"129":[105],"130":[105]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MonoBehaviour","StackObject","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","FollowPosition","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Image","UnityEngine.Sprite","MoveByPath","DynamicJoystick","UnityEngine.GameObject","CharacterBehaviour","MoveByJoystick","CharacterAnimator","DetectPlaceComponent","StackControl","CharacterArrowTut","UnityEngine.Rigidbody","UnityEngine.SphereCollider","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","CollectObjectPlace","TutController","KitchenPlace","UnityEngine.AudioSource","PickupPlace","DinnerTable","CustomerController","CustomerAnimator","CashierTable","InstallPlace","UnityEngine.AudioClip","UnityEngine.Cubemap","FixedJoystick","FloatingJoystick","VariableJoystick","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.24f1";

Deserializers.productName = "kitchen";

Deserializers.lunaInitializationTime = "05/08/2023 09:13:25";

Deserializers.lunaDaysRunning = "3.1";

Deserializers.lunaVersion = "5.0.0";

Deserializers.lunaSHA = "8492f3ebf500b632ef0f82804595ebe7557792b4";

Deserializers.creativeName = "kitchen-tempura";

Deserializers.lunaAppID = "16203";

Deserializers.projectId = "c85fe916-4d5f-4a89-9f75-85dcdadecb7f";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1083";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4370";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.kitchen";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "08c72ddf-26e5-4ac6-b9c4-c37793d4fdba";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

