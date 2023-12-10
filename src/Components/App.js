import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Section from "./Section"

const arr = [
  {
    title:"Skills",
    description:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      deleniti omnis excepturi, dicta amet autem fugit eligendi, rem veniam
      aperiam incidunt cupiditate! Corporis maxime debitis nulla eos ducimus
      dignissimos, ut ad consequatur perferendis voluptatum, deserunt veniam
      vitae amet, itaque voluptate sit quibusdam numquam doloremque laboriosam.
      Voluptatum, quas molestias! Esse, incidunt.",`
  },
  {
    title:"ssos",
    description:   ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
deleniti omnis excepturi dicta amet autem fugit eligendi rem veniam,
      aperiam incidunt cupiditate Corporis maxime debitis nulla eos ducimus,
      dignissimos ut ad consequatur perferendis voluptatum, deserunt veniam
      vitae amet itaque voluptate sit quibusdam numquam doloremque laboriosam.
      Voluptatum quas molestias! Esse incidunt.`
  },
  {
    title:"dsdd",
    description:`"dddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddd"`
  }
];
const App = () => {
    return (
      <div>
        <Navbar />
        <About />
        {
          arr.map((item)=>{
            <Section title = {item.title}
            description ={item.des} />
          })
        }
      </div>
    );
}

export default App;