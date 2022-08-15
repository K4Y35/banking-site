import React from "react";
import "./Features.css";
import FeatureCard from "./FeatureCard";
import online from "../images/icon-online.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";
import budgeting from "../images/icon-budgeting.svg";

function Features() {
  return (
    <section className="features">
      <div className="featureIsideDiv">
        <h1>Why choose Easybank?</h1>

        <p>
          We leverage opne Banking to turn your bank account into your financial
          hub. <br />
          Control Your finanaces like never before.
        </p>

        <div className="cards">
          <FeatureCard
            image={online}
            heading="Online Banking"
            details="Our modern web and mobile aoolication allow you to keep track of your
        finances wherever you are in the world."
          />
          <FeatureCard
            image={budgeting}
            heading="Simple Budgeting"
            details="See exactly where your money goes each month. Reciev notification when you're close to hitting your limits."
          />
          <FeatureCard
            image={onboarding}
            heading="Fast Onboarding"
            details="We don't do branches. Opne your account in minutes online and start taking conteol of your finances right away"
          />
          <FeatureCard
            image={api}
            heading="Open Api"
            details="Manage your savings, investments, pension, and much more from one account, Tracking your money has never been easier."
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
