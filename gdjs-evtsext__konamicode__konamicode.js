
gdjs.evtsExt__KonamiCode__KonamiCode = gdjs.evtsExt__KonamiCode__KonamiCode || {};

/**
 * Behavior generated from Konami Code
 */
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode = class KonamiCode extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

// Methods:
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects4= [];

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition4IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition3IsTrue_1 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition4IsTrue_1 = {val:false};


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8598812);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) != "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8599876);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").setNumber(0);
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8603004);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) != "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8603876);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").setNumber(0);
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8609004);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Down";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8606996);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) != "Down";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8607868);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8613924);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Down";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8611916);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) != "Down";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8612788);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8618780);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Left";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8616772);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) != "Left";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8617644);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8623636);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Right";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8621628);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) != "Right";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8622500);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8628620);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Left";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8626612);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) != "Left";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8627484);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8633476);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Right";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8631468);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) != "Right";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8632340);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8638332);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "b";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8636324);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) != "b";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8637196);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8643228);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) == "a";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8641180);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_KeyPressed")) != "a";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8642324);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList16(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition3IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 0;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_LastKeyIsUp")) == "False";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition3IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8598356);
}
}}
}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition3IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 1;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8601116);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 2;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8602268);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 3;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8605092);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 4;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8606260);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 5;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8609948);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 6;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8611180);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 7;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8614868);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 8;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8616036);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 9;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8619724);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 10;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8620892);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 11;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8624708);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 12;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8625876);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 13;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8629564);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 14;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8630732);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 15;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8634420);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 16;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8635588);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 17;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8639276);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 18;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8640444);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList17(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 19;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8644172);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").add(1);
}{runtimeScene.getVariables().get("KC_IsCompleted").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8592268);
}
}if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}{runtimeScene.getVariables().get("KC").setNumber(0);
}{runtimeScene.getVariables().get("KC_IsCompleted").setString("False");
}{runtimeScene.getVariables().get("KC_LastKeyIsUp").setString("False");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


{
{runtimeScene.getVariables().get("KC_KeyPressed").setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("KC")) == 0;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8593972);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_LastKeyIsUp")) == "True";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8595196);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC_KeyPressed").setString("NoDirection");
}{runtimeScene.getVariables().get("KC_LastKeyIsUp").setString("False");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "KC_InputTimer");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8596628);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("KC").setNumber(0);
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList18(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList19(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList20(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext = {};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects2= [];

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("KC_IsCompleted")) == "True";
}if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{for(var i = 0, len = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_Inputted = function(parentEventsFunctionContext) {

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
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("KonamiCode::KonamiCode", gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode);
