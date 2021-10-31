db.consumer.deleteMany({});

/********************************************************************** */
// Juan's Consumer Document
/********************************************************************** */
db.consumer.insertOne(
{
    firstName: 'Juan',
    lastName: 'Lopez',    
    phoneNum: '815-789-0123',
    address: {
        street: '656 Glidden Ave',
        city: 'DeKalb',
        state: 'IL',
        zip: '60115'
    },
    averageConsumerRating: 0,
    currentOrders: [],
    archivedOrders: [],
    dateCreated: new Date(),
    dateUpdated: new Date()
});


/********************************************************************** */
// Gios's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        firstName: 'Gio',
        lastName: 'Gonzalez',    
        phoneNum: '815-709-0123',
        address: {
            street: '60 N Nina St',
            city: 'Cortland',
            state: 'IL',
            zip: '60112'
        },
        averageConsumerRating: 0,
        currentOrders: [],
        archivedOrders: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

/********************************************************************** */
// Jose's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        firstName: 'Jose',
        lastName: 'Hernandez',    
        phoneNum: '815-709-6489',
        address: {
            street: '26 N Nina St',
            city: 'Cortland',
            state: 'IL',
            zip: '60112'
        },
        averageConsumerRating: 0,
        currentOrders: [],
        archivedOrders: [],
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
        averageConsumerRating: 0,
        currentOrders: [],
        archivedOrders: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

/********************************************************************** */
// Antony's Consumer Document
/********************************************************************** */
db.consumer.insertOne(
    {
        firstName: 'Antony',
        lastName: 'Marc',    
        phoneNum: '815-900-4797',
        address: {
            street: '1490 Farmstead Ln',
            city: 'Malta',
            state: 'IL',
            zip: '60115'
        },
        averageConsumerRating: 0,
        currentOrders: [],
        archivedOrders: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);