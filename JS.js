db.createCollection("customers1", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "email", "address"],
            properties: {
                name: {
                    bsonType: 'string',
                    description: 'Name is a required field'
                },
                email: {
                    bsonType: 'string',
                    description: 'Email is a required field'
                },
                address: {
                    bsonType: 'object',
                    description: 'Address is a required field',
                    properties: {
                        street: {
                            bsonType: 'string',
                        },
                        city: {
                            bsonType: 'string'
                        },
                        country: {
                            bsonType: 'string'
                        }
                    }
                }
            }
        }

    }

})