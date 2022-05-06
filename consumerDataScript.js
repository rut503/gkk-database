db.consumer.deleteMany({});

/********************************************************************** */
// Juan's Consumer Document
/********************************************************************** */
db.consumer.insertOne(
    {
        firstName: "Juan",
        lastName: "Lopez",    
        phoneNumber: "8157890123",
        email: "jlopez@gmail.com",
        photo: "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHVpJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        bio: "Hello, this is bm bio. In here I say stuff that I want others to know.",
        address: {
            street: "656 Glidden Ave",
            city: "DeKalb",
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
// Gios's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        firstName: "Gio",
        lastName: "Gonzalez",    
        phoneNumber: "8157090123",
        email: "ggonzalez@gmail.com",
        photo: "https://images.unsplash.com/photo-1520078452277-0832598937e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHVpJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        bio: "Hi, I am a student at NIU and I am not sure why I am saying this here but whatever.",
        address: {
            street: "60 N Nina St",
            city: "Cortland",
            state: "IL",
            zipCode: "60112"
        },
        rating: Double(0.00),
        activeOrders: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

/********************************************************************** */
// Jose's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        firstName: "Jose",
        lastName: "Hernandez",    
        phoneNumber: "8157096489",
        email: "jhernandez@gmail.com",
        photo: "https://images.unsplash.com/photo-1600443299762-7a743123645d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHVpJTIwZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        bio: "Good day, I was created by greg and he gave me the name. Now sure what my purpose is here!",
        address: {
            street: "26 N Nina St",
            city: "Cortland",
            state: "IL",
            zipCode: "60112"
        },
        rating: Double(0.00),
        activeOrders: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);

/********************************************************************** */
// Octovio's Consumer Document
/********************************************************************** */
db.consumer.insertOne(    
    {
        firstName: "Octovio",
        lastName: "Ramirez",    
        phoneNumber: "8158196927",
        email: "oramirez@gmail.com",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dWklMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        bio: "Bad day, I was created by rut and he didn't gave me this name. I wonder who did tho!",
        address: {
            street: "306 W Hillcrest Dr",
            city: "DeKalb",
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
// Antony's Consumer Document
/********************************************************************** */
db.consumer.insertOne(
    {
        firstName: "Antony",
        lastName: "Marc",    
        phoneNumber: "8159004797",
        email: "amarc@gmail.com",
        photo: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dWklMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        bio: "Listen, feel like whoever names me spelled my name wrong, I feel like it should be Anthony.",
        address: {
            street: "1490 Farmstead Ln",
            city: "Malta",
            state: "IL",
            zipCode: "60115"
        },
        rating: Double(0.00),
        activeOrders: [],
        dateCreated: new Date(),
        dateUpdated: new Date()
    }
);