// Finds producers with the _id equal to objid
// https://stackoverflow.com/questions/8233014/how-do-i-search-for-an-object-by-its-objectid-in-the-mongo-console
db.producer.find(objid)

// Cursor : A pointer to the result set of a query (Collection of addresses of docuemnts). Clients can iterate through a cursor to retrieve results. By default, cursors
// not opened within a session automatically timeout after 10 minutes of inactivity. Cursors opened under a session close
// with the end or timeout of the session. See Iterate a Cursor in mongosh.

// Print conetents of cursor 
while (foodCursor.hasNext()) {
   printjson(foodCursor.next());
}

// Get food documents with a prouducer_id of objId 
var foodCursor = db.foodItem.find({producerId: objId})

// Create an array with foodIds 
var arrayOfFoodIDS = foodCursor.map( function(myDoc) {
        return myDoc._id
    } 
);

// Sets the value of the food field to  arrayOfFoodIDS
db.producer.updateOne(
    {
        _id: producerDocument._id
    },
    {
        $set: { foodItems: arrayOfFoodIDS } 
    }
)

db.producer.updateOne(
    {
        firstName: "Marietta"
    },
    {
        $set: { foodItems: [] } 
    }
)

// Create an array with foodIds 
var arrayOfProduccerIDS = producerCursor.map( function(myDoc) {
    return myDoc._id
} 
);

// Gets one document that be accessed like an object. E.g., produerDocument.firstName
var producerDocument = db.producer.findOne({ firstName: "Marietta" })