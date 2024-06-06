import HeaderImage from '../assets/DWBL-Header.png';
import Field1 from '../assets/BaseballField_1.png';
import Field2 from '../assets/BaseballField_2.png';
import Field3 from '../assets/BaseballField_3.png';

const IntroSection = () => (
  <div className="flex flex-col md:flex-row justify-around flex-wrap items-center mb-20">
    <p className="w-full md:w-1/2 text-lg md:text-2xl text-primary mb-5">
      Welcome to the Diamond Warriors Baseball League! Our mission is to provide a comprehensive baseball program for players of all ages and skill levels. We emphasize skill development, teamwork, and sportsmanship, ensuring every player has the opportunity to succeed and enjoy the game.
    </p>
    <img src={HeaderImage} alt="Diamond Warriors Logo" className="w-10/12 md:w-1/2 max-w-[600px]" />
  </div>
);
 
const OfferSection = () => (
  <div className="flex flex-col-reverse md:flex-row justify-around flex-wrap items-center mb-20">
    <img src={Field1} alt="Team Practice" className="w-10/12 md:w-1/2 max-w-[600px]" />
    <div className="text-lg md:text-2xl text-primary w-full md:w-1/2 mb-5">
      <li>Expert Coaching: Our experienced coaches provide top-notch training to help players develop their skills and reach their full potential.</li>
      <li>Competitive Leagues: We offer competitive leagues for various age groups, allowing players to challenge themselves and grow as athletes.</li>
      <li>Community Events: We organize community events and tournaments that foster a sense of camaraderie and sportsmanship among players and families.</li>
      <li>Training Facilities: Our state-of-the-art training facilities are equipped with everything needed to enhance player performance and safety.</li>
    </div>
  </div>
);

const WhyChooseSection = () => (
  <div className="flex justify-around flex-wrap items-center">
    <div className="text-lg md:text-2xl text-primary w-full md:w-1/2 mb-5">
      <li>Experienced Coaches: Our coaches bring years of experience and a passion for the game, ensuring each player receives personalized attention and guidance.</li>
      <li>Holistic Development: We focus on the holistic development of our players, teaching them not only baseball skills but also life skills such as leadership, teamwork, and perseverance.</li>
      <li>Small Group Training: With a low player-to-coach ratio, we provide individualized training to help each player improve their game.</li>
      <li>Family Involvement: We encourage family involvement, offering opportunities for parents to participate in events and support their children’s baseball journey.</li>
    </div>
    <img src={Field2} alt="Team Meeting" className="w-10/12 md:w-1/2 max-w-[600px]" />
  </div>
);

const appleMapsUrl = 'https://maps.apple.com/';
const googleMapsUrl = 'https://www.google.com/maps/search/';

const LocationSection = () => (
  <div className="flex flex-col-reverse md:flex-row justify-around flex-wrap items-center mb-20">
    <img src={Field3} alt="Baseball Field" className="w-10/12 md:w-1/2 max-w-[600px]" />
    <div className="text-lg md:text-2xl text-primary w-full md:w-1/2 mb-5">
      <p className='my-3'>Join us at our premier baseball fields located in the heart of Corona, CA!</p>
      <p className='my-3'>Our facilities provide a safe, modern, and well-maintained environment for players to practice and compete. The fields are easily accessible and offer ample parking for families.</p>
      <p className='my-3'>Our regular practice sessions are held on weekdays, with games scheduled on weekends. We also offer specialized training camps during the summer to help players stay sharp and improve their skills.</p>
      <p className='mt-5 text-black'>Find us here!</p>
      <p className='text-black'>
        <a href={appleMapsUrl} target="_blank" className='text-blue-700' rel="noopener noreferrer">Open in Apple Maps</a> || <a href={googleMapsUrl} target="_blank" className='text-purple-700' rel="noopener noreferrer">Open in Google Maps</a>
      </p>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="text-black">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col text-center mx-10">
        <h1 className="text-5xl font-semibold mt-5 mb-3">Welcome to the Diamond Warriors Baseball League!</h1>
        <div className="mt-20 mb-20">
          <p className="text-3xl font-semibold mb-5 underline">Building Champions On and Off the Field</p>
          <IntroSection />
          <p className="text-3xl mt-10 mb-5 font-semibold underline">What We Offer:</p>
          <OfferSection />
          <p className="text-3xl mt-10 mb-5 font-semibold underline">Why Choose Us?</p>
          <WhyChooseSection />
          <p className="text-3xl mt-10 mb-5 font-semibold underline">Where are we located?</p>
          <LocationSection />
          <p className="text-indigo-900 text-3xl font-bold mt-10 mb-5">Join the Diamond Warriors Baseball League today and become part of our winning team! Let's hit it out of the park together.</p>
          <p className="text-indigo-900 text-xl mt-5 mb-10">Contact <a href="mailto:diamondwarriors@example.com" className="underline">diamondwarriors@example.com</a> with any questions or concerns.</p>
          <a href="/register" className="btn btn-lg btn-secondary text-base-100">Register Today</a>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col text-center mx-10">
        <div className="mt-10 mb-20">
          <p className="text-2xl font-bold mb-5 underline">Building Champions On and Off the Field</p>
          <IntroSection />
          <p className="text-2xl mt-10 mb-5 font-bold underline">What We Offer:</p>
          <OfferSection />
          <p className="text-2xl mt-10 mb-5 font-bold underline">Why Choose Us?</p>
          <WhyChooseSection />
          <p className="text-2xl mt-10 mb-5 underline">Where are we located?</p>
          <LocationSection />
          <p className="text-indigo-900 text-2xl font-bold mt-10 mb-5">Join the Diamond Warriors Baseball League today and become part of our winning team! Let's hit it out of the park together.</p>
          <p className="text-indigo-900 text-lg mt-5 mb-10">Contact <a href="mailto:diamondwarriors@example.com" className="underline">diamondwarriors@example.com</a> with any questions or concerns.</p>
          <a href="/register" className="btn btn-secondary text-base-100">Register Today</a>
        </div>
      </div>
    </div>
  );
};

export default Home;