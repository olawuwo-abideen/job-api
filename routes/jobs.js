const express = require('express');
const router = express.Router();

const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats,
} = require('../controllers/jobs');

router.route('/job').post(createJob)
router.route('/jobs').get(getAllJobs);
router.route('jobs/stats').get(showStats);
router.route('job/:id').get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
