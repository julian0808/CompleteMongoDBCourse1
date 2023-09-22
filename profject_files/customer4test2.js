db.customer.insert([
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