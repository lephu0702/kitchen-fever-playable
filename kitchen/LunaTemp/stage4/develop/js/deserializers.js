var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.JointSpring' )
  var i365 = data
  i364.spring = i365[0]
  i364.damper = i365[1]
  i364.targetPosition = i365[2]
  return i364
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.JointMotor' )
  var i367 = data
  i366.m_TargetVelocity = i367[0]
  i366.m_Force = i367[1]
  i366.m_FreeSpin = i367[2]
  return i366
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointLimits' )
  var i369 = data
  i368.m_Min = i369[0]
  i368.m_Max = i369[1]
  i368.m_Bounciness = i369[2]
  i368.m_BounceMinVelocity = i369[3]
  i368.m_ContactDistance = i369[4]
  i368.minBounce = i369[5]
  i368.maxBounce = i369[6]
  return i368
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointDrive' )
  var i371 = data
  i370.m_PositionSpring = i371[0]
  i370.m_PositionDamper = i371[1]
  i370.m_MaximumForce = i371[2]
  return i370
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i373 = data
  i372.m_Spring = i373[0]
  i372.m_Damper = i373[1]
  return i372
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i375 = data
  i374.m_Limit = i375[0]
  i374.m_Bounciness = i375[1]
  i374.m_ContactDistance = i375[2]
  return i374
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i377 = data
  i376.m_ExtremumSlip = i377[0]
  i376.m_ExtremumValue = i377[1]
  i376.m_AsymptoteSlip = i377[2]
  i376.m_AsymptoteValue = i377[3]
  i376.m_Stiffness = i377[4]
  return i376
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i379 = data
  i378.m_LowerAngle = i379[0]
  i378.m_UpperAngle = i379[1]
  return i378
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i381 = data
  i380.m_MotorSpeed = i381[0]
  i380.m_MaximumMotorTorque = i381[1]
  return i380
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i383 = data
  i382.m_DampingRatio = i383[0]
  i382.m_Frequency = i383[1]
  i382.m_Angle = i383[2]
  return i382
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i385 = data
  i384.m_LowerTranslation = i385[0]
  i384.m_UpperTranslation = i385[1]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i386 = root || new pc.UnityMaterial()
  var i387 = data
  i386.name = i387[0]
  request.r(i387[1], i387[2], 0, i386, 'shader')
  i386.renderQueue = i387[3]
  i386.enableInstancing = !!i387[4]
  var i389 = i387[5]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i389[i + 0]) );
  }
  i386.floatParameters = i388
  var i391 = i387[6]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i391[i + 0]) );
  }
  i386.colorParameters = i390
  var i393 = i387[7]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i393[i + 0]) );
  }
  i386.vectorParameters = i392
  var i395 = i387[8]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i395[i + 0]) );
  }
  i386.textureParameters = i394
  var i397 = i387[9]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i397[i + 0]) );
  }
  i386.materialFlags = i396
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i401 = data
  i400.name = i401[0]
  i400.value = i401[1]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i405 = data
  i404.name = i405[0]
  i404.value = new pc.Color(i405[1], i405[2], i405[3], i405[4])
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i409 = data
  i408.name = i409[0]
  i408.value = new pc.Vec4( i409[1], i409[2], i409[3], i409[4] )
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i413 = data
  i412.name = i413[0]
  request.r(i413[1], i413[2], 0, i412, 'value')
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i417 = data
  i416.name = i417[0]
  i416.enabled = !!i417[1]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i419 = data
  i418.position = new pc.Vec3( i419[0], i419[1], i419[2] )
  i418.scale = new pc.Vec3( i419[3], i419[4], i419[5] )
  i418.rotation = new pc.Quat(i419[6], i419[7], i419[8], i419[9])
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i421 = data
  i420.name = i421[0]
  i420.tagId = i421[1]
  i420.enabled = !!i421[2]
  i420.isStatic = !!i421[3]
  i420.layer = i421[4]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i423 = data
  i422.enabled = !!i423[0]
  request.r(i423[1], i423[2], 0, i422, 'sharedMaterial')
  var i425 = i423[3]
  var i424 = []
  for(var i = 0; i < i425.length; i += 2) {
  request.r(i425[i + 0], i425[i + 1], 2, i424, '')
  }
  i422.sharedMaterials = i424
  i422.receiveShadows = !!i423[4]
  i422.shadowCastingMode = i423[5]
  i422.sortingLayerID = i423[6]
  i422.sortingOrder = i423[7]
  i422.lightmapIndex = i423[8]
  i422.lightmapSceneIndex = i423[9]
  i422.lightmapScaleOffset = new pc.Vec4( i423[10], i423[11], i423[12], i423[13] )
  i422.lightProbeUsage = i423[14]
  i422.reflectionProbeUsage = i423[15]
  request.r(i423[16], i423[17], 0, i422, 'sharedMesh')
  var i427 = i423[18]
  var i426 = []
  for(var i = 0; i < i427.length; i += 2) {
  request.r(i427[i + 0], i427[i + 1], 2, i426, '')
  }
  i422.bones = i426
  i422.updateWhenOffscreen = !!i423[19]
  i422.localBounds = i423[20]
  request.r(i423[21], i423[22], 0, i422, 'rootBone')
  var i429 = i423[23]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i429[i + 0]) );
  }
  i422.blendShapesWeights = i428
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i437 = data
  i436.weight = i437[0]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i439 = data
  i438.name = i439[0]
  i438.halfPrecision = !!i439[1]
  i438.vertexCount = i439[2]
  i438.aabb = i439[3]
  var i441 = i439[4]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( !!i441[i + 0] );
  }
  i438.streams = i440
  i438.vertices = i439[5]
  var i443 = i439[6]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i443[i + 0]) );
  }
  i438.subMeshes = i442
  var i445 = i439[7]
  var i444 = []
  for(var i = 0; i < i445.length; i += 16) {
    i444.push( new pc.Mat4().setData(i445[i + 0], i445[i + 1], i445[i + 2], i445[i + 3],  i445[i + 4], i445[i + 5], i445[i + 6], i445[i + 7],  i445[i + 8], i445[i + 9], i445[i + 10], i445[i + 11],  i445[i + 12], i445[i + 13], i445[i + 14], i445[i + 15]) );
  }
  i438.bindposes = i444
  var i447 = i439[8]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i447[i + 0]) );
  }
  i438.blendShapes = i446
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i453 = data
  i452.triangles = i453[0]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i459 = data
  i458.name = i459[0]
  var i461 = i459[1]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i461[i + 0]) );
  }
  i458.frames = i460
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i463 = data
  i462.name = i463[0]
  i462.width = i463[1]
  i462.height = i463[2]
  i462.mipmapCount = i463[3]
  i462.anisoLevel = i463[4]
  i462.filterMode = i463[5]
  i462.hdr = !!i463[6]
  i462.format = i463[7]
  i462.wrapMode = i463[8]
  i462.alphaIsTransparency = !!i463[9]
  i462.alphaSource = i463[10]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i465 = data
  i464.name = i465[0]
  i464.atlasId = i465[1]
  i464.mipmapCount = i465[2]
  i464.hdr = !!i465[3]
  i464.size = i465[4]
  i464.anisoLevel = i465[5]
  i464.filterMode = i465[6]
  i464.wrapMode = i465[7]
  var i467 = i465[8]
  var i466 = []
  for(var i = 0; i < i467.length; i += 4) {
    i466.push( UnityEngine.Rect.MinMaxRect(i467[i + 0], i467[i + 1], i467[i + 2], i467[i + 3]) );
  }
  i464.rects = i466
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i471 = data
  i470.name = i471[0]
  i470.index = i471[1]
  i470.startup = !!i471[2]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i473 = data
  i472.enabled = !!i473[0]
  i472.aspect = i473[1]
  i472.orthographic = !!i473[2]
  i472.orthographicSize = i473[3]
  i472.backgroundColor = new pc.Color(i473[4], i473[5], i473[6], i473[7])
  i472.nearClipPlane = i473[8]
  i472.farClipPlane = i473[9]
  i472.fieldOfView = i473[10]
  i472.depth = i473[11]
  i472.clearFlags = i473[12]
  i472.cullingMask = i473[13]
  i472.rect = i473[14]
  request.r(i473[15], i473[16], 0, i472, 'targetTexture')
  i472.usePhysicalProperties = !!i473[17]
  i472.focalLength = i473[18]
  i472.sensorSize = new pc.Vec2( i473[19], i473[20] )
  i472.lensShift = new pc.Vec2( i473[21], i473[22] )
  i472.gateFit = i473[23]
  return i472
}

Deserializers["FollowPosition"] = function (request, data, root) {
  var i474 = root || request.c( 'FollowPosition' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'objFollow')
  request.r(i475[2], i475[3], 0, i474, 'target')
  i474.smooth = i475[4]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i477 = data
  i476.enabled = !!i477[0]
  i476.type = i477[1]
  i476.color = new pc.Color(i477[2], i477[3], i477[4], i477[5])
  i476.cullingMask = i477[6]
  i476.intensity = i477[7]
  i476.range = i477[8]
  i476.spotAngle = i477[9]
  i476.shadows = i477[10]
  i476.shadowNormalBias = i477[11]
  i476.shadowBias = i477[12]
  i476.shadowStrength = i477[13]
  i476.shadowResolution = i477[14]
  i476.lightmapBakeType = i477[15]
  i476.renderMode = i477[16]
  request.r(i477[17], i477[18], 0, i476, 'cookie')
  i476.cookieSize = i477[19]
  return i476
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i479 = data
  request.r(i479[0], i479[1], 0, i478, 'm_FirstSelected')
  i478.m_sendNavigationEvents = !!i479[2]
  i478.m_DragThreshold = i479[3]
  return i478
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i481 = data
  i480.m_HorizontalAxis = i481[0]
  i480.m_VerticalAxis = i481[1]
  i480.m_SubmitButton = i481[2]
  i480.m_CancelButton = i481[3]
  i480.m_InputActionsPerSecond = i481[4]
  i480.m_RepeatDelay = i481[5]
  i480.m_ForceModuleActive = !!i481[6]
  i480.m_SendPointerHoverToParent = !!i481[7]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i483 = data
  i482.pivot = new pc.Vec2( i483[0], i483[1] )
  i482.anchorMin = new pc.Vec2( i483[2], i483[3] )
  i482.anchorMax = new pc.Vec2( i483[4], i483[5] )
  i482.sizeDelta = new pc.Vec2( i483[6], i483[7] )
  i482.anchoredPosition3D = new pc.Vec3( i483[8], i483[9], i483[10] )
  i482.rotation = new pc.Quat(i483[11], i483[12], i483[13], i483[14])
  i482.scale = new pc.Vec3( i483[15], i483[16], i483[17] )
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i485 = data
  i484.enabled = !!i485[0]
  i484.planeDistance = i485[1]
  i484.referencePixelsPerUnit = i485[2]
  i484.isFallbackOverlay = !!i485[3]
  i484.renderMode = i485[4]
  i484.renderOrder = i485[5]
  i484.sortingLayerName = i485[6]
  i484.sortingOrder = i485[7]
  i484.scaleFactor = i485[8]
  request.r(i485[9], i485[10], 0, i484, 'worldCamera')
  i484.overrideSorting = !!i485[11]
  i484.pixelPerfect = !!i485[12]
  i484.targetDisplay = i485[13]
  i484.overridePixelPerfect = !!i485[14]
  return i484
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i487 = data
  i486.m_UiScaleMode = i487[0]
  i486.m_ReferencePixelsPerUnit = i487[1]
  i486.m_ScaleFactor = i487[2]
  i486.m_ReferenceResolution = new pc.Vec2( i487[3], i487[4] )
  i486.m_ScreenMatchMode = i487[5]
  i486.m_MatchWidthOrHeight = i487[6]
  i486.m_PhysicalUnit = i487[7]
  i486.m_FallbackScreenDPI = i487[8]
  i486.m_DefaultSpriteDPI = i487[9]
  i486.m_DynamicPixelsPerUnit = i487[10]
  i486.m_PresetInfoIsWorld = !!i487[11]
  return i486
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i489 = data
  i488.m_IgnoreReversedGraphics = !!i489[0]
  i488.m_BlockingObjects = i489[1]
  i488.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i489[2] )
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i491 = data
  i490.cullTransparentMesh = !!i491[0]
  return i490
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.Image' )
  var i493 = data
  request.r(i493[0], i493[1], 0, i492, 'm_Sprite')
  i492.m_Type = i493[2]
  i492.m_PreserveAspect = !!i493[3]
  i492.m_FillCenter = !!i493[4]
  i492.m_FillMethod = i493[5]
  i492.m_FillAmount = i493[6]
  i492.m_FillClockwise = !!i493[7]
  i492.m_FillOrigin = i493[8]
  i492.m_UseSpriteMesh = !!i493[9]
  i492.m_PixelsPerUnitMultiplier = i493[10]
  request.r(i493[11], i493[12], 0, i492, 'm_Material')
  i492.m_Maskable = !!i493[13]
  i492.m_Color = new pc.Color(i493[14], i493[15], i493[16], i493[17])
  i492.m_RaycastTarget = !!i493[18]
  i492.m_RaycastPadding = new pc.Vec4( i493[19], i493[20], i493[21], i493[22] )
  return i492
}

Deserializers["DynamicJoystick"] = function (request, data, root) {
  var i494 = root || request.c( 'DynamicJoystick' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'background')
  request.r(i495[2], i495[3], 0, i494, 'handle')
  request.r(i495[4], i495[5], 0, i494, 'handleObj')
  i494.on = new pc.Color(i495[6], i495[7], i495[8], i495[9])
  i494.off = new pc.Color(i495[10], i495[11], i495[12], i495[13])
  request.r(i495[14], i495[15], 0, i494, 'imgBG')
  request.r(i495[16], i495[17], 0, i494, 'imgHandle')
  i494.moveThreshold = i495[18]
  i494.handleRange = i495[19]
  i494.deadZone = i495[20]
  i494.axisOptions = i495[21]
  i494.snapX = !!i495[22]
  i494.snapY = !!i495[23]
  return i494
}

Deserializers["CharacterBehaviour"] = function (request, data, root) {
  var i496 = root || request.c( 'CharacterBehaviour' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'moveByJoystick')
  request.r(i497[2], i497[3], 0, i496, 'characterAnimator')
  return i496
}

Deserializers["MoveByJoystick"] = function (request, data, root) {
  var i498 = root || request.c( 'MoveByJoystick' )
  var i499 = data
  i498.speed = i499[0]
  request.r(i499[1], i499[2], 0, i498, 'rb')
  request.r(i499[3], i499[4], 0, i498, 'variableJoystick')
  request.r(i499[5], i499[6], 0, i498, 'transf')
  i498.smoothRotation = i499[7]
  i498.smoothMove = i499[8]
  i498.smoothRotationByTarget = i499[9]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i501 = data
  i500.mass = i501[0]
  i500.drag = i501[1]
  i500.angularDrag = i501[2]
  i500.useGravity = !!i501[3]
  i500.isKinematic = !!i501[4]
  i500.constraints = i501[5]
  i500.maxAngularVelocity = i501[6]
  i500.collisionDetectionMode = i501[7]
  i500.interpolation = i501[8]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i503 = data
  i502.enabled = !!i503[0]
  i502.isTrigger = !!i503[1]
  request.r(i503[2], i503[3], 0, i502, 'material')
  i502.center = new pc.Vec3( i503[4], i503[5], i503[6] )
  i502.radius = i503[7]
  return i502
}

Deserializers["CharacterAnimator"] = function (request, data, root) {
  var i504 = root || request.c( 'CharacterAnimator' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'animator')
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'animatorController')
  i506.updateMode = i507[2]
  var i509 = i507[3]
  var i508 = []
  for(var i = 0; i < i509.length; i += 2) {
  request.r(i509[i + 0], i509[i + 1], 2, i508, '')
  }
  i506.humanBones = i508
  i506.enabled = !!i507[4]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'sharedMesh')
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'additionalVertexStreams')
  i512.enabled = !!i513[2]
  request.r(i513[3], i513[4], 0, i512, 'sharedMaterial')
  var i515 = i513[5]
  var i514 = []
  for(var i = 0; i < i515.length; i += 2) {
  request.r(i515[i + 0], i515[i + 1], 2, i514, '')
  }
  i512.sharedMaterials = i514
  i512.receiveShadows = !!i513[6]
  i512.shadowCastingMode = i513[7]
  i512.sortingLayerID = i513[8]
  i512.sortingOrder = i513[9]
  i512.lightmapIndex = i513[10]
  i512.lightmapSceneIndex = i513[11]
  i512.lightmapScaleOffset = new pc.Vec4( i513[12], i513[13], i513[14], i513[15] )
  i512.lightProbeUsage = i513[16]
  i512.reflectionProbeUsage = i513[17]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i517 = data
  i516.ambientIntensity = i517[0]
  i516.reflectionIntensity = i517[1]
  i516.ambientMode = i517[2]
  i516.ambientLight = new pc.Color(i517[3], i517[4], i517[5], i517[6])
  i516.ambientSkyColor = new pc.Color(i517[7], i517[8], i517[9], i517[10])
  i516.ambientGroundColor = new pc.Color(i517[11], i517[12], i517[13], i517[14])
  i516.ambientEquatorColor = new pc.Color(i517[15], i517[16], i517[17], i517[18])
  i516.fogColor = new pc.Color(i517[19], i517[20], i517[21], i517[22])
  i516.fogEndDistance = i517[23]
  i516.fogStartDistance = i517[24]
  i516.fogDensity = i517[25]
  i516.fog = !!i517[26]
  request.r(i517[27], i517[28], 0, i516, 'skybox')
  i516.fogMode = i517[29]
  var i519 = i517[30]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i519[i + 0]) );
  }
  i516.lightmaps = i518
  i516.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i517[31], i516.lightProbes)
  i516.lightmapsMode = i517[32]
  i516.mixedBakeMode = i517[33]
  i516.environmentLightingMode = i517[34]
  i516.ambientProbe = new pc.SphericalHarmonicsL2(i517[35])
  i516.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i517[36])
  i516.useReferenceAmbientProbe = !!i517[37]
  request.r(i517[38], i517[39], 0, i516, 'customReflection')
  request.r(i517[40], i517[41], 0, i516, 'defaultReflection')
  i516.defaultReflectionMode = i517[42]
  i516.defaultReflectionResolution = i517[43]
  i516.sunLightObjectId = i517[44]
  i516.pixelLightCount = i517[45]
  i516.defaultReflectionHDR = !!i517[46]
  i516.hasLightDataAsset = !!i517[47]
  i516.hasManualGenerate = !!i517[48]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i523 = data
  request.r(i523[0], i523[1], 0, i522, 'lightmapColor')
  request.r(i523[2], i523[3], 0, i522, 'lightmapDirection')
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i524 = root || new UnityEngine.LightProbes()
  var i525 = data
  return i524
}

Deserializers["FixedJoystick"] = function (request, data, root) {
  var i532 = root || request.c( 'FixedJoystick' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'background')
  request.r(i533[2], i533[3], 0, i532, 'handle')
  request.r(i533[4], i533[5], 0, i532, 'handleObj')
  i532.handleRange = i533[6]
  i532.deadZone = i533[7]
  i532.axisOptions = i533[8]
  i532.snapX = !!i533[9]
  i532.snapY = !!i533[10]
  return i532
}

Deserializers["FloatingJoystick"] = function (request, data, root) {
  var i534 = root || request.c( 'FloatingJoystick' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'background')
  request.r(i535[2], i535[3], 0, i534, 'handle')
  request.r(i535[4], i535[5], 0, i534, 'handleObj')
  i534.handleRange = i535[6]
  i534.deadZone = i535[7]
  i534.axisOptions = i535[8]
  i534.snapX = !!i535[9]
  i534.snapY = !!i535[10]
  return i534
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i536 = root || request.c( 'VariableJoystick' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'background')
  request.r(i537[2], i537[3], 0, i536, 'handle')
  request.r(i537[4], i537[5], 0, i536, 'handleObj')
  i536.moveThreshold = i537[6]
  i536.joystickType = i537[7]
  i536.handleRange = i537[8]
  i536.deadZone = i537[9]
  i536.axisOptions = i537[10]
  i536.snapX = !!i537[11]
  i536.snapY = !!i537[12]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i539 = data
  var i541 = i539[0]
  var i540 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i541.length; i += 1) {
    i540.add(i541[i + 0]);
  }
  i538.invalidShaderVariants = i540
  i538.name = i539[1]
  i538.guid = i539[2]
  var i543 = i539[3]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( i543[i + 0] );
  }
  i538.shaderDefinedKeywords = i542
  var i545 = i539[4]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i545[i + 0]) );
  }
  i538.passes = i544
  var i547 = i539[5]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i547[i + 0]) );
  }
  i538.usePasses = i546
  var i549 = i539[6]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i549[i + 0]) );
  }
  i538.defaultParameterValues = i548
  request.r(i539[7], i539[8], 0, i538, 'unityFallbackShader')
  i538.readDepth = !!i539[9]
  i538.isCreatedByShaderGraph = !!i539[10]
  i538.usedBatchUniforms = i539[11]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i556 = root || new pc.UnityShaderPass()
  var i557 = data
  i556.id = i557[0]
  i556.subShaderIndex = i557[1]
  i556.name = i557[2]
  i556.passType = i557[3]
  i556.usePass = !!i557[4]
  i556.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[5], i556.zTest)
  i556.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[6], i556.zWrite)
  i556.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[7], i556.culling)
  i556.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i557[8], i556.blending)
  i556.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i557[9], i556.alphaBlending)
  i556.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[10], i556.colorWriteMask)
  i556.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[11], i556.offsetUnits)
  i556.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[12], i556.offsetFactor)
  i556.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[13], i556.stencilRef)
  i556.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[14], i556.stencilReadMask)
  i556.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[15], i556.stencilWriteMask)
  i556.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i557[16], i556.stencilOp)
  i556.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i557[17], i556.stencilOpFront)
  i556.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i557[18], i556.stencilOpBack)
  var i559 = i557[19]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i559[i + 0]) );
  }
  i556.tags = i558
  var i561 = i557[20]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( i561[i + 0] );
  }
  i556.passDefinedKeywords = i560
  var i563 = i557[21]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i563[i + 0]) );
  }
  i556.passDefinedKeywordGroups = i562
  var i565 = i557[22]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i565[i + 0]) );
  }
  i556.variants = i564
  var i567 = i557[23]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i567[i + 0]) );
  }
  i556.excludedVariants = i566
  i556.hasDepthReader = !!i557[24]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i569 = data
  i568.val = i569[0]
  i568.name = i569[1]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i571 = data
  i570.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[0], i570.src)
  i570.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[1], i570.dst)
  i570.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[2], i570.op)
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i573 = data
  i572.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[0], i572.pass)
  i572.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[1], i572.fail)
  i572.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[2], i572.zFail)
  i572.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[3], i572.comp)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i577 = data
  i576.name = i577[0]
  i576.value = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i581 = data
  var i583 = i581[0]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( i583[i + 0] );
  }
  i580.keywords = i582
  i580.hasDiscard = !!i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i587 = data
  i586.passId = i587[0]
  i586.subShaderIndex = i587[1]
  var i589 = i587[2]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( i589[i + 0] );
  }
  i586.keywords = i588
  i586.vertexProgram = i587[3]
  i586.fragmentProgram = i587[4]
  i586.readDepth = !!i587[5]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'shader')
  i592.pass = i593[2]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i597 = data
  i596.name = i597[0]
  i596.type = i597[1]
  i596.value = new pc.Vec4( i597[2], i597[3], i597[4], i597[5] )
  i596.textureValue = i597[6]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i599 = data
  i598.name = i599[0]
  request.r(i599[1], i599[2], 0, i598, 'texture')
  i598.aabb = i599[3]
  i598.vertices = i599[4]
  i598.triangles = i599[5]
  i598.textureRect = UnityEngine.Rect.MinMaxRect(i599[6], i599[7], i599[8], i599[9])
  i598.packedRect = UnityEngine.Rect.MinMaxRect(i599[10], i599[11], i599[12], i599[13])
  i598.border = new pc.Vec4( i599[14], i599[15], i599[16], i599[17] )
  i598.transparency = i599[18]
  i598.bounds = i599[19]
  i598.pixelsPerUnit = i599[20]
  i598.textureWidth = i599[21]
  i598.textureHeight = i599[22]
  i598.nativeSize = new pc.Vec2( i599[23], i599[24] )
  i598.pivot = new pc.Vec2( i599[25], i599[26] )
  i598.textureRectOffset = new pc.Vec2( i599[27], i599[28] )
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i601 = data
  i600.name = i601[0]
  i600.wrapMode = i601[1]
  i600.isLooping = !!i601[2]
  i600.length = i601[3]
  var i603 = i601[4]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i603[i + 0]) );
  }
  i600.curves = i602
  var i605 = i601[5]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i605[i + 0]) );
  }
  i600.events = i604
  i600.halfPrecision = !!i601[6]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i609 = data
  i608.path = i609[0]
  i608.componentType = i609[1]
  i608.property = i609[2]
  i608.keys = i609[3]
  var i611 = i609[4]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i611[i + 0]) );
  }
  i608.objectReferenceKeys = i610
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i615 = data
  i614.time = i615[0]
  request.r(i615[1], i615[2], 0, i614, 'value')
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i619 = data
  i618.functionName = i619[0]
  i618.floatParameter = i619[1]
  i618.intParameter = i619[2]
  i618.stringParameter = i619[3]
  request.r(i619[4], i619[5], 0, i618, 'objectReferenceParameter')
  i618.time = i619[6]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i621 = data
  i620.name = i621[0]
  var i623 = i621[1]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i623[i + 0]) );
  }
  i620.states = i622
  var i625 = i621[2]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i625[i + 0]) );
  }
  i620.layers = i624
  var i627 = i621[3]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i627[i + 0]) );
  }
  i620.parameters = i626
  i620.animationClips = i621[4]
  i620.HasSubStateMachines = !!i621[5]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i631 = data
  i630.cycleOffset = i631[0]
  i630.cycleOffsetParameter = i631[1]
  i630.cycleOffsetParameterActive = !!i631[2]
  i630.mirror = !!i631[3]
  i630.mirrorParameter = i631[4]
  i630.mirrorParameterActive = !!i631[5]
  i630.motionId = i631[6]
  i630.nameHash = i631[7]
  i630.fullPathHash = i631[8]
  i630.speed = i631[9]
  i630.speedParameter = i631[10]
  i630.speedParameterActive = !!i631[11]
  i630.tag = i631[12]
  i630.name = i631[13]
  i630.layer = i631[14]
  i630.writeDefaultValues = !!i631[15]
  var i633 = i631[16]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i633[i + 0]) );
  }
  i630.transitions = i632
  var i635 = i631[17]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i630.behaviours = i634
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i639 = data
  i638.fullPath = i639[0]
  i638.canTransitionToSelf = !!i639[1]
  i638.duration = i639[2]
  i638.exitTime = i639[3]
  i638.hasExitTime = !!i639[4]
  i638.hasFixedDuration = !!i639[5]
  i638.interruptionSource = i639[6]
  i638.offset = i639[7]
  i638.orderedInterruption = !!i639[8]
  i638.destinationStateNameHash = i639[9]
  i638.destinationStateMachineId = i639[10]
  i638.isExit = !!i639[11]
  i638.mute = !!i639[12]
  i638.solo = !!i639[13]
  var i641 = i639[14]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i641[i + 0]) );
  }
  i638.conditions = i640
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i645 = data
  i644.mode = i645[0]
  i644.parameter = i645[1]
  i644.threshold = i645[2]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i651 = data
  i650.blendingMode = i651[0]
  i650.defaultWeight = i651[1]
  i650.name = i651[2]
  i650.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i651[3], i650.stateMachine)
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i653 = data
  i652.id = i653[0]
  i652.defaultStateNameHash = i653[1]
  var i655 = i653[2]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i655[i + 0]) );
  }
  i652.entryTransitions = i654
  var i657 = i653[3]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i657[i + 0]) );
  }
  i652.anyStateTransitions = i656
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i661 = data
  i660.destinationStateNameHash = i661[0]
  i660.destinationStateMachineId = i661[1]
  i660.isExit = !!i661[2]
  i660.mute = !!i661[3]
  i660.solo = !!i661[4]
  var i663 = i661[5]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i663[i + 0]) );
  }
  i660.conditions = i662
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i667 = data
  i666.defaultBool = !!i667[0]
  i666.defaultFloat = i667[1]
  i666.defaultInt = i667[2]
  i666.name = i667[3]
  i666.nameHash = i667[4]
  i666.type = i667[5]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i669 = data
  var i671 = i669[0]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i671[i + 0]) );
  }
  i668.files = i670
  i668.componentToPrefabIds = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i675 = data
  i674.path = i675[0]
  request.r(i675[1], i675[2], 0, i674, 'unityObject')
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i677 = data
  var i679 = i677[0]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i679[i + 0]) );
  }
  i676.scriptsExecutionOrder = i678
  var i681 = i677[1]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i681[i + 0]) );
  }
  i676.sortingLayers = i680
  var i683 = i677[2]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i683[i + 0]) );
  }
  i676.cullingLayers = i682
  i676.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i677[3], i676.timeSettings)
  i676.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i677[4], i676.physicsSettings)
  i676.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i677[5], i676.physics2DSettings)
  i676.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i677[6], i676.qualitySettings)
  i676.enableRealtimeShadows = !!i677[7]
  i676.enableAutoInstancing = !!i677[8]
  i676.enableDynamicBatching = !!i677[9]
  i676.lightmapEncodingQuality = i677[10]
  i676.desiredColorSpace = i677[11]
  var i685 = i677[12]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i676.allTags = i684
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i689 = data
  i688.name = i689[0]
  i688.value = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i693 = data
  i692.id = i693[0]
  i692.name = i693[1]
  i692.value = i693[2]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i697 = data
  i696.id = i697[0]
  i696.name = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i699 = data
  i698.fixedDeltaTime = i699[0]
  i698.maximumDeltaTime = i699[1]
  i698.timeScale = i699[2]
  i698.maximumParticleTimestep = i699[3]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i701 = data
  i700.gravity = new pc.Vec3( i701[0], i701[1], i701[2] )
  i700.defaultSolverIterations = i701[3]
  i700.bounceThreshold = i701[4]
  i700.autoSyncTransforms = !!i701[5]
  i700.autoSimulation = !!i701[6]
  var i703 = i701[7]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i703[i + 0]) );
  }
  i700.collisionMatrix = i702
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i707 = data
  i706.enabled = !!i707[0]
  i706.layerId = i707[1]
  i706.otherLayerId = i707[2]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'material')
  i708.gravity = new pc.Vec2( i709[2], i709[3] )
  i708.positionIterations = i709[4]
  i708.velocityIterations = i709[5]
  i708.velocityThreshold = i709[6]
  i708.maxLinearCorrection = i709[7]
  i708.maxAngularCorrection = i709[8]
  i708.maxTranslationSpeed = i709[9]
  i708.maxRotationSpeed = i709[10]
  i708.baumgarteScale = i709[11]
  i708.baumgarteTOIScale = i709[12]
  i708.timeToSleep = i709[13]
  i708.linearSleepTolerance = i709[14]
  i708.angularSleepTolerance = i709[15]
  i708.defaultContactOffset = i709[16]
  i708.autoSimulation = !!i709[17]
  i708.queriesHitTriggers = !!i709[18]
  i708.queriesStartInColliders = !!i709[19]
  i708.callbacksOnDisable = !!i709[20]
  i708.reuseCollisionCallbacks = !!i709[21]
  i708.autoSyncTransforms = !!i709[22]
  var i711 = i709[23]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i711[i + 0]) );
  }
  i708.collisionMatrix = i710
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i715 = data
  i714.enabled = !!i715[0]
  i714.layerId = i715[1]
  i714.otherLayerId = i715[2]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i717 = data
  var i719 = i717[0]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i719[i + 0]) );
  }
  i716.qualityLevels = i718
  var i721 = i717[1]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i716.names = i720
  i716.shadows = i717[2]
  i716.anisotropicFiltering = i717[3]
  i716.antiAliasing = i717[4]
  i716.lodBias = i717[5]
  i716.shadowCascades = i717[6]
  i716.shadowDistance = i717[7]
  i716.shadowmaskMode = i717[8]
  i716.shadowProjection = i717[9]
  i716.shadowResolution = i717[10]
  i716.softParticles = !!i717[11]
  i716.softVegetation = !!i717[12]
  i716.activeColorSpace = i717[13]
  i716.desiredColorSpace = i717[14]
  i716.masterTextureLimit = i717[15]
  i716.maxQueuedFrames = i717[16]
  i716.particleRaycastBudget = i717[17]
  i716.pixelLightCount = i717[18]
  i716.realtimeReflectionProbes = !!i717[19]
  i716.shadowCascade2Split = i717[20]
  i716.shadowCascade4Split = new pc.Vec3( i717[21], i717[22], i717[23] )
  i716.streamingMipmapsActive = !!i717[24]
  i716.vSyncCount = i717[25]
  i716.asyncUploadBufferSize = i717[26]
  i716.asyncUploadTimeSlice = i717[27]
  i716.billboardsFaceCameraPosition = !!i717[28]
  i716.shadowNearPlaneOffset = i717[29]
  i716.streamingMipmapsMemoryBudget = i717[30]
  i716.maximumLODLevel = i717[31]
  i716.streamingMipmapsAddAllCameras = !!i717[32]
  i716.streamingMipmapsMaxLevelReduction = i717[33]
  i716.streamingMipmapsRenderersPerFrame = i717[34]
  i716.resolutionScalingFixedDPIFactor = i717[35]
  i716.streamingMipmapsMaxFileIORequests = i717[36]
  i716.currentQualityLevel = i717[37]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i727 = data
  i726.weight = i727[0]
  i726.vertices = i727[1]
  i726.normals = i727[2]
  i726.tangents = i727[3]
  return i726
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"36":[37],"38":[37],"39":[37],"40":[37],"41":[37],"42":[37],"43":[2],"44":[5],"45":[25],"46":[25],"47":[25],"48":[25],"49":[25],"50":[25],"51":[25],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[53],"61":[53],"62":[53],"63":[53],"64":[53],"65":[53],"66":[5],"67":[30],"68":[69],"70":[69],"14":[13],"71":[13],"72":[30,13],"73":[13,17],"74":[13],"75":[17,13],"76":[30],"77":[17,13],"78":[13],"79":[80],"81":[13],"82":[13],"16":[14],"18":[17,13],"83":[13],"15":[14],"84":[13],"85":[13],"86":[13],"87":[13],"88":[13],"89":[13],"90":[13],"91":[13],"92":[13],"93":[17,13],"94":[13],"95":[13],"96":[13],"97":[13],"98":[17,13],"99":[13],"100":[11],"101":[11],"12":[11],"102":[11],"103":[5],"104":[5],"105":[80],"106":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","FollowPosition","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","DynamicJoystick","UnityEngine.GameObject","CharacterBehaviour","MoveByJoystick","CharacterAnimator","UnityEngine.Rigidbody","UnityEngine.SphereCollider","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Cubemap","FixedJoystick","FloatingJoystick","VariableJoystick","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.24f1";

Deserializers.productName = "kitchen";

Deserializers.lunaInitializationTime = "05/08/2023 09:13:25";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "5.0.0";

Deserializers.lunaSHA = "8492f3ebf500b632ef0f82804595ebe7557792b4";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "6184";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1100";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3830";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.kitchen";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "8dec3707-4788-4059-856b-f814815bb494";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

