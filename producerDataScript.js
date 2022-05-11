db.producer.deleteMany({});

/********************************************************************** */
// Jenna's Producer document
/********************************************************************** */
var objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Jenna",
        lastName: "Smith",    
        phoneNumber: "8157657895",
        email: "jsmith@gmail.com",
        photo: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVpJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        bio: "Okay so here's the thing, I don't really like cooking but I am just good at it. I cant help it.",
        address: {
            street: "456 Dogwood Ln",
            city: "DeKalb",
            state: "IL",
            zipCode: "60115"
        },
        foodItemIds: [],
        rating: Double(0.00),
        activeOrderIds: [],
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
// Bob's Producer Document
/********************************************************************** */
objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Bob",
        lastName: "Smith",    
        phoneNumber: "8157657895",
        email: "bsmith@gmail.com",
        photo: "https://images.unsplash.com/photo-1509399693673-755307bfc4e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dWklMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        bio: "My name doesn't justify my cooking skills, trust me! Don't just food by it's maker's name.",
        address: {
            street: "200 E Garden St",
            city: "DeKalb",
            state: "IL",
            zipCode: "60115"
        },
        foodItemIds: [],
        rating: Double(5.00),
        activeOrderIds: [],
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
// Sullivan's food
/********************************************************************** */
objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Sullivan",
        lastName: "Clarke",
        phoneNumber: "815894413",
        email: "sclarke@gmail.com",
        photo: "https://images.unsplash.com/photo-1599824701954-d1d141704de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWklMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        bio: "I know, my first name and last name don't really fit well but try my soup with crums, you'll love it.",
        address: {
          street: "403 S 6th St",
          city: "DeKalb",
          state: "IL",
          zipCode: "60115"
        },
        foodItemIds: [],
        rating: Double(0.00),
        activeOrderIds: [],
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
// Marietta's Producer document
/********************************************************************** */

objId = ObjectId();

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Marietta",
        lastName: "Daugherty",
        phoneNumber: "8159264502",
        email: "mdaugherty@gmail.com",
        photo: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHVpJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        bio: "I am tired of writing this test bios... someone help me write this... please... wah.wah.wah.!",
        address: {
            street: "736 Seaman Ave",
            city: "DeKalb",
            state: "IL",
            zipCode: "60115"
        },
        foodItemIds: [],
        rating: Double(0.00),
        activeOrderIds: [],
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
