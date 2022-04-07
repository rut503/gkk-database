{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'firstName',
      'lastName',
      'phoneNum',
      'address',
      'food',
      'averageProducerRating',
      'menu',
      'dateCreated',
      'dateUpdated'
    ],
    properties: {
      firstName: {
        bsonType: 'string',
        description: 'first name of producer, must be a string'
      },
      lastName: {
        bsonType: 'string',
        description: 'last name of producer, must be a string'
      },
      phoneNum: {
        bsonType: 'string',
        description: 'string format of producer\'s phone number'
      },
      address: {
        bsonType: 'object',
        required: [
          'city',
          'street',
          'state',
          'zip'
        ],
        properties: {
          city: {
            bsonType: 'string',
            description: 'city of producer\'s address'
          },
          street: {
            bsonType: 'string',
            description: 'street of producer\'s address'
          },
          state: {
            bsonType: 'string'
          },
          zip: {
            bsonType: 'string'
          }
        }
      },
      food: {
        bsonType: 'array',
        description: 'contains the food id\'s of producers food'
      },
      averageProducerRating: {
        bsonType: 'double',
        description: 'average rating for a producer'
      },
      currentOrders: {
        bsonType: 'array',
        description: 'Array of current orders',
        items: {
          bsonType: 'objectId'
        }
      },
      menu: {
        bsonType: 'object',
        required: [
          'sunday',
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday'
        ],
        properties: {
          sunday: {
            bsonType: 'array',
            description: 'contains the food ids of the foods offered on Sunday'
          },
          monday: {
            bsonType: 'array',
            description: 'contains the food ids of the foods offered on Monday'
          },
          tuesday: {
            bsonType: 'array',
            description: 'contains the food ids of the foods offered on Tuesday'
          },
          wednesday: {
            bsonType: 'array',
            description: 'contains the food ids of the foods offered on Wednesday'
          },
          thursday: {
            bsonType: 'array',
            description: 'contains the food ids of the foods offered on Thursday'
          },
          friday: {
            bsonType: 'array',
            description: 'contains the food ids of the foods offered on Friday'
          },
          saturday: {
            bsonType: 'array',
            description: 'contains the food ids of the foods offered on Saturday'
          }
        }
      },
      dateCreated: {
        bsonType: 'date'
      },
      dateUpdated: {
        bsonType: 'date'
      }
    }
  }
}