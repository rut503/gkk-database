// Warning, When resetting, make sure to run producer_data_script.js, consumer_data_script.js and food_data_script.js
// before this script

/********************************************************************** */
// Resetting all orders
/********************************************************************** */
print("Running Script")

// var consumerOrderCursor = db.consumer.find(
//     {
//         pendingOrdersForConsumer: {
//             $ne: []
//         }
//     }
// );
// print(consumerOrderCursor.size());

// consumerOrderCursor.map(function(myDoc) {
//     db.consumer.updateOne(
//         {
//             firstName: myDoc.firstName
//         },
//         {
//             $set:{
//                 pendingOrdersForConsumer: []
//             }
//         }
//     )
// });

//print("Fdsafdsafdsafds");

// Condensed version of above 2 commands
db.consumer.find({pendingOrdersForConsumer: {$ne: []}}).map(function(myDoc){
    db.consumer.updateOne(
        {
            firstName: myDoc.firstName
        },
        {
            $set:{
                pendingOrdersForConsumer: []
            }
        }
    )  
});

/********************************************************************** */
// Juan's Order
/********************************************************************** */
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

/********************************************************************** */
// Gio's Order
/********************************************************************** */
consumerDocument = db.consumer.findOne(
    {
        firstName: 'Gio'
    }
);

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

/********************************************************************** */
// Jose's Order
/********************************************************************** */
consumerDocument = db.consumer.findOne(
    {
        firstName: 'Jose'
    }
);

foodDocument = db.food.findOne(
    {
        name: 'Jenna\'s Vegan Blueberry Cookies'
    }
);

db.consumer.updateOne(
    {
        _id: consumerDocument._id
    },
    {
        $push: {
            pendingOrdersForConsumer: {
                items: [{
                    foodId: foodDocument._id,
                    quantity: 48
                }],
                status: "Not Paid",
                producerId: foodDocument.producerId,
                amount: foodDocument.price * 48 + (foodDocument.price * 48 * .0625),
                pickUpDateTime: new Date("2021-11-02T20:00:00")
            }
        }
    }
);