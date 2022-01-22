var currentyear =  new Date().getFullYear();
var currentyear = currentyear+1;
var lastyear = currentyear-1;
var textstring = `{lastyear}-${currentyear} BracketProto &copy;$ All Rights Reserved.`;
document.getElementById('copytext').innerHTML = textstring;
