// $(window).load(function() {
//     $('.flexslider').flexslider({
//         animation: "slide",
//         controlNav: false
//     });
// });

$(document).ready(function() {
	$('.headerNav__orderButton').magnificPopup({
		type:'inline',
		removalDelay: 500,
		mainClass: 'mfp-fade popup_inline',
		showCloseBtn: true,
		closeMarkup: '<div class="mfp-close">x</div>',
		closeBtnInside: true,
		closeOnContentClick: false,
		closeOnBgClick: true,
		alignTop: false,
		fixedContentPos: true
	});

	$('#touchpoint-filter').selectpicker();

	// $('.link').magnificPopup({
	// 	type: 'image',
	// 	removalDelay: 500,
	// 	mainClass: 'mfp-fade popup_image',
	// 	showCloseBtn: true,
	// 	closeMarkup: '<div class="mfp-close">x</div>',
	// 	closeBtnInside: true,
	// 	closeOnContentClick: false,
	// 	closeOnBgClick: true,
	// 	alignTop: false,
	// 	fixedContentPos: true,
	// 	gallery: {
	// 		enabled: true
	// 	}
	// });

	// $('.wrapper').each(function() {
	// 	$(this).magnificPopup({
	// 		delegate: '.link',
	// 		type: 'image',
	// 		removalDelay: 500,
	// 		mainClass: 'mfp-fade popup_image',
	// 		showCloseBtn: true,
	// 		closeMarkup: '<div class="mfp-close">x</div>',
	// 		closeBtnInside: true,
	// 		closeOnContentClick: false,
	// 		closeOnBgClick: true,
	// 		alignTop: false,
	// 		fixedContentPos: true,
	// 		gallery: {
	// 			enabled:true
	// 		}  
	// 	});
	// });

});

