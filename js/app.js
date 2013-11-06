$(function() {
	$('div.alert-danger').hide();

	var addListItem = function() {
		if ($('input.add').val() === "") {
			$('div.alert-danger').text("Text field is required.").show();
		} else {
			$('div.alert-danger').text("").hide();
			var newListItem = $("<li></li>").append($('<span class="itemName"></span>').text($('input.add').val()));
			newListItem.addClass("list-group-item").append($('<i class="fa fa-fw fa-square-o"></i>')).append($('<i class="fa fa-fw fa-edit"></i>')).append($('<input type="text" class="itemTextbox">')).append($('<i class="fa fa-fw fa-eraser"></i>'));
			$("ul#todo").append(newListItem.fadeIn());
			$('input.add').val("");
		}
	};

	$('.jumbotron.header').on("submit", "form#addEntry", function(event) {
		addListItem();
		event.preventDefault();
	});

	$('ul#todo').on("click", "i.fa-eraser", function() {
		$(this).parent().remove();
	});

	$('ul#todo').on("mouseover", "i", function() {
		$(this).addClass("mouseover");
	});

	$('ul#todo').on("mouseout", "i", function() {
		$(this).removeClass("mouseover");
	});

	$('ul#todo').on("click", "i.fa-edit", function() {
		$(this).toggleClass("edit");
		$(this).parent().find('input.itemTextbox').toggleClass("edit");
		var txtbox = $(this).parent().find('input.itemTextbox');
		var name = $(this).parent().find('.itemName');
		if(txtbox.hasClass('edit')) {
			name.hide();
			txtbox.val(name.text());
		} else {
			name.text(txtbox.val());
			name.show();
		}
	});

	$('ul#todo').on("click", ".fa-square-o", function() {
		$(this).addClass("fa-check-square-o").removeClass("fa-square-o");
		$(this).parent().addClass("completed");
	});

	$('ul#todo').on("click", ".fa-check-square-o", function() {
		$(this).addClass("fa-square-o").removeClass("fa-check-square-o");
		$(this).parent().removeClass("completed");
	});

});