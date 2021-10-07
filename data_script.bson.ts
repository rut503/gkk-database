//db.producer.deleteMany({})

var objId = ObjectId()

db.producer.insertOne(
    {
        _id: objId,
        firstName: 'Jenna',
        lastName: 'Smith',    
        phoneNum: '815-765-7895',
        address: {
            street: '456 Dogwood Ln',
            city: 'DeKalb',
            state: 'IL',
            zip: '60115'
        },
        food: [],
        averageProducerRating: Double(0.00),
        acceptedOrdersToCreate: [],
        pendingOrderForProducer: [],
        menu: {
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [] 
        }
    }
)

db.food.insertMany([
    {
        producerId: objId,
        dietPreference: "Vegan",
        description: "12 Blueberry Cookies",
        photo: "N/A",
        price: Double(5.00),
        rating: Double(0.00),    
        name: "Jenna's Vegan Blueberry Cookies"
    },
    {
        producerId: objId,
        dietPreference: "Vegan",
        description: "12 Chocolate Chip Cookies",
        photo: "N/A",
        price: Double(4.45),
        rating: Double(0.00),    
        name: "Jenna's Vegan Chocolate Chip Cookies"
    }
])

var objId = ObjectId()

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Bob",
        lastName: "Smith",    
        phoneNum: "815-765-7895",
        address: {
            street: "456 Dogwood Ln",
            city: "DeKalb",
            state: "IL",
            zip: "60115"
        },
        food: [],
        averageProducerRating: Double(5.00),
        acceptedOrdersToCreate: [],
        pendingOrderForProducer: [],
        menu: {
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [] 
        }
    }
)

db.food.insertMany([
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Freshly grown meat from neighboring farm",
        photo: "N/A",
        price: Double(6.00),
        rating: Double(0.00),    
        name: "Bob's Burgers"
    },
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Homegrown potatoes!",
        photo: "N/A",
        price: Double(4.45),
        rating: Double(0.00),    
        name: "Bob's Freshest Fries"
    }
])

var objId = ObjectId()

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Sullivan",
        lastName: "Clarke",
        phoneNum: "815-8944-513",
        address: {
          street: "Grand Avenue",
          city: "DeKalb",
          state: "IL",
          zip: "60115"
        },
        food: [],
        averageProducerRating: Double(0.00),
        acceptedOrdersToCreate: [],
        pendingOrderForProducer: [],
        menu: {
          sunday: [],
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: []
        }
    }
)

var objId = ObjectId()

db.producer.insertOne(
    {
        _id: objId,
        firstName: "Marietta",
        lastName: "Daugherty",
        phoneNum: "815-9264-502",
        address: {
            street: "Hunts Lane",
            city: "DeKalb",
            state: "IL",
            zip: "60115"
        },
        food: [],
        averageProducerRating: Double(0.00),
        acceptedOrdersToCreate: [],
        pendingOrderForProducer: [],
        menu: {
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: []
        }
    }
)

db.food.insertMany([
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Tacos",
        photo: "N/A",
        price: Double(3.45),
        rating: Double(0.00),    
        name: "Tacos"
    },
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Peanut Butter Jeally",
        photo: "N/A",
        price: Double(2.45),
        rating: Double(0.00),    
        name: "Peanut Butter Jeally"
    },
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Ramen",
        photo: "N/A",
        price: Double(1.45),
        rating: Double(0.00),    
        name: "Ramen"
    },
    {
        producerId: objId,
        dietPreference: "N/A",
        description: "Apple or Pumpkin flavor",
        photo: "N/A",
        price: Double(5.25),
        rating: Double(0.00),    
        name: "Pie"
    }
])