$(function() {

	var addListItem = function() {
		if ($('input.add').val() === "") {
			$('div.warning').text("Text field is required.");
		} else {
			$('div.warning').text("");
			var newListItem = $("<li></li>").text($('input.add').val());
			newListItem.addClass("list-group-item");
			$('<i class="fa fa-fw fa-square-o"></i>').appendTo(newListItem);
			$('<i class="fa fa-fw fa-eraser"></i>').appendTo(newListItem);
			newListItem.appendTo($("ul#todo"));
			$('input.add').val("");
		}
	};

	$(document).on("submit", "form#addEntry", function(event) {
		addListItem();
		event.preventDefault();
	});

	$(document).on("click", "i.fa-eraser", function() {
		$(this).parent().remove();
	});

	$(document).on("mouseover", "i.fa-square-o", function() {
		$(this).addClass("mouseover");
	});

	$(document).on("click", ".fa-square-o", function() {
		$(this).addClass("fa-check-square-o").removeClass("fa-square-o");
		$(this).parent().addClass("completed");
	});

	$(document).on("click", ".fa-check-square-o", function() {
		$(this).addClass("fa-square-o").removeClass("fa-check-square-o");
		$(this).parent().removeClass("completed");
	});

});