const skills = [
    {id: 125223, skill: 'HTML', proficiency: true},
    {id: 127904, skill: 'CSS', proficiency: true},
    {id: 134608, skill: 'JavaScript', proficiency: false},
    {id: 136059, skill: 'NodeJS', proficiency: false}
  ];

module.exports = {
  getAll,
  getOne
};


function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id)
}

function getAll() {
return skills;
}