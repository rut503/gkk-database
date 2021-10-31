db.review_for_producer.deleteMany({});
db.review_for_consumer.deleteMany({});
db.review_for_food.deleteMany({});

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
    producerMap.set(myDoc.firstName, myDoc._id);
});

consumerCursor.forEach(function(myDoc){
    consumerMap.set(myDoc.firstName, myDoc._id);
});

db.review_for_producer.insertMany([
    {
        "consumerId": consumerMap.get('Octovio'),
        "producerId": producerMap.get('Bob'),
        "rating": 5,
        "title": 'Excellent Service',
        "description": 'Morbi rutrum metus in risus luctus, id porttitor ex euismod. Phasellus augue erat, tempus ut lorem vel, tristique cursus odio. Integer convallis orci in mauris consectetur',
        "dateCreated": new Date()
    },
    {
        "consumerId": consumerMap.get('Octovio'),
        "producerId": producerMap.get('Jenna'),
        "rating": 5,
        "title": 'Wow, Jenna\'s service was impeccable',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies gravida arcu id fermentum. Pellentesque ac luctus est, malesuada sodales purus. Etiam lorem quam, blandit in auctor dapibus, fermentum eget velit. ',
        "dateCreated": new Date()
    },
    {
        "consumerId": consumerMap.get('Jose'),
        "producerId": producerMap.get('Bob'),
        "rating": 1,
        "title": 'WTF?????',
        "description": 'Trash',
        "dateCreated": new Date()
    },
    {
        "consumerId": consumerMap.get('Jose'),
        "producerId": producerMap.get('Marietta'),
        "rating": 3,
        "title": 'Decent',
        "description": 'It was okay, my dog seemed to enjoy it.',
        "dateCreated": new Date()
    }
]);

db.review_for_consumer.insertMany([
    {
        "consumerId": consumerMap.get('Octovio'),
        "producerId": producerMap.get('Bob'),
        "rating": 5,
        "title": 'Pleasure doing business with',
        "description": 'Was on time',
        "dateCreated": new Date()
    },
    {
        "consumerId": consumerMap.get('Jose'),
        "producerId": producerMap.get('Bob'),
        "rating": 1,
        "title": 'Horrible experience',
        "description": 'Smelled',
        "dateCreated": new Date()
    },
]);

db.review_for_food.insertMany([
    {
        "foodId": foodMap.get('Jenna\'s Vegan Blueberry Cookies')._id,
        "consumerId": consumerMap.get('Octovio'),
        "rating": 5,
        "title": "Best cookies ever",
        "description": 'The texture. The taste. My satisfactory face, 10/10',
        "dateCreated": new Date()
    },
    {
        "foodId": foodMap.get('Jenna\'s Vegan Blueberry Cookies')._id,
        "consumerId": consumerMap.get('Jose'),
        "rating": 5,
        "title": "Vegan????",
        "description": 'I\'m amazed that a vegan cookie can taste so good. Gotta try it to belive it! ',
        "dateCreated": new Date()
    },
])