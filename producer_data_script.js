db.producer.deleteMany({});
db.review_for_producer.deleteMany({});

/********************************************************************** */
// Jenna's Producer document
/********************************************************************** */
var objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: 'Jenna',
        lastName: 'Smith',    
        phoneNum: '8157657895',
        address: {
            street: '456 Dogwood Ln',
            city: 'DeKalb',
            state: 'IL',
            zip: '60115'
        },
        food: [],
        averageProducerRating: Double(0.00),
        currentOrders: [],
        archievedOrders: [],
        menu: {
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [] 
        },
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

// Creating reviews for Jenna
db.review_for_producer.insertMany([
    {
        "producerId": objId, 
        "rating": Double(5.00),
        // Reviews bounded to 300 characters
        "description": "Jenna creates amazing cookies! Perfect for weekends.",
    },
    {
        "producerId": objId, 
        "rating": Double(4.50),
        // Reviews bounded to 300 characters
        "description": "Cute packaging!",
    }
]);


/********************************************************************** */
// Bob's Producer Document
/********************************************************************** */
objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Bob",
        lastName: "Smith",    
        phoneNum: "8157657895",
        address: {
            street: "456 Dogwood Ln",
            city: "DeKalb",
            state: "IL",
            zip: "60115"
        },
        food: [],
        averageProducerRating: Double(5.00),
        currentOrders: [],
        archievedOrders: [],
        menu: {
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [] 
        },
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

db.review_for_producer.insertMany([
    {
        "producerId": objId,
        "rating": Double(3.00),
        "description": "Service was okay, not excellent. Food was good"
    },
    {
        "producerId": objId,
        "rating": Double(1.00),
        "description": "COLD FOOD, WTF"
    }
])


/********************************************************************** */
// Sullivan's food
/********************************************************************** */
objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Sullivan",
        lastName: "Clarke",
        phoneNum: "815894413",
        address: {
          street: "Grand Avenue",
          city: "DeKalb",
          state: "IL",
          zip: "60115"
        },
        food: [],
        averageProducerRating: Double(0.00),
        currentOrders: [],
        archievedOrders: [],
        menu: {
          sunday: [],
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: []
        },
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

/********************************************************************** */
// Marietta's Producer document
/********************************************************************** */

objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Marietta",
        lastName: "Daugherty",
        phoneNum: "8159264502",
        address: {
            street: "Hunts Lane",
            city: "DeKalb",
            state: "IL",
            zip: "60115"
        },
        food: [],
        averageProducerRating: Double(0.00),
        currentOrders: [],
        archievedOrders: [],
        menu: {
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: []
        },
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);


print("Success");