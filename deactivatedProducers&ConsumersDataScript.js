db.deactivatedConsumer.deleteMany({});
db.deactivatedProducer.deleteMany({});

/********************************************************************** */
// Rita's Producer document
/********************************************************************** */
var objId = ObjectId();

db.deactivatedProducer.insertOne(
    {
        _id: objId,
        firstName: "Rita",
        lastName: "Shah",    
        phoneNumber: "5849822205",
        email: "rshah@gmail.com",
        photo: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        bio: "Shah Rita, yes, bomb indian cook I am!",
        address: {
            street: "443 Wood Ln",
            city: "DeKalb",
            state: "IL",
            zipCode: "60115"
        },
        foodItemIds: [],
        rating: Double(0.00),
        activeOrders: [],
        // menu: {
        //     sunday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     monday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     tuesday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     wednesday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     thursday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     friday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     saturday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     } 
        // },
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

/********************************************************************** */
// Lance's Producer Document
/********************************************************************** */
objId = ObjectId();

db.deactivatedProducer.insertOne(
    {
        _id: objId,
        firstName: "Lance",
        lastName: "Law",    
        phoneNumber: "4839540129",
        email: "llaw@gmail.com",
        photo: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
        bio: "I am Lance Law and I make the law.",
        address: {
            street: "323 W Turn St",
            city: "DeKalb",
            state: "IL",
            zipCode: "60115"
        },
        foodItemIds: [],
        rating: Double(5.00),
        activeOrders: [],
        // menu: {
        //     sunday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     monday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     tuesday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     wednesday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     thursday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     friday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     },
        //     saturday: {
        //         breakfast: [],
        //         lunch: [],
        //         dinner: []
        //     } 
        // },
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

/********************************************************************** */
// Tony's Consumer Document
/********************************************************************** */
db.deactivatedConsumer.insertOne(
    {
        firstName: "Tony",
        lastName: "Sharks",    
        phoneNumber: "8599911192",
        email: "tsharks@gmail.com",
        photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        bio: "Ho ho ho, Tony here with the gifts.",
        address: {
            street: "433 Rome Ct",
            city: "Hoofer",
            state: "IL",
            zipCode: "60115"
        },
        rating: Double(0.00),
        activeOrders: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

/********************************************************************** */
// Shayer's Consumer Document
/********************************************************************** */
db.deactivatedConsumer.insertOne(
    {
        firstName: "Shayer",
        lastName: "Mitt",    
        phoneNumber: "2948544493",
        email: "smitt@gmail.com",
        photo: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        bio: "This is Shayer's bio, so lit.",
        address: {
            street: "584 High Lane",
            city: "Histate",
            state: "IL",
            zipCode: "60115"
        },
        rating: Double(0.00),
        activeOrders: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);