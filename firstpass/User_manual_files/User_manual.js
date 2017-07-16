// Created by iWeb 3.0.4 local-build-20120111

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,361),url:'User_manual_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'User_manual_files/stroke_1.png'},{rect:new IWRect(2,-2,448,4),url:'User_manual_files/stroke_2.png'},{rect:new IWRect(450,-2,5,4),url:'User_manual_files/stroke_3.png'},{rect:new IWRect(450,2,5,361),url:'User_manual_files/stroke_4.png'},{rect:new IWRect(450,363,5,5),url:'User_manual_files/stroke_5.png'},{rect:new IWRect(2,363,448,5),url:'User_manual_files/stroke_6.png'},{rect:new IWRect(-2,363,4,5),url:'User_manual_files/stroke_7.png'}],new IWSize(452,365))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('User_manual_files/User_manualMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}
