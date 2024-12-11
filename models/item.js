const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const itemSchema = new mongoose.Schema({
  idNumber: { type: Number, unique: true }, 
  name: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  price: { type: Number, required: true },
  description: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});


itemSchema.plugin(AutoIncrement, { inc_field: 'idNumber' });

module.exports = mongoose.model('Item', itemSchema);
