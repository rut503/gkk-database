db.food_item.deleteMany({});

var foodItemDocument = db.producer.findOne({
    first_name: "Jenna"
})

// Jenna's food_item
db.food_item.insertMany([
    {
        producer_id: foodItemDocument._id,
        diet_preference: "Vegan",
        description: "Blueberry Cookie",
        photo: "N/A",
        price: Double(1.49),
        rating: Double(0.00),    
        name: "Jenna's Vegan Blueberry Cookies",
        portion_size: 1.4,
        spicy: 0,
        allergy: ["Gluten"],
        date_created: new Date(),
        date_updated: new Date(),
    },
    {
        producer_id: foodItemDocument._id,
        diet_preference: "Vegan",
        description: "Chocolate Chip Cookie",
        photo: "N/A",
        price: Double(1.99),
        rating: Double(0.00),    
        name: "Jenna's Vegan Chocolate Chip Cookies",
        portion_size: 1.5,
        spicy: 0,
        allergy: ["Gluten"],
        date_created: new Date(),
        date_updated: new Date()
    },
    {
        producer_id: foodItemDocument._id,
        diet_preference: "Vegan",
        description: "Vegan Meat Balls, very tasty and real like.",
        photo: "N/A",
        price: Double(9.99),
        rating: Double(0.00),    
        name: "Jenna's Vegan Meat Balls",
        portion_size: 5.5,
        spicy: 0,
        allergy: ["Wheat"],
        date_created: new Date(),
        date_updated: new Date()
    }
]);

// Get food documents with a prouducerId of Jenna's _id 
var foodItemCursor = db.food_item.find({ producer_id: foodItemDocument._id });

// Create an array with Food docuements _id 
var arrayOfFoodIDS = foodItemCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

// Sets the value of the food field, in the producer, to arrayOfFoodIDS
db.producer.updateOne(
    {
        _id: foodItemDocument._id
    },
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
        price: Double(6.00),
        rating: Double(0.00),    
        name: "Bob's Burgers",
        portion_size: 5,
        spicy: 1,
        allergy: ["gluten"],
        date_created: new Date(),
        date_updated: new Date()
    },
    {
        producer_id: foodItemDocument._id,
        diet_preference: "N/A",
        description: "Homegrown potatoes!",
        photo: "N/A",
        price: Double(4.45),
        rating: Double(0.00),    
        name: "Bob's Freshest Fries",
        portion_size: 3,
        spicy: 0,
        allergy: [],
        date_created: new Date(),
        date_updated: new Date()
    }
]);

foodItemCursor = db.food_item.find({ producer_id: foodItemDocument._id });

arrayOfFoodIDS = foodItemCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

db.producer.updateOne(
    {
        _id: foodItemDocument._id
    },
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
    first_name: "Marietta"
})

db.food_item.insertMany([
    {
        producer_id: foodItemDocument._id,
        diet_preference: "N/A",
        description: "Tacos",
        photo: "N/A",
        price: Double(3.45),
        rating: Double(0.00),    
        name: "Tacos",
        portion_size: 1.4,
        spicy: 2,
        allergy: ["Soy", "Wheat"],
        date_created: new Date(),
        date_updated: new Date()
    },
    {
        producer_id: foodItemDocument._id,
        diet_preference: "N/A",
        description: "Peanut Butter Jelly",
        photo: "N/A",
        price: Double(2.45),
        rating: Double(0.00),    
        name: "Peanut Butter Jeally",
        portion_size: 1.8,
        spicy: 0,
        allergy: ["Peanut Butter", "Dairy", "Soy"],
        date_created: new Date(),
        date_updated: new Date()
    },
    {
        producer_id: foodItemDocument._id,
        diet_preference: "N/A",
        description: "Ramen",
        photo: "N/A",
        price: Double(1.45),
        rating: Double(0.00),    
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
        price: Double(5.25),
        rating: Double(0.00),    
        name: "Pie",
        portion_size: 3,
        spicy: 0,
        allergy: ["Dairy", "Soy"],
        date_created: new Date(),
        date_updated: new Date()
    },
]);

// Get food documents with a prouducerId of Marietta's _id 
foodItemCursor = db.food_item.find({ producer_id: foodItemDocument._id });

// Create an array with Food docuements _id 
arrayOfFoodIDS = foodItemCursor.map( function(myDoc) {
        return myDoc._id
    } 
).toArray();

// Sets the value of the food field, in the producer, to arrayOfFoodIDS
db.producer.updateOne(
    {
        _id: foodItemDocument._id
    },
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