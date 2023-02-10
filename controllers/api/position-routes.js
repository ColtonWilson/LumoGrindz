const router = require('express').Router();
const {  ,  } = require('../../models');
const Position = require('../../models/Position');

// find all positions
router.get('/', async (req, res) => {
  try {
    const positionData = await Position.findAll({
        include: [{ model: ????}],
    });
    res.status(200).json(positionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one position in the company selected by job title??
router.get('/:id', async (req, res) => {
  try {
    const positionData = await Position.findByPk(req.params.id, {
      include: [{ mode: Positions }],
    });
    res.status(200).json(positionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new position
router.post('/', async (req, res) => {
  try {
    const newPosition = await Positions.create ( {
        company_name: req.body.company_name,
    });
    res.status(200).json(newPosition);
  } catch (err) {
    res.status(500).json(err);
  }
});



