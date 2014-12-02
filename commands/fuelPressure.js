
module.exports = {
	name: 'Fuel Pressure (kPa)',
	id: '0A',
	class: 1,
	parse: function (data) {
		// data is a buffer of HEX

		var res;
		if (data.length == 1) {
			res = data.readUInt8(0);
		} else if (data.length == 2) {
			res = data.readInt16BE(0);
		} else if (data.length == 4) {
			res = data.readInt32BE(0);
		}

		return res * 3
	}
}
