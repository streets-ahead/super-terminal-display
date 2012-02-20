var $tin = $('#tin');
$tin.focus();
$tin.blur( function() { setTimeout(function() {$('#tin').focus();}, 10) });

var $current = $('.current .content');
var $main = $('#main');
$tin.keyup( function(e) {
	if(e.keyCode === 13) {
		var command = $tin.val();
		$tin.val('');
		var $currentRow = $('.current');
		$currentRow.children('.cursor').remove();
		$currentRow.removeClass('current');
		var newRow = $("<div class='row current'>&nbsp;&gt;&nbsp;<span class='content'></span><span class='cursor'>&nbsp;</span></div>");
		$main.append(newRow);
		$current = $('.content', newRow);
		setTimeout(function() {execute(command)}, 1);
	} else {
		$current.html($tin.val());
	}
});

function println(str) {
	var newRow = $("<div class='row blah'>" + str + "</div>");
	console.log($('#main > div:last-child'))
	var $currentRow = $('.current');
	newRow.insertBefore($currentRow);
}

function execute(command) {
	switch (command) {
		case 'streets':
			window.open('http://streetsaheadllc.com');
			break;
		case 'defug':
			window.open('http://defuglification.com');
			break;
		case 'danas-mom':
		case 'dm':
			window.open('http://danasmom.com');
			break;
		case 'sam':
			window.open('http://sammussell.com');
			break;
		case 'terry':
			window.open('http://tkeeney.com');
			break;
		case 'dilbert':
			window.open('http://dilbert.com')
			break;
		case 'std':
			window.open('http://video.google.com/videoplay?docid=-3382491587979249836');
			break;
		case 'spanish-genius':
		case 'sg':
			window.open('http://26.media.tumblr.com/tumblr_kxyk8tgEPA1qzn4vjo1_500.jpg');
			break;
		case 'help':
			println('Possible commands are streets, defug, danas-mom (dm), sam, spanish-genius (sg), dilbert, std, and help...');
			break;
		default:
	}
}

var opac = 1;
var delta = 0.05;
function toggleFade() {
	if(opac < 0) {
		delta *= -1;
		opac = 0;				
	} else if(opac > 1) {
		opac = 1;
		delta *= -1;
	}
	$('.cursor').css('opacity', opac);
	opac += delta;
}

setInterval(function() { toggleFade() }, 25)

println("Welcome to Super Terminal Display, this site is brought to you by Streets Ahead.  Type help to get started.");