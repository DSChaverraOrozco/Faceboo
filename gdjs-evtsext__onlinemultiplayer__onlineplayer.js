
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer || {};

/**
 * Behavior generated from Online Player
 */
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer = class OnlinePlayer extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.FirstFrame = true;
    this._behaviorData.Position = behaviorData.Position !== undefined ? behaviorData.Position : true;
    this._behaviorData.Angle = behaviorData.Angle !== undefined ? behaviorData.Angle : true;
    this._behaviorData.ZOrder = behaviorData.ZOrder !== undefined ? behaviorData.ZOrder : false;
    this._behaviorData.Animation = behaviorData.Animation !== undefined ? behaviorData.Animation : false;
    this._behaviorData.Frame = behaviorData.Frame !== undefined ? behaviorData.Frame : false;
    this._behaviorData.Flip = behaviorData.Flip !== undefined ? behaviorData.Flip : false;
    this._behaviorData.UserName = behaviorData.UserName !== undefined ? behaviorData.UserName : false;
    this._behaviorData.PositionInterpolation = behaviorData.PositionInterpolation !== undefined ? behaviorData.PositionInterpolation : false;
    this._behaviorData.Id = "";
    this._behaviorData.Active = true;
    this._behaviorData.SharedString = "";
    this._behaviorData.SharedStringClear = false;
    this._behaviorData.GDUserName = "";
    this._behaviorData.ConnectedFrameCounter = Number("0") || 0;
    this._behaviorData.DisconnectedFrameCounter = Number("0") || 0;
    this._behaviorData.SentReceivedJustNow = false;
    this._behaviorData.Tween = behaviorData.Tween !== undefined ? behaviorData.Tween : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.FirstFrame !== newBehaviorData.FirstFrame)
      this._behaviorData.FirstFrame = newBehaviorData.FirstFrame;
    if (oldBehaviorData.Position !== newBehaviorData.Position)
      this._behaviorData.Position = newBehaviorData.Position;
    if (oldBehaviorData.Angle !== newBehaviorData.Angle)
      this._behaviorData.Angle = newBehaviorData.Angle;
    if (oldBehaviorData.ZOrder !== newBehaviorData.ZOrder)
      this._behaviorData.ZOrder = newBehaviorData.ZOrder;
    if (oldBehaviorData.Animation !== newBehaviorData.Animation)
      this._behaviorData.Animation = newBehaviorData.Animation;
    if (oldBehaviorData.Frame !== newBehaviorData.Frame)
      this._behaviorData.Frame = newBehaviorData.Frame;
    if (oldBehaviorData.Flip !== newBehaviorData.Flip)
      this._behaviorData.Flip = newBehaviorData.Flip;
    if (oldBehaviorData.UserName !== newBehaviorData.UserName)
      this._behaviorData.UserName = newBehaviorData.UserName;
    if (oldBehaviorData.PositionInterpolation !== newBehaviorData.PositionInterpolation)
      this._behaviorData.PositionInterpolation = newBehaviorData.PositionInterpolation;
    if (oldBehaviorData.Id !== newBehaviorData.Id)
      this._behaviorData.Id = newBehaviorData.Id;
    if (oldBehaviorData.Active !== newBehaviorData.Active)
      this._behaviorData.Active = newBehaviorData.Active;
    if (oldBehaviorData.SharedString !== newBehaviorData.SharedString)
      this._behaviorData.SharedString = newBehaviorData.SharedString;
    if (oldBehaviorData.SharedStringClear !== newBehaviorData.SharedStringClear)
      this._behaviorData.SharedStringClear = newBehaviorData.SharedStringClear;
    if (oldBehaviorData.GDUserName !== newBehaviorData.GDUserName)
      this._behaviorData.GDUserName = newBehaviorData.GDUserName;
    if (oldBehaviorData.ConnectedFrameCounter !== newBehaviorData.ConnectedFrameCounter)
      this._behaviorData.ConnectedFrameCounter = newBehaviorData.ConnectedFrameCounter;
    if (oldBehaviorData.DisconnectedFrameCounter !== newBehaviorData.DisconnectedFrameCounter)
      this._behaviorData.DisconnectedFrameCounter = newBehaviorData.DisconnectedFrameCounter;
    if (oldBehaviorData.SentReceivedJustNow !== newBehaviorData.SentReceivedJustNow)
      this._behaviorData.SentReceivedJustNow = newBehaviorData.SentReceivedJustNow;
    if (oldBehaviorData.Tween !== newBehaviorData.Tween)
      this._behaviorData.Tween = newBehaviorData.Tween;

    return true;
  }

  // Properties:
  
  _getFirstFrame() {
    return this._behaviorData.FirstFrame !== undefined ? this._behaviorData.FirstFrame : true;
  }
  _setFirstFrame(newValue) {
    this._behaviorData.FirstFrame = newValue;
  }
  _toggleFirstFrame() {
    this._setFirstFrame(!this._getFirstFrame());
  }
  _getPosition() {
    return this._behaviorData.Position !== undefined ? this._behaviorData.Position : true;
  }
  _setPosition(newValue) {
    this._behaviorData.Position = newValue;
  }
  _togglePosition() {
    this._setPosition(!this._getPosition());
  }
  _getAngle() {
    return this._behaviorData.Angle !== undefined ? this._behaviorData.Angle : true;
  }
  _setAngle(newValue) {
    this._behaviorData.Angle = newValue;
  }
  _toggleAngle() {
    this._setAngle(!this._getAngle());
  }
  _getZOrder() {
    return this._behaviorData.ZOrder !== undefined ? this._behaviorData.ZOrder : false;
  }
  _setZOrder(newValue) {
    this._behaviorData.ZOrder = newValue;
  }
  _toggleZOrder() {
    this._setZOrder(!this._getZOrder());
  }
  _getAnimation() {
    return this._behaviorData.Animation !== undefined ? this._behaviorData.Animation : false;
  }
  _setAnimation(newValue) {
    this._behaviorData.Animation = newValue;
  }
  _toggleAnimation() {
    this._setAnimation(!this._getAnimation());
  }
  _getFrame() {
    return this._behaviorData.Frame !== undefined ? this._behaviorData.Frame : false;
  }
  _setFrame(newValue) {
    this._behaviorData.Frame = newValue;
  }
  _toggleFrame() {
    this._setFrame(!this._getFrame());
  }
  _getFlip() {
    return this._behaviorData.Flip !== undefined ? this._behaviorData.Flip : false;
  }
  _setFlip(newValue) {
    this._behaviorData.Flip = newValue;
  }
  _toggleFlip() {
    this._setFlip(!this._getFlip());
  }
  _getUserName() {
    return this._behaviorData.UserName !== undefined ? this._behaviorData.UserName : false;
  }
  _setUserName(newValue) {
    this._behaviorData.UserName = newValue;
  }
  _toggleUserName() {
    this._setUserName(!this._getUserName());
  }
  _getPositionInterpolation() {
    return this._behaviorData.PositionInterpolation !== undefined ? this._behaviorData.PositionInterpolation : false;
  }
  _setPositionInterpolation(newValue) {
    this._behaviorData.PositionInterpolation = newValue;
  }
  _togglePositionInterpolation() {
    this._setPositionInterpolation(!this._getPositionInterpolation());
  }
  _getId() {
    return this._behaviorData.Id !== undefined ? this._behaviorData.Id : "";
  }
  _setId(newValue) {
    this._behaviorData.Id = newValue;
  }
  _getActive() {
    return this._behaviorData.Active !== undefined ? this._behaviorData.Active : true;
  }
  _setActive(newValue) {
    this._behaviorData.Active = newValue;
  }
  _toggleActive() {
    this._setActive(!this._getActive());
  }
  _getSharedString() {
    return this._behaviorData.SharedString !== undefined ? this._behaviorData.SharedString : "";
  }
  _setSharedString(newValue) {
    this._behaviorData.SharedString = newValue;
  }
  _getSharedStringClear() {
    return this._behaviorData.SharedStringClear !== undefined ? this._behaviorData.SharedStringClear : false;
  }
  _setSharedStringClear(newValue) {
    this._behaviorData.SharedStringClear = newValue;
  }
  _toggleSharedStringClear() {
    this._setSharedStringClear(!this._getSharedStringClear());
  }
  _getGDUserName() {
    return this._behaviorData.GDUserName !== undefined ? this._behaviorData.GDUserName : "";
  }
  _setGDUserName(newValue) {
    this._behaviorData.GDUserName = newValue;
  }
  _getConnectedFrameCounter() {
    return this._behaviorData.ConnectedFrameCounter !== undefined ? this._behaviorData.ConnectedFrameCounter : Number("0") || 0;
  }
  _setConnectedFrameCounter(newValue) {
    this._behaviorData.ConnectedFrameCounter = newValue;
  }
  _getDisconnectedFrameCounter() {
    return this._behaviorData.DisconnectedFrameCounter !== undefined ? this._behaviorData.DisconnectedFrameCounter : Number("0") || 0;
  }
  _setDisconnectedFrameCounter(newValue) {
    this._behaviorData.DisconnectedFrameCounter = newValue;
  }
  _getSentReceivedJustNow() {
    return this._behaviorData.SentReceivedJustNow !== undefined ? this._behaviorData.SentReceivedJustNow : false;
  }
  _setSentReceivedJustNow(newValue) {
    this._behaviorData.SentReceivedJustNow = newValue;
  }
  _toggleSentReceivedJustNow() {
    this._setSentReceivedJustNow(!this._getSentReceivedJustNow());
  }
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
}

/**
 * Shared data generated from Online Player
 */
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.SharedData = class OnlinePlayerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._OnlineMultiplayer_OnlinePlayerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._OnlineMultiplayer_OnlinePlayerSharedData = new gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.SharedData(
      initialData
    );
  }
  return instanceContainer._OnlineMultiplayer_OnlinePlayerSharedData;
}

// Methods:
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.userFunc0xa83c58 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
function _0x2c07(){const _0x6cb144=['flipX','Frame','error','playerAuthentication','flipY','Angle','{\x22Type\x22:\x22Connect\x22,\x20\x22Game\x22:\x22','_setFirstFrame','_getAnimation','_getDisconnectedFrameCounter','_setActive','_getFlip','Animation','isFlippedY','getName','_getFirstFrame','set','Players','SetSharedString','roundTo','getGameData','_setId','data','Connected','getZOrder','8872944gobxND','addObjectAngleTween','getAnimationFrame','Rejected','getAnimation','3gsaiao','_getId','deleteFromScene','exists','setAnimationFrame','Received\x20unexpected\x20data!','setY','name','parse','length','_getPositionInterpolation','wss://ws.pandako.mydns.jp/','_getPosition','Data','937538HnGPdD','push','_OnlineMultiplayer','Do\x20not\x20create\x20more\x20than\x20one!','open','4685LGtNgh','common','3368428OVPRtf','Error','getTimerElapsedTimeInSeconds','\x22,\x20\x22Scene\x22:\x20\x22','_getConnectedFrameCounter','removeTween','warn','_OnlineMultiplayerTimer','getBehavior','getUsername','evtTools','Shared\x20string\x20exceeds\x20','Message','ObjectName','resetTimer','addEventListener','stringify','send','Tween','now','ZOrder','linear','Type','_setGDUserName','has','1482420NNQHqP','getY','createObject','_getAngle','properties','_OnlineMultiplayerPositionTween','readyState','LastReceivedTime','9CpjKZf','OnlinePlayer','_setConnectedFrameCounter','10675258XzvyVs','setAngle','get','1191806pZeKgq','SetFlip','The\x20extension\x20was\x20rejected\x20by\x20the\x20server\x20because\x20it\x20is\x20an\x20old\x20version!','7746tyyfiu','_getFrame','setZOrder','_setSentReceivedJustNow','Random','3fBwMOn','GetFlipNum','SharedString','Flip','UserName','Update','setAnimation','Log','close','_OnlineMultiplayerAngleTween','_setDisconnectedFrameCounter'];_0x2c07=function(){return _0x6cb144;};return _0x2c07();}function _0x3213(_0x17e2f6,_0x513640){const _0x2c0760=_0x2c07();return _0x3213=function(_0x3213dd,_0xc75397){_0x3213dd=_0x3213dd-0x72;let _0x13b0db=_0x2c0760[_0x3213dd];return _0x13b0db;},_0x3213(_0x17e2f6,_0x513640);}(function(_0x3209c7,_0x55acf1){const _0x2b89d9=_0x3213,_0x398d8b=_0x3209c7();while(!![]){try{const _0x512b5f=parseInt(_0x2b89d9(0xc1))/0x1*(parseInt(_0x2b89d9(0x8b))/0x2)+-parseInt(_0x2b89d9(0x7d))/0x3*(-parseInt(_0x2b89d9(0x92))/0x4)+parseInt(_0x2b89d9(0x90))/0x5*(-parseInt(_0x2b89d9(0xbc))/0x6)+-parseInt(_0x2b89d9(0xb9))/0x7+-parseInt(_0x2b89d9(0x78))/0x8+-parseInt(_0x2b89d9(0xb3))/0x9*(-parseInt(_0x2b89d9(0xab))/0xa)+parseInt(_0x2b89d9(0xb6))/0xb;if(_0x512b5f===_0x55acf1)break;else _0x398d8b['push'](_0x398d8b['shift']());}catch(_0x16be3b){_0x398d8b['push'](_0x398d8b['shift']());}}}(_0x2c07,0xd660b),((()=>{const _0x43ca19=_0x3213,_0x19f0a6=objects[0x0],_0xde86a9=_0x19f0a6[_0x43ca19(0x9a)](_0x43ca19(0xb4));if(_0xde86a9['_getActive']()){if(_0xde86a9[_0x43ca19(0xdb)]()){_0xde86a9[_0x43ca19(0xd3)](![]);if(runtimeScene['getInstancesCountOnScene'](_0x19f0a6['name'])>0x1){_0x19f0a6[_0x43ca19(0x7f)](runtimeScene),console[_0x43ca19(0x98)](_0x43ca19(0x8e));return;}if(gdjs[_0x43ca19(0x8d)]){_0x19f0a6[_0x43ca19(0x7f)](runtimeScene),console[_0x43ca19(0x98)]('Do\x20not\x20create\x20more\x20than\x20one!');return;}gdjs['_OnlineMultiplayer']=new Map(),gdjs[_0x43ca19(0x8d)][_0x43ca19(0xdc)]('WS',new WebSocket(_0x43ca19(0x88))),gdjs[_0x43ca19(0x8d)][_0x43ca19(0xdc)](_0x43ca19(0xc8),[]),gdjs[_0x43ca19(0x8d)][_0x43ca19(0xdc)]('Id',''),gdjs['_OnlineMultiplayer'][_0x43ca19(0xdc)](_0x43ca19(0x9e),{}),gdjs[_0x43ca19(0x8d)]['set'](_0x43ca19(0xc0),-0x1),gdjs[_0x43ca19(0x8d)]['set']('T',12.3/0x7b),gdjs[_0x43ca19(0x8d)][_0x43ca19(0xdc)]('L',0x300c/0x7b),gdjs[_0x43ca19(0x8d)][_0x43ca19(0xdc)](_0x43ca19(0xb2),Date[_0x43ca19(0xa5)]()),gdjs[_0x43ca19(0x8d)][_0x43ca19(0xdc)](_0x43ca19(0xdd),new Map()),gdjs[_0x43ca19(0x8d)][_0x43ca19(0xdc)]('GetFlipNum',(_0x1a7fa4,_0xebcf59)=>{let _0x1085b7=0x0;return _0x1085b7+=_0x1a7fa4?0x1:0x0,_0x1085b7+=_0xebcf59?0x2:0x0,_0x1085b7;}),gdjs[_0x43ca19(0x8d)]['set']('SetFlip',(_0x40fdd2,_0x25039b)=>{const _0x19886e=_0x43ca19;_0x40fdd2[_0x19886e(0xcc)](![]),_0x40fdd2[_0x19886e(0xd0)](![]),(_0x25039b==0x1||_0x25039b==0x3)&&_0x40fdd2[_0x19886e(0xcc)](!![]),(_0x25039b==0x2||_0x25039b==0x3)&&_0x40fdd2[_0x19886e(0xd0)](!![]);}),gdjs[_0x43ca19(0x8d)][_0x43ca19(0xdc)](_0x43ca19(0x93),![]);const _0x340bea=gdjs[_0x43ca19(0x8d)]['get']('WS');_0x340bea[_0x43ca19(0xa1)](_0x43ca19(0x8f),_0x47fa8a=>{const _0x305852=_0x43ca19;_0x340bea[_0x305852(0xa3)](_0x305852(0xd2)+runtimeScene['getGame']()[_0x305852(0x73)]()[_0x305852(0xaf)][_0x305852(0x84)]+_0x305852(0x95)+runtimeScene[_0x305852(0xda)]()+'\x22,\x20\x22ObjectName\x22:\x20\x22'+_0x19f0a6[_0x305852(0x84)]+'\x22,\x20\x22Ver\x22:10}');}),_0x340bea[_0x43ca19(0xa1)]('message',_0x2fc517=>{const _0x2dedd8=_0x43ca19,_0x454844=JSON[_0x2dedd8(0x85)](_0x2fc517[_0x2dedd8(0x75)]),_0x27a2c3=gdjs[_0x2dedd8(0x8d)][_0x2dedd8(0xb8)](_0x2dedd8(0xc8));if(_0x454844['Type']==_0x2dedd8(0x76))gdjs[_0x2dedd8(0x8d)][_0x2dedd8(0xdc)]('Id',_0x454844['Id']),_0xde86a9[_0x2dedd8(0x74)](_0x454844['Id']);else _0x454844[_0x2dedd8(0xa8)]==_0x2dedd8(0x7b)?(console['warn'](_0x2dedd8(0xbb)),_0x340bea[_0x2dedd8(0xc9)](),gdjs[_0x2dedd8(0x8d)][_0x2dedd8(0xdc)]('Error',!![])):_0x27a2c3[_0x2dedd8(0x8c)](_0x454844);gdjs[_0x2dedd8(0x8d)][_0x2dedd8(0xdc)](_0x2dedd8(0xb2),Date[_0x2dedd8(0xa5)]());}),_0x340bea[_0x43ca19(0xa1)](_0x43ca19(0xce),_0x5afcef=>{const _0x148b6a=_0x43ca19;gdjs[_0x148b6a(0x8d)][_0x148b6a(0xdc)](_0x148b6a(0x93),!![]);}),_0x340bea[_0x43ca19(0xa1)]('close',_0x9cada4=>{}),_0x19f0a6[_0x43ca19(0xa0)](_0x43ca19(0x99));}if(!gdjs[_0x43ca19(0x8d)]){_0xde86a9[_0x43ca19(0xcb)](_0xde86a9[_0x43ca19(0xd5)]()+0x1);return;}const _0x56b6b6=gdjs[_0x43ca19(0x8d)][_0x43ca19(0xb8)]('WS');let _0x536395=gdjs[_0x43ca19(0x8d)]['get'](_0x43ca19(0xc8));const _0x3e241a=gdjs['_OnlineMultiplayer'][_0x43ca19(0xb8)](_0x43ca19(0xdd)),_0x548f89=new Map();_0xde86a9[_0x43ca19(0xbf)](![]);for(let [_0x2cfbed,_0x42258a]of _0x3e241a){_0x42258a[_0x43ca19(0x9a)](_0x43ca19(0xb4))[_0x43ca19(0xbf)](![]);}if(_0x56b6b6[_0x43ca19(0xb1)]==0x0)return;else{if(_0x56b6b6[_0x43ca19(0xb1)]>=0x2){_0xde86a9[_0x43ca19(0xcb)](_0xde86a9['_getDisconnectedFrameCounter']()+0x1);_0xde86a9[_0x43ca19(0xd5)]()>0x1&&(gdjs[_0x43ca19(0x8d)]=undefined);return;}else{if(_0xde86a9[_0x43ca19(0x7e)]()==='')return;}}_0xde86a9['_setConnectedFrameCounter'](_0xde86a9[_0x43ca19(0x96)]()+0x1);if(gdjs['_OnlineMultiplayer'][_0x43ca19(0xb8)](_0x43ca19(0xb2))+0x1388<Date[_0x43ca19(0xa5)]()){_0x56b6b6[_0x43ca19(0xc9)]();return;}for(const _0x2eff43 of _0x536395){if(_0x2eff43['Type']==_0x43ca19(0xc6)){gdjs[_0x43ca19(0x8d)]['set'](_0x43ca19(0xc0),_0x2eff43[_0x43ca19(0xc0)]);for(const _0x244794 of _0x2eff43[_0x43ca19(0x8a)]){_0x548f89[_0x43ca19(0xdc)](_0x244794['Id'],'');if(gdjs[_0x43ca19(0x8d)][_0x43ca19(0xb8)]('Id')!==_0x244794['Id']){let _0x297749;_0x3e241a[_0x43ca19(0xaa)](_0x244794['Id'])?_0x297749=_0x3e241a['get'](_0x244794['Id']):(_0x297749=runtimeScene[_0x43ca19(0xad)](_0x244794[_0x43ca19(0x9f)]),_0x297749['getBehavior']('OnlinePlayer')[_0x43ca19(0xd6)](![]),_0x297749[_0x43ca19(0x9a)]('OnlinePlayer')[_0x43ca19(0x74)](_0x244794['Id']),_0x297749[_0x43ca19(0xbe)](runtimeScene['getLayer']('')['getDefaultZOrder']()),_0x3e241a[_0x43ca19(0xdc)](_0x244794['Id'],_0x297749));_0x297749['getBehavior']('OnlinePlayer')[_0x43ca19(0xbf)](!![]);if(_0x244794['X']!==undefined){if(_0x297749[_0x43ca19(0x9a)]('OnlinePlayer')[_0x43ca19(0x87)]()){const _0x1f51ef=_0x297749[_0x43ca19(0x9a)]('Tween');_0x1f51ef[_0x43ca19(0x80)](_0x43ca19(0xb0))&&_0x1f51ef[_0x43ca19(0x97)](_0x43ca19(0xb0)),_0x1f51ef['addObjectPositionTween'](_0x43ca19(0xb0),_0x244794['X'],_0x244794['Y'],_0x43ca19(0xa7),gdjs[_0x43ca19(0x8d)][_0x43ca19(0xb8)]('T')*0x3e8,![]);}else _0x297749['setX'](_0x244794['X']),_0x297749[_0x43ca19(0x83)](_0x244794['Y']);}if(_0x244794['Angle']!==undefined){if(_0x297749['getBehavior'](_0x43ca19(0xb4))[_0x43ca19(0x87)]()){const _0x20f6aa=_0x297749[_0x43ca19(0x9a)](_0x43ca19(0xa4));_0x20f6aa[_0x43ca19(0x80)](_0x43ca19(0xca))&&_0x20f6aa[_0x43ca19(0x97)]('_OnlineMultiplayerAngleTween'),_0x20f6aa[_0x43ca19(0x79)]('_OnlineMultiplayerAngleTween',_0x244794[_0x43ca19(0xd1)],_0x43ca19(0xa7),gdjs[_0x43ca19(0x8d)][_0x43ca19(0xb8)]('T')*0x3e8,![]);}else _0x297749[_0x43ca19(0xb7)](_0x244794[_0x43ca19(0xd1)]);}_0x244794[_0x43ca19(0xa6)]!==undefined&&_0x297749[_0x43ca19(0xbe)](_0x244794[_0x43ca19(0xa6)]),_0x244794['Animation']!==undefined&&_0x297749[_0x43ca19(0xc7)](_0x244794[_0x43ca19(0xd8)]),_0x244794['Frame']!==undefined&&_0x297749[_0x43ca19(0x81)](_0x244794[_0x43ca19(0xcd)]),_0x244794[_0x43ca19(0xc4)]!==undefined&&gdjs['_OnlineMultiplayer']['get'](_0x43ca19(0xba))(_0x297749,_0x244794['Flip']),_0x244794['UserName']!==undefined&&_0x297749[_0x43ca19(0x9a)](_0x43ca19(0xb4))['_setGDUserName'](_0x244794['UserName']),_0x244794[_0x43ca19(0xc3)]!==undefined&&_0x297749[_0x43ca19(0x9a)](_0x43ca19(0xb4))['SetSharedString'](_0x244794['SharedString']);}}}else console[_0x43ca19(0x98)](_0x43ca19(0x82));}if(_0x536395['length']>0x0)for(let [_0x3773ec,_0x4df7d9]of _0x3e241a){!_0x548f89[_0x43ca19(0xaa)](_0x3773ec)&&_0x3e241a['delete'](_0x3773ec);}gdjs['_OnlineMultiplayer'][_0x43ca19(0xdc)](_0x43ca19(0xc8),[]);if(gdjs[_0x43ca19(0x8d)][_0x43ca19(0xb8)]('Id')=='')return;if(_0x19f0a6[_0x43ca19(0x94)](_0x43ca19(0x99))<gdjs[_0x43ca19(0x8d)][_0x43ca19(0xb8)]('T'))return;_0x19f0a6['resetTimer']('_OnlineMultiplayerTimer');const _0x7ede4e=gdjs[_0x43ca19(0x8d)][_0x43ca19(0xb8)](_0x43ca19(0x9e));_0xde86a9[_0x43ca19(0x89)]()&&(_0x7ede4e['X']=gdjs['evtTools'][_0x43ca19(0x91)][_0x43ca19(0x72)](_0x19f0a6['getX'](),0x2),_0x7ede4e['Y']=gdjs[_0x43ca19(0x9c)][_0x43ca19(0x91)]['roundTo'](_0x19f0a6[_0x43ca19(0xac)](),0x2));_0xde86a9[_0x43ca19(0xae)]()&&(_0x7ede4e[_0x43ca19(0xd1)]=gdjs[_0x43ca19(0x9c)][_0x43ca19(0x91)][_0x43ca19(0x72)](_0x19f0a6['getAngle'](),0x2));_0xde86a9['_getZOrder']()&&(_0x7ede4e[_0x43ca19(0xa6)]=_0x19f0a6[_0x43ca19(0x77)]());_0xde86a9[_0x43ca19(0xd4)]()&&(_0x7ede4e[_0x43ca19(0xd8)]=_0x19f0a6[_0x43ca19(0x7c)]());_0xde86a9[_0x43ca19(0xbd)]()&&(_0x7ede4e[_0x43ca19(0xcd)]=_0x19f0a6[_0x43ca19(0x7a)]());_0xde86a9[_0x43ca19(0xd7)]()&&(_0x7ede4e['Flip']=gdjs[_0x43ca19(0x8d)][_0x43ca19(0xb8)](_0x43ca19(0xc2))(_0x19f0a6['isFlippedX'](),_0x19f0a6[_0x43ca19(0xd9)]()));gdjs[_0x43ca19(0xcf)]&&_0xde86a9['_getUserName']()&&(_0xde86a9[_0x43ca19(0xa9)](gdjs[_0x43ca19(0xcf)][_0x43ca19(0x9b)]()),_0x7ede4e[_0x43ca19(0xc5)]=gdjs[_0x43ca19(0xcf)][_0x43ca19(0x9b)]());if(Object['keys'](_0x7ede4e)[_0x43ca19(0x86)]==0x0)return;_0x7ede4e[_0x43ca19(0xa8)]='Update',_0xde86a9[_0x43ca19(0xc3)]()[_0x43ca19(0x86)]>gdjs[_0x43ca19(0x8d)][_0x43ca19(0xb8)]('L')&&(_0xde86a9[_0x43ca19(0xde)](''),console['warn'](_0x43ca19(0x9d)+gdjs[_0x43ca19(0x8d)][_0x43ca19(0xb8)]('L')+'\x20characters!')),_0x7ede4e[_0x43ca19(0xc3)]=_0xde86a9[_0x43ca19(0xc3)](),_0xde86a9[_0x43ca19(0xbf)](!![]),_0x56b6b6['send'](JSON[_0x43ca19(0xa2)](_0x7ede4e)),gdjs['_OnlineMultiplayer'][_0x43ca19(0xdc)]('Message',{}),_0xde86a9['_getSharedStringClear']()&&_0xde86a9[_0x43ca19(0xde)]('');}else{_0xde86a9[_0x43ca19(0xdb)]()&&_0xde86a9['_setFirstFrame'](![]);if(gdjs['_OnlineMultiplayer']){const _0x43ea60=gdjs[_0x43ca19(0x8d)][_0x43ca19(0xb8)]('Players'),_0x5485bd=_0x43ea60['has'](_0xde86a9[_0x43ca19(0x7e)]());_0x5485bd?_0xde86a9[_0x43ca19(0xb5)](_0xde86a9['_getConnectedFrameCounter']()+0x1):_0xde86a9[_0x43ca19(0xcb)](_0xde86a9[_0x43ca19(0xd5)]()+0x1);}else _0xde86a9[_0x43ca19(0xcb)](_0xde86a9[_0x43ca19(0xd5)]()+0x1);}})()));
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.userFunc0xa83c58(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.userFunc0x945988 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        const WS = gdjs._OnlineMultiplayer.get("WS");
        WS.close();
        gdjs._OnlineMultiplayer = undefined;
    }
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.userFunc0x945988(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSharedString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("String") : ""));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Clear") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSharedStringClear(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Clear") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSharedStringClear(false);
}
}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedString = function(String, Clear, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "String") return String;
if (argName === "Clear") return Clear;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Interpolate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPositionInterpolation(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Interpolate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPositionInterpolation(true);
}
}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolation = function(Interpolate, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Interpolate") return Interpolate;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.userFunc0xa42780 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        const WS = gdjs._OnlineMultiplayer.get("WS");
        WS.close();
    }
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.userFunc0xa42780(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.Disconnect = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.userFunc0x94a478 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
const Status = eventsFunctionContext.getArgument("Status");
eventsFunctionContext.returnValue = false;
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        const WS = gdjs._OnlineMultiplayer.get("WS");
        if (Status == "Before connection" && WS.readyState === 0) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Before connection" && WS.readyState === 1 && Behavior._getConnectedFrameCounter() < 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Connected just now" && WS.readyState === 1 && Behavior._getConnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Connected" && WS.readyState === 1 && Behavior._getConnectedFrameCounter() >= 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected just now" && WS.readyState >= 2 && Behavior._getDisconnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected" && WS.readyState >= 2) {
            eventsFunctionContext.returnValue = true;
        }
    } else {
        if (Status == "Before connection") {
            eventsFunctionContext.returnValue = true;
        }
    }
} else {
    if (gdjs._OnlineMultiplayer) {
        const Players = gdjs._OnlineMultiplayer.get("Players");
        const Has = Players.has(Behavior._getId());
        if (Status == "Connected just now" && Has && Behavior._getFirstFrame()) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Connected" && Has) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected just now" && !Has && Behavior._getDisconnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected" && !Has) {
            eventsFunctionContext.returnValue = true;
        }
    } else {
        if (Status == "Disconnected just now" && Behavior._getDisconnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected") {
            eventsFunctionContext.returnValue = true;
        }
    }
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.userFunc0x94a478(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatus = function(Status, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Status") return Status;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActive()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActive() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMe = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.userFunc0x94a418 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
eventsFunctionContext.returnValue = false;
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        eventsFunctionContext.returnValue = gdjs._OnlineMultiplayer.get("Error");
    }
}


};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.userFunc0x94a418(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurred = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSentReceivedJustNow() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNow = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SentReceivedJustNowContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()); }}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineID = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSharedString()); }}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedString = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGDUserName()); }}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserName = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.GDUserNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.userFunc0x94ac70 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._OnlineMultiplayer) {
    eventsFunctionContext.returnValue = gdjs._OnlineMultiplayer.get("Random");
} else {
    eventsFunctionContext.returnValue = -1;
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.userFunc0x94ac70(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfScene = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("OnlineMultiplayer::OnlinePlayer", gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer);
