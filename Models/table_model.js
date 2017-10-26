let Table = function (table_id , reservation_id){
	this.id = table_id;
	if (reservation_id != null){
		this.reservation_id = reservation_id
	}
	else {
		this.reservation_id = null;
	}
	this.isReserved = false;
}

Table.prototype.change_table_status = function(){
	if (this.isReserved === false){
		this.isReserved = true;
	}
	else {
		this.isReserved = false;
	}
}

Table.prototype.reserve_table = function(reservation_id) {
	this.reservation_id = reservation_id;
	this.change_table_status();
};


module.exports = {
	Table: Table	
}