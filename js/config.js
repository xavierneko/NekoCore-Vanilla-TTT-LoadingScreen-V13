/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "NekoCore Vanilla TTT Server";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/10.12-Sierra.jpg",
	"backgrounds/images/Scenicview.jpg",
	"backgrounds/images/561492.png",
	"backgrounds/images/nightgalaxy.jpg",
	"backgrounds/images/KitterKatSnow.jpg",
	"backgrounds/images/NightGalaxyCool.jpg",
	"backgrounds/images/Holiday.jpg",
	"backgrounds/images/IceMountianSnow.jpg",
	"backgrounds/images/IceMorningMountian.jpg",
	"backgrounds/images/GalaxyPlanetsSnow.jpg",
	"backgrounds/images/BigMountianMiddleGalaxy.jpg",
	"backgrounds/images/CoolGalaxyAuroa.jpg",
	"backgrounds/images/LoweringSunSnow.jpg",
	"backgrounds/images/treegreens.jpg",
	"backgrounds/images/nightfallaura.jpg",
	"backgrounds/images/auraamazing.jpg",
	"backgrounds/images/555691.jpg",
	"backgrounds/images/WinterMorningBliss.jpg",
	"backgrounds/images/NightMountainmysteries.jpg",
	"backgrounds/images/WaterMountian.png",
	"backgrounds/images/TownMountian.jpg",
	"backgrounds/images/mountiansnow.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "t2sxSdqilqQ", name: "Snail's House - Pixel Dream"},
	{youtube: "loTjjsDH2Js", name: "Snail's House - Ma Chouchoute"},
	{youtube: "r605IIE4Zvg", name: "Snail's House - First Love"},
	{youtube: "hz5lOilAqlQ", name: "Snail's House - My Story"},
	{youtube: "A29USr0jFqs", name: "Snail's House - Kirara"},
	{youtube: "ks2hGA1yV3Q", name: "Snail's House - Grape Soda"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Join us on Steam!",
"The Next Generation of Servers",
"Remember to read the rules when you join!",
"The fun is just about to start!"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;