db.consumer.deleteMany({});

/********************************************************************** */
// Juan's Consumer Document
/********************************************************************** */
db.consumer.insertOne(
    {
        first_name: 'Juan',
        last_name: 'Lopez',    
        phone_num: '8157890123',
        address: {
            street: '656 Glidden Ave',
            city: 'DeKalb',
            state: 'IL',
            zip: '60115'
        },
        average_consumer_rating: 0,
        current_orders: [],
        archived_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);


/********************************************************************** */
// Gios's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        first_name: 'Gio',
        last_name: 'Gonzalez',    
        phone_num: '815-709-0123',
        address: {
            street: '60 N Nina St',
            city: 'Cortland',
            state: 'IL',
            zip: '60112'
        },
        average_consumer_rating: 0,
        current_orders: [],
        archived_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);

/********************************************************************** */
// Jose's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        first_name: 'Jose',
        last_name: 'Hernandez',    
        phone_num: '815-709-6489',
        address: {
            street: '26 N Nina St',
            city: 'Cortland',
            state: 'IL',
            zip: '60112'
        },
        average_consumer_rating: 0,
        current_orders: [],
        archived_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);

/********************************************************************** */
// Octovio's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        first_name: 'Octovio',
        last_name: 'Ramirez',    
        phone_num: '815-819-6927',
        address: {
            street: '306 W Hillcrest Dr',
            city: 'DeKalb',
            state: 'IL',
            zip: '60115'
        },
        average_consumer_rating: 0,
        current_orders: [],
        archived_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);

/********************************************************************** */
// Antony's Consumer Document
/********************************************************************** */
db.consumer.insertOne(
    {
        first_name: 'Antony',
        last_name: 'Marc',    
        phone_num: '815-900-4797',
        address: {
            street: '1490 Farmstead Ln',
            city: 'Malta',
            state: 'IL',
            zip: '60115'
        },
        average_consumer_rating: 0,
        current_orders: [],
        archived_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);