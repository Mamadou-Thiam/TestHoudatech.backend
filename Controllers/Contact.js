
const Contact = require('../Models/Contact');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact == null) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createContact = async (req, res) => {
  const contact = new Contact({
    prenom: req.body.prenom,
    nom: req.body.nom,
    email: req.body.email,
    numero: req.body.numero
  });

  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact == null) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    if (req.body.prenom != null) {
      contact.prenom = req.body.prenom;
    }
    if (req.body.nom != null) {
      contact.nom = req.body.nom;
    }
    if (req.body.email != null) {
      contact.email = req.body.email;
    }
    if (req.body.numero != null) {
      contact.numero = req.body.numero;
    }

    const updatedContact = await contact.save();
    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.deleteContact = async (req, res) => {
  Contact.findOneAndDelete({ _id: req.params.id })
    .then((livrable) => res.json({ message: "contact deleted successfully" }))
    .catch((err) => res.status(404).json({ error: " contact not found" }));
};

