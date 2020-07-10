import React from 'react';
import './Skills.scss';

const Skills = ({ skills }) => (
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
);

export default Skills;