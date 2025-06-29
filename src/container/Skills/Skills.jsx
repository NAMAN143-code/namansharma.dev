import React, {useState, useEffect} from 'react';
import {Tooltip as ReactTooltip} from 'react-tooltip';
import {motion} from 'framer-motion'
import {AppWrap,  MotionWrap} from '../../wrapper';
import {urlFor, client} from '../../client'

import './Skills.scss'

const Skills = () => {

  const [experiences, setExperience] = useState([]);
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      const extra = {
    year: '2023-Present',
    works: [{
      name: 'Application Developer',
      company: 'Shoppers Drug Mart',
      desc: 'Developed and Optimized Spring Boot applications for the biggest healthcare application of Canada, HealthWatch. Promptly fixed critical production level defects. Created and Authored common package releases deployable to both cloud and non-Cloud environments. Worked on optimizations mainly, alongwith new initiatives.',
    }],
  };
  setExperience([...data, extra]);
    })

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    })
  }, [])

  return (
    <>
      <h2 className="head-text"><span>Skills</span> & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills')
  
  , 'skills', "app__whitebg"
  );
