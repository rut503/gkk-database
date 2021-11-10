db.deactivated_consumer.deleteMany({});
db.deactivated_producer.deleteMany({});

/********************************************************************** */
// Rita's Producer document
/********************************************************************** */
var objId = ObjectId();

db.deactivated_producer.insertOne(
    {
        _id: objId,
        first_name: "Rita",
        last_name: "Shah",    
        phone_number: "5849822205",
        address: {
            street: "443 Wood Ln",
            city: "DeKalb",
            state: "IL",
            zip_code: "60115"
        },
        food_items: [],
        rating: Double(0.00),
        active_orders: [],
        archived_orders: [],
        menu: {
            sunday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            monday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            tuesday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            wednesday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            thursday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            friday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            saturday: {
                breakfast: [],
                lunch: [],
                dinner: []
            } 
        },
        date_created: new Date(),
        date_updated: new Date()
    }
);

/********************************************************************** */
// Lance's Producer Document
/********************************************************************** */
objId = ObjectId();

db.deactivated_producer.insertOne(
    {
        _id: objId,
        first_name: "Lance",
        last_name: "Law",    
        phone_number: "4839540129",
        address: {
            street: "323 W Turn St",
            city: "DeKalb",
            state: "IL",
            zip_code: "60115"
        },
        food_items: [],
        rating: Double(5.00),
        active_orders: [],
        archived_orders: [],
        menu: {
            sunday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            monday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            tuesday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            wednesday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            thursday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            friday: {
                breakfast: [],
                lunch: [],
                dinner: []
            },
            saturday: {
                breakfast: [],
                lunch: [],
                dinner: []
            } 
        },
        date_created: new Date(),
        date_updated: new Date()
    }
);

/********************************************************************** */
// Tony's Consumer Document
/********************************************************************** */
db.deactivated_consumer.insertOne(
    {
        first_name: "Tony",
        last_name: "Sharks",    
        phone_number: "8599911192",
        address: {
            street: "55 Wheat Ln",
            city: "Hoofer",
            state: "IL",
            zip_code: "60115"
        },
        rating: Double(0.00),
        active_orders: [],
        archived_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);

/********************************************************************** */
// Shayer's Consumer Document
/********************************************************************** */
db.deactivated_consumer.insertOne(
    {
        first_name: "Shayer",
        last_name: "Mitt",    
        phone_number: "2948544493",
        address: {
            street: "339 Idol Ln",
            city: "Menroe",
            state: "IL",
            zip_code: "60115"
        },
        rating: Double(0.00),
        active_orders: [],
        archived_orders: [],
        date_created: new Date(),
        date_updated: new Date()
    }
);