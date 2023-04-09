import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen pt-10 bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/d9db5188-8b53-4cc2-882a-ab136bfb3051" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex justify-center'>
                <p className='text-4xl font-bold flex justify-center items-center border-b-4 border-pink-600 text-gray-300'>Contact</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded' type="text" placeholder='Name' name='name' required/>
            <input className='my-4 p-2 bg-[#ccd6f6] rounded' type="email" placeholder='Email' name='email' required/>
            <textarea className='bg-[#ccd6f6] p-2 rounded' name="message" rows="10" placeholder='Message' required></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact