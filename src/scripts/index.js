import { LineChart } from '../../node_modules/chartist/dist/index.js';

new LineChart('.chart',
	{
		labels: [1, 2, 3, 4, 5, 6, 7, 8],
		series: [[1, 2, 1, 3, 2, 8, 4, 5, 3]]
	}, {
		low: 0,
		showArea: false
	}
);

$('.menu-drawer').on('click', function() {
	$(".container").toggleClass("nav-open");
	$('.menu').toggleClass('showing-menu');
	$('.push').toggleClass('showing-menu');
	$('body').toggleClass('darkblue-bg');
});
$('.search').on('click', function() {
	$(this).toggleClass("bi-x");
	$('.search-bar').css('visibility', document.querySelectorAll('.search-bar')[0].style.visibility == 'hidden' ? 'visible' : 'hidden');
});
$('.todo-state').on('click', function() {
	if ($(this).hasClass('todo-done-state')) {
		$(this).removeClass('todo-done-state');
		$(this).children()[0].hidden = true;
		$(this).css({"border": "1.5px solid var(--blue)", "background": "transparent", "color": "white", "filter": "grayscale(0%)"});
		$(this).parent().removeClass('done');
	} else {
		$(this).addClass('todo-done-state');
		$(this).html("<i class='bi bi-check'/>");
		$(this).css({"border": "1.5px solid var(--blue)", "background": "var(--blue)", "color": "white", "filter": "grayscale(35%)"});
		$(this).parent().toggleClass('done');
	}
});
$('.push').on('click', function() {
	$('.push-layer').toggleClass('pushing-up');
	$('.close-pushing').on('click', function() {
		$('.push-layer').removeClass('pushing-up');
	});
});