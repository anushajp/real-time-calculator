function calculateInput (toCalculate) {
    var csrftoken = getCookie('csrftoken');
    try {
	var answer = eval(toCalculate);
    } catch (e) {
	if (e instanceof SyntaxError) {
            alert("Please try a valid calculation");
	    return;
	}
    }

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
