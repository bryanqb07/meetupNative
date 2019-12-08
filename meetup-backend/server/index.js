import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middleware';
import { MeetupRoutes } from './modules';
const app = express();

// Database
dbConfig();

//Middleware
middlewaresConfig(app);

app.use("/api", MeetupRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
    if(err){
        console.log(err);
    }else{
        console.log(`App listening on port ${PORT}`);
    }
});