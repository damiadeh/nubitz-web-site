import React, { useState } from "react";
import Button from "../primary-button/Button";
import Styles from "./stepper.module.scss";

const industry = {
  items: [
    {
      image: "/assets/project-request/hospital.svg",
      title: "Hospital",
    },
    {
      image: "/assets/project-request/transaction.svg",
      title: "Fintech",
    },
    {
      image: "/assets/project-request/rocket.svg",
      title: "Start Up",
    },
    {
      image: "/assets/project-request/ecommerce.svg",
      title: "E-Commerce",
    },
    {
      image: "/assets/project-request/presentation.svg",
      title: "Education",
    },
    {
      image: null,
      title: "Others",
    },
  ],
};

const services = {
  items: [
    {
      image: "/assets/project-request/services/web.svg",
      title: "Web Development",
    },
    {
      image: "/assets/project-request/services/apple.svg",
      title: "IOS App",
    },
    {
      image: "/assets/project-request/services/android.svg",
      title: "Android App",
    },
    {
      image: "/assets/project-request/services/branding.svg",
      title: "Branding",
    },
    {
      image: "/assets/project-request/services/ai.svg",
      title: "AI Development",
    },
    {
      image: null,
      title: "Others",
    },
  ],
};

const duration = {
  items: [
    {
      title: "Less than 1 month",
    },
    {
      title: "1-3 months",
    },
    {
      title: "3-6 months",
    },
    {
      title: "6-9 months",
    },
    {
      title: "More than 9 months",
    },
  ],
};

const budget = {
  items: [
    {
      title: "Less than $40",
    },
    {
      title: "$40 - $90",
    },
    {
      title: "$90 and above",
    },
  ],
};

const Stepper = () => {
  const [step, setStep] = useState(0);

  const handleStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }

    console.log(step);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.breadcrumb}>
        <div>
          <p>Industry</p>
        </div>
        <span>›</span>
        <div>
          <p>Services</p>
        </div>
        <span>›</span>
        <div>
          <p>Project Duration</p>
        </div>
        <span>›</span>
        <div>
          <p>Budget</p>
        </div>
      </div>
      <div className={Styles.text}>
        {step === 0 ? (
          <>
            <h5>Choose your industry</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
              urna aliquet cras.
            </p>
          </>
        ) : step === 1 ? (
          <>
            <h5>What service are you searching for?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
              urna aliquet cras.
            </p>
          </>
        ) : step === 2 ? (
          <>
            <h5>
              Width How much time do you have for a development? How much time
              do you have for a development?
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
              urna aliquet cras.
            </p>
          </>
        ) : step === 3 ? (
          <>
            <h5>What is your Project budget?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
              urna aliquet cras.
            </p>
          </>
        ) : null}
      </div>
      <div className={Styles.requests}>
        {step === 0
          ? industry.items.map((item) => (
              <div className={Styles.request} key={item.title}>
                {item.image !== null && (
                  <img src={item.image} alt={item.title} />
                )}
                <p>{item.title}</p>
              </div>
            ))
          : step === 1
          ? services.items.map((item) => (
              <div className={Styles.request} key={item.title}>
                {item.image !== null && (
                  <img src={item.image} alt={item.title} />
                )}
                <p>{item.title}</p>
              </div>
            ))
          : step === 2
          ? duration.items.map((item) => (
              <div className={Styles.request} key={item.title}>
                <p>{item.title}</p>
              </div>
            ))
          : step === 3 &&
            budget.items.map((item) => (
              <div className={Styles.request} key={item.title}>
                <p>{item.title}</p>
              </div>
            ))}
      </div>
      <div className={Styles.button}>
        {step === 3 ? (
          <Button
            text="Let's Get Started"
            backgroundColor="#00103c"
            textColor="white"
          />
        ) : (
          <Button
            text="Next Question"
            backgroundColor="#00103c"
            textColor="white"
            onClick={handleStep}
          />
        )}
      </div>
    </div>
  );
};

export default Stepper;
