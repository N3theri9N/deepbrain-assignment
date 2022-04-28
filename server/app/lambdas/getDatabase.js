import { MongoClient } from 'mongodb'
const getDatabase = () => { // DB 내용 전반 제어.
    const client = new MongoClient(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    let dbConnect = null
    return {
        acceptDb(callback){
            client.connect((err, db) => {
                if(err || !db){
                    return callback(err)
                }
                dbConnect = db.db('sacdb');
                return callback()
            })
        },
        getDb(){ return dbConnect}

    }
}
export default getDatabase