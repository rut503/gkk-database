db.order.deleteMany({});

var consumerMap = new Map();

var consumerCursor = db.consumer.find({})
consumerCursor.map(function(myDoc){
    consumerMap.set(myDoc.firstName, myDoc);
});

var producerCursor = db.producer.find({})
producerCursor.map(function(myDoc){
    producerMap.set(myDoc.firstName, myDoc);
});

db.order.insertMany({
    [
        {
            consumerId: consumerMap.get('Juan')._id,
            producerId: producerMap.get('Jenna')._id,
            items:[{
                foodId: foodDocument_id,
                quantity: 12
            }],
            amount: 5.40,
            status: "producer pending",
            pickUpDateTime: new Date("2021-11-01T08:00:00")
        }
    ]
});