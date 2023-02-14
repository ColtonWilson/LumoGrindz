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


module.exports = router;
