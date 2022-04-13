const connection = require('../connectDB')

exports.create = (req, res) => {
  try {
    const {name,title,tel,address} = req.body
    connection.query(
      'INSERT INTO `shops`(`name`,`title`,`tel`,`address`) VALUES (?,?,?,?)',
      [name,title,tel,address],
      ((err,result)=>{
        res.json(result)
      })
    )
  } catch (error) {
    console.log(error.message);
    res.status(500).send("ser Error :" + error.message);
  }
  
};

exports.update = (req, res) => {
  try {
    const {name,title,tel,address} = req.body
    const {id} = req.params
    connection.query(
      'UPDATE `shops` SET `name`= ?,`title`= ?,`tel`= ?,`address`= ? WHERE id = ?',
      [name,title,tel,address,id],
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

exports.remove = (req, res) => {
  try {
    const {id} = req.params
    connection.query(
      'DELETE FROM shops WHERE id= ?',
      [id],
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

exports.read = (req, res) => {
  try {
    const {id} = req.params
    connection.query(
      'SELECT * FROM shops WHERE id= ?',
      [id],
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
      'SELECT * FROM shops ',
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