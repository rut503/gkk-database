{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'first_name',
      'last_name',
      'phone_num',
      'address',
      'food_items',
      'average_producer_rating',
      'menu',
      'date_created',
      'date_updated'
    ],
    properties: {
      first_name: {
        bsonType: 'string',
        description: 'first name of producer, must be a string'
      },
      last_name: {
        bsonType: 'string',
        description: 'last name of producer, must be a string'
      },
      phone_num: {
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
      food_items: {
        bsonType: 'array',
        description: 'contains the food id\'s of producers food'
      },
      average_producer_rating: {
        bsonType: 'double',
        description: 'average rating for a producer'
      },
      current_orders: {
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
            bsonType: 'object',
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
              breakfast: {
                bsonType: 'array',
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on Sunday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              lunch: {
                bsonType: 'array',
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on Sunday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              dinner: {
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on Sunday.',
                items: {
                  bsonType: 'objectId'
                }
              }
            },
            description: 'sunday - Object that contains three fields, breakfast, lunch, and dinner'
          },
          monday: {
            bsonType: 'object',
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
              breakfast: {
                bsonType: 'array',
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on monday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              lunch: {
                bsonType: 'array',
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on monday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              dinner: {
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on monday.',
                items: {
                  bsonType: 'objectId'
                }
              }
            },
            description: 'monday - Object that contains three fields, breakfast, lunch, and dinner'
          },
          tuesday: {
            bsonType: 'object',
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
              breakfast: {
                bsonType: 'array',
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on tuesday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              lunch: {
                bsonType: 'array',
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on tuesday',
                items: {
                  bsonType: 'objectId'
                }
              },
              dinner: {
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on tuesday.',
                items: {
                  bsonType: 'objectId'
                }
              }
            },
            description: 'tuesday - Object that contains three fields, breakfast, lunch, and dinner'
          },
          wednesday: {
            bsonType: 'object',
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
              breakfast: {
                bsonType: 'array',
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on wednesday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              lunch: {
                bsonType: 'array',
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on wednesday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              dinner: {
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on wednesday.',
                items: {
                  bsonType: 'objectId'
                }
              }
            },
            description: 'wednesday - Object that contains three fields, breakfast, lunch, and dinner'
          },
          thursday: {
            bsonType: 'object',
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
              breakfast: {
                bsonType: 'array',
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on thursday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              lunch: {
                bsonType: 'array',
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on thursday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              dinner: {
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on thursday.',
                items: {
                  bsonType: 'objectId'
                }
              }
            },
            description: 'thursday - Object that contains three fields, breakfast, lunch, and dinner'
          },
          friday: {
            bsonType: 'object',
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
              breakfast: {
                bsonType: 'array',
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on friday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              lunch: {
                bsonType: 'array',
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on friday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              dinner: {
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on friday.',
                items: {
                  bsonType: 'objectId'
                }
              }
            },
            description: 'friday - Object that contains three fields, breakfast, lunch, and dinner'
          },
          saturday: {
            bsonType: 'object',
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
              breakfast: {
                bsonType: 'array',
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on saturday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              lunch: {
                bsonType: 'array',
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on saturday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              dinner: {
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on saturday.',
                items: {
                  bsonType: 'objectId'
                }
              }
            },
            description: 'saturday - Object that contains three fields, breakfast, lunch, and dinner'
          }
        }
      },
      date_created: {
        bsonType: 'date'
      },
      date_updated: {
        bsonType: 'date'
      }
    }
  }
}