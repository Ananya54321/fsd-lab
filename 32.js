// Create college database, and products collection and insert the following data in MongoDB

// Find the products information whose price is greater than or equal to 200.
// Product.find({ $gte: {price : 200} }); or db.find({$gte:{price : 200}})

// Find the products information whose price is less than 200.
Product.find({ price: { $lt: 200 } });

// Find the products information whose quantity is not equal to 300.
Product.find({ quantity: { $ne: 300 } });

// Find the products information whose price is equal to 200 and quantity is equal to 60.
Product.find({ price: 200, quantity: 60 });

// Find the products information whose price is equal to 500 or quantity is equal to 60.
Product.find({ $or: [{ price: 500 }, { quantity: 60 }] });

// Find the products information whose price is not equal to 400 or quantity is not equal to 40.
Product.find({ $or: [{ price: { $ne: 400 } }, { quantity: { $ne: 40 } }] });

// Find the products information whose price is either 200 or 400.
Product.find({ $or: { $in: [200, 400] } });

// Find the products information whose price is neither 100 nor 500.
Product.find({ price: { $nin: [200, 400] } });

// Update the price of laptop to 700.
Product.UpdateOne({ name: "laptop" }, { $set: { price: 900 } });

// Find the name, and price of the products whose _id is 5.
Product.find({ _id: 5 }, { name: 1, price: 1, _id: 0 });

// Sort the products collection based on the ascending order of name.
Product.find().sort({ name: 1 });

// Sort the products collection based on the descending order of price and limit the result to 2 documents.
Product.find().sort({ price: -1 }).limit(2);

// Retrieve the name, and price of the product with the lowest price
Product.find({}, { name: 1, price: 1, _id: 0 }).sort({ price: 1 }).limit(1);

// Retrieve the third lowest-priced product, displaying only its name and price
Product.find({}, { name: 1, price: 1, _id: 0 })
  .sort({ price: 1 })
  .skip(2)
  .limit(1);

// Delete the product whose _id is 7.
Product.deleteById(7);
Product.deleteOne({ _id: 7 });
