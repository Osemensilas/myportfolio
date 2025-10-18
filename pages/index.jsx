import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion }from 'framer-motion';
import axios from "axios";
//import { Image } from "next/image";

const CursorSpotlight = () => {
  useEffect(() => {
    const spotlight = document.createElement("div");
    spotlight.style.position = "fixed";
    spotlight.style.top = 0;
    spotlight.style.left = 0;
    spotlight.style.width = "100vw";
    spotlight.style.height = "100vh";
    spotlight.style.pointerEvents = "none";
    spotlight.style.background = "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.1), transparent 100%)";
    spotlight.style.zIndex = 50;
    document.body.appendChild(spotlight);

    const move = (e) => {
      spotlight.style.setProperty("--x", `${e.clientX}px`);
      spotlight.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(spotlight);
    };
  }, []);

  return null;
};


export default function Home() {

  const [bookingError, setBookingError] = useState('');
      const [contactSuccess, setContactSuccess] = useState('');
      const [formData, setFormData] = useState({
          'fullname': '',
          'email': '',
          'message': '',
      });
      const [formVisible, setFormVisible] = useState("after:absolute w-screen after:w-[100%] h-screen after:h-[100%] after:content-[''] top-0 left-0 after:bg-black after:opacity-50 px-2 fixed top-0 left-0 z-20 hidden transition-all duration-300 ease-in-out");

      const seeForm = () => {
          setFormVisible("after:absolute w-screen after:w-[100%] h-screen after:h-[100%] after:content-[''] top-0 left-0 after:bg-black after:opacity-50 px-2 fixed top-0 left-0 z-20 transition-all duration-300 ease-in-out");
      };

      const cancelForm = () => {
        setFormVisible("after:absolute w-screen after:w-[100%] h-screen after:h-[100%] after:content-[''] top-0 left-0 after:bg-black after:opacity-50 px-2 fixed top-0 left-0 z-20 hidden transition-all duration-300 ease-in-out");
      };

      const handleChanged = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
      }

      const formSubmitted = async (e) => {
        e.preventDefault();

        let nameVal = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!nameVal.test(formData.fullname)){
          setBookingError('Please enter a valid name');
          return;
        }

        if (!emailVal.test(formData.email)){
          setBookingError('Please enter a valid email address');
          return;
        }

        if (!formData.message){
          setBookingError('Please enter a message');
          return;
        }

        try{
          let url = "https://www.osemen.com.ng/consult.php";

          const response = await axios.post(url, formData, {
              headers: {
                  "Content-Type" : "application/json",
              },withCredentials: true
          })
          
          console.log(response.data);
        }catch(err){
          console.log("Error submitting form: ", err);
        }
      }

  return (
    <>
      <Head>
        <title>Home Page - Osemen Silas</title>
      </Head>
      <section id="pc-screen" className="relative after:absolute after:content-[''] after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-offBlack after:opacity-5 w-screen h-screen">
        <div className="h-full w-full block sm:flex relative z-10">
          <div className="h-full w-full sm:w-1/2 relative sm:fixed top-0 left-0 flex items-center justify-center">
           <div className="h-max w-3/4">
            <motion.h1 
            className="text-3xl font-bold text-accent mb-10"
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 2}}
            >Osemen Silas</motion.h1>
            <motion.h2 
            className="text-4xl font-bold text-primary mb-10"
            initial={{y: -200}}
            animate={{y: 0}}
            transition={{delay:2, duration: 2}}
            >Web Developer</motion.h2>
            <nav className="h-max w-full">
              <ul className="h-max w-max mb-10">
                <li className="h-max w-max flex items-center group mb-4">
                  <span className="mr-2 h-[2px] w-[75px] bg-grey group-hover:bg-accent rounded transition-all duration-500 group-hover:w-[100px]"></span>
                  <Link href={"#about"} className="text-grey group-hover:text-accent text-base group-hover:text-xl">About</Link>
                </li>
                <li className="h-max w-max flex items-center group mb-4">
                  <span className="mr-2 h-[2px] w-[75px] bg-grey group-hover:bg-accent rounded transition-all duration-500 group-hover:w-[100px]"></span>
                  <Link href={"#experience"} className="text-grey group-hover:text-accent text-base group-hover:text-xl">Experience</Link>
                </li>
                <li className="h-max w-max flex items-center group">
                  <span className="mr-2 h-[2px] w-[75px] bg-grey group-hover:bg-accent rounded transition-all duration-500 group-hover:w-[100px]"></span>
                  <Link href={"#project"} className="text-grey group-hover:text-accent text-base group-hover:text-xl">Project</Link>
                </li>
              </ul>
            </nav>
            <motion.div 
            className="w-max h-max flex justify-center items-center mb-20"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
            >
              <button onClick={seeForm} className="py-3 px-10 rounded-full bg-primary border-[2px] border-transparent hover:border-primary hover:text-primary hover:bg-transparent text-offBlack transition-all duration-300 ease-in-out">Contact Me</button>
            </motion.div>
            <div className="flex items-center justify-center w-max h-full mb-20">
              <motion.a 
              href="https://www.instagram.com/silasosemen/" target="_blank" 
              className="mr-10"
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 2}}
              >
                  <i className="fa fa-instagram text-primary" style={{fontSize: "30px"}}></i>
              </motion.a>
              <motion.a href="https://web.facebook.com/osemen.silas" target="_blank" 
              className="mr-10"
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 1, duration: 2}}
              >
                  <i className="fa fa-facebook-square text-primary" style={{fontSize: "30px"}}></i>
              </motion.a>
              <motion.a href="https://x.com/OsemenSilas1" target="_blank" 
              className="mr-10"
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 2, duration: 2}}
              >
                  <i className="fa fa-twitter-square text-primary" style={{fontSize: "30px"}}></i>
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/osemensilas/" target="_blank" 
              className="mr-10"
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 3, duration: 2}}
              >
                  <i className="fa fa-linkedin-square text-primary" style={{fontSize: "30px"}}></i>
              </motion.a>
              <motion.a href="https://wa.me/8168318983" target="_blank" 
              className="mr-10"
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 4, duration: 2}}
              >
                  <i className="fa fa-whatsapp text-primary" style={{fontSize: "30px"}}></i>
              </motion.a>
            </div>
            <div className="h-max w-full">
              <a href="/new resume.docx" className="text-base text-primary">Download Resume</a>
            </div>
           </div>
          </div>
          <div className="h-max sm:h-full w-full flex overflow-hidden sm:overflow-y-scroll">
            <div className="h-full w-1/2 hidden sm:block"></div>
            <div className="h-full w-full sm:w-1/2 px-4">
              <div id="about" className="w-full h-max">
                <header className="h-max w-full py-10">
                  <h2 className="text-primary text-3xl font-bold">About Me</h2>
                </header>
                <div className="pr-0 sm:pr-10">
                  <p className="text-grey text-base text-justify mb-5">
                    I am a forward-thinking web developer with a passion for building fast, functional, and user-focused digital experiences. I work primarily with Next.js, Tailwind CSS, and PHP, blending modern front-end frameworks with powerful back-end solutions.
                  </p>
                  <p className="text-grey text-base text-justify mb-5">
                    I love turning ideas into seamless websites and web apps that not only look great but also perform exceptionally. From responsive landing pages to full-stack applications, I build solutions that are clean, scalable, and efficient.
                  </p>
                  <p className="text-grey text-base text-justify mb-5">
                    I’m currently expanding my skill set by diving into .NET for building powerful and scalable backend systems, and React Native for developing high-performance, cross-platform mobile applications. This allows me to deliver full-stack solutions that work seamlessly across web and mobile platforms, giving clients and users a consistent experience no matter the device.
                  </p>
                  <p className="text-grey text-base text-justify">
                    I'm actively seeking opportunities where I can contribute to a collaborative team, solve real problems, and continue growing as a developer while delivering value through thoughtful, efficient code.
                  </p>
                </div>
              </div>
              <div id="experience" className="w-full h-max">
                <header className="h-max w-full py-10">
                  <h2 className="text-primary text-3xl font-bold">Experience</h2>
                </header>
                <a href="https://iruhost.com" target="__blank" className="relative mb-10 w-[100%] sm:w-[95%] p-[10px] h-max flex flex-col sm:flex-row items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out">
                  <div className="absolute inset-0 oily-bg"></div>
                  <div className="w-full sm:w-[30%] h-max">
                    <p className="text-base text-grey">May 2025 - Present</p>
                  </div>
                  <div className="w-full sm:w-[70%] h-max">
                    <h2 className="font-bold text-base text-accent mb-5">Founder, Iruap Tech Studio LTD</h2>
                    <p className="text-grey text-base mb-5 text-justify">I am the Founder of Iruap, a full-service web hosting and development platform. It provides domain registration, automated hosting, SSL certificates, professional email solutions, and both custom and template-based website design — all managed through a secure and intuitive client dashboard.</p>
                    <ul className="w-full h-max flex flex-wrap">
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Next.js</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">React Js</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Tailwind CSS</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">JavaScript</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Framer Motion</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Git/Github</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">PHP</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Laravel</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Vercel</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">cPanel</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">CSS/CSS3</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">HTML/HTML5</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">REST API</li>
                    </ul>
                  </div>
                </a>
                <a href="#" target="__blank" className="relative mb-10 w-[100%] sm:w-[95%] p-[10px] h-max flex flex-col sm:flex-row items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out">
                  <div className="absolute inset-0 oily-bg"></div>
                  <div className="w-full sm:w-[30%] h-max">
                    <p className="text-base text-grey">2023 - Present</p>
                  </div>
                  <div className="w-full sm:w-[70%] h-max">
                    <h2 className="font-bold text-base text-accent mb-5">Freelance Fullstack Developer</h2>
                    <p className="text-grey text-base mb-5 text-justify">As a freelance fullstack developer, I work directly with individuals, startups, and small businesses to build custom web solutions that solve real-world problems. I handle projects end-to-end — from initial consultation and planning to development, deployment, and maintenance.</p>
                    <ul className="w-full h-max flex flex-wrap">
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Next.js</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">React Js</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Tailwind CSS</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">JavaScript</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Framer Motion</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Git/Github</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">PHP</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Laravel</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Vercel</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">cPanel</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">CSS/CSS3</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">HTML/HTML5</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">REST API</li>
                      <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">MySQL</li>
                    </ul>
                  </div>
                </a>
              </div>
              <div id="project" className="w-full h-max">
                <header className="h-max w-full py-10">
                  <h2 className="text-primary text-3xl font-bold">Projects</h2>
                </header>
                <div className="w-full h-max">
                  <h2 className="w-full h-max mb-4 text-xl text-accent font-bold">Selected Projects</h2>
                  <div className="h-max w-full">
                    <a href="https://www.palmhavenhotel.com/" target="__blank" className="relative mb-10 w-[100%] sm:w-[95%] p-[10px] h-max flex flex-col lg:flex-row items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out group">
                      <div className="absolute inset-0 oily-bg"></div>
                      <div className="w-full lg:w-[30%] h-max">
                        <img src="/palmhaven.png" className="border-2 border-grey rounded lg:h-[75px] w-full aspect-square lg:w-[100px]" alt="" />
                      </div>
                      <div className="w-full lg:w-[70%] h-max">
                        <h2 className="font-bold text-base text-accent mb-5 group-hover:text-primary">Palm Haven Hotel</h2>
                        <p className="text-grey text-base mb-5 text-justify">Palm Haven Hotel is a luxury hospitality brand that needed a modern, user-friendly online presence to showcase its accommodations, amenities, and make bookings seamless for guests. I designed and developed a responsive website that combines elegant visuals with functional booking features to reflect the hotel’s high standards of comfort and service.</p>
                        <ul className="w-full h-max flex flex-wrap">
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Next.js</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Framers Motion</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Tailwind CSS</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">PHP</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">MySql</li>
                        </ul>
                      </div>
                    </a>
                    <a href="https://theblisshomes.co.uk/" target="__blank" className="relative mb-10 w-[100%] sm:w-[95%] p-[10px] h-max flex flex-col lg:flex-row items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out group">
                      <div className="absolute inset-0 oily-bg"></div>
                      <div className="w-full lg:w-[30%] h-max">
                        <img src="/blisshomes.png" className="border-2 border-grey rounded lg:h-[75px] w-full aspect-square lg:w-[100px]" alt="" />
                      </div>
                      <div className="w-full lg:w-[70%] h-max">
                        <h2 className="font-bold text-base text-accent mb-5 group-hover:text-primary">The Bliss Homes</h2>
                        <p className="text-grey text-base mb-5 text-justify">Bliss Homes is a supportive living service based in Kent and London, dedicated to empowering young people in transition—particularly those with mental health challenges, learning disabilities, sensory impairments, or those transitioning out of care—to live independently and confidently. The website I built offers a compassionate, streamlined digital experience that communicates trust, values, and professional care.</p>
                        <ul className="w-full h-max flex flex-wrap">
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">React Js</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">CSS</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">PHP</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">MySql</li>
                        </ul>
                      </div>
                    </a>
                    <a href="https://smartwave.osemen.com.ng/" target="__blank" className="relative mb-10 w-[100%] sm:w-[95%] p-[10px] h-max flex flex-col lg:flex-row items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out group">
                      <div className="absolute inset-0 oily-bg"></div>
                      <div className="w-full lg:w-[30%] h-max">
                        <img src="/crocopay.png" className="border-2 border-grey rounded lg:h-[75px] w-full aspect-square lg:w-[100px]" alt="" />
                      </div>
                      <div className="w-full lg:w-[70%] h-max">
                        <h2 className="font-bold text-base text-accent mb-5 group-hover:text-primary">CROCOPAY</h2>
                        <p className="text-grey text-base mb-5 text-justify">CROCOPAY is an all-in-one digital platform for buying mobile data, airtime, electricity tokens, and cable TV subscriptions. Built to provide a fast, reliable, and user-friendly experience, it empowers users to make essential payments anytime, anywhere—without friction.</p>
                        <ul className="w-full h-max flex flex-wrap">
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">React Js</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">CSS</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">PHP</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">MySql</li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div id="blog" className="w-full h-max">
                <header className="h-max w-full py-10">
                  <h2 className="text-primary text-3xl font-bold">From my Blogs</h2>
                </header>
                <div className="w-full h-max">
                  <a href="#" target="__blank" className="relative mb-10 w-[100%] sm:w-[95%] p-[10px] h-max flex flex-col lg:flex-row items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out group">
                    <div className="absolute inset-0 oily-bg"></div>
                    <div className="w-full lg:w-[30%] h-max">
                      <img src="/sreen-recorder.png" className="border-2 border-grey rounded lg:h-[75px] w-full aspect-square lg:w-[100px]" alt="" />
                    </div>
                    <div className="w-full lg:w-[70%] h-max">
                      <h2 className="font-bold text-base text-accent mb-5 group-hover:text-primary">Iruap Screen Recorder (Screen Recorder Web App)</h2>
                      <p className="text-grey text-base">A browser-based screen recording tool that enables users to capture their screen ...</p>
                    </div>
                  </a>
                  <a href="#" target="__blank" className="relative mb-10 w-[100%] sm:w-[95%] p-[10px] h-max flex flex-col lg:flex-row items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out group">
                    <div className="absolute inset-0 oily-bg"></div>
                    <div className="w-full lg:w-[30%] h-max">
                      <img src="/sreen-recorder.png" className="border-2 border-grey rounded lg:h-[75px] w-full aspect-square lg:w-[100px]" alt="" />
                    </div>
                    <div className="w-full lg:w-[70%] h-max">
                      <h2 className="font-bold text-base text-accent mb-5 group-hover:text-primary">Iruap Screen Recorder (Screen Recorder Web App)</h2>
                      <p className="text-grey text-base">A browser-based screen recording tool that enables users to capture their screen ...</p>
                    </div>
                  </a>
                  <a href="#" target="__blank" className="relative mb-10 w-[100%] sm:w-[95%] p-[10px] h-max flex flex-col lg:flex-row items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out group">
                    <div className="absolute inset-0 oily-bg"></div>
                    <div className="w-full lg:w-[30%] h-max">
                      <img src="/sreen-recorder.png" className="border-2 border-grey rounded lg:h-[75px] w-full aspect-square lg:w-[100px]" alt="" />
                    </div>
                    <div className="w-full lg:w-[70%] h-max">
                      <h2 className="font-bold text-base text-accent mb-5 group-hover:text-primary">Iruap Screen Recorder (Screen Recorder Web App)</h2>
                      <p className="text-grey text-base">A browser-based screen recording tool that enables users to capture their screen ...</p>
                    </div>
                  </a>
                </div>
              </div>
              <footer id="footer" className="h-max w-full py-20">
                <div className="w-full sm:w-3/4 h-full flex items-center">
                  <p className="text-accent text-base">© 2025 Osemen Oseobonoite. Open to full-time and freelance opportunities — <button onClick={seeForm} className="text-primary underline">Get in touch</button></p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
      <section className={formVisible}>
        <div className="relative w-full flex items-center justify-end z-40" style={{ height: '60px' }}>
            <div onClick={cancelForm} className="relative cursor-pointer z-50" style={{ width: '40px', height: '40px' }}>
                <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-accent rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
                <span className="absolute top-1/2 left-1/2 block w-10 h-1 z-30 bg-accent -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
            </div>
        </div>
        <div className="relative w-full flex items-center justify-center z-50" style={{ height: 'calc(100vh - 60px)' }}>
          <div className="relative w-full sm:w-max h-max z-50">
            <form onSubmit={formSubmitted} action="/" className="relative h-max bg-accent rounded px-1 sm:px-3 z-50 w-[95%] sm:w-[500px]">
                <header className="w-full h-max py-5 mb-2 sm:mb-5 border-b border-grey">
                    <h2 className="text-2xl sm:text-4xl text-offBlack text-center">Get Intouch</h2>
                </header>
                {bookingError && (<div className="bg-red-500 rounded text-accent text-base w-full h-10 flex justify-center items-center mb-1">
                    {bookingError}
                </div>
                )}
                {contactSuccess && (<div className="bg-green-500 rounded text-accent text-base w-full h-10 flex justify-center items-center mb-1">
                    {contactSuccess}
                </div>
                )}
                <div className="w-full h-max grid grid-cols-1 mb-3">
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col" style={{width: '100%'}}>
                            <label htmlFor="fullname" className="text-grey mb-1 hidden sm:block">Name:</label>
                            <input type="text" name="fullname" value={formData.fullname} onChange={handleChanged} placeholder="Name" id="fullname" className="w-full border border-grey rounded px-3" style={{height: '40px'}}/> 
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col" style={{width: '100%'}}>
                            <label htmlFor="email" className="text-grey mb-1 hidden sm:block">Email:</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChanged} id="email" placeholder="Email" className="w-full border border-grey rounded px-3" style={{height: '40px'}}/>
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col" style={{width: '100%'}}>
                            <label htmlFor="message" className="text-grey mb-1 hidden sm:block">Suite/Cottage:</label>
                            <textarea name="message" className="p-3 border rounded border-grey min-h-[150px] max-h-[150px] min-w-[100%] max-w-[100%]" value={formData.message} onChange={handleChanged} id="message"></textarea>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max mt-2 py-3 border-t border-grey flex items-center justify-center">
                    <button type="submit" className="w-1/2 h-max bg-primary text-offBlack rounded py-2 text-center">Send Message</button>
                </div>
            </form>
          </div>
        </div>
      </section>
      <CursorSpotlight />
    </>
  );
}
