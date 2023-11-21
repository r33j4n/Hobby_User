const express = require('express');
const app = express();
const db = require("./models");



db.sequelize.sync().then((req)=>{
    app.listen(3000,()=>console.log("Server started on port 3000"));
});

// // Middleware
// app.use(express.json());

// // Routes

// // Start the server
// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

//   app.listen(PORT,()=>console.log("Server started on port 3000"));
