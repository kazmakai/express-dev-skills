const skills = [
    {id: 1, skill: 'HTML', proficiency: true},
    {id: 2, skill: 'CSS', proficiency: true},
    {id: 3, skill: 'JavaScript', proficiency: false},
    {id: 4, skill: 'NodeJS', proficiency: false},
    {id: 5, skill: 'Express', proficiency: false},
    {id: 6, skill: 'MongoDB', proficiency: false},
    {id: 7, skill: 'Mongoose', proficiency: false},
  ];

module.exports = {
  getAll,
  getOne,
  create
};

function create(skill) {
  // Add the id
  skill.ide =Date.now() % 1000000;
  //New skills wouldn't be checked off
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id)
}

function getAll() {
return skills;
}