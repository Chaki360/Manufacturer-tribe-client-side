import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section>
            <div className="hero my-12 bg-violet-50">
                <div className="hero-content grid lg:grid-cols-2 lg:gap-8 mx-8">
                    <div>
                        <img
                            src="https://www.neuralt.com/wp-content/uploads/2020/12/Charging-Features-4.png"
                            alt=""
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="text-lg">
                        <p>TextOre is an open-source intelligence (OSINT) solutions provider with deep expertise in Chinese and Russian geopolitics, influence and interference operations, leadership and organization tracking, and geospatial and network analysis.<br />

                            Our language-enabled subject-matter experts (SMEs) exploit social and edited media, state-of-the-art technologies, and advanced analytics to find and synthesize relevant intelligence for clients in law enforcement, defense, and the intelligence community. We also deliver OSINT-based business insights, competitive intelligence, due diligence research, and political risk analysis to Fortune 500 companies focused on protecting and advancing their brand, reputation, leadership, products, and services.

                            Serving as an additional strategic voice, we help clients anticipate problems, see around the corner, and gain a competitive advantage in the information ecosystem.

                        </p>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl mb-4 mt-5 text-center  font-bold text-violet-800'>Our History</h1>
            <div className="hero my-12 bg-violet-50">

                <div className="hero-content flex-col lg:flex-row-reverse grid lg:grid-cols-2 lg:gap-8 mx-8">

                    <div className="text-lg">
                        <p>TextOre is an open-source intelligence (OSINT) solutions provider with deep expertise in Chinese and Russian geopolitics, influence and interference operations, leadership and organization tracking, and geospatial and network analysis.<br />

                            Our language-enabled subject-matter experts (SMEs) exploit social and edited media, state-of-the-art technologies, and advanced analytics to find and synthesize relevant intelligence for clients in law enforcement, defense, and the intelligence community. We also deliver OSINT-based business insights, competitive intelligence, due diligence research, and political risk analysis to Fortune 500 companies focused on protecting and advancing their brand, reputation, leadership, products, and services.

                            Serving as an additional strategic voice, we help clients anticipate problems, see around the corner, and gain a competitive advantage in the information ecosystem.

                        </p>
                    </div>
                    <div className="text-lg">
                        <p>TextOre is an open-source intelligence (OSINT) solutions provider with deep expertise in Chinese and Russian geopolitics, influence and interference operations, leadership and organization tracking, and geospatial and network analysis.<br />

                            Our language-enabled subject-matter experts (SMEs) exploit social and edited media, state-of-the-art technologies, and advanced analytics to find and synthesize relevant intelligence for clients in law enforcement, defense, and the intelligence community. We also deliver OSINT-based business insights, competitive intelligence, due diligence research, and political risk analysis to Fortune 500 companies focused on protecting and advancing their brand, reputation, leadership, products, and services.

                            Serving as an additional strategic voice, we help clients anticipate problems, see around the corner, and gain a competitive advantage in the information ecosystem.

                        </p>
                    </div>
                </div>
            </div>

            <h1 className='text-4xl mb-4 mt-5 text-center  font-bold text-violet-800'>Interested in exploring more about Manufacturer Tribe?</h1>
            <p className='text-2xl text-center font-bold'>Contact Manufacturer Tribe and speak with an business expert to<br /> discuss your organization or business needs.</p>
            <div className='text-center mt-14 mb-10'>
                <Link to='/contact' className=" text-white bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700  font-bold rounded-lg text-sm px-5 py-4 hover:text-white hover:bg-violet-700 text-center">Talk to an Expert</Link>
            </div>
        </section>
    );
};

export default About;