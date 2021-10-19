db.food.deleteMany({});

var foodDocument = db.producer.findOne({
    firstName: 'Jenna'
})

// Jenna's food
db.food.insertMany([
    {
        producerId: foodDocument._id,
        dietPreference: "Vegan",
        description: "Blueberry Cookie",
        photo: "N/A",
        price: Double(0.55),
        rating: Double(0.00),    
        name: "Jenna's Vegan Blueberry Cookies",
        portionSize: 1.4,
        spicy: 0,
        dateCreated: new Date(),
        dateUpdated: new Date(),
    },
    {
        producerId: foodDocument._id,
        dietPreference: "Vegan",
        description: "Chocolate Chip Cookie",
        photo: "N/A",
        price: Double(0.55),
        rating: Double(0.00),    
        name: "Jenna's Vegan Chocolate Chip Cookies",
        portionSize: 1.5,
        spicy: 0,
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
]);

// Get food documents with a prouducerId of Jenna's _id 
var foodCursor = db.food.find({producerId: foodDocument._id});

// Create an array with Food docuements _id 
var arrayOfFoodIDS = foodCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

// Sets the value of the food field, in the producer, to arrayOfFoodIDS
db.producer.updateOne(
    {_id: foodDocument._id},
    {
        $set: {
            food: arrayOfFoodIDS,
            dateUpdated: new Date()
        } 
    }
);

/********************************************************************** */
// Bob's Food document
/********************************************************************** */
var foodDocument = db.producer.findOne({
    firstName: 'Bob'
})

db.food.insertMany([
    {
        producerId: foodDocument._id,
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
        producerId: foodDocument._id,
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

foodCursor = db.food.find({producerId: foodDocument._id});

arrayOfFoodIDS = foodCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

db.producer.updateOne(
    {_id: foodDocument._id},
    {
        $set: {
            food: arrayOfFoodIDS,
            dateUpdated: new Date()
        } 
    }
);

/********************************************************************** */
// Sullivan's food, none
/********************************************************************** */

/********************************************************************** */
// Mariettas's food
/********************************************************************** */
var foodDocument = db.producer.findOne({
    firstName: 'Marietta'
})

db.food.insertMany([
    {
        producerId: foodDocument._id,
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
        producerId: foodDocument._id,
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
        producerId: foodDocument._id,
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
        producerId: foodDocument._id,
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

// Get food documents with a prouducerId of Marietta's _id 
foodCursor = db.food.find({producerId: foodDocument._id});

// Create an array with Food docuements _id 
arrayOfFoodIDS = foodCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

// Sets the value of the food field, in the producer, to arrayOfFoodIDS
db.producer.updateOne(
    {_id: foodDocument._id},
    {
        $set: {
            food: arrayOfFoodIDS,
            dateUpdated: new Date()
        } 
    }
);