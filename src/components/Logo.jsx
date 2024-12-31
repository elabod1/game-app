import LogoImag from "../assets/images/logo.webp";

const Logo = ({ text, className }) => {
    return <img src={LogoImag} alt={text} className={`logo ${className}`} />;
};

export default Logo;
