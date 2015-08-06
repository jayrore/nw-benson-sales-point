module.exports.config = {
	storeName : "Chicles y gomitas don casimiro",
	mongo : {
		db: "store",
		port : ":27017/",
		protocol: "mongodb://",
		host: "localhost",
		getConnectionString : getConnectionString
	},
	toolBarItems:["store","users","merchandise","sales","options","otro"]
};

function getConnectionString() {
	return this.protocol + this.host + this.port + this.db;
};
