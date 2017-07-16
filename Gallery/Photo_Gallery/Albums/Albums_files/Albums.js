// Created by iWeb 3.0.4 local-build-20120426

function createMediaStream_id2()
{return IWCreateMediaCollection("http://www.lightoncanvas.com/Photo_Gallery/Albums/Albums_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.lightoncanvas.com/Photo_Gallery/Albums',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget5'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.lightoncanvas.com/Photo_Gallery/Albums',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(282,211),new IWSize(282,32),new IWSize(312,258),27,27,0,new IWSize(89,74)),new IWPhotoFrame([IWCreateImage('Albums_files/spiralboook_ul.png'),IWCreateImage('Albums_files/spiralboook_top.png'),IWCreateImage('Albums_files/spiralboook_ur.png'),IWCreateImage('Albums_files/spiralboook_right.png'),IWCreateImage('Albums_files/spiralboook_lr.png'),IWCreateImage('Albums_files/spiralboook_bottom.png'),IWCreateImage('Albums_files/spiralboook_ll.png'),IWCreateImage('Albums_files/spiralboook_left.png')],null,1,0.800000,0.000000,10.000000,0.000000,19.000000,62.000000,49.000000,48.000000,72.000000,20.000000,1.000000,20.000000,1.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget5',null,'widget6',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_2:new IWStrokeParts([{rect:new IWRect(-1,1,2,85),url:'Albums_files/stroke_16.png'},{rect:new IWRect(-1,-1,2,2),url:'Albums_files/stroke_17.png'},{rect:new IWRect(1,-1,156,2),url:'Albums_files/stroke_18.png'},{rect:new IWRect(157,-1,2,2),url:'Albums_files/stroke_19.png'},{rect:new IWRect(157,1,2,85),url:'Albums_files/stroke_20.png'},{rect:new IWRect(157,86,2,2),url:'Albums_files/stroke_21.png'},{rect:new IWRect(1,86,156,2),url:'Albums_files/stroke_22.png'},{rect:new IWRect(-1,86,2,2),url:'Albums_files/stroke_23.png'}],new IWSize(158,87)),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,216),url:'Albums_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Albums_files/stroke_1.png'},{rect:new IWRect(2,-2,384,4),url:'Albums_files/stroke_2.png'},{rect:new IWRect(386,-2,5,4),url:'Albums_files/stroke_3.png'},{rect:new IWRect(386,2,5,216),url:'Albums_files/stroke_4.png'},{rect:new IWRect(386,218,5,4),url:'Albums_files/stroke_5.png'},{rect:new IWRect(2,218,384,4),url:'Albums_files/stroke_6.png'},{rect:new IWRect(-2,218,4,4),url:'Albums_files/stroke_7.png'}],new IWSize(388,220)),stroke_1:new IWStrokeParts([{rect:new IWRect(-2,2,4,107),url:'Albums_files/stroke_8.png'},{rect:new IWRect(-2,-2,4,4),url:'Albums_files/stroke_9.png'},{rect:new IWRect(2,-2,240,4),url:'Albums_files/stroke_10.png'},{rect:new IWRect(242,-2,4,4),url:'Albums_files/stroke_11.png'},{rect:new IWRect(242,2,4,107),url:'Albums_files/stroke_12.png'},{rect:new IWRect(242,109,4,4),url:'Albums_files/stroke_13.png'},{rect:new IWRect(2,109,240,4),url:'Albums_files/stroke_14.png'},{rect:new IWRect(-2,109,4,4),url:'Albums_files/stroke_15.png'}],new IWSize(244,111))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Albums_files/AlbumsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
