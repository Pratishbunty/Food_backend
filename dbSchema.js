const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://bunny:UXnG3mwxl778rnbx@cluster0.oqozoj2.mongodb.net/?retryWrites=true&w=majority";

async function fetchData() {
      try {
            await mongoose.connect(mongoURI);
            console.log("Connected to MongoDB Database");

            const fetchedData = await mongoose.connection.db.collection("food_items").findOne({ data });
            console.log(fetchedData);
      } catch (error) {
            console.log(error);
      } finally {
            mongoose.disconnect();
            console.log("Disconnected from MongoDB Database");
      }
}


module.exports = fetchData;











// const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://bunny:UXnG3mwxl778rnbx@cluster0.oqozoj2.mongodb.net/?retryWrites=true&w=majority"
// //mongoose.connect(mongoURI,()=>)

// const fetched_data = await mongoose.connection.db.collection("food_items");
// fetched_data.findOne({ data }).toArray(function (err, data) {
//       if (err) console.log(err);
//       else console.log(data);
// })