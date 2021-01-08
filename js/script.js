//Выпадашка
$('.dropdown-el').click(function (e) {
	e.preventDefault();
	e.stopPropagation();
	$(this).toggleClass('expanded');
	$(e.target).parent('.dropdown-item').find('input').prop('checked', true);
// $('#' + $(e.target).attr('for')).prop('checked', true);
});
$(document).click(function () {
	$('.dropdown-el').removeClass('expanded');
});