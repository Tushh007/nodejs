const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the database', error)
    }

    console.log('Connected!')

    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Tushar',
    //     age: 25
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user', error)
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users', error)
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'my task 1',
            completed: false
        },
        {
            description: 'my task 2',
            completed: true
        },
        {
            description: 'my task 3',
            completed: false
        }

    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks', error)
        }

        console.log(result.ops)
    })
})