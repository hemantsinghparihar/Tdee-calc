import React from 'react';
import { useForm } from 'react-hook-form';
import '../css/about.css';
import '../css/contact.css';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('contact form data',data);
  };

  return (
    <div className='container'>
      <div className="page">
        <h1>Contact</h1>
        <p>Have any questions or concerns about the site? Use the form below or email me directly - my email address is rob@tdeecalculator.net</p>

        <form onSubmit={handleSubmit(onSubmit)} id='contact' className='contact-form'>
          <div className='form-group'>
            <div style={{ maxWidth: '33.3333%' }}>
              <input
                type="text"
                className='form-control'
                id='name'
                placeholder='name'
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
          </div>

          <div className='form-group'>
            <div style={{ maxWidth: '33.3333%' }}>
              <input
                type="email"
                className='form-control'
                id='email'
                placeholder='youremail@gmail.com'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>

          <div className='form-group'>
            <div style={{ maxWidth: '66.6667%' }}>
              <input
                type="text"
                className='form-control'
                id='subject'
                placeholder='subject'
                {...register('subject', { required: 'Subject is required' })}
              />
              {errors.subject && <p>{errors.subject.message}</p>}
            </div>
          </div>

          <div className='form-group'>
            <div style={{ maxWidth: '66.6667%' }}>
              <textarea
                className='form-control'
                id="message"
                placeholder='Message...'
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && <p>{errors.message.message}</p>}
            </div>
          </div>

          <div className='form-group'>
            <div>
              <button className='submit-btn' type='submit'>send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;


// import React from 'react'
// import '../css/about.css'
// import '../css/contact.css'

// function Contact() {
//   return (
//     <div className='container'>
//         <div className="page">
//         <h1>Contact</h1>
//         <p>Have any questions or concerns about the site? Use the form below or email me directly - my email address is rob@tdeecalculator.net</p>

//         <form action="" id='contact' className='contact-form' >
//             <div className='form-group'>
//                 <div style={{maxWidth:'33.3333%'}}>
//                     <input type="text" className='form-control' id='name' name='name' placeholder='name' />
//                 </div>
//             </div>

//             <div className='form-group'>
//                 <div style={{maxWidth:'33.3333%'}}>
//                     <input type="text" className='form-control' id='email' name='email' placeholder='youremail@gmail.com' />
//                 </div>
//             </div>

//             <div className='form-group'>
//                 <div style={{maxWidth:'66.6667%'}}>
//                     <input type="text" className='form-control' id='subject' name='subject' placeholder='subject' />
//                 </div>
//             </div>

//             <div className='form-group'>
//                 <div style={{maxWidth:'66.6667%'}}>
//                     <textarea className='form-control' name="message" id="message" placeholder='Message...'></textarea>
//                 </div>
//             </div>

//             <div className='form-group'>
//                 <div >
//                      <button className='submit-btn' type='submit'>send</button>
//                 </div>
//             </div>
//         </form>

//         </div>
      
//     </div>
//   )
// }

// export default Contact
