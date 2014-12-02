
module.exports = {
	name: 'Actual Engine Torque (%)',
	id: '62',
	class: 1,
	parse: function (data) {
		var res = 0;
		if (data.length == 1) {
			res = data.readUInt8(0);
		} else if (data.length == 2) {
			res = data.readInt16BE(0);
		} else if (data.length == 4) {
			res = data.readInt32BE(0);
		}

		return res - 125
	}
}
