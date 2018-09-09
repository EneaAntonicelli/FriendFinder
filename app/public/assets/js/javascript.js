$(document).ready(function () {

	$('#seed').click(function(){
		$('#nameInput').val('Kaan');
		$('#imageInput').val('https://cdn-images-1.medium.com/max/1600/1*0OHdmdWZx4vSxgWhhgAB0Q.jpeg');
		$("#question1").val(2),
		$("#question2").val(1),
		$("#question3").val(2),
		$("#question4").val(3),
		$("#question5").val(5),
		$("#question6").val(4),
		$("#question7").val(3),
		$("#question8").val(5),
		$("#question9").val(3),
		$("#question10").val(5)
	});


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
				$("#cardReveal").text(data.reveal);
				$("#matchedFriendLink").attr({"href": data.link , "target":"_blank"});
				$("#friendImage").attr("src", data.photo);
			});
		}


	}); // END OF FUNCTION

});//END OF DOCUMENT READY




















