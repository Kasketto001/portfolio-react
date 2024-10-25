import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML', icon: 'fab fa-html5 text-red-500', level: 90 },
    { name: 'CSS', icon: 'fab fa-css3-alt text-blue-500', level: 85 },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap text-purple-600', level: 75 },
    { name: 'Tailwind CSS', icon: 'fas fa-wind text-teal-400', level: 80 },
    { name: 'JavaScript', icon: 'fab fa-js text-yellow-500', level: 85 },
    { name: 'React.js', icon: 'fab fa-react text-blue-500', level: 70 },
    { name: 'Vue.js', icon: 'fab fa-vuejs text-green-500', level: 65 },
    { name: 'Laravel', icon: 'fab fa-laravel text-red-600', level: 75 },
    { name: 'Apex (Salesforce)', icon: 'fas fa-cloud text-blue-500', level: 60 },
  ];

  return (
    <section id="skills" className="skills h-screen text-white flex flex-col justify-center items-center relative overflow-hidden">
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h2 className="text-5xl mb-6 font-bold cursor-scale">My Skills</h2>
        <p className="text-gray-400 mb-8">Here’s a breakdown of my proficiency across various technologies:</p>
        {skills.map(skill => (
          <div key={skill.name} className="skill-bar mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-lg flex items-center space-x-2">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </label>
              <span className="skill-percent text-gray-400">{skill.level}%</span>
            </div>
            <div className="bar-container bg-gray-700 rounded-full h-4 w-full">
              <div style={{ width: `${skill.level}%` }} className="bar h-full rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
