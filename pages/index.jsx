import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion }from 'framer-motion';
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

      const formSubmitted = (e) => {
        e.preventDefault();

        let nameVal = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


      }

  return (
    <>
      <Head>
        <title>Home Page - Osemen Silas</title>
      </Head>
      <section id="pc-screen" className="hidden sm:block relative after:absolute after:content-[''] after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-offBlack after:opacity-5 w-screen h-screen">
        <div className="h-full w-full flex relative z-10">
          <div className="h-full w-1/2 fixed top-0 left-0 flex items-center justify-center">
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
                  <span className="mr-2 h-[2px] w-[75px] bg-accent rounded transition-all duration-300 group-hover:w-[100px]"></span>
                  <Link href={"#about"} className="text-accent text-base group-hover:text-xl">About</Link>
                </li>
                <li className="h-max w-max flex items-center group mb-4">
                  <span className="mr-2 h-[2px] w-[75px] bg-accent rounded transition-all duration-300 group-hover:w-[100px]"></span>
                  <Link href={"#experience"} className="text-accent text-base group-hover:text-xl">Experience</Link>
                </li>
                <li className="h-max w-max flex items-center group">
                  <span className="mr-2 h-[2px] w-[75px] bg-accent rounded transition-all duration-300 group-hover:w-[100px]"></span>
                  <Link href={"#project"} className="text-accent text-base group-hover:text-xl">Project</Link>
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
              <a href="#" className="text-base text-primary">Download Resume</a>
            </div>
           </div>
          </div>
          <div className="h-full w-full flex overflow-y-scroll">
            <div className="h-full w-1/2"></div>
            <div className="h-full w-1/2">
              <div id="about" className="w-full h-max">
                <header className="h-max w-full py-10">
                  <h2 className="text-primary text-3xl font-bold">About Me</h2>
                </header>
                <div className="pr-10">
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
                <a href="#" target="__blank" className="relative mb-10 w-[95%] p-[10px] h-max flex items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out">
                  <div className="absolute inset-0 oily-bg"></div>
                  <div className="w-[30%] h-max">
                    <p className="text-base text-grey">May 2025 - Present</p>
                  </div>
                  <div className="w-[70%] h-max">
                    <h2 className="font-bold text-base text-accent mb-5">Senior Fullstack Engineer, Iruap Tech Studio LTD</h2>
                    <p className="text-grey text-base mb-5">As a Fullstack Engineer at Iruap Tech Studio Ltd, I collaborate with a cross-functional team to design, develop, and deploy modern web solutions tailored to client needs. I work across both front-end and back-end technologies, ensuring seamless integration, performance optimization, and responsive design.</p>
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
                <a href="#" target="__blank" className="relative mb-10 w-[95%] p-[10px] h-max flex items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out">
                  <div className="absolute inset-0 oily-bg"></div>
                  <div className="w-[30%] h-max">
                    <p className="text-base text-grey">2023 - Present</p>
                  </div>
                  <div className="w-[70%] h-max">
                    <h2 className="font-bold text-base text-accent mb-5">Freelance Fullstack Developer</h2>
                    <p className="text-grey text-base mb-5">As a freelance fullstack developer, I work directly with individuals, startups, and small businesses to build custom web solutions that solve real-world problems. I handle projects end-to-end — from initial consultation and planning to development, deployment, and maintenance.</p>
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
                    <a href="#" target="__blank" className="relative mb-10 w-[95%] p-[10px] h-max flex items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out group">
                      <div className="absolute inset-0 oily-bg"></div>
                      <div className="w-[30%] h-max">
                        <img src="/sreen-recorder.png" className="h-[75px] w-[100px]" alt="" />
                      </div>
                      <div className="w-[70%] h-max">
                        <h2 className="font-bold text-base text-accent mb-5 group-hover:text-primary">Iruap Screen Recorder (Screen Recorder Web App)</h2>
                        <p className="text-grey text-base mb-5">A browser-based screen recording tool that enables users to capture their screen, preview the video, and download it without needing any browser extension.</p>
                        <ul className="w-full h-max flex flex-wrap">
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Next.js</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Framers Motion</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">Tailwind CSS</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">PHP</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">MySql</li>
                        </ul>
                      </div>
                    </a>
                    <a href="#" target="__blank" className="relative mb-10 w-[95%] p-[10px] h-max flex items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out group">
                      <div className="absolute inset-0 oily-bg"></div>
                      <div className="w-[30%] h-max">
                        <img src="/sreen-recorder.png" className="h-[75px] w-[100px]" alt="" />
                      </div>
                      <div className="w-[70%] h-max">
                        <h2 className="font-bold text-base text-accent mb-5 group-hover:text-primary">Iruap VTU Website (Mobile Top Up Web App)</h2>
                        <p className="text-grey text-base mb-5">A real-time utility platform that allows users to purchase airtime, data, TV subscriptions, and electricity tokens. Includes wallet funding and admin management.</p>
                        <ul className="w-full h-max flex flex-wrap">
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">React Js</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">CSS</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">PHP</li>
                          <li className="text-primary mb-1 mr-1 text-sm py-1 px-4 rounded-full bg-grey">MySql</li>
                        </ul>
                      </div>
                    </a>
                    <a href="#" target="__blank" className="relative mb-10 w-[95%] p-[10px] h-max flex items-start hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out group">
                      <div className="absolute inset-0 oily-bg"></div>
                      <div className="w-[30%] h-max">
                        <img src="/sreen-recorder.png" className="h-[75px] w-[100px]" alt="" />
                      </div>
                      <div className="w-[70%] h-max">
                        <h2 className="font-bold text-base text-accent mb-5 group-hover:text-primary">Freelance Market Place (Afrilancer)</h2>
                        <p className="text-grey text-base mb-5">A real-time utility platform that allows users to purchase airtime, data, TV subscriptions, and electricity tokens. Includes wallet funding and admin management.</p>
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
                            <textarea name="message" className="border rounded border-grey min-h-[150px] max-h-[150px] min-w-[100%] max-w-[100%]" value={formData.message} onChange={handleChanged} id="message"></textarea>
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
