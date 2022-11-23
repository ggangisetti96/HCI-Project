const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
   try{     
      const  {id}  = req.params;
     
      const query =  `select u.User_First,u.User_Last,g.Score,g.DatePlayedOn,g.IsWin 
       from Users u  join GameScore g  on u.User_Id=g.UserId where u.User_Id=${id}`;
      req.db.query(query, function (err, result) {
         if (err) throw err;
         res.status(200).json({scores: result})
       });
   }
   catch(err){
      console.log(err);
      res.status(500).send()
   }
 });

 module.exports = router;