db.foodItem.deleteMany({});

var foodItemDocument = db.producer.findOne({
    firstName: "Jenna"
})

// Jenna's foodItem
db.foodItem.insertMany([
    {
        producerId: foodItemDocument._id,
        dietPreference: ["Vegan"],
        description: "Blueberry Cookie",
        photo: "https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80",
        price: Double(1.49),
        rating: Double(0.00),    
        name: "Jenna's Vegan Blueberry Cookies",
        portionSize: 1.4,
        spicy: 0,
        allergy: ["Gluten"],
        dateCreated: new Date(),
        dateUpdated: new Date(),
    },
    {
        producerId: foodItemDocument._id,
        dietPreference: ["Vegan"],
        description: "Chocolate Chip Cookie",
        photo: "https://images.unsplash.com/photo-1629677594742-58acc2c5ca82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        price: Double(1.99),
        rating: Double(0.00),    
        name: "Jenna's Vegan Chocolate Chip Cookies",
        portionSize: 1.5,
        spicy: 0,
        allergy: ["Gluten"],
        dateCreated: new Date(),
        dateUpdated: new Date()
    },
    {
        producerId: foodItemDocument._id,
        dietPreference: ["Vegan"],
        description: "Vegan Meat Balls, very tasty and real like.",
        photo: "https://veganhuggs.com/wp-content/uploads/2021/03/vegan-swedish-meatballs-square-cropped.jpg",
        price: Double(9.99),
        rating: Double(0.00),    
        name: "Jenna's Vegan Meat Balls",
        portionSize: 5.5,
        spicy: 0,
        allergy: ["Wheat"],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
]);

// Get food documents with a prouducerId of Jenna's _id 
var foodItemCursor = db.foodItem.find({ producerId: foodItemDocument._id });

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
            foodItemIds: arrayOfFoodIDS,
            // "menu.sunday.breakfast": arrayOfFoodIDS,
            // "menu.monday.breakfast": arrayOfFoodIDS,
            // "menu.tuesday.breakfast": arrayOfFoodIDS,
            // "menu.wednesday.breakfast": arrayOfFoodIDS,
            // "menu.thursday.breakfast": arrayOfFoodIDS,
            // "menu.friday.breakfast": arrayOfFoodIDS,
            // "menu.saturday.breakfast": arrayOfFoodIDS,
            dateUpdated: new Date()
        } 
    }
);

/********************************************************************** */
// Bob's Food document
/********************************************************************** */
var foodItemDocument = db.producer.findOne({
    firstName: 'Bob'
})

db.foodItem.insertMany([
    {
        producerId: foodItemDocument._id,
        dietPreference: ["Non-Vegetarian", "High Protein"],
        description: "Freshly grown meat from neighboring farm",
        photo: "https://images.unsplash.com/photo-1595356161904-6708c97be89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        price: Double(6.00),
        rating: Double(0.00),    
        name: "Bob's Burgers",
        portionSize: 5,
        spicy: 1,
        allergy: ["gluten"],
        dateCreated: new Date(),
        dateUpdated: new Date()
    },
    {
        producerId: foodItemDocument._id,
        dietPreference: ["Low Carb"],
        description: "Homegrown potatoes!",
        photo: "https://images.unsplash.com/photo-1617130094141-532436117aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        price: Double(4.45),
        rating: Double(0.00),
        name: "Bob's Freshest Fries",
        portionSize: 3,
        spicy: 0,
        allergy: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
]);

foodItemCursor = db.foodItem.find({ producerId: foodItemDocument._id });

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
            foodItemIds: arrayOfFoodIDS,
            // "menu.friday.lunch": arrayOfFoodIDS,
            // "menu.friday.dinner": arrayOfFoodIDS,
            // "menu.sunday.lunch": arrayOfFoodIDS,
            // "menu.sunday.dinner": arrayOfFoodIDS,
            // "menu.saturday.lunch": arrayOfFoodIDS,
            // "menu.saturday.dinner": arrayOfFoodIDS,
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
var foodItemDocument = db.producer.findOne({
    firstName: "Marietta"
})

db.foodItem.insertMany([
    {
        producerId: foodItemDocument._id,
        dietPreference: ["Nut Free", "Vegetarian"],
        description: "Tacos",
        photo: "https://images.unsplash.com/photo-1618414466256-4b62f39b5b30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80",
        price: Double(3.45),
        rating: Double(0.00),    
        name: "Tacos",
        portionSize: 1.4,
        spicy: 2,
        allergy: ["Soy", "Wheat"],
        dateCreated: new Date(),
        dateUpdated: new Date()
    },
    {
        producerId: foodItemDocument._id,
        dietPreference: ["High Protein", "Vegetarian"],
        description: "Peanut Butter Jelly",
        photo: "https://images.unsplash.com/photo-1562772249-809f2de8fd76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        price: Double(2.45),
        rating: Double(0.00),    
        name: "Peanut Butter Jeally",
        portionSize: 1.8,
        spicy: 0,
        allergy: ["Peanut Butter", "Dairy", "Soy"],
        dateCreated: new Date(),
        dateUpdated: new Date()
    },
    {
        producerId: foodItemDocument._id,
        dietPreference: ["Vegetarian"],
        description: "Ramen",
        photo: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
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
        producerId: foodItemDocument._id,
        dietPreference: ["Vegetarian"],
        description: "Apple or Pumpkin flavor",
        photo: "https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        price: Double(5.25),
        rating: Double(0.00),    
        name: "Pie",
        portionSize: 3,
        spicy: 0,
        allergy: ["Dairy", "Soy"],
        dateCreated: new Date(),
        dateUpdated: new Date()
    },
]);

// Get food documents with a prouducerId of Marietta's _id 
foodItemCursor = db.foodItem.find({ producerId: foodItemDocument._id });

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
            foodItemIds: arrayOfFoodIDS,
            dateUpdated: new Date()
        } 
    }
);

// db.producer.updateOne(
//     {
//         _id: foodItemDocument._id
//     },
//     {
//         $push: {
//             "menu.monday.dinner": arrayOfFoodIDS[0],
//             "menu.tuesday.dinner": arrayOfFoodIDS[0],
//             "menu.friday.lunch": arrayOfFoodIDS[1],
//             "menu.friday.dinner": arrayOfFoodIDS[2],
//             "menu.saturday.lunch": arrayOfFoodIDS[1],
//             "menu.saturday.dinner": arrayOfFoodIDS[2],
//             "menu.sunday.dinner": arrayOfFoodIDS[3],
//         }
//     }
// )