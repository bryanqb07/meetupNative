import mongoose from 'mongoose';

export default() => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/meetupNative');
    mongoose.connection
        .once('open', () => console.log("Mongoose up and running"))
        .on('error', (err) => console.log(err));
};