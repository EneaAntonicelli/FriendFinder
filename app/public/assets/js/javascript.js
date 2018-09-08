$(document).ready(function () {

	$("#submit").click(function () {
		event.preventDefault();

		var valid = Array.from($('select.required')).every(function (el) {
			var selected = parseInt($(el).find(":selected").val());
			return selected > 0;
		})

		if (!valid) {
			alert("Please fill out all questions!");
			return false;
		}
		else {
			var newUser = {
				name: $("#nameInput").val().trim(),
				photo: $("#imageInput").val().trim(),
				scores: [
					$("#question1").val(),
					$("#question2").val(),
					$("#question3").val(),
					$("#question4").val(),
					$("#question5").val(),
					$("#question6").val(),
					$("#question7").val(),
					$("#question8").val(),
					$("#question9").val(),
					$("#question10").val()
				]
			};
			var currentURL = window.location.origin;

			$.post(currentURL + "/api/friends", newUser, function (data) {
				console.log(data);
				$('.modal').modal({
					dismissible: true
				});
				$("#modal1").modal('open');
				$("#modalArea").empty();
				$("#modalArea").text(data.name);
				$("#friendImage").attr("src", data.photo);
			});
		}


	}); // END OF FUNCTION

});//END OF DOCUMENT READY




















