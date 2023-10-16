const Patient = require('../models/patient');

const PatientController = {
  create: async (req, res) => {
    try {
      const { patientName, patientNID, frequentSickness, bodyTemperature, heartRate } = req.body;

      const existingPatient = await Patient.findOne({ where: { patientNID } });
      if (existingPatient) {
        return res.status(400).json({ message: 'PatientNID must be unique.' });
      }

      const patient = await Patient.create({
        patientName,
        patientNID,
        frequentSickness,
        bodyTemperature,
        heartRate,
      });

      return res.status(201).json(patient);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  getAll: async (req, res) => {
    try {
      const patients = await Patient.findAll();
      return res.status(200).json(patients);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const patient = await Patient.findByPk(id);

      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }

      return res.status(200).json(patient);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { patientName, patientID, frequentSickness, bodyTemperature, heartRate } = req.body;

      // Validate input

      const patient = await Patient.findByPk(id);

      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }

      // Update the patient's properties and save
      patient.patientName = patientName;
      patient.patientNID = patientNID;
      patient.frequentSickness = frequentSickness;
      patient.bodyTemperature = bodyTemperature;
      patient.heartRate = heartRate;
      await patient.save();

      return res.status(200).json(patient);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const patient = await Patient.findByPk(id);

      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }

      await patient.destroy();
      return res.status(204).send(); // No content
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = PatientController
