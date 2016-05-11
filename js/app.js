var identity, firstName, lastName, fullName, phoneNumber, street, city, state, contacts = [], count = 0;

$(function () {
	$("#contact-form").on("submit", function (e) {
		e.preventDefault();
		count++;
		identity = "contact"+count; 
		firstName = $("#firstName").val();
		lastName = $("#lastName").val();
		fullName = firstName+" "+lastName;
		phoneNumber = $("#phoneNumber").val();
		street = $("#street").val();
		city = $("#city").val();
		state = $("#state").val();

		$(".contact-list").append("<li class='contact' id='contact"+count+"'><p>"+fullName+"</p></li>");
		contacts.push(makeContact(identity, firstName, lastName, fullName, phoneNumber, street, city, state));
	});

	$('.contact-list').on("click", ".contact", function() {
		var check = $(this).attr('id');
		contacts.forEach(function(contact) {
			if (contact.identity == check)
			{
				showContact(contact);
			}
		});
	});
});

function makeContact(i, first, last, full, phone, str, cit, sta) {
	var contact = {};

	contact.identity = i;
	contact.firstName = first;
	contact.lastName = last;
	contact.fullName = full;
	contact.phoneNumber = phone;
	contact.street = str;
	contact.city = cit;
	contact.state = sta;

	return contact;
}

function showContact(contact) {
	$(".right").append("<div class='shownContact'><h3>"+contact.fullName+"</h3><p>First Name: "+contact.firstName+"</p><p>Last Name: "+contact.lastName+"</p><p>Address: "+contact.street+", "+contact.city+", "+contact.state+"</div>");
}