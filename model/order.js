// const Sequelize = require("sequelize");
// const sequelize = require("../util/database");
// const Order = sequelize.define("order", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//   },
// });

// module.exports=Order;

//mongoose

const mongose = require("mongoose");
const Schema = mongose.Schema;
const orderSchema = new Schema({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  user: {
    email: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
});
module.exports = mongose.model("Order", orderSchema);