var commands = {
	'streets': function(args) {
		window.open('http://streetsaheadllc.com');
		},
	'defug': function(args) {
		window.open('http://defuglification.com');
	},
	'danas-mom': function(args) {
		window.open('http://danasmom.com');
	},
	'dm': this['danas-mom'],
	'sam': function(args) {
		window.open('http://sammussell.com');
	},
	'terry': function(args) {
		window.open('http://tkeeney.com');
	},
	'dilbert': function(args) {
		window.open('http://dilbert.com')
	},
	'std': function(args) {
		window.open('http://video.google.com/videoplay?docid=-3382491587979249836');
	},
	'sg': function(args) {
		this.img('http://26.media.tumblr.com/tumblr_kxyk8tgEPA1qzn4vjo1_500.jpg');
	},
	'spanish-genius': this['sg'],
	'clear': function(args) {
		clear();
	},
	'img': function(args) {
		newDialog = $('<div id="dialog-modal" title=""></div>');
		newDialog.dialog({
			height:500,
			width:500,
			close: function() {
				$tin.focus();
			}
		});
		newDialog.append($('<img src="' + args[0] + '">'));
	},
	'help': function(args) {
		println('Possible commands are...');
		for(var key in this) {
			println('     ' + key);
		}
	}
}