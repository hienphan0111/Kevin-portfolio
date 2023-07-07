'use client';

import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  const [msg, setMsg] = useState('');

  const handleOnSubmit = async (values, actions) => {
    values.access_key = 'c69bb7a3-e228-49dd-9b47-8bc74eb88d2a';

    console.log(data);
    const res = axios.post('https://api.web3forms.com/submit', values);
    res
      .then(() => {
        setMsg(
          'Thank you for reach out me! Your infomation has sent successfully, I will response as soon as posible'
        );
        setOpenModal(true);
        actions.resetForm();
      })
      .catch((err) => {
        setMsg('Something went wrong, could you try again');
        setOpenModal(true);
      });
  };

  return (
    <div className='w-full md:h-auto bg-zinc-800'>
      <div className="relative">
        <h1 className='font-bold text-xl p-7 text-gray-100'><span className="text-yellow-500">G</span>et in touch</h1>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-50 absolute top-6 left-2 opacity-60"></div>
      </div>
      <div className="border-gradient-y py-5 px-7 text-gray-300">
        <div className="mapouter"><div className="gmap_canvas">
          <iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=hoa minh, lien chieu&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
          </div>
        </div>
        <div className='py-7'>
          <ul className='grid grid-cols-2 text-sm gap-2'>
            <li className='uppercase'>Address: ... Da Nang, Viet Nam</li>
            <li className='uppercase'>Email: ... kevinphan@kevinphan.dev</li>
            <li className='uppercase'>Phone: ...(084) 938102461</li>
            <li className='uppercase'>Open to work: ...availible</li>
          </ul>
        </div>
        <div className='pb-5'>
          <h2 className='font-bold text-xl pb-3 border-gradient-b'>Contact form</h2>
          <Formik
            initialValues={{ fullName: '', email: '', message: '' }}
            validationSchema={Yup.object({
              fullName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              message: Yup.string()
                .min(10, 'Must be at less 10 characters')
                .required('Required'),
            })}
            onSubmit={(values, action) => handleOnSubmit(values, action)}
          >
            <Form className='flex flex-col w-full gap-3 pt-5'>
              <div className='flex w-full gap-3'>
                <div>
                  <Field name="fullName" type="text" placeholder="Full Name" className='w-full border-b focus:border-yellow-400 p-2 text-gray-200 bg-zinc-800' style={{ ':focus': { color: 'red' }}} />
                  <ErrorMessage name="fullName" />
                </div>
                <div>
                  <Field name="email" type="email" placeholder="Email Address" className='w-full border-b p-2 text-gray-200 bg-zinc-800 focus:border-yellow-400' />
                  <ErrorMessage name="email" />
                </div>
              </div>

              <Field name="message" type="text" placeholder="Your Message" className="flex h-20 text-gray-200 bg-zinc-800 focus:border-yellow-400 border-b" />
              <ErrorMessage name="message" />

              <button type="submit" className='text-xl font-bold hover:text-yellow-400 flex gap-2 items-center pt-2'>Submit <HiOutlineArrowNarrowRight /></button>
            </Form>
          </Formik>
        </div>
        {openModal ? (
          <div className="flex justify-center items-center backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative min-w-4xl my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-end p-5 border-b border-solid border-gray-300 rounded-t ">
                  <button
                    type="button"
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setOpenModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto text-gray-700">
                  <p>{msg}</p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setOpenModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Contact
