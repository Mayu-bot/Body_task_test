//ua判定
document.addEventListener('DOMContentLoaded', function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.l-hdr').addClass('is-scroll')
		} else {
			$('.l-hdr').removeClass('is-scroll')
		}
	});
})
window.addEventListener('load', function () {
	AOS.init({
		//offset: 300,
		// delay: 100,
		duration: 1000,
		once: true,
	});
})
window.addEventListener('scroll', function () {
});
