import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FooterBar, NavigationBar } from "./components/layout/Navs&Foot";
import FormInput from "./components/app/FormInput";
import { JadwalBola } from "./components/app/Entertainment";

function Landing() {
  return (
    <>
      <h1 className="relative container mx-auto">Hello World!</h1>
    </>
  )
};
function MyPages() {
  return (
    <>
      <h1>Hello World! Again</h1>
    </>
  )
};

const Application = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <nav className="relative container mx-auto">
          <Link to='/'>Home</Link>{' '}
          <Link to='/pages'>Pages</Link>{' '}
          <Link to='/form'>Form</Link>{' '}
          <Link to='/entertainment/jadwalbola'>Jadwal Bola</Link>{' '}
        </nav>

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/pages" element={<MyPages />} />
          <Route path="/form" element={<FormInput />} />
          <Route path="/entertainment/jadwalbola" element={<JadwalBola />} />
        </Routes>

        {/* <FooterBar /> */}
      </BrowserRouter>
    </div>
  );
};


export default Application;
