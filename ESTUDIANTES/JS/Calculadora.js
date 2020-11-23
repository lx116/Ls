$(document).ready(function () {
	var max_fields = 10;
	var wrapper = $(".input_fields_wrap");
	var add_button = $(".add_field_button");
	var Calc_Button = $(".Calcular");

	var x = 1;

	
	var resultC1 = 0;
	$(add_button).click(function (e) {
		e.preventDefault();
		if (x < max_fields) {
			x++;

			$(wrapper).append('<div class="R1"><input type="number" class="notes" name="mytext[]"/><input type="number" class="porcentaje" name="mytext2[]"><a href="#" class="remove_field">Remove</a></div>');
			
		}
	});

	$(wrapper).on("click", ".remove_field", function (e) { 
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})


	$(Calc_Button).on("click", function (e) {

		resultC1 = $(".R1").each(function () { $(this).find(".notes").val() * $(this).find(".porcentaje").val()});
		console.log(resultC1);

	});

});