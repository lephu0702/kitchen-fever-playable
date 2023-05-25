var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4860 = root || request.c( 'UnityEngine.JointSpring' )
  var i4861 = data
  i4860.spring = i4861[0]
  i4860.damper = i4861[1]
  i4860.targetPosition = i4861[2]
  return i4860
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4862 = root || request.c( 'UnityEngine.JointMotor' )
  var i4863 = data
  i4862.m_TargetVelocity = i4863[0]
  i4862.m_Force = i4863[1]
  i4862.m_FreeSpin = i4863[2]
  return i4862
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4864 = root || request.c( 'UnityEngine.JointLimits' )
  var i4865 = data
  i4864.m_Min = i4865[0]
  i4864.m_Max = i4865[1]
  i4864.m_Bounciness = i4865[2]
  i4864.m_BounceMinVelocity = i4865[3]
  i4864.m_ContactDistance = i4865[4]
  i4864.minBounce = i4865[5]
  i4864.maxBounce = i4865[6]
  return i4864
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4866 = root || request.c( 'UnityEngine.JointDrive' )
  var i4867 = data
  i4866.m_PositionSpring = i4867[0]
  i4866.m_PositionDamper = i4867[1]
  i4866.m_MaximumForce = i4867[2]
  return i4866
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4868 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4869 = data
  i4868.m_Spring = i4869[0]
  i4868.m_Damper = i4869[1]
  return i4868
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4870 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4871 = data
  i4870.m_Limit = i4871[0]
  i4870.m_Bounciness = i4871[1]
  i4870.m_ContactDistance = i4871[2]
  return i4870
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4872 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4873 = data
  i4872.m_ExtremumSlip = i4873[0]
  i4872.m_ExtremumValue = i4873[1]
  i4872.m_AsymptoteSlip = i4873[2]
  i4872.m_AsymptoteValue = i4873[3]
  i4872.m_Stiffness = i4873[4]
  return i4872
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4874 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4875 = data
  i4874.m_LowerAngle = i4875[0]
  i4874.m_UpperAngle = i4875[1]
  return i4874
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4876 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4877 = data
  i4876.m_MotorSpeed = i4877[0]
  i4876.m_MaximumMotorTorque = i4877[1]
  return i4876
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4878 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4879 = data
  i4878.m_DampingRatio = i4879[0]
  i4878.m_Frequency = i4879[1]
  i4878.m_Angle = i4879[2]
  return i4878
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4880 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4881 = data
  i4880.m_LowerTranslation = i4881[0]
  i4880.m_UpperTranslation = i4881[1]
  return i4880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4882 = root || new pc.UnityMaterial()
  var i4883 = data
  i4882.name = i4883[0]
  request.r(i4883[1], i4883[2], 0, i4882, 'shader')
  i4882.renderQueue = i4883[3]
  i4882.enableInstancing = !!i4883[4]
  var i4885 = i4883[5]
  var i4884 = []
  for(var i = 0; i < i4885.length; i += 1) {
    i4884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4885[i + 0]) );
  }
  i4882.floatParameters = i4884
  var i4887 = i4883[6]
  var i4886 = []
  for(var i = 0; i < i4887.length; i += 1) {
    i4886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4887[i + 0]) );
  }
  i4882.colorParameters = i4886
  var i4889 = i4883[7]
  var i4888 = []
  for(var i = 0; i < i4889.length; i += 1) {
    i4888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4889[i + 0]) );
  }
  i4882.vectorParameters = i4888
  var i4891 = i4883[8]
  var i4890 = []
  for(var i = 0; i < i4891.length; i += 1) {
    i4890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4891[i + 0]) );
  }
  i4882.textureParameters = i4890
  var i4893 = i4883[9]
  var i4892 = []
  for(var i = 0; i < i4893.length; i += 1) {
    i4892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4893[i + 0]) );
  }
  i4882.materialFlags = i4892
  return i4882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4897 = data
  i4896.name = i4897[0]
  i4896.value = i4897[1]
  return i4896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4901 = data
  i4900.name = i4901[0]
  i4900.value = new pc.Color(i4901[1], i4901[2], i4901[3], i4901[4])
  return i4900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4905 = data
  i4904.name = i4905[0]
  i4904.value = new pc.Vec4( i4905[1], i4905[2], i4905[3], i4905[4] )
  return i4904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4909 = data
  i4908.name = i4909[0]
  request.r(i4909[1], i4909[2], 0, i4908, 'value')
  return i4908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4913 = data
  i4912.name = i4913[0]
  i4912.enabled = !!i4913[1]
  return i4912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4915 = data
  i4914.position = new pc.Vec3( i4915[0], i4915[1], i4915[2] )
  i4914.scale = new pc.Vec3( i4915[3], i4915[4], i4915[5] )
  i4914.rotation = new pc.Quat(i4915[6], i4915[7], i4915[8], i4915[9])
  return i4914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4917 = data
  i4916.name = i4917[0]
  i4916.tagId = i4917[1]
  i4916.enabled = !!i4917[2]
  i4916.isStatic = !!i4917[3]
  i4916.layer = i4917[4]
  return i4916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i4918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i4919 = data
  i4918.enabled = !!i4919[0]
  request.r(i4919[1], i4919[2], 0, i4918, 'sharedMaterial')
  var i4921 = i4919[3]
  var i4920 = []
  for(var i = 0; i < i4921.length; i += 2) {
  request.r(i4921[i + 0], i4921[i + 1], 2, i4920, '')
  }
  i4918.sharedMaterials = i4920
  i4918.receiveShadows = !!i4919[4]
  i4918.shadowCastingMode = i4919[5]
  i4918.sortingLayerID = i4919[6]
  i4918.sortingOrder = i4919[7]
  i4918.lightmapIndex = i4919[8]
  i4918.lightmapSceneIndex = i4919[9]
  i4918.lightmapScaleOffset = new pc.Vec4( i4919[10], i4919[11], i4919[12], i4919[13] )
  i4918.lightProbeUsage = i4919[14]
  i4918.reflectionProbeUsage = i4919[15]
  request.r(i4919[16], i4919[17], 0, i4918, 'sharedMesh')
  var i4923 = i4919[18]
  var i4922 = []
  for(var i = 0; i < i4923.length; i += 2) {
  request.r(i4923[i + 0], i4923[i + 1], 2, i4922, '')
  }
  i4918.bones = i4922
  i4918.updateWhenOffscreen = !!i4919[19]
  i4918.localBounds = i4919[20]
  request.r(i4919[21], i4919[22], 0, i4918, 'rootBone')
  var i4925 = i4919[23]
  var i4924 = []
  for(var i = 0; i < i4925.length; i += 1) {
    i4924.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i4925[i + 0]) );
  }
  i4918.blendShapesWeights = i4924
  return i4918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i4932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i4933 = data
  i4932.weight = i4933[0]
  return i4932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4935 = data
  i4934.name = i4935[0]
  i4934.width = i4935[1]
  i4934.height = i4935[2]
  i4934.mipmapCount = i4935[3]
  i4934.anisoLevel = i4935[4]
  i4934.filterMode = i4935[5]
  i4934.hdr = !!i4935[6]
  i4934.format = i4935[7]
  i4934.wrapMode = i4935[8]
  i4934.alphaIsTransparency = !!i4935[9]
  i4934.alphaSource = i4935[10]
  return i4934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4937 = data
  i4936.name = i4937[0]
  i4936.halfPrecision = !!i4937[1]
  i4936.vertexCount = i4937[2]
  i4936.aabb = i4937[3]
  var i4939 = i4937[4]
  var i4938 = []
  for(var i = 0; i < i4939.length; i += 1) {
    i4938.push( !!i4939[i + 0] );
  }
  i4936.streams = i4938
  i4936.vertices = i4937[5]
  var i4941 = i4937[6]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4941[i + 0]) );
  }
  i4936.subMeshes = i4940
  var i4943 = i4937[7]
  var i4942 = []
  for(var i = 0; i < i4943.length; i += 16) {
    i4942.push( new pc.Mat4().setData(i4943[i + 0], i4943[i + 1], i4943[i + 2], i4943[i + 3],  i4943[i + 4], i4943[i + 5], i4943[i + 6], i4943[i + 7],  i4943[i + 8], i4943[i + 9], i4943[i + 10], i4943[i + 11],  i4943[i + 12], i4943[i + 13], i4943[i + 14], i4943[i + 15]) );
  }
  i4936.bindposes = i4942
  var i4945 = i4937[8]
  var i4944 = []
  for(var i = 0; i < i4945.length; i += 1) {
    i4944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4945[i + 0]) );
  }
  i4936.blendShapes = i4944
  return i4936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4951 = data
  i4950.triangles = i4951[0]
  return i4950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4957 = data
  i4956.name = i4957[0]
  var i4959 = i4957[1]
  var i4958 = []
  for(var i = 0; i < i4959.length; i += 1) {
    i4958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4959[i + 0]) );
  }
  i4956.frames = i4958
  return i4956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4961 = data
  request.r(i4961[0], i4961[1], 0, i4960, 'sharedMesh')
  return i4960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4963 = data
  request.r(i4963[0], i4963[1], 0, i4962, 'additionalVertexStreams')
  i4962.enabled = !!i4963[2]
  request.r(i4963[3], i4963[4], 0, i4962, 'sharedMaterial')
  var i4965 = i4963[5]
  var i4964 = []
  for(var i = 0; i < i4965.length; i += 2) {
  request.r(i4965[i + 0], i4965[i + 1], 2, i4964, '')
  }
  i4962.sharedMaterials = i4964
  i4962.receiveShadows = !!i4963[6]
  i4962.shadowCastingMode = i4963[7]
  i4962.sortingLayerID = i4963[8]
  i4962.sortingOrder = i4963[9]
  i4962.lightmapIndex = i4963[10]
  i4962.lightmapSceneIndex = i4963[11]
  i4962.lightmapScaleOffset = new pc.Vec4( i4963[12], i4963[13], i4963[14], i4963[15] )
  i4962.lightProbeUsage = i4963[16]
  i4962.reflectionProbeUsage = i4963[17]
  return i4962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i4966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i4967 = data
  i4966.playAutomatically = !!i4967[0]
  request.r(i4967[1], i4967[2], 0, i4966, 'clip')
  var i4969 = i4967[3]
  var i4968 = []
  for(var i = 0; i < i4969.length; i += 2) {
  request.r(i4969[i + 0], i4969[i + 1], 2, i4968, '')
  }
  i4966.clips = i4968
  i4966.wrapMode = i4967[4]
  i4966.enabled = !!i4967[5]
  return i4966
}

Deserializers["StackObject"] = function (request, data, root) {
  var i4972 = root || request.c( 'StackObject' )
  var i4973 = data
  request.r(i4973[0], i4973[1], 0, i4972, 'transf')
  return i4972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4975 = data
  i4974.pivot = new pc.Vec2( i4975[0], i4975[1] )
  i4974.anchorMin = new pc.Vec2( i4975[2], i4975[3] )
  i4974.anchorMax = new pc.Vec2( i4975[4], i4975[5] )
  i4974.sizeDelta = new pc.Vec2( i4975[6], i4975[7] )
  i4974.anchoredPosition3D = new pc.Vec3( i4975[8], i4975[9], i4975[10] )
  i4974.rotation = new pc.Quat(i4975[11], i4975[12], i4975[13], i4975[14])
  i4974.scale = new pc.Vec3( i4975[15], i4975[16], i4975[17] )
  return i4974
}

Deserializers["EndCard"] = function (request, data, root) {
  var i4976 = root || request.c( 'EndCard' )
  var i4977 = data
  request.r(i4977[0], i4977[1], 0, i4976, 'endCard')
  return i4976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4979 = data
  i4978.cullTransparentMesh = !!i4979[0]
  return i4978
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4980 = root || request.c( 'UnityEngine.UI.Image' )
  var i4981 = data
  request.r(i4981[0], i4981[1], 0, i4980, 'm_Sprite')
  i4980.m_Type = i4981[2]
  i4980.m_PreserveAspect = !!i4981[3]
  i4980.m_FillCenter = !!i4981[4]
  i4980.m_FillMethod = i4981[5]
  i4980.m_FillAmount = i4981[6]
  i4980.m_FillClockwise = !!i4981[7]
  i4980.m_FillOrigin = i4981[8]
  i4980.m_UseSpriteMesh = !!i4981[9]
  i4980.m_PixelsPerUnitMultiplier = i4981[10]
  request.r(i4981[11], i4981[12], 0, i4980, 'm_Material')
  i4980.m_Maskable = !!i4981[13]
  i4980.m_Color = new pc.Color(i4981[14], i4981[15], i4981[16], i4981[17])
  i4980.m_RaycastTarget = !!i4981[18]
  i4980.m_RaycastPadding = new pc.Vec4( i4981[19], i4981[20], i4981[21], i4981[22] )
  return i4980
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4982 = root || request.c( 'UnityEngine.UI.Button' )
  var i4983 = data
  i4982.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4983[0], i4982.m_OnClick)
  i4982.m_Navigation = request.d('UnityEngine.UI.Navigation', i4983[1], i4982.m_Navigation)
  i4982.m_Transition = i4983[2]
  i4982.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4983[3], i4982.m_Colors)
  i4982.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4983[4], i4982.m_SpriteState)
  i4982.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4983[5], i4982.m_AnimationTriggers)
  i4982.m_Interactable = !!i4983[6]
  request.r(i4983[7], i4983[8], 0, i4982, 'm_TargetGraphic')
  return i4982
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4984 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4985 = data
  i4984.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4985[0], i4984.m_PersistentCalls)
  return i4984
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4986 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4987 = data
  var i4989 = i4987[0]
  var i4988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4989.length; i += 1) {
    i4988.add(request.d('UnityEngine.Events.PersistentCall', i4989[i + 0]));
  }
  i4986.m_Calls = i4988
  return i4986
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4992 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4993 = data
  request.r(i4993[0], i4993[1], 0, i4992, 'm_Target')
  i4992.m_TargetAssemblyTypeName = i4993[2]
  i4992.m_MethodName = i4993[3]
  i4992.m_Mode = i4993[4]
  i4992.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4993[5], i4992.m_Arguments)
  i4992.m_CallState = i4993[6]
  return i4992
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4994 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4995 = data
  request.r(i4995[0], i4995[1], 0, i4994, 'm_ObjectArgument')
  i4994.m_ObjectArgumentAssemblyTypeName = i4995[2]
  i4994.m_IntArgument = i4995[3]
  i4994.m_FloatArgument = i4995[4]
  i4994.m_StringArgument = i4995[5]
  i4994.m_BoolArgument = !!i4995[6]
  return i4994
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4996 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4997 = data
  i4996.m_Mode = i4997[0]
  i4996.m_WrapAround = !!i4997[1]
  request.r(i4997[2], i4997[3], 0, i4996, 'm_SelectOnUp')
  request.r(i4997[4], i4997[5], 0, i4996, 'm_SelectOnDown')
  request.r(i4997[6], i4997[7], 0, i4996, 'm_SelectOnLeft')
  request.r(i4997[8], i4997[9], 0, i4996, 'm_SelectOnRight')
  return i4996
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4998 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4999 = data
  i4998.m_NormalColor = new pc.Color(i4999[0], i4999[1], i4999[2], i4999[3])
  i4998.m_HighlightedColor = new pc.Color(i4999[4], i4999[5], i4999[6], i4999[7])
  i4998.m_PressedColor = new pc.Color(i4999[8], i4999[9], i4999[10], i4999[11])
  i4998.m_SelectedColor = new pc.Color(i4999[12], i4999[13], i4999[14], i4999[15])
  i4998.m_DisabledColor = new pc.Color(i4999[16], i4999[17], i4999[18], i4999[19])
  i4998.m_ColorMultiplier = i4999[20]
  i4998.m_FadeDuration = i4999[21]
  return i4998
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5000 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5001 = data
  request.r(i5001[0], i5001[1], 0, i5000, 'm_HighlightedSprite')
  request.r(i5001[2], i5001[3], 0, i5000, 'm_PressedSprite')
  request.r(i5001[4], i5001[5], 0, i5000, 'm_SelectedSprite')
  request.r(i5001[6], i5001[7], 0, i5000, 'm_DisabledSprite')
  return i5000
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5002 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5003 = data
  i5002.m_NormalTrigger = i5003[0]
  i5002.m_HighlightedTrigger = i5003[1]
  i5002.m_PressedTrigger = i5003[2]
  i5002.m_SelectedTrigger = i5003[3]
  i5002.m_DisabledTrigger = i5003[4]
  return i5002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5005 = data
  request.r(i5005[0], i5005[1], 0, i5004, 'animatorController')
  i5004.updateMode = i5005[2]
  var i5007 = i5005[3]
  var i5006 = []
  for(var i = 0; i < i5007.length; i += 2) {
  request.r(i5007[i + 0], i5007[i + 1], 2, i5006, '')
  }
  i5004.humanBones = i5006
  i5004.enabled = !!i5005[4]
  return i5004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5009 = data
  i5008.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5009[0], i5008.main)
  i5008.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5009[1], i5008.colorBySpeed)
  i5008.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5009[2], i5008.colorOverLifetime)
  i5008.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5009[3], i5008.emission)
  i5008.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5009[4], i5008.rotationBySpeed)
  i5008.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5009[5], i5008.rotationOverLifetime)
  i5008.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5009[6], i5008.shape)
  i5008.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5009[7], i5008.sizeBySpeed)
  i5008.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5009[8], i5008.sizeOverLifetime)
  i5008.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5009[9], i5008.textureSheetAnimation)
  i5008.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5009[10], i5008.velocityOverLifetime)
  i5008.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5009[11], i5008.noise)
  i5008.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5009[12], i5008.inheritVelocity)
  i5008.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5009[13], i5008.forceOverLifetime)
  i5008.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5009[14], i5008.limitVelocityOverLifetime)
  i5008.useAutoRandomSeed = !!i5009[15]
  i5008.randomSeed = i5009[16]
  return i5008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5010 = root || new pc.ParticleSystemMain()
  var i5011 = data
  i5010.duration = i5011[0]
  i5010.loop = !!i5011[1]
  i5010.prewarm = !!i5011[2]
  i5010.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5011[3], i5010.startDelay)
  i5010.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5011[4], i5010.startLifetime)
  i5010.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5011[5], i5010.startSpeed)
  i5010.startSize3D = !!i5011[6]
  i5010.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5011[7], i5010.startSizeX)
  i5010.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5011[8], i5010.startSizeY)
  i5010.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5011[9], i5010.startSizeZ)
  i5010.startRotation3D = !!i5011[10]
  i5010.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5011[11], i5010.startRotationX)
  i5010.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5011[12], i5010.startRotationY)
  i5010.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5011[13], i5010.startRotationZ)
  i5010.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5011[14], i5010.startColor)
  i5010.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5011[15], i5010.gravityModifier)
  i5010.simulationSpace = i5011[16]
  request.r(i5011[17], i5011[18], 0, i5010, 'customSimulationSpace')
  i5010.simulationSpeed = i5011[19]
  i5010.useUnscaledTime = !!i5011[20]
  i5010.scalingMode = i5011[21]
  i5010.playOnAwake = !!i5011[22]
  i5010.maxParticles = i5011[23]
  i5010.emitterVelocityMode = i5011[24]
  i5010.stopAction = i5011[25]
  return i5010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5012 = root || new pc.MinMaxCurve()
  var i5013 = data
  i5012.mode = i5013[0]
  i5012.curveMin = new pc.AnimationCurve( { keys_flow: i5013[1] } )
  i5012.curveMax = new pc.AnimationCurve( { keys_flow: i5013[2] } )
  i5012.curveMultiplier = i5013[3]
  i5012.constantMin = i5013[4]
  i5012.constantMax = i5013[5]
  return i5012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5014 = root || new pc.MinMaxGradient()
  var i5015 = data
  i5014.mode = i5015[0]
  i5014.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5015[1], i5014.gradientMin)
  i5014.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5015[2], i5014.gradientMax)
  i5014.colorMin = new pc.Color(i5015[3], i5015[4], i5015[5], i5015[6])
  i5014.colorMax = new pc.Color(i5015[7], i5015[8], i5015[9], i5015[10])
  return i5014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5017 = data
  i5016.mode = i5017[0]
  var i5019 = i5017[1]
  var i5018 = []
  for(var i = 0; i < i5019.length; i += 1) {
    i5018.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5019[i + 0]) );
  }
  i5016.colorKeys = i5018
  var i5021 = i5017[2]
  var i5020 = []
  for(var i = 0; i < i5021.length; i += 1) {
    i5020.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5021[i + 0]) );
  }
  i5016.alphaKeys = i5020
  return i5016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5022 = root || new pc.ParticleSystemColorBySpeed()
  var i5023 = data
  i5022.enabled = !!i5023[0]
  i5022.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5023[1], i5022.color)
  i5022.range = new pc.Vec2( i5023[2], i5023[3] )
  return i5022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5027 = data
  i5026.color = new pc.Color(i5027[0], i5027[1], i5027[2], i5027[3])
  i5026.time = i5027[4]
  return i5026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5031 = data
  i5030.alpha = i5031[0]
  i5030.time = i5031[1]
  return i5030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5032 = root || new pc.ParticleSystemColorOverLifetime()
  var i5033 = data
  i5032.enabled = !!i5033[0]
  i5032.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5033[1], i5032.color)
  return i5032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5034 = root || new pc.ParticleSystemEmitter()
  var i5035 = data
  i5034.enabled = !!i5035[0]
  i5034.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5035[1], i5034.rateOverTime)
  i5034.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5035[2], i5034.rateOverDistance)
  var i5037 = i5035[3]
  var i5036 = []
  for(var i = 0; i < i5037.length; i += 1) {
    i5036.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5037[i + 0]) );
  }
  i5034.bursts = i5036
  return i5034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5040 = root || new pc.ParticleSystemBurst()
  var i5041 = data
  i5040.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5041[0], i5040.count)
  i5040.cycleCount = i5041[1]
  i5040.minCount = i5041[2]
  i5040.maxCount = i5041[3]
  i5040.repeatInterval = i5041[4]
  i5040.time = i5041[5]
  return i5040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5042 = root || new pc.ParticleSystemRotationBySpeed()
  var i5043 = data
  i5042.enabled = !!i5043[0]
  i5042.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5043[1], i5042.x)
  i5042.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5043[2], i5042.y)
  i5042.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5043[3], i5042.z)
  i5042.separateAxes = !!i5043[4]
  i5042.range = new pc.Vec2( i5043[5], i5043[6] )
  return i5042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5044 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5045 = data
  i5044.enabled = !!i5045[0]
  i5044.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5045[1], i5044.x)
  i5044.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5045[2], i5044.y)
  i5044.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5045[3], i5044.z)
  i5044.separateAxes = !!i5045[4]
  return i5044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5046 = root || new pc.ParticleSystemShape()
  var i5047 = data
  i5046.enabled = !!i5047[0]
  i5046.shapeType = i5047[1]
  i5046.randomDirectionAmount = i5047[2]
  i5046.sphericalDirectionAmount = i5047[3]
  i5046.randomPositionAmount = i5047[4]
  i5046.alignToDirection = !!i5047[5]
  i5046.radius = i5047[6]
  i5046.radiusMode = i5047[7]
  i5046.radiusSpread = i5047[8]
  i5046.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5047[9], i5046.radiusSpeed)
  i5046.radiusThickness = i5047[10]
  i5046.angle = i5047[11]
  i5046.length = i5047[12]
  i5046.boxThickness = new pc.Vec3( i5047[13], i5047[14], i5047[15] )
  i5046.meshShapeType = i5047[16]
  request.r(i5047[17], i5047[18], 0, i5046, 'mesh')
  request.r(i5047[19], i5047[20], 0, i5046, 'meshRenderer')
  request.r(i5047[21], i5047[22], 0, i5046, 'skinnedMeshRenderer')
  i5046.useMeshMaterialIndex = !!i5047[23]
  i5046.meshMaterialIndex = i5047[24]
  i5046.useMeshColors = !!i5047[25]
  i5046.normalOffset = i5047[26]
  i5046.arc = i5047[27]
  i5046.arcMode = i5047[28]
  i5046.arcSpread = i5047[29]
  i5046.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5047[30], i5046.arcSpeed)
  i5046.donutRadius = i5047[31]
  i5046.position = new pc.Vec3( i5047[32], i5047[33], i5047[34] )
  i5046.rotation = new pc.Vec3( i5047[35], i5047[36], i5047[37] )
  i5046.scale = new pc.Vec3( i5047[38], i5047[39], i5047[40] )
  return i5046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5048 = root || new pc.ParticleSystemSizeBySpeed()
  var i5049 = data
  i5048.enabled = !!i5049[0]
  i5048.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5049[1], i5048.x)
  i5048.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5049[2], i5048.y)
  i5048.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5049[3], i5048.z)
  i5048.separateAxes = !!i5049[4]
  i5048.range = new pc.Vec2( i5049[5], i5049[6] )
  return i5048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5050 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5051 = data
  i5050.enabled = !!i5051[0]
  i5050.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5051[1], i5050.x)
  i5050.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5051[2], i5050.y)
  i5050.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5051[3], i5050.z)
  i5050.separateAxes = !!i5051[4]
  return i5050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5052 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5053 = data
  i5052.enabled = !!i5053[0]
  i5052.mode = i5053[1]
  i5052.animation = i5053[2]
  i5052.numTilesX = i5053[3]
  i5052.numTilesY = i5053[4]
  i5052.useRandomRow = !!i5053[5]
  i5052.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5053[6], i5052.frameOverTime)
  i5052.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5053[7], i5052.startFrame)
  i5052.cycleCount = i5053[8]
  i5052.rowIndex = i5053[9]
  i5052.flipU = i5053[10]
  i5052.flipV = i5053[11]
  i5052.spriteCount = i5053[12]
  var i5055 = i5053[13]
  var i5054 = []
  for(var i = 0; i < i5055.length; i += 2) {
  request.r(i5055[i + 0], i5055[i + 1], 2, i5054, '')
  }
  i5052.sprites = i5054
  return i5052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5058 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5059 = data
  i5058.enabled = !!i5059[0]
  i5058.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5059[1], i5058.x)
  i5058.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5059[2], i5058.y)
  i5058.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5059[3], i5058.z)
  i5058.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5059[4], i5058.speedModifier)
  i5058.space = i5059[5]
  return i5058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5060 = root || new pc.ParticleSystemNoise()
  var i5061 = data
  i5060.enabled = !!i5061[0]
  i5060.separateAxes = !!i5061[1]
  i5060.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5061[2], i5060.strengthX)
  i5060.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5061[3], i5060.strengthY)
  i5060.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5061[4], i5060.strengthZ)
  i5060.frequency = i5061[5]
  i5060.damping = !!i5061[6]
  i5060.octaveCount = i5061[7]
  i5060.octaveMultiplier = i5061[8]
  i5060.octaveScale = i5061[9]
  i5060.quality = i5061[10]
  i5060.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5061[11], i5060.scrollSpeed)
  i5060.scrollSpeedMultiplier = i5061[12]
  i5060.remapEnabled = !!i5061[13]
  i5060.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5061[14], i5060.remapX)
  i5060.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5061[15], i5060.remapY)
  i5060.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5061[16], i5060.remapZ)
  i5060.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5061[17], i5060.positionAmount)
  i5060.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5061[18], i5060.rotationAmount)
  i5060.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5061[19], i5060.sizeAmount)
  return i5060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5062 = root || new pc.ParticleSystemInheritVelocity()
  var i5063 = data
  i5062.enabled = !!i5063[0]
  i5062.mode = i5063[1]
  i5062.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5063[2], i5062.curve)
  return i5062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5064 = root || new pc.ParticleSystemForceOverLifetime()
  var i5065 = data
  i5064.enabled = !!i5065[0]
  i5064.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5065[1], i5064.x)
  i5064.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5065[2], i5064.y)
  i5064.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5065[3], i5064.z)
  i5064.space = i5065[4]
  i5064.randomized = !!i5065[5]
  return i5064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5066 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5067 = data
  i5066.enabled = !!i5067[0]
  i5066.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[1], i5066.limit)
  i5066.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[2], i5066.limitX)
  i5066.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[3], i5066.limitY)
  i5066.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[4], i5066.limitZ)
  i5066.dampen = i5067[5]
  i5066.separateAxes = !!i5067[6]
  i5066.space = i5067[7]
  i5066.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[8], i5066.drag)
  i5066.multiplyDragByParticleSize = !!i5067[9]
  i5066.multiplyDragByParticleVelocity = !!i5067[10]
  return i5066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5069 = data
  i5068.enabled = !!i5069[0]
  request.r(i5069[1], i5069[2], 0, i5068, 'sharedMaterial')
  var i5071 = i5069[3]
  var i5070 = []
  for(var i = 0; i < i5071.length; i += 2) {
  request.r(i5071[i + 0], i5071[i + 1], 2, i5070, '')
  }
  i5068.sharedMaterials = i5070
  i5068.receiveShadows = !!i5069[4]
  i5068.shadowCastingMode = i5069[5]
  i5068.sortingLayerID = i5069[6]
  i5068.sortingOrder = i5069[7]
  i5068.lightmapIndex = i5069[8]
  i5068.lightmapSceneIndex = i5069[9]
  i5068.lightmapScaleOffset = new pc.Vec4( i5069[10], i5069[11], i5069[12], i5069[13] )
  i5068.lightProbeUsage = i5069[14]
  i5068.reflectionProbeUsage = i5069[15]
  request.r(i5069[16], i5069[17], 0, i5068, 'mesh')
  i5068.meshCount = i5069[18]
  i5068.activeVertexStreamsCount = i5069[19]
  i5068.alignment = i5069[20]
  i5068.renderMode = i5069[21]
  i5068.sortMode = i5069[22]
  i5068.lengthScale = i5069[23]
  i5068.velocityScale = i5069[24]
  i5068.cameraVelocityScale = i5069[25]
  i5068.normalDirection = i5069[26]
  i5068.sortingFudge = i5069[27]
  i5068.minParticleSize = i5069[28]
  i5068.maxParticleSize = i5069[29]
  i5068.pivot = new pc.Vec3( i5069[30], i5069[31], i5069[32] )
  request.r(i5069[33], i5069[34], 0, i5068, 'trailMaterial')
  return i5068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5073 = data
  i5072.name = i5073[0]
  i5072.atlasId = i5073[1]
  i5072.mipmapCount = i5073[2]
  i5072.hdr = !!i5073[3]
  i5072.size = i5073[4]
  i5072.anisoLevel = i5073[5]
  i5072.filterMode = i5073[6]
  i5072.wrapMode = i5073[7]
  var i5075 = i5073[8]
  var i5074 = []
  for(var i = 0; i < i5075.length; i += 4) {
    i5074.push( UnityEngine.Rect.MinMaxRect(i5075[i + 0], i5075[i + 1], i5075[i + 2], i5075[i + 3]) );
  }
  i5072.rects = i5074
  return i5072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5079 = data
  i5078.name = i5079[0]
  i5078.index = i5079[1]
  i5078.startup = !!i5079[2]
  return i5078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5081 = data
  i5080.enabled = !!i5081[0]
  i5080.aspect = i5081[1]
  i5080.orthographic = !!i5081[2]
  i5080.orthographicSize = i5081[3]
  i5080.backgroundColor = new pc.Color(i5081[4], i5081[5], i5081[6], i5081[7])
  i5080.nearClipPlane = i5081[8]
  i5080.farClipPlane = i5081[9]
  i5080.fieldOfView = i5081[10]
  i5080.depth = i5081[11]
  i5080.clearFlags = i5081[12]
  i5080.cullingMask = i5081[13]
  i5080.rect = i5081[14]
  request.r(i5081[15], i5081[16], 0, i5080, 'targetTexture')
  i5080.usePhysicalProperties = !!i5081[17]
  i5080.focalLength = i5081[18]
  i5080.sensorSize = new pc.Vec2( i5081[19], i5081[20] )
  i5080.lensShift = new pc.Vec2( i5081[21], i5081[22] )
  i5080.gateFit = i5081[23]
  return i5080
}

Deserializers["FollowPosition"] = function (request, data, root) {
  var i5082 = root || request.c( 'FollowPosition' )
  var i5083 = data
  request.r(i5083[0], i5083[1], 0, i5082, 'objFollow')
  request.r(i5083[2], i5083[3], 0, i5082, 'target')
  i5082.smooth = i5083[4]
  return i5082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5085 = data
  i5084.enabled = !!i5085[0]
  i5084.type = i5085[1]
  i5084.color = new pc.Color(i5085[2], i5085[3], i5085[4], i5085[5])
  i5084.cullingMask = i5085[6]
  i5084.intensity = i5085[7]
  i5084.range = i5085[8]
  i5084.spotAngle = i5085[9]
  i5084.shadows = i5085[10]
  i5084.shadowNormalBias = i5085[11]
  i5084.shadowBias = i5085[12]
  i5084.shadowStrength = i5085[13]
  i5084.shadowResolution = i5085[14]
  i5084.lightmapBakeType = i5085[15]
  i5084.renderMode = i5085[16]
  request.r(i5085[17], i5085[18], 0, i5084, 'cookie')
  i5084.cookieSize = i5085[19]
  return i5084
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5086 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5087 = data
  request.r(i5087[0], i5087[1], 0, i5086, 'm_FirstSelected')
  i5086.m_sendNavigationEvents = !!i5087[2]
  i5086.m_DragThreshold = i5087[3]
  return i5086
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5088 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5089 = data
  i5088.m_HorizontalAxis = i5089[0]
  i5088.m_VerticalAxis = i5089[1]
  i5088.m_SubmitButton = i5089[2]
  i5088.m_CancelButton = i5089[3]
  i5088.m_InputActionsPerSecond = i5089[4]
  i5088.m_RepeatDelay = i5089[5]
  i5088.m_ForceModuleActive = !!i5089[6]
  i5088.m_SendPointerHoverToParent = !!i5089[7]
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5091 = data
  i5090.enabled = !!i5091[0]
  i5090.planeDistance = i5091[1]
  i5090.referencePixelsPerUnit = i5091[2]
  i5090.isFallbackOverlay = !!i5091[3]
  i5090.renderMode = i5091[4]
  i5090.renderOrder = i5091[5]
  i5090.sortingLayerName = i5091[6]
  i5090.sortingOrder = i5091[7]
  i5090.scaleFactor = i5091[8]
  request.r(i5091[9], i5091[10], 0, i5090, 'worldCamera')
  i5090.overrideSorting = !!i5091[11]
  i5090.pixelPerfect = !!i5091[12]
  i5090.targetDisplay = i5091[13]
  i5090.overridePixelPerfect = !!i5091[14]
  return i5090
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5092 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5093 = data
  i5092.m_UiScaleMode = i5093[0]
  i5092.m_ReferencePixelsPerUnit = i5093[1]
  i5092.m_ScaleFactor = i5093[2]
  i5092.m_ReferenceResolution = new pc.Vec2( i5093[3], i5093[4] )
  i5092.m_ScreenMatchMode = i5093[5]
  i5092.m_MatchWidthOrHeight = i5093[6]
  i5092.m_PhysicalUnit = i5093[7]
  i5092.m_FallbackScreenDPI = i5093[8]
  i5092.m_DefaultSpriteDPI = i5093[9]
  i5092.m_DynamicPixelsPerUnit = i5093[10]
  i5092.m_PresetInfoIsWorld = !!i5093[11]
  return i5092
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5094 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5095 = data
  i5094.m_IgnoreReversedGraphics = !!i5095[0]
  i5094.m_BlockingObjects = i5095[1]
  i5094.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5095[2] )
  return i5094
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5096 = root || request.c( 'UnityEngine.UI.Text' )
  var i5097 = data
  i5096.m_FontData = request.d('UnityEngine.UI.FontData', i5097[0], i5096.m_FontData)
  i5096.m_Text = i5097[1]
  request.r(i5097[2], i5097[3], 0, i5096, 'm_Material')
  i5096.m_Maskable = !!i5097[4]
  i5096.m_Color = new pc.Color(i5097[5], i5097[6], i5097[7], i5097[8])
  i5096.m_RaycastTarget = !!i5097[9]
  i5096.m_RaycastPadding = new pc.Vec4( i5097[10], i5097[11], i5097[12], i5097[13] )
  return i5096
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5098 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5099 = data
  request.r(i5099[0], i5099[1], 0, i5098, 'm_Font')
  i5098.m_FontSize = i5099[2]
  i5098.m_FontStyle = i5099[3]
  i5098.m_BestFit = !!i5099[4]
  i5098.m_MinSize = i5099[5]
  i5098.m_MaxSize = i5099[6]
  i5098.m_Alignment = i5099[7]
  i5098.m_AlignByGeometry = !!i5099[8]
  i5098.m_RichText = !!i5099[9]
  i5098.m_HorizontalOverflow = i5099[10]
  i5098.m_VerticalOverflow = i5099[11]
  i5098.m_LineSpacing = i5099[12]
  return i5098
}

Deserializers["MoveByPath"] = function (request, data, root) {
  var i5100 = root || request.c( 'MoveByPath' )
  var i5101 = data
  var i5103 = i5101[0]
  var i5102 = []
  for(var i = 0; i < i5103.length; i += 2) {
  request.r(i5103[i + 0], i5103[i + 1], 2, i5102, '')
  }
  i5100.paths = i5102
  var i5105 = i5101[1]
  var i5104 = []
  for(var i = 0; i < i5105.length; i += 3) {
    i5104.push( new pc.Vec3( i5105[i + 0], i5105[i + 1], i5105[i + 2] ) );
  }
  i5100.path = i5104
  request.r(i5101[2], i5101[3], 0, i5100, 'target')
  i5100.timeMove = i5101[4]
  i5100.isReady = !!i5101[5]
  return i5100
}

Deserializers["DynamicJoystick"] = function (request, data, root) {
  var i5108 = root || request.c( 'DynamicJoystick' )
  var i5109 = data
  request.r(i5109[0], i5109[1], 0, i5108, 'background')
  request.r(i5109[2], i5109[3], 0, i5108, 'handleTranf')
  request.r(i5109[4], i5109[5], 0, i5108, 'handleObj')
  request.r(i5109[6], i5109[7], 0, i5108, 'character')
  i5108.on = new pc.Color(i5109[8], i5109[9], i5109[10], i5109[11])
  i5108.off = new pc.Color(i5109[12], i5109[13], i5109[14], i5109[15])
  request.r(i5109[16], i5109[17], 0, i5108, 'imgBG')
  request.r(i5109[18], i5109[19], 0, i5108, 'imgHandle')
  i5108.moveThreshold = i5109[20]
  i5108.handleRange = i5109[21]
  i5108.deadZone = i5109[22]
  i5108.axisOptions = i5109[23]
  i5108.snapX = !!i5109[24]
  i5108.snapY = !!i5109[25]
  return i5108
}

Deserializers["CharacterBehaviour"] = function (request, data, root) {
  var i5110 = root || request.c( 'CharacterBehaviour' )
  var i5111 = data
  request.r(i5111[0], i5111[1], 0, i5110, 'moveByJoystick')
  request.r(i5111[2], i5111[3], 0, i5110, 'characterAnimator')
  request.r(i5111[4], i5111[5], 0, i5110, 'detectPlaceComponent')
  request.r(i5111[6], i5111[7], 0, i5110, 'stackControl')
  request.r(i5111[8], i5111[9], 0, i5110, 'tut')
  i5110.timeNotMove = i5111[10]
  request.r(i5111[11], i5111[12], 0, i5110, 'effTut')
  i5110.timeCheckMove = i5111[13]
  return i5110
}

Deserializers["MoveByJoystick"] = function (request, data, root) {
  var i5112 = root || request.c( 'MoveByJoystick' )
  var i5113 = data
  i5112.speed = i5113[0]
  request.r(i5113[1], i5113[2], 0, i5112, 'rb')
  request.r(i5113[3], i5113[4], 0, i5112, 'variableJoystick')
  request.r(i5113[5], i5113[6], 0, i5112, 'transf')
  i5112.smoothRotation = i5113[7]
  i5112.smoothMove = i5113[8]
  i5112.smoothRotationByTarget = i5113[9]
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i5114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i5115 = data
  i5114.mass = i5115[0]
  i5114.drag = i5115[1]
  i5114.angularDrag = i5115[2]
  i5114.useGravity = !!i5115[3]
  i5114.isKinematic = !!i5115[4]
  i5114.constraints = i5115[5]
  i5114.maxAngularVelocity = i5115[6]
  i5114.collisionDetectionMode = i5115[7]
  i5114.interpolation = i5115[8]
  return i5114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5117 = data
  i5116.enabled = !!i5117[0]
  i5116.isTrigger = !!i5117[1]
  request.r(i5117[2], i5117[3], 0, i5116, 'material')
  i5116.center = new pc.Vec3( i5117[4], i5117[5], i5117[6] )
  i5116.radius = i5117[7]
  return i5116
}

Deserializers["CharacterAnimator"] = function (request, data, root) {
  var i5118 = root || request.c( 'CharacterAnimator' )
  var i5119 = data
  request.r(i5119[0], i5119[1], 0, i5118, 'animator')
  request.r(i5119[2], i5119[3], 0, i5118, 'objCook')
  return i5118
}

Deserializers["DetectPlaceComponent"] = function (request, data, root) {
  var i5120 = root || request.c( 'DetectPlaceComponent' )
  var i5121 = data
  request.r(i5121[0], i5121[1], 0, i5120, 'character')
  i5120.layerWaitPlace = UnityEngine.LayerMask.FromIntegerValue( i5121[2] )
  i5120.enableDetect = !!i5121[3]
  i5120.detectDelay = i5121[4]
  i5120.radius = i5121[5]
  i5120.timeDelayDetect = i5121[6]
  return i5120
}

Deserializers["StackControl"] = function (request, data, root) {
  var i5122 = root || request.c( 'StackControl' )
  var i5123 = data
  var i5125 = i5123[0]
  var i5124 = new (System.Collections.Generic.List$1(Bridge.ns('StackObject')))
  for(var i = 0; i < i5125.length; i += 2) {
  request.r(i5125[i + 0], i5125[i + 1], 1, i5124, '')
  }
  i5122.stackObjects = i5124
  var i5127 = i5123[1]
  var i5126 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5127.length; i += 2) {
  request.r(i5127[i + 0], i5127[i + 1], 1, i5126, '')
  }
  i5122.stackPositions = i5126
  return i5122
}

Deserializers["CharacterArrowTut"] = function (request, data, root) {
  var i5132 = root || request.c( 'CharacterArrowTut' )
  var i5133 = data
  request.r(i5133[0], i5133[1], 0, i5132, 'target')
  request.r(i5133[2], i5133[3], 0, i5132, 'traf')
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5135 = data
  i5134.enabled = !!i5135[0]
  request.r(i5135[1], i5135[2], 0, i5134, 'sharedMaterial')
  var i5137 = i5135[3]
  var i5136 = []
  for(var i = 0; i < i5137.length; i += 2) {
  request.r(i5137[i + 0], i5137[i + 1], 2, i5136, '')
  }
  i5134.sharedMaterials = i5136
  i5134.receiveShadows = !!i5135[4]
  i5134.shadowCastingMode = i5135[5]
  i5134.sortingLayerID = i5135[6]
  i5134.sortingOrder = i5135[7]
  i5134.lightmapIndex = i5135[8]
  i5134.lightmapSceneIndex = i5135[9]
  i5134.lightmapScaleOffset = new pc.Vec4( i5135[10], i5135[11], i5135[12], i5135[13] )
  i5134.lightProbeUsage = i5135[14]
  i5134.reflectionProbeUsage = i5135[15]
  i5134.color = new pc.Color(i5135[16], i5135[17], i5135[18], i5135[19])
  request.r(i5135[20], i5135[21], 0, i5134, 'sprite')
  i5134.flipX = !!i5135[22]
  i5134.flipY = !!i5135[23]
  i5134.drawMode = i5135[24]
  i5134.size = new pc.Vec2( i5135[25], i5135[26] )
  i5134.tileMode = i5135[27]
  i5134.adaptiveModeThreshold = i5135[28]
  i5134.maskInteraction = i5135[29]
  i5134.spriteSortPoint = i5135[30]
  return i5134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5139 = data
  i5138.center = new pc.Vec3( i5139[0], i5139[1], i5139[2] )
  i5138.size = new pc.Vec3( i5139[3], i5139[4], i5139[5] )
  i5138.enabled = !!i5139[6]
  i5138.isTrigger = !!i5139[7]
  request.r(i5139[8], i5139[9], 0, i5138, 'material')
  return i5138
}

Deserializers["CollectObjectPlace"] = function (request, data, root) {
  var i5140 = root || request.c( 'CollectObjectPlace' )
  var i5141 = data
  i5140.isTimeDelay = i5141[0]
  request.r(i5141[1], i5141[2], 0, i5140, 'stackControl')
  request.r(i5141[3], i5141[4], 0, i5140, 'tutController')
  return i5140
}

Deserializers["KitchenPlace"] = function (request, data, root) {
  var i5142 = root || request.c( 'KitchenPlace' )
  var i5143 = data
  request.r(i5143[0], i5143[1], 0, i5142, 'posCook')
  request.r(i5143[2], i5143[3], 0, i5142, 'foodProduct')
  request.r(i5143[4], i5143[5], 0, i5142, 'foodSpawnPos')
  i5142.isTimeDelay = i5143[6]
  request.r(i5143[7], i5143[8], 0, i5142, 'cookAnim')
  request.r(i5143[9], i5143[10], 0, i5142, 'stackInput')
  request.r(i5143[11], i5143[12], 0, i5142, 'stackOutput')
  i5142.timeCook = i5143[13]
  i5142.isCooking = !!i5143[14]
  i5142.isCookComplete = !!i5143[15]
  request.r(i5143[16], i5143[17], 0, i5142, 'tutController')
  request.r(i5143[18], i5143[19], 0, i5142, 'objTut')
  request.r(i5143[20], i5143[21], 0, i5142, 'sound')
  request.r(i5143[22], i5143[23], 0, i5142, 'clip')
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5145 = data
  request.r(i5145[0], i5145[1], 0, i5144, 'clip')
  request.r(i5145[2], i5145[3], 0, i5144, 'outputAudioMixerGroup')
  i5144.playOnAwake = !!i5145[4]
  i5144.loop = !!i5145[5]
  i5144.time = i5145[6]
  i5144.volume = i5145[7]
  i5144.pitch = i5145[8]
  i5144.enabled = !!i5145[9]
  return i5144
}

Deserializers["PickupPlace"] = function (request, data, root) {
  var i5146 = root || request.c( 'PickupPlace' )
  var i5147 = data
  request.r(i5147[0], i5147[1], 0, i5146, 'tutController')
  i5146.timeDelay = i5147[2]
  request.r(i5147[3], i5147[4], 0, i5146, 'stackInput')
  request.r(i5147[5], i5147[6], 0, i5146, 'col')
  return i5146
}

Deserializers["DinnerTable"] = function (request, data, root) {
  var i5148 = root || request.c( 'DinnerTable' )
  var i5149 = data
  var i5151 = i5149[0]
  var i5150 = []
  for(var i = 0; i < i5151.length; i += 2) {
  request.r(i5151[i + 0], i5151[i + 1], 2, i5150, '')
  }
  i5148.customerControllers = i5150
  request.r(i5149[1], i5149[2], 0, i5148, 'stackControl')
  i5148.timeEat = i5149[3]
  request.r(i5149[4], i5149[5], 0, i5148, 'tutController')
  return i5148
}

Deserializers["CustomerAnimator"] = function (request, data, root) {
  var i5154 = root || request.c( 'CustomerAnimator' )
  var i5155 = data
  request.r(i5155[0], i5155[1], 0, i5154, 'eatObj')
  request.r(i5155[2], i5155[3], 0, i5154, 'animator')
  return i5154
}

Deserializers["CustomerController"] = function (request, data, root) {
  var i5156 = root || request.c( 'CustomerController' )
  var i5157 = data
  request.r(i5157[0], i5157[1], 0, i5156, 'customerAnimator')
  request.r(i5157[2], i5157[3], 0, i5156, 'purchasePos')
  i5156.timeMove = i5157[4]
  return i5156
}

Deserializers["CashierTable"] = function (request, data, root) {
  var i5158 = root || request.c( 'CashierTable' )
  var i5159 = data
  var i5161 = i5159[0]
  var i5160 = []
  for(var i = 0; i < i5161.length; i += 2) {
  request.r(i5161[i + 0], i5161[i + 1], 2, i5160, '')
  }
  i5158.customerControllers = i5160
  var i5163 = i5159[1]
  var i5162 = new (System.Collections.Generic.List$1(Bridge.ns('StackObject')))
  for(var i = 0; i < i5163.length; i += 2) {
  request.r(i5163[i + 0], i5163[i + 1], 1, i5162, '')
  }
  i5158.moneys = i5162
  request.r(i5159[2], i5159[3], 0, i5158, 'tutController')
  request.r(i5159[4], i5159[5], 0, i5158, 'stackMoney')
  i5158.isReady = !!i5159[6]
  request.r(i5159[7], i5159[8], 0, i5158, 'audioSource')
  request.r(i5159[9], i5159[10], 0, i5158, 'audioClip')
  return i5158
}

Deserializers["InstallPlace"] = function (request, data, root) {
  var i5164 = root || request.c( 'InstallPlace' )
  var i5165 = data
  return i5164
}

Deserializers["TutController"] = function (request, data, root) {
  var i5166 = root || request.c( 'TutController' )
  var i5167 = data
  var i5169 = i5167[0]
  var i5168 = []
  for(var i = 0; i < i5169.length; i += 2) {
  request.r(i5169[i + 0], i5169[i + 1], 2, i5168, '')
  }
  i5166.objectActives = i5168
  var i5171 = i5167[1]
  var i5170 = []
  for(var i = 0; i < i5171.length; i += 2) {
  request.r(i5171[i + 0], i5171[i + 1], 2, i5170, '')
  }
  i5166.posTut = i5170
  request.r(i5167[2], i5167[3], 0, i5166, 'arrowTut')
  i5166.index = i5167[4]
  request.r(i5167[5], i5167[6], 0, i5166, 'characterArrowTut')
  return i5166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5175 = data
  i5174.ambientIntensity = i5175[0]
  i5174.reflectionIntensity = i5175[1]
  i5174.ambientMode = i5175[2]
  i5174.ambientLight = new pc.Color(i5175[3], i5175[4], i5175[5], i5175[6])
  i5174.ambientSkyColor = new pc.Color(i5175[7], i5175[8], i5175[9], i5175[10])
  i5174.ambientGroundColor = new pc.Color(i5175[11], i5175[12], i5175[13], i5175[14])
  i5174.ambientEquatorColor = new pc.Color(i5175[15], i5175[16], i5175[17], i5175[18])
  i5174.fogColor = new pc.Color(i5175[19], i5175[20], i5175[21], i5175[22])
  i5174.fogEndDistance = i5175[23]
  i5174.fogStartDistance = i5175[24]
  i5174.fogDensity = i5175[25]
  i5174.fog = !!i5175[26]
  request.r(i5175[27], i5175[28], 0, i5174, 'skybox')
  i5174.fogMode = i5175[29]
  var i5177 = i5175[30]
  var i5176 = []
  for(var i = 0; i < i5177.length; i += 1) {
    i5176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5177[i + 0]) );
  }
  i5174.lightmaps = i5176
  i5174.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5175[31], i5174.lightProbes)
  i5174.lightmapsMode = i5175[32]
  i5174.mixedBakeMode = i5175[33]
  i5174.environmentLightingMode = i5175[34]
  i5174.ambientProbe = new pc.SphericalHarmonicsL2(i5175[35])
  i5174.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5175[36])
  i5174.useReferenceAmbientProbe = !!i5175[37]
  request.r(i5175[38], i5175[39], 0, i5174, 'customReflection')
  request.r(i5175[40], i5175[41], 0, i5174, 'defaultReflection')
  i5174.defaultReflectionMode = i5175[42]
  i5174.defaultReflectionResolution = i5175[43]
  i5174.sunLightObjectId = i5175[44]
  i5174.pixelLightCount = i5175[45]
  i5174.defaultReflectionHDR = !!i5175[46]
  i5174.hasLightDataAsset = !!i5175[47]
  i5174.hasManualGenerate = !!i5175[48]
  return i5174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5181 = data
  request.r(i5181[0], i5181[1], 0, i5180, 'lightmapColor')
  request.r(i5181[2], i5181[3], 0, i5180, 'lightmapDirection')
  return i5180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5182 = root || new UnityEngine.LightProbes()
  var i5183 = data
  return i5182
}

Deserializers["FixedJoystick"] = function (request, data, root) {
  var i5188 = root || request.c( 'FixedJoystick' )
  var i5189 = data
  request.r(i5189[0], i5189[1], 0, i5188, 'background')
  request.r(i5189[2], i5189[3], 0, i5188, 'handleTranf')
  request.r(i5189[4], i5189[5], 0, i5188, 'handleObj')
  i5188.handleRange = i5189[6]
  i5188.deadZone = i5189[7]
  i5188.axisOptions = i5189[8]
  i5188.snapX = !!i5189[9]
  i5188.snapY = !!i5189[10]
  return i5188
}

Deserializers["FloatingJoystick"] = function (request, data, root) {
  var i5190 = root || request.c( 'FloatingJoystick' )
  var i5191 = data
  request.r(i5191[0], i5191[1], 0, i5190, 'background')
  request.r(i5191[2], i5191[3], 0, i5190, 'handleTranf')
  request.r(i5191[4], i5191[5], 0, i5190, 'handleObj')
  i5190.handleRange = i5191[6]
  i5190.deadZone = i5191[7]
  i5190.axisOptions = i5191[8]
  i5190.snapX = !!i5191[9]
  i5190.snapY = !!i5191[10]
  return i5190
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i5192 = root || request.c( 'VariableJoystick' )
  var i5193 = data
  request.r(i5193[0], i5193[1], 0, i5192, 'background')
  request.r(i5193[2], i5193[3], 0, i5192, 'handleTranf')
  request.r(i5193[4], i5193[5], 0, i5192, 'handleObj')
  i5192.moveThreshold = i5193[6]
  i5192.joystickType = i5193[7]
  i5192.handleRange = i5193[8]
  i5192.deadZone = i5193[9]
  i5192.axisOptions = i5193[10]
  i5192.snapX = !!i5193[11]
  i5192.snapY = !!i5193[12]
  return i5192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5195 = data
  var i5197 = i5195[0]
  var i5196 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i5197.length; i += 1) {
    i5196.add(i5197[i + 0]);
  }
  i5194.invalidShaderVariants = i5196
  i5194.name = i5195[1]
  i5194.guid = i5195[2]
  var i5199 = i5195[3]
  var i5198 = []
  for(var i = 0; i < i5199.length; i += 1) {
    i5198.push( i5199[i + 0] );
  }
  i5194.shaderDefinedKeywords = i5198
  var i5201 = i5195[4]
  var i5200 = []
  for(var i = 0; i < i5201.length; i += 1) {
    i5200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5201[i + 0]) );
  }
  i5194.passes = i5200
  var i5203 = i5195[5]
  var i5202 = []
  for(var i = 0; i < i5203.length; i += 1) {
    i5202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5203[i + 0]) );
  }
  i5194.usePasses = i5202
  var i5205 = i5195[6]
  var i5204 = []
  for(var i = 0; i < i5205.length; i += 1) {
    i5204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5205[i + 0]) );
  }
  i5194.defaultParameterValues = i5204
  request.r(i5195[7], i5195[8], 0, i5194, 'unityFallbackShader')
  i5194.readDepth = !!i5195[9]
  i5194.isCreatedByShaderGraph = !!i5195[10]
  i5194.usedBatchUniforms = i5195[11]
  return i5194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5212 = root || new pc.UnityShaderPass()
  var i5213 = data
  i5212.id = i5213[0]
  i5212.subShaderIndex = i5213[1]
  i5212.name = i5213[2]
  i5212.passType = i5213[3]
  i5212.usePass = !!i5213[4]
  i5212.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5213[5], i5212.zTest)
  i5212.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5213[6], i5212.zWrite)
  i5212.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5213[7], i5212.culling)
  i5212.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5213[8], i5212.blending)
  i5212.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5213[9], i5212.alphaBlending)
  i5212.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5213[10], i5212.colorWriteMask)
  i5212.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5213[11], i5212.offsetUnits)
  i5212.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5213[12], i5212.offsetFactor)
  i5212.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5213[13], i5212.stencilRef)
  i5212.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5213[14], i5212.stencilReadMask)
  i5212.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5213[15], i5212.stencilWriteMask)
  i5212.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5213[16], i5212.stencilOp)
  i5212.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5213[17], i5212.stencilOpFront)
  i5212.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5213[18], i5212.stencilOpBack)
  var i5215 = i5213[19]
  var i5214 = []
  for(var i = 0; i < i5215.length; i += 1) {
    i5214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5215[i + 0]) );
  }
  i5212.tags = i5214
  var i5217 = i5213[20]
  var i5216 = []
  for(var i = 0; i < i5217.length; i += 1) {
    i5216.push( i5217[i + 0] );
  }
  i5212.passDefinedKeywords = i5216
  var i5219 = i5213[21]
  var i5218 = []
  for(var i = 0; i < i5219.length; i += 1) {
    i5218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5219[i + 0]) );
  }
  i5212.passDefinedKeywordGroups = i5218
  var i5221 = i5213[22]
  var i5220 = []
  for(var i = 0; i < i5221.length; i += 1) {
    i5220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5221[i + 0]) );
  }
  i5212.variants = i5220
  var i5223 = i5213[23]
  var i5222 = []
  for(var i = 0; i < i5223.length; i += 1) {
    i5222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5223[i + 0]) );
  }
  i5212.excludedVariants = i5222
  i5212.hasDepthReader = !!i5213[24]
  return i5212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5225 = data
  i5224.val = i5225[0]
  i5224.name = i5225[1]
  return i5224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5227 = data
  i5226.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5227[0], i5226.src)
  i5226.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5227[1], i5226.dst)
  i5226.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5227[2], i5226.op)
  return i5226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5229 = data
  i5228.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5229[0], i5228.pass)
  i5228.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5229[1], i5228.fail)
  i5228.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5229[2], i5228.zFail)
  i5228.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5229[3], i5228.comp)
  return i5228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5233 = data
  i5232.name = i5233[0]
  i5232.value = i5233[1]
  return i5232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5237 = data
  var i5239 = i5237[0]
  var i5238 = []
  for(var i = 0; i < i5239.length; i += 1) {
    i5238.push( i5239[i + 0] );
  }
  i5236.keywords = i5238
  i5236.hasDiscard = !!i5237[1]
  return i5236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5243 = data
  i5242.passId = i5243[0]
  i5242.subShaderIndex = i5243[1]
  var i5245 = i5243[2]
  var i5244 = []
  for(var i = 0; i < i5245.length; i += 1) {
    i5244.push( i5245[i + 0] );
  }
  i5242.keywords = i5244
  i5242.vertexProgram = i5243[3]
  i5242.fragmentProgram = i5243[4]
  i5242.readDepth = !!i5243[5]
  return i5242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5249 = data
  request.r(i5249[0], i5249[1], 0, i5248, 'shader')
  i5248.pass = i5249[2]
  return i5248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5253 = data
  i5252.name = i5253[0]
  i5252.type = i5253[1]
  i5252.value = new pc.Vec4( i5253[2], i5253[3], i5253[4], i5253[5] )
  i5252.textureValue = i5253[6]
  return i5252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5255 = data
  i5254.name = i5255[0]
  request.r(i5255[1], i5255[2], 0, i5254, 'texture')
  i5254.aabb = i5255[3]
  i5254.vertices = i5255[4]
  i5254.triangles = i5255[5]
  i5254.textureRect = UnityEngine.Rect.MinMaxRect(i5255[6], i5255[7], i5255[8], i5255[9])
  i5254.packedRect = UnityEngine.Rect.MinMaxRect(i5255[10], i5255[11], i5255[12], i5255[13])
  i5254.border = new pc.Vec4( i5255[14], i5255[15], i5255[16], i5255[17] )
  i5254.transparency = i5255[18]
  i5254.bounds = i5255[19]
  i5254.pixelsPerUnit = i5255[20]
  i5254.textureWidth = i5255[21]
  i5254.textureHeight = i5255[22]
  i5254.nativeSize = new pc.Vec2( i5255[23], i5255[24] )
  i5254.pivot = new pc.Vec2( i5255[25], i5255[26] )
  i5254.textureRectOffset = new pc.Vec2( i5255[27], i5255[28] )
  return i5254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5257 = data
  i5256.name = i5257[0]
  return i5256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5259 = data
  i5258.name = i5259[0]
  i5258.wrapMode = i5259[1]
  i5258.isLooping = !!i5259[2]
  i5258.length = i5259[3]
  var i5261 = i5259[4]
  var i5260 = []
  for(var i = 0; i < i5261.length; i += 1) {
    i5260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5261[i + 0]) );
  }
  i5258.curves = i5260
  var i5263 = i5259[5]
  var i5262 = []
  for(var i = 0; i < i5263.length; i += 1) {
    i5262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5263[i + 0]) );
  }
  i5258.events = i5262
  i5258.halfPrecision = !!i5259[6]
  return i5258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5267 = data
  i5266.path = i5267[0]
  i5266.componentType = i5267[1]
  i5266.property = i5267[2]
  i5266.keys = i5267[3]
  var i5269 = i5267[4]
  var i5268 = []
  for(var i = 0; i < i5269.length; i += 1) {
    i5268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5269[i + 0]) );
  }
  i5266.objectReferenceKeys = i5268
  return i5266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5273 = data
  i5272.time = i5273[0]
  request.r(i5273[1], i5273[2], 0, i5272, 'value')
  return i5272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5277 = data
  i5276.functionName = i5277[0]
  i5276.floatParameter = i5277[1]
  i5276.intParameter = i5277[2]
  i5276.stringParameter = i5277[3]
  request.r(i5277[4], i5277[5], 0, i5276, 'objectReferenceParameter')
  i5276.time = i5277[6]
  return i5276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5279 = data
  i5278.name = i5279[0]
  i5278.ascent = i5279[1]
  i5278.originalLineHeight = i5279[2]
  i5278.fontSize = i5279[3]
  var i5281 = i5279[4]
  var i5280 = []
  for(var i = 0; i < i5281.length; i += 1) {
    i5280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5281[i + 0]) );
  }
  i5278.characterInfo = i5280
  request.r(i5279[5], i5279[6], 0, i5278, 'texture')
  i5278.originalFontSize = i5279[7]
  return i5278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5285 = data
  i5284.index = i5285[0]
  i5284.advance = i5285[1]
  i5284.bearing = i5285[2]
  i5284.glyphWidth = i5285[3]
  i5284.glyphHeight = i5285[4]
  i5284.minX = i5285[5]
  i5284.maxX = i5285[6]
  i5284.minY = i5285[7]
  i5284.maxY = i5285[8]
  i5284.uvBottomLeftX = i5285[9]
  i5284.uvBottomLeftY = i5285[10]
  i5284.uvBottomRightX = i5285[11]
  i5284.uvBottomRightY = i5285[12]
  i5284.uvTopLeftX = i5285[13]
  i5284.uvTopLeftY = i5285[14]
  i5284.uvTopRightX = i5285[15]
  i5284.uvTopRightY = i5285[16]
  return i5284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5287 = data
  i5286.name = i5287[0]
  var i5289 = i5287[1]
  var i5288 = []
  for(var i = 0; i < i5289.length; i += 1) {
    i5288.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5289[i + 0]) );
  }
  i5286.states = i5288
  var i5291 = i5287[2]
  var i5290 = []
  for(var i = 0; i < i5291.length; i += 1) {
    i5290.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5291[i + 0]) );
  }
  i5286.layers = i5290
  var i5293 = i5287[3]
  var i5292 = []
  for(var i = 0; i < i5293.length; i += 1) {
    i5292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5293[i + 0]) );
  }
  i5286.parameters = i5292
  i5286.animationClips = i5287[4]
  i5286.HasSubStateMachines = !!i5287[5]
  return i5286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5297 = data
  i5296.cycleOffset = i5297[0]
  i5296.cycleOffsetParameter = i5297[1]
  i5296.cycleOffsetParameterActive = !!i5297[2]
  i5296.mirror = !!i5297[3]
  i5296.mirrorParameter = i5297[4]
  i5296.mirrorParameterActive = !!i5297[5]
  i5296.motionId = i5297[6]
  i5296.nameHash = i5297[7]
  i5296.fullPathHash = i5297[8]
  i5296.speed = i5297[9]
  i5296.speedParameter = i5297[10]
  i5296.speedParameterActive = !!i5297[11]
  i5296.tag = i5297[12]
  i5296.name = i5297[13]
  i5296.layer = i5297[14]
  i5296.writeDefaultValues = !!i5297[15]
  var i5299 = i5297[16]
  var i5298 = []
  for(var i = 0; i < i5299.length; i += 1) {
    i5298.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5299[i + 0]) );
  }
  i5296.transitions = i5298
  var i5301 = i5297[17]
  var i5300 = []
  for(var i = 0; i < i5301.length; i += 2) {
  request.r(i5301[i + 0], i5301[i + 1], 2, i5300, '')
  }
  i5296.behaviours = i5300
  return i5296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5305 = data
  i5304.fullPath = i5305[0]
  i5304.canTransitionToSelf = !!i5305[1]
  i5304.duration = i5305[2]
  i5304.exitTime = i5305[3]
  i5304.hasExitTime = !!i5305[4]
  i5304.hasFixedDuration = !!i5305[5]
  i5304.interruptionSource = i5305[6]
  i5304.offset = i5305[7]
  i5304.orderedInterruption = !!i5305[8]
  i5304.destinationStateNameHash = i5305[9]
  i5304.destinationStateMachineId = i5305[10]
  i5304.isExit = !!i5305[11]
  i5304.mute = !!i5305[12]
  i5304.solo = !!i5305[13]
  var i5307 = i5305[14]
  var i5306 = []
  for(var i = 0; i < i5307.length; i += 1) {
    i5306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5307[i + 0]) );
  }
  i5304.conditions = i5306
  return i5304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5311 = data
  i5310.mode = i5311[0]
  i5310.parameter = i5311[1]
  i5310.threshold = i5311[2]
  return i5310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5317 = data
  i5316.blendingMode = i5317[0]
  i5316.defaultWeight = i5317[1]
  i5316.name = i5317[2]
  i5316.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5317[3], i5316.stateMachine)
  return i5316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5319 = data
  i5318.id = i5319[0]
  i5318.defaultStateNameHash = i5319[1]
  var i5321 = i5319[2]
  var i5320 = []
  for(var i = 0; i < i5321.length; i += 1) {
    i5320.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5321[i + 0]) );
  }
  i5318.entryTransitions = i5320
  var i5323 = i5319[3]
  var i5322 = []
  for(var i = 0; i < i5323.length; i += 1) {
    i5322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5323[i + 0]) );
  }
  i5318.anyStateTransitions = i5322
  return i5318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5327 = data
  i5326.destinationStateNameHash = i5327[0]
  i5326.destinationStateMachineId = i5327[1]
  i5326.isExit = !!i5327[2]
  i5326.mute = !!i5327[3]
  i5326.solo = !!i5327[4]
  var i5329 = i5327[5]
  var i5328 = []
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5329[i + 0]) );
  }
  i5326.conditions = i5328
  return i5326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5333 = data
  i5332.defaultBool = !!i5333[0]
  i5332.defaultFloat = i5333[1]
  i5332.defaultInt = i5333[2]
  i5332.name = i5333[3]
  i5332.nameHash = i5333[4]
  i5332.type = i5333[5]
  return i5332
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5334 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5335 = data
  i5334.useSafeMode = !!i5335[0]
  i5334.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5335[1], i5334.safeModeOptions)
  i5334.timeScale = i5335[2]
  i5334.unscaledTimeScale = i5335[3]
  i5334.useSmoothDeltaTime = !!i5335[4]
  i5334.maxSmoothUnscaledTime = i5335[5]
  i5334.rewindCallbackMode = i5335[6]
  i5334.showUnityEditorReport = !!i5335[7]
  i5334.logBehaviour = i5335[8]
  i5334.drawGizmos = !!i5335[9]
  i5334.defaultRecyclable = !!i5335[10]
  i5334.defaultAutoPlay = i5335[11]
  i5334.defaultUpdateType = i5335[12]
  i5334.defaultTimeScaleIndependent = !!i5335[13]
  i5334.defaultEaseType = i5335[14]
  i5334.defaultEaseOvershootOrAmplitude = i5335[15]
  i5334.defaultEasePeriod = i5335[16]
  i5334.defaultAutoKill = !!i5335[17]
  i5334.defaultLoopType = i5335[18]
  i5334.debugMode = !!i5335[19]
  i5334.debugStoreTargetId = !!i5335[20]
  i5334.showPreviewPanel = !!i5335[21]
  i5334.storeSettingsLocation = i5335[22]
  i5334.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5335[23], i5334.modules)
  i5334.createASMDEF = !!i5335[24]
  i5334.showPlayingTweens = !!i5335[25]
  i5334.showPausedTweens = !!i5335[26]
  return i5334
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5336 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5337 = data
  i5336.logBehaviour = i5337[0]
  i5336.nestedTweenFailureBehaviour = i5337[1]
  return i5336
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5338 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5339 = data
  i5338.showPanel = !!i5339[0]
  i5338.audioEnabled = !!i5339[1]
  i5338.physicsEnabled = !!i5339[2]
  i5338.physics2DEnabled = !!i5339[3]
  i5338.spriteEnabled = !!i5339[4]
  i5338.uiEnabled = !!i5339[5]
  i5338.textMeshProEnabled = !!i5339[6]
  i5338.tk2DEnabled = !!i5339[7]
  i5338.deAudioEnabled = !!i5339[8]
  i5338.deUnityExtendedEnabled = !!i5339[9]
  i5338.epoOutlineEnabled = !!i5339[10]
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5341 = data
  var i5343 = i5341[0]
  var i5342 = []
  for(var i = 0; i < i5343.length; i += 1) {
    i5342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5343[i + 0]) );
  }
  i5340.files = i5342
  i5340.componentToPrefabIds = i5341[1]
  return i5340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5347 = data
  i5346.path = i5347[0]
  request.r(i5347[1], i5347[2], 0, i5346, 'unityObject')
  return i5346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5349 = data
  var i5351 = i5349[0]
  var i5350 = []
  for(var i = 0; i < i5351.length; i += 1) {
    i5350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5351[i + 0]) );
  }
  i5348.scriptsExecutionOrder = i5350
  var i5353 = i5349[1]
  var i5352 = []
  for(var i = 0; i < i5353.length; i += 1) {
    i5352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5353[i + 0]) );
  }
  i5348.sortingLayers = i5352
  var i5355 = i5349[2]
  var i5354 = []
  for(var i = 0; i < i5355.length; i += 1) {
    i5354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5355[i + 0]) );
  }
  i5348.cullingLayers = i5354
  i5348.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5349[3], i5348.timeSettings)
  i5348.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5349[4], i5348.physicsSettings)
  i5348.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5349[5], i5348.physics2DSettings)
  i5348.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5349[6], i5348.qualitySettings)
  i5348.enableRealtimeShadows = !!i5349[7]
  i5348.enableAutoInstancing = !!i5349[8]
  i5348.enableDynamicBatching = !!i5349[9]
  i5348.lightmapEncodingQuality = i5349[10]
  i5348.desiredColorSpace = i5349[11]
  var i5357 = i5349[12]
  var i5356 = []
  for(var i = 0; i < i5357.length; i += 1) {
    i5356.push( i5357[i + 0] );
  }
  i5348.allTags = i5356
  return i5348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5361 = data
  i5360.name = i5361[0]
  i5360.value = i5361[1]
  return i5360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5365 = data
  i5364.id = i5365[0]
  i5364.name = i5365[1]
  i5364.value = i5365[2]
  return i5364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5369 = data
  i5368.id = i5369[0]
  i5368.name = i5369[1]
  return i5368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5371 = data
  i5370.fixedDeltaTime = i5371[0]
  i5370.maximumDeltaTime = i5371[1]
  i5370.timeScale = i5371[2]
  i5370.maximumParticleTimestep = i5371[3]
  return i5370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5373 = data
  i5372.gravity = new pc.Vec3( i5373[0], i5373[1], i5373[2] )
  i5372.defaultSolverIterations = i5373[3]
  i5372.bounceThreshold = i5373[4]
  i5372.autoSyncTransforms = !!i5373[5]
  i5372.autoSimulation = !!i5373[6]
  var i5375 = i5373[7]
  var i5374 = []
  for(var i = 0; i < i5375.length; i += 1) {
    i5374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5375[i + 0]) );
  }
  i5372.collisionMatrix = i5374
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5379 = data
  i5378.enabled = !!i5379[0]
  i5378.layerId = i5379[1]
  i5378.otherLayerId = i5379[2]
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5381 = data
  request.r(i5381[0], i5381[1], 0, i5380, 'material')
  i5380.gravity = new pc.Vec2( i5381[2], i5381[3] )
  i5380.positionIterations = i5381[4]
  i5380.velocityIterations = i5381[5]
  i5380.velocityThreshold = i5381[6]
  i5380.maxLinearCorrection = i5381[7]
  i5380.maxAngularCorrection = i5381[8]
  i5380.maxTranslationSpeed = i5381[9]
  i5380.maxRotationSpeed = i5381[10]
  i5380.baumgarteScale = i5381[11]
  i5380.baumgarteTOIScale = i5381[12]
  i5380.timeToSleep = i5381[13]
  i5380.linearSleepTolerance = i5381[14]
  i5380.angularSleepTolerance = i5381[15]
  i5380.defaultContactOffset = i5381[16]
  i5380.autoSimulation = !!i5381[17]
  i5380.queriesHitTriggers = !!i5381[18]
  i5380.queriesStartInColliders = !!i5381[19]
  i5380.callbacksOnDisable = !!i5381[20]
  i5380.reuseCollisionCallbacks = !!i5381[21]
  i5380.autoSyncTransforms = !!i5381[22]
  var i5383 = i5381[23]
  var i5382 = []
  for(var i = 0; i < i5383.length; i += 1) {
    i5382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5383[i + 0]) );
  }
  i5380.collisionMatrix = i5382
  return i5380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5387 = data
  i5386.enabled = !!i5387[0]
  i5386.layerId = i5387[1]
  i5386.otherLayerId = i5387[2]
  return i5386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5389 = data
  var i5391 = i5389[0]
  var i5390 = []
  for(var i = 0; i < i5391.length; i += 1) {
    i5390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5391[i + 0]) );
  }
  i5388.qualityLevels = i5390
  var i5393 = i5389[1]
  var i5392 = []
  for(var i = 0; i < i5393.length; i += 1) {
    i5392.push( i5393[i + 0] );
  }
  i5388.names = i5392
  i5388.shadows = i5389[2]
  i5388.anisotropicFiltering = i5389[3]
  i5388.antiAliasing = i5389[4]
  i5388.lodBias = i5389[5]
  i5388.shadowCascades = i5389[6]
  i5388.shadowDistance = i5389[7]
  i5388.shadowmaskMode = i5389[8]
  i5388.shadowProjection = i5389[9]
  i5388.shadowResolution = i5389[10]
  i5388.softParticles = !!i5389[11]
  i5388.softVegetation = !!i5389[12]
  i5388.activeColorSpace = i5389[13]
  i5388.desiredColorSpace = i5389[14]
  i5388.masterTextureLimit = i5389[15]
  i5388.maxQueuedFrames = i5389[16]
  i5388.particleRaycastBudget = i5389[17]
  i5388.pixelLightCount = i5389[18]
  i5388.realtimeReflectionProbes = !!i5389[19]
  i5388.shadowCascade2Split = i5389[20]
  i5388.shadowCascade4Split = new pc.Vec3( i5389[21], i5389[22], i5389[23] )
  i5388.streamingMipmapsActive = !!i5389[24]
  i5388.vSyncCount = i5389[25]
  i5388.asyncUploadBufferSize = i5389[26]
  i5388.asyncUploadTimeSlice = i5389[27]
  i5388.billboardsFaceCameraPosition = !!i5389[28]
  i5388.shadowNearPlaneOffset = i5389[29]
  i5388.streamingMipmapsMemoryBudget = i5389[30]
  i5388.maximumLODLevel = i5389[31]
  i5388.streamingMipmapsAddAllCameras = !!i5389[32]
  i5388.streamingMipmapsMaxLevelReduction = i5389[33]
  i5388.streamingMipmapsRenderersPerFrame = i5389[34]
  i5388.resolutionScalingFixedDPIFactor = i5389[35]
  i5388.streamingMipmapsMaxFileIORequests = i5389[36]
  i5388.currentQualityLevel = i5389[37]
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5399 = data
  i5398.weight = i5399[0]
  i5398.vertices = i5399[1]
  i5398.normals = i5399[2]
  i5398.tangents = i5399[3]
  return i5398
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[2],"71":[24],"72":[43],"73":[43],"74":[43],"75":[43],"76":[43],"77":[43],"78":[43],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[24],"94":[7],"95":[96],"97":[96],"30":[12],"98":[12],"99":[7,12],"100":[12,15],"101":[12],"102":[15,12],"103":[7],"104":[15,12],"105":[12],"106":[107],"108":[12],"109":[12],"32":[30],"17":[15,12],"110":[12],"31":[30],"111":[12],"112":[12],"113":[12],"114":[12],"115":[12],"116":[12],"117":[12],"118":[12],"119":[12],"120":[15,12],"121":[12],"122":[12],"123":[12],"124":[12],"33":[15,12],"125":[12],"126":[28],"127":[28],"29":[28],"128":[28],"129":[24],"130":[24],"131":[107],"132":[107]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.MonoBehaviour","StackObject","UnityEngine.RectTransform","EndCard","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","FollowPosition","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Text","UnityEngine.Font","MoveByPath","DynamicJoystick","CharacterBehaviour","MoveByJoystick","CharacterAnimator","DetectPlaceComponent","StackControl","CharacterArrowTut","UnityEngine.Rigidbody","UnityEngine.SphereCollider","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider","CollectObjectPlace","TutController","KitchenPlace","UnityEngine.AudioSource","UnityEngine.AudioClip","PickupPlace","DinnerTable","CustomerController","CustomerAnimator","CashierTable","InstallPlace","UnityEngine.Cubemap","FixedJoystick","FloatingJoystick","VariableJoystick","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.24f1";

Deserializers.productName = "kitchen";

Deserializers.lunaInitializationTime = "05/08/2023 09:13:25";

Deserializers.lunaDaysRunning = "15.8";

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

Deserializers.buildID = "5e59698a-3725-42ca-82a1-03c7afbbf4fc";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

