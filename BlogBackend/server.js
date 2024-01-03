//-------------------Load Necessary Modues-------------------------//
const express = require('express');
const bp = require('body-parser');
const port = 4000;

//create the app 
const app = express();

//--------------------Global configuration--------------------------
//app.use(express.json());
//app.use(express.urlencoded({extended:true}))
//using bodyparser middleware
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())

//api config
app.use(function (req, res, next) {
    //---giving browser additional data about response type
    //set additional information about the response content type
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    //allowed Website to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
//-------------------------define routes----------------------------
const postRoutes = require('./routes/post_routes');
const commentRoutes = require('./routes/comment_routes');
const categoryRoutes = require('./routes/category_routes');
const contactRoutes = require('./routes/contact_routes');


app.use('/post', postRoutes);
app.use('/category', categoryRoutes);
app.use('/comment', commentRoutes)
app.use('/contact', contactRoutes)
//------------------------------------------------------------------
//run the app on the port
app.listen(port, () => {
    console.log("running on port 4000 !")
});
