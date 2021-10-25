db.order.deleteMany({});

const TAX_RATE = 0.0625;

// Maps to store consumer, producer and food documents. 
var consumerMap = new Map();
var producerMap = new Map();
var foodMap = new Map();
var mapCreated = false;

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
db.order.insertMany(
    [
        {
            consumerId: consumerMap.get('Juan')._id,
            producerId: producerMap.get('Jenna')._id,
            items:[{
                foodId: foodMap.get('Jenna\'s Vegan Blueberry Cookies')._id,
                quantity: 12
            }],
            amount: getTotalOrderPrice(foodMap.get('Jenna\'s Vegan Blueberry Cookies').price, 12),
            status: "producer pending",
            pickUpDateTime: new Date("2021-11-01T08:00:00"),
            dateCreated: new Date()
        },
        {
            consumerId: consumerMap.get('Juan')._id,
            producerId: producerMap.get('Jenna')._id,
            items:[{
                foodId: foodMap.get('Jenna\'s Vegan Chocolate Chip Cookies')._id,
                quantity: 24
            }],
            amount: getTotalOrderPrice(foodMap.get('Jenna\'s Vegan Chocolate Chip Cookies').price, 24),
            status: "producer pending",
            pickUpDateTime: new Date("2021-11-02T08:00:00"),
            dateCreated: new Date()
        }
    ]
);

/********************************************************************** */
// Gio's Order
/********************************************************************** */

/********************************************************************** */
// Helper Functions
/********************************************************************** */
function getTotalOrderPrice(price, quantity){
    return price * quantity + (price * quantity * TAX_RATE);
};