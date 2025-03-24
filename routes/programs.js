const express = require('express');
const router = express.Router();

const { Programs, ProgramInterests } = require('../models');
const verifyapikey = require('../middlewares/verifyapikey');

/* GET programs listing. */
router.get('/', verifyapikey, async (req, res) => {
  try {
    const programs = await Programs.findAll({
      where: {
        status: true
      },
      include: [
        { model: ProgramInterests, as: 'interests', attributes: ['name', 'status'] }
      ],
    });
    return res.json(programs);
  } catch (error) {
    console.log(error);
    return res.status(500).send('An a error occured while processing your request.');
  }
});

/* GET program by ID. */
router.get('/:id', verifyapikey, async (req, res) => {
  try {
    const program = await Programs.findOne({
      where: {
        id: req.params.id
      },
      include: [
        { model: ProgramInterests, as: 'interests', attributes: ['name', 'status'] }
      ],
    });
    if(!program) {
      return res.status(404).send('Program not found.');
    }
    return res.json(program);
  } catch (error) {
    console.log(error);
    return res.status(500).send('An a error occured while processing your request.');
  }
});

module.exports = router;
