import React, { useState } from 'react'
import ContactForm from './ContactForm'
import emailjs from '@emailjs/browser'

import ContactDeco from '../../assets/fiverr_img.jpg'

const SectionContact = () => {
  const [sent, setSent] = useState('')

  const sendFeedback = async (variables) => {
    try {
      await emailjs.send(
        'service_h4ih047',
        'template_vpmw3ha',
        variables,
        'user_ebmtquP9MWrfdCKIl3rHx',
      )

      setSent(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="row section-contact" id="section-contact">
      <div className="row title">
        <h2> ME CONTACTER </h2>
        <p>
          Vous pouvez me contacter pour poser vos questions ou demander des
          conseils.
          <br/>
          Pour se faire, utilisez le formulaire ci-dessous.
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          {sent ? <p style={{ color: 'green' }}> Merci! Votre message a bien été
            envoyé. </p> : <ContactForm sendFeedback={sendFeedback}/>}
        </div>
        <div className="contact-deco col-lg-6 d-none d-lg-flex">
          <img src={ContactDeco} alt="contact-deco"/>
        </div>
      </div>
    </div>
  )
}

export default SectionContact