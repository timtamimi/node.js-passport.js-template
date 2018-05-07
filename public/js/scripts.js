$(document).ready(function() {
	validateEmail(); 
    $("[data-toggle=popover]").popover(); // Enables popover
});




function validateEmail(){
	$('.input-group input[required]').on('keyup change', function() {
    	var $form = $(this).closest('form'),
		$group = $(this).closest('.input-group'),
		$addon = $group.find('.input-group-addon'),
		$icon = $addon.find('span'),
		state = false;
		
    	if (!$group.data('validate')) {
			state = $(this).val() ? true : false;
			}else if ($group.data('validate') == "email") {
			state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
		}
		
		if (state) {
			$addon.removeClass('danger');
			$addon.addClass('success');
			}else{
			$addon.removeClass('success');
			$addon.addClass('danger');
		}
        
        if ($form.find('.input-group-addon.danger').length == 0) {
            $form.find('[type="submit"]').prop('disabled', false);
			}else{
            $form.find('[type="submit"]').prop('disabled', true);
		}
	});
    
    $('.input-group input[required], .input-group textarea[required], .input-group select[required]').trigger('change');
}