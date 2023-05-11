var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4644 = root || request.c( 'UnityEngine.JointSpring' )
  var i4645 = data
  i4644.spring = i4645[0]
  i4644.damper = i4645[1]
  i4644.targetPosition = i4645[2]
  return i4644
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4646 = root || request.c( 'UnityEngine.JointMotor' )
  var i4647 = data
  i4646.m_TargetVelocity = i4647[0]
  i4646.m_Force = i4647[1]
  i4646.m_FreeSpin = i4647[2]
  return i4646
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4648 = root || request.c( 'UnityEngine.JointLimits' )
  var i4649 = data
  i4648.m_Min = i4649[0]
  i4648.m_Max = i4649[1]
  i4648.m_Bounciness = i4649[2]
  i4648.m_BounceMinVelocity = i4649[3]
  i4648.m_ContactDistance = i4649[4]
  i4648.minBounce = i4649[5]
  i4648.maxBounce = i4649[6]
  return i4648
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4650 = root || request.c( 'UnityEngine.JointDrive' )
  var i4651 = data
  i4650.m_PositionSpring = i4651[0]
  i4650.m_PositionDamper = i4651[1]
  i4650.m_MaximumForce = i4651[2]
  return i4650
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4652 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4653 = data
  i4652.m_Spring = i4653[0]
  i4652.m_Damper = i4653[1]
  return i4652
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4654 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4655 = data
  i4654.m_Limit = i4655[0]
  i4654.m_Bounciness = i4655[1]
  i4654.m_ContactDistance = i4655[2]
  return i4654
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4656 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4657 = data
  i4656.m_ExtremumSlip = i4657[0]
  i4656.m_ExtremumValue = i4657[1]
  i4656.m_AsymptoteSlip = i4657[2]
  i4656.m_AsymptoteValue = i4657[3]
  i4656.m_Stiffness = i4657[4]
  return i4656
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4658 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4659 = data
  i4658.m_LowerAngle = i4659[0]
  i4658.m_UpperAngle = i4659[1]
  return i4658
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4660 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4661 = data
  i4660.m_MotorSpeed = i4661[0]
  i4660.m_MaximumMotorTorque = i4661[1]
  return i4660
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4662 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4663 = data
  i4662.m_DampingRatio = i4663[0]
  i4662.m_Frequency = i4663[1]
  i4662.m_Angle = i4663[2]
  return i4662
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4664 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4665 = data
  i4664.m_LowerTranslation = i4665[0]
  i4664.m_UpperTranslation = i4665[1]
  return i4664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4666 = root || new pc.UnityMaterial()
  var i4667 = data
  i4666.name = i4667[0]
  request.r(i4667[1], i4667[2], 0, i4666, 'shader')
  i4666.renderQueue = i4667[3]
  i4666.enableInstancing = !!i4667[4]
  var i4669 = i4667[5]
  var i4668 = []
  for(var i = 0; i < i4669.length; i += 1) {
    i4668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4669[i + 0]) );
  }
  i4666.floatParameters = i4668
  var i4671 = i4667[6]
  var i4670 = []
  for(var i = 0; i < i4671.length; i += 1) {
    i4670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4671[i + 0]) );
  }
  i4666.colorParameters = i4670
  var i4673 = i4667[7]
  var i4672 = []
  for(var i = 0; i < i4673.length; i += 1) {
    i4672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4673[i + 0]) );
  }
  i4666.vectorParameters = i4672
  var i4675 = i4667[8]
  var i4674 = []
  for(var i = 0; i < i4675.length; i += 1) {
    i4674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4675[i + 0]) );
  }
  i4666.textureParameters = i4674
  var i4677 = i4667[9]
  var i4676 = []
  for(var i = 0; i < i4677.length; i += 1) {
    i4676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4677[i + 0]) );
  }
  i4666.materialFlags = i4676
  return i4666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4681 = data
  i4680.name = i4681[0]
  i4680.value = i4681[1]
  return i4680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4685 = data
  i4684.name = i4685[0]
  i4684.value = new pc.Color(i4685[1], i4685[2], i4685[3], i4685[4])
  return i4684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4689 = data
  i4688.name = i4689[0]
  i4688.value = new pc.Vec4( i4689[1], i4689[2], i4689[3], i4689[4] )
  return i4688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4693 = data
  i4692.name = i4693[0]
  request.r(i4693[1], i4693[2], 0, i4692, 'value')
  return i4692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4697 = data
  i4696.name = i4697[0]
  i4696.enabled = !!i4697[1]
  return i4696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4699 = data
  i4698.position = new pc.Vec3( i4699[0], i4699[1], i4699[2] )
  i4698.scale = new pc.Vec3( i4699[3], i4699[4], i4699[5] )
  i4698.rotation = new pc.Quat(i4699[6], i4699[7], i4699[8], i4699[9])
  return i4698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4701 = data
  i4700.name = i4701[0]
  i4700.tagId = i4701[1]
  i4700.enabled = !!i4701[2]
  i4700.isStatic = !!i4701[3]
  i4700.layer = i4701[4]
  return i4700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i4702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i4703 = data
  i4702.enabled = !!i4703[0]
  request.r(i4703[1], i4703[2], 0, i4702, 'sharedMaterial')
  var i4705 = i4703[3]
  var i4704 = []
  for(var i = 0; i < i4705.length; i += 2) {
  request.r(i4705[i + 0], i4705[i + 1], 2, i4704, '')
  }
  i4702.sharedMaterials = i4704
  i4702.receiveShadows = !!i4703[4]
  i4702.shadowCastingMode = i4703[5]
  i4702.sortingLayerID = i4703[6]
  i4702.sortingOrder = i4703[7]
  i4702.lightmapIndex = i4703[8]
  i4702.lightmapSceneIndex = i4703[9]
  i4702.lightmapScaleOffset = new pc.Vec4( i4703[10], i4703[11], i4703[12], i4703[13] )
  i4702.lightProbeUsage = i4703[14]
  i4702.reflectionProbeUsage = i4703[15]
  request.r(i4703[16], i4703[17], 0, i4702, 'sharedMesh')
  var i4707 = i4703[18]
  var i4706 = []
  for(var i = 0; i < i4707.length; i += 2) {
  request.r(i4707[i + 0], i4707[i + 1], 2, i4706, '')
  }
  i4702.bones = i4706
  i4702.updateWhenOffscreen = !!i4703[19]
  i4702.localBounds = i4703[20]
  request.r(i4703[21], i4703[22], 0, i4702, 'rootBone')
  var i4709 = i4703[23]
  var i4708 = []
  for(var i = 0; i < i4709.length; i += 1) {
    i4708.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i4709[i + 0]) );
  }
  i4702.blendShapesWeights = i4708
  return i4702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i4716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i4717 = data
  i4716.weight = i4717[0]
  return i4716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4719 = data
  i4718.name = i4719[0]
  i4718.width = i4719[1]
  i4718.height = i4719[2]
  i4718.mipmapCount = i4719[3]
  i4718.anisoLevel = i4719[4]
  i4718.filterMode = i4719[5]
  i4718.hdr = !!i4719[6]
  i4718.format = i4719[7]
  i4718.wrapMode = i4719[8]
  i4718.alphaIsTransparency = !!i4719[9]
  i4718.alphaSource = i4719[10]
  return i4718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4721 = data
  i4720.name = i4721[0]
  i4720.halfPrecision = !!i4721[1]
  i4720.vertexCount = i4721[2]
  i4720.aabb = i4721[3]
  var i4723 = i4721[4]
  var i4722 = []
  for(var i = 0; i < i4723.length; i += 1) {
    i4722.push( !!i4723[i + 0] );
  }
  i4720.streams = i4722
  i4720.vertices = i4721[5]
  var i4725 = i4721[6]
  var i4724 = []
  for(var i = 0; i < i4725.length; i += 1) {
    i4724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4725[i + 0]) );
  }
  i4720.subMeshes = i4724
  var i4727 = i4721[7]
  var i4726 = []
  for(var i = 0; i < i4727.length; i += 16) {
    i4726.push( new pc.Mat4().setData(i4727[i + 0], i4727[i + 1], i4727[i + 2], i4727[i + 3],  i4727[i + 4], i4727[i + 5], i4727[i + 6], i4727[i + 7],  i4727[i + 8], i4727[i + 9], i4727[i + 10], i4727[i + 11],  i4727[i + 12], i4727[i + 13], i4727[i + 14], i4727[i + 15]) );
  }
  i4720.bindposes = i4726
  var i4729 = i4721[8]
  var i4728 = []
  for(var i = 0; i < i4729.length; i += 1) {
    i4728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4729[i + 0]) );
  }
  i4720.blendShapes = i4728
  return i4720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4735 = data
  i4734.triangles = i4735[0]
  return i4734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4741 = data
  i4740.name = i4741[0]
  var i4743 = i4741[1]
  var i4742 = []
  for(var i = 0; i < i4743.length; i += 1) {
    i4742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4743[i + 0]) );
  }
  i4740.frames = i4742
  return i4740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4745 = data
  request.r(i4745[0], i4745[1], 0, i4744, 'sharedMesh')
  return i4744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4747 = data
  request.r(i4747[0], i4747[1], 0, i4746, 'additionalVertexStreams')
  i4746.enabled = !!i4747[2]
  request.r(i4747[3], i4747[4], 0, i4746, 'sharedMaterial')
  var i4749 = i4747[5]
  var i4748 = []
  for(var i = 0; i < i4749.length; i += 2) {
  request.r(i4749[i + 0], i4749[i + 1], 2, i4748, '')
  }
  i4746.sharedMaterials = i4748
  i4746.receiveShadows = !!i4747[6]
  i4746.shadowCastingMode = i4747[7]
  i4746.sortingLayerID = i4747[8]
  i4746.sortingOrder = i4747[9]
  i4746.lightmapIndex = i4747[10]
  i4746.lightmapSceneIndex = i4747[11]
  i4746.lightmapScaleOffset = new pc.Vec4( i4747[12], i4747[13], i4747[14], i4747[15] )
  i4746.lightProbeUsage = i4747[16]
  i4746.reflectionProbeUsage = i4747[17]
  return i4746
}

Deserializers["StackObject"] = function (request, data, root) {
  var i4750 = root || request.c( 'StackObject' )
  var i4751 = data
  request.r(i4751[0], i4751[1], 0, i4750, 'transf')
  return i4750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i4752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i4753 = data
  i4752.playAutomatically = !!i4753[0]
  request.r(i4753[1], i4753[2], 0, i4752, 'clip')
  var i4755 = i4753[3]
  var i4754 = []
  for(var i = 0; i < i4755.length; i += 2) {
  request.r(i4755[i + 0], i4755[i + 1], 2, i4754, '')
  }
  i4752.clips = i4754
  i4752.wrapMode = i4753[4]
  i4752.enabled = !!i4753[5]
  return i4752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4759 = data
  i4758.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4759[0], i4758.main)
  i4758.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4759[1], i4758.colorBySpeed)
  i4758.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4759[2], i4758.colorOverLifetime)
  i4758.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4759[3], i4758.emission)
  i4758.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4759[4], i4758.rotationBySpeed)
  i4758.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4759[5], i4758.rotationOverLifetime)
  i4758.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4759[6], i4758.shape)
  i4758.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4759[7], i4758.sizeBySpeed)
  i4758.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4759[8], i4758.sizeOverLifetime)
  i4758.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4759[9], i4758.textureSheetAnimation)
  i4758.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4759[10], i4758.velocityOverLifetime)
  i4758.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4759[11], i4758.noise)
  i4758.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4759[12], i4758.inheritVelocity)
  i4758.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4759[13], i4758.forceOverLifetime)
  i4758.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4759[14], i4758.limitVelocityOverLifetime)
  i4758.useAutoRandomSeed = !!i4759[15]
  i4758.randomSeed = i4759[16]
  return i4758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4760 = root || new pc.ParticleSystemMain()
  var i4761 = data
  i4760.duration = i4761[0]
  i4760.loop = !!i4761[1]
  i4760.prewarm = !!i4761[2]
  i4760.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4761[3], i4760.startDelay)
  i4760.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4761[4], i4760.startLifetime)
  i4760.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4761[5], i4760.startSpeed)
  i4760.startSize3D = !!i4761[6]
  i4760.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4761[7], i4760.startSizeX)
  i4760.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4761[8], i4760.startSizeY)
  i4760.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4761[9], i4760.startSizeZ)
  i4760.startRotation3D = !!i4761[10]
  i4760.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4761[11], i4760.startRotationX)
  i4760.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4761[12], i4760.startRotationY)
  i4760.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4761[13], i4760.startRotationZ)
  i4760.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4761[14], i4760.startColor)
  i4760.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4761[15], i4760.gravityModifier)
  i4760.simulationSpace = i4761[16]
  request.r(i4761[17], i4761[18], 0, i4760, 'customSimulationSpace')
  i4760.simulationSpeed = i4761[19]
  i4760.useUnscaledTime = !!i4761[20]
  i4760.scalingMode = i4761[21]
  i4760.playOnAwake = !!i4761[22]
  i4760.maxParticles = i4761[23]
  i4760.emitterVelocityMode = i4761[24]
  i4760.stopAction = i4761[25]
  return i4760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4762 = root || new pc.MinMaxCurve()
  var i4763 = data
  i4762.mode = i4763[0]
  i4762.curveMin = new pc.AnimationCurve( { keys_flow: i4763[1] } )
  i4762.curveMax = new pc.AnimationCurve( { keys_flow: i4763[2] } )
  i4762.curveMultiplier = i4763[3]
  i4762.constantMin = i4763[4]
  i4762.constantMax = i4763[5]
  return i4762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4764 = root || new pc.MinMaxGradient()
  var i4765 = data
  i4764.mode = i4765[0]
  i4764.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4765[1], i4764.gradientMin)
  i4764.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4765[2], i4764.gradientMax)
  i4764.colorMin = new pc.Color(i4765[3], i4765[4], i4765[5], i4765[6])
  i4764.colorMax = new pc.Color(i4765[7], i4765[8], i4765[9], i4765[10])
  return i4764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4767 = data
  i4766.mode = i4767[0]
  var i4769 = i4767[1]
  var i4768 = []
  for(var i = 0; i < i4769.length; i += 1) {
    i4768.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4769[i + 0]) );
  }
  i4766.colorKeys = i4768
  var i4771 = i4767[2]
  var i4770 = []
  for(var i = 0; i < i4771.length; i += 1) {
    i4770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4771[i + 0]) );
  }
  i4766.alphaKeys = i4770
  return i4766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4772 = root || new pc.ParticleSystemColorBySpeed()
  var i4773 = data
  i4772.enabled = !!i4773[0]
  i4772.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4773[1], i4772.color)
  i4772.range = new pc.Vec2( i4773[2], i4773[3] )
  return i4772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4777 = data
  i4776.color = new pc.Color(i4777[0], i4777[1], i4777[2], i4777[3])
  i4776.time = i4777[4]
  return i4776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4781 = data
  i4780.alpha = i4781[0]
  i4780.time = i4781[1]
  return i4780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4782 = root || new pc.ParticleSystemColorOverLifetime()
  var i4783 = data
  i4782.enabled = !!i4783[0]
  i4782.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4783[1], i4782.color)
  return i4782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4784 = root || new pc.ParticleSystemEmitter()
  var i4785 = data
  i4784.enabled = !!i4785[0]
  i4784.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4785[1], i4784.rateOverTime)
  i4784.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4785[2], i4784.rateOverDistance)
  var i4787 = i4785[3]
  var i4786 = []
  for(var i = 0; i < i4787.length; i += 1) {
    i4786.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4787[i + 0]) );
  }
  i4784.bursts = i4786
  return i4784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4790 = root || new pc.ParticleSystemBurst()
  var i4791 = data
  i4790.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4791[0], i4790.count)
  i4790.cycleCount = i4791[1]
  i4790.minCount = i4791[2]
  i4790.maxCount = i4791[3]
  i4790.repeatInterval = i4791[4]
  i4790.time = i4791[5]
  return i4790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4792 = root || new pc.ParticleSystemRotationBySpeed()
  var i4793 = data
  i4792.enabled = !!i4793[0]
  i4792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4793[1], i4792.x)
  i4792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4793[2], i4792.y)
  i4792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4793[3], i4792.z)
  i4792.separateAxes = !!i4793[4]
  i4792.range = new pc.Vec2( i4793[5], i4793[6] )
  return i4792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4794 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4795 = data
  i4794.enabled = !!i4795[0]
  i4794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[1], i4794.x)
  i4794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[2], i4794.y)
  i4794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4795[3], i4794.z)
  i4794.separateAxes = !!i4795[4]
  return i4794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4796 = root || new pc.ParticleSystemShape()
  var i4797 = data
  i4796.enabled = !!i4797[0]
  i4796.shapeType = i4797[1]
  i4796.randomDirectionAmount = i4797[2]
  i4796.sphericalDirectionAmount = i4797[3]
  i4796.randomPositionAmount = i4797[4]
  i4796.alignToDirection = !!i4797[5]
  i4796.radius = i4797[6]
  i4796.radiusMode = i4797[7]
  i4796.radiusSpread = i4797[8]
  i4796.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4797[9], i4796.radiusSpeed)
  i4796.radiusThickness = i4797[10]
  i4796.angle = i4797[11]
  i4796.length = i4797[12]
  i4796.boxThickness = new pc.Vec3( i4797[13], i4797[14], i4797[15] )
  i4796.meshShapeType = i4797[16]
  request.r(i4797[17], i4797[18], 0, i4796, 'mesh')
  request.r(i4797[19], i4797[20], 0, i4796, 'meshRenderer')
  request.r(i4797[21], i4797[22], 0, i4796, 'skinnedMeshRenderer')
  i4796.useMeshMaterialIndex = !!i4797[23]
  i4796.meshMaterialIndex = i4797[24]
  i4796.useMeshColors = !!i4797[25]
  i4796.normalOffset = i4797[26]
  i4796.arc = i4797[27]
  i4796.arcMode = i4797[28]
  i4796.arcSpread = i4797[29]
  i4796.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4797[30], i4796.arcSpeed)
  i4796.donutRadius = i4797[31]
  i4796.position = new pc.Vec3( i4797[32], i4797[33], i4797[34] )
  i4796.rotation = new pc.Vec3( i4797[35], i4797[36], i4797[37] )
  i4796.scale = new pc.Vec3( i4797[38], i4797[39], i4797[40] )
  return i4796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4798 = root || new pc.ParticleSystemSizeBySpeed()
  var i4799 = data
  i4798.enabled = !!i4799[0]
  i4798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4799[1], i4798.x)
  i4798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4799[2], i4798.y)
  i4798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4799[3], i4798.z)
  i4798.separateAxes = !!i4799[4]
  i4798.range = new pc.Vec2( i4799[5], i4799[6] )
  return i4798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4800 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4801 = data
  i4800.enabled = !!i4801[0]
  i4800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4801[1], i4800.x)
  i4800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4801[2], i4800.y)
  i4800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4801[3], i4800.z)
  i4800.separateAxes = !!i4801[4]
  return i4800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4802 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4803 = data
  i4802.enabled = !!i4803[0]
  i4802.mode = i4803[1]
  i4802.animation = i4803[2]
  i4802.numTilesX = i4803[3]
  i4802.numTilesY = i4803[4]
  i4802.useRandomRow = !!i4803[5]
  i4802.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4803[6], i4802.frameOverTime)
  i4802.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4803[7], i4802.startFrame)
  i4802.cycleCount = i4803[8]
  i4802.rowIndex = i4803[9]
  i4802.flipU = i4803[10]
  i4802.flipV = i4803[11]
  i4802.spriteCount = i4803[12]
  var i4805 = i4803[13]
  var i4804 = []
  for(var i = 0; i < i4805.length; i += 2) {
  request.r(i4805[i + 0], i4805[i + 1], 2, i4804, '')
  }
  i4802.sprites = i4804
  return i4802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4808 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4809 = data
  i4808.enabled = !!i4809[0]
  i4808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4809[1], i4808.x)
  i4808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4809[2], i4808.y)
  i4808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4809[3], i4808.z)
  i4808.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4809[4], i4808.speedModifier)
  i4808.space = i4809[5]
  return i4808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4810 = root || new pc.ParticleSystemNoise()
  var i4811 = data
  i4810.enabled = !!i4811[0]
  i4810.separateAxes = !!i4811[1]
  i4810.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4811[2], i4810.strengthX)
  i4810.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4811[3], i4810.strengthY)
  i4810.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4811[4], i4810.strengthZ)
  i4810.frequency = i4811[5]
  i4810.damping = !!i4811[6]
  i4810.octaveCount = i4811[7]
  i4810.octaveMultiplier = i4811[8]
  i4810.octaveScale = i4811[9]
  i4810.quality = i4811[10]
  i4810.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4811[11], i4810.scrollSpeed)
  i4810.scrollSpeedMultiplier = i4811[12]
  i4810.remapEnabled = !!i4811[13]
  i4810.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4811[14], i4810.remapX)
  i4810.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4811[15], i4810.remapY)
  i4810.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4811[16], i4810.remapZ)
  i4810.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4811[17], i4810.positionAmount)
  i4810.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4811[18], i4810.rotationAmount)
  i4810.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4811[19], i4810.sizeAmount)
  return i4810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4812 = root || new pc.ParticleSystemInheritVelocity()
  var i4813 = data
  i4812.enabled = !!i4813[0]
  i4812.mode = i4813[1]
  i4812.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4813[2], i4812.curve)
  return i4812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4814 = root || new pc.ParticleSystemForceOverLifetime()
  var i4815 = data
  i4814.enabled = !!i4815[0]
  i4814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4815[1], i4814.x)
  i4814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4815[2], i4814.y)
  i4814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4815[3], i4814.z)
  i4814.space = i4815[4]
  i4814.randomized = !!i4815[5]
  return i4814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4816 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4817 = data
  i4816.enabled = !!i4817[0]
  i4816.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4817[1], i4816.limit)
  i4816.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4817[2], i4816.limitX)
  i4816.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4817[3], i4816.limitY)
  i4816.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4817[4], i4816.limitZ)
  i4816.dampen = i4817[5]
  i4816.separateAxes = !!i4817[6]
  i4816.space = i4817[7]
  i4816.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4817[8], i4816.drag)
  i4816.multiplyDragByParticleSize = !!i4817[9]
  i4816.multiplyDragByParticleVelocity = !!i4817[10]
  return i4816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4819 = data
  i4818.enabled = !!i4819[0]
  request.r(i4819[1], i4819[2], 0, i4818, 'sharedMaterial')
  var i4821 = i4819[3]
  var i4820 = []
  for(var i = 0; i < i4821.length; i += 2) {
  request.r(i4821[i + 0], i4821[i + 1], 2, i4820, '')
  }
  i4818.sharedMaterials = i4820
  i4818.receiveShadows = !!i4819[4]
  i4818.shadowCastingMode = i4819[5]
  i4818.sortingLayerID = i4819[6]
  i4818.sortingOrder = i4819[7]
  i4818.lightmapIndex = i4819[8]
  i4818.lightmapSceneIndex = i4819[9]
  i4818.lightmapScaleOffset = new pc.Vec4( i4819[10], i4819[11], i4819[12], i4819[13] )
  i4818.lightProbeUsage = i4819[14]
  i4818.reflectionProbeUsage = i4819[15]
  request.r(i4819[16], i4819[17], 0, i4818, 'mesh')
  i4818.meshCount = i4819[18]
  i4818.activeVertexStreamsCount = i4819[19]
  i4818.alignment = i4819[20]
  i4818.renderMode = i4819[21]
  i4818.sortMode = i4819[22]
  i4818.lengthScale = i4819[23]
  i4818.velocityScale = i4819[24]
  i4818.cameraVelocityScale = i4819[25]
  i4818.normalDirection = i4819[26]
  i4818.sortingFudge = i4819[27]
  i4818.minParticleSize = i4819[28]
  i4818.maxParticleSize = i4819[29]
  i4818.pivot = new pc.Vec3( i4819[30], i4819[31], i4819[32] )
  request.r(i4819[33], i4819[34], 0, i4818, 'trailMaterial')
  return i4818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4823 = data
  i4822.name = i4823[0]
  i4822.atlasId = i4823[1]
  i4822.mipmapCount = i4823[2]
  i4822.hdr = !!i4823[3]
  i4822.size = i4823[4]
  i4822.anisoLevel = i4823[5]
  i4822.filterMode = i4823[6]
  i4822.wrapMode = i4823[7]
  var i4825 = i4823[8]
  var i4824 = []
  for(var i = 0; i < i4825.length; i += 4) {
    i4824.push( UnityEngine.Rect.MinMaxRect(i4825[i + 0], i4825[i + 1], i4825[i + 2], i4825[i + 3]) );
  }
  i4822.rects = i4824
  return i4822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4829 = data
  i4828.name = i4829[0]
  i4828.index = i4829[1]
  i4828.startup = !!i4829[2]
  return i4828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4831 = data
  i4830.enabled = !!i4831[0]
  i4830.aspect = i4831[1]
  i4830.orthographic = !!i4831[2]
  i4830.orthographicSize = i4831[3]
  i4830.backgroundColor = new pc.Color(i4831[4], i4831[5], i4831[6], i4831[7])
  i4830.nearClipPlane = i4831[8]
  i4830.farClipPlane = i4831[9]
  i4830.fieldOfView = i4831[10]
  i4830.depth = i4831[11]
  i4830.clearFlags = i4831[12]
  i4830.cullingMask = i4831[13]
  i4830.rect = i4831[14]
  request.r(i4831[15], i4831[16], 0, i4830, 'targetTexture')
  i4830.usePhysicalProperties = !!i4831[17]
  i4830.focalLength = i4831[18]
  i4830.sensorSize = new pc.Vec2( i4831[19], i4831[20] )
  i4830.lensShift = new pc.Vec2( i4831[21], i4831[22] )
  i4830.gateFit = i4831[23]
  return i4830
}

Deserializers["FollowPosition"] = function (request, data, root) {
  var i4832 = root || request.c( 'FollowPosition' )
  var i4833 = data
  request.r(i4833[0], i4833[1], 0, i4832, 'objFollow')
  request.r(i4833[2], i4833[3], 0, i4832, 'target')
  i4832.smooth = i4833[4]
  return i4832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i4834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i4835 = data
  i4834.enabled = !!i4835[0]
  i4834.type = i4835[1]
  i4834.color = new pc.Color(i4835[2], i4835[3], i4835[4], i4835[5])
  i4834.cullingMask = i4835[6]
  i4834.intensity = i4835[7]
  i4834.range = i4835[8]
  i4834.spotAngle = i4835[9]
  i4834.shadows = i4835[10]
  i4834.shadowNormalBias = i4835[11]
  i4834.shadowBias = i4835[12]
  i4834.shadowStrength = i4835[13]
  i4834.shadowResolution = i4835[14]
  i4834.lightmapBakeType = i4835[15]
  i4834.renderMode = i4835[16]
  request.r(i4835[17], i4835[18], 0, i4834, 'cookie')
  i4834.cookieSize = i4835[19]
  return i4834
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4836 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4837 = data
  request.r(i4837[0], i4837[1], 0, i4836, 'm_FirstSelected')
  i4836.m_sendNavigationEvents = !!i4837[2]
  i4836.m_DragThreshold = i4837[3]
  return i4836
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4838 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4839 = data
  i4838.m_HorizontalAxis = i4839[0]
  i4838.m_VerticalAxis = i4839[1]
  i4838.m_SubmitButton = i4839[2]
  i4838.m_CancelButton = i4839[3]
  i4838.m_InputActionsPerSecond = i4839[4]
  i4838.m_RepeatDelay = i4839[5]
  i4838.m_ForceModuleActive = !!i4839[6]
  i4838.m_SendPointerHoverToParent = !!i4839[7]
  return i4838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4841 = data
  i4840.pivot = new pc.Vec2( i4841[0], i4841[1] )
  i4840.anchorMin = new pc.Vec2( i4841[2], i4841[3] )
  i4840.anchorMax = new pc.Vec2( i4841[4], i4841[5] )
  i4840.sizeDelta = new pc.Vec2( i4841[6], i4841[7] )
  i4840.anchoredPosition3D = new pc.Vec3( i4841[8], i4841[9], i4841[10] )
  i4840.rotation = new pc.Quat(i4841[11], i4841[12], i4841[13], i4841[14])
  i4840.scale = new pc.Vec3( i4841[15], i4841[16], i4841[17] )
  return i4840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4843 = data
  i4842.enabled = !!i4843[0]
  i4842.planeDistance = i4843[1]
  i4842.referencePixelsPerUnit = i4843[2]
  i4842.isFallbackOverlay = !!i4843[3]
  i4842.renderMode = i4843[4]
  i4842.renderOrder = i4843[5]
  i4842.sortingLayerName = i4843[6]
  i4842.sortingOrder = i4843[7]
  i4842.scaleFactor = i4843[8]
  request.r(i4843[9], i4843[10], 0, i4842, 'worldCamera')
  i4842.overrideSorting = !!i4843[11]
  i4842.pixelPerfect = !!i4843[12]
  i4842.targetDisplay = i4843[13]
  i4842.overridePixelPerfect = !!i4843[14]
  return i4842
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4844 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4845 = data
  i4844.m_UiScaleMode = i4845[0]
  i4844.m_ReferencePixelsPerUnit = i4845[1]
  i4844.m_ScaleFactor = i4845[2]
  i4844.m_ReferenceResolution = new pc.Vec2( i4845[3], i4845[4] )
  i4844.m_ScreenMatchMode = i4845[5]
  i4844.m_MatchWidthOrHeight = i4845[6]
  i4844.m_PhysicalUnit = i4845[7]
  i4844.m_FallbackScreenDPI = i4845[8]
  i4844.m_DefaultSpriteDPI = i4845[9]
  i4844.m_DynamicPixelsPerUnit = i4845[10]
  i4844.m_PresetInfoIsWorld = !!i4845[11]
  return i4844
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4846 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4847 = data
  i4846.m_IgnoreReversedGraphics = !!i4847[0]
  i4846.m_BlockingObjects = i4847[1]
  i4846.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4847[2] )
  return i4846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4849 = data
  i4848.cullTransparentMesh = !!i4849[0]
  return i4848
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4850 = root || request.c( 'UnityEngine.UI.Text' )
  var i4851 = data
  i4850.m_FontData = request.d('UnityEngine.UI.FontData', i4851[0], i4850.m_FontData)
  i4850.m_Text = i4851[1]
  request.r(i4851[2], i4851[3], 0, i4850, 'm_Material')
  i4850.m_Maskable = !!i4851[4]
  i4850.m_Color = new pc.Color(i4851[5], i4851[6], i4851[7], i4851[8])
  i4850.m_RaycastTarget = !!i4851[9]
  i4850.m_RaycastPadding = new pc.Vec4( i4851[10], i4851[11], i4851[12], i4851[13] )
  return i4850
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4852 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4853 = data
  request.r(i4853[0], i4853[1], 0, i4852, 'm_Font')
  i4852.m_FontSize = i4853[2]
  i4852.m_FontStyle = i4853[3]
  i4852.m_BestFit = !!i4853[4]
  i4852.m_MinSize = i4853[5]
  i4852.m_MaxSize = i4853[6]
  i4852.m_Alignment = i4853[7]
  i4852.m_AlignByGeometry = !!i4853[8]
  i4852.m_RichText = !!i4853[9]
  i4852.m_HorizontalOverflow = i4853[10]
  i4852.m_VerticalOverflow = i4853[11]
  i4852.m_LineSpacing = i4853[12]
  return i4852
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4854 = root || request.c( 'UnityEngine.UI.Image' )
  var i4855 = data
  request.r(i4855[0], i4855[1], 0, i4854, 'm_Sprite')
  i4854.m_Type = i4855[2]
  i4854.m_PreserveAspect = !!i4855[3]
  i4854.m_FillCenter = !!i4855[4]
  i4854.m_FillMethod = i4855[5]
  i4854.m_FillAmount = i4855[6]
  i4854.m_FillClockwise = !!i4855[7]
  i4854.m_FillOrigin = i4855[8]
  i4854.m_UseSpriteMesh = !!i4855[9]
  i4854.m_PixelsPerUnitMultiplier = i4855[10]
  request.r(i4855[11], i4855[12], 0, i4854, 'm_Material')
  i4854.m_Maskable = !!i4855[13]
  i4854.m_Color = new pc.Color(i4855[14], i4855[15], i4855[16], i4855[17])
  i4854.m_RaycastTarget = !!i4855[18]
  i4854.m_RaycastPadding = new pc.Vec4( i4855[19], i4855[20], i4855[21], i4855[22] )
  return i4854
}

Deserializers["MoveByPath"] = function (request, data, root) {
  var i4856 = root || request.c( 'MoveByPath' )
  var i4857 = data
  var i4859 = i4857[0]
  var i4858 = []
  for(var i = 0; i < i4859.length; i += 2) {
  request.r(i4859[i + 0], i4859[i + 1], 2, i4858, '')
  }
  i4856.paths = i4858
  var i4861 = i4857[1]
  var i4860 = []
  for(var i = 0; i < i4861.length; i += 3) {
    i4860.push( new pc.Vec3( i4861[i + 0], i4861[i + 1], i4861[i + 2] ) );
  }
  i4856.path = i4860
  request.r(i4857[2], i4857[3], 0, i4856, 'target')
  i4856.timeMove = i4857[4]
  i4856.isReady = !!i4857[5]
  return i4856
}

Deserializers["DynamicJoystick"] = function (request, data, root) {
  var i4864 = root || request.c( 'DynamicJoystick' )
  var i4865 = data
  request.r(i4865[0], i4865[1], 0, i4864, 'background')
  request.r(i4865[2], i4865[3], 0, i4864, 'handleTranf')
  request.r(i4865[4], i4865[5], 0, i4864, 'handleObj')
  request.r(i4865[6], i4865[7], 0, i4864, 'character')
  i4864.on = new pc.Color(i4865[8], i4865[9], i4865[10], i4865[11])
  i4864.off = new pc.Color(i4865[12], i4865[13], i4865[14], i4865[15])
  request.r(i4865[16], i4865[17], 0, i4864, 'imgBG')
  request.r(i4865[18], i4865[19], 0, i4864, 'imgHandle')
  i4864.moveThreshold = i4865[20]
  i4864.handleRange = i4865[21]
  i4864.deadZone = i4865[22]
  i4864.axisOptions = i4865[23]
  i4864.snapX = !!i4865[24]
  i4864.snapY = !!i4865[25]
  return i4864
}

Deserializers["CharacterBehaviour"] = function (request, data, root) {
  var i4866 = root || request.c( 'CharacterBehaviour' )
  var i4867 = data
  request.r(i4867[0], i4867[1], 0, i4866, 'moveByJoystick')
  request.r(i4867[2], i4867[3], 0, i4866, 'characterAnimator')
  request.r(i4867[4], i4867[5], 0, i4866, 'detectPlaceComponent')
  request.r(i4867[6], i4867[7], 0, i4866, 'stackControl')
  request.r(i4867[8], i4867[9], 0, i4866, 'tut')
  i4866.timeNotMove = i4867[10]
  request.r(i4867[11], i4867[12], 0, i4866, 'effTut')
  i4866.timeCheckMove = i4867[13]
  return i4866
}

Deserializers["MoveByJoystick"] = function (request, data, root) {
  var i4868 = root || request.c( 'MoveByJoystick' )
  var i4869 = data
  i4868.speed = i4869[0]
  request.r(i4869[1], i4869[2], 0, i4868, 'rb')
  request.r(i4869[3], i4869[4], 0, i4868, 'variableJoystick')
  request.r(i4869[5], i4869[6], 0, i4868, 'transf')
  i4868.smoothRotation = i4869[7]
  i4868.smoothMove = i4869[8]
  i4868.smoothRotationByTarget = i4869[9]
  return i4868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i4870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i4871 = data
  i4870.mass = i4871[0]
  i4870.drag = i4871[1]
  i4870.angularDrag = i4871[2]
  i4870.useGravity = !!i4871[3]
  i4870.isKinematic = !!i4871[4]
  i4870.constraints = i4871[5]
  i4870.maxAngularVelocity = i4871[6]
  i4870.collisionDetectionMode = i4871[7]
  i4870.interpolation = i4871[8]
  return i4870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i4872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i4873 = data
  i4872.enabled = !!i4873[0]
  i4872.isTrigger = !!i4873[1]
  request.r(i4873[2], i4873[3], 0, i4872, 'material')
  i4872.center = new pc.Vec3( i4873[4], i4873[5], i4873[6] )
  i4872.radius = i4873[7]
  return i4872
}

Deserializers["CharacterAnimator"] = function (request, data, root) {
  var i4874 = root || request.c( 'CharacterAnimator' )
  var i4875 = data
  request.r(i4875[0], i4875[1], 0, i4874, 'animator')
  request.r(i4875[2], i4875[3], 0, i4874, 'objCook')
  return i4874
}

Deserializers["DetectPlaceComponent"] = function (request, data, root) {
  var i4876 = root || request.c( 'DetectPlaceComponent' )
  var i4877 = data
  request.r(i4877[0], i4877[1], 0, i4876, 'character')
  i4876.layerWaitPlace = UnityEngine.LayerMask.FromIntegerValue( i4877[2] )
  i4876.enableDetect = !!i4877[3]
  i4876.detectDelay = i4877[4]
  i4876.radius = i4877[5]
  i4876.timeDelayDetect = i4877[6]
  return i4876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4879 = data
  request.r(i4879[0], i4879[1], 0, i4878, 'animatorController')
  i4878.updateMode = i4879[2]
  var i4881 = i4879[3]
  var i4880 = []
  for(var i = 0; i < i4881.length; i += 2) {
  request.r(i4881[i + 0], i4881[i + 1], 2, i4880, '')
  }
  i4878.humanBones = i4880
  i4878.enabled = !!i4879[4]
  return i4878
}

Deserializers["StackControl"] = function (request, data, root) {
  var i4882 = root || request.c( 'StackControl' )
  var i4883 = data
  var i4885 = i4883[0]
  var i4884 = new (System.Collections.Generic.List$1(Bridge.ns('StackObject')))
  for(var i = 0; i < i4885.length; i += 2) {
  request.r(i4885[i + 0], i4885[i + 1], 1, i4884, '')
  }
  i4882.stackObjects = i4884
  var i4887 = i4883[1]
  var i4886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4887.length; i += 2) {
  request.r(i4887[i + 0], i4887[i + 1], 1, i4886, '')
  }
  i4882.stackPositions = i4886
  return i4882
}

Deserializers["CharacterArrowTut"] = function (request, data, root) {
  var i4892 = root || request.c( 'CharacterArrowTut' )
  var i4893 = data
  request.r(i4893[0], i4893[1], 0, i4892, 'target')
  request.r(i4893[2], i4893[3], 0, i4892, 'traf')
  return i4892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4895 = data
  i4894.enabled = !!i4895[0]
  request.r(i4895[1], i4895[2], 0, i4894, 'sharedMaterial')
  var i4897 = i4895[3]
  var i4896 = []
  for(var i = 0; i < i4897.length; i += 2) {
  request.r(i4897[i + 0], i4897[i + 1], 2, i4896, '')
  }
  i4894.sharedMaterials = i4896
  i4894.receiveShadows = !!i4895[4]
  i4894.shadowCastingMode = i4895[5]
  i4894.sortingLayerID = i4895[6]
  i4894.sortingOrder = i4895[7]
  i4894.lightmapIndex = i4895[8]
  i4894.lightmapSceneIndex = i4895[9]
  i4894.lightmapScaleOffset = new pc.Vec4( i4895[10], i4895[11], i4895[12], i4895[13] )
  i4894.lightProbeUsage = i4895[14]
  i4894.reflectionProbeUsage = i4895[15]
  i4894.color = new pc.Color(i4895[16], i4895[17], i4895[18], i4895[19])
  request.r(i4895[20], i4895[21], 0, i4894, 'sprite')
  i4894.flipX = !!i4895[22]
  i4894.flipY = !!i4895[23]
  i4894.drawMode = i4895[24]
  i4894.size = new pc.Vec2( i4895[25], i4895[26] )
  i4894.tileMode = i4895[27]
  i4894.adaptiveModeThreshold = i4895[28]
  i4894.maskInteraction = i4895[29]
  i4894.spriteSortPoint = i4895[30]
  return i4894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4899 = data
  i4898.center = new pc.Vec3( i4899[0], i4899[1], i4899[2] )
  i4898.size = new pc.Vec3( i4899[3], i4899[4], i4899[5] )
  i4898.enabled = !!i4899[6]
  i4898.isTrigger = !!i4899[7]
  request.r(i4899[8], i4899[9], 0, i4898, 'material')
  return i4898
}

Deserializers["CollectObjectPlace"] = function (request, data, root) {
  var i4900 = root || request.c( 'CollectObjectPlace' )
  var i4901 = data
  i4900.isTimeDelay = i4901[0]
  request.r(i4901[1], i4901[2], 0, i4900, 'stackControl')
  request.r(i4901[3], i4901[4], 0, i4900, 'tutController')
  return i4900
}

Deserializers["KitchenPlace"] = function (request, data, root) {
  var i4902 = root || request.c( 'KitchenPlace' )
  var i4903 = data
  request.r(i4903[0], i4903[1], 0, i4902, 'posCook')
  request.r(i4903[2], i4903[3], 0, i4902, 'foodProduct')
  request.r(i4903[4], i4903[5], 0, i4902, 'foodSpawnPos')
  i4902.isTimeDelay = i4903[6]
  request.r(i4903[7], i4903[8], 0, i4902, 'cookAnim')
  request.r(i4903[9], i4903[10], 0, i4902, 'stackInput')
  request.r(i4903[11], i4903[12], 0, i4902, 'stackOutput')
  i4902.timeCook = i4903[13]
  i4902.isCooking = !!i4903[14]
  i4902.isCookComplete = !!i4903[15]
  request.r(i4903[16], i4903[17], 0, i4902, 'tutController')
  request.r(i4903[18], i4903[19], 0, i4902, 'objTut')
  request.r(i4903[20], i4903[21], 0, i4902, 'sound')
  request.r(i4903[22], i4903[23], 0, i4902, 'clip')
  return i4902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4905 = data
  request.r(i4905[0], i4905[1], 0, i4904, 'clip')
  request.r(i4905[2], i4905[3], 0, i4904, 'outputAudioMixerGroup')
  i4904.playOnAwake = !!i4905[4]
  i4904.loop = !!i4905[5]
  i4904.time = i4905[6]
  i4904.volume = i4905[7]
  i4904.pitch = i4905[8]
  i4904.enabled = !!i4905[9]
  return i4904
}

Deserializers["PickupPlace"] = function (request, data, root) {
  var i4906 = root || request.c( 'PickupPlace' )
  var i4907 = data
  request.r(i4907[0], i4907[1], 0, i4906, 'tutController')
  i4906.timeDelay = i4907[2]
  request.r(i4907[3], i4907[4], 0, i4906, 'stackInput')
  request.r(i4907[5], i4907[6], 0, i4906, 'col')
  return i4906
}

Deserializers["DinnerTable"] = function (request, data, root) {
  var i4908 = root || request.c( 'DinnerTable' )
  var i4909 = data
  var i4911 = i4909[0]
  var i4910 = []
  for(var i = 0; i < i4911.length; i += 2) {
  request.r(i4911[i + 0], i4911[i + 1], 2, i4910, '')
  }
  i4908.customerControllers = i4910
  request.r(i4909[1], i4909[2], 0, i4908, 'stackControl')
  i4908.timeEat = i4909[3]
  request.r(i4909[4], i4909[5], 0, i4908, 'tutController')
  return i4908
}

Deserializers["CustomerAnimator"] = function (request, data, root) {
  var i4914 = root || request.c( 'CustomerAnimator' )
  var i4915 = data
  request.r(i4915[0], i4915[1], 0, i4914, 'eatObj')
  request.r(i4915[2], i4915[3], 0, i4914, 'animator')
  return i4914
}

Deserializers["CustomerController"] = function (request, data, root) {
  var i4916 = root || request.c( 'CustomerController' )
  var i4917 = data
  request.r(i4917[0], i4917[1], 0, i4916, 'customerAnimator')
  request.r(i4917[2], i4917[3], 0, i4916, 'purchasePos')
  i4916.timeMove = i4917[4]
  return i4916
}

Deserializers["CashierTable"] = function (request, data, root) {
  var i4918 = root || request.c( 'CashierTable' )
  var i4919 = data
  var i4921 = i4919[0]
  var i4920 = []
  for(var i = 0; i < i4921.length; i += 2) {
  request.r(i4921[i + 0], i4921[i + 1], 2, i4920, '')
  }
  i4918.customerControllers = i4920
  var i4923 = i4919[1]
  var i4922 = new (System.Collections.Generic.List$1(Bridge.ns('StackObject')))
  for(var i = 0; i < i4923.length; i += 2) {
  request.r(i4923[i + 0], i4923[i + 1], 1, i4922, '')
  }
  i4918.moneys = i4922
  request.r(i4919[2], i4919[3], 0, i4918, 'tutController')
  request.r(i4919[4], i4919[5], 0, i4918, 'stackMoney')
  i4918.isReady = !!i4919[6]
  return i4918
}

Deserializers["InstallPlace"] = function (request, data, root) {
  var i4924 = root || request.c( 'InstallPlace' )
  var i4925 = data
  return i4924
}

Deserializers["TutController"] = function (request, data, root) {
  var i4926 = root || request.c( 'TutController' )
  var i4927 = data
  var i4929 = i4927[0]
  var i4928 = []
  for(var i = 0; i < i4929.length; i += 2) {
  request.r(i4929[i + 0], i4929[i + 1], 2, i4928, '')
  }
  i4926.objectActives = i4928
  var i4931 = i4927[1]
  var i4930 = []
  for(var i = 0; i < i4931.length; i += 2) {
  request.r(i4931[i + 0], i4931[i + 1], 2, i4930, '')
  }
  i4926.posTut = i4930
  request.r(i4927[2], i4927[3], 0, i4926, 'arrowTut')
  i4926.index = i4927[4]
  request.r(i4927[5], i4927[6], 0, i4926, 'characterArrowTut')
  return i4926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4935 = data
  i4934.ambientIntensity = i4935[0]
  i4934.reflectionIntensity = i4935[1]
  i4934.ambientMode = i4935[2]
  i4934.ambientLight = new pc.Color(i4935[3], i4935[4], i4935[5], i4935[6])
  i4934.ambientSkyColor = new pc.Color(i4935[7], i4935[8], i4935[9], i4935[10])
  i4934.ambientGroundColor = new pc.Color(i4935[11], i4935[12], i4935[13], i4935[14])
  i4934.ambientEquatorColor = new pc.Color(i4935[15], i4935[16], i4935[17], i4935[18])
  i4934.fogColor = new pc.Color(i4935[19], i4935[20], i4935[21], i4935[22])
  i4934.fogEndDistance = i4935[23]
  i4934.fogStartDistance = i4935[24]
  i4934.fogDensity = i4935[25]
  i4934.fog = !!i4935[26]
  request.r(i4935[27], i4935[28], 0, i4934, 'skybox')
  i4934.fogMode = i4935[29]
  var i4937 = i4935[30]
  var i4936 = []
  for(var i = 0; i < i4937.length; i += 1) {
    i4936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4937[i + 0]) );
  }
  i4934.lightmaps = i4936
  i4934.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4935[31], i4934.lightProbes)
  i4934.lightmapsMode = i4935[32]
  i4934.mixedBakeMode = i4935[33]
  i4934.environmentLightingMode = i4935[34]
  i4934.ambientProbe = new pc.SphericalHarmonicsL2(i4935[35])
  i4934.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4935[36])
  i4934.useReferenceAmbientProbe = !!i4935[37]
  request.r(i4935[38], i4935[39], 0, i4934, 'customReflection')
  request.r(i4935[40], i4935[41], 0, i4934, 'defaultReflection')
  i4934.defaultReflectionMode = i4935[42]
  i4934.defaultReflectionResolution = i4935[43]
  i4934.sunLightObjectId = i4935[44]
  i4934.pixelLightCount = i4935[45]
  i4934.defaultReflectionHDR = !!i4935[46]
  i4934.hasLightDataAsset = !!i4935[47]
  i4934.hasManualGenerate = !!i4935[48]
  return i4934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4941 = data
  request.r(i4941[0], i4941[1], 0, i4940, 'lightmapColor')
  request.r(i4941[2], i4941[3], 0, i4940, 'lightmapDirection')
  return i4940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4942 = root || new UnityEngine.LightProbes()
  var i4943 = data
  return i4942
}

Deserializers["FixedJoystick"] = function (request, data, root) {
  var i4948 = root || request.c( 'FixedJoystick' )
  var i4949 = data
  request.r(i4949[0], i4949[1], 0, i4948, 'background')
  request.r(i4949[2], i4949[3], 0, i4948, 'handleTranf')
  request.r(i4949[4], i4949[5], 0, i4948, 'handleObj')
  i4948.handleRange = i4949[6]
  i4948.deadZone = i4949[7]
  i4948.axisOptions = i4949[8]
  i4948.snapX = !!i4949[9]
  i4948.snapY = !!i4949[10]
  return i4948
}

Deserializers["FloatingJoystick"] = function (request, data, root) {
  var i4950 = root || request.c( 'FloatingJoystick' )
  var i4951 = data
  request.r(i4951[0], i4951[1], 0, i4950, 'background')
  request.r(i4951[2], i4951[3], 0, i4950, 'handleTranf')
  request.r(i4951[4], i4951[5], 0, i4950, 'handleObj')
  i4950.handleRange = i4951[6]
  i4950.deadZone = i4951[7]
  i4950.axisOptions = i4951[8]
  i4950.snapX = !!i4951[9]
  i4950.snapY = !!i4951[10]
  return i4950
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i4952 = root || request.c( 'VariableJoystick' )
  var i4953 = data
  request.r(i4953[0], i4953[1], 0, i4952, 'background')
  request.r(i4953[2], i4953[3], 0, i4952, 'handleTranf')
  request.r(i4953[4], i4953[5], 0, i4952, 'handleObj')
  i4952.moveThreshold = i4953[6]
  i4952.joystickType = i4953[7]
  i4952.handleRange = i4953[8]
  i4952.deadZone = i4953[9]
  i4952.axisOptions = i4953[10]
  i4952.snapX = !!i4953[11]
  i4952.snapY = !!i4953[12]
  return i4952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4955 = data
  var i4957 = i4955[0]
  var i4956 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i4957.length; i += 1) {
    i4956.add(i4957[i + 0]);
  }
  i4954.invalidShaderVariants = i4956
  i4954.name = i4955[1]
  i4954.guid = i4955[2]
  var i4959 = i4955[3]
  var i4958 = []
  for(var i = 0; i < i4959.length; i += 1) {
    i4958.push( i4959[i + 0] );
  }
  i4954.shaderDefinedKeywords = i4958
  var i4961 = i4955[4]
  var i4960 = []
  for(var i = 0; i < i4961.length; i += 1) {
    i4960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4961[i + 0]) );
  }
  i4954.passes = i4960
  var i4963 = i4955[5]
  var i4962 = []
  for(var i = 0; i < i4963.length; i += 1) {
    i4962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4963[i + 0]) );
  }
  i4954.usePasses = i4962
  var i4965 = i4955[6]
  var i4964 = []
  for(var i = 0; i < i4965.length; i += 1) {
    i4964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4965[i + 0]) );
  }
  i4954.defaultParameterValues = i4964
  request.r(i4955[7], i4955[8], 0, i4954, 'unityFallbackShader')
  i4954.readDepth = !!i4955[9]
  i4954.isCreatedByShaderGraph = !!i4955[10]
  i4954.usedBatchUniforms = i4955[11]
  return i4954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4972 = root || new pc.UnityShaderPass()
  var i4973 = data
  i4972.id = i4973[0]
  i4972.subShaderIndex = i4973[1]
  i4972.name = i4973[2]
  i4972.passType = i4973[3]
  i4972.usePass = !!i4973[4]
  i4972.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[5], i4972.zTest)
  i4972.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[6], i4972.zWrite)
  i4972.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[7], i4972.culling)
  i4972.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4973[8], i4972.blending)
  i4972.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4973[9], i4972.alphaBlending)
  i4972.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[10], i4972.colorWriteMask)
  i4972.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[11], i4972.offsetUnits)
  i4972.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[12], i4972.offsetFactor)
  i4972.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[13], i4972.stencilRef)
  i4972.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[14], i4972.stencilReadMask)
  i4972.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[15], i4972.stencilWriteMask)
  i4972.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4973[16], i4972.stencilOp)
  i4972.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4973[17], i4972.stencilOpFront)
  i4972.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4973[18], i4972.stencilOpBack)
  var i4975 = i4973[19]
  var i4974 = []
  for(var i = 0; i < i4975.length; i += 1) {
    i4974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4975[i + 0]) );
  }
  i4972.tags = i4974
  var i4977 = i4973[20]
  var i4976 = []
  for(var i = 0; i < i4977.length; i += 1) {
    i4976.push( i4977[i + 0] );
  }
  i4972.passDefinedKeywords = i4976
  var i4979 = i4973[21]
  var i4978 = []
  for(var i = 0; i < i4979.length; i += 1) {
    i4978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4979[i + 0]) );
  }
  i4972.passDefinedKeywordGroups = i4978
  var i4981 = i4973[22]
  var i4980 = []
  for(var i = 0; i < i4981.length; i += 1) {
    i4980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4981[i + 0]) );
  }
  i4972.variants = i4980
  var i4983 = i4973[23]
  var i4982 = []
  for(var i = 0; i < i4983.length; i += 1) {
    i4982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4983[i + 0]) );
  }
  i4972.excludedVariants = i4982
  i4972.hasDepthReader = !!i4973[24]
  return i4972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4985 = data
  i4984.val = i4985[0]
  i4984.name = i4985[1]
  return i4984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4987 = data
  i4986.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4987[0], i4986.src)
  i4986.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4987[1], i4986.dst)
  i4986.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4987[2], i4986.op)
  return i4986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4989 = data
  i4988.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4989[0], i4988.pass)
  i4988.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4989[1], i4988.fail)
  i4988.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4989[2], i4988.zFail)
  i4988.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4989[3], i4988.comp)
  return i4988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4993 = data
  i4992.name = i4993[0]
  i4992.value = i4993[1]
  return i4992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4997 = data
  var i4999 = i4997[0]
  var i4998 = []
  for(var i = 0; i < i4999.length; i += 1) {
    i4998.push( i4999[i + 0] );
  }
  i4996.keywords = i4998
  i4996.hasDiscard = !!i4997[1]
  return i4996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5003 = data
  i5002.passId = i5003[0]
  i5002.subShaderIndex = i5003[1]
  var i5005 = i5003[2]
  var i5004 = []
  for(var i = 0; i < i5005.length; i += 1) {
    i5004.push( i5005[i + 0] );
  }
  i5002.keywords = i5004
  i5002.vertexProgram = i5003[3]
  i5002.fragmentProgram = i5003[4]
  i5002.readDepth = !!i5003[5]
  return i5002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5009 = data
  request.r(i5009[0], i5009[1], 0, i5008, 'shader')
  i5008.pass = i5009[2]
  return i5008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5013 = data
  i5012.name = i5013[0]
  i5012.type = i5013[1]
  i5012.value = new pc.Vec4( i5013[2], i5013[3], i5013[4], i5013[5] )
  i5012.textureValue = i5013[6]
  return i5012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5015 = data
  i5014.name = i5015[0]
  request.r(i5015[1], i5015[2], 0, i5014, 'texture')
  i5014.aabb = i5015[3]
  i5014.vertices = i5015[4]
  i5014.triangles = i5015[5]
  i5014.textureRect = UnityEngine.Rect.MinMaxRect(i5015[6], i5015[7], i5015[8], i5015[9])
  i5014.packedRect = UnityEngine.Rect.MinMaxRect(i5015[10], i5015[11], i5015[12], i5015[13])
  i5014.border = new pc.Vec4( i5015[14], i5015[15], i5015[16], i5015[17] )
  i5014.transparency = i5015[18]
  i5014.bounds = i5015[19]
  i5014.pixelsPerUnit = i5015[20]
  i5014.textureWidth = i5015[21]
  i5014.textureHeight = i5015[22]
  i5014.nativeSize = new pc.Vec2( i5015[23], i5015[24] )
  i5014.pivot = new pc.Vec2( i5015[25], i5015[26] )
  i5014.textureRectOffset = new pc.Vec2( i5015[27], i5015[28] )
  return i5014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5017 = data
  i5016.name = i5017[0]
  return i5016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5019 = data
  i5018.name = i5019[0]
  i5018.wrapMode = i5019[1]
  i5018.isLooping = !!i5019[2]
  i5018.length = i5019[3]
  var i5021 = i5019[4]
  var i5020 = []
  for(var i = 0; i < i5021.length; i += 1) {
    i5020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5021[i + 0]) );
  }
  i5018.curves = i5020
  var i5023 = i5019[5]
  var i5022 = []
  for(var i = 0; i < i5023.length; i += 1) {
    i5022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5023[i + 0]) );
  }
  i5018.events = i5022
  i5018.halfPrecision = !!i5019[6]
  return i5018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5027 = data
  i5026.path = i5027[0]
  i5026.componentType = i5027[1]
  i5026.property = i5027[2]
  i5026.keys = i5027[3]
  var i5029 = i5027[4]
  var i5028 = []
  for(var i = 0; i < i5029.length; i += 1) {
    i5028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5029[i + 0]) );
  }
  i5026.objectReferenceKeys = i5028
  return i5026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5033 = data
  i5032.time = i5033[0]
  request.r(i5033[1], i5033[2], 0, i5032, 'value')
  return i5032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5037 = data
  i5036.functionName = i5037[0]
  i5036.floatParameter = i5037[1]
  i5036.intParameter = i5037[2]
  i5036.stringParameter = i5037[3]
  request.r(i5037[4], i5037[5], 0, i5036, 'objectReferenceParameter')
  i5036.time = i5037[6]
  return i5036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5039 = data
  i5038.name = i5039[0]
  i5038.ascent = i5039[1]
  i5038.originalLineHeight = i5039[2]
  i5038.fontSize = i5039[3]
  var i5041 = i5039[4]
  var i5040 = []
  for(var i = 0; i < i5041.length; i += 1) {
    i5040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5041[i + 0]) );
  }
  i5038.characterInfo = i5040
  request.r(i5039[5], i5039[6], 0, i5038, 'texture')
  i5038.originalFontSize = i5039[7]
  return i5038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5045 = data
  i5044.index = i5045[0]
  i5044.advance = i5045[1]
  i5044.bearing = i5045[2]
  i5044.glyphWidth = i5045[3]
  i5044.glyphHeight = i5045[4]
  i5044.minX = i5045[5]
  i5044.maxX = i5045[6]
  i5044.minY = i5045[7]
  i5044.maxY = i5045[8]
  i5044.uvBottomLeftX = i5045[9]
  i5044.uvBottomLeftY = i5045[10]
  i5044.uvBottomRightX = i5045[11]
  i5044.uvBottomRightY = i5045[12]
  i5044.uvTopLeftX = i5045[13]
  i5044.uvTopLeftY = i5045[14]
  i5044.uvTopRightX = i5045[15]
  i5044.uvTopRightY = i5045[16]
  return i5044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5047 = data
  i5046.name = i5047[0]
  var i5049 = i5047[1]
  var i5048 = []
  for(var i = 0; i < i5049.length; i += 1) {
    i5048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5049[i + 0]) );
  }
  i5046.states = i5048
  var i5051 = i5047[2]
  var i5050 = []
  for(var i = 0; i < i5051.length; i += 1) {
    i5050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5051[i + 0]) );
  }
  i5046.layers = i5050
  var i5053 = i5047[3]
  var i5052 = []
  for(var i = 0; i < i5053.length; i += 1) {
    i5052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5053[i + 0]) );
  }
  i5046.parameters = i5052
  i5046.animationClips = i5047[4]
  i5046.HasSubStateMachines = !!i5047[5]
  return i5046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5057 = data
  i5056.cycleOffset = i5057[0]
  i5056.cycleOffsetParameter = i5057[1]
  i5056.cycleOffsetParameterActive = !!i5057[2]
  i5056.mirror = !!i5057[3]
  i5056.mirrorParameter = i5057[4]
  i5056.mirrorParameterActive = !!i5057[5]
  i5056.motionId = i5057[6]
  i5056.nameHash = i5057[7]
  i5056.fullPathHash = i5057[8]
  i5056.speed = i5057[9]
  i5056.speedParameter = i5057[10]
  i5056.speedParameterActive = !!i5057[11]
  i5056.tag = i5057[12]
  i5056.name = i5057[13]
  i5056.layer = i5057[14]
  i5056.writeDefaultValues = !!i5057[15]
  var i5059 = i5057[16]
  var i5058 = []
  for(var i = 0; i < i5059.length; i += 1) {
    i5058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5059[i + 0]) );
  }
  i5056.transitions = i5058
  var i5061 = i5057[17]
  var i5060 = []
  for(var i = 0; i < i5061.length; i += 2) {
  request.r(i5061[i + 0], i5061[i + 1], 2, i5060, '')
  }
  i5056.behaviours = i5060
  return i5056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5065 = data
  i5064.fullPath = i5065[0]
  i5064.canTransitionToSelf = !!i5065[1]
  i5064.duration = i5065[2]
  i5064.exitTime = i5065[3]
  i5064.hasExitTime = !!i5065[4]
  i5064.hasFixedDuration = !!i5065[5]
  i5064.interruptionSource = i5065[6]
  i5064.offset = i5065[7]
  i5064.orderedInterruption = !!i5065[8]
  i5064.destinationStateNameHash = i5065[9]
  i5064.destinationStateMachineId = i5065[10]
  i5064.isExit = !!i5065[11]
  i5064.mute = !!i5065[12]
  i5064.solo = !!i5065[13]
  var i5067 = i5065[14]
  var i5066 = []
  for(var i = 0; i < i5067.length; i += 1) {
    i5066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5067[i + 0]) );
  }
  i5064.conditions = i5066
  return i5064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5071 = data
  i5070.mode = i5071[0]
  i5070.parameter = i5071[1]
  i5070.threshold = i5071[2]
  return i5070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5077 = data
  i5076.blendingMode = i5077[0]
  i5076.defaultWeight = i5077[1]
  i5076.name = i5077[2]
  i5076.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5077[3], i5076.stateMachine)
  return i5076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5079 = data
  i5078.id = i5079[0]
  i5078.defaultStateNameHash = i5079[1]
  var i5081 = i5079[2]
  var i5080 = []
  for(var i = 0; i < i5081.length; i += 1) {
    i5080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5081[i + 0]) );
  }
  i5078.entryTransitions = i5080
  var i5083 = i5079[3]
  var i5082 = []
  for(var i = 0; i < i5083.length; i += 1) {
    i5082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5083[i + 0]) );
  }
  i5078.anyStateTransitions = i5082
  return i5078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5087 = data
  i5086.destinationStateNameHash = i5087[0]
  i5086.destinationStateMachineId = i5087[1]
  i5086.isExit = !!i5087[2]
  i5086.mute = !!i5087[3]
  i5086.solo = !!i5087[4]
  var i5089 = i5087[5]
  var i5088 = []
  for(var i = 0; i < i5089.length; i += 1) {
    i5088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5089[i + 0]) );
  }
  i5086.conditions = i5088
  return i5086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5093 = data
  i5092.defaultBool = !!i5093[0]
  i5092.defaultFloat = i5093[1]
  i5092.defaultInt = i5093[2]
  i5092.name = i5093[3]
  i5092.nameHash = i5093[4]
  i5092.type = i5093[5]
  return i5092
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5094 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5095 = data
  i5094.useSafeMode = !!i5095[0]
  i5094.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5095[1], i5094.safeModeOptions)
  i5094.timeScale = i5095[2]
  i5094.unscaledTimeScale = i5095[3]
  i5094.useSmoothDeltaTime = !!i5095[4]
  i5094.maxSmoothUnscaledTime = i5095[5]
  i5094.rewindCallbackMode = i5095[6]
  i5094.showUnityEditorReport = !!i5095[7]
  i5094.logBehaviour = i5095[8]
  i5094.drawGizmos = !!i5095[9]
  i5094.defaultRecyclable = !!i5095[10]
  i5094.defaultAutoPlay = i5095[11]
  i5094.defaultUpdateType = i5095[12]
  i5094.defaultTimeScaleIndependent = !!i5095[13]
  i5094.defaultEaseType = i5095[14]
  i5094.defaultEaseOvershootOrAmplitude = i5095[15]
  i5094.defaultEasePeriod = i5095[16]
  i5094.defaultAutoKill = !!i5095[17]
  i5094.defaultLoopType = i5095[18]
  i5094.debugMode = !!i5095[19]
  i5094.debugStoreTargetId = !!i5095[20]
  i5094.showPreviewPanel = !!i5095[21]
  i5094.storeSettingsLocation = i5095[22]
  i5094.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5095[23], i5094.modules)
  i5094.createASMDEF = !!i5095[24]
  i5094.showPlayingTweens = !!i5095[25]
  i5094.showPausedTweens = !!i5095[26]
  return i5094
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5096 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5097 = data
  i5096.logBehaviour = i5097[0]
  i5096.nestedTweenFailureBehaviour = i5097[1]
  return i5096
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5098 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5099 = data
  i5098.showPanel = !!i5099[0]
  i5098.audioEnabled = !!i5099[1]
  i5098.physicsEnabled = !!i5099[2]
  i5098.physics2DEnabled = !!i5099[3]
  i5098.spriteEnabled = !!i5099[4]
  i5098.uiEnabled = !!i5099[5]
  i5098.textMeshProEnabled = !!i5099[6]
  i5098.tk2DEnabled = !!i5099[7]
  i5098.deAudioEnabled = !!i5099[8]
  i5098.deUnityExtendedEnabled = !!i5099[9]
  i5098.epoOutlineEnabled = !!i5099[10]
  return i5098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5101 = data
  var i5103 = i5101[0]
  var i5102 = []
  for(var i = 0; i < i5103.length; i += 1) {
    i5102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5103[i + 0]) );
  }
  i5100.files = i5102
  i5100.componentToPrefabIds = i5101[1]
  return i5100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5107 = data
  i5106.path = i5107[0]
  request.r(i5107[1], i5107[2], 0, i5106, 'unityObject')
  return i5106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5109 = data
  var i5111 = i5109[0]
  var i5110 = []
  for(var i = 0; i < i5111.length; i += 1) {
    i5110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5111[i + 0]) );
  }
  i5108.scriptsExecutionOrder = i5110
  var i5113 = i5109[1]
  var i5112 = []
  for(var i = 0; i < i5113.length; i += 1) {
    i5112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5113[i + 0]) );
  }
  i5108.sortingLayers = i5112
  var i5115 = i5109[2]
  var i5114 = []
  for(var i = 0; i < i5115.length; i += 1) {
    i5114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5115[i + 0]) );
  }
  i5108.cullingLayers = i5114
  i5108.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5109[3], i5108.timeSettings)
  i5108.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5109[4], i5108.physicsSettings)
  i5108.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5109[5], i5108.physics2DSettings)
  i5108.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5109[6], i5108.qualitySettings)
  i5108.enableRealtimeShadows = !!i5109[7]
  i5108.enableAutoInstancing = !!i5109[8]
  i5108.enableDynamicBatching = !!i5109[9]
  i5108.lightmapEncodingQuality = i5109[10]
  i5108.desiredColorSpace = i5109[11]
  var i5117 = i5109[12]
  var i5116 = []
  for(var i = 0; i < i5117.length; i += 1) {
    i5116.push( i5117[i + 0] );
  }
  i5108.allTags = i5116
  return i5108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5121 = data
  i5120.name = i5121[0]
  i5120.value = i5121[1]
  return i5120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5125 = data
  i5124.id = i5125[0]
  i5124.name = i5125[1]
  i5124.value = i5125[2]
  return i5124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5129 = data
  i5128.id = i5129[0]
  i5128.name = i5129[1]
  return i5128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5131 = data
  i5130.fixedDeltaTime = i5131[0]
  i5130.maximumDeltaTime = i5131[1]
  i5130.timeScale = i5131[2]
  i5130.maximumParticleTimestep = i5131[3]
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5133 = data
  i5132.gravity = new pc.Vec3( i5133[0], i5133[1], i5133[2] )
  i5132.defaultSolverIterations = i5133[3]
  i5132.bounceThreshold = i5133[4]
  i5132.autoSyncTransforms = !!i5133[5]
  i5132.autoSimulation = !!i5133[6]
  var i5135 = i5133[7]
  var i5134 = []
  for(var i = 0; i < i5135.length; i += 1) {
    i5134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5135[i + 0]) );
  }
  i5132.collisionMatrix = i5134
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5139 = data
  i5138.enabled = !!i5139[0]
  i5138.layerId = i5139[1]
  i5138.otherLayerId = i5139[2]
  return i5138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5141 = data
  request.r(i5141[0], i5141[1], 0, i5140, 'material')
  i5140.gravity = new pc.Vec2( i5141[2], i5141[3] )
  i5140.positionIterations = i5141[4]
  i5140.velocityIterations = i5141[5]
  i5140.velocityThreshold = i5141[6]
  i5140.maxLinearCorrection = i5141[7]
  i5140.maxAngularCorrection = i5141[8]
  i5140.maxTranslationSpeed = i5141[9]
  i5140.maxRotationSpeed = i5141[10]
  i5140.baumgarteScale = i5141[11]
  i5140.baumgarteTOIScale = i5141[12]
  i5140.timeToSleep = i5141[13]
  i5140.linearSleepTolerance = i5141[14]
  i5140.angularSleepTolerance = i5141[15]
  i5140.defaultContactOffset = i5141[16]
  i5140.autoSimulation = !!i5141[17]
  i5140.queriesHitTriggers = !!i5141[18]
  i5140.queriesStartInColliders = !!i5141[19]
  i5140.callbacksOnDisable = !!i5141[20]
  i5140.reuseCollisionCallbacks = !!i5141[21]
  i5140.autoSyncTransforms = !!i5141[22]
  var i5143 = i5141[23]
  var i5142 = []
  for(var i = 0; i < i5143.length; i += 1) {
    i5142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5143[i + 0]) );
  }
  i5140.collisionMatrix = i5142
  return i5140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5147 = data
  i5146.enabled = !!i5147[0]
  i5146.layerId = i5147[1]
  i5146.otherLayerId = i5147[2]
  return i5146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5149 = data
  var i5151 = i5149[0]
  var i5150 = []
  for(var i = 0; i < i5151.length; i += 1) {
    i5150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5151[i + 0]) );
  }
  i5148.qualityLevels = i5150
  var i5153 = i5149[1]
  var i5152 = []
  for(var i = 0; i < i5153.length; i += 1) {
    i5152.push( i5153[i + 0] );
  }
  i5148.names = i5152
  i5148.shadows = i5149[2]
  i5148.anisotropicFiltering = i5149[3]
  i5148.antiAliasing = i5149[4]
  i5148.lodBias = i5149[5]
  i5148.shadowCascades = i5149[6]
  i5148.shadowDistance = i5149[7]
  i5148.shadowmaskMode = i5149[8]
  i5148.shadowProjection = i5149[9]
  i5148.shadowResolution = i5149[10]
  i5148.softParticles = !!i5149[11]
  i5148.softVegetation = !!i5149[12]
  i5148.activeColorSpace = i5149[13]
  i5148.desiredColorSpace = i5149[14]
  i5148.masterTextureLimit = i5149[15]
  i5148.maxQueuedFrames = i5149[16]
  i5148.particleRaycastBudget = i5149[17]
  i5148.pixelLightCount = i5149[18]
  i5148.realtimeReflectionProbes = !!i5149[19]
  i5148.shadowCascade2Split = i5149[20]
  i5148.shadowCascade4Split = new pc.Vec3( i5149[21], i5149[22], i5149[23] )
  i5148.streamingMipmapsActive = !!i5149[24]
  i5148.vSyncCount = i5149[25]
  i5148.asyncUploadBufferSize = i5149[26]
  i5148.asyncUploadTimeSlice = i5149[27]
  i5148.billboardsFaceCameraPosition = !!i5149[28]
  i5148.shadowNearPlaneOffset = i5149[29]
  i5148.streamingMipmapsMemoryBudget = i5149[30]
  i5148.maximumLODLevel = i5149[31]
  i5148.streamingMipmapsAddAllCameras = !!i5149[32]
  i5148.streamingMipmapsMaxLevelReduction = i5149[33]
  i5148.streamingMipmapsRenderersPerFrame = i5149[34]
  i5148.resolutionScalingFixedDPIFactor = i5149[35]
  i5148.streamingMipmapsMaxFileIORequests = i5149[36]
  i5148.currentQualityLevel = i5149[37]
  return i5148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5159 = data
  i5158.weight = i5159[0]
  i5158.vertices = i5159[1]
  i5158.normals = i5159[2]
  i5158.tangents = i5159[3]
  return i5158
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[2],"69":[14],"70":[39],"71":[39],"72":[39],"73":[39],"74":[39],"75":[39],"76":[39],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[14],"92":[7],"93":[94],"95":[94],"22":[21],"96":[21],"97":[7,21],"98":[21,25],"99":[21],"100":[25,21],"101":[7],"102":[25,21],"103":[21],"104":[105],"106":[21],"107":[21],"24":[22],"28":[25,21],"108":[21],"23":[22],"109":[21],"110":[21],"111":[21],"112":[21],"113":[21],"114":[21],"115":[21],"116":[21],"117":[21],"118":[25,21],"119":[21],"120":[21],"121":[21],"122":[21],"26":[25,21],"123":[21],"124":[19],"125":[19],"20":[19],"126":[19],"127":[14],"128":[14],"129":[105],"130":[105]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MonoBehaviour","StackObject","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","FollowPosition","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Image","UnityEngine.Sprite","MoveByPath","DynamicJoystick","UnityEngine.GameObject","CharacterBehaviour","MoveByJoystick","CharacterAnimator","DetectPlaceComponent","StackControl","CharacterArrowTut","UnityEngine.Rigidbody","UnityEngine.SphereCollider","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","CollectObjectPlace","TutController","KitchenPlace","UnityEngine.AudioSource","UnityEngine.AudioClip","PickupPlace","DinnerTable","CustomerController","CustomerAnimator","CashierTable","InstallPlace","UnityEngine.Cubemap","FixedJoystick","FloatingJoystick","VariableJoystick","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1081";

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

Deserializers.buildID = "6c4296e2-967d-4cce-ab24-5c9f7d22ad58";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

