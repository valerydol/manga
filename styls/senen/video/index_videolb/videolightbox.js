// -----------------------------------------------------------------------------------
//
// VideoLightBox for jQuery
// http://videolightbox.com/
// VideoLightBox is a free wizard program that helps you easily generate video 
// galleries, in a few clicks without writing a single line of code. For Windows and Mac!
// Last updated: 2012-03-14
//
if(!window.videoLightBox){(function(a){window.videoLightBox=function(c){var b="video_overlay";if(!a("#voverlay").length){a("body").prepend("<div id='voverlay'><div id='vcontainer'></div></div>")}a(c).overlay({api:true,expose:(0?{color:"#ffffff",loadSpeed:400,opacity:0}:null),effect:"apple",target:"#voverlay",onClose:function(){if(swfobject.getFlashPlayerVersion().major){swfobject.removeSWF(b)}else{a("#"+b).html("")}},onBeforeLoad:function(){var k=document.getElementById(b);if(!k){var j=a("<div></div>");j.attr({id:b});a("#vcontainer").append(j)}var n="";var l="";k=n?a("<div></div>"):0;if(k){k.css({position:"absolute",right:(parseInt("38")||38)+"px",top:(parseInt("38")||38)+"px",padding:"0 0 0 0"});a("#vcontainer").append(k)}if(k&&document.all){var i=a('<iframe src="javascript:false"></iframe>');i.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"});i.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"});k.append(i)}var j=k?a(document.createElement("A")):k;if(j){j.css({position:"relative",display:"block","background-color":"#E4EFEB",color:"#837F80","font-family":"Lucida Grande,Arial,Verdana,sans-serif","font-size":"11px","font-weight":"normal","font-style":"normal",padding:"1px 5px",opacity:0.7,filter:"alpha(opacity=70)",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"});j.attr({href:l});j.html(n);j.bind("contextmenu",function(d){return false});k.append(j)}var e=this.getTrigger().attr("href");if(typeof(j)!="number"&&(!k||!k.html||!k.html())){return}var m=this;if(false){window.videolb_complite_event=function(){m.close()}}window.onYouTubePlayerReady=function(d){var f=a("#"+b).get(0);f.setVolume(100);if(false){f.addEventListener("onStateChange","videolbYTStateChange");window.videolbYTStateChange=function(o){if(!o){m.close()}}}};if(swfobject.getFlashPlayerVersion().major){swfobject.createSWF({data:e,width:"100%",height:"100%",wmode:"opaque"},{allowScriptAccess:"always",allowFullScreen:true,FlashVars:(false?"complete_event=videolb_complite_event()&enablejsapi=1":"")},b)}else{var g=/^(.*\/)?[^\/]+\.swf\?.*url=([^&]+\.(mp4|m4v|mov))&/.exec(e);if(g){g=(g[1]||"")+g[2];var h=a("<video></video>");h.appendTo(a("#"+b));h.attr({src:g,type:"video/mp4",controls:"controls"}).css({width:"99%",height:"99%"});if(false){h.bind("ended",function(){m.close()});h.bind("pause",function(){if(!h.get(0).webkitDisplayingFullscreen){m.close()}})}if(/Android/.test(navigator.userAgent)){setTimeout(function(){h.get(0).play()},1000)}else{h.get(0).play()}}}}})};a(function(){videoLightBox(".voverlay")})})(jQuery)};