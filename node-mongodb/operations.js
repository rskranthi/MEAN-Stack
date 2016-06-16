assert=require('assert');

exports.insertDocument = function(db,document,collection,callback) {
	//get the document collection

	var coll = db.collection(collection);

	//Insert some documents

	coll.insert(document, function(err,result) {
		assert.equal(err,null);
		console.log("Inserted " + result.result.n + " documents into the document collection "
                 + collection);
		callback(result);
	});
};



exports.findDocuments = function(db,collection,callback) {

	// Get the documents collection

	var coll = db.collection(collection);

	// find some documents

	coll.find({}).toArray(function(err,docs) {

		assert.equal(err,null);
		callback(docs);
	});
};

exports.removeDocument = function(db,document,collection,callback) {

	//get the documents collection

	var coll = db.collection(collection);

	// remove the document

	coll.deleteOne(document, function(err, result) {
		assert.equal(err,null);
		console.log("Removed the document" + document);
		callback(result);
	});
};

exports.updateDocument = function(db,document,update,collection,callback) {

	// Get the documents collection

	 var coll = db.collection(collection);

	// Update the document

	coll.updateOne(document,{ $set: update } , null , function(err,result){
		assert.equal(err,null);

		console.log("updated the document with" + update);
		callback(result);
	});
};


