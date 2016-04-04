function calculateInput (toCalculate) {
    var csrftoken = getCookie('csrftoken');
    var answer = eval(toCalculate);

    Calc.Input.value = answer;

    $.ajax({
        type: "POST",
        data: {
            csrfmiddlewaretoken: csrftoken,
	    to_calculate : toCalculate,
	    answer: answer,
        },

        success: function(json) {
	    console.log(json['message'])
	},

        error: function(xhr, err) {
            console.log(xhr.responseText);
        }
    });
}
