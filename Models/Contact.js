
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    prenom: { type: String, required: true },
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    numero: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
