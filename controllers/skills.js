const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create
};

function create(req, res) {
    console.log(req.body);
    // Models are responsible for CRUD'ing the data
    Skill.create(req.body);
    // Always do a reditect when data has been changed. Usually back to the collection page
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new', { 
        title: 'New Skill'});
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    });
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    });
}