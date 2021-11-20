db.consumer.deleteMany({});

/********************************************************************** */
// Juan's Consumer Document
/********************************************************************** */
db.consumer.insertOne(
    {
        first_name: "Juan",
        last_name: "Lopez",    
        phone_number: "8157890123",
        address: {
            street: "656 Glidden Ave",
            city: "DeKalb",
            state: "IL",
            zip_code: "60115"
        },
        rating: Double(0.00),
        active_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);


/********************************************************************** */
// Gios's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        first_name: "Gio",
        last_name: "Gonzalez",    
        phone_number: "8157090123",
        address: {
            street: "60 N Nina St",
            city: "Cortland",
            state: "IL",
            zip_code: "60112"
        },
        rating: Double(0.00),
        active_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);

/********************************************************************** */
// Jose's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        first_name: "Jose",
        last_name: "Hernandez",    
        phone_number: "8157096489",
        address: {
            street: "26 N Nina St",
            city: "Cortland",
            state: "IL",
            zip_code: "60112"
        },
        rating: Double(0.00),
        active_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);

/********************************************************************** */
// Octovio's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        first_name: "Octovio",
        last_name: "Ramirez",    
        phone_number: "8158196927",
        address: {
            street: "306 W Hillcrest Dr",
            city: "DeKalb",
            state: "IL",
            zip_code: "60115"
        },
        rating: Double(0.00),
        active_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);

/********************************************************************** */
// Antony's Consumer Document
/********************************************************************** */
db.consumer.insertOne(
    {
        first_name: "Antony",
        last_name: "Marc",    
        phone_number: "8159004797",
        address: {
            street: "1490 Farmstead Ln",
            city: "Malta",
            state: "IL",
            zip_code: "60115"
        },
        rating: Double(0.00),
        active_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);