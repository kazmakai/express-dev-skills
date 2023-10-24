var express = require('express');
var router = express.Router();

//Require the controller that exports Skill CRUD functions
var skillsController = require('../controllers/skills');

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsController.index);
// GET /skills/:id
router.get('/:id', skillsController.show);

module.exports = router;
