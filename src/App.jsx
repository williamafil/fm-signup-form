import React from "react";

import "./App.css";

function getImageUrl(name) {
  return new URL(`./assets/images/${name}.png`, import.meta.url).href
}

function App() {
  return (
    <div className="container mx-auto h-screen w-screen flex flex-col md:flex-row md:items-center" style={{backgroundImage: `url(${getImageUrl('bg-intro-mobile')})`}}>
      <section className="hero p-6 mt-20 md:w-5/12 lg:w-6/12">
        <h1 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Learn to code by watching others</h1>
        <p className="text-base text-center md:text-left leading-7">
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
          <form>
            <input type="text" className="mb-4 w-full text-sm text-gray-600 font-semibold border rounded-md py-4 pl-5" placeholder="First Name" />
            <input type="text" className="mb-4 w-full text-sm text-gray-600 font-semibold border rounded-md py-4 pl-5" placeholder="Last Name" />
            <input type="email" className="mb-4 w-full text-sm text-gray-600 font-semibold border rounded-md py-4 pl-5" placeholder="Email Address" />
            <input type="password" className="mb-4 w-full text-sm text-gray-600 font-semibold border rounded-md py-4 pl-5" placeholder="Password" />
            <button type="submit" className="w-full py-4 rounded-md font-semibold shadow-btn bg-cgreen uppercase">claim your free trial</button>
          </form>
          <p className="text-gray-400 text-xs text-center mt-3 px-4">By clicking the button, you are agreeing to our <span className="font-bold text-red-400">Terms and Services</span></p>
        </div>
      </main>
    </div>
  );
}

export default App;
