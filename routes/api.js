const express = require('express');
const router = express.Router();
const PatientController = require('../controllers/patientController');

router.post('/patients', PatientController.create);
router.get('/patients', PatientController.getAll);
router.get('/patients/:id', PatientController.getById);
router.put('/patients/:id', PatientController.update);

module.exports = router;
