import React from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, Input, TextArea, Button } from 'semantic-ui-react'


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
    <Container id='contact-container'>
      <Form className="contact-form" onSubmit={sendEmail}>
        <Form.Group widhts='equal'>
        <Form.Field
            id='contact-name'
            control={Input}
            label='Name'
            placeholder='Name'
            name='name'
          />
          <Form.Field
            id='contact-email'
            control={Input}
            label='Email'
            placeholder='Email'
            name='email'
          />
        </Form.Group>
        <Form.Field
          id='contact-message'
          control={TextArea}
          label='Message'
          placeholder='Write something..'
          name='message'
        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Send'
        />
      </Form>
    </Container>
  );
}

export default ContactForm