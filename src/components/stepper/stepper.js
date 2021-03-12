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
  const [industryActive, setIndustryActive] = useState(false);
  const [servicesActive, setServicesActive] = useState(false);
  const [durationActive, setDurationActive] = useState(false);
  const [budgetActive, setBudgetActive] = useState(false);

  const handleStep = () => {
    if (step < 4) {
      setStep((step) => step + 1);
    }
    if (step === 0) {
      setIndustryActive(true);
    } else if (step === 1) {
      setIndustryActive(true);
      setServicesActive(true);
    } else if (step === 2) {
      setIndustryActive(true);
      setServicesActive(true);
      setDurationActive(true);
    } else if (step === 3) {
      setIndustryActive(true);
      setServicesActive(true);
      setDurationActive(true);
      setBudgetActive(true);
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.breadcrumb}>
        <div>
          <p style={{ color: "#242423" }}>Industry</p>
        </div>
        <span style={{ color: "#242423" }}>›</span>
        <div>
          <p style={{ color: servicesActive && "#242423" }}>Services</p>
        </div>
        <span style={{ color: servicesActive && "#242423" }}>›</span>
        <div>
          <p style={{ color: durationActive && "#242423" }}>Project Duration</p>
        </div>
        <span style={{ color: durationActive && "#242423" }}>›</span>
        <div>
          <p style={{ color: budgetActive && "#242423" }}>Budget</p>
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
              How much time do you have for a development? How much time do you
              have for a development?
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
            backgroundColor="#1958e3"
            textColor="white"
            width="180px"
          />
        ) : (
          <Button
            text="Next Question"
            backgroundColor="#1958e3"
            textColor="white"
            onClick={handleStep}
          />
        )}
      </div>
    </div>
  );
};

export default Stepper;
