import React from "react";
import Background from "../components/Background";
import "../css/General.css";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>ET-Options | About</title>
      </Helmet>
      <Nav />
      <div className="general-container">
        <Background text="ABOUT" />
        <div className="body">
          <p>
            We are always on the lookout for innovative companies and
            technologies. We carefully screen between 50 and 150 early-stage
            startups each month to bring you the best, high-potential investment
            opportunities. We cover the most successful startups in fast-growing
            industries such as Artificial Intelligence (AI), Internet of Things
            (IoT), Robotics, Biotechnology, FinTech, Mobile, Hardware, and
            Crypto.
            <br />
            <br /> To find the right startup has a team of experienced experts
            who carefully study all offers on the market and monitor all new
            products and startups. Our team of experts reviews and vets every
            aspect of early stage startups before they get included into . This
            helps us weed out failing start-ups and make sure we only invest in
            start-ups with the best possibility to succeed. <br />
            <br />
            invests in commercially proven solutions that are capital efficient.
            We have a particular emphasis on companies that have a clear path to
            monetization and profitability. <br />
            <br /> Currently, of our 18 investments, we consider 4 IoT (Internet
            of Things) Startups, 3 FinTech Startups, 3 Robotics Startups, 2 AI
            (Artificial Intelligence) Startups, 2 SaaS (Software as a Solution)
            Startups, 2 Biotechnology Startups and 2 Crypto Startups. Here are
            some of the companies we have selected – Five AI, Dandelion, Botsify
            (AI Startup), Heliocor (Fintech Startup), Kinetic (Healthcare
            Startup), Bundil (Crypto Startup), Emotix (Robotics Startup). These
            companies are revolutionizing their respective fields by developing
            innovative products. <br />
            <br />
            For example, the AI company 'Five AI' is aiming to transform
            European cities for safer, driverless cars. The service is for
            people who are currently using cars for their daily commute. Company
            has already started trials in the UK, and aims to bring supervised
            trial cars to the major freeways by mid-2020. To take another
            example: 'Dandelion' is a startup, focusing on geothermal pump
            installations to harness energy from below the Earth's surface to
            keep homes hot and cold during different seasons. The geothermal
            installation will keep the homes cool in Summer by pumping heat away
            from home into the Earth's crust, and in Winter keeps it warm by
            pumping back heat from below the Earth into the house. <br /> <br />{" "}
            If you have ever wanted to help support and develop new high-tech
            startups, gives you the perfect opportunity to get involved in a
            simple and financially rewarding way. We provide our clients with
            user-friendly member area and guarantee that all financial
            transactions are performed in a strongly regulated environment in
            accordance with the highest safety.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
