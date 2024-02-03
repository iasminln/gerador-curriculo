import React from "react";
import PeronalizeIntro from "./components/Intro/PeronalizeIntro";
import Form from "./components/Form/FormPersonalize";

const Personalize = () => {
  return (
    <section className="personalize">
      <div className="container-personalize">
        <PeronalizeIntro />
        <Form />
      </div>
    </section>
  );
};

export default Personalize;
