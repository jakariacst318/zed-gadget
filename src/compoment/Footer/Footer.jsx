import { Link } from "react-router-dom";
import logo from "./ZED LOGO-FI.png";

const Footer = () => {
  return (
    <footer className="bg-slate-100 mt-20 ">
      <div className="flex flex-col justify-center items-center">
        
        <Link to={'/'}>
         <img className="w-48 " src={logo} alt="logo" />
        </Link>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
          suscipit.
        </p>
      </div>
      <div className="footer lg:flex justify-center  lg:gap-48 text-base-content p-8">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
