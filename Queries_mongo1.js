//  Course Complete MongoDB Course from Scratch + Vs Code + Git Bash + Studio 3T - YouTube procademy 

// -- database name:

sampledb

// -- connect mongo database:
mongosh

// -- Queries--

// note:
// collection is like table that store different data.



// cls ---> clean screen

use bookstore

db.createCollection(books)

// ---Show databases:

show dbs

// ----> current available database

db 

// ---> show collections

// show collections 

// ---> to use a specific database 

// - use database 

// db.test.insertOne({test:123})

// ----> query collection

db.test.find() 

db.dropDatabase() ----> drop database

--Create database:

use sampledb ---> once you use this command Mongo will create the database automattically without collections.

// -- Create a collection:

db.customer.insertOne({name: 'Mark', age:28, gender: "male"})
db.customer.insertOne({name: 'Mark', age:27, gender: "male"})
db.customer.insertOne({name: 'John', age:35, gender: "male"})

// -- Create a collection 2:

db.createCollection("products")
db.createCollection("customer")
db.createCollection("test",{capped: true, autoIndexId: true, size: 6142567, max:100})

// -- Delete a collection:

db.test.drop()

// -- insert a document into a database:

show collections

// -- add a document in customer collection:

db.customer.insertOne({"name": "Mark", age:28, gender: "male"})
db.customer.insertOne({_id:"uniqui-id-1", name: "Steve", age:30})
db.customer.insertOne({_id:"uniqui-id-1", name: "Jonas", age:35})

// -- insert into a collection:

db.customer.insertOne({"name": "John", age:32, gender: "male"})

// -- insert multiple documents into a collection:

// --note: Mongo allows you to insert different sort of intomation in each document:

db.customer.insertMany([{name: "Sarah", gender:"female"}, {name: "Rajesh", age:30}, {name:"Steven", gender:"male", age:27}])

// -- insert could you be use as many or one:

// -- insert 2 documents:

db.customer.insert({name:"Merry", age: 32})
db.customer.insert([{name: "Tom",  gender: "male", age:34}, {name:"Mike", age: 36}])


// --- Fetching Documents from a Collection:
// --First documment of the customer collection:

db.customer.findOne()

// -- First documment of the customer collection where the name is Steve:

db.customer.findOne({name:"Steve"})
db.customer.findOne({name:"John"})

db.customer.findOne({gender:"male"})



// --- OTHER QUERIES:

db.customer.find({gender:"male"}, {_id: false, gender:0})
db.customer.find({gender:"male"}, {_id: false, gender:0}).pretty()


// -- other queries fetch all the doccuments:
db.student.find()
db.customer.find().pretty()

// -- Updating Documents in a Collection

db.customer.updateOne({name:"Steven"}, {$set: {age:30, gender: "female"}})

db.customer.updateOne({name:"John"}, {$set: {age:50}})

db.customer.updateOne({name:"Sarah"}, {$set: {age:50}})

// -- Update multple methos in a Collection:

db.customer.updateMany({name:"John"}, {$set: {gender: "unknown"}})

db.customer.updateMany({name:"John"}, {$set: {country: "UK"}})

// -- Update (single, multiple) vs UpdateOne:

db.customer.update({name:"Mark"}, {$set: {age: 35}})
db.customer.update({name:"Mark"}, {$set: {age: 35}})

db.customer.update({name:"John"}, {$set: {gender: "unknown"}}, {multi: true})

db.customer.replaceOne({name:"Merry"}, {name: "Merry J", country: "UK", city: "London"})

// -- note: if you always want to update always updateOne or updateMany

// --note: if you want to use a replace a document always use replaceOne

// -- Understanding save() method:

db.customer.save({name: "Mark", gender:"male", age:23})
db.customer.save({_id: "some-unique-id" , name: "Mike", gender:"male", age:25})



// -- Deleting documents from Collection (single document)

// -- I want to delete the first document where the name is John

db.customer.deleteOne({name:"John"})

// -- Delete the first document of a collection:

db.customer.deleteOne({})

// -- Delete multipe documents from a collection:

// -- I want to delete all documents that has the name as Mark:

db.customer.deleteMany({name:"Mark"})

// -- deleMany empty can delete all the documents from a collection

db.customer.deleteMany({})

// --Note: Remove method is deprecated in many languages 

// -- insert a documents in the collection:



// -- Remove method (single - multiple docuemnts):


// --single document:

db.customer.remove({name:"John"}, true)

-- multiple documents:

db.customer.remove({name:"Mark"})

-- Remove all the docuemtns from the collection:

db.customer.remove({})

--  Understanding Cursor in MongoDB

db.customer.insertMany(

[
    {
        "_id":1,
        "name": "John Smith",
        "gender":"Male"
    },
    {
        "_id":2,
        "name": "Steve Vough",
        "gender":"Male"
    },
    {
        "_id":3,
        "name": "Jane Smith",
        "gender":"Female"
    },
    {
        "_id":4,
        "name": "Mark Boucher",
        "gender":"Male"
    },
    {
        "_id":5,
        "name": "Steve Smith",
        "gender":"Male"
    },
    {
        "_id":6,
        "name": "Mery Jane",
        "gender":"Female"
    },
    {
        "_id":7,
        "name": "Jona Young",
        "gender":"Male"
    },
    {
        "_id":8,
        "name": "Sarah King",
        "gender":"Female"
    },
    {
        "_id":9,
        "name": "Will Farrel",
        "gender":"Male"
    },
    {
        "_id":10,
        "name": "Shelton Cooper",
        "gender":"Male"
    },
    {
        "_id":11,
        "name": "Penny Rina",
        "gender":"FeMale"
    },
    {
        "_id":12,
        "name": "Maduri Rai",
        "gender":"Female"
    },
    {
        "_id":13,
        "name": "Mark Smith",
        "gender":"Male"
    },
    {
        "_id":14,
        "name": "Stefan Ranger",
        "gender":"Male"
    },
    {
        "_id":15,
        "name": "Ravi Rnajan",
        "gender":"Male"
    },
    {
        "_id":16,
        "name": "Steven Fleming",
        "gender":"Male"
    },
    {
        "_id":17,
        "name": "Michel Stark",
        "gender":"Male"
    },
    {
        "_id":18,
        "name": "Rani Mathur",
        "gender":"Female"
    },
    {
        "_id":19,
        "name": "Ramesh Raj",
        "gender":"Male"
    },
    {
        "_id":20,
        "name": "Gordon King",
        "gender":"Male"
    },
    {
        "_id":21,
        "name": "Sarah King",
        "gender":"Female"
    },
    {
        "_id":22,
        "name": "Mark Flemingo",
        "gender":"Male"
    },
    {
        "_id":23,
        "name": "John Stark",
        "gender":"Male"
    },
])


// Understanding Cursor in MongoDB
db.customer.find().toArray()

db.customer.find().forEach(function (cust){print("customer name: "+cust.name)})

// Datatypes in MongoDB

string --> text name: "John"

boolean --> text isAdmin: true

boolean --> isAdmin: true

number --> NumberInt(Int32) age:34, NumberLong(Int64) value: 1000000000000, NumberDecimal prince: 12.99

ObjectID --> _id: ObjectId("abdfgdj")

Date --> ISODate: ISODate("2022-08-22"), Timestamp(1232536373), EmbeddedDocuments: Products: {...}

Arrays --> 

db.demo.insertOne({name:'John', isAdmin: true, age:34, dob: new Date(), createdOn: new Timestamp()})

db.demo.findOne()

// how to get the datatpye of the value:

typeof db.demo.findOne().age


// Delete documents from customer collection:

db.customer.deleteMany({})


db.customer.insertMany([
    {
            "name" : "Mery",
            "age" : 25,
            "isMarried" : false,
            "subscription" : {
                    "type": "yearly",
                    "renewalDate" : {"day" : 23, "month" : "June", "year" : 2022 }
            },
            "address" : ["New jersy", "USA"],
            "purchase" : [
                    { "name" : "iPhone", "model" : "iPhone 12", "price" : 1499 },
                    { "name" : "LG TV", "price" : 12999 }
            ]
    },
    {
            "name" : "John",
            "age" : 28,
            "isMarried" : false,
            "subscription" : {
                    "type": "monthly",
                    "renewalDate" : { "day" : 31, "month" : "March", "year" : 2023 }
            },
            "address" : [ "London", "UK"],
            "purchase" : [ 
                    { "name" : "iPhone", "model" : "iPhone 11", "price" : 1299 }, 
                    { "name" : "SONY TV", "model" : "SONY Bravia", "price" : 15999 }
            ]
    },
    {
            "name" : "Sarah",
            "age" : 30,
            "isMarried" : true,
            "subscription" : {
                    "type": "monthly",
                    "renewalDate" : { "day" : 31, "month" : "July", "year" : 2022 }
            },
            "address" : ["London", "UK"],
            "purchase" : [
                    { "name" : "Samsung", "model" : "Samsung Galaxy", "price" : 1299 },
                    { "name" : "HP Printer", "model" : "HPX 5001H", "price" : 1999 }
            ]
    },
    {
            "name" : "Steve",
            "age" : 38,
            "isMarried" : true,
            "subscription" : {
                    "type": "yearly",
                    "renewalDate" : { "day" : 30, "month" : "June", "year" : 2023 }
            },
            "address" : [ "New York", "USA" ],
            "purchase" : [
                    { "name" : "iPhone", "model" : "iPhone 11", "price" : 1299 }
            ]
    },
    {
            "name" : "Rashid",
            "age" : 28,
            "isMarried" : true,
            "subscription" : {
                    "type": "monthly",
                    "renewalDate" : { "day" : 28, "month" : "March", "year" : 2023 }
            },
            "address" : [ "Delhi", "India" ],
            "purchase" : [
                    { "name" : "Lenovo Laptop", "model" : "Lenovo T490", "price" : 1999 }
            ]
         }
    ])


    // Mongo working with arrays

    db.customer.find({"purchase.name": 'Samsung'})
    db.customer.find({"purchase.name": 'iPhone'})

    // Relations in MongoDB

    //Embeded Documents 

    // One to one relation using embedded documen:

    // {
    //     "name" : "John",
    //     "age" : 28,
    //     "from": ["London", "UK"],
    //     "contact": [
    //         {"email": "john@abc.com", "phone": 9887645678}
    //     ]
    // },
    // {
    //     "name" : "Mark",
    //     "age" : 38,
    //     "from": ["Berlin", "Germany"],
    //     "contact": [
    //         {"email": "amrk@abc.com", "phone": 9887654898}
    //     ]
    // }


    db.customer.insertOne({name:"John", age: 28, from: ["London", "UK"], contac: {email: 'john@abc.com', phone: 9887654898}})

    db.customer.insertOne({name:"Mark", age: 38, from: ["Berlin", "Germany"], contac: {email: 'amrk@abc.com', phone: 9887654898}})


    // One to one Relation using references 

    db.customer.updateOne({name:"John"},{$set: {address: {street: "park avenue", houseNo:78, PIN: 556655, city: 'London', country:"UK"}}})

    db.customer.updateOne({name:"Mark"},{$set: {address: {street: "salt lake", houseNo:38, PIN: 556699, city: 'Berlin', country:"Germany"}}})

    db.customer.find()

    // One to one Relation using references

    ///note: create a collection calls address

    db.address.insertMany([{street: "park avenue", houseNo:78, PIN: 567678, city: "London", country:"UK"}, {street: "salt lake", houseNo:38, PIN: 45754, city: "Berlin", country:"Germany"}])

    db.address.find()

    db.customer.updateOne({name:"Mark"},{$set: {address:  ObjectId("6508e1010ec14eb52adb5c6d")}})

    db.customer.updateOne({name:"John"},{$set: {address:  ObjectId("6508e1010ec14eb52adb5c6c")}})

    db.customer.find()

    db.customer.updateMany({}, {$unset: {from:""}})
    
    // Querying Multiple documents using look

    db.customer.find()

    db.customer.aggregate({$lookup: {from: "address", localField: "address", foreignField: "_id", as: "addr"}})

    // One to many relation using embedded documen

    db.customer.find()

    db.customer.updateOne({name:"John"}, {$set: {PaymentMethod: [{cardNo:1234567890123456, expiry:'03/2024'},{cardNo:1234345645677654, expiry:'05/2017'}]}})

    db.customer.updateOne({name:"Mark"}, {$set: {PaymentMethod: [{cardNo:1234567895678765, expiry:'06/2024'}]}})


   //  One to many relation using references

   db.orders.insertOne({_id:1, date: new Date('03-02-2011'), pId:[123, 456]})

   db.orders.insertOne({_id:2, date: new Date('03-04-2016'), pId:[123, 787]})

   db.orders.insertOne({_id:3, date: new Date('06-07-2018'), pId:[345, 787, 456]})

   db.orders.insertOne({_id:4, date: new Date('06-07-2022'), pId:[563]})

   db.orders.find()

   db.customer.updateOne({name:"John"},{$set: {orders: [3] }})
   db.customer.updateOne({name:"Mark"},{$set: {orders: [1,2,4] }})

   db.customer.find()

   db.customer.aggregate({$lookup: {from: "orders", localField: "orders", foreignField: "_id", as: "orderDetails"}})

   // Importance of having schema

   db.products.insertOne({name: "iphone 12", price: 1299})

   db.products.insertOne({name: "LG Smart TV", price: 12299})

   db.products.deleteMany({})

   db.products.find()

   db.products.insertOne({name: "A Book", price: 122, author: "John Smith"})

   db.products.updateOne({_id:ObjectId("650b3f30f95b3a231db93cbf")}, {$set:{author: null}})
   
   db.products.updateOne({_id:ObjectId("650b3f44f95b3a231db93cc0")}, {$set:{author: null}})

   // Schema Validation in MongoDB | Schema & Schema Validation

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


db.customers1.insertOne({name:'John', email: 'abc@axy.com', address: {street: 'abc',city: 'London',country: 'UK'}})

db.customers1.find()





































    

    // References




