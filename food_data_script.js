db.food_item.deleteMany({});

var foodItemDocument = db.producer.findOne({
    first_name: 'Jenna'
})

// Jenna's food_item
db.food_item.insertMany([
    {
        producer_id: foodItemDocument._id,
        diet_preference: "Vegan",
        description: "Blueberry Cookie",
        photo: "N/A",
        price: 55,
        rating: 0,    
        name: "Jenna's Vegan Blueberry Cookies",
        portion_size: 1.4,
        spicy: 0,
        date_created: new Date(),
        date_updated: new Date(),
    },
    {
        producer_id: foodItemDocument._id,
        diet_preference: "Vegan",
        description: "Chocolate Chip Cookie",
        photo: "N/A",
        price: 55,
        rating: 0,    
        name: "Jenna's Vegan Chocolate Chip Cookies",
        portion_size: 1.5,
        spicy: 0,
        date_created: new Date(),
        date_updated: new Date()
    }
]);

// Get food documents with a prouducerId of Jenna's _id 
var foodItemCursor = db.food_item.find({producer_id: foodItemDocument._id});

// Create an array with Food docuements _id 
var arrayOfFoodIDS = foodItemCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

// Sets the value of the food field, in the producer, to arrayOfFoodIDS
db.producer.updateOne(
    {_id: foodItemDocument._id},
    {
        $set: {
            food_items: arrayOfFoodIDS,
            "menu.sunday.breakfast": arrayOfFoodIDS,
            "menu.monday.breakfast": arrayOfFoodIDS,
            "menu.tuesday.breakfast": arrayOfFoodIDS,
            "menu.wednesday.breakfast": arrayOfFoodIDS,
            "menu.thursday.breakfast": arrayOfFoodIDS,
            "menu.friday.breakfast": arrayOfFoodIDS,
            "menu.saturday.breakfast": arrayOfFoodIDS,
            date_updated: new Date()
        } 
    }
);

/********************************************************************** */
// Bob's Food document
/********************************************************************** */
var foodItemDocument = db.producer.findOne({
    first_name: 'Bob'
})

db.food_item.insertMany([
    {
        producer_id: foodItemDocument._id,
        diet_preference: "N/A",
        description: "Freshly grown meat from neighboring farm",
        photo: "N/A",
        price: 600,
        rating: 0,    
        name: "Bob's Burgers",
        portion_size: 5,
        spicy: "1",
        date_created: new Date(),
        date_updated: new Date()
    },
    {
        producer_id: foodItemDocument._id,
        diet_preference: "N/A",
        description: "Homegrown potatoes!",
        photo: "N/A",
        price: 445,
        rating: 0,    
        name: "Bob's Freshest Fries",
        portion_size: 3,
        spicy: 0,
        date_created: new Date(),
        date_updated: new Date()
    }
]);

foodItemCursor = db.food_item.find({producer_id: foodItemDocument._id});

arrayOfFoodIDS = foodItemCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

db.producer.updateOne(
    {_id: foodItemDocument._id},
    {
        $set: {
            food_items: arrayOfFoodIDS,
            "menu.friday.lunch": arrayOfFoodIDS,
            "menu.friday.dinner": arrayOfFoodIDS,
            "menu.sunday.lunch": arrayOfFoodIDS,
            "menu.sunday.dinner": arrayOfFoodIDS,
            "menu.saturday.lunch": arrayOfFoodIDS,
            "menu.saturday.dinner": arrayOfFoodIDS,
            date_updated: new Date()
        } 
    }
);

/********************************************************************** */
// Sullivan's food, none
/********************************************************************** */

/********************************************************************** */
// Mariettas's food
/********************************************************************** */
var foodItemDocument = db.producer.findOne({
    first_name: 'Marietta'
})

db.food_item.insertMany([
    {
        producer_id: foodItemDocument._id,
        diet_preference: "N/A",
        description: "Tacos",
        photo: "N/A",
        price: 345,
        rating: 0,    
        name: "Tacos",
        portion_size: 1.4,
        spicy: 2,
        allergy: ['Soy', 'Wheat'],
        date_created: new Date(),
        date_updated: new Date()
    },
    {
        producer_id: foodItemDocument._id,
        diet_preference: "N/A",
        description: "Peanut Butter Jelly",
        photo: "N/A",
        price: 245,
        rating: 0,    
        name: "Peanut Butter Jeally",
        portion_size: 1.8,
        spicy: 0,
        allergy: ['Peanut Butter', 'Dairy', 'Soy'],
        date_created: new Date(),
        date_updated: new Date()
    },
    {
        producer_id: foodItemDocument._id,
        diet_preference: "N/A",
        description: "Ramen",
        photo: "N/A",
        price: 145,
        rating: 0,    
        name: "Ramen",
        portion_size: 3.2,
        spicy: 1,
        allergy: ['Soy'],
        date_created: new Date(),
        date_updated: new Date()
    },
    {
        producer_id: foodItemDocument._id,
        diet_preference: "N/A",
        description: "Apple or Pumpkin flavor",
        photo: "N/A",
        price: 525,
        rating: 0,    
        name: "Pie",
        portion_size: 3,
        spicy: 0,
        allergy: ['Dairy', 'Soy'],
        date_created: new Date(),
        date_updated: new Date()
    },
]);

// Get food documents with a prouducerId of Marietta's _id 
foodItemCursor = db.food_item.find({producer_id: foodItemDocument._id});

// Create an array with Food docuements _id 
arrayOfFoodIDS = foodItemCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

// Sets the value of the food field, in the producer, to arrayOfFoodIDS
db.producer.updateOne(
    {_id: foodItemDocument._id},
    {
        $set: {
            food_items: arrayOfFoodIDS,
            date_updated: new Date()
        } 
    }
);

db.producer.updateOne(
    {
        _id: foodItemDocument._id
    },
    {
        $push: {
            "menu.monday.dinner": arrayOfFoodIDS[0],
            "menu.tuesday.dinner": arrayOfFoodIDS[0],
            "menu.friday.lunch": arrayOfFoodIDS[1],
            "menu.friday.dinner": arrayOfFoodIDS[2],
            "menu.saturday.lunch": arrayOfFoodIDS[1],
            "menu.saturday.dinner": arrayOfFoodIDS[2],
            "menu.sunday.dinner": arrayOfFoodIDS[3],
        }
    }
)