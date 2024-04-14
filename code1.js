gdjs.Contrase_241asCode = {};
gdjs.Contrase_241asCode.GDContrase_95241asObjects1= [];
gdjs.Contrase_241asCode.GDContrase_95241asObjects2= [];
gdjs.Contrase_241asCode.GDContrase_95241as2Objects1= [];
gdjs.Contrase_241asCode.GDContrase_95241as2Objects2= [];
gdjs.Contrase_241asCode.GDUsuariosObjects1= [];
gdjs.Contrase_241asCode.GDUsuariosObjects2= [];


gdjs.Contrase_241asCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10858540);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Contraseñas2"), gdjs.Contrase_241asCode.GDContrase_95241as2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Usuarios"), gdjs.Contrase_241asCode.GDUsuariosObjects1);
{for(var i = 0, len = gdjs.Contrase_241asCode.GDContrase_95241as2Objects1.length ;i < len;++i) {
    gdjs.Contrase_241asCode.GDContrase_95241as2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.Contrase_241asCode.GDUsuariosObjects1.length ;i < len;++i) {
    gdjs.Contrase_241asCode.GDUsuariosObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "d01a33b4-e405-47e3-a95e-2ad19ac93efe", 0, "");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Contrase_241asCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Contrase_241asCode.GDContrase_95241asObjects1.length = 0;
gdjs.Contrase_241asCode.GDContrase_95241asObjects2.length = 0;
gdjs.Contrase_241asCode.GDContrase_95241as2Objects1.length = 0;
gdjs.Contrase_241asCode.GDContrase_95241as2Objects2.length = 0;
gdjs.Contrase_241asCode.GDUsuariosObjects1.length = 0;
gdjs.Contrase_241asCode.GDUsuariosObjects2.length = 0;

gdjs.Contrase_241asCode.eventsList0(runtimeScene);

return;

}

gdjs['Contrase_241asCode'] = gdjs.Contrase_241asCode;
