db.delete.review_for_producer({});

// Maps to store consumer, producer and food documents. 
var consumerMap = new Map();
var producerMap = new Map();
var foodMap = new Map();
var mapCreated = false;

var consumerCursor = db.consumer.find({});
var producerCursor = db.producer.find({});
var foodCursor = db.food.find({});

foodCursor.forEach(function(myDoc){
    foodMap.set(myDoc.name, myDoc._id);
});

producerCursor.forEach(function(myDoc){
    producerMap.set(myDoc.firstName, myDoc._id);
});

consumerCursor.forEach(function(myDoc){
    consumerMap.set(myDoc.firstName, myDoc._id);
});

db.insertMany([
    {
        consumerId:  
        producerId:
        rating:
        title:
        description:
        dateCreated: 
    }
])
