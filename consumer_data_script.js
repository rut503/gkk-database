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
            street: '347 Grove St',
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