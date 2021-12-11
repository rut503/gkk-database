db.consumer.deleteMany({});

/********************************************************************** */
// Juan's Consumer Document
/********************************************************************** */
db.consumer.insertOne(
    {
        first_name: "Juan",
        last_name: "Lopez",    
        phone_number: "8157890123",
        email_address: "jlopez@gmail.com",
        photo: "http://www.juan.com",
        bio: "Hello, this is bm bio. In here I say stuff that I want others to know.",
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
        email_address: "ggonzalez@gmail.com",
        photo: "http://www.gio.com",
        bio: "Hi, I am a student at NIU and I am not sure why I am saying this here but whatever.",
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
        email_address: "jhernandez@gmail.com",
        photo: "http://www.jose.com",
        bio: "Good day, I was created by greg and he gave me the name. Now sure what my purpose is here!",
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
        email_address: "oramirez@gmail.com",
        photo: "http://www.octovio.com",
        bio: "Bad day, I was created by rut and he didn't gave me this name. I wonder who did tho!",
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
        email_address: "amarc@gmail.com",
        photo: "http://www.antony.com",
        bio: "Listen, feel like whoever names me spelled my name wrong, I feel like it should be Anthony.",
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