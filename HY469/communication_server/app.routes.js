/**
 * Main application routes
 * 
 */

exports.addRoutes = (app) => {

    //1. add your base routes here..
   app.use("/helloWorld", require('./app/helloWorld/routes'));

};