var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.JointSpring' )
  var i1381 = data
  i1380.spring = i1381[0]
  i1380.damper = i1381[1]
  i1380.targetPosition = i1381[2]
  return i1380
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.JointMotor' )
  var i1383 = data
  i1382.m_TargetVelocity = i1383[0]
  i1382.m_Force = i1383[1]
  i1382.m_FreeSpin = i1383[2]
  return i1382
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.JointLimits' )
  var i1385 = data
  i1384.m_Min = i1385[0]
  i1384.m_Max = i1385[1]
  i1384.m_Bounciness = i1385[2]
  i1384.m_BounceMinVelocity = i1385[3]
  i1384.m_ContactDistance = i1385[4]
  i1384.minBounce = i1385[5]
  i1384.maxBounce = i1385[6]
  return i1384
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.JointDrive' )
  var i1387 = data
  i1386.m_PositionSpring = i1387[0]
  i1386.m_PositionDamper = i1387[1]
  i1386.m_MaximumForce = i1387[2]
  return i1386
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1389 = data
  i1388.m_Spring = i1389[0]
  i1388.m_Damper = i1389[1]
  return i1388
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1391 = data
  i1390.m_Limit = i1391[0]
  i1390.m_Bounciness = i1391[1]
  i1390.m_ContactDistance = i1391[2]
  return i1390
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1393 = data
  i1392.m_ExtremumSlip = i1393[0]
  i1392.m_ExtremumValue = i1393[1]
  i1392.m_AsymptoteSlip = i1393[2]
  i1392.m_AsymptoteValue = i1393[3]
  i1392.m_Stiffness = i1393[4]
  return i1392
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1395 = data
  i1394.m_LowerAngle = i1395[0]
  i1394.m_UpperAngle = i1395[1]
  return i1394
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1397 = data
  i1396.m_MotorSpeed = i1397[0]
  i1396.m_MaximumMotorTorque = i1397[1]
  return i1396
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1399 = data
  i1398.m_DampingRatio = i1399[0]
  i1398.m_Frequency = i1399[1]
  i1398.m_Angle = i1399[2]
  return i1398
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1401 = data
  i1400.m_LowerTranslation = i1401[0]
  i1400.m_UpperTranslation = i1401[1]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1402 = root || new pc.UnityMaterial()
  var i1403 = data
  i1402.name = i1403[0]
  request.r(i1403[1], i1403[2], 0, i1402, 'shader')
  i1402.renderQueue = i1403[3]
  i1402.enableInstancing = !!i1403[4]
  var i1405 = i1403[5]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1405[i + 0]) );
  }
  i1402.floatParameters = i1404
  var i1407 = i1403[6]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1407[i + 0]) );
  }
  i1402.colorParameters = i1406
  var i1409 = i1403[7]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1409[i + 0]) );
  }
  i1402.vectorParameters = i1408
  var i1411 = i1403[8]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1411[i + 0]) );
  }
  i1402.textureParameters = i1410
  var i1413 = i1403[9]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1413[i + 0]) );
  }
  i1402.materialFlags = i1412
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1417 = data
  i1416.name = i1417[0]
  i1416.value = i1417[1]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1421 = data
  i1420.name = i1421[0]
  i1420.value = new pc.Color(i1421[1], i1421[2], i1421[3], i1421[4])
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1425 = data
  i1424.name = i1425[0]
  i1424.value = new pc.Vec4( i1425[1], i1425[2], i1425[3], i1425[4] )
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1429 = data
  i1428.name = i1429[0]
  request.r(i1429[1], i1429[2], 0, i1428, 'value')
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1433 = data
  i1432.name = i1433[0]
  i1432.enabled = !!i1433[1]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1435 = data
  i1434.position = new pc.Vec3( i1435[0], i1435[1], i1435[2] )
  i1434.scale = new pc.Vec3( i1435[3], i1435[4], i1435[5] )
  i1434.rotation = new pc.Quat(i1435[6], i1435[7], i1435[8], i1435[9])
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1437 = data
  i1436.name = i1437[0]
  i1436.tagId = i1437[1]
  i1436.enabled = !!i1437[2]
  i1436.isStatic = !!i1437[3]
  i1436.layer = i1437[4]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1439 = data
  i1438.enabled = !!i1439[0]
  request.r(i1439[1], i1439[2], 0, i1438, 'sharedMaterial')
  var i1441 = i1439[3]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 2) {
  request.r(i1441[i + 0], i1441[i + 1], 2, i1440, '')
  }
  i1438.sharedMaterials = i1440
  i1438.receiveShadows = !!i1439[4]
  i1438.shadowCastingMode = i1439[5]
  i1438.sortingLayerID = i1439[6]
  i1438.sortingOrder = i1439[7]
  i1438.lightmapIndex = i1439[8]
  i1438.lightmapSceneIndex = i1439[9]
  i1438.lightmapScaleOffset = new pc.Vec4( i1439[10], i1439[11], i1439[12], i1439[13] )
  i1438.lightProbeUsage = i1439[14]
  i1438.reflectionProbeUsage = i1439[15]
  request.r(i1439[16], i1439[17], 0, i1438, 'sharedMesh')
  var i1443 = i1439[18]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 2) {
  request.r(i1443[i + 0], i1443[i + 1], 2, i1442, '')
  }
  i1438.bones = i1442
  i1438.updateWhenOffscreen = !!i1439[19]
  i1438.localBounds = i1439[20]
  request.r(i1439[21], i1439[22], 0, i1438, 'rootBone')
  var i1445 = i1439[23]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1445[i + 0]) );
  }
  i1438.blendShapesWeights = i1444
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1453 = data
  i1452.weight = i1453[0]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1455 = data
  i1454.name = i1455[0]
  i1454.halfPrecision = !!i1455[1]
  i1454.vertexCount = i1455[2]
  i1454.aabb = i1455[3]
  var i1457 = i1455[4]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( !!i1457[i + 0] );
  }
  i1454.streams = i1456
  i1454.vertices = i1455[5]
  var i1459 = i1455[6]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1459[i + 0]) );
  }
  i1454.subMeshes = i1458
  var i1461 = i1455[7]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 16) {
    i1460.push( new pc.Mat4().setData(i1461[i + 0], i1461[i + 1], i1461[i + 2], i1461[i + 3],  i1461[i + 4], i1461[i + 5], i1461[i + 6], i1461[i + 7],  i1461[i + 8], i1461[i + 9], i1461[i + 10], i1461[i + 11],  i1461[i + 12], i1461[i + 13], i1461[i + 14], i1461[i + 15]) );
  }
  i1454.bindposes = i1460
  var i1463 = i1455[8]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1463[i + 0]) );
  }
  i1454.blendShapes = i1462
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1469 = data
  i1468.triangles = i1469[0]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1475 = data
  i1474.name = i1475[0]
  var i1477 = i1475[1]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1477[i + 0]) );
  }
  i1474.frames = i1476
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1479 = data
  request.r(i1479[0], i1479[1], 0, i1478, 'sharedMesh')
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1481 = data
  request.r(i1481[0], i1481[1], 0, i1480, 'additionalVertexStreams')
  i1480.enabled = !!i1481[2]
  request.r(i1481[3], i1481[4], 0, i1480, 'sharedMaterial')
  var i1483 = i1481[5]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 2) {
  request.r(i1483[i + 0], i1483[i + 1], 2, i1482, '')
  }
  i1480.sharedMaterials = i1482
  i1480.receiveShadows = !!i1481[6]
  i1480.shadowCastingMode = i1481[7]
  i1480.sortingLayerID = i1481[8]
  i1480.sortingOrder = i1481[9]
  i1480.lightmapIndex = i1481[10]
  i1480.lightmapSceneIndex = i1481[11]
  i1480.lightmapScaleOffset = new pc.Vec4( i1481[12], i1481[13], i1481[14], i1481[15] )
  i1480.lightProbeUsage = i1481[16]
  i1480.reflectionProbeUsage = i1481[17]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1485 = data
  i1484.name = i1485[0]
  i1484.width = i1485[1]
  i1484.height = i1485[2]
  i1484.mipmapCount = i1485[3]
  i1484.anisoLevel = i1485[4]
  i1484.filterMode = i1485[5]
  i1484.hdr = !!i1485[6]
  i1484.format = i1485[7]
  i1484.wrapMode = i1485[8]
  i1484.alphaIsTransparency = !!i1485[9]
  i1484.alphaSource = i1485[10]
  return i1484
}

Deserializers["StackObject"] = function (request, data, root) {
  var i1486 = root || request.c( 'StackObject' )
  var i1487 = data
  request.r(i1487[0], i1487[1], 0, i1486, 'transf')
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1489 = data
  i1488.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1489[0], i1488.main)
  i1488.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1489[1], i1488.colorBySpeed)
  i1488.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1489[2], i1488.colorOverLifetime)
  i1488.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1489[3], i1488.emission)
  i1488.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1489[4], i1488.rotationBySpeed)
  i1488.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1489[5], i1488.rotationOverLifetime)
  i1488.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1489[6], i1488.shape)
  i1488.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1489[7], i1488.sizeBySpeed)
  i1488.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1489[8], i1488.sizeOverLifetime)
  i1488.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1489[9], i1488.textureSheetAnimation)
  i1488.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1489[10], i1488.velocityOverLifetime)
  i1488.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1489[11], i1488.noise)
  i1488.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1489[12], i1488.inheritVelocity)
  i1488.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1489[13], i1488.forceOverLifetime)
  i1488.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1489[14], i1488.limitVelocityOverLifetime)
  i1488.useAutoRandomSeed = !!i1489[15]
  i1488.randomSeed = i1489[16]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1490 = root || new pc.ParticleSystemMain()
  var i1491 = data
  i1490.duration = i1491[0]
  i1490.loop = !!i1491[1]
  i1490.prewarm = !!i1491[2]
  i1490.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[3], i1490.startDelay)
  i1490.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[4], i1490.startLifetime)
  i1490.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[5], i1490.startSpeed)
  i1490.startSize3D = !!i1491[6]
  i1490.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[7], i1490.startSizeX)
  i1490.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[8], i1490.startSizeY)
  i1490.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[9], i1490.startSizeZ)
  i1490.startRotation3D = !!i1491[10]
  i1490.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[11], i1490.startRotationX)
  i1490.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[12], i1490.startRotationY)
  i1490.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[13], i1490.startRotationZ)
  i1490.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1491[14], i1490.startColor)
  i1490.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[15], i1490.gravityModifier)
  i1490.simulationSpace = i1491[16]
  request.r(i1491[17], i1491[18], 0, i1490, 'customSimulationSpace')
  i1490.simulationSpeed = i1491[19]
  i1490.useUnscaledTime = !!i1491[20]
  i1490.scalingMode = i1491[21]
  i1490.playOnAwake = !!i1491[22]
  i1490.maxParticles = i1491[23]
  i1490.emitterVelocityMode = i1491[24]
  i1490.stopAction = i1491[25]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1492 = root || new pc.MinMaxCurve()
  var i1493 = data
  i1492.mode = i1493[0]
  i1492.curveMin = new pc.AnimationCurve( { keys_flow: i1493[1] } )
  i1492.curveMax = new pc.AnimationCurve( { keys_flow: i1493[2] } )
  i1492.curveMultiplier = i1493[3]
  i1492.constantMin = i1493[4]
  i1492.constantMax = i1493[5]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1494 = root || new pc.MinMaxGradient()
  var i1495 = data
  i1494.mode = i1495[0]
  i1494.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1495[1], i1494.gradientMin)
  i1494.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1495[2], i1494.gradientMax)
  i1494.colorMin = new pc.Color(i1495[3], i1495[4], i1495[5], i1495[6])
  i1494.colorMax = new pc.Color(i1495[7], i1495[8], i1495[9], i1495[10])
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1497 = data
  i1496.mode = i1497[0]
  var i1499 = i1497[1]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1499[i + 0]) );
  }
  i1496.colorKeys = i1498
  var i1501 = i1497[2]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1501[i + 0]) );
  }
  i1496.alphaKeys = i1500
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1502 = root || new pc.ParticleSystemColorBySpeed()
  var i1503 = data
  i1502.enabled = !!i1503[0]
  i1502.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1503[1], i1502.color)
  i1502.range = new pc.Vec2( i1503[2], i1503[3] )
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1507 = data
  i1506.color = new pc.Color(i1507[0], i1507[1], i1507[2], i1507[3])
  i1506.time = i1507[4]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1511 = data
  i1510.alpha = i1511[0]
  i1510.time = i1511[1]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1512 = root || new pc.ParticleSystemColorOverLifetime()
  var i1513 = data
  i1512.enabled = !!i1513[0]
  i1512.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1513[1], i1512.color)
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1514 = root || new pc.ParticleSystemEmitter()
  var i1515 = data
  i1514.enabled = !!i1515[0]
  i1514.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1515[1], i1514.rateOverTime)
  i1514.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1515[2], i1514.rateOverDistance)
  var i1517 = i1515[3]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1517[i + 0]) );
  }
  i1514.bursts = i1516
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1520 = root || new pc.ParticleSystemBurst()
  var i1521 = data
  i1520.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1521[0], i1520.count)
  i1520.cycleCount = i1521[1]
  i1520.minCount = i1521[2]
  i1520.maxCount = i1521[3]
  i1520.repeatInterval = i1521[4]
  i1520.time = i1521[5]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1522 = root || new pc.ParticleSystemRotationBySpeed()
  var i1523 = data
  i1522.enabled = !!i1523[0]
  i1522.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1523[1], i1522.x)
  i1522.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1523[2], i1522.y)
  i1522.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1523[3], i1522.z)
  i1522.separateAxes = !!i1523[4]
  i1522.range = new pc.Vec2( i1523[5], i1523[6] )
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1524 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1525 = data
  i1524.enabled = !!i1525[0]
  i1524.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[1], i1524.x)
  i1524.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[2], i1524.y)
  i1524.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[3], i1524.z)
  i1524.separateAxes = !!i1525[4]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1526 = root || new pc.ParticleSystemShape()
  var i1527 = data
  i1526.enabled = !!i1527[0]
  i1526.shapeType = i1527[1]
  i1526.randomDirectionAmount = i1527[2]
  i1526.sphericalDirectionAmount = i1527[3]
  i1526.randomPositionAmount = i1527[4]
  i1526.alignToDirection = !!i1527[5]
  i1526.radius = i1527[6]
  i1526.radiusMode = i1527[7]
  i1526.radiusSpread = i1527[8]
  i1526.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[9], i1526.radiusSpeed)
  i1526.radiusThickness = i1527[10]
  i1526.angle = i1527[11]
  i1526.length = i1527[12]
  i1526.boxThickness = new pc.Vec3( i1527[13], i1527[14], i1527[15] )
  i1526.meshShapeType = i1527[16]
  request.r(i1527[17], i1527[18], 0, i1526, 'mesh')
  request.r(i1527[19], i1527[20], 0, i1526, 'meshRenderer')
  request.r(i1527[21], i1527[22], 0, i1526, 'skinnedMeshRenderer')
  i1526.useMeshMaterialIndex = !!i1527[23]
  i1526.meshMaterialIndex = i1527[24]
  i1526.useMeshColors = !!i1527[25]
  i1526.normalOffset = i1527[26]
  i1526.arc = i1527[27]
  i1526.arcMode = i1527[28]
  i1526.arcSpread = i1527[29]
  i1526.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[30], i1526.arcSpeed)
  i1526.donutRadius = i1527[31]
  i1526.position = new pc.Vec3( i1527[32], i1527[33], i1527[34] )
  i1526.rotation = new pc.Vec3( i1527[35], i1527[36], i1527[37] )
  i1526.scale = new pc.Vec3( i1527[38], i1527[39], i1527[40] )
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1528 = root || new pc.ParticleSystemSizeBySpeed()
  var i1529 = data
  i1528.enabled = !!i1529[0]
  i1528.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1529[1], i1528.x)
  i1528.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1529[2], i1528.y)
  i1528.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1529[3], i1528.z)
  i1528.separateAxes = !!i1529[4]
  i1528.range = new pc.Vec2( i1529[5], i1529[6] )
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1530 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1531 = data
  i1530.enabled = !!i1531[0]
  i1530.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[1], i1530.x)
  i1530.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[2], i1530.y)
  i1530.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[3], i1530.z)
  i1530.separateAxes = !!i1531[4]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1532 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1533 = data
  i1532.enabled = !!i1533[0]
  i1532.mode = i1533[1]
  i1532.animation = i1533[2]
  i1532.numTilesX = i1533[3]
  i1532.numTilesY = i1533[4]
  i1532.useRandomRow = !!i1533[5]
  i1532.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1533[6], i1532.frameOverTime)
  i1532.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1533[7], i1532.startFrame)
  i1532.cycleCount = i1533[8]
  i1532.rowIndex = i1533[9]
  i1532.flipU = i1533[10]
  i1532.flipV = i1533[11]
  i1532.spriteCount = i1533[12]
  var i1535 = i1533[13]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 2) {
  request.r(i1535[i + 0], i1535[i + 1], 2, i1534, '')
  }
  i1532.sprites = i1534
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1538 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1539 = data
  i1538.enabled = !!i1539[0]
  i1538.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[1], i1538.x)
  i1538.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[2], i1538.y)
  i1538.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[3], i1538.z)
  i1538.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[4], i1538.speedModifier)
  i1538.space = i1539[5]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1540 = root || new pc.ParticleSystemNoise()
  var i1541 = data
  i1540.enabled = !!i1541[0]
  i1540.separateAxes = !!i1541[1]
  i1540.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[2], i1540.strengthX)
  i1540.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[3], i1540.strengthY)
  i1540.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[4], i1540.strengthZ)
  i1540.frequency = i1541[5]
  i1540.damping = !!i1541[6]
  i1540.octaveCount = i1541[7]
  i1540.octaveMultiplier = i1541[8]
  i1540.octaveScale = i1541[9]
  i1540.quality = i1541[10]
  i1540.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[11], i1540.scrollSpeed)
  i1540.scrollSpeedMultiplier = i1541[12]
  i1540.remapEnabled = !!i1541[13]
  i1540.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[14], i1540.remapX)
  i1540.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[15], i1540.remapY)
  i1540.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[16], i1540.remapZ)
  i1540.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[17], i1540.positionAmount)
  i1540.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[18], i1540.rotationAmount)
  i1540.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[19], i1540.sizeAmount)
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1542 = root || new pc.ParticleSystemInheritVelocity()
  var i1543 = data
  i1542.enabled = !!i1543[0]
  i1542.mode = i1543[1]
  i1542.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[2], i1542.curve)
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1544 = root || new pc.ParticleSystemForceOverLifetime()
  var i1545 = data
  i1544.enabled = !!i1545[0]
  i1544.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[1], i1544.x)
  i1544.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[2], i1544.y)
  i1544.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[3], i1544.z)
  i1544.space = i1545[4]
  i1544.randomized = !!i1545[5]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1546 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1547 = data
  i1546.enabled = !!i1547[0]
  i1546.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[1], i1546.limit)
  i1546.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[2], i1546.limitX)
  i1546.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[3], i1546.limitY)
  i1546.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[4], i1546.limitZ)
  i1546.dampen = i1547[5]
  i1546.separateAxes = !!i1547[6]
  i1546.space = i1547[7]
  i1546.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[8], i1546.drag)
  i1546.multiplyDragByParticleSize = !!i1547[9]
  i1546.multiplyDragByParticleVelocity = !!i1547[10]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1549 = data
  i1548.enabled = !!i1549[0]
  request.r(i1549[1], i1549[2], 0, i1548, 'sharedMaterial')
  var i1551 = i1549[3]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 2) {
  request.r(i1551[i + 0], i1551[i + 1], 2, i1550, '')
  }
  i1548.sharedMaterials = i1550
  i1548.receiveShadows = !!i1549[4]
  i1548.shadowCastingMode = i1549[5]
  i1548.sortingLayerID = i1549[6]
  i1548.sortingOrder = i1549[7]
  i1548.lightmapIndex = i1549[8]
  i1548.lightmapSceneIndex = i1549[9]
  i1548.lightmapScaleOffset = new pc.Vec4( i1549[10], i1549[11], i1549[12], i1549[13] )
  i1548.lightProbeUsage = i1549[14]
  i1548.reflectionProbeUsage = i1549[15]
  request.r(i1549[16], i1549[17], 0, i1548, 'mesh')
  i1548.meshCount = i1549[18]
  i1548.activeVertexStreamsCount = i1549[19]
  i1548.alignment = i1549[20]
  i1548.renderMode = i1549[21]
  i1548.sortMode = i1549[22]
  i1548.lengthScale = i1549[23]
  i1548.velocityScale = i1549[24]
  i1548.cameraVelocityScale = i1549[25]
  i1548.normalDirection = i1549[26]
  i1548.sortingFudge = i1549[27]
  i1548.minParticleSize = i1549[28]
  i1548.maxParticleSize = i1549[29]
  i1548.pivot = new pc.Vec3( i1549[30], i1549[31], i1549[32] )
  request.r(i1549[33], i1549[34], 0, i1548, 'trailMaterial')
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1553 = data
  i1552.name = i1553[0]
  i1552.atlasId = i1553[1]
  i1552.mipmapCount = i1553[2]
  i1552.hdr = !!i1553[3]
  i1552.size = i1553[4]
  i1552.anisoLevel = i1553[5]
  i1552.filterMode = i1553[6]
  i1552.wrapMode = i1553[7]
  var i1555 = i1553[8]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 4) {
    i1554.push( UnityEngine.Rect.MinMaxRect(i1555[i + 0], i1555[i + 1], i1555[i + 2], i1555[i + 3]) );
  }
  i1552.rects = i1554
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1559 = data
  i1558.name = i1559[0]
  i1558.index = i1559[1]
  i1558.startup = !!i1559[2]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1561 = data
  i1560.enabled = !!i1561[0]
  i1560.aspect = i1561[1]
  i1560.orthographic = !!i1561[2]
  i1560.orthographicSize = i1561[3]
  i1560.backgroundColor = new pc.Color(i1561[4], i1561[5], i1561[6], i1561[7])
  i1560.nearClipPlane = i1561[8]
  i1560.farClipPlane = i1561[9]
  i1560.fieldOfView = i1561[10]
  i1560.depth = i1561[11]
  i1560.clearFlags = i1561[12]
  i1560.cullingMask = i1561[13]
  i1560.rect = i1561[14]
  request.r(i1561[15], i1561[16], 0, i1560, 'targetTexture')
  i1560.usePhysicalProperties = !!i1561[17]
  i1560.focalLength = i1561[18]
  i1560.sensorSize = new pc.Vec2( i1561[19], i1561[20] )
  i1560.lensShift = new pc.Vec2( i1561[21], i1561[22] )
  i1560.gateFit = i1561[23]
  return i1560
}

Deserializers["FollowPosition"] = function (request, data, root) {
  var i1562 = root || request.c( 'FollowPosition' )
  var i1563 = data
  request.r(i1563[0], i1563[1], 0, i1562, 'objFollow')
  request.r(i1563[2], i1563[3], 0, i1562, 'target')
  i1562.smooth = i1563[4]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1565 = data
  i1564.enabled = !!i1565[0]
  i1564.type = i1565[1]
  i1564.color = new pc.Color(i1565[2], i1565[3], i1565[4], i1565[5])
  i1564.cullingMask = i1565[6]
  i1564.intensity = i1565[7]
  i1564.range = i1565[8]
  i1564.spotAngle = i1565[9]
  i1564.shadows = i1565[10]
  i1564.shadowNormalBias = i1565[11]
  i1564.shadowBias = i1565[12]
  i1564.shadowStrength = i1565[13]
  i1564.shadowResolution = i1565[14]
  i1564.lightmapBakeType = i1565[15]
  i1564.renderMode = i1565[16]
  request.r(i1565[17], i1565[18], 0, i1564, 'cookie')
  i1564.cookieSize = i1565[19]
  return i1564
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1567 = data
  request.r(i1567[0], i1567[1], 0, i1566, 'm_FirstSelected')
  i1566.m_sendNavigationEvents = !!i1567[2]
  i1566.m_DragThreshold = i1567[3]
  return i1566
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1569 = data
  i1568.m_HorizontalAxis = i1569[0]
  i1568.m_VerticalAxis = i1569[1]
  i1568.m_SubmitButton = i1569[2]
  i1568.m_CancelButton = i1569[3]
  i1568.m_InputActionsPerSecond = i1569[4]
  i1568.m_RepeatDelay = i1569[5]
  i1568.m_ForceModuleActive = !!i1569[6]
  i1568.m_SendPointerHoverToParent = !!i1569[7]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1571 = data
  i1570.pivot = new pc.Vec2( i1571[0], i1571[1] )
  i1570.anchorMin = new pc.Vec2( i1571[2], i1571[3] )
  i1570.anchorMax = new pc.Vec2( i1571[4], i1571[5] )
  i1570.sizeDelta = new pc.Vec2( i1571[6], i1571[7] )
  i1570.anchoredPosition3D = new pc.Vec3( i1571[8], i1571[9], i1571[10] )
  i1570.rotation = new pc.Quat(i1571[11], i1571[12], i1571[13], i1571[14])
  i1570.scale = new pc.Vec3( i1571[15], i1571[16], i1571[17] )
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1573 = data
  i1572.enabled = !!i1573[0]
  i1572.planeDistance = i1573[1]
  i1572.referencePixelsPerUnit = i1573[2]
  i1572.isFallbackOverlay = !!i1573[3]
  i1572.renderMode = i1573[4]
  i1572.renderOrder = i1573[5]
  i1572.sortingLayerName = i1573[6]
  i1572.sortingOrder = i1573[7]
  i1572.scaleFactor = i1573[8]
  request.r(i1573[9], i1573[10], 0, i1572, 'worldCamera')
  i1572.overrideSorting = !!i1573[11]
  i1572.pixelPerfect = !!i1573[12]
  i1572.targetDisplay = i1573[13]
  i1572.overridePixelPerfect = !!i1573[14]
  return i1572
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1575 = data
  i1574.m_UiScaleMode = i1575[0]
  i1574.m_ReferencePixelsPerUnit = i1575[1]
  i1574.m_ScaleFactor = i1575[2]
  i1574.m_ReferenceResolution = new pc.Vec2( i1575[3], i1575[4] )
  i1574.m_ScreenMatchMode = i1575[5]
  i1574.m_MatchWidthOrHeight = i1575[6]
  i1574.m_PhysicalUnit = i1575[7]
  i1574.m_FallbackScreenDPI = i1575[8]
  i1574.m_DefaultSpriteDPI = i1575[9]
  i1574.m_DynamicPixelsPerUnit = i1575[10]
  i1574.m_PresetInfoIsWorld = !!i1575[11]
  return i1574
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1577 = data
  i1576.m_IgnoreReversedGraphics = !!i1577[0]
  i1576.m_BlockingObjects = i1577[1]
  i1576.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1577[2] )
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1579 = data
  i1578.cullTransparentMesh = !!i1579[0]
  return i1578
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.UI.Image' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'm_Sprite')
  i1580.m_Type = i1581[2]
  i1580.m_PreserveAspect = !!i1581[3]
  i1580.m_FillCenter = !!i1581[4]
  i1580.m_FillMethod = i1581[5]
  i1580.m_FillAmount = i1581[6]
  i1580.m_FillClockwise = !!i1581[7]
  i1580.m_FillOrigin = i1581[8]
  i1580.m_UseSpriteMesh = !!i1581[9]
  i1580.m_PixelsPerUnitMultiplier = i1581[10]
  request.r(i1581[11], i1581[12], 0, i1580, 'm_Material')
  i1580.m_Maskable = !!i1581[13]
  i1580.m_Color = new pc.Color(i1581[14], i1581[15], i1581[16], i1581[17])
  i1580.m_RaycastTarget = !!i1581[18]
  i1580.m_RaycastPadding = new pc.Vec4( i1581[19], i1581[20], i1581[21], i1581[22] )
  return i1580
}

Deserializers["DynamicJoystick"] = function (request, data, root) {
  var i1582 = root || request.c( 'DynamicJoystick' )
  var i1583 = data
  request.r(i1583[0], i1583[1], 0, i1582, 'background')
  request.r(i1583[2], i1583[3], 0, i1582, 'handleTranf')
  request.r(i1583[4], i1583[5], 0, i1582, 'handleObj')
  i1582.on = new pc.Color(i1583[6], i1583[7], i1583[8], i1583[9])
  i1582.off = new pc.Color(i1583[10], i1583[11], i1583[12], i1583[13])
  request.r(i1583[14], i1583[15], 0, i1582, 'imgBG')
  request.r(i1583[16], i1583[17], 0, i1582, 'imgHandle')
  i1582.moveThreshold = i1583[18]
  i1582.handleRange = i1583[19]
  i1582.deadZone = i1583[20]
  i1582.axisOptions = i1583[21]
  i1582.snapX = !!i1583[22]
  i1582.snapY = !!i1583[23]
  return i1582
}

Deserializers["CharacterBehaviour"] = function (request, data, root) {
  var i1584 = root || request.c( 'CharacterBehaviour' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'moveByJoystick')
  request.r(i1585[2], i1585[3], 0, i1584, 'characterAnimator')
  request.r(i1585[4], i1585[5], 0, i1584, 'detectPlaceComponent')
  request.r(i1585[6], i1585[7], 0, i1584, 'stackControl')
  return i1584
}

Deserializers["MoveByJoystick"] = function (request, data, root) {
  var i1586 = root || request.c( 'MoveByJoystick' )
  var i1587 = data
  i1586.speed = i1587[0]
  request.r(i1587[1], i1587[2], 0, i1586, 'rb')
  request.r(i1587[3], i1587[4], 0, i1586, 'variableJoystick')
  request.r(i1587[5], i1587[6], 0, i1586, 'transf')
  i1586.smoothRotation = i1587[7]
  i1586.smoothMove = i1587[8]
  i1586.smoothRotationByTarget = i1587[9]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1589 = data
  i1588.mass = i1589[0]
  i1588.drag = i1589[1]
  i1588.angularDrag = i1589[2]
  i1588.useGravity = !!i1589[3]
  i1588.isKinematic = !!i1589[4]
  i1588.constraints = i1589[5]
  i1588.maxAngularVelocity = i1589[6]
  i1588.collisionDetectionMode = i1589[7]
  i1588.interpolation = i1589[8]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1591 = data
  i1590.enabled = !!i1591[0]
  i1590.isTrigger = !!i1591[1]
  request.r(i1591[2], i1591[3], 0, i1590, 'material')
  i1590.center = new pc.Vec3( i1591[4], i1591[5], i1591[6] )
  i1590.radius = i1591[7]
  return i1590
}

Deserializers["CharacterAnimator"] = function (request, data, root) {
  var i1592 = root || request.c( 'CharacterAnimator' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'animator')
  request.r(i1593[2], i1593[3], 0, i1592, 'objCook')
  return i1592
}

Deserializers["DetectPlaceComponent"] = function (request, data, root) {
  var i1594 = root || request.c( 'DetectPlaceComponent' )
  var i1595 = data
  request.r(i1595[0], i1595[1], 0, i1594, 'character')
  i1594.layerWaitPlace = UnityEngine.LayerMask.FromIntegerValue( i1595[2] )
  i1594.enableDetect = !!i1595[3]
  i1594.radius = i1595[4]
  i1594.timeDelayDetect = i1595[5]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1597 = data
  request.r(i1597[0], i1597[1], 0, i1596, 'animatorController')
  i1596.updateMode = i1597[2]
  var i1599 = i1597[3]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 2) {
  request.r(i1599[i + 0], i1599[i + 1], 2, i1598, '')
  }
  i1596.humanBones = i1598
  i1596.enabled = !!i1597[4]
  return i1596
}

Deserializers["StackControl"] = function (request, data, root) {
  var i1600 = root || request.c( 'StackControl' )
  var i1601 = data
  var i1603 = i1601[0]
  var i1602 = new (System.Collections.Generic.List$1(Bridge.ns('StackObject')))
  for(var i = 0; i < i1603.length; i += 2) {
  request.r(i1603[i + 0], i1603[i + 1], 1, i1602, '')
  }
  i1600.stackObjects = i1602
  var i1605 = i1601[1]
  var i1604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1605.length; i += 2) {
  request.r(i1605[i + 0], i1605[i + 1], 1, i1604, '')
  }
  i1600.stackPositions = i1604
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1611 = data
  i1610.center = new pc.Vec3( i1611[0], i1611[1], i1611[2] )
  i1610.size = new pc.Vec3( i1611[3], i1611[4], i1611[5] )
  i1610.enabled = !!i1611[6]
  i1610.isTrigger = !!i1611[7]
  request.r(i1611[8], i1611[9], 0, i1610, 'material')
  return i1610
}

Deserializers["CollectObjectPlace"] = function (request, data, root) {
  var i1612 = root || request.c( 'CollectObjectPlace' )
  var i1613 = data
  i1612.isTimeDelay = i1613[0]
  request.r(i1613[1], i1613[2], 0, i1612, 'stackControl')
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1615 = data
  i1614.enabled = !!i1615[0]
  request.r(i1615[1], i1615[2], 0, i1614, 'sharedMaterial')
  var i1617 = i1615[3]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 2) {
  request.r(i1617[i + 0], i1617[i + 1], 2, i1616, '')
  }
  i1614.sharedMaterials = i1616
  i1614.receiveShadows = !!i1615[4]
  i1614.shadowCastingMode = i1615[5]
  i1614.sortingLayerID = i1615[6]
  i1614.sortingOrder = i1615[7]
  i1614.lightmapIndex = i1615[8]
  i1614.lightmapSceneIndex = i1615[9]
  i1614.lightmapScaleOffset = new pc.Vec4( i1615[10], i1615[11], i1615[12], i1615[13] )
  i1614.lightProbeUsage = i1615[14]
  i1614.reflectionProbeUsage = i1615[15]
  i1614.color = new pc.Color(i1615[16], i1615[17], i1615[18], i1615[19])
  request.r(i1615[20], i1615[21], 0, i1614, 'sprite')
  i1614.flipX = !!i1615[22]
  i1614.flipY = !!i1615[23]
  i1614.drawMode = i1615[24]
  i1614.size = new pc.Vec2( i1615[25], i1615[26] )
  i1614.tileMode = i1615[27]
  i1614.adaptiveModeThreshold = i1615[28]
  i1614.maskInteraction = i1615[29]
  i1614.spriteSortPoint = i1615[30]
  return i1614
}

Deserializers["KitchenPlace"] = function (request, data, root) {
  var i1618 = root || request.c( 'KitchenPlace' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'posCook')
  request.r(i1619[2], i1619[3], 0, i1618, 'foodProduct')
  request.r(i1619[4], i1619[5], 0, i1618, 'foodSpawnPos')
  i1618.isTimeDelay = i1619[6]
  request.r(i1619[7], i1619[8], 0, i1618, 'cookAnim')
  request.r(i1619[9], i1619[10], 0, i1618, 'stackInput')
  request.r(i1619[11], i1619[12], 0, i1618, 'stackOutput')
  i1618.timeCook = i1619[13]
  i1618.isCooking = !!i1619[14]
  i1618.isCookComplete = !!i1619[15]
  return i1618
}

Deserializers["PickupPlace"] = function (request, data, root) {
  var i1620 = root || request.c( 'PickupPlace' )
  var i1621 = data
  i1620.timeDelay = i1621[0]
  request.r(i1621[1], i1621[2], 0, i1620, 'stackInput')
  request.r(i1621[3], i1621[4], 0, i1620, 'col')
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1623 = data
  i1622.ambientIntensity = i1623[0]
  i1622.reflectionIntensity = i1623[1]
  i1622.ambientMode = i1623[2]
  i1622.ambientLight = new pc.Color(i1623[3], i1623[4], i1623[5], i1623[6])
  i1622.ambientSkyColor = new pc.Color(i1623[7], i1623[8], i1623[9], i1623[10])
  i1622.ambientGroundColor = new pc.Color(i1623[11], i1623[12], i1623[13], i1623[14])
  i1622.ambientEquatorColor = new pc.Color(i1623[15], i1623[16], i1623[17], i1623[18])
  i1622.fogColor = new pc.Color(i1623[19], i1623[20], i1623[21], i1623[22])
  i1622.fogEndDistance = i1623[23]
  i1622.fogStartDistance = i1623[24]
  i1622.fogDensity = i1623[25]
  i1622.fog = !!i1623[26]
  request.r(i1623[27], i1623[28], 0, i1622, 'skybox')
  i1622.fogMode = i1623[29]
  var i1625 = i1623[30]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1625[i + 0]) );
  }
  i1622.lightmaps = i1624
  i1622.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1623[31], i1622.lightProbes)
  i1622.lightmapsMode = i1623[32]
  i1622.mixedBakeMode = i1623[33]
  i1622.environmentLightingMode = i1623[34]
  i1622.ambientProbe = new pc.SphericalHarmonicsL2(i1623[35])
  i1622.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1623[36])
  i1622.useReferenceAmbientProbe = !!i1623[37]
  request.r(i1623[38], i1623[39], 0, i1622, 'customReflection')
  request.r(i1623[40], i1623[41], 0, i1622, 'defaultReflection')
  i1622.defaultReflectionMode = i1623[42]
  i1622.defaultReflectionResolution = i1623[43]
  i1622.sunLightObjectId = i1623[44]
  i1622.pixelLightCount = i1623[45]
  i1622.defaultReflectionHDR = !!i1623[46]
  i1622.hasLightDataAsset = !!i1623[47]
  i1622.hasManualGenerate = !!i1623[48]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'lightmapColor')
  request.r(i1629[2], i1629[3], 0, i1628, 'lightmapDirection')
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1630 = root || new UnityEngine.LightProbes()
  var i1631 = data
  return i1630
}

Deserializers["FixedJoystick"] = function (request, data, root) {
  var i1638 = root || request.c( 'FixedJoystick' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'background')
  request.r(i1639[2], i1639[3], 0, i1638, 'handleTranf')
  request.r(i1639[4], i1639[5], 0, i1638, 'handleObj')
  i1638.handleRange = i1639[6]
  i1638.deadZone = i1639[7]
  i1638.axisOptions = i1639[8]
  i1638.snapX = !!i1639[9]
  i1638.snapY = !!i1639[10]
  return i1638
}

Deserializers["FloatingJoystick"] = function (request, data, root) {
  var i1640 = root || request.c( 'FloatingJoystick' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'background')
  request.r(i1641[2], i1641[3], 0, i1640, 'handleTranf')
  request.r(i1641[4], i1641[5], 0, i1640, 'handleObj')
  i1640.handleRange = i1641[6]
  i1640.deadZone = i1641[7]
  i1640.axisOptions = i1641[8]
  i1640.snapX = !!i1641[9]
  i1640.snapY = !!i1641[10]
  return i1640
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i1642 = root || request.c( 'VariableJoystick' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'background')
  request.r(i1643[2], i1643[3], 0, i1642, 'handleTranf')
  request.r(i1643[4], i1643[5], 0, i1642, 'handleObj')
  i1642.moveThreshold = i1643[6]
  i1642.joystickType = i1643[7]
  i1642.handleRange = i1643[8]
  i1642.deadZone = i1643[9]
  i1642.axisOptions = i1643[10]
  i1642.snapX = !!i1643[11]
  i1642.snapY = !!i1643[12]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1645 = data
  var i1647 = i1645[0]
  var i1646 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.add(i1647[i + 0]);
  }
  i1644.invalidShaderVariants = i1646
  i1644.name = i1645[1]
  i1644.guid = i1645[2]
  var i1649 = i1645[3]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( i1649[i + 0] );
  }
  i1644.shaderDefinedKeywords = i1648
  var i1651 = i1645[4]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1651[i + 0]) );
  }
  i1644.passes = i1650
  var i1653 = i1645[5]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1653[i + 0]) );
  }
  i1644.usePasses = i1652
  var i1655 = i1645[6]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1655[i + 0]) );
  }
  i1644.defaultParameterValues = i1654
  request.r(i1645[7], i1645[8], 0, i1644, 'unityFallbackShader')
  i1644.readDepth = !!i1645[9]
  i1644.isCreatedByShaderGraph = !!i1645[10]
  i1644.usedBatchUniforms = i1645[11]
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1662 = root || new pc.UnityShaderPass()
  var i1663 = data
  i1662.id = i1663[0]
  i1662.subShaderIndex = i1663[1]
  i1662.name = i1663[2]
  i1662.passType = i1663[3]
  i1662.usePass = !!i1663[4]
  i1662.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[5], i1662.zTest)
  i1662.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[6], i1662.zWrite)
  i1662.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[7], i1662.culling)
  i1662.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1663[8], i1662.blending)
  i1662.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1663[9], i1662.alphaBlending)
  i1662.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[10], i1662.colorWriteMask)
  i1662.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[11], i1662.offsetUnits)
  i1662.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[12], i1662.offsetFactor)
  i1662.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[13], i1662.stencilRef)
  i1662.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[14], i1662.stencilReadMask)
  i1662.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1663[15], i1662.stencilWriteMask)
  i1662.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1663[16], i1662.stencilOp)
  i1662.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1663[17], i1662.stencilOpFront)
  i1662.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1663[18], i1662.stencilOpBack)
  var i1665 = i1663[19]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1665[i + 0]) );
  }
  i1662.tags = i1664
  var i1667 = i1663[20]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( i1667[i + 0] );
  }
  i1662.passDefinedKeywords = i1666
  var i1669 = i1663[21]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1669[i + 0]) );
  }
  i1662.passDefinedKeywordGroups = i1668
  var i1671 = i1663[22]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1671[i + 0]) );
  }
  i1662.variants = i1670
  var i1673 = i1663[23]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1673[i + 0]) );
  }
  i1662.excludedVariants = i1672
  i1662.hasDepthReader = !!i1663[24]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1675 = data
  i1674.val = i1675[0]
  i1674.name = i1675[1]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1677 = data
  i1676.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[0], i1676.src)
  i1676.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[1], i1676.dst)
  i1676.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[2], i1676.op)
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1679 = data
  i1678.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1679[0], i1678.pass)
  i1678.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1679[1], i1678.fail)
  i1678.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1679[2], i1678.zFail)
  i1678.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1679[3], i1678.comp)
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1683 = data
  i1682.name = i1683[0]
  i1682.value = i1683[1]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1687 = data
  var i1689 = i1687[0]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( i1689[i + 0] );
  }
  i1686.keywords = i1688
  i1686.hasDiscard = !!i1687[1]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1693 = data
  i1692.passId = i1693[0]
  i1692.subShaderIndex = i1693[1]
  var i1695 = i1693[2]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( i1695[i + 0] );
  }
  i1692.keywords = i1694
  i1692.vertexProgram = i1693[3]
  i1692.fragmentProgram = i1693[4]
  i1692.readDepth = !!i1693[5]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1699 = data
  request.r(i1699[0], i1699[1], 0, i1698, 'shader')
  i1698.pass = i1699[2]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1703 = data
  i1702.name = i1703[0]
  i1702.type = i1703[1]
  i1702.value = new pc.Vec4( i1703[2], i1703[3], i1703[4], i1703[5] )
  i1702.textureValue = i1703[6]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1705 = data
  i1704.name = i1705[0]
  request.r(i1705[1], i1705[2], 0, i1704, 'texture')
  i1704.aabb = i1705[3]
  i1704.vertices = i1705[4]
  i1704.triangles = i1705[5]
  i1704.textureRect = UnityEngine.Rect.MinMaxRect(i1705[6], i1705[7], i1705[8], i1705[9])
  i1704.packedRect = UnityEngine.Rect.MinMaxRect(i1705[10], i1705[11], i1705[12], i1705[13])
  i1704.border = new pc.Vec4( i1705[14], i1705[15], i1705[16], i1705[17] )
  i1704.transparency = i1705[18]
  i1704.bounds = i1705[19]
  i1704.pixelsPerUnit = i1705[20]
  i1704.textureWidth = i1705[21]
  i1704.textureHeight = i1705[22]
  i1704.nativeSize = new pc.Vec2( i1705[23], i1705[24] )
  i1704.pivot = new pc.Vec2( i1705[25], i1705[26] )
  i1704.textureRectOffset = new pc.Vec2( i1705[27], i1705[28] )
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1707 = data
  i1706.name = i1707[0]
  i1706.wrapMode = i1707[1]
  i1706.isLooping = !!i1707[2]
  i1706.length = i1707[3]
  var i1709 = i1707[4]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1709[i + 0]) );
  }
  i1706.curves = i1708
  var i1711 = i1707[5]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1711[i + 0]) );
  }
  i1706.events = i1710
  i1706.halfPrecision = !!i1707[6]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1715 = data
  i1714.path = i1715[0]
  i1714.componentType = i1715[1]
  i1714.property = i1715[2]
  i1714.keys = i1715[3]
  var i1717 = i1715[4]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1717[i + 0]) );
  }
  i1714.objectReferenceKeys = i1716
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1721 = data
  i1720.time = i1721[0]
  request.r(i1721[1], i1721[2], 0, i1720, 'value')
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1725 = data
  i1724.functionName = i1725[0]
  i1724.floatParameter = i1725[1]
  i1724.intParameter = i1725[2]
  i1724.stringParameter = i1725[3]
  request.r(i1725[4], i1725[5], 0, i1724, 'objectReferenceParameter')
  i1724.time = i1725[6]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1727 = data
  i1726.name = i1727[0]
  var i1729 = i1727[1]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1729[i + 0]) );
  }
  i1726.states = i1728
  var i1731 = i1727[2]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1731[i + 0]) );
  }
  i1726.layers = i1730
  var i1733 = i1727[3]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1733[i + 0]) );
  }
  i1726.parameters = i1732
  i1726.animationClips = i1727[4]
  i1726.HasSubStateMachines = !!i1727[5]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1737 = data
  i1736.cycleOffset = i1737[0]
  i1736.cycleOffsetParameter = i1737[1]
  i1736.cycleOffsetParameterActive = !!i1737[2]
  i1736.mirror = !!i1737[3]
  i1736.mirrorParameter = i1737[4]
  i1736.mirrorParameterActive = !!i1737[5]
  i1736.motionId = i1737[6]
  i1736.nameHash = i1737[7]
  i1736.fullPathHash = i1737[8]
  i1736.speed = i1737[9]
  i1736.speedParameter = i1737[10]
  i1736.speedParameterActive = !!i1737[11]
  i1736.tag = i1737[12]
  i1736.name = i1737[13]
  i1736.layer = i1737[14]
  i1736.writeDefaultValues = !!i1737[15]
  var i1739 = i1737[16]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1739[i + 0]) );
  }
  i1736.transitions = i1738
  var i1741 = i1737[17]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 2) {
  request.r(i1741[i + 0], i1741[i + 1], 2, i1740, '')
  }
  i1736.behaviours = i1740
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1745 = data
  i1744.fullPath = i1745[0]
  i1744.canTransitionToSelf = !!i1745[1]
  i1744.duration = i1745[2]
  i1744.exitTime = i1745[3]
  i1744.hasExitTime = !!i1745[4]
  i1744.hasFixedDuration = !!i1745[5]
  i1744.interruptionSource = i1745[6]
  i1744.offset = i1745[7]
  i1744.orderedInterruption = !!i1745[8]
  i1744.destinationStateNameHash = i1745[9]
  i1744.destinationStateMachineId = i1745[10]
  i1744.isExit = !!i1745[11]
  i1744.mute = !!i1745[12]
  i1744.solo = !!i1745[13]
  var i1747 = i1745[14]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1747[i + 0]) );
  }
  i1744.conditions = i1746
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1751 = data
  i1750.mode = i1751[0]
  i1750.parameter = i1751[1]
  i1750.threshold = i1751[2]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1757 = data
  i1756.blendingMode = i1757[0]
  i1756.defaultWeight = i1757[1]
  i1756.name = i1757[2]
  i1756.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1757[3], i1756.stateMachine)
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1759 = data
  i1758.id = i1759[0]
  i1758.defaultStateNameHash = i1759[1]
  var i1761 = i1759[2]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1761[i + 0]) );
  }
  i1758.entryTransitions = i1760
  var i1763 = i1759[3]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1763[i + 0]) );
  }
  i1758.anyStateTransitions = i1762
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1767 = data
  i1766.destinationStateNameHash = i1767[0]
  i1766.destinationStateMachineId = i1767[1]
  i1766.isExit = !!i1767[2]
  i1766.mute = !!i1767[3]
  i1766.solo = !!i1767[4]
  var i1769 = i1767[5]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1769[i + 0]) );
  }
  i1766.conditions = i1768
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1773 = data
  i1772.defaultBool = !!i1773[0]
  i1772.defaultFloat = i1773[1]
  i1772.defaultInt = i1773[2]
  i1772.name = i1773[3]
  i1772.nameHash = i1773[4]
  i1772.type = i1773[5]
  return i1772
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1774 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1775 = data
  i1774.useSafeMode = !!i1775[0]
  i1774.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1775[1], i1774.safeModeOptions)
  i1774.timeScale = i1775[2]
  i1774.unscaledTimeScale = i1775[3]
  i1774.useSmoothDeltaTime = !!i1775[4]
  i1774.maxSmoothUnscaledTime = i1775[5]
  i1774.rewindCallbackMode = i1775[6]
  i1774.showUnityEditorReport = !!i1775[7]
  i1774.logBehaviour = i1775[8]
  i1774.drawGizmos = !!i1775[9]
  i1774.defaultRecyclable = !!i1775[10]
  i1774.defaultAutoPlay = i1775[11]
  i1774.defaultUpdateType = i1775[12]
  i1774.defaultTimeScaleIndependent = !!i1775[13]
  i1774.defaultEaseType = i1775[14]
  i1774.defaultEaseOvershootOrAmplitude = i1775[15]
  i1774.defaultEasePeriod = i1775[16]
  i1774.defaultAutoKill = !!i1775[17]
  i1774.defaultLoopType = i1775[18]
  i1774.debugMode = !!i1775[19]
  i1774.debugStoreTargetId = !!i1775[20]
  i1774.showPreviewPanel = !!i1775[21]
  i1774.storeSettingsLocation = i1775[22]
  i1774.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1775[23], i1774.modules)
  i1774.createASMDEF = !!i1775[24]
  i1774.showPlayingTweens = !!i1775[25]
  i1774.showPausedTweens = !!i1775[26]
  return i1774
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1776 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1777 = data
  i1776.logBehaviour = i1777[0]
  i1776.nestedTweenFailureBehaviour = i1777[1]
  return i1776
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1778 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1779 = data
  i1778.showPanel = !!i1779[0]
  i1778.audioEnabled = !!i1779[1]
  i1778.physicsEnabled = !!i1779[2]
  i1778.physics2DEnabled = !!i1779[3]
  i1778.spriteEnabled = !!i1779[4]
  i1778.uiEnabled = !!i1779[5]
  i1778.textMeshProEnabled = !!i1779[6]
  i1778.tk2DEnabled = !!i1779[7]
  i1778.deAudioEnabled = !!i1779[8]
  i1778.deUnityExtendedEnabled = !!i1779[9]
  i1778.epoOutlineEnabled = !!i1779[10]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1781 = data
  var i1783 = i1781[0]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1783[i + 0]) );
  }
  i1780.files = i1782
  i1780.componentToPrefabIds = i1781[1]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1787 = data
  i1786.path = i1787[0]
  request.r(i1787[1], i1787[2], 0, i1786, 'unityObject')
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1789 = data
  var i1791 = i1789[0]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1791[i + 0]) );
  }
  i1788.scriptsExecutionOrder = i1790
  var i1793 = i1789[1]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1793[i + 0]) );
  }
  i1788.sortingLayers = i1792
  var i1795 = i1789[2]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1795[i + 0]) );
  }
  i1788.cullingLayers = i1794
  i1788.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1789[3], i1788.timeSettings)
  i1788.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1789[4], i1788.physicsSettings)
  i1788.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1789[5], i1788.physics2DSettings)
  i1788.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1789[6], i1788.qualitySettings)
  i1788.enableRealtimeShadows = !!i1789[7]
  i1788.enableAutoInstancing = !!i1789[8]
  i1788.enableDynamicBatching = !!i1789[9]
  i1788.lightmapEncodingQuality = i1789[10]
  i1788.desiredColorSpace = i1789[11]
  var i1797 = i1789[12]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( i1797[i + 0] );
  }
  i1788.allTags = i1796
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1801 = data
  i1800.name = i1801[0]
  i1800.value = i1801[1]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1805 = data
  i1804.id = i1805[0]
  i1804.name = i1805[1]
  i1804.value = i1805[2]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1809 = data
  i1808.id = i1809[0]
  i1808.name = i1809[1]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1811 = data
  i1810.fixedDeltaTime = i1811[0]
  i1810.maximumDeltaTime = i1811[1]
  i1810.timeScale = i1811[2]
  i1810.maximumParticleTimestep = i1811[3]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1813 = data
  i1812.gravity = new pc.Vec3( i1813[0], i1813[1], i1813[2] )
  i1812.defaultSolverIterations = i1813[3]
  i1812.bounceThreshold = i1813[4]
  i1812.autoSyncTransforms = !!i1813[5]
  i1812.autoSimulation = !!i1813[6]
  var i1815 = i1813[7]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1815[i + 0]) );
  }
  i1812.collisionMatrix = i1814
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1819 = data
  i1818.enabled = !!i1819[0]
  i1818.layerId = i1819[1]
  i1818.otherLayerId = i1819[2]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1821 = data
  request.r(i1821[0], i1821[1], 0, i1820, 'material')
  i1820.gravity = new pc.Vec2( i1821[2], i1821[3] )
  i1820.positionIterations = i1821[4]
  i1820.velocityIterations = i1821[5]
  i1820.velocityThreshold = i1821[6]
  i1820.maxLinearCorrection = i1821[7]
  i1820.maxAngularCorrection = i1821[8]
  i1820.maxTranslationSpeed = i1821[9]
  i1820.maxRotationSpeed = i1821[10]
  i1820.baumgarteScale = i1821[11]
  i1820.baumgarteTOIScale = i1821[12]
  i1820.timeToSleep = i1821[13]
  i1820.linearSleepTolerance = i1821[14]
  i1820.angularSleepTolerance = i1821[15]
  i1820.defaultContactOffset = i1821[16]
  i1820.autoSimulation = !!i1821[17]
  i1820.queriesHitTriggers = !!i1821[18]
  i1820.queriesStartInColliders = !!i1821[19]
  i1820.callbacksOnDisable = !!i1821[20]
  i1820.reuseCollisionCallbacks = !!i1821[21]
  i1820.autoSyncTransforms = !!i1821[22]
  var i1823 = i1821[23]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1823[i + 0]) );
  }
  i1820.collisionMatrix = i1822
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1827 = data
  i1826.enabled = !!i1827[0]
  i1826.layerId = i1827[1]
  i1826.otherLayerId = i1827[2]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1829 = data
  var i1831 = i1829[0]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1831[i + 0]) );
  }
  i1828.qualityLevels = i1830
  var i1833 = i1829[1]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( i1833[i + 0] );
  }
  i1828.names = i1832
  i1828.shadows = i1829[2]
  i1828.anisotropicFiltering = i1829[3]
  i1828.antiAliasing = i1829[4]
  i1828.lodBias = i1829[5]
  i1828.shadowCascades = i1829[6]
  i1828.shadowDistance = i1829[7]
  i1828.shadowmaskMode = i1829[8]
  i1828.shadowProjection = i1829[9]
  i1828.shadowResolution = i1829[10]
  i1828.softParticles = !!i1829[11]
  i1828.softVegetation = !!i1829[12]
  i1828.activeColorSpace = i1829[13]
  i1828.desiredColorSpace = i1829[14]
  i1828.masterTextureLimit = i1829[15]
  i1828.maxQueuedFrames = i1829[16]
  i1828.particleRaycastBudget = i1829[17]
  i1828.pixelLightCount = i1829[18]
  i1828.realtimeReflectionProbes = !!i1829[19]
  i1828.shadowCascade2Split = i1829[20]
  i1828.shadowCascade4Split = new pc.Vec3( i1829[21], i1829[22], i1829[23] )
  i1828.streamingMipmapsActive = !!i1829[24]
  i1828.vSyncCount = i1829[25]
  i1828.asyncUploadBufferSize = i1829[26]
  i1828.asyncUploadTimeSlice = i1829[27]
  i1828.billboardsFaceCameraPosition = !!i1829[28]
  i1828.shadowNearPlaneOffset = i1829[29]
  i1828.streamingMipmapsMemoryBudget = i1829[30]
  i1828.maximumLODLevel = i1829[31]
  i1828.streamingMipmapsAddAllCameras = !!i1829[32]
  i1828.streamingMipmapsMaxLevelReduction = i1829[33]
  i1828.streamingMipmapsRenderersPerFrame = i1829[34]
  i1828.resolutionScalingFixedDPIFactor = i1829[35]
  i1828.streamingMipmapsMaxFileIORequests = i1829[36]
  i1828.currentQualityLevel = i1829[37]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1839 = data
  i1838.weight = i1839[0]
  i1838.vertices = i1839[1]
  i1838.normals = i1839[2]
  i1838.tangents = i1839[3]
  return i1838
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[2],"55":[12],"56":[33],"57":[33],"58":[33],"59":[33],"60":[33],"61":[33],"62":[33],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[12],"78":[6],"79":[80],"81":[80],"20":[19],"82":[19],"83":[6,19],"84":[19,23],"85":[19],"86":[23,19],"87":[6],"88":[23,19],"89":[19],"90":[91],"92":[19],"93":[19],"22":[20],"24":[23,19],"94":[19],"21":[20],"95":[19],"96":[19],"97":[19],"98":[19],"99":[19],"100":[19],"101":[19],"102":[19],"103":[19],"104":[23,19],"105":[19],"106":[19],"107":[19],"108":[19],"109":[23,19],"110":[19],"111":[17],"112":[17],"18":[17],"113":[17],"114":[12],"115":[12],"116":[91],"117":[91]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","StackObject","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","FollowPosition","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","DynamicJoystick","UnityEngine.GameObject","CharacterBehaviour","MoveByJoystick","CharacterAnimator","DetectPlaceComponent","StackControl","UnityEngine.Rigidbody","UnityEngine.SphereCollider","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.BoxCollider","CollectObjectPlace","UnityEngine.SpriteRenderer","KitchenPlace","PickupPlace","UnityEngine.Cubemap","FixedJoystick","FloatingJoystick","VariableJoystick","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.24f1";

Deserializers.productName = "kitchen";

Deserializers.lunaInitializationTime = "05/08/2023 09:13:25";

Deserializers.lunaDaysRunning = "2.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1111";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4303";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.kitchen";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "e78d906b-120b-49fd-aa0b-88809fc80698";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

