gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDFondo1Objects1= [];
gdjs.Untitled_32sceneCode.GDFondo1Objects2= [];
gdjs.Untitled_32sceneCode.GDBoton01Objects1= [];
gdjs.Untitled_32sceneCode.GDBoton01Objects2= [];
gdjs.Untitled_32sceneCode.GDNewTextInputObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextInputObjects2= [];
gdjs.Untitled_32sceneCode.GDEspaciodetexto01Objects1= [];
gdjs.Untitled_32sceneCode.GDEspaciodetexto01Objects2= [];
gdjs.Untitled_32sceneCode.GDEspaciodetexto02Objects1= [];
gdjs.Untitled_32sceneCode.GDEspaciodetexto02Objects2= [];
gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewTextInput2Objects2= [];
gdjs.Untitled_32sceneCode.GDLogoObjects1= [];
gdjs.Untitled_32sceneCode.GDLogoObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDImagenpaqueselocreaXDObjects1= [];
gdjs.Untitled_32sceneCode.GDImagenpaqueselocreaXDObjects2= [];
gdjs.Untitled_32sceneCode.GDConexionObjects1= [];
gdjs.Untitled_32sceneCode.GDConexionObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBoton01Objects1Objects = Hashtable.newFrom({"Boton01": gdjs.Untitled_32sceneCode.GDBoton01Objects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.Untitled_32sceneCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewTextInputObjects1[i].isFocused() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewTextInputObjects1[k] = gdjs.Untitled_32sceneCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Espaciodetexto01"), gdjs.Untitled_32sceneCode.GDEspaciodetexto01Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEspaciodetexto01Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEspaciodetexto01Objects1[i].getBehavior("Animation").setAnimationName("Toca");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput2"), gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1[i].isFocused() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1[k] = gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Espaciodetexto02"), gdjs.Untitled_32sceneCode.GDEspaciodetexto02Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEspaciodetexto02Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEspaciodetexto02Objects1[i].getBehavior("Animation").setAnimationName("Toca");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.Untitled_32sceneCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDNewTextInputObjects1[i].isFocused()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewTextInputObjects1[k] = gdjs.Untitled_32sceneCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Espaciodetexto01"), gdjs.Untitled_32sceneCode.GDEspaciodetexto01Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEspaciodetexto01Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEspaciodetexto01Objects1[i].getBehavior("Animation").setAnimationName("No");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput2"), gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1[i].isFocused()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1[k] = gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Espaciodetexto02"), gdjs.Untitled_32sceneCode.GDEspaciodetexto02Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEspaciodetexto02Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEspaciodetexto02Objects1[i].getBehavior("Animation").setAnimationName("No");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9701196);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Contraseñas", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boton01"), gdjs.Untitled_32sceneCode.GDBoton01Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBoton01Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9519164);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.Untitled_32sceneCode.GDNewTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTextInput2"), gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "d01a33b4-e405-47e3-a95e-2ad19ac93efe", 0, (( gdjs.Untitled_32sceneCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDNewTextInputObjects1[0].getText()) + "-" + (( gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1[0].getText()));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFondo1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDFondo1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBoton01Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBoton01Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextInputObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextInputObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEspaciodetexto01Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDEspaciodetexto01Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDEspaciodetexto02Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDEspaciodetexto02Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextInput2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextInput2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDImagenpaqueselocreaXDObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDImagenpaqueselocreaXDObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDConexionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDConexionObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
