import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Users, Clock, Star, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const MarketingConference = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ticket: ''
  });

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date('2025-10-29T10:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const speakers = [
    {
      name: "Teo Yordanov",
      role: "Owner & Organiser",
      image: "/images/speakers/teo-yordanov.png",
      bio: "Award-winning e-commerce strategist with 10+ years experience",
      social: { twitter: "#", instagram: "#" }
    },
    {
      name: "James Deeney", 
      role: "Content Strategist @ Lunio",
      image: "/images/speakers/james-deeney.jpg",
      bio: "Google Ads certified expert managing £10M+ ad spend annually",
      social: { twitter: "#", instagram: "#" }
    },
    {
      name: "Joss Froggat",
      role: "Account Director @ 8 Million Stories", 
      image: "/images/speakers/joss-froggat.jpeg", 
      bio: "CRO specialist helping brands increase conversions by 300%",
      social: { twitter: "#", instagram: "#" }
    },
    {
      name: "Georgi Zayakov",
      role: "Paid Media Expert, Switzerland",
      image: "/images/speakers/georgi-zayakov.jpg",
      bio: "Former head of digital at major retail chains",
      social: { twitter: "#", instagram: "#" }
    }
  ];

  const schedule = [
    { time: "09:00 - 10:00", event: "Registration & Welcome Coffee" },
    { time: "10:00 - 11:30", event: "E-commerce Scaling Strategies" },
    { time: "11:45 - 13:00", event: "SEM Success Stories" },
    { time: "13:00 - 14:00", event: "Networking Lunch" },
    { time: "14:00 - 15:30", event: "Conversion Optimisation Masterclass" },
    { time: "15:45 - 17:00", event: "Panel: Future of Digital Marketing" }
  ];

  const topics = [
    "Search Max", "Demand Generation", "Local Strategy", "Shopping Ads Mastery",
    "Performance Max (PMAX)", "Bidding Strategies", "Audience Targeting & Data Layering", "Reporting & Attribution",
    "Ad Copy & Creative Testing", "Feed Optimisation", "Remarketing & Retention", "Landing Page Experience"
  ];

  const faqs = [
    {
      question: "What will I learn at this conference?",
      answer: "You'll gain actionable insights on scaling e-commerce stores, mastering SEM campaigns, improving conversion rates, and implementing data-driven marketing strategies that deliver real results."
    },
    {
      question: "Who should attend this conference?",
      answer: "Perfect for e-commerce business owners, digital marketers, SEM specialists, marketing managers, and anyone looking to scale their online business or improve their marketing ROI."
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Absolutely! We've built in dedicated networking sessions, including a lunch break and coffee breaks, plus a networking drinks reception after the main sessions."
    }
  ];

const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
  alert('Registration submitted successfully!');
};

const toggleFaq = (index: number) => {
  setOpenFaq(openFaq === index ? null : index);
};

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-sm z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">MarketingEvents</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
            <a href="#speakers" className="text-white hover:text-blue-400 transition-colors">Speakers</a>
            <a href="#topics" className="text-white hover:text-blue-400 transition-colors">Topics</a>
            <a href="#schedule" className="text-white hover:text-blue-400 transition-colors">Schedule</a>
            <a href="#tickets" className="text-white hover:text-blue-400 transition-colors">Tickets</a>
            <a href="#location" className="text-white hover:text-blue-400 transition-colors">Location</a>
            <a href="#faq" className="text-white hover:text-blue-400 transition-colors">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero/hero-background.png')`,
            filter: 'brightness(0.6)'
          }}
        ></div>
        
        <div className="relative z-10 text-center px-6">
          <p className="text-lg mb-4 text-gray-300">Digital Marketing Event</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Stores That Scale.</span>
            <span className="block text-blue-400">Strategies That Convert!</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-400">
            SEM Stories & More
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            29 October 2025 • Over 10+ Speakers • The Place Hotel, Edinburgh, Scotland
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105">
            Register Now
          </button>
        </div>
      </section>

      {/* Companies Attending Section */}
      <section className="py-16 px-6 bg-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Companies Attending</h2>
            <p className="text-gray-400">Join professionals from these leading companies</p>
          </div>
          
          {/* Auto-sliding Logo Carousel */}
          <div className="relative">
            <div className="flex animate-scroll space-x-12 items-center">
              {/* First set of logos */}
              <div className="flex space-x-12 items-center min-w-max">
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/8millionstorries.png" alt="8 Million Stories" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/bookedupmedia.png" alt="Booked Up Media" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/dentsu.png" alt="Dentsu" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/lunio.png" alt="Lunio" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/marketiseme.png" alt="Marketise Me" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/softbank.png" alt="SoftBank" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12 items-center min-w-max">
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/8millionstorries.png" alt="8 Million Stories" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/bookedupmedia.png" alt="Booked Up Media" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/dentsu.png" alt="Dentsu" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/lunio.png" alt="Lunio" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/marketiseme.png" alt="Marketise Me" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
                <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition-transform">
                  <Image src="/images/companies/softbank.png" alt="SoftBank" width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CSS Animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Conference Overview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Conference for SEM Professionals</h2>
          <p className="text-gray-300 leading-relaxed">
            Join us at <em className="text-purple-400">SEM Stories & More</em> — a one-day digital marketing event dedicated to <strong className="text-blue-400">performance marketing</strong> and <strong className="text-blue-400">search engine experts</strong>. Hosted in the heart of Edinburgh, the event features 10+ leading speakers sharing real stories, winning strategies, and actionable insights to help you <strong className="text-green-400">scale smarter, convert better, and connect with like-minded professionals</strong>. Whether you're agency-side, freelance, or in-house, this is your place to grow.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">DATE</h3>
              <p className="text-gray-400">29 October 2025</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">LOCATION</h3>
              <p className="text-gray-400">The Place Hotel, Edinburgh</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">SPEAKERS</h3>
              <p className="text-gray-400">10+ Expert Speakers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Expert Speakers</h2>
            <p className="text-gray-400">
              Learn from the best in the business. Our speakers have collectively generated over £100M in e-commerce revenue 
              and managed millions in advertising spend.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={speaker.image}
                    alt={`${speaker.name} - ${speaker.role}`}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  {/* Bio overlay on hover */}
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">{speaker.bio}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                <p className="text-gray-400 mb-4">{speaker.role}</p>
                <div className="flex justify-center space-x-3">
                  <a href={speaker.social.twitter} className="text-blue-400 hover:text-blue-300 transition-colors">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400">
                      <span className="text-white text-sm">T</span>
                    </div>
                  </a>
                  <a href={speaker.social.instagram} className="text-pink-400 hover:text-pink-300 transition-colors">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-400">
                      <span className="text-white text-sm">I</span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Topics Covered</h2>
          <p className="text-gray-400 mb-12">
            Whether you're a Google Ads veteran or just levelling up your performance marketing game, <em className="text-purple-400">SEM Stories & More</em> will arm you with strategies you can use <strong className="text-green-400">the very next day</strong>. Connect with fellow experts and gain clarity on what's working across industries, platforms, and accounts.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {topics.slice(0, 6).map((topic, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                  {topic}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {topics.slice(6).map((topic, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Conference Schedule</h2>
            <p className="text-gray-400">
              A full day packed with actionable insights, real case studies, and networking opportunities 
              with fellow marketers and business owners.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">
                Tuesday, 29 October 2025
              </h3>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
                    <span className="text-blue-400 font-semibold">{item.time}</span>
                    <span className="text-right">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">The Countdown Is On!</h2>
          <p className="text-gray-300 mb-12">
            29 October 2025 • Over 10+ Speakers • The Place Hotel, Edinburgh, Scotland
          </p>
          
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400">{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="text-gray-400 mt-2">days</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-gray-400 mt-2">hours</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-gray-400 mt-2">minutes</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-gray-400 mt-2">seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What People Say About Us</h2>
            <p className="text-gray-400">
              Hear from marketing professionals who've attended our previous events
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="group relative bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-6 left-6 text-6xl text-blue-400 opacity-20 font-serif">"</div>
              <div className="relative z-10 pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  The strategies I learned at SEM Stories completely transformed our Google Ads performance. 
                  Our ROAS increased by 240% within just 3 months of implementing what I learned.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">SC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Sarah Chen</h4>
                    <p className="text-gray-400 text-sm">Digital Marketing Manager, TechFlow</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 text-6xl text-blue-400 opacity-20 font-serif rotate-180">"</div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-6 left-6 text-6xl text-purple-400 opacity-20 font-serif">"</div>
              <div className="relative z-10 pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Incredible networking opportunities and actionable insights. I connected with 3 new business 
                  partners and gained strategies that immediately boosted our client campaigns.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">MR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Mike Rodriguez</h4>
                    <p className="text-gray-400 text-sm">Founder, Conversion Labs</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 text-6xl text-purple-400 opacity-20 font-serif rotate-180">"</div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-6 left-6 text-6xl text-green-400 opacity-20 font-serif">"</div>
              <div className="relative z-10 pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Best marketing event I've attended in years. The speakers shared real data and case studies, 
                  not just theory. Already implementing their feed optimisation techniques.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">AL</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Amanda Liu</h4>
                    <p className="text-gray-400 text-sm">SEM Specialist, Growth Media</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 text-6xl text-green-400 opacity-20 font-serif rotate-180">"</div>
            </div>

            {/* Testimonial 4 */}
            <div className="group relative bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-6 left-6 text-6xl text-orange-400 opacity-20 font-serif">"</div>
              <div className="relative z-10 pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  The local strategy session was game-changing for our multi-location business. 
                  We've seen a 180% increase in local conversions using their techniques.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">DK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">David Kumar</h4>
                    <p className="text-gray-400 text-sm">Marketing Director, RetailPlus</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 text-6xl text-orange-400 opacity-20 font-serif rotate-180">"</div>
            </div>

            {/* Testimonial 5 */}
            <div className="group relative bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-6 left-6 text-6xl text-pink-400 opacity-20 font-serif">"</div>
              <div className="relative z-10 pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Exceptional value for money. The 1-1 sessions with industry pros were worth the ticket price alone. 
                  Left with a clear roadmap for scaling our campaigns.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">JW</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Jessica Wong</h4>
                    <p className="text-gray-400 text-sm">Performance Marketing Lead, Shopify Plus</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 text-6xl text-pink-400 opacity-20 font-serif rotate-180">"</div>
            </div>

            {/* Testimonial 6 */}
            <div className="group relative bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-6 left-6 text-6xl text-cyan-400 opacity-20 font-serif">"</div>
              <div className="relative z-10 pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Perfect blend of advanced tactics and practical implementation. The Performance Max insights 
                  helped us unlock an additional £50K in monthly revenue.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">RT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Robert Turner</h4>
                    <p className="text-gray-400 text-sm">Head of Paid Media, eCommerce Elite</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 text-6xl text-cyan-400 opacity-20 font-serif rotate-180">"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="tickets" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Conference Tickets</h2>
            <p className="text-gray-400">
              Secure your spot at Scotland's premier marketing conference. Limited seats available.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Standard Ticket</h3>
              <p className="text-gray-400 mb-6">Full conference access</p>
              <div className="text-5xl font-bold mb-6">£29.99</div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300">• Drinks (Alcoholic and Non-alcoholic)</li>
                <li className="text-gray-300">• Food</li>
                <li className="text-gray-300">• Amazing speakers</li>
                <li className="text-gray-300">• Merch</li>
                <li className="text-gray-300">• 1-1 with Digital Marketing Pros</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors">
                Buy Ticket Now
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">VIP Experience</h3>
              <p className="text-gray-200 mb-6">Premium access & benefits</p>
              <div className="text-5xl font-bold mb-6">£59.99</div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-100">• Everything in Standard</li>
                <li className="text-gray-100">• VIP seating</li>
                <li className="text-gray-100">• Extended 1-1 sessions</li>
                <li className="text-gray-100">• Exclusive networking drinks</li>
                <li className="text-gray-100">• Premium merch package</li>
              </ul>
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors">
                Buy VIP Ticket
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-400">
              We're proud to collaborate with the tools, teams, and brands that empower creatives every day.
            </p>
          </div>

          {/* Headline Sponsor */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-blue-400">Headline Sponsor</h3>
            <div className="flex justify-center">
              <div className="group relative w-80 h-48 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white [backface-visibility:hidden] flex items-center justify-center p-8 shadow-2xl border-4 border-blue-400">
                    <Image
                      src="/images/sponsors/bookedupmedia.png"
                      alt="Booked Up Media"
                      width={200}
                      height={100}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-6 shadow-2xl">
                    <div className="text-center text-white">
                      <h4 className="text-xl font-bold mb-3">Booked Up Media</h4>
                      <p className="text-sm leading-relaxed">
                        Premier digital marketing agency specialising in performance marketing, 
                        SEM strategies, and data-driven campaigns that deliver exceptional ROI for clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-yellow-400">Gold Sponsors</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Lunio */}
              <div className="group relative w-full h-40 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white [backface-visibility:hidden] flex items-center justify-center p-6 shadow-lg border-2 border-yellow-400">
                    <Image
                      src="/images/sponsors/lunio.png"
                      alt="Lunio"
                      width={150}
                      height={75}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-4 shadow-lg">
                    <div className="text-center text-white">
                      <h4 className="text-lg font-bold mb-2">Lunio</h4>
                      <p className="text-sm leading-relaxed">
                        Advanced click fraud protection platform helping businesses 
                        optimise their ad spend and improve campaign performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dentsu */}
              <div className="group relative w-full h-40 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white [backface-visibility:hidden] flex items-center justify-center p-6 shadow-lg border-2 border-yellow-400">
                    <Image
                      src="/images/sponsors/dentsu.png"
                      alt="Dentsu"
                      width={150}
                      height={75}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-4 shadow-lg">
                    <div className="text-center text-white">
                      <h4 className="text-lg font-bold mb-2">Dentsu</h4>
                      <p className="text-sm leading-relaxed">
                        Global network of agencies delivering integrated solutions 
                        across media, creative, and customer experience platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">Silver Sponsors</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Placeholder Silver Sponsor 1 */}
              <div className="group relative w-full h-36 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white [backface-visibility:hidden] flex items-center justify-center p-4 shadow-md border border-gray-300">
                    <div className="text-gray-400 text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl font-bold">S1</span>
                      </div>
                      <p className="text-sm">Silver Sponsor</p>
                    </div>
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-4 shadow-md">
                    <div className="text-center text-white">
                      <h4 className="text-lg font-bold mb-2">Silver Partner</h4>
                      <p className="text-xs leading-relaxed">
                        Innovative solutions provider supporting 
                        digital marketing excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Placeholder Silver Sponsor 2 */}
              <div className="group relative w-full h-36 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white [backface-visibility:hidden] flex items-center justify-center p-4 shadow-md border border-gray-300">
                    <div className="text-gray-400 text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl font-bold">S2</span>
                      </div>
                      <p className="text-sm">Silver Sponsor</p>
                    </div>
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-4 shadow-md">
                    <div className="text-center text-white">
                      <h4 className="text-lg font-bold mb-2">Silver Partner</h4>
                      <p className="text-xs leading-relaxed">
                        Technology leader driving performance 
                        marketing innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Placeholder Silver Sponsor 3 */}
              <div className="group relative w-full h-36 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white [backface-visibility:hidden] flex items-center justify-center p-4 shadow-md border border-gray-300">
                    <div className="text-gray-400 text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl font-bold">S3</span>
                      </div>
                      <p className="text-sm">Silver Sponsor</p>
                    </div>
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-green-500 to-teal-600 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-4 shadow-md">
                    <div className="text-center text-white">
                      <h4 className="text-lg font-bold mb-2">Silver Partner</h4>
                      <p className="text-xs leading-relaxed">
                        Strategic partner empowering marketing 
                        teams with cutting-edge tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bronze Sponsors */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-orange-400">Bronze Sponsors</h3>
            <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {/* Placeholder Bronze Sponsors */}
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="group relative w-full h-32 [perspective:1000px]">
                  <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face */}
                    <div className="absolute inset-0 h-full w-full rounded-lg bg-white [backface-visibility:hidden] flex items-center justify-center p-3 shadow-sm border border-orange-200">
                      <div className="text-gray-400 text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-1 flex items-center justify-center">
                          <span className="text-lg font-bold text-orange-500">B{num}</span>
                        </div>
                        <p className="text-xs">Bronze</p>
                      </div>
                    </div>
                    {/* Back Face */}
                    <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-br from-orange-500 to-red-600 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-3 shadow-sm">
                      <div className="text-center text-white">
                        <h4 className="text-sm font-bold mb-1">Bronze Partner</h4>
                        <p className="text-xs leading-tight">
                          Supporting SEM innovation and community growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Interested in becoming a sponsor?</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Register for SEM Stories & More</h2>
            <p className="text-gray-400">October 2025</p>
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <select
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                value={formData.ticket}
                onChange={(e) => setFormData({...formData, ticket: e.target.value})}
              >
                <option value="">Choose Ticket Type</option>
                <option value="standard">Standard - £29.99</option>
                <option value="vip">VIP Experience - £59.99</option>
              </select>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Register Now
            </button>
            <p className="text-sm text-gray-400 text-center">
              * We respect your privacy and won't share your information.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about the conference.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {openFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="location" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Venue & Contact</h2>
            <p className="text-gray-400">
              Join us at The Place Hotel in the heart of Edinburgh for an unforgettable marketing experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">The Place Hotel</div>
                    <div className="text-gray-400">34 York Place, Edinburgh EH1 3HU</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">+44 131 226 6001</div>
                    <div className="text-gray-400">Conference Hotline</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">hello@marketingconference.co.uk</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Getting There</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">By Train</h4>
                  <p className="text-gray-400 text-sm">
                    Edinburgh Waverley Station is just 10 minutes walk from the venue.
                    Direct trains from London, Glasgow, and other major cities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">By Air</h4>
                  <p className="text-gray-400 text-sm">
                    Edinburgh Airport is 30 minutes from the city centre.
                    Regular buses and taxis available.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Parking</h4>
                  <p className="text-gray-400 text-sm">
                    Limited parking available at the venue.
                    Public car parks nearby: St Andrew Square, Greenside Place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memories From Previous Events Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4">Memories From Previous Events</h2>
            <p className="text-gray-400">
              For more photos and videos visit our social hubs.
            </p>
          </div>
          
          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-96">
            {/* Large featured image */}
            <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-lg bg-gray-800">
              <Image
                src="/images/events/event-main.jpg"
                alt="Main event moment"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold">Main Event</p>
              </div>
            </div>

            {/* Tall image */}
            <div className="col-span-1 row-span-2 group relative overflow-hidden rounded-lg bg-gray-800">
              <Image
                src="/images/events/speaker-action.jpg"
                alt="Speaker presenting"
                width={200}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-semibold">Speaker in Action</p>
              </div>
            </div>

            {/* Medium image */}
            <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-lg bg-gray-800">
              <Image
                src="/images/events/one-on-one.jpeg"
                alt="One-on-one sessions"
                width={200}
                height={200}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-semibold">1-on-1 Sessions</p>
              </div>
            </div>

            {/* Wide image */}
            <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-lg bg-gray-800">
              <Image
                src="/images/events/audience-wide.jpeg"
                alt="Engaged audience"
                width={400}
                height={200}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold">Engaged Audience</p>
              </div>
            </div>

            {/* Small image */}
            <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-lg bg-gray-800">
              <Image
                src="/images/events/coffee-break.jpeg"
                alt="Coffee networking"
                width={200}
                height={200}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-semibold">Coffee Networking</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Follow us for more updates and behind-the-scenes content</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="group flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                  <span className="text-white font-semibold">T</span>
                </div>
                <span>@SEMStories</span>
              </a>
              <a href="#" className="group flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center group-hover:bg-pink-400 transition-colors">
                  <span className="text-white font-semibold">I</span>
                </div>
                <span>@semstoriesmore</span>
              </a>
              <a href="#" className="group flex items-center space-x-2 text-gray-400 hover:text-blue-600 transition-colors">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <span className="text-white font-semibold">L</span>
                </div>
                <span>SEM Stories & More</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Get the latest updates about speakers, schedule changes, and exclusive marketing tips.
          </p>
          
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-4 bg-white text-black rounded-l-lg focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">About the Conference</h3>
              <p className="text-gray-400">
                Scotland's premier marketing conference bringing together the brightest minds in 
                e-commerce, SEM, and digital marketing. Join us for actionable insights, 
                networking, and strategies that will transform your business.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">T</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">F</span>
                </div>
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">L</span>
                </div>
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">I</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Marketing Conference Edinburgh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingConference;