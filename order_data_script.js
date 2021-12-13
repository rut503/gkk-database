db.active_order.deleteMany({});
db.archived_order.deleteMany({});

const TAX_RATE = 0.0625;

// Maps to store consumer, producer and food_item documents. 
var consumerMap = new Map();
var producerMap = new Map();
// var foodItemMap = new Map();

var consumerCursor = db.consumer.find({});
var producerCursor = db.producer.find({});
// var foodCursor = db.food_item.find({});

consumerCursor.forEach(function(myDoc){
    consumerMap.set(myDoc.first_name, myDoc);
});

producerCursor.forEach(function(myDoc){
    producerMap.set(myDoc.first_name, myDoc);
});

// foodCursor.forEach(function(myDoc){
//     foodItemMap.set(myDoc.name, myDoc);
// });

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
                    diet_preference: ["Vegetarian"],
                    description: "Apple or Pumpkin flavor",
                    photo: "http://rut.com",
                    price: Double(5.25),
                    rating: Double(0),    
                    name: "Pie",
                    portion_size: 3,
                    spicy: 0,
                    allergy: ["Dairy", "Soy"],
                    quantity: 12
                }
            ],
            total_price: getTotalOrderPrice(5.25, 12),
            status: "pending",
            meal_time: "breakfast",
            order_due_datetime: getDateInFuture("breakfast", 1),
            message_for_producer: "These better be great Pies!!!",
            date_created: new Date(),
            date_updated: new Date()
        },
        {
            _id: objId2,
            consumer_id: consumerMap.get("Juan")._id,
            producer_id: producerMap.get("Marietta")._id,
            items:[
                {
                    diet_preference: ["High Protein", "Vegetarian"],
                    description: "Peanut Butter Jelly",
                    photo: "http://rut.com",
                    price: Double(2.45),
                    rating: Double(0),    
                    name: "Peanut Butter Jeally",
                    portion_size: 1.8,
                    spicy: 0,
                    allergy: ["Peanut Butter", "Dairy", "Soy"],
                    quantity: 24
                }
            ],
            total_price: getTotalOrderPrice(2.45, 24),
            status: "pending",
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
        $push: {active_orders: { $each: [ objId1, objId2 ] } }
    }
)
db.consumer.updateOne(
    {
        first_name: "Juan"
    },
    {
        $push: {active_orders: { $each: [ objId1, objId2 ] } }
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
                    diet_preference: ["Vegan"],
                    description: "Blueberry Cookie",
                    photo: "http://rut.com",
                    price: Double(1.49),
                    rating: Double(0),    
                    name: "Jenna's Vegan Blueberry Cookies",
                    portion_size: 1.4,
                    spicy: 0,
                    allergy: ["Gluten"],
                    quantity: 2
                }
            ],
            total_price: getTotalOrderPrice(1.49, 2),
            status: "accepted",
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
                    diet_preference: ["Vegan"],
                    description: "Vegan Meat Balls, very tasty and real like.",
                    photo: "http://rut.com",
                    price: Double(9.99),
                    rating: Double(0),    
                    name: "Jenna's Vegan Meat Balls",
                    portion_size: 5.5,
                    spicy: 0,
                    allergy: ["Wheat"],
                    quantity: 2
                },
                {
                    diet_preference: ["Vegan"],
                    description: "Chocolate Chip Cookie",
                    photo: "http://rut.com",
                    price: Double(1.99),
                    rating: Double(0),    
                    name: "Jenna's Vegan Chocolate Chip Cookies",
                    portion_size: 1.5,
                    spicy: 0,
                    allergy: ["Gluten"],
                    quantity: 5
                }
            ],
            total_price: getTotalOrderPrice(9.99, 2) + getTotalOrderPrice(1.99, 5),
            status: "accepted",
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
        $push: {active_orders: { $each: [ objId1, objId2 ] } }
    }
);
db.consumer.updateOne(
    {
        first_name: "Gio"
    },
    {
        $push: {active_orders: { $each: [ objId1, objId2 ] } }
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
            items: [
                {
                    diet_preference: ["Vegan"],
                    description: "Blueberry Cookie",
                    photo: "http://rut.com",
                    price: Double(1.49),
                    rating: Double(0),    
                    name: "Jenna's Vegan Blueberry Cookies",
                    portion_size: 1.4,
                    spicy: 0,
                    allergy: ["Gluten"],
                    quantity: 48
                }
            ],
            total_price: getTotalOrderPrice(1.49, 48),
            status: "accepted",
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
            items: [
                {
                    diet_preference: ["Non-Vegetarian", "High Protein"],
                    description: "Freshly grown meat from neighboring farm",
                    photo: "http://rut.com",
                    price: Double(6.00),
                    rating: Double(0),    
                    name: "Bob's Burgers",
                    portion_size: 5,
                    spicy: 1,
                    allergy: ["gluten"],
                    quantity: 2
                }
            ],
            total_price: getTotalOrderPrice(6.00, 2),
            status: "accepted",
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
            items: [
                {
                    diet_preference: ["Non-Vegetarian", "High Protein"],
                    description: "Freshly grown meat from neighboring farm",
                    photo: "http://rut.com",
                    price: Double(6.00),
                    rating: Double(0),    
                    name: "Bob's Burgers",
                    portion_size: 5,
                    spicy: 1,
                    allergy: ["gluten"],
                    quantity: 1
                }
            ],
            total_price: getTotalOrderPrice(6.00, 1),
            status: "ready",
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
        $push: {active_orders: objId1 }
    }
);
db.producer.updateOne(
    {
        first_name: "Bob"
    },
    {
        $push: {active_orders: { $each: [objId2, objId3] }}
    }
);

db.consumer.updateOne(
    {
        first_name: "Jose"
    },
    {
        $push: {active_orders: { $each: [ objId1, objId2, objId3 ] } }
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
            items: [
                {
                    diet_preference: ["Vegan"],
                    description: "Chocolate Chip Cookie",
                    photo: "http://rut.com",
                    price: Double(1.99),
                    rating: Double(0),    
                    name: "Jenna's Vegan Chocolate Chip Cookies",
                    portion_size: 1.5,
                    spicy: 0,
                    allergy: ["Gluten"],
                    quantity: 6
                }
            ],
            total_price: getTotalOrderPrice(1.99, 6),
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
            items: [
                {
                    diet_preference: ["Non-Vegetarian", "High Protein"],
                    description: "Freshly grown meat from neighboring farm",
                    photo: "http://rut.com",
                    price: Double(6.00),
                    rating: Double(0),
                    name: "Bob's Burgers",
                    portion_size: 5,
                    spicy: 1,
                    allergy: ["gluten"],
                    quantity: 7
                }
            ],
            total_price: getTotalOrderPrice(6.00, 7),
            status: "completed",
            meal_time: "lunch",
            order_due_datetime: getDateInFuture("lunch", 3),
            message_for_producer: "Make it crisp please...",
            date_created: new Date(),
            date_updated: new Date()
        },
    ]
);

/********************************************************************** */
// Antony's Order
/********************************************************************** */
objId1 = new ObjectId();
objId2 = new ObjectId();

db.archived_order.insertOne(
    {
        _id: objId1,
        consumer_id: consumerMap.get("Antony")._id,
        producer_id: producerMap.get("Jenna")._id,    
        items: [
            {
                diet_preference: ["Vegan"],
                description: "Chocolate Chip Cookie",
                photo: "http://rut.com",
                price: Double(1.99),
                rating: Double(0),    
                name: "Jenna's Vegan Chocolate Chip Cookies",
                portion_size: 1.5,
                spicy: 0,
                allergy: ["Gluten"],
                quantity: 1
            }
        ],
        total_price: getTotalOrderPrice(1.99, 1),
        status: "cancelled_by_consumer",
        meal_time: "dinner",
        order_due_datetime: getDateInFuture("dinner", 2),
        message_for_producer: "Make em delicious please.",
        date_created: new Date(),
        date_updated: new Date()
    }
);

db.archived_order.insertOne(
    {
        _id: objId2,
        consumer_id: consumerMap.get("Octovio")._id,
        producer_id: producerMap.get("Bob")._id,    
        items: [
            {
                diet_preference: ["Non-Vegetarian", "High Protein"],
                description: "Freshly grown meat from neighboring farm",
                photo: "http://rut.com",
                price: Double(6.00),
                rating: Double(0),
                name: "Bob's Burgers",
                portion_size: 5,
                spicy: 1,
                allergy: ["gluten"],
                quantity: 7
            }
        ],
        total_price: getTotalOrderPrice(6.00, 7),
        status: "cancelled_by_producer",
        meal_time: "lunch",
        order_due_datetime: getDateInFuture("lunch", 3),
        message_for_producer: "Make it crisp please...",
        date_created: new Date(),
        date_updated: new Date()
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