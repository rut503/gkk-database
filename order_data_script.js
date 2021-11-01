db.active_order.deleteMany({});
db.archived_order.deleteMany({});

const TAX_RATE = 0.0625;

// Maps to store consumer, producer and food_item documents. 
var consumerMap = new Map();
var producerMap = new Map();
var foodItemMap = new Map();

var consumerCursor = db.consumer.find({});
var producerCursor = db.producer.find({});
var foodCursor = db.food_item.find({});

foodCursor.forEach(function(myDoc){
    foodItemMap.set(myDoc.name, myDoc);
});

producerCursor.forEach(function(myDoc){
    producerMap.set(myDoc.first_name, myDoc);
});

consumerCursor.forEach(function(myDoc){
    consumerMap.set(myDoc.first_name, myDoc);
});

/********************************************************************** */
// Juan's Order
/********************************************************************** */
var objId1 = new ObjectId();
var objId2 = new ObjectId();
var objId3 = new ObjectId();

db.active_order.insertMany(
    [
        {
            _id: objId1,
            consumer_id: consumerMap.get("Juan")._id,
            producer_id: producerMap.get("Marietta")._id,
            items: [
                {
                    food_item: {
                        diet_preference: "N/A",
                        description: "Apple or Pumpkin flavor",
                        photo: "N/A",
                        price: Double(5.25),
                        rating: 0,    
                        name: "Pie",
                        portion_size: 3,
                        spicy: 0,
                        allergy: ["Dairy", "Soy"]
                    },
                    quantity: 12
                }
            ],
            amount: getTotalOrderPrice(foodItemMap.get("Pie").price, 12),
            status: "producer pending",
            meal_time: "breakfast",
            order_due_datetime: getDateInFuture("breakfast", 1),
            message_for_producer: "These better be great PB&Js too!!!",
            date_created: new Date(),
            date_updated: new Date()
        },
        {
            _id: objId2,
            consumer_id: consumerMap.get("Juan")._id,
            producer_id: producerMap.get("Marietta")._id,
            items:[
                {
                    food_item: {
                        diet_preference: "N/A",
                        description: "Peanut Butter Jelly",
                        photo: "N/A",
                        price: Double(2.45),
                        rating: 0,    
                        name: "Peanut Butter Jeally",
                        portion_size: 1.8,
                        spicy: 0,
                        allergy: ["Peanut Butter", "Dairy", "Soy"]
                    },
                    quantity: 24
                }
            ],
            amount: getTotalOrderPrice(foodItemMap.get("Peanut Butter Jeally").price, 24),
            status: "producer pending",
            meal_time: "breakfast",
            order_due_datetime: getDateInFuture("breakfast", 7),
            message_for_producer: "These better be great PB&Js too!!!",
            date_created: new Date(),
            date_updated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        first_name: "Marietta"
    },
    {
        $push: {current_orders: { $each: [ objId1, objId2 ] } }
    }
)
db.consumer.updateOne(
    {
        first_name: "Juan"
    },
    {
        $push: {current_orders: { $each: [ objId1, objId2 ] } }
    }
);
/********************************************************************** */
// Gio's Order
/********************************************************************** */
objId1 = new ObjectId();
objId2 = new ObjectId();

db.active_order.insertMany(
    [
        { 
            _id: objId1,
            consumer_id: consumerMap.get("Gio")._id,
            producer_id: producerMap.get("Jenna")._id,    
            items: [
                {
                    food_item: {
                        diet_preference: "Vegan",
                        description: "Blueberry Cookie",
                        photo: "N/A",
                        price: Double(1.49),
                        rating: 0,    
                        name: "Jenna's Vegan Blueberry Cookies",
                        portion_size: 1.4,
                        spicy: 0,
                        allergy: ["Gluten"]
                    }, 
                    quantity: 2
                }
            ],
            amount: getTotalOrderPrice(foodItemMap.get("Jenna's Vegan Blueberry Cookies").price, 2),
            status: "producer accepted",
            meal_time: "dinner",
            order_due_datetime: getDateInFuture("dinner", 6),
            message_for_producer: "Make em sweet af!!!",
            date_created: new Date(),
            date_updated: new Date()
        },
        { 
            _id: objId2,
            consumer_id: consumerMap.get("Gio")._id,
            producer_id: producerMap.get("Jenna")._id,    
            items: [
                {
                    food_item: {
                        diet_preference: "Vegan",
                        description: "Vegan Meat Balls, very tasty and real like.",
                        photo: "N/A",
                        price: Double(9.99),
                        rating: 0,    
                        name: "Jenna's Vegan Meat Balls",
                        portion_size: 5.5,
                        spicy: 0,
                        allergy: ["Wheat"]
                    }, 
                    quantity: 2
                },
                {
                    food_item: {
                        diet_preference: "Vegan",
                        description: "Chocolate Chip Cookie",
                        photo: "N/A",
                        price: Double(1.99),
                        rating: 0,    
                        name: "Jenna's Vegan Chocolate Chip Cookies",
                        portion_size: 1.5,
                        spicy: 0,
                        allergy: ["Gluten"]
                    }, 
                    quantity: 5
                }
            ],
            amount: getTotalOrderPrice(foodItemMap.get("Jenna's Vegan Chocolate Chip Cookies").price, 2) + getTotalOrderPrice(foodItemMap.get("Jenna's Vegan Meat Balls").price, 5),
            status: "producer accepted",
            meal_time: "dinner",
            order_due_datetime: getDateInFuture("dinner", 5),
            message_for_producer: "Make em delicious.",
            date_created: new Date(),
            date_updated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        first_name: "Jenna"
    },
    {
        $push: {current_orders: { $each: [ objId1, objId2 ] } }
    }
);
db.consumer.updateOne(
    {
        first_name: "Gio"
    },
    {
        $push: {current_orders: { $each: [ objId1, objId2 ] } }
    }
);

/********************************************************************** */
// Jose's Order
/********************************************************************** */
objId1 = new ObjectId();
objId2 = new ObjectId();
objId3 = new ObjectId();

db.active_order.insertMany(
    [
        {
            _id: objId1,
            consumer_id: consumerMap.get("Jose")._id,
            producer_id: producerMap.get("Jenna")._id,    
            items: [{
                food_item_id: {
                    diet_preference: "Vegan",
                    description: "Blueberry Cookie",
                    photo: "N/A",
                    price: Double(1.49),
                    rating: 0,    
                    name: "Jenna's Vegan Blueberry Cookies",
                    portion_size: 1.4,
                    spicy: 0,
                    allergy: ["Gluten"]
                }, 
                quantity: 48
            }],
            amount: getTotalOrderPrice(foodItemMap.get("Jenn's Vegan Blueberry Cookies").price, 48),
            status: "producer accepted",
            meal_time: "dinner",
            order_due_datetime: getDateInFuture("dinner", 2),
            message_for_producer: "Make em very very delicious.",
            date_created: new Date(),
            date_updated: new Date()
        },
        {
            _id: objId2,
            consumer_id: consumerMap.get("Jose")._id,
            producer_id: producerMap.get("Bob")._id,    
            items: [{
                food_item_id: {
                    diet_preference: "N/A",
                    description: "Freshly grown meat from neighboring farm",
                    photo: "N/A",
                    price: Double(6.00),
                    rating: 0,    
                    name: "Bob's Burgers",
                    portion_size: 5,
                    spicy: 1,
                    allergy: ["gluten"]
                }, 
                quantity: 2
            }],
            amount: getTotalOrderPrice(foodItemMap.get("Bob's Burgers").price, 2),
            status: "producer accepted",
            meal_time: "lunch",
            order_due_datetime: getDateInFuture("lunch", 2),
            message_for_producer: "Make em not delicious.",
            date_created: new Date(),
            date_updated: new Date()
        },
        {
            _id: objId3,
            consumer_id: consumerMap.get("Jose")._id,
            producer_id: producerMap.get("Bob")._id,    
            items: [{
                food_item_id: {
                    diet_preference: "N/A",
                    description: "Freshly grown meat from neighboring farm",
                    photo: "N/A",
                    price: Double(6.00),
                    rating: 0,    
                    name: "Bob's Burgers",
                    portion_size: 5,
                    spicy: 1,
                    allergy: ["gluten"]
                },
                quantity: 1
            }],
            amount: getTotalOrderPrice(foodItemMap.get("Bob's Burgers").price, 1),
            status: "producer ready",
            meal_time: "breakfast",
            order_due_datetime: getDateInFuture("breakfast", 2),
            message_for_producer: "Make only little delicious.",
            date_created: new Date(),
            date_updated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        first_name: "Jenna"
    },
    {
        $push: {current_orders: objId1 }
    }
);
db.producer.updateOne(
    {
        first_name: "Bob"
    },
    {
        $push: {current_orders: { $each: [objId2, objId3] }}
    }
);

db.consumer.updateOne(
    {
        first_name: "Jose"
    },
    {
        $push: {current_orders: { $each: [ objId1, objId2, objId3 ] } }
    }
);

/********************************************************************** */
// Octovio's Order
/********************************************************************** */
objId1 = new ObjectId();
objId2 = new ObjectId();

db.archived_order.insertMany(
    [
        {
            _id: objId1,
            consumer_id: consumerMap.get("Octovio")._id,
            producer_id: producerMap.get("Jenna")._id,    
            items: [{
                food_item_id: {
                    diet_preference: "Vegan",
                    description: "Chocolate Chip Cookie",
                    photo: "N/A",
                    price: Double(1.99),
                    rating: 0,    
                    name: "Jenna's Vegan Chocolate Chip Cookies",
                    portion_size: 1.5,
                    spicy: 0,
                    allergy: ["Gluten"]
                }, 
                quantity: 6
            }],
            amount: getTotalOrderPrice(foodItemMap.get("Jenna's Vegan Chocolate Chip Cookies").price, 6),
            status: "completed",
            meal_time: "dinner",
            order_due_datetime: getDateInFuture("dinner", 5),
            message_for_producer: "Can you add some green grapes?",
            date_created: new Date(),
            date_updated: new Date()
        },
        {
            _id: objId2,
            consumer_id: consumerMap.get("Octovio")._id,
            producer_id: producerMap.get("Bob")._id,    
            items: [{
                food_item: {
                    diet_preference: "N/A",
                    description: "Freshly grown meat from neighboring farm",
                    photo: "N/A",
                    price: Double(6.00),
                    rating: 0,
                    name: "Bob's Burgers",
                    portion_size: 5,
                    spicy: 1,
                    allergy: ["gluten"]
                }, 
                quantity: 7
            }],
            amount: getTotalOrderPrice(foodItemMap.get("Bob's Burgers").price, 7),
            status: "completed",
            meal_time: "lunch",
            order_due_datetime: getDateInFuture("lunch", 3),
            message_for_producer: "Make it crisp please...",
            date_created: new Date(),
            date_updated: new Date()
        },
    ]
);

db.producer.updateOne(
    {
        first_name: "Jenna"
    },
    {
        $push: {archived_orders: objId1 }
    }
);
db.producer.updateOne(
    {
        first_name: "Bob"
    },
    {
        $push: {archived_orders: objId2}
    }
);

db.consumer.updateOne(
    {
        first_name: "Octovio"
    },
    {
        $push: {archived_orders: { $each: [ objId1, objId2 ] } }
    }
);

/********************************************************************** */
// Antony's Order
/********************************************************************** */
objId1 = new ObjectId();

db.archived_order.insertOne(
    {
        _id: objId1,
        consumer_id: consumerMap.get("Antony")._id,
        producer_id: producerMap.get("Jenna")._id,    
        items: [{
            food_item: {
                diet_preference: "Vegan",
                description: "Chocolate Chip Cookie",
                photo: "N/A",
                price: Double(1.99),
                rating: 0,    
                name: "Jenna's Vegan Chocolate Chip Cookies",
                portion_size: 1.5,
                spicy: 0,
                allergy: ["Gluten"]
            }, 
            quantity: 1
        }],
        amount: getTotalOrderPrice(foodItemMap.get("Jenna's Vegan Chocolate Chip Cookies").price, 1),
        status: "canceled",
        meal_time: "dinner",
        order_due_datetime: getDateInFuture("dinner", 2),
        message_for_producer: "Make em delicious please.",
        date_created: new Date(),
        date_updated: new Date()
    }
);

db.producer.updateOne(
    {
        first_name: "Jenna"
    },
    {
        $push: {archived_orders: objId1}
    }
);

db.consumer.updateOne(
    {
        first_name: "Antony"
    },
    {
        $push: {archived_orders: objId2 }
    }
);

/********************************************************************** */
// Helper Functions
/********************************************************************** */
function getTotalOrderPrice(price, quantity){
    var totalPrice = price * quantity + (price * quantity * TAX_RATE);
    totalPrice = Number.parseFloat(totalPrice).toFixed(2)
    return Double(totalPrice);
};

function getDateInFuture(mealType, daysAhead){
    // Time for meal
    var mealTime;
    // Future date, created based on mealtime and 'daysAhead' number of days a head
    var futureDate;
    if(mealType == "breakfast"){
        mealTime = ISODate().setHours(8)
    }
    else if(mealType == "lunch"){
        mealTime = ISODate().setHours(13)
    }
    else{
        mealTime = ISODate().setHours(18)
    }

    futureDate = new Date(mealTime + 86400 * daysAhead * 1000)

    return futureDate
};