{
  $jsonSchema: {
    properties: {
      producer_id: {
        bsonType: 'objectId',
        description: 'Id of review that created the review'
      },
      rating: {
        bsonType: 'double'
      },
      title: {
        bsonType: 'string'
      },
      description: {
        bsonType: 'string'
      },
      date_created: {
        bsonType: 'date'
      },
      date_update: {
        bsonType: 'date'
      },
      consumer_id: {
        bsonType: 'objectId',
        description: 'Id of consumer which this review belongs to'
      }
    },
    bsonType: 'object',
    required: [
      'consumer_id',
      'producer_id',
      'rating',
      'title',
      'description',
      'date_created',
      'date_updated'
    ]
  }
}