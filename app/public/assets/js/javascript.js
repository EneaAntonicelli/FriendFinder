$(document).ready(function () {

	$('#seed').click(function(){
		$('#nameInput').val('Kaan');
		$('#imageInput').val('https://cdn-images-1.medium.com/max/1600/1*0OHdmdWZx4vSxgWhhgAB0Q.jpeg');
		$("#question1").val(Math.floor(Math.random() * 5) + 1),
		$("#question2").val(Math.floor(Math.random() * 5) + 1),
		$("#question3").val(Math.floor(Math.random() * 5) + 1),
		$("#question4").val(Math.floor(Math.random() * 5) + 1),
		$("#question5").val(Math.floor(Math.random() * 5) + 1),
		$("#question6").val(Math.floor(Math.random() * 5) + 1),
		$("#question7").val(Math.floor(Math.random() * 5) + 1),
		$("#question8").val(Math.floor(Math.random() * 5) + 1),
		$("#question9").val(Math.floor(Math.random() * 5) + 1),
		$("#question10").val(Math.floor(Math.random() * 5) + 1)
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




















