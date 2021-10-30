db.active_order.deleteMany({});
db.archived_order.deleteMany({});

const TAX_RATE = 0.0625;

// Maps to store consumer, producer and food documents. 
var consumerMap = new Map();
var producerMap = new Map();
var foodMap = new Map();

var consumerCursor = db.consumer.find({});
var producerCursor = db.producer.find({});
var foodCursor = db.food.find({});

foodCursor.forEach(function(myDoc){
    foodMap.set(myDoc.name, myDoc);
});

producerCursor.forEach(function(myDoc){
    producerMap.set(myDoc.firstName, myDoc);
});

consumerCursor.forEach(function(myDoc){
    consumerMap.set(myDoc.firstName, myDoc);
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
            consumerId: consumerMap.get('Juan')._id,
            producerId: producerMap.get('Jenna')._id,
            items:[{
                foodId: foodMap.get('Jenna\'s Vegan Blueberry Cookies')._id,
                quantity: 12
            }],
            amount: getTotalOrderPrice(foodMap.get('Jenna\'s Vegan Blueberry Cookies').price, 12),
            status: "producer pending",
            mealTime: "breakfast",
            pickUpDateTime: getDateInFuture('breakfast', 1),
            dateCreated: new Date()
        },
        {
            _id: objId2,
            consumerId: consumerMap.get('Juan')._id,
            producerId: producerMap.get('Jenna')._id,
            items:[{
                foodId: foodMap.get('Jenna\'s Vegan Chocolate Chip Cookies')._id,
                quantity: 24
            }],
            amount: getTotalOrderPrice(foodMap.get('Jenna\'s Vegan Chocolate Chip Cookies').price, 24),
            status: "producer pending",
            mealTime: "breakfast",
            pickUpDateTime: getDateInFuture('breakfast', 7),
            dateCreated: new Date(),
            dateUpdated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        firstName: 'Jenna'
    },
    {
        $push: {currentOrders: { $each: [ objId1, objId2 ] } }
    }
)
db.consumer.updateOne(
    {
        firstName: 'Juan'
    },
    {
        $push: {currentOrders: { $each: [ objId1, objId2 ] } }
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
            consumerId: consumerMap.get('Gio')._id,
            producerId: producerMap.get('Marietta')._id,    
            items: [{
                foodId: foodMap.get('Tacos'), 
                quantity: 2
            }],
            amount: getTotalOrderPrice(foodMap.get('Tacos').price, 2),
            status: "producer accepted",
            mealTime: "dinner",
            pickUpDateTime: getDateInFuture('dinner', 6),
            dateCreated: new Date(),
            dateUpdated: new Date()
        },
        { 
            _id: objId2,
            consumerId: consumerMap.get('Gio')._id,
            producerId: producerMap.get('Marietta')._id,    
            items: [
                {foodId: foodMap.get('Pie'), quantity: 2},
                {foodId: foodMap.get('Tacos'), quantity: 5}
            ],
            amount: getTotalOrderPrice(foodMap.get('Pie').price, 2) + getTotalOrderPrice(foodMap.get('Tacos').price, 5),
            status: "producer accepted",
            mealTime: "dinner",
            pickUpDateTime: getDateInFuture('dinner', 5),
            dateCreated: new Date(),
            dateUpdated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        firstName: 'Marietta'
    },
    {
        $push: {currentOrders: { $each: [ objId1, objId2 ] } }
    }
);
db.consumer.updateOne(
    {
        firstName: 'Gio'
    },
    {
        $push: {currentOrders: { $each: [ objId1, objId2 ] } }
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
            consumerId: consumerMap.get('Jose')._id,
            producerId: producerMap.get('Jenna')._id,    
            items: [{
                foodId: foodMap.get('Jenna\'s Vegan Blueberry Cookies'), 
                quantity: 48
            }],
            amount: getTotalOrderPrice(foodMap.get('Jenna\'s Vegan Blueberry Cookies').price, 48),
            status: "producer accepted",
            mealTime: "dinner",
            pickUpDateTime: getDateInFuture('dinner', 2),
            dateCreated: new Date()
        },
        {
            _id: objId2,
            consumerId: consumerMap.get('Jose')._id,
            producerId: producerMap.get('Bob')._id,    
            items: [{
                foodId: foodMap.get('Bob\'s Burgers'), 
                quantity: 2
            }],
            amount: getTotalOrderPrice(foodMap.get('Bob\'s Burgers').price, 2),
            status: "producer accepted",
            mealTime: "lunch",
            pickUpDateTime:getDateInFuture('lunch', 2),
            dateCreated: new Date(),
            dateUpdated: new Date()
        },
        {
            _id: objId3,
            consumerId: consumerMap.get('Jose')._id,
            producerId: producerMap.get('Bob')._id,    
            items: [{
                foodId: foodMap.get('Bob\'s Burgers'), 
                quantity: 1
            }],
            amount: getTotalOrderPrice(foodMap.get('Bob\'s Burgers').price, 1),
            status: "producer ready",
            mealTime: "breakfast",
            pickUpDateTime: getDateInFuture('breakfast', 2),
            dateCreated: new Date(),
            dateUpdated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        firstName: 'Jenna'
    },
    {
        $push: {currentOrders: objId1 }
    }
);
db.producer.updateOne(
    {
        firstName: 'Bob'
    },
    {
        $push: {currentOrders: { $each: [objId2, objId3] }}
    }
);

db.consumer.updateOne(
    {
        firstName: 'Jose'
    },
    {
        $push: {currentOrders: { $each: [ objId1, objId2, objId3 ] } }
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
            consumerId: consumerMap.get('Octovio')._id,
            producerId: producerMap.get('Jenna')._id,    
            items: [{
                foodId: foodMap.get('Jenna\'s Vegan Chocolate Chip Cookies'), 
                quantity: 6
            }],
            amount: getTotalOrderPrice(foodMap.get('Jenna\'s Vegan Chocolate Chip Cookies').price, 6),
            status: "completed",
            mealTime: "dinner",
            pickUpDateTime: getDateInFuture('dinner', 5),
            dateCreated: new Date(),
            dateUpdate: new Date()
        },
        {
            _id: objId2,
            consumerId: consumerMap.get('Octovio')._id,
            producerId: producerMap.get('Bob')._id,    
            items: [{
                foodId: foodMap.get('Bob\'s Burgers'), 
                quantity: 7
            }],
            amount: getTotalOrderPrice(foodMap.get('Bob\'s Burgers').price, 7),
            status: "completed",
            mealTime: "lunch",
            pickUpDateTime: getDateInFuture('lunch', 3),
            dateCreated: new Date(),
            dateUpdated: new Date()
        },
    ]
);

db.producer.updateOne(
    {
        firstName: 'Jenna'
    },
    {
        $push: {archivedOrders: objId1 }
    }
);
db.producer.updateOne(
    {
        firstName: 'Bob'
    },
    {
        $push: {archivedOrders: objId2}
    }
);

db.consumer.updateOne(
    {
        firstName: 'Octovio'
    },
    {
        $push: {archivedOrders: { $each: [ objId1, objId2 ] } }
    }
);

/********************************************************************** */
// Antony's Order
/********************************************************************** */
objId1 = new ObjectId();

db.archived_order.insertOne(
    {
        _id: objId1,
        consumerId: consumerMap.get('Antony')._id,
        producerId: producerMap.get('Jenna')._id,    
        items: [{
            foodId: foodMap.get('Jenna\'s Vegan Chocolate Chip Cookies'), 
            quantity: 1
        }],
        amount: getTotalOrderPrice(foodMap.get('Jenna\'s Vegan Chocolate Chip Cookies').price, 1),
        status: "canceled",
        mealTime: "dinner",
        pickUpDateTime: getDateInFuture('dinner', 2),
        dateCreated: new Date(),
        dateUpdate: new Date()
    }
);

db.producer.updateOne(
    {
        firstName: 'Jenna'
    },
    {
        $push: {archivedOrders: objId1}
    }
);

db.consumer.updateOne(
    {
        firstName: 'Antony'
    },
    {
        $push: {archivedOrders: objId2 }
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