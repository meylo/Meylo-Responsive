
// Frost Gallery -----------------------------------------------------------------------------------------------
var frost = [
{ URL: "images/frost-bank/9A_1360.mp4", title: 'Frost Bank Lobby Display Animation', type: 'video', 
		options: {
			html5video: {
				controls: true,
				autoplay: true,
				preload: 'auto'
				}
		}
	},	
	 
	{ URL: "images/frost-bank/10A_1360.mp4", title: 'Frost Bank Lobby Display Animation', type: 'video', 
		options: {
			html5video: {
				controls: true,
				autoplay: true,
				preload: 'auto'
				}
		}
	},	
	
	{ URL: "images/frost-bank/t1_1360.mp4", title: 'Frost Bank Lobby Display Animation', type: 'video', 
		options: {
			html5video: {
				controls: true,
				autoplay: true,
				preload: 'auto'
				}
		}
	}
];

// Shiner Gallery -----------------------------------------------------------------------------------------------
		
var shiner = [
	{ url: 'http://www.shiner101.com', type: 'iframe', title:'Shiner 101 Micro Site'},
	
	
{ url: 'images/shiner/Shiner101_300x250.mp4', type: 'video', title:'Shiner 101 Rich Media Ads', 
		options: {  
			html5video: {
				minScale:1,
				controls: false,
				autoplay: false,
				preload: 'auto'
				}, 
		} 
	},

	
	{ url: 'images/shiner/shi_digital_sxsw.mp4', type: 'video', title:'Shiner SXSW Wall Projections',
		options: {
			html5video: {
				controls: false,
				autoplay: false,
				preload: 'auto'
				}
		}
	}
];

// Whataburger Gallery -----------------------------------------------------------------------------------------------
var whataburger = [
	{ url: 'images/whataburger/a1-site.jpg' },
	
	{ url: 'images/whataburger/GrilledChickenMelt_160x600.mp4', type: 'video', title: "Whatburger's Grilled Chicken Melt",
		options: {
			html5video: {
				controls: false,
				autoplay: true,
				preload: 'auto'
			}
		}
	},
	
	{ url: 'images/whataburger/hbbq-300x250.mp4', type: 'video', title: "Whatburger's Honey BBQ Chicken Strip Sandwich",
		options: {
			html5video: {
				controls: false,
				autoplay: true,
				preload: 'auto'
			}
		}
	},
	
	{ url: 'images/whataburger/PattyMelt300X250.mp4', type: 'video', title: "Whatburger's Patty Melt",
		options: {
			html5video: {
				controls: false,
				autoplay: true,
				preload: 'auto'
			}
		}
	},

]; 		 		      

// Costa De Mar Gallery -----------------------------------------------------------------------------------------------
var costadelmar = [
		{ url: 'images/fro/9A_1360.swf' },
		{ url: 'images/fro/10A_1360.swf' },
		{ url: 'images/fro/t1_1360.swf' },
]; 	

// More Stuff Gallery -----------------------------------------------------------------------------------------------
var morestuff = [
		{ url: 'images/fro/9A_1360.swf' },
		{ url: 'images/fro/10A_1360.swf' },
		{ url: 'images/fro/t1_1360.swf' },
];

// About Page -----------------------------------------------------------------------------------------------
var about = [
      {
        URL: "about.html",
        type: 'iframe'
      }
];

// Contact Page -----------------------------------------------------------------------------------------------	
var contact = [
      {
        URL: "contact.html",
        type: 'iframe'
      }
];


$(document).ready(function(){
	
	$('#frost a').bind('click', function(event) {
		event.preventDefault();
		$.iLightBox(frost, { path: 'horizontal', linkId: 'frost-bank' } );
	});
	
	$('#shiner a').bind('click', function(event) {
		event.preventDefault();
		$.iLightBox(shiner, { path: 'horizontal', maxScale: .5,  linkId: 'shiner' });
	});	
	
	$('#whataburger a').bind('click', function(event) {
		event.preventDefault();
		$.iLightBox(whataburger, { path: 'horizontal', maxScale: .5,  linkId: 'whataburger' });
	});	
	
	$('#costadelmar a').bind('click', function(event) {
		event.preventDefault();
		$.iLightBox(costadelmar, modal);
	});	
	
	$('#morestuff a').bind('click', function(event) {
		event.preventDefault();
		$.iLightBox(morestuff, modal);
	});	
	
	$('a.about').bind('click', function(event) {
		event.preventDefault();
		console.log("About Click");
		$.iLightBox(about);
	});
	
	$('a.contact').bind('click', function(event) {
		event.preventDefault();
		console.log("Contact Click");
		$.iLightBox(contact);
	});		
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	b
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

		
});