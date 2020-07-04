import React from 'react';
import './Skills.scss';

const Skills = ({ skills }) => (
  <section className='container skills'>
    <h2 className='section-title'>{skills.skills_title}</h2>
    <ul>
      {skills.map((skill, idx) => {
        return (
          <li className='screenshot' key={idx}>
            <h4>{skill.title}</h4>
            <img src={skill.logo} alt={skill.alt} />
          </li>
        )
      })}
    </ul>
  </section>
);

export default Skills;