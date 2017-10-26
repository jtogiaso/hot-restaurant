let Reservation = function (reservation_id , customer_name){
	this.id = reservation_id;
	this.name = customer_name;
	this.phone = customer_phone;
	this.email = customer_email;
}

Reservation.prototype.reserve_ = function(status){
	if (status === true){
		this.is_reserved = true;
	}
	else {
		this.is_reserved = false;
	}
}


module.exports = {
	Reservation: Reservation	
}