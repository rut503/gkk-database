db.activeOrder.deleteMany({});
db.archivedOrder.deleteMany({});

const TAX_RATE = 0.0625;

// Maps to store consumer, producer and food_item documents. 
var consumerMap = new Map();
var producerMap = new Map();
// var foodItemMap = new Map();

var consumerCursor = db.consumer.find({});
var producerCursor = db.producer.find({});
// var foodCursor = db.food_item.find({});

consumerCursor.forEach(function(myDoc){
    consumerMap.set(myDoc.firstName, myDoc);
});

producerCursor.forEach(function(myDoc){
    producerMap.set(myDoc.firstName, myDoc);
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

db.activeOrder.insertMany(
    [
        {
            _id: objId1,
            consumerId: consumerMap.get("Juan")._id,
            producerId: producerMap.get("Marietta")._id,
            items: [
                {
                    dietPreference: ["Vegetarian"],
                    description: "Apple or Pumpkin flavor",
                    photo: "https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                    price: Double(5.25),
                    rating: Double(0),    
                    name: "Pie",
                    portionSize: 3,
                    spicy: 0,
                    allergy: ["Dairy", "Soy"],
                    quantity: 12
                }
            ],
            totalPrice: getTotalOrderPrice(5.25, 12),
            status: "pending",
            mealTime: "breakfast",
            orderDueDatetime: getDateInFuture("breakfast", 1),
            messageForProducer: "These better be great Pies!!!",
            dateCreated: new Date(),
            dateUpdated: new Date()
        },
        {
            _id: objId2,
            consumerId: consumerMap.get("Juan")._id,
            producerId: producerMap.get("Marietta")._id,
            items:[
                {
                    dietPreference: ["High Protein", "Vegetarian"],
                    description: "Peanut Butter Jelly",
                    photo: "https://images.unsplash.com/photo-1562772249-809f2de8fd76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                    price: Double(2.45),
                    rating: Double(0),    
                    name: "Peanut Butter Jeally",
                    portionSize: 1.8,
                    spicy: 0,
                    allergy: ["Peanut Butter", "Dairy", "Soy"],
                    quantity: 24
                }
            ],
            totalPrice: getTotalOrderPrice(2.45, 24),
            status: "pending",
            mealTime: "breakfast",
            orderDueDatetime: getDateInFuture("breakfast", 7),
            messageForProducer: "These better be great PB&Js too!!!",
            dateCreated: new Date(),
            dateUpdated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        firstName: "Marietta"
    },
    {
        $push: {activeOrders: { $each: [ objId1, objId2 ] } }
    }
)
db.consumer.updateOne(
    {
        firstName: "Juan"
    },
    {
        $push: {activeOrders: { $each: [ objId1, objId2 ] } }
    }
);
/********************************************************************** */
// Gio's Order
/********************************************************************** */
objId1 = new ObjectId();
objId2 = new ObjectId();

db.activeOrder.insertMany(
    [
        { 
            _id: objId1,
            consumerId: consumerMap.get("Gio")._id,
            producerId: producerMap.get("Jenna")._id,    
            items: [
                {
                    dietPreference: ["Vegan"],
                    description: "Blueberry Cookie",
                    photo: "https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80",
                    price: Double(1.49),
                    rating: Double(0),    
                    name: "Jenna's Vegan Blueberry Cookies",
                    portionSize: 1.4,
                    spicy: 0,
                    allergy: ["Gluten"],
                    quantity: 2
                }
            ],
            totalPrice: getTotalOrderPrice(1.49, 2),
            status: "accepted",
            mealTime: "dinner",
            orderDueDatetime: getDateInFuture("dinner", 6),
            messageForProducer: "Make em sweet af!!!",
            dateCreated: new Date(),
            dateUpdated: new Date()
        },
        { 
            _id: objId2,
            consumerId: consumerMap.get("Gio")._id,
            producerId: producerMap.get("Jenna")._id,    
            items: [
                {
                    dietPreference: ["Vegan"],
                    description: "Vegan Meat Balls, very tasty and real like.",
                    photo: "https://veganhuggs.com/wp-content/uploads/2021/03/vegan-swedish-meatballs-square-cropped.jpg",
                    price: Double(9.99),
                    rating: Double(0),    
                    name: "Jenna's Vegan Meat Balls",
                    portionSize: 5.5,
                    spicy: 0,
                    allergy: ["Wheat"],
                    quantity: 2
                },
                {
                    dietPreference: ["Vegan"],
                    description: "Chocolate Chip Cookie",
                    photo: "https://images.unsplash.com/photo-1629677594742-58acc2c5ca82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                    price: Double(1.99),
                    rating: Double(0),    
                    name: "Jenna's Vegan Chocolate Chip Cookies",
                    portionSize: 1.5,
                    spicy: 0,
                    allergy: ["Gluten"],
                    quantity: 5
                }
            ],
            totalPrice: getTotalOrderPrice(9.99, 2) + getTotalOrderPrice(1.99, 5),
            status: "accepted",
            mealTime: "dinner",
            orderDueDatetime: getDateInFuture("dinner", 5),
            messageForProducer: "Make em delicious.",
            dateCreated: new Date(),
            dateUpdated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        firstName: "Jenna"
    },
    {
        $push: {activeOrders: { $each: [ objId1, objId2 ] } }
    }
);
db.consumer.updateOne(
    {
        firstName: "Gio"
    },
    {
        $push: {activeOrders: { $each: [ objId1, objId2 ] } }
    }
);

/********************************************************************** */
// Jose's Order
/********************************************************************** */
objId1 = new ObjectId();
objId2 = new ObjectId();
objId3 = new ObjectId();

db.activeOrder.insertMany(
    [
        {
            _id: objId1,
            consumerId: consumerMap.get("Jose")._id,
            producerId: producerMap.get("Jenna")._id,    
            items: [
                {
                    dietPreference: ["Vegan"],
                    description: "Blueberry Cookie",
                    photo: "https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80",
                    price: Double(1.49),
                    rating: Double(0),    
                    name: "Jenna's Vegan Blueberry Cookies",
                    portionSize: 1.4,
                    spicy: 0,
                    allergy: ["Gluten"],
                    quantity: 48
                }
            ],
            totalPrice: getTotalOrderPrice(1.49, 48),
            status: "accepted",
            mealTime: "dinner",
            orderDueDatetime: getDateInFuture("dinner", 2),
            messageForProducer: "Make em very very delicious.",
            dateCreated: new Date(),
            dateUpdated: new Date()
        },
        {
            _id: objId2,
            consumerId: consumerMap.get("Jose")._id,
            producerId: producerMap.get("Bob")._id,    
            items: [
                {
                    dietPreference: ["Non-Vegetarian", "High Protein"],
                    description: "Freshly grown meat from neighboring farm",
                    photo: "https://images.unsplash.com/photo-1595356161904-6708c97be89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                    price: Double(6.00),
                    rating: Double(0),    
                    name: "Bob's Burgers",
                    portionSize: 5,
                    spicy: 1,
                    allergy: ["gluten"],
                    quantity: 2
                }
            ],
            totalPrice: getTotalOrderPrice(6.00, 2),
            status: "accepted",
            mealTime: "lunch",
            orderDueDatetime: getDateInFuture("lunch", 2),
            messageForProducer: "Make em not delicious.",
            dateCreated: new Date(),
            dateUpdated: new Date()
        },
        {
            _id: objId3,
            consumerId: consumerMap.get("Jose")._id,
            producerId: producerMap.get("Bob")._id,    
            items: [
                {
                    dietPreference: ["Non-Vegetarian", "High Protein"],
                    description: "Freshly grown meat from neighboring farm",
                    photo: "https://images.unsplash.com/photo-1595356161904-6708c97be89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                    price: Double(6.00),
                    rating: Double(0),    
                    name: "Bob's Burgers",
                    portionSize: 5,
                    spicy: 1,
                    allergy: ["gluten"],
                    quantity: 1
                }
            ],
            totalPrice: getTotalOrderPrice(6.00, 1),
            status: "ready",
            mealTime: "breakfast",
            orderDueDatetime: getDateInFuture("breakfast", 2),
            messageForProducer: "Make only little delicious.",
            dateCreated: new Date(),
            dateUpdated: new Date()
        }
    ]
);

// Associated order document with it's producer and consumer document. 
db.producer.updateOne(
    {
        firstName: "Jenna"
    },
    {
        $push: {activeOrders: objId1 }
    }
);
db.producer.updateOne(
    {
        firstName: "Bob"
    },
    {
        $push: {activeOrders: { $each: [objId2, objId3] }}
    }
);

db.consumer.updateOne(
    {
        firstName: "Jose"
    },
    {
        $push: {activeOrders: { $each: [ objId1, objId2, objId3 ] } }
    }
);

/********************************************************************** */
// Octovio's Order
/********************************************************************** */
objId1 = new ObjectId();
objId2 = new ObjectId();

db.archivedOrder.insertMany(
    [
        {
            _id: objId1,
            consumerId: consumerMap.get("Octovio")._id,
            producerId: producerMap.get("Jenna")._id,    
            items: [
                {
                    dietPreference: ["Vegan"],
                    description: "Chocolate Chip Cookie",
                    photo: "https://images.unsplash.com/photo-1629677594742-58acc2c5ca82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                    price: Double(1.99),
                    rating: Double(0),    
                    name: "Jenna's Vegan Chocolate Chip Cookies",
                    portionSize: 1.5,
                    spicy: 0,
                    allergy: ["Gluten"],
                    quantity: 6
                }
            ],
            totalPrice: getTotalOrderPrice(1.99, 6),
            status: "completed",
            mealTime: "dinner",
            orderDueDatetime: getDateInFuture("dinner", 5),
            messageForProducer: "Can you add some green grapes?",
            dateCreated: new Date(),
            dateUpdated: new Date()
        },
        {
            _id: objId2,
            consumerId: consumerMap.get("Octovio")._id,
            producerId: producerMap.get("Bob")._id,    
            items: [
                {
                    dietPreference: ["Non-Vegetarian", "High Protein"],
                    description: "Freshly grown meat from neighboring farm",
                    photo: "https://images.unsplash.com/photo-1595356161904-6708c97be89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                    price: Double(6.00),
                    rating: Double(0),
                    name: "Bob's Burgers",
                    portionSize: 5,
                    spicy: 1,
                    allergy: ["gluten"],
                    quantity: 7
                }
            ],
            totalPrice: getTotalOrderPrice(6.00, 7),
            status: "completed",
            mealTime: "lunch",
            orderDueDatetime: getDateInFuture("lunch", 3),
            messageForProducer: "Make it crisp please...",
            dateCreated: new Date(),
            dateUpdated: new Date()
        },
    ]
);

/********************************************************************** */
// Antony's Order
/********************************************************************** */
objId1 = new ObjectId();
objId2 = new ObjectId();

db.archivedOrder.insertOne(
    {
        _id: objId1,
        consumerId: consumerMap.get("Antony")._id,
        producerId: producerMap.get("Jenna")._id,    
        items: [
            {
                dietPreference: ["Vegan"],
                description: "Chocolate Chip Cookie",
                photo: "https://images.unsplash.com/photo-1629677594742-58acc2c5ca82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                price: Double(1.99),
                rating: Double(0),    
                name: "Jenna's Vegan Chocolate Chip Cookies",
                portionSize: 1.5,
                spicy: 0,
                allergy: ["Gluten"],
                quantity: 1
            }
        ],
        totalPrice: getTotalOrderPrice(1.99, 1),
        status: "cancelled_by_consumer",
        mealTime: "dinner",
        orderDueDatetime: getDateInFuture("dinner", 2),
        messageForProducer: "Make em delicious please.",
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

db.archivedOrder.insertOne(
    {
        _id: objId2,
        consumerId: consumerMap.get("Octovio")._id,
        producerId: producerMap.get("Bob")._id,    
        items: [
            {
                dietPreference: ["Non-Vegetarian", "High Protein"],
                description: "Freshly grown meat from neighboring farm",
                photo: "https://images.unsplash.com/photo-1595356161904-6708c97be89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                price: Double(6.00),
                rating: Double(0),
                name: "Bob's Burgers",
                portionSize: 5,
                spicy: 1,
                allergy: ["gluten"],
                quantity: 7
            }
        ],
        totalPrice: getTotalOrderPrice(6.00, 7),
        status: "cancelled_by_producer",
        mealTime: "lunch",
        orderDueDatetime: getDateInFuture("lunch", 3),
        messageForProducer: "Make it crisp please...",
        dateCreated: new Date(),
        dateUpdated: new Date()
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