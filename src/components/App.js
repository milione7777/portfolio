import React from "react";
import Header from "./header";
import Hero from './hero'
import Tech from "./tech";

function App() {
  
  return (
   <div className="relative min-h-[100vh] inset-0 -z-10 h- w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Header />
      <Hero />
      <Tech />
    </div>
  );
}

export default App;
