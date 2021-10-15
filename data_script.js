db.producer.deleteMany({});
db.food.deleteMany({});
db.review_for_producer.deleteMany({});

// Producer Inserts
var objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: 'Jenna',
        lastName: 'Smith',    
        phoneNum: '815-765-7895',
        address: {
            street: '456 Dogwood Ln',
            city: 'DeKalb',
            state: 'IL',
            zip: '60115'
        },
        food: [],
        averageProducerRating: Double(0.00),
        acceptedOrdersToCreate: [],
        pendingOrderForProducer: [],
        menu: {
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [] 
        },
        dateCreated: new Date()
    }
);

db.food.insertMany([
    {
        producerId: objId,
        dietPreference: "Vegan",
        description: "12 Blueberry Cookies",
        photo: "N/A",
        price: Double(5.00),
        rating: Double(0.00),    
        name: "Jenna's Vegan Blueberry Cookies",
        portionSize: 1.4,
        spicy: 0,
        dateCreated: new Date(),
        dateUpdated: new Date(),
    },
    {
        producerId: objId,
        dietPreference: "Vegan",
        description: "12 Chocolate Chip Cookies",
        photo: "N/A",
        price: Double(4.45),
        rating: Double(0.00),    
        name: "Jenna's Vegan Chocolate Chip Cookies",
        portionSize: 1.5,
        spicy: 0,
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
]);
// Get food documents with a prouducerId of objId 
var foodCursor = db.food.find({producerId: objId});

// Create an array with foodIds 
var arrayOfFoodIDS = foodCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

// Sets the value of the food field to  arrayOfFoodIDS
db.producer.updateOne(
    {_id: objId},
     {$set: 
        {food: arrayOfFoodIDS} 
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



objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Bob",
        lastName: "Smith",    
        phoneNum: "815-765-7895",
        address: {
            street: "456 Dogwood Ln",
            city: "DeKalb",
            state: "IL",
            zip: "60115"
        },
        food: [],
        averageProducerRating: Double(5.00),
        acceptedOrdersToCreate: [],
        pendingOrderForProducer: [],
        menu: {
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [] 
        },
        dateCreated: new Date()
    }
);

db.food.insertMany([
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Freshly grown meat from neighboring farm",
        photo: "N/A",
        price: Double(6.00),
        rating: Double(0.00),    
        name: "Bob's Burgers",
        portionSize: 5,
        spicy: "1",
        dateCreated: new Date(),
        dateUpdated: new Date()
    },
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Homegrown potatoes!",
        photo: "N/A",
        price: Double(4.45),
        rating: Double(0.00),    
        name: "Bob's Freshest Fries",
        portionSize: 3,
        spicy: 0,
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
]);

foodCursor = db.food.find({producerId: objId});

arrayOfFoodIDS = foodCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

db.producer.updateOne(
    {_id: objId},
     {$set: 
        {food: arrayOfFoodIDS} 
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


// Creating  Sullivan's data. He has created a new account.
objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Sullivan",
        lastName: "Clarke",
        phoneNum: "815-8944-513",
        address: {
          street: "Grand Avenue",
          city: "DeKalb",
          state: "IL",
          zip: "60115"
        },
        food: [],
        averageProducerRating: Double(0.00),
        acceptedOrdersToCreate: [],
        pendingOrderForProducer: [],
        menu: {
          sunday: [],
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: []
        },
        dateCreated: new Date()
    }
);

objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Marietta",
        lastName: "Daugherty",
        phoneNum: "815-9264-502",
        address: {
            street: "Hunts Lane",
            city: "DeKalb",
            state: "IL",
            zip: "60115"
        },
        food: [],
        averageProducerRating: Double(0.00),
        acceptedOrdersToCreate: [],
        pendingOrderForProducer: [],
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
    }
);

db.food.insertMany([
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Tacos",
        photo: "N/A",
        price: Double(3.45),
        rating: Double(0.00),    
        name: "Tacos",
        portionSize: 1.4,
        spicy: 2,
        allergy: ['soy', 'wheat'],
        dateCreated: new Date(),
        dateUpdated: new Date()
    },
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Peanut Butter Jelly",
        photo: "N/A",
        price: Double(2.45),
        rating: Double(0.00),    
        name: "Peanut Butter Jeally",
        portionSize: 1.8,
        spicy: 0,
        allergy: ['Peanut Butter', 'Dairy', 'Soy'],
        dateCreated: new Date(),
        dateUpdated: new Date()
    },
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Ramen",
        photo: "N/A",
        price: Double(1.45),
        rating: Double(0.00),    
        name: "Ramen",
        portionSize: 3.2,
        spicy: 1,
        allergy: ['Soy'],
        dateCreated: new Date(),
        dateUpdated: new Date()
    },
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Apple or Pumpkin flavor",
        photo: "N/A",
        price: Double(5.25),
        rating: Double(0.00),    
        name: "Pie",
        portionSize: 3,
        spicy: 0,
        allergy: ['Dairy', 'Soy'],
        dateCreated: new Date(),
        dateUpdated: new Date()
    },
]);

// Get food documents with a prouducerId of objId 
foodCursor = db.food.find({producerId: objId});

// Create an array with foodIds 
arrayOfFoodIDS = foodCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

// Sets the value of the food field to  arrayOfFoodIDS
db.producer.updateOne(
    {_id: objId},
     {$set: 
        {food: arrayOfFoodIDS} 
    }
);





