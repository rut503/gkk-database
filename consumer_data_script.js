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
// Gios's Producer Document
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

