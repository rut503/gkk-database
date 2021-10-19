db.consumer.deleteMany({});

//Juan
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
    dateCreated: new Date(),
    dateUpdated: new Date()
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
            ],
            dateUpdated: new Date()
        }
    }
);

foodDocument = db.food.findOne(
    {
        name: 'Jenna\'s Vegan Chocolate Chip Cookies'
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
                        quantity: 24 
                    }],
                    status: "Paid",
                    producerId: foodDocument.producerId,
                    amount: 10.80,
                    pickUpDateTime: new Date("2021-11-02T08:00:00")
                }
            ],
            dateUpdated: new Date()
        }
    }
);


// Gio 
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
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

foodDocument = db.food.findOne(
    {
        name: 'Tacos'
    }
);

// Adding one order 
db.consumer.updateOne(
    {_id: objId},
    { 
        $push: { 
            acceptedOrdersToPickup: {
                items: [
                    {foodId: foodDocument._id, quantity: 2}
                ],
                status: "paid",
                producerId: foodDocument.producerId,
                amount: 3.45,
                pickUpDateTime: new Date("2021-11-02T18:00:00")
            }
        },
        $set: {
            dateUpdated: new Date()
        }
    }
);


foodDocument2 = db.food.findOne(
    {
        name: 'Pie'
    }
);


db.consumer.updateOne(
    {_id: objId},
    { 
        $push: { 
            acceptedOrdersToPickup: {
                items: [
                    {foodId: foodDocument._id, quantity: 5},
                    {foodId: foodDocument2._id, quantity: 2}
                ],
                status: "paid",
                producerId: foodDocument.producerId,
                amount: 27.75,
                pickUpDateTime: new Date("2021-11-02T18:00:00")
            }
        },
        $set: {
            dateUpdated: new Date()
        }
    }
);