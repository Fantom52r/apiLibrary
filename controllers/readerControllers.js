const Reader = require('../models/readerModels.js');

exports.getAllReaders = async (req, res) => {
  try {
    const readers = await Reader.find();
    res.status(200).json(readers);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getReaderById = async (req, res) => {
  try {
    const reader = await Reader.findById(req.params.id);
    if (!reader) return res.status(404).json({ message: 'Reader not found' });
    res.status(200).json(reader);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createReader = async (req, res) => {
  try {
    const reader = new Reader(req.body);
    await reader.save();
    res.status(201).json(reader);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateReader = async (req, res) => {
  try {
    const reader = await Reader.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reader) return res.status(404).json({ message: 'Reader not found' });
    res.status(200).json(reader);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteReader = async (req, res) => {
  try {
    const reader = await Reader.findByIdAndDelete(req.params.id);
    if (!reader) return res.status(404).json({ message: 'Reader not found' });
    res.status(200).json({ message: 'Reader deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
