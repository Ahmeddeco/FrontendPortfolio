import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;
  return (
    <section className='bg-bg_light_primary min-h-screen h-auto'>
      <div className='md:container px-4 pt-14'>
        <h2 data-aos='fade-down' className='title'>
          {Hireme.title}
        </h2>
        <h4 data-aos='fade-down' className='subtitle'>
          {Hireme.subtitle}
        </h4>
        <br />
      </div>
      <div className='flex items-center md:flex-row flex-col-reverse'>
        <img
          src={Hireme.image1}
          alt='hire me'
          data-aos='fade-right'
          className='max-w-sm md:block hidden'
        />
        <img
          src={Hireme.image2}
          data-aos='fade-up'
          alt='hire me'
          className='max-w-sm md:hidden'
        />
        <div
          data-aos='fade-left'
          className='m-6 border-2 border-dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]'
        >
          <p className='leading-7'>{Hireme.para}</p>
          <br />
          <button className='btn bg-dark_primary text-white'>
            {Hireme.btnText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
