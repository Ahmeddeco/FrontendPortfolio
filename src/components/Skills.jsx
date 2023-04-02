import { createElement } from "react";
import { content } from "../Content";

const Skills = () => {
  const { skills } = content;
  return (
    <section
      className='h-auto flex min-h-screen bg-bg_light_primary'
      id='skills'
    >
      <div className='md:container px-5 py-14 flex flex-col justify-evenly h-auto'>
        <div>
          <h2 className='title'>{skills.title}</h2>
          <h4 className='subtitle'>{skills.subtitle}</h4>
          <br />
        </div>
        <div className='flex flex-wrap gap-4 justify-center'>
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos='fade-up'
              data-aos-delay={i * 400}
              className='bg-white relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200'
            >
              <div>
                <img
                  src={skill.logo}
                  alt='logo'
                  className='w-10 group-hover:scale-125 duration-200'
                />
                <div>
                  <h6>{skill.name}</h6>
                  <p className='italic'>{skill.para}</p>
                  <div className='text-xl absolute top-3 right-3'>
                    {createElement(skills.icon)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
