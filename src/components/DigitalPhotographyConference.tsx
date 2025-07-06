import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, Star, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const DigitalPhotographyConference = () => {
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
    const targetDate = new Date('2024-07-27T00:00:00').getTime();
    
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
      name: "Lina Blauberg",
      role: "Portrait Artist",
      image: "/api/placeholder/300/300",
      social: { twitter: "#", instagram: "#" }
    },
    {
      name: "Bernadetta Ghush",
      role: "Landscape Expert",
      image: "/api/placeholder/300/300",
      social: { twitter: "#", instagram: "#" }
    },
    {
      name: "Lucas Palermo",
      role: "Street Photography",
      image: "/api/placeholder/300/300",
      social: { twitter: "#", instagram: "#" }
    },
    {
      name: "Emilie Lippelt",
      role: "Fashion Photographer",
      image: "/api/placeholder/300/300",
      social: { twitter: "#", instagram: "#" }
    }
  ];

  const schedule = [
    { time: "09:00 - 10:00", event: "Conference Opening" },
    { time: "10:30 - 12:30", event: "Photography Foundations" },
    { time: "13:00", event: "Lunch Time" },
    { time: "14:00 - 16:30", event: "Retouching" },
    { time: "17:00", event: "Coffee Break" },
    { time: "17:30 - 18:30", event: "Raw Processing" }
  ];

  const topics = [
    "Portraits", "Lighting", "Photography Foundations", "Masking + Compositing",
    "Retouching", "HDR", "Raw Processing", "Colour Correction"
  ];

  const faqs = [
    {
      question: "What is web marketing?",
      answer: "Web marketing refers to a broad category of advertising that takes many different forms, but generally involves any marketing activity conducted online. Marketers have shifted their efforts online because it tends to be significantly less expensive."
    },
    {
      question: "What is digital advertising?",
      answer: "Digital advertising, also called internet advertising or online marketing, is when businesses leverage internet technologies to deliver promotional advertisements to consumers."
    },
    {
      question: "What is internet marketing?",
      answer: "Internet marketing, or online marketing, refers to advertising and marketing efforts that use the Web and email to drive direct sales via electronic commerce, in addition to sales leads from Web sites or emails."
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
      <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">events</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#speakers" className="hover:text-blue-400 transition-colors">Speakers</a>
            <a href="#topics" className="hover:text-blue-400 transition-colors">Topics</a>
            <a href="#schedule" className="hover:text-blue-400 transition-colors">Schedule</a>
            <a href="#tickets" className="hover:text-blue-400 transition-colors">Tickets</a>
            <a href="#location" className="hover:text-blue-400 transition-colors">Location</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
            <a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/api/placeholder/1920/1080')`,
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        <div className="relative z-10 text-center px-6">
          <p className="text-lg mb-4 text-gray-300">Conference of</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Digital Photography
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            27 TO 31 JULY 2017 WITH OVER 80 SESSIONS • CINCINNATI, OHIO
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105">
            Register Now
          </button>
        </div>
      </section>

      {/* Conference Overview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Conference Of Digital Photography</h2>
          <p className="text-gray-300 leading-relaxed">
            Nullam ex hendrerit cras non tellus potenti primis vehicula sagittis mauris vehicula, nec sagittis lacus vestibulum enim dignissim.
            Aenean in cras taciti himenaeos magna mauris vel consequat pretium tellus porttitor magna sed accumsan ex accumsan.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">DATE</h3>
              <p className="text-gray-400">27 July to 31 July 2017</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">LOCATION</h3>
              <p className="text-gray-400">Cincinnati, OH</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">SPEAKERS</h3>
              <p className="text-gray-400">Top International Speakers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Speakers</h2>
            <p className="text-gray-400">
              We are bringing you the perfect combination of content and experience to ignite your
              heart, expand your mind and spark your soul.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                <p className="text-gray-400 mb-4">{speaker.role}</p>
                <div className="flex justify-center space-x-3">
                  <a href={speaker.social.twitter} className="text-blue-400 hover:text-blue-300">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">T</span>
                    </div>
                  </a>
                  <a href={speaker.social.instagram} className="text-pink-400 hover:text-pink-300">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
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
            Whether you're new to the speaking field or a seasoned pro you'll connect
            with old colleagues and make valuable new friends.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {topics.slice(0, 4).map((topic, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                  {topic}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {topics.slice(4).map((topic, index) => (
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
              We are very excited about the program being planned for Events 2017
              this summer in Cincinnati, Ohio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Conference Days</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-4 rounded-lg">Day 1 - 27 July 2017</div>
                <div className="bg-gray-800 p-4 rounded-lg">Day 2 - 28 July 2017</div>
                <div className="bg-gray-800 p-4 rounded-lg">Day 3 - 29 July 2017</div>
                <div className="bg-gray-800 p-4 rounded-lg">Day 4 - 30 July 2017</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Day 1 - 27 July 2017</h3>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                    <span className="text-blue-400">{item.time}</span>
                    <span>{item.event}</span>
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
          <h2 className="text-4xl font-bold mb-8">Time Left Until The Conference Start</h2>
          <p className="text-gray-300 mb-12">
            27 TO 31 JULY 2017 WITH OVER 80 SESSIONS • CINCINNATI, OHIO
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

      {/* Tickets Section */}
      <section id="tickets" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Conference Tickets</h2>
            <p className="text-gray-400">
              If you want more leverage, then reserve your ticket for the ride of the year.
              Come join the world's influencers and get answers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Your first conference</h3>
              <p className="text-gray-400 mb-6">Tickets for today</p>
              <div className="text-5xl font-bold mb-6">$120</div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300">• Main Event</li>
                <li className="text-gray-300">• Access to all areas</li>
                <li className="text-gray-300">• All day lunch</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors">
                Buy Ticket Now
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Premium Package</h3>
              <p className="text-gray-200 mb-6">All Event Access</p>
              <div className="text-5xl font-bold mb-6">$590</div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-100">• Main Event</li>
                <li className="text-gray-100">• Access to all areas</li>
                <li className="text-gray-100">• All day lunch</li>
                <li className="text-gray-100">• VIP seating</li>
                <li className="text-gray-100">• Meet & greet</li>
              </ul>
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors">
                Buy Ticket Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Register for the Conference</h2>
            <p className="text-gray-400">July 2017</p>
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
                placeholder="Phone number"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <select
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                value={formData.ticket}
                onChange={(e) => setFormData({...formData, ticket: e.target.value})}
              >
                <option value="">Choose Ticket</option>
                <option value="basic">Basic - $120</option>
                <option value="premium">Premium - $590</option>
              </select>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get your ticket now
            </button>
            <p className="text-sm text-gray-400 text-center">
              * We don't share your information with anyone.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Some frequently asked questions for you.</p>
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
            <h2 className="text-4xl font-bold mb-4">Contact Info</h2>
            <p className="text-gray-400">
              Dear guests, you are most welcomed to join us at Events
              Conference. Have a pleasant experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">3465 Galwrens Rd</div>
                    <div className="text-gray-400">Cincinnati, OH 45209 USA</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">(513) 253-3499</div>
                    <div className="text-gray-400">Fax: (513) 265-6220</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">contact@events.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Accommodation</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Hotel Monaco</h4>
                  <p className="text-gray-400 text-sm">
                    501 Geary Street<br />
                    San Francisco, California<br />
                    (415) 292 - 0100
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hotel Nikko</h4>
                  <p className="text-gray-400 text-sm">
                    222 Mason Street<br />
                    San Francisco, California<br />
                    (415) 394 - 1111
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Subscribe For The Latest Updates</h2>
          <p className="text-gray-300 mb-8">
            Please enter your email address to receive our newsletter.
          </p>
          
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Please enter your email address"
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
              <h3 className="text-2xl font-bold mb-4">About</h3>
              <p className="text-gray-400">
                Ad maximus leo. Curabitur duis lectus convallis non placerat
                vitae sit. In convallis placerat quam ut in nec onres
                sem dis mi malesuada ac vitae.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Instagram</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="aspect-square bg-gray-800 rounded"></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2017 All rights reserved - a product of nuussolutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalPhotographyConference;