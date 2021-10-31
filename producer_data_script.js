db.producer.deleteMany({});
db.review_for_producer.deleteMany({});

/********************************************************************** */
// Jenna's Producer document
/********************************************************************** */
var objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        first_name: 'Jenna',
        last_name: 'Smith',    
        phone_num: '8157657895',
        address: {
            street: '456 Dogwood Ln',
            city: 'DeKalb',
            state: 'IL',
            zip: '60115'
        },
        food: [],
        average_producer_rating: Double(0.00),
        current_orders: [],
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
// Bob's Producer Document
/********************************************************************** */
objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        first_name: "Bob",
        last_name: "Smith",    
        phone_num: "8157657895",
        address: {
            street: "200 E Garden St",
            city: "DeKalb",
            state: "IL",
            zip: "60115"
        },
        food: [],
        average_producer_rating: Double(5.00),
        current_orders: [],
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
// Sullivan's food
/********************************************************************** */
objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        first_name: "Sullivan",
        last_name: "Clarke",
        phone_num: "815894413",
        address: {
          street: "403 S 6th St",
          city: "DeKalb",
          state: "IL",
          zip: "60115"
        },
        food: [],
        average_producer_rating: Double(0.00),
        current_orders: [],
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
// Marietta's Producer document
/********************************************************************** */

objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        first_name: "Marietta",
        last_name: "Daugherty",
        phone_num: "8159264502",
        address: {
            street: "736 Seaman Ave",
            city: "DeKalb",
            state: "IL",
            zip: "60115"
        },
        food: [],
        average_producer_rating: Double(0.00),
        current_orders: [],
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