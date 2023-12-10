import React from "react";

const Section = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    );
}

export default Section;