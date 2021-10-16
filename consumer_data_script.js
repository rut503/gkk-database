db.consumer.deleteMany({});

objId = ObjectId();

db.consumer.insertOne(
{
    _id: objId,
    firstName: 'Juan',
    lastName: 'Lopez',    
    phoneNum: '815-789-0123',
    address: {
        street: '123 Grove St',
        city: 'DeKalb',
        state: 'IL',
        zip: '60115'
    },
    averageConsumerRating: Double(0.00),
    acceptedOrdersToPickup: [],
    pendingOrdersForConsumer: [], 
    dateCreated: new Date()
});


var foodDocument = db.food.findOne(
    {
        name: 'Jenna\'s Vegan Blueberry Cookies'
    }
);

db.consumer.updateOne(
    {
        _id: objId
    },
    {
        $set: {
            pendingOrdersForConsumer: [
                {
                    items: [{
                        foodId: foodDocument._id,
                        quantity: 12 
                    }],
                    status: "Paid",
                    producerId: foodDocument.producerId,
                    amount: 5.40,
                    pickUpDateTime: new Date("2021-11-01T08:00:00")
                }
            ]
        }
    }
);

objId = ObjectId();

db.consumer.insertOne(    
    {
        _id: objId,
        firstName: 'Gio',
        lastName: 'Gonzalez',    
        phoneNum: '815-709-0123',
        address: {
            street: '345 Grove St',
            city: 'Cortland',
            state: 'IL',
            zip: '60115'
        },
        averageConsumerRating: Double(0.00),
        acceptedOrdersToPickup: [],
        pendingOrdersForConsumer: [], 
        dateCreated: new Date()
    }
);