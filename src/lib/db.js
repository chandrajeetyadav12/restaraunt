import mongoose from "mongoose";


// const MONGODB_URI = process.env.MONGODB_URI;
const MONGO_URI_Atlas=process.env.MONGO_URI_Atlas


if (!MONGO_URI_Atlas) {
throw new Error("Please define MONGO_URI_Atlas in .env.local");
}


let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };


export async function connectDB() {
if (cached.conn) return cached.conn;


if (!cached.promise) {
cached.promise = mongoose.connect(MONGO_URI_Atlas, {
bufferCommands: false,
autoIndex: false,
}).then((mongoose) => mongoose);
}


cached.conn = await cached.promise;
return cached.conn;
}