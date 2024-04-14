
if (typeof gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformation !== "undefined") {
  gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformation.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformation = {};


gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformation.userFunc0x8fbb50 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Task = eventsFunctionContext.task;
const URL = "https://ws.pandako.mydns.jp/" + runtimeScene.getGame().getGameData().properties.name;
const SceneVariable = eventsFunctionContext.getArgument("SceneVariableName");

(async () => {
    SceneVariable.fromJSObject(await (await fetch(URL)).json());
    Task.resolve();
})();


};
gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformation.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformation.userFunc0x8fbb50(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformation.func = function(runtimeScene, SceneVariableName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
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
if (argName === "SceneVariableName") return SceneVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformation.eventsList0(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__OnlineMultiplayer__RequestSceneInformation.registeredGdjsCallbacks = [];