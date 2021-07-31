import React, {useState} from 'react';

import "./App.css";
import ErrorIcon from './assets/images/errorIcon';

function getImageUrl(name) {
  return new URL(`./assets/images/${name}.png`, import.meta.url).href
}

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function submitHandler(e) {
    e.preventDefault();

    if (firstName === '') {
      e.target[0].classList.add('border-alert')
      e.target[0].previousElementSibling.classList.remove('hidden')
      e.target[0].placeholder = ''
      e.target[0].nextElementSibling.classList.remove('hidden')
    } else {
      e.target[0].classList.remove('border-alert')
      e.target[0].previousElementSibling.classList.add('hidden')
      e.target[0].nextElementSibling.classList.add('hidden')
    }
    if (lastName === '') {
      e.target[1].classList.add('border-alert')
      e.target[1].previousElementSibling.classList.remove('hidden')
      e.target[1].placeholder = ''
      e.target[1].nextElementSibling.classList.remove('hidden')
    } else {
      e.target[1].classList.remove('border-alert')
      e.target[1].previousElementSibling.classList.add('hidden')
      e.target[1].nextElementSibling.classList.add('hidden')
    }
    if (email === '') {
      e.target[2].classList.add('border-alert')
      e.target[2].previousElementSibling.classList.remove('hidden')
      e.target[2].placeholder = ''
      e.target[2].nextElementSibling.classList.remove('hidden')
    } else {
      e.target[2].classList.remove('border-alert')
      e.target[2].previousElementSibling.classList.add('hidden')
      e.target[2].nextElementSibling.classList.add('hidden')
    }
    if (password === '') {
      e.target[3].classList.add('border-alert')
      e.target[3].previousElementSibling.classList.remove('hidden')
      e.target[3].placeholder = ''
      e.target[3].nextElementSibling.classList.remove('hidden')
    } else {
      e.target[3].classList.remove('border-alert')
      e.target[3].previousElementSibling.classList.add('hidden')
      e.target[3].nextElementSibling.classList.add('hidden')
    }
  }


  return (
    <div className="container mx-auto h-screen w-screen flex flex-col md:flex-row md:items-center" style={{backgroundImage: `url(${getImageUrl('bg-intro-mobile')})`}}>
      <section className="p-6 mt-20 md:w-5/12 lg:w-6/12 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Learn to code by watching others</h1>
        <p className="text-base leading-7">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>

      <main className="p-6 md:w-7/12 lg:w-6/12">
        <div className="mb-6 rounded-lg shadow-div bg-cpurple py-6 px-14 text-center text-2xl">
          <p className=" text-base font-light"><span className="font-bold">Try it free 7 days</span><span className="font-normal"> then $20/mo. thereafter</span></p>
        </div>
        
        <div className=" bg-white p-6 w-100 rounded-lg shadow-div">
          <form onSubmit={submitHandler}>

            <div className="w-full mb-6">
              <label className="relative">
                <ErrorIcon className="error-icon absolute top-1/2 -translate-y-1/2 right-3 hidden" />
                <input
                  type="text"
                  id="first-name" 
                  name="first-name" 
                  className="w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent" 
                  placeholder="First Name"
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                />
                <p className="absolute -bottom-9 right-1 text-red-400 italic text-xs hidden">First Name cannot be empty</p>
              </label>
            </div>

            <div className="w-full mb-6">
              <label className="relative">
                <ErrorIcon className="error-icon absolute top-1/2 -translate-y-1/2 right-3 hidden" />
                <input
                  type="text"
                  id="last-name" 
                  name="last-name" 
                  className="w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent" 
                  placeholder="Last Name"
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                />
                <p className="absolute -bottom-9 right-1 text-red-400 italic text-xs hidden">Last Name cannot be empty</p>
              </label>
            </div>


            <div className="w-full mb-6">
              <label className="relative">
                <ErrorIcon className="error-icon absolute top-1/2 -translate-y-1/2 right-3 hidden" />
                <input
                  type="email"
                  id="email" 
                  name="email" 
                  className="w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent" 
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
                <p className="absolute -bottom-9 right-1 text-red-400 italic text-xs hidden">Looks like this is not an email</p>
              </label>
            </div>


            <div className="w-full mb-6">
              <label className="relative">
                <ErrorIcon className="error-icon absolute top-1/2 -translate-y-1/2 right-3 hidden" />
                <input
                  type="password"
                  id="password" 
                  name="password" 
                  className="w-full text-sm text-gray-600 font-semibold rounded-md py-4 pl-5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent" 
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <p className="absolute -bottom-9 right-1 text-red-400 italic text-xs hidden">Password cannot be empty</p>
              </label>
            </div>

            
            <div>
            <button type="submit" className="w-full py-4 rounded-md font-semibold shadow-btn bg-cgreen uppercase active:bg-clightGreen">claim your free trial</button>
            </div>
            
          </form>
          <p className="text-gray-400 text-xs text-center mt-3 px-4">By clicking the button, you are agreeing to our <span className="font-bold text-red-400">Terms and Services</span></p>
        </div>
      </main>
    </div>
  );
}

export default App;
