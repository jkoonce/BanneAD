function ArxScrollbar(o,e){"use strict";function t(){if(e){var o;for(o in e)m.hasOwnProperty(o)&&(m[o]=e[o])}}function n(){T=D.height(),U=N.offset().top,b=N.height(),x=b-T,v=g.height(),C=d.height()}function l(o,e,t){var n=(o-Y)/(x-Y),l=-n*(v-C);t=t||"Quint.easeOut",e?TweenLite.to(g,1,{css:{top:l},ease:t}):g.css({top:l})}function s(o,e){var t=o-U;Y>=t?t=Y:t>=x&&(t=x),e?TweenLite.to(D,.2,{css:{top:t},ease:Quint.easeOut}):D.css({top:t}),l(t,!0)}function i(o){o.stopPropagation(),h.stopScroll(),n(),L=o.originalEvent?o.originalEvent.offsetY||o.originalEvent.layerY:o.offsetY||o.layerY,g.addClass("no-select"),g.attr({unselectable:"on"}),w.on("mousemove",r),w.on("mouseup",a)}function r(o){o.stopPropagation(),s(o.pageY-L,!1)}function a(o){o.stopPropagation(),g.removeClass("no-select"),g.removeAttr("unselectable"),w.off("mousemove",r),w.off("mouseup",a)}function c(o){o.stopPropagation(),h.stopScroll(),n(),s(o.pageY-T,!0)}function p(){var o=v-C,e=g.position().top,t=(e-0)/(o-Y),n=-t*(b-T);D.css({top:n})}function u(){m.scrollDownComplete&&m.scrollDownComplete(),m.loop===!0&&(h.scrollUp(0,1),h.scrollDown(y,2))}if(o){var f=$(o),m={loop:!1,scrollDownComplete:null,scrollUpComplete:null},h=this,w=$(document),d=f.find(".arx-scrollbar-mask"),C=d.height(),g=f.find(".arx-scrollbar-content"),v=g.height(),N=f.find(".arx-scrollbar-track"),U=N.offset().top,b=N.height(),D=f.find(".arx-scrollbar-thumb"),T=D.height(),L=0,Y=0,x=b-T,y=0;this.scrollDown=function(o,e){o=isNaN(o)?0:o,e=isNaN(e)?0:e,m.loop===!0&&(y=o),o>0?TweenLite.to(g,o,{delay:e,css:{top:C-v,autoRound:!1},ease:Linear.easeNone,onUpdate:p,onComplete:u}):e>0?setTimeout(function(){s(U+b-T,!0),m.scrollDownComplete&&m.scrollDownComplete()},1e3*e):(s(U+b-T,!0),m.scrollDownComplete&&m.scrollDownComplete())},this.scrollUp=function(o,e){o=isNaN(o)?0:o,e=isNaN(e)?0:e,o>0?TweenLite.to(g,o,{delay:e,css:{top:Y,autoRound:!1},ease:Linear.easeNone,onUpdate:p,onComplete:m.scrollUpComplete}):e>0?setTimeout(function(){s(U,!0),m.scrollUpComplete&&m.scrollUpComplete()},1e3*e):(s(U,!0),m.scrollUpComplete&&m.scrollUpComplete())},this.stopScroll=function(){TweenLite.killTweensOf(D)},this.dispose=function(){h.stopScroll(),g.removeClass("no-select"),g.removeAttr("unselectable"),w.off("mousemove",r),w.off("mouseup",a),D.off("mousedown",i),N.off("mousedown",c),h=null},t(),D.on("mousedown",i),N.on("mousedown",c)}}

/*
Dependencies
<script src="//cdnjs.cloudflare.com/ajax/libs/zepto/1.1.6/zepto.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/latest/easing/EasePack.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js"></script>

Public Methods
scrollDown(time:Number = 0, delay:Number = 0) : auto scroll from current position to bottom
	time  : duration in seconds
	delay : delay before starting scroll in seconds

scrollUp(time:Number = 0, delay:Number = 0) : auto scroll from current position to top
	time  : duration in seconds
	delay : delay before starting scroll in secondsv

stopScroll() : stop scroll at current position

dispose() : dismantle functionality for garbage collection
*/
