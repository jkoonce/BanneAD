'use strict';

(() => {

//private
var self;

class Banner {

	constructor() {
		//properties
		this.sw = 160;
		this.sh = 600;
		this.logo = $('.logo');
		this.road = $('.road');
		this.top = $('.top');
		this.bottom = $('.bottom');
		this.text3a = $('.text3a');
		this.text3b = $('.text3b');
		this.text4 = $('.text4');
		this.blue = $('.blueBox');
		this.card = $('.card');
		self = this;

		//arx-scrollbar
	    this.scrollbar = new ArxScrollbar( '#arx-scrollbar1', {
	      loop:true,
	      // scrollDownComplete: function(){
	      //   //console.log("down complete");
	      // },
	      // scrollUpComplete: function(){
	      //   //console.log("up complete");
	      // }
	    });

	    // this.routeISI();
	    this.animate();

		//listeners
		$('a[href="#"]').on('click', e => e.preventDefault() );
		$('.exit1').on('click', this.exit1Clicked);
		$('.exit2').on('click', this.exit2Clicked);
	}


	//-------- button methods --------//

	exit1Clicked(e)
	{
		Enabler.exit('Banner Clicked' , 'https://activate.rx-comp.com/zurampic/');

		// for tracking current website and banner size in querystring
		//var siteName = Enabler.getDartSiteName();
		//var dim = page.width().toString() + "x" + page.height().toString();
		//var query = 'rsource='+siteName+'&utm_source='+siteName+'&utm_medium=banner&utm_content='+dim+'&utm_campaign=launch'
		//Enabler.exitQueryString('Banner Clicked', query);
		
		// window.open('https://activate.rx-comp.com/zurampic/'); //link for internal use only
	}

	exit2Clicked(e)
	{
		Enabler.exit('PI Clicked' , 'http://www.azpicentral.com/pi.html?product=zurampic&country=us&popup=no');
		// window.open('http://www.azpicentral.com/pi.html?product=zurampic&country=us&popup=no'); //link for internal use only
	}


	//-------- banner animation --------//

	animate()
	{
		//banner animation (we use greensock and zepto libraries since they were already used for arxscrollbar)
		var animate = new TimelineLite;

		animate.set(this.top, {autoAlpha:0, x: '+=100%'})
		animate.set(this.bottom, {autoAlpha:0})
		animate.set(this.text3a, {autoAlpha:0, x: '+=100%'})
		animate.set(this.text3b, {autoAlpha:0})
		animate.set(this.text4, {autoAlpha:0})
		animate.set(this.blue, {autoAlpha:0, y: '-=35%'})
		animate.set(this.card, {autoAlpha:0, x: '-=100%'})

		.to(this.logo, 1, {delay: 2, y: '-=40px', ease:Back.easeInOut}, '-=.7')
		.to(this.top, 2,{autoAlpha:1, x: '-=100%', ease:Power2.easeInOut}, 'transition1')
		.to(this.road, 2, {autoAlpha:0, x: '-=100%', ease:Power1.easeInOut}, 'transition1')
		.to(this.bottom, 2, {autoAlpha:1, ease:Power2.easeInOut}, '-=0.2')

		.to(this.top, 1, {autoAlpha:0, x: '-=100%', ease:Power1.easeInOut}, 'transition2')
		.to(this.bottom, 1, {autoAlpha:0, x: '-=100%', ease:Power1.easeInOut}, 'transition2')
		.to(this.text3a, 1, {autoAlpha:1, x: '-=100%', ease:Power2.easeInOut}, 'transition2')
		.to(this.text3b, 1, {autoAlpha:1, ease:Power2.easeInOut}, '-=0.2')

		.to(this.text3a, 1, {delay: 6, autoAlpha:0, x: '+=100%', ease:Power1.easeInOut}, 'transition3')
		.to(this.text3b, 1, {delay: 6, autoAlpha:0, x: '+=100%', ease:Power1.easeInOut}, 'transition3')
		.to(this.card, 1, {delay: 6, autoAlpha:1, x: '+=100%', ease:Back.easeInOut}, 'transition3')

		.to(this.blue, 1, {autoAlpha:1, y: '+=35%', ease:Back.easeInOut}, 'final')
		.to(this.text4, 1, {autoAlpha:1}, 'final')

		this.scrollbar.scrollDown(150, 1); //100 sec duration, 1 sec delay
	}


	//-------- utils --------//

	//for routing isi
	//make clone of scrolling content on right side of page
	routeISI()
	{
		var width = $('.arx-scrollbar-content').width();
		var isiHtml = $('.arx-scrollbar-mask').html();
		$('body').append(isiHtml);
		$('.arx-scrollbar-content').eq(1).css({ 
			position:'absolute',
			top:'10px', right:'10px',
			width:width
		});
	}
}

window.Banner = Banner;

})();