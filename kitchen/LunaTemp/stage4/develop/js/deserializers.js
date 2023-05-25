var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.JointSpring' )
  var i1621 = data
  i1620.spring = i1621[0]
  i1620.damper = i1621[1]
  i1620.targetPosition = i1621[2]
  return i1620
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.JointMotor' )
  var i1623 = data
  i1622.m_TargetVelocity = i1623[0]
  i1622.m_Force = i1623[1]
  i1622.m_FreeSpin = i1623[2]
  return i1622
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.JointLimits' )
  var i1625 = data
  i1624.m_Min = i1625[0]
  i1624.m_Max = i1625[1]
  i1624.m_Bounciness = i1625[2]
  i1624.m_BounceMinVelocity = i1625[3]
  i1624.m_ContactDistance = i1625[4]
  i1624.minBounce = i1625[5]
  i1624.maxBounce = i1625[6]
  return i1624
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.JointDrive' )
  var i1627 = data
  i1626.m_PositionSpring = i1627[0]
  i1626.m_PositionDamper = i1627[1]
  i1626.m_MaximumForce = i1627[2]
  return i1626
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1629 = data
  i1628.m_Spring = i1629[0]
  i1628.m_Damper = i1629[1]
  return i1628
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1631 = data
  i1630.m_Limit = i1631[0]
  i1630.m_Bounciness = i1631[1]
  i1630.m_ContactDistance = i1631[2]
  return i1630
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1633 = data
  i1632.m_ExtremumSlip = i1633[0]
  i1632.m_ExtremumValue = i1633[1]
  i1632.m_AsymptoteSlip = i1633[2]
  i1632.m_AsymptoteValue = i1633[3]
  i1632.m_Stiffness = i1633[4]
  return i1632
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1635 = data
  i1634.m_LowerAngle = i1635[0]
  i1634.m_UpperAngle = i1635[1]
  return i1634
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1637 = data
  i1636.m_MotorSpeed = i1637[0]
  i1636.m_MaximumMotorTorque = i1637[1]
  return i1636
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1639 = data
  i1638.m_DampingRatio = i1639[0]
  i1638.m_Frequency = i1639[1]
  i1638.m_Angle = i1639[2]
  return i1638
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1641 = data
  i1640.m_LowerTranslation = i1641[0]
  i1640.m_UpperTranslation = i1641[1]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1642 = root || new pc.UnityMaterial()
  var i1643 = data
  i1642.name = i1643[0]
  request.r(i1643[1], i1643[2], 0, i1642, 'shader')
  i1642.renderQueue = i1643[3]
  i1642.enableInstancing = !!i1643[4]
  var i1645 = i1643[5]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1645[i + 0]) );
  }
  i1642.floatParameters = i1644
  var i1647 = i1643[6]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1647[i + 0]) );
  }
  i1642.colorParameters = i1646
  var i1649 = i1643[7]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1649[i + 0]) );
  }
  i1642.vectorParameters = i1648
  var i1651 = i1643[8]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1651[i + 0]) );
  }
  i1642.textureParameters = i1650
  var i1653 = i1643[9]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1653[i + 0]) );
  }
  i1642.materialFlags = i1652
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1657 = data
  i1656.name = i1657[0]
  i1656.value = i1657[1]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1661 = data
  i1660.name = i1661[0]
  i1660.value = new pc.Color(i1661[1], i1661[2], i1661[3], i1661[4])
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1665 = data
  i1664.name = i1665[0]
  i1664.value = new pc.Vec4( i1665[1], i1665[2], i1665[3], i1665[4] )
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1669 = data
  i1668.name = i1669[0]
  request.r(i1669[1], i1669[2], 0, i1668, 'value')
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1673 = data
  i1672.name = i1673[0]
  i1672.enabled = !!i1673[1]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1675 = data
  i1674.position = new pc.Vec3( i1675[0], i1675[1], i1675[2] )
  i1674.scale = new pc.Vec3( i1675[3], i1675[4], i1675[5] )
  i1674.rotation = new pc.Quat(i1675[6], i1675[7], i1675[8], i1675[9])
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1677 = data
  i1676.name = i1677[0]
  i1676.tagId = i1677[1]
  i1676.enabled = !!i1677[2]
  i1676.isStatic = !!i1677[3]
  i1676.layer = i1677[4]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1679 = data
  i1678.enabled = !!i1679[0]
  request.r(i1679[1], i1679[2], 0, i1678, 'sharedMaterial')
  var i1681 = i1679[3]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 2) {
  request.r(i1681[i + 0], i1681[i + 1], 2, i1680, '')
  }
  i1678.sharedMaterials = i1680
  i1678.receiveShadows = !!i1679[4]
  i1678.shadowCastingMode = i1679[5]
  i1678.sortingLayerID = i1679[6]
  i1678.sortingOrder = i1679[7]
  i1678.lightmapIndex = i1679[8]
  i1678.lightmapSceneIndex = i1679[9]
  i1678.lightmapScaleOffset = new pc.Vec4( i1679[10], i1679[11], i1679[12], i1679[13] )
  i1678.lightProbeUsage = i1679[14]
  i1678.reflectionProbeUsage = i1679[15]
  request.r(i1679[16], i1679[17], 0, i1678, 'sharedMesh')
  var i1683 = i1679[18]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 2) {
  request.r(i1683[i + 0], i1683[i + 1], 2, i1682, '')
  }
  i1678.bones = i1682
  i1678.updateWhenOffscreen = !!i1679[19]
  i1678.localBounds = i1679[20]
  request.r(i1679[21], i1679[22], 0, i1678, 'rootBone')
  var i1685 = i1679[23]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1685[i + 0]) );
  }
  i1678.blendShapesWeights = i1684
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1693 = data
  i1692.weight = i1693[0]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1695 = data
  i1694.name = i1695[0]
  i1694.width = i1695[1]
  i1694.height = i1695[2]
  i1694.mipmapCount = i1695[3]
  i1694.anisoLevel = i1695[4]
  i1694.filterMode = i1695[5]
  i1694.hdr = !!i1695[6]
  i1694.format = i1695[7]
  i1694.wrapMode = i1695[8]
  i1694.alphaIsTransparency = !!i1695[9]
  i1694.alphaSource = i1695[10]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1697 = data
  i1696.name = i1697[0]
  i1696.halfPrecision = !!i1697[1]
  i1696.vertexCount = i1697[2]
  i1696.aabb = i1697[3]
  var i1699 = i1697[4]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( !!i1699[i + 0] );
  }
  i1696.streams = i1698
  i1696.vertices = i1697[5]
  var i1701 = i1697[6]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1701[i + 0]) );
  }
  i1696.subMeshes = i1700
  var i1703 = i1697[7]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 16) {
    i1702.push( new pc.Mat4().setData(i1703[i + 0], i1703[i + 1], i1703[i + 2], i1703[i + 3],  i1703[i + 4], i1703[i + 5], i1703[i + 6], i1703[i + 7],  i1703[i + 8], i1703[i + 9], i1703[i + 10], i1703[i + 11],  i1703[i + 12], i1703[i + 13], i1703[i + 14], i1703[i + 15]) );
  }
  i1696.bindposes = i1702
  var i1705 = i1697[8]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1705[i + 0]) );
  }
  i1696.blendShapes = i1704
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1711 = data
  i1710.triangles = i1711[0]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1717 = data
  i1716.name = i1717[0]
  var i1719 = i1717[1]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1719[i + 0]) );
  }
  i1716.frames = i1718
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'sharedMesh')
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1723 = data
  request.r(i1723[0], i1723[1], 0, i1722, 'additionalVertexStreams')
  i1722.enabled = !!i1723[2]
  request.r(i1723[3], i1723[4], 0, i1722, 'sharedMaterial')
  var i1725 = i1723[5]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 2) {
  request.r(i1725[i + 0], i1725[i + 1], 2, i1724, '')
  }
  i1722.sharedMaterials = i1724
  i1722.receiveShadows = !!i1723[6]
  i1722.shadowCastingMode = i1723[7]
  i1722.sortingLayerID = i1723[8]
  i1722.sortingOrder = i1723[9]
  i1722.lightmapIndex = i1723[10]
  i1722.lightmapSceneIndex = i1723[11]
  i1722.lightmapScaleOffset = new pc.Vec4( i1723[12], i1723[13], i1723[14], i1723[15] )
  i1722.lightProbeUsage = i1723[16]
  i1722.reflectionProbeUsage = i1723[17]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1727 = data
  i1726.playAutomatically = !!i1727[0]
  request.r(i1727[1], i1727[2], 0, i1726, 'clip')
  var i1729 = i1727[3]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 2) {
  request.r(i1729[i + 0], i1729[i + 1], 2, i1728, '')
  }
  i1726.clips = i1728
  i1726.wrapMode = i1727[4]
  i1726.enabled = !!i1727[5]
  return i1726
}

Deserializers["StackObject"] = function (request, data, root) {
  var i1732 = root || request.c( 'StackObject' )
  var i1733 = data
  request.r(i1733[0], i1733[1], 0, i1732, 'transf')
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1735 = data
  i1734.pivot = new pc.Vec2( i1735[0], i1735[1] )
  i1734.anchorMin = new pc.Vec2( i1735[2], i1735[3] )
  i1734.anchorMax = new pc.Vec2( i1735[4], i1735[5] )
  i1734.sizeDelta = new pc.Vec2( i1735[6], i1735[7] )
  i1734.anchoredPosition3D = new pc.Vec3( i1735[8], i1735[9], i1735[10] )
  i1734.rotation = new pc.Quat(i1735[11], i1735[12], i1735[13], i1735[14])
  i1734.scale = new pc.Vec3( i1735[15], i1735[16], i1735[17] )
  return i1734
}

Deserializers["EndCard"] = function (request, data, root) {
  var i1736 = root || request.c( 'EndCard' )
  var i1737 = data
  request.r(i1737[0], i1737[1], 0, i1736, 'endCard')
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1739 = data
  i1738.cullTransparentMesh = !!i1739[0]
  return i1738
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1740 = root || request.c( 'UnityEngine.UI.Image' )
  var i1741 = data
  request.r(i1741[0], i1741[1], 0, i1740, 'm_Sprite')
  i1740.m_Type = i1741[2]
  i1740.m_PreserveAspect = !!i1741[3]
  i1740.m_FillCenter = !!i1741[4]
  i1740.m_FillMethod = i1741[5]
  i1740.m_FillAmount = i1741[6]
  i1740.m_FillClockwise = !!i1741[7]
  i1740.m_FillOrigin = i1741[8]
  i1740.m_UseSpriteMesh = !!i1741[9]
  i1740.m_PixelsPerUnitMultiplier = i1741[10]
  request.r(i1741[11], i1741[12], 0, i1740, 'm_Material')
  i1740.m_Maskable = !!i1741[13]
  i1740.m_Color = new pc.Color(i1741[14], i1741[15], i1741[16], i1741[17])
  i1740.m_RaycastTarget = !!i1741[18]
  i1740.m_RaycastPadding = new pc.Vec4( i1741[19], i1741[20], i1741[21], i1741[22] )
  return i1740
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1742 = root || request.c( 'UnityEngine.UI.Button' )
  var i1743 = data
  i1742.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1743[0], i1742.m_OnClick)
  i1742.m_Navigation = request.d('UnityEngine.UI.Navigation', i1743[1], i1742.m_Navigation)
  i1742.m_Transition = i1743[2]
  i1742.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1743[3], i1742.m_Colors)
  i1742.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1743[4], i1742.m_SpriteState)
  i1742.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1743[5], i1742.m_AnimationTriggers)
  i1742.m_Interactable = !!i1743[6]
  request.r(i1743[7], i1743[8], 0, i1742, 'm_TargetGraphic')
  return i1742
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1745 = data
  i1744.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1745[0], i1744.m_PersistentCalls)
  return i1744
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1747 = data
  var i1749 = i1747[0]
  var i1748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.add(request.d('UnityEngine.Events.PersistentCall', i1749[i + 0]));
  }
  i1746.m_Calls = i1748
  return i1746
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'm_Target')
  i1752.m_TargetAssemblyTypeName = i1753[2]
  i1752.m_MethodName = i1753[3]
  i1752.m_Mode = i1753[4]
  i1752.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1753[5], i1752.m_Arguments)
  i1752.m_CallState = i1753[6]
  return i1752
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1754 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, 'm_ObjectArgument')
  i1754.m_ObjectArgumentAssemblyTypeName = i1755[2]
  i1754.m_IntArgument = i1755[3]
  i1754.m_FloatArgument = i1755[4]
  i1754.m_StringArgument = i1755[5]
  i1754.m_BoolArgument = !!i1755[6]
  return i1754
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1756 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1757 = data
  i1756.m_Mode = i1757[0]
  i1756.m_WrapAround = !!i1757[1]
  request.r(i1757[2], i1757[3], 0, i1756, 'm_SelectOnUp')
  request.r(i1757[4], i1757[5], 0, i1756, 'm_SelectOnDown')
  request.r(i1757[6], i1757[7], 0, i1756, 'm_SelectOnLeft')
  request.r(i1757[8], i1757[9], 0, i1756, 'm_SelectOnRight')
  return i1756
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1758 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1759 = data
  i1758.m_NormalColor = new pc.Color(i1759[0], i1759[1], i1759[2], i1759[3])
  i1758.m_HighlightedColor = new pc.Color(i1759[4], i1759[5], i1759[6], i1759[7])
  i1758.m_PressedColor = new pc.Color(i1759[8], i1759[9], i1759[10], i1759[11])
  i1758.m_SelectedColor = new pc.Color(i1759[12], i1759[13], i1759[14], i1759[15])
  i1758.m_DisabledColor = new pc.Color(i1759[16], i1759[17], i1759[18], i1759[19])
  i1758.m_ColorMultiplier = i1759[20]
  i1758.m_FadeDuration = i1759[21]
  return i1758
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1760 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'm_HighlightedSprite')
  request.r(i1761[2], i1761[3], 0, i1760, 'm_PressedSprite')
  request.r(i1761[4], i1761[5], 0, i1760, 'm_SelectedSprite')
  request.r(i1761[6], i1761[7], 0, i1760, 'm_DisabledSprite')
  return i1760
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1762 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1763 = data
  i1762.m_NormalTrigger = i1763[0]
  i1762.m_HighlightedTrigger = i1763[1]
  i1762.m_PressedTrigger = i1763[2]
  i1762.m_SelectedTrigger = i1763[3]
  i1762.m_DisabledTrigger = i1763[4]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1765 = data
  request.r(i1765[0], i1765[1], 0, i1764, 'animatorController')
  i1764.updateMode = i1765[2]
  var i1767 = i1765[3]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 2) {
  request.r(i1767[i + 0], i1767[i + 1], 2, i1766, '')
  }
  i1764.humanBones = i1766
  i1764.enabled = !!i1765[4]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1769 = data
  i1768.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1769[0], i1768.main)
  i1768.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1769[1], i1768.colorBySpeed)
  i1768.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1769[2], i1768.colorOverLifetime)
  i1768.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1769[3], i1768.emission)
  i1768.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1769[4], i1768.rotationBySpeed)
  i1768.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1769[5], i1768.rotationOverLifetime)
  i1768.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1769[6], i1768.shape)
  i1768.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1769[7], i1768.sizeBySpeed)
  i1768.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1769[8], i1768.sizeOverLifetime)
  i1768.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1769[9], i1768.textureSheetAnimation)
  i1768.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1769[10], i1768.velocityOverLifetime)
  i1768.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1769[11], i1768.noise)
  i1768.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1769[12], i1768.inheritVelocity)
  i1768.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1769[13], i1768.forceOverLifetime)
  i1768.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1769[14], i1768.limitVelocityOverLifetime)
  i1768.useAutoRandomSeed = !!i1769[15]
  i1768.randomSeed = i1769[16]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1770 = root || new pc.ParticleSystemMain()
  var i1771 = data
  i1770.duration = i1771[0]
  i1770.loop = !!i1771[1]
  i1770.prewarm = !!i1771[2]
  i1770.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[3], i1770.startDelay)
  i1770.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[4], i1770.startLifetime)
  i1770.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[5], i1770.startSpeed)
  i1770.startSize3D = !!i1771[6]
  i1770.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[7], i1770.startSizeX)
  i1770.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[8], i1770.startSizeY)
  i1770.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[9], i1770.startSizeZ)
  i1770.startRotation3D = !!i1771[10]
  i1770.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[11], i1770.startRotationX)
  i1770.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[12], i1770.startRotationY)
  i1770.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[13], i1770.startRotationZ)
  i1770.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1771[14], i1770.startColor)
  i1770.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[15], i1770.gravityModifier)
  i1770.simulationSpace = i1771[16]
  request.r(i1771[17], i1771[18], 0, i1770, 'customSimulationSpace')
  i1770.simulationSpeed = i1771[19]
  i1770.useUnscaledTime = !!i1771[20]
  i1770.scalingMode = i1771[21]
  i1770.playOnAwake = !!i1771[22]
  i1770.maxParticles = i1771[23]
  i1770.emitterVelocityMode = i1771[24]
  i1770.stopAction = i1771[25]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1772 = root || new pc.MinMaxCurve()
  var i1773 = data
  i1772.mode = i1773[0]
  i1772.curveMin = new pc.AnimationCurve( { keys_flow: i1773[1] } )
  i1772.curveMax = new pc.AnimationCurve( { keys_flow: i1773[2] } )
  i1772.curveMultiplier = i1773[3]
  i1772.constantMin = i1773[4]
  i1772.constantMax = i1773[5]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1774 = root || new pc.MinMaxGradient()
  var i1775 = data
  i1774.mode = i1775[0]
  i1774.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1775[1], i1774.gradientMin)
  i1774.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1775[2], i1774.gradientMax)
  i1774.colorMin = new pc.Color(i1775[3], i1775[4], i1775[5], i1775[6])
  i1774.colorMax = new pc.Color(i1775[7], i1775[8], i1775[9], i1775[10])
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1777 = data
  i1776.mode = i1777[0]
  var i1779 = i1777[1]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1779[i + 0]) );
  }
  i1776.colorKeys = i1778
  var i1781 = i1777[2]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1781[i + 0]) );
  }
  i1776.alphaKeys = i1780
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1782 = root || new pc.ParticleSystemColorBySpeed()
  var i1783 = data
  i1782.enabled = !!i1783[0]
  i1782.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1783[1], i1782.color)
  i1782.range = new pc.Vec2( i1783[2], i1783[3] )
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1787 = data
  i1786.color = new pc.Color(i1787[0], i1787[1], i1787[2], i1787[3])
  i1786.time = i1787[4]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1791 = data
  i1790.alpha = i1791[0]
  i1790.time = i1791[1]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1792 = root || new pc.ParticleSystemColorOverLifetime()
  var i1793 = data
  i1792.enabled = !!i1793[0]
  i1792.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1793[1], i1792.color)
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1794 = root || new pc.ParticleSystemEmitter()
  var i1795 = data
  i1794.enabled = !!i1795[0]
  i1794.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[1], i1794.rateOverTime)
  i1794.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[2], i1794.rateOverDistance)
  var i1797 = i1795[3]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1797[i + 0]) );
  }
  i1794.bursts = i1796
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemBurst()
  var i1801 = data
  i1800.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[0], i1800.count)
  i1800.cycleCount = i1801[1]
  i1800.minCount = i1801[2]
  i1800.maxCount = i1801[3]
  i1800.repeatInterval = i1801[4]
  i1800.time = i1801[5]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1802 = root || new pc.ParticleSystemRotationBySpeed()
  var i1803 = data
  i1802.enabled = !!i1803[0]
  i1802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[1], i1802.x)
  i1802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[2], i1802.y)
  i1802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[3], i1802.z)
  i1802.separateAxes = !!i1803[4]
  i1802.range = new pc.Vec2( i1803[5], i1803[6] )
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1804 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1805 = data
  i1804.enabled = !!i1805[0]
  i1804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[1], i1804.x)
  i1804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[2], i1804.y)
  i1804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[3], i1804.z)
  i1804.separateAxes = !!i1805[4]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1806 = root || new pc.ParticleSystemShape()
  var i1807 = data
  i1806.enabled = !!i1807[0]
  i1806.shapeType = i1807[1]
  i1806.randomDirectionAmount = i1807[2]
  i1806.sphericalDirectionAmount = i1807[3]
  i1806.randomPositionAmount = i1807[4]
  i1806.alignToDirection = !!i1807[5]
  i1806.radius = i1807[6]
  i1806.radiusMode = i1807[7]
  i1806.radiusSpread = i1807[8]
  i1806.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[9], i1806.radiusSpeed)
  i1806.radiusThickness = i1807[10]
  i1806.angle = i1807[11]
  i1806.length = i1807[12]
  i1806.boxThickness = new pc.Vec3( i1807[13], i1807[14], i1807[15] )
  i1806.meshShapeType = i1807[16]
  request.r(i1807[17], i1807[18], 0, i1806, 'mesh')
  request.r(i1807[19], i1807[20], 0, i1806, 'meshRenderer')
  request.r(i1807[21], i1807[22], 0, i1806, 'skinnedMeshRenderer')
  i1806.useMeshMaterialIndex = !!i1807[23]
  i1806.meshMaterialIndex = i1807[24]
  i1806.useMeshColors = !!i1807[25]
  i1806.normalOffset = i1807[26]
  i1806.arc = i1807[27]
  i1806.arcMode = i1807[28]
  i1806.arcSpread = i1807[29]
  i1806.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[30], i1806.arcSpeed)
  i1806.donutRadius = i1807[31]
  i1806.position = new pc.Vec3( i1807[32], i1807[33], i1807[34] )
  i1806.rotation = new pc.Vec3( i1807[35], i1807[36], i1807[37] )
  i1806.scale = new pc.Vec3( i1807[38], i1807[39], i1807[40] )
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1808 = root || new pc.ParticleSystemSizeBySpeed()
  var i1809 = data
  i1808.enabled = !!i1809[0]
  i1808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[1], i1808.x)
  i1808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[2], i1808.y)
  i1808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[3], i1808.z)
  i1808.separateAxes = !!i1809[4]
  i1808.range = new pc.Vec2( i1809[5], i1809[6] )
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1810 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1811 = data
  i1810.enabled = !!i1811[0]
  i1810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[1], i1810.x)
  i1810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[2], i1810.y)
  i1810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[3], i1810.z)
  i1810.separateAxes = !!i1811[4]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1812 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1813 = data
  i1812.enabled = !!i1813[0]
  i1812.mode = i1813[1]
  i1812.animation = i1813[2]
  i1812.numTilesX = i1813[3]
  i1812.numTilesY = i1813[4]
  i1812.useRandomRow = !!i1813[5]
  i1812.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[6], i1812.frameOverTime)
  i1812.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[7], i1812.startFrame)
  i1812.cycleCount = i1813[8]
  i1812.rowIndex = i1813[9]
  i1812.flipU = i1813[10]
  i1812.flipV = i1813[11]
  i1812.spriteCount = i1813[12]
  var i1815 = i1813[13]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 2) {
  request.r(i1815[i + 0], i1815[i + 1], 2, i1814, '')
  }
  i1812.sprites = i1814
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1818 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1819 = data
  i1818.enabled = !!i1819[0]
  i1818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[1], i1818.x)
  i1818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[2], i1818.y)
  i1818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[3], i1818.z)
  i1818.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[4], i1818.speedModifier)
  i1818.space = i1819[5]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1820 = root || new pc.ParticleSystemNoise()
  var i1821 = data
  i1820.enabled = !!i1821[0]
  i1820.separateAxes = !!i1821[1]
  i1820.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[2], i1820.strengthX)
  i1820.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[3], i1820.strengthY)
  i1820.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[4], i1820.strengthZ)
  i1820.frequency = i1821[5]
  i1820.damping = !!i1821[6]
  i1820.octaveCount = i1821[7]
  i1820.octaveMultiplier = i1821[8]
  i1820.octaveScale = i1821[9]
  i1820.quality = i1821[10]
  i1820.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[11], i1820.scrollSpeed)
  i1820.scrollSpeedMultiplier = i1821[12]
  i1820.remapEnabled = !!i1821[13]
  i1820.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[14], i1820.remapX)
  i1820.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[15], i1820.remapY)
  i1820.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[16], i1820.remapZ)
  i1820.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[17], i1820.positionAmount)
  i1820.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[18], i1820.rotationAmount)
  i1820.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[19], i1820.sizeAmount)
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1822 = root || new pc.ParticleSystemInheritVelocity()
  var i1823 = data
  i1822.enabled = !!i1823[0]
  i1822.mode = i1823[1]
  i1822.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1823[2], i1822.curve)
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1824 = root || new pc.ParticleSystemForceOverLifetime()
  var i1825 = data
  i1824.enabled = !!i1825[0]
  i1824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[1], i1824.x)
  i1824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[2], i1824.y)
  i1824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[3], i1824.z)
  i1824.space = i1825[4]
  i1824.randomized = !!i1825[5]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1826 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1827 = data
  i1826.enabled = !!i1827[0]
  i1826.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[1], i1826.limit)
  i1826.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[2], i1826.limitX)
  i1826.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[3], i1826.limitY)
  i1826.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[4], i1826.limitZ)
  i1826.dampen = i1827[5]
  i1826.separateAxes = !!i1827[6]
  i1826.space = i1827[7]
  i1826.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[8], i1826.drag)
  i1826.multiplyDragByParticleSize = !!i1827[9]
  i1826.multiplyDragByParticleVelocity = !!i1827[10]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1829 = data
  i1828.enabled = !!i1829[0]
  request.r(i1829[1], i1829[2], 0, i1828, 'sharedMaterial')
  var i1831 = i1829[3]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 2) {
  request.r(i1831[i + 0], i1831[i + 1], 2, i1830, '')
  }
  i1828.sharedMaterials = i1830
  i1828.receiveShadows = !!i1829[4]
  i1828.shadowCastingMode = i1829[5]
  i1828.sortingLayerID = i1829[6]
  i1828.sortingOrder = i1829[7]
  i1828.lightmapIndex = i1829[8]
  i1828.lightmapSceneIndex = i1829[9]
  i1828.lightmapScaleOffset = new pc.Vec4( i1829[10], i1829[11], i1829[12], i1829[13] )
  i1828.lightProbeUsage = i1829[14]
  i1828.reflectionProbeUsage = i1829[15]
  request.r(i1829[16], i1829[17], 0, i1828, 'mesh')
  i1828.meshCount = i1829[18]
  i1828.activeVertexStreamsCount = i1829[19]
  i1828.alignment = i1829[20]
  i1828.renderMode = i1829[21]
  i1828.sortMode = i1829[22]
  i1828.lengthScale = i1829[23]
  i1828.velocityScale = i1829[24]
  i1828.cameraVelocityScale = i1829[25]
  i1828.normalDirection = i1829[26]
  i1828.sortingFudge = i1829[27]
  i1828.minParticleSize = i1829[28]
  i1828.maxParticleSize = i1829[29]
  i1828.pivot = new pc.Vec3( i1829[30], i1829[31], i1829[32] )
  request.r(i1829[33], i1829[34], 0, i1828, 'trailMaterial')
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1833 = data
  i1832.name = i1833[0]
  i1832.atlasId = i1833[1]
  i1832.mipmapCount = i1833[2]
  i1832.hdr = !!i1833[3]
  i1832.size = i1833[4]
  i1832.anisoLevel = i1833[5]
  i1832.filterMode = i1833[6]
  i1832.wrapMode = i1833[7]
  var i1835 = i1833[8]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 4) {
    i1834.push( UnityEngine.Rect.MinMaxRect(i1835[i + 0], i1835[i + 1], i1835[i + 2], i1835[i + 3]) );
  }
  i1832.rects = i1834
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1839 = data
  i1838.name = i1839[0]
  i1838.index = i1839[1]
  i1838.startup = !!i1839[2]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1841 = data
  i1840.enabled = !!i1841[0]
  i1840.aspect = i1841[1]
  i1840.orthographic = !!i1841[2]
  i1840.orthographicSize = i1841[3]
  i1840.backgroundColor = new pc.Color(i1841[4], i1841[5], i1841[6], i1841[7])
  i1840.nearClipPlane = i1841[8]
  i1840.farClipPlane = i1841[9]
  i1840.fieldOfView = i1841[10]
  i1840.depth = i1841[11]
  i1840.clearFlags = i1841[12]
  i1840.cullingMask = i1841[13]
  i1840.rect = i1841[14]
  request.r(i1841[15], i1841[16], 0, i1840, 'targetTexture')
  i1840.usePhysicalProperties = !!i1841[17]
  i1840.focalLength = i1841[18]
  i1840.sensorSize = new pc.Vec2( i1841[19], i1841[20] )
  i1840.lensShift = new pc.Vec2( i1841[21], i1841[22] )
  i1840.gateFit = i1841[23]
  return i1840
}

Deserializers["FollowPosition"] = function (request, data, root) {
  var i1842 = root || request.c( 'FollowPosition' )
  var i1843 = data
  request.r(i1843[0], i1843[1], 0, i1842, 'objFollow')
  request.r(i1843[2], i1843[3], 0, i1842, 'target')
  i1842.smooth = i1843[4]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1845 = data
  i1844.enabled = !!i1845[0]
  i1844.type = i1845[1]
  i1844.color = new pc.Color(i1845[2], i1845[3], i1845[4], i1845[5])
  i1844.cullingMask = i1845[6]
  i1844.intensity = i1845[7]
  i1844.range = i1845[8]
  i1844.spotAngle = i1845[9]
  i1844.shadows = i1845[10]
  i1844.shadowNormalBias = i1845[11]
  i1844.shadowBias = i1845[12]
  i1844.shadowStrength = i1845[13]
  i1844.shadowResolution = i1845[14]
  i1844.lightmapBakeType = i1845[15]
  i1844.renderMode = i1845[16]
  request.r(i1845[17], i1845[18], 0, i1844, 'cookie')
  i1844.cookieSize = i1845[19]
  return i1844
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'm_FirstSelected')
  i1846.m_sendNavigationEvents = !!i1847[2]
  i1846.m_DragThreshold = i1847[3]
  return i1846
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1849 = data
  i1848.m_HorizontalAxis = i1849[0]
  i1848.m_VerticalAxis = i1849[1]
  i1848.m_SubmitButton = i1849[2]
  i1848.m_CancelButton = i1849[3]
  i1848.m_InputActionsPerSecond = i1849[4]
  i1848.m_RepeatDelay = i1849[5]
  i1848.m_ForceModuleActive = !!i1849[6]
  i1848.m_SendPointerHoverToParent = !!i1849[7]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1851 = data
  i1850.enabled = !!i1851[0]
  i1850.planeDistance = i1851[1]
  i1850.referencePixelsPerUnit = i1851[2]
  i1850.isFallbackOverlay = !!i1851[3]
  i1850.renderMode = i1851[4]
  i1850.renderOrder = i1851[5]
  i1850.sortingLayerName = i1851[6]
  i1850.sortingOrder = i1851[7]
  i1850.scaleFactor = i1851[8]
  request.r(i1851[9], i1851[10], 0, i1850, 'worldCamera')
  i1850.overrideSorting = !!i1851[11]
  i1850.pixelPerfect = !!i1851[12]
  i1850.targetDisplay = i1851[13]
  i1850.overridePixelPerfect = !!i1851[14]
  return i1850
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1853 = data
  i1852.m_UiScaleMode = i1853[0]
  i1852.m_ReferencePixelsPerUnit = i1853[1]
  i1852.m_ScaleFactor = i1853[2]
  i1852.m_ReferenceResolution = new pc.Vec2( i1853[3], i1853[4] )
  i1852.m_ScreenMatchMode = i1853[5]
  i1852.m_MatchWidthOrHeight = i1853[6]
  i1852.m_PhysicalUnit = i1853[7]
  i1852.m_FallbackScreenDPI = i1853[8]
  i1852.m_DefaultSpriteDPI = i1853[9]
  i1852.m_DynamicPixelsPerUnit = i1853[10]
  i1852.m_PresetInfoIsWorld = !!i1853[11]
  return i1852
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1855 = data
  i1854.m_IgnoreReversedGraphics = !!i1855[0]
  i1854.m_BlockingObjects = i1855[1]
  i1854.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1855[2] )
  return i1854
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.UI.Text' )
  var i1857 = data
  i1856.m_FontData = request.d('UnityEngine.UI.FontData', i1857[0], i1856.m_FontData)
  i1856.m_Text = i1857[1]
  request.r(i1857[2], i1857[3], 0, i1856, 'm_Material')
  i1856.m_Maskable = !!i1857[4]
  i1856.m_Color = new pc.Color(i1857[5], i1857[6], i1857[7], i1857[8])
  i1856.m_RaycastTarget = !!i1857[9]
  i1856.m_RaycastPadding = new pc.Vec4( i1857[10], i1857[11], i1857[12], i1857[13] )
  return i1856
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'm_Font')
  i1858.m_FontSize = i1859[2]
  i1858.m_FontStyle = i1859[3]
  i1858.m_BestFit = !!i1859[4]
  i1858.m_MinSize = i1859[5]
  i1858.m_MaxSize = i1859[6]
  i1858.m_Alignment = i1859[7]
  i1858.m_AlignByGeometry = !!i1859[8]
  i1858.m_RichText = !!i1859[9]
  i1858.m_HorizontalOverflow = i1859[10]
  i1858.m_VerticalOverflow = i1859[11]
  i1858.m_LineSpacing = i1859[12]
  return i1858
}

Deserializers["MoveByPath"] = function (request, data, root) {
  var i1860 = root || request.c( 'MoveByPath' )
  var i1861 = data
  var i1863 = i1861[0]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 2) {
  request.r(i1863[i + 0], i1863[i + 1], 2, i1862, '')
  }
  i1860.paths = i1862
  var i1865 = i1861[1]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 3) {
    i1864.push( new pc.Vec3( i1865[i + 0], i1865[i + 1], i1865[i + 2] ) );
  }
  i1860.path = i1864
  request.r(i1861[2], i1861[3], 0, i1860, 'target')
  i1860.timeMove = i1861[4]
  i1860.isReady = !!i1861[5]
  return i1860
}

Deserializers["DynamicJoystick"] = function (request, data, root) {
  var i1868 = root || request.c( 'DynamicJoystick' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'background')
  request.r(i1869[2], i1869[3], 0, i1868, 'handleTranf')
  request.r(i1869[4], i1869[5], 0, i1868, 'handleObj')
  request.r(i1869[6], i1869[7], 0, i1868, 'character')
  i1868.on = new pc.Color(i1869[8], i1869[9], i1869[10], i1869[11])
  i1868.off = new pc.Color(i1869[12], i1869[13], i1869[14], i1869[15])
  request.r(i1869[16], i1869[17], 0, i1868, 'imgBG')
  request.r(i1869[18], i1869[19], 0, i1868, 'imgHandle')
  i1868.moveThreshold = i1869[20]
  i1868.handleRange = i1869[21]
  i1868.deadZone = i1869[22]
  i1868.axisOptions = i1869[23]
  i1868.snapX = !!i1869[24]
  i1868.snapY = !!i1869[25]
  return i1868
}

Deserializers["CharacterBehaviour"] = function (request, data, root) {
  var i1870 = root || request.c( 'CharacterBehaviour' )
  var i1871 = data
  request.r(i1871[0], i1871[1], 0, i1870, 'moveByJoystick')
  request.r(i1871[2], i1871[3], 0, i1870, 'characterAnimator')
  request.r(i1871[4], i1871[5], 0, i1870, 'detectPlaceComponent')
  request.r(i1871[6], i1871[7], 0, i1870, 'stackControl')
  request.r(i1871[8], i1871[9], 0, i1870, 'tut')
  i1870.timeNotMove = i1871[10]
  request.r(i1871[11], i1871[12], 0, i1870, 'effTut')
  i1870.timeCheckMove = i1871[13]
  return i1870
}

Deserializers["MoveByJoystick"] = function (request, data, root) {
  var i1872 = root || request.c( 'MoveByJoystick' )
  var i1873 = data
  i1872.speed = i1873[0]
  request.r(i1873[1], i1873[2], 0, i1872, 'rb')
  request.r(i1873[3], i1873[4], 0, i1872, 'variableJoystick')
  request.r(i1873[5], i1873[6], 0, i1872, 'transf')
  i1872.smoothRotation = i1873[7]
  i1872.smoothMove = i1873[8]
  i1872.smoothRotationByTarget = i1873[9]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1875 = data
  i1874.mass = i1875[0]
  i1874.drag = i1875[1]
  i1874.angularDrag = i1875[2]
  i1874.useGravity = !!i1875[3]
  i1874.isKinematic = !!i1875[4]
  i1874.constraints = i1875[5]
  i1874.maxAngularVelocity = i1875[6]
  i1874.collisionDetectionMode = i1875[7]
  i1874.interpolation = i1875[8]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1877 = data
  i1876.enabled = !!i1877[0]
  i1876.isTrigger = !!i1877[1]
  request.r(i1877[2], i1877[3], 0, i1876, 'material')
  i1876.center = new pc.Vec3( i1877[4], i1877[5], i1877[6] )
  i1876.radius = i1877[7]
  return i1876
}

Deserializers["CharacterAnimator"] = function (request, data, root) {
  var i1878 = root || request.c( 'CharacterAnimator' )
  var i1879 = data
  request.r(i1879[0], i1879[1], 0, i1878, 'animator')
  request.r(i1879[2], i1879[3], 0, i1878, 'objCook')
  return i1878
}

Deserializers["DetectPlaceComponent"] = function (request, data, root) {
  var i1880 = root || request.c( 'DetectPlaceComponent' )
  var i1881 = data
  request.r(i1881[0], i1881[1], 0, i1880, 'character')
  i1880.layerWaitPlace = UnityEngine.LayerMask.FromIntegerValue( i1881[2] )
  i1880.enableDetect = !!i1881[3]
  i1880.detectDelay = i1881[4]
  i1880.radius = i1881[5]
  i1880.timeDelayDetect = i1881[6]
  return i1880
}

Deserializers["StackControl"] = function (request, data, root) {
  var i1882 = root || request.c( 'StackControl' )
  var i1883 = data
  var i1885 = i1883[0]
  var i1884 = new (System.Collections.Generic.List$1(Bridge.ns('StackObject')))
  for(var i = 0; i < i1885.length; i += 2) {
  request.r(i1885[i + 0], i1885[i + 1], 1, i1884, '')
  }
  i1882.stackObjects = i1884
  var i1887 = i1883[1]
  var i1886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 1, i1886, '')
  }
  i1882.stackPositions = i1886
  return i1882
}

Deserializers["CharacterArrowTut"] = function (request, data, root) {
  var i1892 = root || request.c( 'CharacterArrowTut' )
  var i1893 = data
  request.r(i1893[0], i1893[1], 0, i1892, 'target')
  request.r(i1893[2], i1893[3], 0, i1892, 'traf')
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1895 = data
  i1894.enabled = !!i1895[0]
  request.r(i1895[1], i1895[2], 0, i1894, 'sharedMaterial')
  var i1897 = i1895[3]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 2) {
  request.r(i1897[i + 0], i1897[i + 1], 2, i1896, '')
  }
  i1894.sharedMaterials = i1896
  i1894.receiveShadows = !!i1895[4]
  i1894.shadowCastingMode = i1895[5]
  i1894.sortingLayerID = i1895[6]
  i1894.sortingOrder = i1895[7]
  i1894.lightmapIndex = i1895[8]
  i1894.lightmapSceneIndex = i1895[9]
  i1894.lightmapScaleOffset = new pc.Vec4( i1895[10], i1895[11], i1895[12], i1895[13] )
  i1894.lightProbeUsage = i1895[14]
  i1894.reflectionProbeUsage = i1895[15]
  i1894.color = new pc.Color(i1895[16], i1895[17], i1895[18], i1895[19])
  request.r(i1895[20], i1895[21], 0, i1894, 'sprite')
  i1894.flipX = !!i1895[22]
  i1894.flipY = !!i1895[23]
  i1894.drawMode = i1895[24]
  i1894.size = new pc.Vec2( i1895[25], i1895[26] )
  i1894.tileMode = i1895[27]
  i1894.adaptiveModeThreshold = i1895[28]
  i1894.maskInteraction = i1895[29]
  i1894.spriteSortPoint = i1895[30]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1899 = data
  i1898.center = new pc.Vec3( i1899[0], i1899[1], i1899[2] )
  i1898.size = new pc.Vec3( i1899[3], i1899[4], i1899[5] )
  i1898.enabled = !!i1899[6]
  i1898.isTrigger = !!i1899[7]
  request.r(i1899[8], i1899[9], 0, i1898, 'material')
  return i1898
}

Deserializers["CollectObjectPlace"] = function (request, data, root) {
  var i1900 = root || request.c( 'CollectObjectPlace' )
  var i1901 = data
  i1900.isTimeDelay = i1901[0]
  request.r(i1901[1], i1901[2], 0, i1900, 'stackControl')
  request.r(i1901[3], i1901[4], 0, i1900, 'tutController')
  return i1900
}

Deserializers["KitchenPlace"] = function (request, data, root) {
  var i1902 = root || request.c( 'KitchenPlace' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'posCook')
  request.r(i1903[2], i1903[3], 0, i1902, 'foodProduct')
  request.r(i1903[4], i1903[5], 0, i1902, 'foodSpawnPos')
  i1902.isTimeDelay = i1903[6]
  request.r(i1903[7], i1903[8], 0, i1902, 'cookAnim')
  request.r(i1903[9], i1903[10], 0, i1902, 'stackInput')
  request.r(i1903[11], i1903[12], 0, i1902, 'stackOutput')
  i1902.timeCook = i1903[13]
  i1902.isCooking = !!i1903[14]
  i1902.isCookComplete = !!i1903[15]
  request.r(i1903[16], i1903[17], 0, i1902, 'tutController')
  request.r(i1903[18], i1903[19], 0, i1902, 'objTut')
  request.r(i1903[20], i1903[21], 0, i1902, 'sound')
  request.r(i1903[22], i1903[23], 0, i1902, 'clip')
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1905 = data
  request.r(i1905[0], i1905[1], 0, i1904, 'clip')
  request.r(i1905[2], i1905[3], 0, i1904, 'outputAudioMixerGroup')
  i1904.playOnAwake = !!i1905[4]
  i1904.loop = !!i1905[5]
  i1904.time = i1905[6]
  i1904.volume = i1905[7]
  i1904.pitch = i1905[8]
  i1904.enabled = !!i1905[9]
  return i1904
}

Deserializers["PickupPlace"] = function (request, data, root) {
  var i1906 = root || request.c( 'PickupPlace' )
  var i1907 = data
  request.r(i1907[0], i1907[1], 0, i1906, 'tutController')
  i1906.timeDelay = i1907[2]
  request.r(i1907[3], i1907[4], 0, i1906, 'stackInput')
  request.r(i1907[5], i1907[6], 0, i1906, 'col')
  return i1906
}

Deserializers["DinnerTable"] = function (request, data, root) {
  var i1908 = root || request.c( 'DinnerTable' )
  var i1909 = data
  var i1911 = i1909[0]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 2) {
  request.r(i1911[i + 0], i1911[i + 1], 2, i1910, '')
  }
  i1908.customerControllers = i1910
  request.r(i1909[1], i1909[2], 0, i1908, 'stackControl')
  i1908.timeEat = i1909[3]
  request.r(i1909[4], i1909[5], 0, i1908, 'tutController')
  return i1908
}

Deserializers["CustomerAnimator"] = function (request, data, root) {
  var i1914 = root || request.c( 'CustomerAnimator' )
  var i1915 = data
  request.r(i1915[0], i1915[1], 0, i1914, 'eatObj')
  request.r(i1915[2], i1915[3], 0, i1914, 'animator')
  return i1914
}

Deserializers["CustomerController"] = function (request, data, root) {
  var i1916 = root || request.c( 'CustomerController' )
  var i1917 = data
  request.r(i1917[0], i1917[1], 0, i1916, 'customerAnimator')
  request.r(i1917[2], i1917[3], 0, i1916, 'purchasePos')
  i1916.timeMove = i1917[4]
  return i1916
}

Deserializers["CashierTable"] = function (request, data, root) {
  var i1918 = root || request.c( 'CashierTable' )
  var i1919 = data
  var i1921 = i1919[0]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 2) {
  request.r(i1921[i + 0], i1921[i + 1], 2, i1920, '')
  }
  i1918.customerControllers = i1920
  var i1923 = i1919[1]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('StackObject')))
  for(var i = 0; i < i1923.length; i += 2) {
  request.r(i1923[i + 0], i1923[i + 1], 1, i1922, '')
  }
  i1918.moneys = i1922
  request.r(i1919[2], i1919[3], 0, i1918, 'tutController')
  request.r(i1919[4], i1919[5], 0, i1918, 'stackMoney')
  i1918.isReady = !!i1919[6]
  request.r(i1919[7], i1919[8], 0, i1918, 'audioSource')
  request.r(i1919[9], i1919[10], 0, i1918, 'audioClip')
  return i1918
}

Deserializers["InstallPlace"] = function (request, data, root) {
  var i1924 = root || request.c( 'InstallPlace' )
  var i1925 = data
  return i1924
}

Deserializers["TutController"] = function (request, data, root) {
  var i1926 = root || request.c( 'TutController' )
  var i1927 = data
  var i1929 = i1927[0]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 2) {
  request.r(i1929[i + 0], i1929[i + 1], 2, i1928, '')
  }
  i1926.objectActives = i1928
  var i1931 = i1927[1]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 2) {
  request.r(i1931[i + 0], i1931[i + 1], 2, i1930, '')
  }
  i1926.posTut = i1930
  request.r(i1927[2], i1927[3], 0, i1926, 'arrowTut')
  i1926.index = i1927[4]
  request.r(i1927[5], i1927[6], 0, i1926, 'characterArrowTut')
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1935 = data
  i1934.ambientIntensity = i1935[0]
  i1934.reflectionIntensity = i1935[1]
  i1934.ambientMode = i1935[2]
  i1934.ambientLight = new pc.Color(i1935[3], i1935[4], i1935[5], i1935[6])
  i1934.ambientSkyColor = new pc.Color(i1935[7], i1935[8], i1935[9], i1935[10])
  i1934.ambientGroundColor = new pc.Color(i1935[11], i1935[12], i1935[13], i1935[14])
  i1934.ambientEquatorColor = new pc.Color(i1935[15], i1935[16], i1935[17], i1935[18])
  i1934.fogColor = new pc.Color(i1935[19], i1935[20], i1935[21], i1935[22])
  i1934.fogEndDistance = i1935[23]
  i1934.fogStartDistance = i1935[24]
  i1934.fogDensity = i1935[25]
  i1934.fog = !!i1935[26]
  request.r(i1935[27], i1935[28], 0, i1934, 'skybox')
  i1934.fogMode = i1935[29]
  var i1937 = i1935[30]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1937[i + 0]) );
  }
  i1934.lightmaps = i1936
  i1934.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1935[31], i1934.lightProbes)
  i1934.lightmapsMode = i1935[32]
  i1934.mixedBakeMode = i1935[33]
  i1934.environmentLightingMode = i1935[34]
  i1934.ambientProbe = new pc.SphericalHarmonicsL2(i1935[35])
  i1934.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1935[36])
  i1934.useReferenceAmbientProbe = !!i1935[37]
  request.r(i1935[38], i1935[39], 0, i1934, 'customReflection')
  request.r(i1935[40], i1935[41], 0, i1934, 'defaultReflection')
  i1934.defaultReflectionMode = i1935[42]
  i1934.defaultReflectionResolution = i1935[43]
  i1934.sunLightObjectId = i1935[44]
  i1934.pixelLightCount = i1935[45]
  i1934.defaultReflectionHDR = !!i1935[46]
  i1934.hasLightDataAsset = !!i1935[47]
  i1934.hasManualGenerate = !!i1935[48]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, 'lightmapColor')
  request.r(i1941[2], i1941[3], 0, i1940, 'lightmapDirection')
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1942 = root || new UnityEngine.LightProbes()
  var i1943 = data
  return i1942
}

Deserializers["FixedJoystick"] = function (request, data, root) {
  var i1948 = root || request.c( 'FixedJoystick' )
  var i1949 = data
  request.r(i1949[0], i1949[1], 0, i1948, 'background')
  request.r(i1949[2], i1949[3], 0, i1948, 'handleTranf')
  request.r(i1949[4], i1949[5], 0, i1948, 'handleObj')
  i1948.handleRange = i1949[6]
  i1948.deadZone = i1949[7]
  i1948.axisOptions = i1949[8]
  i1948.snapX = !!i1949[9]
  i1948.snapY = !!i1949[10]
  return i1948
}

Deserializers["FloatingJoystick"] = function (request, data, root) {
  var i1950 = root || request.c( 'FloatingJoystick' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'background')
  request.r(i1951[2], i1951[3], 0, i1950, 'handleTranf')
  request.r(i1951[4], i1951[5], 0, i1950, 'handleObj')
  i1950.handleRange = i1951[6]
  i1950.deadZone = i1951[7]
  i1950.axisOptions = i1951[8]
  i1950.snapX = !!i1951[9]
  i1950.snapY = !!i1951[10]
  return i1950
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i1952 = root || request.c( 'VariableJoystick' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'background')
  request.r(i1953[2], i1953[3], 0, i1952, 'handleTranf')
  request.r(i1953[4], i1953[5], 0, i1952, 'handleObj')
  i1952.moveThreshold = i1953[6]
  i1952.joystickType = i1953[7]
  i1952.handleRange = i1953[8]
  i1952.deadZone = i1953[9]
  i1952.axisOptions = i1953[10]
  i1952.snapX = !!i1953[11]
  i1952.snapY = !!i1953[12]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1955 = data
  var i1957 = i1955[0]
  var i1956 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.add(i1957[i + 0]);
  }
  i1954.invalidShaderVariants = i1956
  i1954.name = i1955[1]
  i1954.guid = i1955[2]
  var i1959 = i1955[3]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( i1959[i + 0] );
  }
  i1954.shaderDefinedKeywords = i1958
  var i1961 = i1955[4]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1961[i + 0]) );
  }
  i1954.passes = i1960
  var i1963 = i1955[5]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1963[i + 0]) );
  }
  i1954.usePasses = i1962
  var i1965 = i1955[6]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1965[i + 0]) );
  }
  i1954.defaultParameterValues = i1964
  request.r(i1955[7], i1955[8], 0, i1954, 'unityFallbackShader')
  i1954.readDepth = !!i1955[9]
  i1954.isCreatedByShaderGraph = !!i1955[10]
  i1954.usedBatchUniforms = i1955[11]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1972 = root || new pc.UnityShaderPass()
  var i1973 = data
  i1972.id = i1973[0]
  i1972.subShaderIndex = i1973[1]
  i1972.name = i1973[2]
  i1972.passType = i1973[3]
  i1972.usePass = !!i1973[4]
  i1972.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[5], i1972.zTest)
  i1972.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[6], i1972.zWrite)
  i1972.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[7], i1972.culling)
  i1972.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1973[8], i1972.blending)
  i1972.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1973[9], i1972.alphaBlending)
  i1972.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[10], i1972.colorWriteMask)
  i1972.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[11], i1972.offsetUnits)
  i1972.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[12], i1972.offsetFactor)
  i1972.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[13], i1972.stencilRef)
  i1972.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[14], i1972.stencilReadMask)
  i1972.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[15], i1972.stencilWriteMask)
  i1972.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1973[16], i1972.stencilOp)
  i1972.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1973[17], i1972.stencilOpFront)
  i1972.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1973[18], i1972.stencilOpBack)
  var i1975 = i1973[19]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1975[i + 0]) );
  }
  i1972.tags = i1974
  var i1977 = i1973[20]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( i1977[i + 0] );
  }
  i1972.passDefinedKeywords = i1976
  var i1979 = i1973[21]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1979[i + 0]) );
  }
  i1972.passDefinedKeywordGroups = i1978
  var i1981 = i1973[22]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1981[i + 0]) );
  }
  i1972.variants = i1980
  var i1983 = i1973[23]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1983[i + 0]) );
  }
  i1972.excludedVariants = i1982
  i1972.hasDepthReader = !!i1973[24]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1985 = data
  i1984.val = i1985[0]
  i1984.name = i1985[1]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1987 = data
  i1986.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1987[0], i1986.src)
  i1986.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1987[1], i1986.dst)
  i1986.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1987[2], i1986.op)
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1989 = data
  i1988.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[0], i1988.pass)
  i1988.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[1], i1988.fail)
  i1988.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[2], i1988.zFail)
  i1988.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[3], i1988.comp)
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.value = i1993[1]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1997 = data
  var i1999 = i1997[0]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( i1999[i + 0] );
  }
  i1996.keywords = i1998
  i1996.hasDiscard = !!i1997[1]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2003 = data
  i2002.passId = i2003[0]
  i2002.subShaderIndex = i2003[1]
  var i2005 = i2003[2]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( i2005[i + 0] );
  }
  i2002.keywords = i2004
  i2002.vertexProgram = i2003[3]
  i2002.fragmentProgram = i2003[4]
  i2002.readDepth = !!i2003[5]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2009 = data
  request.r(i2009[0], i2009[1], 0, i2008, 'shader')
  i2008.pass = i2009[2]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2013 = data
  i2012.name = i2013[0]
  i2012.type = i2013[1]
  i2012.value = new pc.Vec4( i2013[2], i2013[3], i2013[4], i2013[5] )
  i2012.textureValue = i2013[6]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2015 = data
  i2014.name = i2015[0]
  request.r(i2015[1], i2015[2], 0, i2014, 'texture')
  i2014.aabb = i2015[3]
  i2014.vertices = i2015[4]
  i2014.triangles = i2015[5]
  i2014.textureRect = UnityEngine.Rect.MinMaxRect(i2015[6], i2015[7], i2015[8], i2015[9])
  i2014.packedRect = UnityEngine.Rect.MinMaxRect(i2015[10], i2015[11], i2015[12], i2015[13])
  i2014.border = new pc.Vec4( i2015[14], i2015[15], i2015[16], i2015[17] )
  i2014.transparency = i2015[18]
  i2014.bounds = i2015[19]
  i2014.pixelsPerUnit = i2015[20]
  i2014.textureWidth = i2015[21]
  i2014.textureHeight = i2015[22]
  i2014.nativeSize = new pc.Vec2( i2015[23], i2015[24] )
  i2014.pivot = new pc.Vec2( i2015[25], i2015[26] )
  i2014.textureRectOffset = new pc.Vec2( i2015[27], i2015[28] )
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2017 = data
  i2016.name = i2017[0]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.wrapMode = i2019[1]
  i2018.isLooping = !!i2019[2]
  i2018.length = i2019[3]
  var i2021 = i2019[4]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2021[i + 0]) );
  }
  i2018.curves = i2020
  var i2023 = i2019[5]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2023[i + 0]) );
  }
  i2018.events = i2022
  i2018.halfPrecision = !!i2019[6]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2027 = data
  i2026.path = i2027[0]
  i2026.componentType = i2027[1]
  i2026.property = i2027[2]
  i2026.keys = i2027[3]
  var i2029 = i2027[4]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2029[i + 0]) );
  }
  i2026.objectReferenceKeys = i2028
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2033 = data
  i2032.time = i2033[0]
  request.r(i2033[1], i2033[2], 0, i2032, 'value')
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2037 = data
  i2036.functionName = i2037[0]
  i2036.floatParameter = i2037[1]
  i2036.intParameter = i2037[2]
  i2036.stringParameter = i2037[3]
  request.r(i2037[4], i2037[5], 0, i2036, 'objectReferenceParameter')
  i2036.time = i2037[6]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2039 = data
  i2038.name = i2039[0]
  i2038.ascent = i2039[1]
  i2038.originalLineHeight = i2039[2]
  i2038.fontSize = i2039[3]
  var i2041 = i2039[4]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2041[i + 0]) );
  }
  i2038.characterInfo = i2040
  request.r(i2039[5], i2039[6], 0, i2038, 'texture')
  i2038.originalFontSize = i2039[7]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2045 = data
  i2044.index = i2045[0]
  i2044.advance = i2045[1]
  i2044.bearing = i2045[2]
  i2044.glyphWidth = i2045[3]
  i2044.glyphHeight = i2045[4]
  i2044.minX = i2045[5]
  i2044.maxX = i2045[6]
  i2044.minY = i2045[7]
  i2044.maxY = i2045[8]
  i2044.uvBottomLeftX = i2045[9]
  i2044.uvBottomLeftY = i2045[10]
  i2044.uvBottomRightX = i2045[11]
  i2044.uvBottomRightY = i2045[12]
  i2044.uvTopLeftX = i2045[13]
  i2044.uvTopLeftY = i2045[14]
  i2044.uvTopRightX = i2045[15]
  i2044.uvTopRightY = i2045[16]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2047 = data
  i2046.name = i2047[0]
  var i2049 = i2047[1]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2049[i + 0]) );
  }
  i2046.states = i2048
  var i2051 = i2047[2]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2051[i + 0]) );
  }
  i2046.layers = i2050
  var i2053 = i2047[3]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2053[i + 0]) );
  }
  i2046.parameters = i2052
  i2046.animationClips = i2047[4]
  i2046.HasSubStateMachines = !!i2047[5]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2057 = data
  i2056.cycleOffset = i2057[0]
  i2056.cycleOffsetParameter = i2057[1]
  i2056.cycleOffsetParameterActive = !!i2057[2]
  i2056.mirror = !!i2057[3]
  i2056.mirrorParameter = i2057[4]
  i2056.mirrorParameterActive = !!i2057[5]
  i2056.motionId = i2057[6]
  i2056.nameHash = i2057[7]
  i2056.fullPathHash = i2057[8]
  i2056.speed = i2057[9]
  i2056.speedParameter = i2057[10]
  i2056.speedParameterActive = !!i2057[11]
  i2056.tag = i2057[12]
  i2056.name = i2057[13]
  i2056.layer = i2057[14]
  i2056.writeDefaultValues = !!i2057[15]
  var i2059 = i2057[16]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2059[i + 0]) );
  }
  i2056.transitions = i2058
  var i2061 = i2057[17]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 2) {
  request.r(i2061[i + 0], i2061[i + 1], 2, i2060, '')
  }
  i2056.behaviours = i2060
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2065 = data
  i2064.fullPath = i2065[0]
  i2064.canTransitionToSelf = !!i2065[1]
  i2064.duration = i2065[2]
  i2064.exitTime = i2065[3]
  i2064.hasExitTime = !!i2065[4]
  i2064.hasFixedDuration = !!i2065[5]
  i2064.interruptionSource = i2065[6]
  i2064.offset = i2065[7]
  i2064.orderedInterruption = !!i2065[8]
  i2064.destinationStateNameHash = i2065[9]
  i2064.destinationStateMachineId = i2065[10]
  i2064.isExit = !!i2065[11]
  i2064.mute = !!i2065[12]
  i2064.solo = !!i2065[13]
  var i2067 = i2065[14]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2067[i + 0]) );
  }
  i2064.conditions = i2066
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2071 = data
  i2070.mode = i2071[0]
  i2070.parameter = i2071[1]
  i2070.threshold = i2071[2]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2077 = data
  i2076.blendingMode = i2077[0]
  i2076.defaultWeight = i2077[1]
  i2076.name = i2077[2]
  i2076.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2077[3], i2076.stateMachine)
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2079 = data
  i2078.id = i2079[0]
  i2078.defaultStateNameHash = i2079[1]
  var i2081 = i2079[2]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2081[i + 0]) );
  }
  i2078.entryTransitions = i2080
  var i2083 = i2079[3]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2083[i + 0]) );
  }
  i2078.anyStateTransitions = i2082
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2087 = data
  i2086.destinationStateNameHash = i2087[0]
  i2086.destinationStateMachineId = i2087[1]
  i2086.isExit = !!i2087[2]
  i2086.mute = !!i2087[3]
  i2086.solo = !!i2087[4]
  var i2089 = i2087[5]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2089[i + 0]) );
  }
  i2086.conditions = i2088
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2093 = data
  i2092.defaultBool = !!i2093[0]
  i2092.defaultFloat = i2093[1]
  i2092.defaultInt = i2093[2]
  i2092.name = i2093[3]
  i2092.nameHash = i2093[4]
  i2092.type = i2093[5]
  return i2092
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2094 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2095 = data
  i2094.useSafeMode = !!i2095[0]
  i2094.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2095[1], i2094.safeModeOptions)
  i2094.timeScale = i2095[2]
  i2094.unscaledTimeScale = i2095[3]
  i2094.useSmoothDeltaTime = !!i2095[4]
  i2094.maxSmoothUnscaledTime = i2095[5]
  i2094.rewindCallbackMode = i2095[6]
  i2094.showUnityEditorReport = !!i2095[7]
  i2094.logBehaviour = i2095[8]
  i2094.drawGizmos = !!i2095[9]
  i2094.defaultRecyclable = !!i2095[10]
  i2094.defaultAutoPlay = i2095[11]
  i2094.defaultUpdateType = i2095[12]
  i2094.defaultTimeScaleIndependent = !!i2095[13]
  i2094.defaultEaseType = i2095[14]
  i2094.defaultEaseOvershootOrAmplitude = i2095[15]
  i2094.defaultEasePeriod = i2095[16]
  i2094.defaultAutoKill = !!i2095[17]
  i2094.defaultLoopType = i2095[18]
  i2094.debugMode = !!i2095[19]
  i2094.debugStoreTargetId = !!i2095[20]
  i2094.showPreviewPanel = !!i2095[21]
  i2094.storeSettingsLocation = i2095[22]
  i2094.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2095[23], i2094.modules)
  i2094.createASMDEF = !!i2095[24]
  i2094.showPlayingTweens = !!i2095[25]
  i2094.showPausedTweens = !!i2095[26]
  return i2094
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2096 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2097 = data
  i2096.logBehaviour = i2097[0]
  i2096.nestedTweenFailureBehaviour = i2097[1]
  return i2096
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2098 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2099 = data
  i2098.showPanel = !!i2099[0]
  i2098.audioEnabled = !!i2099[1]
  i2098.physicsEnabled = !!i2099[2]
  i2098.physics2DEnabled = !!i2099[3]
  i2098.spriteEnabled = !!i2099[4]
  i2098.uiEnabled = !!i2099[5]
  i2098.textMeshProEnabled = !!i2099[6]
  i2098.tk2DEnabled = !!i2099[7]
  i2098.deAudioEnabled = !!i2099[8]
  i2098.deUnityExtendedEnabled = !!i2099[9]
  i2098.epoOutlineEnabled = !!i2099[10]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2101 = data
  var i2103 = i2101[0]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2103[i + 0]) );
  }
  i2100.files = i2102
  i2100.componentToPrefabIds = i2101[1]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2107 = data
  i2106.path = i2107[0]
  request.r(i2107[1], i2107[2], 0, i2106, 'unityObject')
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2109 = data
  var i2111 = i2109[0]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2111[i + 0]) );
  }
  i2108.scriptsExecutionOrder = i2110
  var i2113 = i2109[1]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2113[i + 0]) );
  }
  i2108.sortingLayers = i2112
  var i2115 = i2109[2]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2115[i + 0]) );
  }
  i2108.cullingLayers = i2114
  i2108.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2109[3], i2108.timeSettings)
  i2108.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2109[4], i2108.physicsSettings)
  i2108.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2109[5], i2108.physics2DSettings)
  i2108.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2109[6], i2108.qualitySettings)
  i2108.enableRealtimeShadows = !!i2109[7]
  i2108.enableAutoInstancing = !!i2109[8]
  i2108.enableDynamicBatching = !!i2109[9]
  i2108.lightmapEncodingQuality = i2109[10]
  i2108.desiredColorSpace = i2109[11]
  var i2117 = i2109[12]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( i2117[i + 0] );
  }
  i2108.allTags = i2116
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2121 = data
  i2120.name = i2121[0]
  i2120.value = i2121[1]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2125 = data
  i2124.id = i2125[0]
  i2124.name = i2125[1]
  i2124.value = i2125[2]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2129 = data
  i2128.id = i2129[0]
  i2128.name = i2129[1]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2131 = data
  i2130.fixedDeltaTime = i2131[0]
  i2130.maximumDeltaTime = i2131[1]
  i2130.timeScale = i2131[2]
  i2130.maximumParticleTimestep = i2131[3]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2133 = data
  i2132.gravity = new pc.Vec3( i2133[0], i2133[1], i2133[2] )
  i2132.defaultSolverIterations = i2133[3]
  i2132.bounceThreshold = i2133[4]
  i2132.autoSyncTransforms = !!i2133[5]
  i2132.autoSimulation = !!i2133[6]
  var i2135 = i2133[7]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2135[i + 0]) );
  }
  i2132.collisionMatrix = i2134
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2139 = data
  i2138.enabled = !!i2139[0]
  i2138.layerId = i2139[1]
  i2138.otherLayerId = i2139[2]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2141 = data
  request.r(i2141[0], i2141[1], 0, i2140, 'material')
  i2140.gravity = new pc.Vec2( i2141[2], i2141[3] )
  i2140.positionIterations = i2141[4]
  i2140.velocityIterations = i2141[5]
  i2140.velocityThreshold = i2141[6]
  i2140.maxLinearCorrection = i2141[7]
  i2140.maxAngularCorrection = i2141[8]
  i2140.maxTranslationSpeed = i2141[9]
  i2140.maxRotationSpeed = i2141[10]
  i2140.baumgarteScale = i2141[11]
  i2140.baumgarteTOIScale = i2141[12]
  i2140.timeToSleep = i2141[13]
  i2140.linearSleepTolerance = i2141[14]
  i2140.angularSleepTolerance = i2141[15]
  i2140.defaultContactOffset = i2141[16]
  i2140.autoSimulation = !!i2141[17]
  i2140.queriesHitTriggers = !!i2141[18]
  i2140.queriesStartInColliders = !!i2141[19]
  i2140.callbacksOnDisable = !!i2141[20]
  i2140.reuseCollisionCallbacks = !!i2141[21]
  i2140.autoSyncTransforms = !!i2141[22]
  var i2143 = i2141[23]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2143[i + 0]) );
  }
  i2140.collisionMatrix = i2142
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2147 = data
  i2146.enabled = !!i2147[0]
  i2146.layerId = i2147[1]
  i2146.otherLayerId = i2147[2]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2149 = data
  var i2151 = i2149[0]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2151[i + 0]) );
  }
  i2148.qualityLevels = i2150
  var i2153 = i2149[1]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( i2153[i + 0] );
  }
  i2148.names = i2152
  i2148.shadows = i2149[2]
  i2148.anisotropicFiltering = i2149[3]
  i2148.antiAliasing = i2149[4]
  i2148.lodBias = i2149[5]
  i2148.shadowCascades = i2149[6]
  i2148.shadowDistance = i2149[7]
  i2148.shadowmaskMode = i2149[8]
  i2148.shadowProjection = i2149[9]
  i2148.shadowResolution = i2149[10]
  i2148.softParticles = !!i2149[11]
  i2148.softVegetation = !!i2149[12]
  i2148.activeColorSpace = i2149[13]
  i2148.desiredColorSpace = i2149[14]
  i2148.masterTextureLimit = i2149[15]
  i2148.maxQueuedFrames = i2149[16]
  i2148.particleRaycastBudget = i2149[17]
  i2148.pixelLightCount = i2149[18]
  i2148.realtimeReflectionProbes = !!i2149[19]
  i2148.shadowCascade2Split = i2149[20]
  i2148.shadowCascade4Split = new pc.Vec3( i2149[21], i2149[22], i2149[23] )
  i2148.streamingMipmapsActive = !!i2149[24]
  i2148.vSyncCount = i2149[25]
  i2148.asyncUploadBufferSize = i2149[26]
  i2148.asyncUploadTimeSlice = i2149[27]
  i2148.billboardsFaceCameraPosition = !!i2149[28]
  i2148.shadowNearPlaneOffset = i2149[29]
  i2148.streamingMipmapsMemoryBudget = i2149[30]
  i2148.maximumLODLevel = i2149[31]
  i2148.streamingMipmapsAddAllCameras = !!i2149[32]
  i2148.streamingMipmapsMaxLevelReduction = i2149[33]
  i2148.streamingMipmapsRenderersPerFrame = i2149[34]
  i2148.resolutionScalingFixedDPIFactor = i2149[35]
  i2148.streamingMipmapsMaxFileIORequests = i2149[36]
  i2148.currentQualityLevel = i2149[37]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2159 = data
  i2158.weight = i2159[0]
  i2158.vertices = i2159[1]
  i2158.normals = i2159[2]
  i2158.tangents = i2159[3]
  return i2158
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[2],"71":[24],"72":[43],"73":[43],"74":[43],"75":[43],"76":[43],"77":[43],"78":[43],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[24],"94":[7],"95":[96],"97":[96],"30":[12],"98":[12],"99":[7,12],"100":[12,15],"101":[12],"102":[15,12],"103":[7],"104":[15,12],"105":[12],"106":[107],"108":[12],"109":[12],"32":[30],"17":[15,12],"110":[12],"31":[30],"111":[12],"112":[12],"113":[12],"114":[12],"115":[12],"116":[12],"117":[12],"118":[12],"119":[12],"120":[15,12],"121":[12],"122":[12],"123":[12],"124":[12],"33":[15,12],"125":[12],"126":[28],"127":[28],"29":[28],"128":[28],"129":[24],"130":[24],"131":[107],"132":[107]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.MonoBehaviour","StackObject","UnityEngine.RectTransform","EndCard","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","FollowPosition","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Text","UnityEngine.Font","MoveByPath","DynamicJoystick","CharacterBehaviour","MoveByJoystick","CharacterAnimator","DetectPlaceComponent","StackControl","CharacterArrowTut","UnityEngine.Rigidbody","UnityEngine.SphereCollider","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","CollectObjectPlace","TutController","KitchenPlace","UnityEngine.AudioSource","UnityEngine.AudioClip","PickupPlace","DinnerTable","CustomerController","CustomerAnimator","CashierTable","InstallPlace","UnityEngine.Cubemap","FixedJoystick","FloatingJoystick","VariableJoystick","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.24f1";

Deserializers.productName = "kitchen";

Deserializers.lunaInitializationTime = "05/08/2023 09:13:25";

Deserializers.lunaDaysRunning = "15.7";

Deserializers.lunaVersion = "5.0.0";

Deserializers.lunaSHA = "8492f3ebf500b632ef0f82804595ebe7557792b4";

Deserializers.creativeName = "kitchen-egg-new-floor-CTA";

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

Deserializers.buildID = "38e4eff2-4ee2-44cd-9dff-ce518567465c";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

