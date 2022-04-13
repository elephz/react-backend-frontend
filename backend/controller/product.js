const connection = require('../connectDB')
exports.create = (req, res) => {
  try {
    const {name,detail,price,unit,qty,shop_id,product_type} = req.body
    
    connection.query(
      'INSERT INTO `products`(`name`,`detail`,`price`,`qty`,`unit`,`shop_id`,`product_type`) VALUES (?,?,?,?,?,?,?)',
      [name,detail,price,qty,unit,shop_id,product_type],
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

exports.update = (req, res) => {
  try {
    const {name,detail,price,unit} = req.body
    const {id} = req.params
    connection.query(
      'UPDATE `products` SET `name`= ?,`detail`= ?,`price`= ?,`unit`= ? WHERE id = ?',
      [name,detail,price,unit,id],
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
      'DELETE FROM products WHERE id= ?',
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
      'SELECT * FROM products WHERE id= ?',
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
      `SELECT products.* , product_types.name AS product_type_name, shops.name AS shop_name FROM products 
        LEFT JOIN product_types ON products.product_type = product_types.id
        LEFT JOIN shops ON products.shop_id = shops.id
        `,
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

exports.productInShop = (req, res) => {
  try {
    const {id} = req.params

    connection.query(
      `SELECT products.* , product_types.name AS product_type_name, shops.name AS shop_name FROM products 
        LEFT JOIN product_types ON products.product_type = product_types.id
        LEFT JOIN shops ON products.shop_id = shops.id
        WHERE shop_id = ?
        `,
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