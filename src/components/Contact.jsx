import { createElement } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className='min-h-screen h-auto bg-dark_primary text-white'
      id='contact'
    >
      <div className='md:container px-5 pt-32'>
        <h2 data-aos='fade-down' className='title !text-white'>
          {Contact.title}
        </h2>
        <h4 data-aos='fade-down' className='subtitle'>
          {Contact.subtitle}
        </h4>
        <br />
        <div className='md:flex flex-row gap-10'>
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos='fade-up'
            className='flex-1 flex flex-col gap-5'
          >
            <input
              type='text'
              name='from-name'
              placeholder='Name'
              required
              className='border-slate-600 border p-3 rounded'
            />
            <input
              type='email'
              name='user_email'
              placeholder='Email'
              required
              className='border-slate-600 border p-3 rounded'
            />
            <textarea
              name='message'
              required
              placeholder='Message'
              className='border border-slate-600 p-3 rounded h-44'
            ></textarea>
            <button className='btn self-start bg-white text-dark_primary mb-4'>
              Submit
            </button>
          </form>
          <div className='flex-1 flex-col gap-5 flex'>
            {Contact.social_media.map((content, i) => (
              <div key={i} data-aos='fade-down' data-aos-delay={i * 430}>
                <h4 className='text-white '>{createElement(content.icon)}</h4>
                <a href={content.link} target='_blank' className='font-Poppins'>
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
