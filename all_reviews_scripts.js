db.review_for_producer.deleteMany({});
db.review_for_consumer.deleteMany({});
db.review_for_food_item.deleteMany({});

// Maps to store consumer, producer and food documents. 
var consumerMap = new Map();
var producerMap = new Map();
var foodMap = new Map();
var mapCreated = false;

var consumerCursor = db.consumer.find({});
var producerCursor = db.producer.find({});
var foodCursor = db.food_item.find({});

foodCursor.forEach(function(myDoc){
    foodMap.set(myDoc.name, myDoc);
});

producerCursor.forEach(function(myDoc){
    producerMap.set(myDoc.first_name, myDoc._id);
});

consumerCursor.forEach(function(myDoc){
    consumerMap.set(myDoc.first_name, myDoc._id);
});

db.review_for_producer.insertMany([
    {
        consumer_id: consumerMap.get('Octovio'),
        producer_id: producerMap.get('Bob'),
        rating: 5,
        title: 'Excellent Service',
        description: 'Morbi rutrum metus in risus luctus, id porttitor ex euismod. Phasellus augue erat, tempus ut lorem vel, tristique cursus odio. Integer convallis orci in mauris consectetur',
        date_created: new Date()
    },
    {
        consumer_id: consumerMap.get('Octovio'),
        producer_id: producerMap.get('Jenna'),
        rating: 5,
        title: 'Wow, Jenna\'s service was impeccable',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies gravida arcu id fermentum. Pellentesque ac luctus est, malesuada sodales purus. Etiam lorem quam, blandit in auctor dapibus, fermentum eget velit. ',
        date_created: new Date()
    },
    {
        consumer_id: consumerMap.get('Jose'),
        producer_id: producerMap.get('Bob'),
        rating: 1,
        title: 'WTF?????',
        description: 'Trash',
        date_created: new Date()
    },
    {
        consumer_id: consumerMap.get('Jose'),
        producer_id: producerMap.get('Marietta'),
        rating: 3,
        title: 'Decent',
        description: 'It was okay, my dog seemed to enjoy it.',
        date_created: new Date()
    }
]);

db.review_for_consumer.insertMany([
    {
        consumer_id: consumerMap.get('Octovio'),
        producer_id: producerMap.get('Bob'),
        rating: 5,
        title: 'Pleasure doing business with',
        description: 'Was on time',
        date_created: new Date()
    },
    {
        consumer_id: consumerMap.get('Jose'),
        producer_id: producerMap.get('Bob'),
        rating: 1,
        title: 'Horrible experience',
        description: 'Smelled',
        date_created: new Date()
    },
]);

db.review_for_food_item.insertMany([
    {
        food_id: foodMap.get('Jenna\'s Vegan Blueberry Cookies')._id,
        consumer_id: consumerMap.get('Octovio'),
        rating: 5,
        title: "Best cookies ever",
        description: 'The texture. The taste. My satisfactory face, 10/10',
        date_created: new Date()
    },
    {
        food_id: foodMap.get('Jenna\'s Vegan Blueberry Cookies')._id,
        consumer_id: consumerMap.get('Jose'),
        rating: 5,
        title: "Vegan????",
        description: 'I\'m amazed that a vegan cookie can taste so good. Gotta try it to belive it! ',
        date_created: new Date()
    },
])