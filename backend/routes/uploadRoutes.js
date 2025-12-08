const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => cb(null, file.originalname)
});

const upload = multer({ storage });

router.post('/', upload.single('file'), (req, res) => {
  res.json({ filename: req.file.filename, path: `/static/${req.file.filename}` });
});

module.exports = router;
