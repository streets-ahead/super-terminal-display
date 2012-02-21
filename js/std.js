var commandStack = [];
var commandPointer = 0;

var $tin = $('#tin');
$tin.focus();
$tin.blur( function() {
	console.log('blur');
	$('.cursor').removeClass('cursor').addClass('cursor-blur').css('opacity', '1');
	
});

$tin.focus( function() {
	$('.cursor-blur').removeClass('cursor').addClass('cursor');
});

var $current = $('.current .content');
var $main = $('#main');

$main.click(function(e) {
	console.log('click');
	setTimeout( function() { $tin.focus(); }, 10);
//	e.preventDefault()
});

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
		if(command !== '') {
			execute(command.split(' '));
		}
	} else if (e.keyCode === 38) {
		if(commandStack.length > 0 && commandPointer > -1) {
			$tin.val(commandStack[--commandPointer]);
			$current.html($tin.val());
		}
	} else if (e.keyCode === 40) {
		if(commandStack.length > 0 && commandPointer < commandStack.length) {
			$tin.val(commandStack[++commandPointer]);
			$current.html($tin.val());
		}
	} else {
		$current.html($tin.val());
	}
});

function println(str) {
	str = str.replace(' ', '&nbsp;');
	var newRow = $("<div class='row blah'>" + str + "</div>");
	console.log($('#main > div:last-child'))
	var $currentRow = $('.current');
	newRow.insertBefore($currentRow);
}

function clear() {
	$main.empty();
	$tin.val('');
	var $currentRow = $('.current');
	$currentRow.children('.cursor').remove();
	$currentRow.removeClass('current');
	var newRow = $("<div class='row current'>&nbsp;&gt;&nbsp;<span class='content'></span><span class='cursor'>&nbsp;</span></div>");
	$main.append(newRow);
	$current = $('.content', newRow);
	
}

function execute(command) {
	commandStack.push(command);
	commandPointer = commandStack.length;

	if(commands[command[0]]) {
		commands[command[0]](command.splice(1));
	} else {
		println('Command not  found, type help for possible commands.');
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