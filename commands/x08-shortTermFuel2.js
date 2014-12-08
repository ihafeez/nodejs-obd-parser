
module.exports = {
	name: 'Short term fuel trim—Bank 2',
	unit: '%',
	id: '08',
	formula: function (res) {
		return (res - 128) * 100 / 128
	},
	fakeResponse: function () {
		return 1
	}
}
