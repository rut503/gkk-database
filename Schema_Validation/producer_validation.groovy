{
  $jsonSchema: {
    required: [
      'first_name',
      'last_name',
      'phone_number',
      'email_address',
      'bio',
      'photo',
      'address',
      'food_items',
      'rating',
      'active_orders',
      'menu',
      'date_created',
      'date_updated'
    ],
    properties: {
      email_address: {
        bsonType: 'string',
        description: 'email of producer'
      },
      bio: {
        bsonType: 'string'
      },
      photo: {
        bsonType: 'string'
      },
      menu: {
        properties: {
          friday: {
            description: 'friday - Object that contains three fields, breakfast, lunch, and dinner',
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
                items: {
                  bsonType: 'objectId'
                },
                bsonType: 'array',
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on friday.'
              },
              dinner: {
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on friday.',
                items: {
                  bsonType: 'objectId'
                }
              }
            }
          },
          saturday: {
            bsonType: 'object',
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
              lunch: {
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on saturday.',
                items: {
                  bsonType: 'objectId'
                },
                bsonType: 'array'
              },
              dinner: {
                items: {
                  bsonType: 'objectId'
                },
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on saturday.'
              },
              breakfast: {
                bsonType: 'array',
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on saturday.',
                items: {
                  bsonType: 'objectId'
                }
              }
            },
            description: 'saturday - Object that contains three fields, breakfast, lunch, and dinner'
          },
          sunday: {
            description: 'sunday - Object that contains three fields, breakfast, lunch, and dinner',
            bsonType: 'object',
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
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
              },
              breakfast: {
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on Sunday.',
                items: {
                  bsonType: 'objectId'
                },
                bsonType: 'array'
              }
            }
          },
          monday: {
            bsonType: 'object',
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
              lunch: {
                items: {
                  bsonType: 'objectId'
                },
                bsonType: 'array',
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on monday.'
              },
              dinner: {
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on monday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              breakfast: {
                items: {
                  bsonType: 'objectId'
                },
                bsonType: 'array',
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on monday.'
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
              dinner: {
                items: {
                  bsonType: 'objectId'
                },
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on tuesday.'
              },
              breakfast: {
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on tuesday.',
                items: {
                  bsonType: 'objectId'
                },
                bsonType: 'array'
              },
              lunch: {
                bsonType: 'array',
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on tuesday',
                items: {
                  bsonType: 'objectId'
                }
              }
            },
            description: 'tuesday - Object that contains three fields, breakfast, lunch, and dinner'
          },
          wednesday: {
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
              breakfast: {
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on wednesday.',
                items: {
                  bsonType: 'objectId'
                },
                bsonType: 'array'
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
            description: 'wednesday - Object that contains three fields, breakfast, lunch, and dinner',
            bsonType: 'object'
          },
          thursday: {
            bsonType: 'object',
            required: [
              'breakfast',
              'lunch',
              'dinner'
            ],
            properties: {
              dinner: {
                bsonType: 'array',
                description: 'dinner - Array that contains the foodId\'s of the foods for sale on thursday.',
                items: {
                  bsonType: 'objectId'
                }
              },
              breakfast: {
                items: {
                  bsonType: 'objectId'
                },
                bsonType: 'array',
                description: 'breakfast - Array that contains the foodId\'s of the foods for sale on thursday.'
              },
              lunch: {
                bsonType: 'array',
                description: 'lunch - Array that contains the foodId\'s of the foods for sale on thursday.',
                items: {
                  bsonType: 'objectId'
                }
              }
            },
            description: 'thursday - Object that contains three fields, breakfast, lunch, and dinner'
          }
        },
        bsonType: 'object',
        required: [
          'sunday',
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday'
        ]
      },
      last_name: {
        bsonType: 'string',
        description: 'last name of producer, must be a string'
      },
      date_created: {
        bsonType: 'date'
      },
      date_updated: {
        bsonType: 'date'
      },
      first_name: {
        bsonType: 'string',
        description: 'first name of producer, must be a string'
      },
      phone_number: {
        bsonType: 'string',
        description: 'string format of producer\'s phone number'
      },
      active_orders: {
        items: {
          bsonType: 'objectId'
        },
        bsonType: 'array',
        description: 'Array referencing the orders for this producer'
      },
      address: {
        bsonType: 'object',
        required: [
          'street',
          'city',
          'state',
          'zip_code'
        ],
        properties: {
          street: {
            bsonType: 'string',
            description: 'street of producer\'s address'
          },
          city: {
            bsonType: 'string',
            description: 'city of producer\'s address'
          },
          state: {
            bsonType: 'string'
          },
          zip_code: {
            bsonType: 'string'
          }
        }
      },
      food_items: {
        bsonType: 'array',
        description: 'contains the food id\'s of producers food',
        items: {
          bsonType: 'objectId'
        }
      },
      rating: {
        bsonType: 'double'
      }
    },
    bsonType: 'object'
  }
}