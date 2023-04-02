import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section className='h-auto min-h-screen flex' id='services'>
      <div className='md:container flex flex-col justify-evenly px-5 py-14 '>
        <div>
          <h2 data-aos='fade-down' className='title'>
            {services.title}
          </h2>
          <h4 data-aos='fade-up' className='subtitle'>
            {services.subtitle}
          </h4>
        </div>
        <br />
        <div className='flex gap-5 justify-between flex-wrap group'>
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos='fade-up'
              data-aos-delay={i * 600}
              className='min-w-[14rem] duration-300 cursor-pointer border-2 rounded-xl text-center bg-bg_light_primary p-6 border-slate-200 flex-1 group-hover:blur-sm hover:!blur-none'
            >
              <img src={content.logo} alt='logo' className='mx-auto' />
              <h6 className='my-3'>{content.title}</h6>
              <p className='leading-7'>{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
