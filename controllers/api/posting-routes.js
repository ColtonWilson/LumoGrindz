const router = require('express').Router();
const { User , JobPosting } = require('../../models');

// find all postings
router.get('/', async (req, res) => {
  try {
    const jobPosting = await JobPosting.findAll({
        include: [{ model: User }],
        attributes: {exclude: ['password']}
    });

    const jobData = jobPosting.map((post) => {
      post.get({ plain: true })
    })
    // TODO: send to jobPosting webpage after creation
    res.status(200).render(jobData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one position selected by id
router.get('/:id', async (req, res) => {
  try {
    const postingData = await JobPosting.findByPk(req.params.id, {
      include: [{ model: User }],
      attributes: {exclude: ['password']}
  });
    
  const jobData = postingData.map((post) => {
    post.get({ plain: true })
  })
  // TODO: send to jobPosting webpage after creation
  res.status(200).render(jobData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new position
// router.post('/', async (req, res) => {
//   try {
//     const newPosition = await Positions.create ( {
//         company_name: req.body.company_name,
//     });
//     res.status(200).json(newPosition);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// update a category by its `id` value
// router.put('/:id', async (req, res) => {
//   try {
//     const categoryData = await Category.update(req.body, {
//       where: {
//         id: req.params.id,
//       }
//     });
//     if (!categoryData[0]) {  
//       res.status(404).json({ message: 'No Category with that ID.' });
//       return;
//     }
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// delete a category by its `id` value
// router.delete('/:id', async (req, res) => {
//   try {
//     const categoryID = await Category.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     // if (!categoryID[0]) {
//     //   res.status(404).json({ message: 'No Category with that ID.' });
//     //   return;
//     // }
//     res.status(200).json(categoryID);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;



