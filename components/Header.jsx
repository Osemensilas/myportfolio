import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return ( 
        <>
        <header id="header" className="w-screen px-10 block lg:hidden" style={{height: '120px', backgroundColor: "var(--neutralDark)"}}>
            <div className="flex items-center justify-between h-full w-full">
                <div className="h-max w-max">
                    <div className="h-max w-max">
                        <Image src="/blog-loogo.png" alt="Logo" className="logo-img" height={75} width={150} />
                    </div>
                </div>
                <div className="h-full" style={{width: "75%"}}>
                    <div className="flex items-center justify-end" style={{height: "40%"}}>
                        <p className="text-accent">Call: +2349054060454</p>
                        <div className="flex items-center">
                            <a href="https://www.instagram.com/silasosemen/" target="_blank" className="ml-5">
                                <i className="fa fa-instagram text-primary" style={{fontSize: "20px"}}></i>
                            </a>
                            <a href="https://web.facebook.com/osemen.silas" target="_blank" className="ml-5">
                                <i className="fa fa-facebook-square text-primary" style={{fontSize: "20px"}}></i>
                            </a>
                            <a href="https://x.com/OsemenSilas1" target="_blank" className="ml-5">
                                <i className="fa fa-twitter-square text-primary" style={{fontSize: "20px"}}></i>
                            </a>
                            <a href="https://www.linkedin.com/in/osemensilas/" target="_blank" className="ml-5">
                                <i className="fa fa-linkedin-square text-primary" style={{fontSize: "20px"}}></i>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-between" style={{height: "60%"}}>
                        <nav className="nav-container">
                            <ul className="flex items-center">
                                <li className="mr-4">
                                    <Link href="/" className="text-accent hover:text-primary hover:underline">Home</Link>
                                </li>
                                <li className="mr-4">
                                    <Link href="/projects" className="text-accent hover:text-primary hover:underline">Projects</Link>
                                </li>
                                <li className="mr-4">
                                    <Link href="/blogs" className="text-accent hover:text-primary hover:underline">Blogs</Link>
                                </li>
                                <li className="mr-4">
                                    <Link href="/about" className="text-accent hover:text-primary hover:underline">About Me</Link>
                                </li>
                                <li className="mr-4">
                                    <Link href="/contact" className="text-accent hover:text-primary hover:underline">Contact Me</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-cta-container">
                            <a href="#" target="_blank" className="whatsapp-btn btn">
                                Contact Us <i class="fa fa-whatsapp"></i>
                            </a>
                            <button className="bg-primary text-offBlack py-3 px-4 rounded-full ml-3">Get Consultation</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
     );
}
 
export default Header;