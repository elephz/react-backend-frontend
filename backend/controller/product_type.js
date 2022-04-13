const connection = require('../connectDB')

exports.create = (req, res) => {
  try {
    const {name,title} = req.body
    connection.query(
      'INSERT INTO `product_types`(`name`,`title`) VALUES (?,?)',
      [name,title],
      ((err,result)=>{
        if(err) throw(err)
        res.json(result)
      })
    )
  } catch (error) {
    console.log(error.message);
    res.status(500).send("ser Error :" + error.message);
  }

};

exports.list = (req, res) => {
  try {
    connection.query(
      'SELECT * FROM product_types ',
      [],
      ((err,result)=>{
        if(err) throw(err)
        res.json(result)
      })
    )
  } catch (error) {
    console.log(error.message);
    res.status(500).send("ser Error :" + error.message);
  }

};