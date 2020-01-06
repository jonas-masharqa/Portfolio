import React from 'react';
import emailjs from 'emailjs-com';


const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("default_service", "template_whQB4I7z", e.target, "user_Y0S8nUS9ZEDFDPQgBtEin")
      .then((result) => {
          console.log('success');
      }, (error) => {
          console.log('failed');
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactForm