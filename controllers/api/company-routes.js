const router = require('express').Router();
const {  ,  } = require('../../models');

// The `/api/companies` endpoint
// find all companies
router.get('/', async (req, res) => {
  try {
    const companyData = await Company.findAll({
      include: [{ model: Positions }],
    });
    res.status(200).json(companyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one company by its `id` (name??) value
router.get('/:id', async (req, res) => {
    try {
      const companyData = await Company.findByPk(req.params.id, {
        // be sure to include its associated Products
        include: [{ model: Positions }],
      });
      res.status(200).json(companyData);
    } catch (err) {
      res.status(500).json(err);
    }  
  });
  
   // create a new company
  router.post('/', async (req, res) => {
    try {
      const newCompany = await Company.create( {
        company_name: req.body.company_name,
      });
      res.status(200).json(newCompany);
    } catch (err) {
      res.status(500).json(err);
    }  
  });
  
  // update a category by its `id` value
  router.put('/:id', async (req, res) => {
    try {
      const categoryData = await Category.update(req.body, {
        where: {
          id: req.params.id,
        }
      });
      if (!categoryData[0]) {  
        res.status(404).json({ message: 'No Category with that ID.' });
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // delete a category by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const categoryID = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      // if (!categoryID[0]) {
      //   res.status(404).json({ message: 'No Category with that ID.' });
      //   return;
      // }
      res.status(200).json(categoryID);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;