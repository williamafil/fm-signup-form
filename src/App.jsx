import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="container mx-auto h-screen w-screen flex flex-col md:flex-row md:items-center">
      <section className="p-6 mt-20 md:w-5/12 lg:w-6/12 text-center md:text-left">
        <Hero />
      </section>

      <main className="p-6 md:w-7/12 lg:w-6/12">
        <div className="mb-6 rounded-lg shadow-div bg-blue py-6 px-14 text-center text-2xl">
          <CallToAction />
        </div>

        <div className="bg-white p-6 w-100 rounded-lg shadow-div">
          <SignupForm />
        </div>
      </main>
    </div>
  );
}

export default App;
