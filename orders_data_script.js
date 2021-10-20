// Warning, When resetting, make sure to run producer_data_script.js, consumer_data_script.js and food_data_script.js
// before this script

// Juans order of cookies
var foodDocument = db.food.findOne(
    {
        name: 'Jenna\'s Vegan Blueberry Cookies'
    }
);

var consumerDocument = db.consumer.findOne(
    {
        firstName: 'Juan'
    }
);

db.consumer.updateOne(
    {
        _id: consumerDocument._id
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
        _id: consumerDocument._id
    },
    {
        $push: {
            pendingOrdersForConsumer: 
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
        },
        $set: {
            dateUpdated: new Date()
        }
        
    }
);

consumerDocument = db.consumer.findOne(
    {
        firstName: 'Gio'
    }
);

// Gios's order of Tacos and Pie
foodDocument = db.food.findOne(
    {
        name: 'Tacos'
    }
);

// Adding one order 
db.consumer.updateOne(
    {_id: consumerDocument._id},
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
    {_id: consumerDocument._id},
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