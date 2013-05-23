jQuery(function($){

	var domains = ['hotmail.com', 'gmail.com', 'wanadoo.fr','hotmail.fr','laposte.net'];

	$('.mailcheck').blur(function(){
		var input = $(this);
		var parent = input.parents('.control-group'); 
		input.mailcheck({
			domains : domains,
			suggested: function(element, suggestion){
				input.next('span').remove();
				$('<span class="help-inline"/>').insertAfter(input).append('Vous vouliez dire <a href="#">'+suggestion.full+'</a>').find('a').click(function(e){
					e.preventDefault();
					input.val($(this).text());
					input.trigger('blur');
				});

				parent.addClass('warning');
			},
			empty : function(element){
				input.next('span').remove(); 
				parent.removeClass('warning'); 
			}
		});
	});


});