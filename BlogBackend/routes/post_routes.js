//loading modules
const express = require("express");
const dbConnection = require("../database/config.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const router = express.Router();

//verifyJWT authorization  middleware.
const verifyJWT = (req, res, next) => {
  const sentToken = req.headers["authorization"]?.split(" ")[1];
  if (sentToken) {
    jwt.verify(sentToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "Auth failed" });
      } else {
        console.log("Token verified successfully:", decoded);
        next();
      }
    });
  } else {
    res.json({ auth: false, message: "Auth failed (no token provided)" });
  }
};

/*----------post routes------------*/

//Authentificated get all posts  request
router.get("/get-all", (req, res) => {
  let sql = "select * from post";
  dbConnection.query(sql, (err, queryResult) => {
    if (err) {
      console.log(err);
    } else {
      queryResult.map((post, index) => {
        let sql = `select * from category where id_category = ${post.id_category}`;
        dbConnection.query(sql, (err, rslt) => {
          post['category'] = post['id_category'];
          delete post.id_category
          post.category = rslt[0];
          if (index == queryResult.length - 1) {
            res.status(200).json(queryResult)
          }
        });
      });
    }
  });
});

//get posts by categories
router.get("/category/:category", (req, res) => {
  cat_param = req.params.category;
  //console.log(cat_param)

  let sql = `select id_category from category where name = '${cat_param}'`;

  dbConnection.query(sql, (err, queryResult) => {
    if (err) {
      console.log(err);
    } else {
      let id_cat = queryResult[0].id_category;
      console.log("id_cat", queryResult[0].id_category);
      if (id_cat) {
        dbConnection.query(
          `select * from post where id_category =${id_cat}`,
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log("posts :", result);
              res.send(result);
            }
          }
        );
      }
    }
  });
});

//add a new post in db
router.post("/add", (req, res) => {
  /* we can retrieve the object posted using request body*/
  let data = req.body;
  let sql = "insert into post SET ?";
  dbConnection.query(sql, data, (err, queryResult) => {
    if (err) {
      console.log(err);
    } else {
      res.send("post inserted successfully !");
      console.log("post added succefully");
    }
  });
});

//get a post by id

//get a post by id
router.get("/get-post/:id", (req, res) => {
  let sql = `select * from post where id_post = ${req.params.id}`;
  dbConnection.query(sql, (err, queryResult) => {
    if (err) {
      console.log(err);
    } else {
      //fetching category object
      let post = queryResult[0];
      //retrive all post comments
      dbConnection.query(
        `select * from comment where id_post = ${req.params.id}`,
        (err, rslt) => {
          if (err) {
            console.log(err);
          } else {
            post.comments = rslt;
          }
        }
      );
      //customize a category object
      dbConnection.query(
        `select * from category where id_category = ${post.id_category}`,
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            post.id_category = post.category;
            post.category = result[0];
            res.send(post);
          }
        }
      );
    }
  });
});

//search a post by passed keyword
router.get("/search", (req, res) => {
  let keyword = req.query.keyword;
  //console.log(keyword)
  let sql = "select * from post";
  dbConnection.query(sql, (err, queryResut) => {
    if (err) {
      console.log(err);
    } else {
      //includes check if a string includes string passed in argument and returns a boolean
      let matchedPosts = queryResut.filter((p) => {
        if (p.title.includes(keyword)) return p;
      });
      res.send(matchedPosts);
    }
  });
});

module.exports = router;

//----------------------------------------------------------------------------------------------------------------------
/* custom get request to get cat object instead of fk id
router.get('/get-all', (req, res) => {
    let sql = "select * from post"
    dbConnection.query(sql, (err, queryResult) => {
        if (err) {
            console.log(err);
        }
        else {
            queryResult.map( elm => { 

                dbConnection.query(`select * from category where id_category =${elm.id_category} `, (err, result)=>{
                    if (err) {
                        console.log(err);
                    }
                    else
                    {
                        //elm.id_category = result  
                        elm.id_category = result[0]
                        console.log(queryResult)   
                        res.send(queryResult)              
                    }
                })
            });
            //res.send(queryResult)
        }

        
    })
})*/
