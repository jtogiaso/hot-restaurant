let Table = function (table_id , reservation_id){
	this.id = table_id;
	if (reservation_id != null){
		this.reservation_id = reservation_id
	}
	else {
		this.reservation_id = null;
	}
	this.is_reserved = false;
}

Table.prototype.change_table_status = function(status){
	if (status === true){
		this.is_reserved = true;
	}
	else {
		this.is_reserved = false;
	}
}

Table.prototype.reserve_table = function(reservation_id) {
	this.reservation_id = reservation_id;
	this.change_table_status(true);
};

Table.prototype.unreserve_table = function(){
	this.reservation_id = null;
	this.change_table_status(false);
}


module.exports = {
	Table: Table	
}