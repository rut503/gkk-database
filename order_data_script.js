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
            consumer_id: consumerMap.get('Juan')._id,
            producer_id: producerMap.get('Jenna')._id,
            items:[{
                food_item_id: foodItemMap.get('Jenna\'s Vegan Blueberry Cookies')._id,
                quantity: 12
            }],
            amount: getTotalOrderPrice(foodItemMap.get('Jenna\'s Vegan Blueberry Cookies').price, 12),
            status: "producer pending",
            meal_time: "breakfast",
            order_due_datetime: getDateInFuture('breakfast', 1),
            date_created: new Date()
        },
        {
            _id: objId2,
            consumer_id: consumerMap.get('Juan')._id,
            producer_id: producerMap.get('Jenna')._id,
            items:[{
                food_item_id: foodItemMap.get('Jenna\'s Vegan Chocolate Chip Cookies')._id,
                quantity: 24
            }],
            amount: getTotalOrderPrice(foodItemMap.get('Jenna\'s Vegan Chocolate Chip Cookies').price, 24),
            status: "producer pending",
            meal_time: "breakfast",
            order_due_datetime: getDateInFuture('breakfast', 7),
            date_created: new Date(),
            date_updated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        first_name: 'Jenna'
    },
    {
        $push: {current_orders: { $each: [ objId1, objId2 ] } }
    }
)
db.consumer.updateOne(
    {
        first_name: 'Juan'
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
            consumer_id: consumerMap.get('Gio')._id,
            producer_id: producerMap.get('Marietta')._id,    
            items: [{
                food_item_id: foodItemMap.get('Tacos'), 
                quantity: 2
            }],
            amount: getTotalOrderPrice(foodItemMap.get('Tacos').price, 2),
            status: "producer accepted",
            meal_time: "dinner",
            order_due_datetime: getDateInFuture('dinner', 6),
            date_created: new Date(),
            date_updated: new Date()
        },
        { 
            _id: objId2,
            consumer_id: consumerMap.get('Gio')._id,
            producer_id: producerMap.get('Marietta')._id,    
            items: [
                {food_item_id: foodItemMap.get('Pie'), quantity: 2},
                {food_item_id: foodItemMap.get('Tacos'), quantity: 5}
            ],
            amount: getTotalOrderPrice(foodItemMap.get('Pie').price, 2) + getTotalOrderPrice(foodItemMap.get('Tacos').price, 5),
            status: "producer accepted",
            meal_time: "dinner",
            order_due_datetime: getDateInFuture('dinner', 5),
            date_created: new Date(),
            date_updated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        first_name: 'Marietta'
    },
    {
        $push: {current_orders: { $each: [ objId1, objId2 ] } }
    }
);
db.consumer.updateOne(
    {
        first_name: 'Gio'
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
            consumer_id: consumerMap.get('Jose')._id,
            producer_id: producerMap.get('Jenna')._id,    
            items: [{
                food_item_id: foodItemMap.get('Jenna\'s Vegan Blueberry Cookies'), 
                quantity: 48
            }],
            amount: getTotalOrderPrice(foodItemMap.get('Jenna\'s Vegan Blueberry Cookies').price, 48),
            status: "producer accepted",
            meal_time: "dinner",
            order_due_datetime: getDateInFuture('dinner', 2),
            date_created: new Date()
        },
        {
            _id: objId2,
            consumer_id: consumerMap.get('Jose')._id,
            producer_id: producerMap.get('Bob')._id,    
            items: [{
                food_item_id: foodItemMap.get('Bob\'s Burgers'), 
                quantity: 2
            }],
            amount: getTotalOrderPrice(foodItemMap.get('Bob\'s Burgers').price, 2),
            status: "producer accepted",
            meal_time: "lunch",
            order_due_datetime:getDateInFuture('lunch', 2),
            date_created: new Date(),
            date_updated: new Date()
        },
        {
            _id: objId3,
            consumer_id: consumerMap.get('Jose')._id,
            producer_id: producerMap.get('Bob')._id,    
            items: [{
                food_item_id: foodItemMap.get('Bob\'s Burgers'), 
                quantity: 1
            }],
            amount: getTotalOrderPrice(foodItemMap.get('Bob\'s Burgers').price, 1),
            status: "producer ready",
            meal_time: "breakfast",
            order_due_datetime: getDateInFuture('breakfast', 2),
            date_created: new Date(),
            date_updated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        first_name: 'Jenna'
    },
    {
        $push: {current_orders: objId1 }
    }
);
db.producer.updateOne(
    {
        first_name: 'Bob'
    },
    {
        $push: {current_orders: { $each: [objId2, objId3] }}
    }
);

db.consumer.updateOne(
    {
        first_name: 'Jose'
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
            consumer_id: consumerMap.get('Octovio')._id,
            producer_id: producerMap.get('Jenna')._id,    
            items: [{
                food_item_id: foodItemMap.get('Jenna\'s Vegan Chocolate Chip Cookies'), 
                quantity: 6
            }],
            amount: getTotalOrderPrice(foodItemMap.get('Jenna\'s Vegan Chocolate Chip Cookies').price, 6),
            status: "completed",
            meal_time: "dinner",
            order_due_datetime: getDateInFuture('dinner', 5),
            date_created: new Date(),
            date_updated: new Date()
        },
        {
            _id: objId2,
            consumer_id: consumerMap.get('Octovio')._id,
            producer_id: producerMap.get('Bob')._id,    
            items: [{
                food_item_id: foodItemMap.get('Bob\'s Burgers'), 
                quantity: 7
            }],
            amount: getTotalOrderPrice(foodItemMap.get('Bob\'s Burgers').price, 7),
            status: "completed",
            meal_time: "lunch",
            order_due_datetime: getDateInFuture('lunch', 3),
            date_created: new Date(),
            date_updated: new Date()
        },
    ]
);

db.producer.updateOne(
    {
        first_name: 'Jenna'
    },
    {
        $push: {archived_orders: objId1 }
    }
);
db.producer.updateOne(
    {
        first_name: 'Bob'
    },
    {
        $push: {archived_orders: objId2}
    }
);

db.consumer.updateOne(
    {
        first_name: 'Octovio'
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
        consumer_id: consumerMap.get('Antony')._id,
        producer_id: producerMap.get('Jenna')._id,    
        items: [{
            food_item_id: foodItemMap.get('Jenna\'s Vegan Chocolate Chip Cookies'), 
            quantity: 1
        }],
        amount: getTotalOrderPrice(foodItemMap.get('Jenna\'s Vegan Chocolate Chip Cookies').price, 1),
        status: "canceled",
        meal_time: "dinner",
        order_due_datetime: getDateInFuture('dinner', 2),
        date_created: new Date(),
        date_updated: new Date()
    }
);

db.producer.updateOne(
    {
        first_name: 'Jenna'
    },
    {
        $push: {archived_orders: objId1}
    }
);

db.consumer.updateOne(
    {
        first_name: 'Antony'
    },
    {
        $push: {archived_orders: objId2 }
    }
);

/********************************************************************** */
// Helper Functions
/********************************************************************** */
function getTotalOrderPrice(price, quantity){
    var intVersion = price * quantity + (price * quantity * TAX_RATE);
    return intVersion/100;
};

function getDateInFuture(mealType, daysAhead){
    // Time for meal
    var mealTime;
    // Future date, created based on mealtime and 'daysAhead' number of days a head
    var futureDate;
    if(mealType == 'breakfast'){
        mealTime = ISODate().setHours(8)
    }
    else if(mealType == 'lunch'){
        mealTime = ISODate().setHours(13)
    }
    else{
        mealTime = ISODate().setHours(18)
    }

    futureDate = new Date(mealTime + 86400 * daysAhead * 1000)

    return futureDate
};