db.consumer.deleteMany({});

/********************************************************************** */
// Juan's Consumer Document
/********************************************************************** */
objId = ObjectId();

db.consumer.insertOne(
{
    _id: objId,
    firstName: 'Juan',
    lastName: 'Lopez',    
    phoneNum: '815-789-0123',
    address: {
        street: '656 Glidden Ave',
        city: 'DeKalb',
        state: 'IL',
        zip: '60115'
    },
    averageConsumerRating: Double(0.00),
    currentOrders: [],
    archievedOrders: [],
    dateCreated: new Date(),
    dateUpdated: new Date()
});


/********************************************************************** */
// Gios's Consumer Document
/********************************************************************** */
objId = ObjectId();

db.consumer.insertOne(    
    {
        _id: objId,
        firstName: 'Gio',
        lastName: 'Gonzalez',    
        phoneNum: '815-709-0123',
        address: {
            street: '60 N Nina St',
            city: 'Cortland',
            state: 'IL',
            zip: '60112'
        },
        averageConsumerRating: Double(0.00),
        currentOrders: [],
        archievedOrders: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

/********************************************************************** */
// Jose's Consumer Document
/********************************************************************** */
objId = ObjectId();

db.consumer.insertOne(    
    {
        _id: objId,
        firstName: 'Jose',
        lastName: 'Hernandez',    
        phoneNum: '815-709-6489',
        address: {
            street: '26 N Nina St',
            city: 'Cortland',
            state: 'IL',
            zip: '60112'
        },
        averageConsumerRating: Double(0.00),
        currentOrders: [],
        archievedOrders: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

/********************************************************************** */
// Octovio's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        firstName: 'Octovio',
        lastName: 'Ramirez',    
        phoneNum: '815-819-6927',
        address: {
            street: '306 W Hillcrest Dr',
            city: 'DeKalb',
            state: 'IL',
            zip: '60115'
        },
        averageConsumerRating: Double(0.00),
        currentOrders: [],
        archievedOrders: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);