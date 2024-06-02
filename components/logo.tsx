import Image from 'next/image';
import lightThemeLogo from "/public/light-theme-reddit-logo.svg";
import darkThemeLogo from '/public/dark-theme-reddit-logo.svg';

const Logo = () => {
  return (
    <div className="relative -ml-2">
      <Image
        src={lightThemeLogo}
        alt="reddit logo"
        className="size-20 dark:hidden"
        width={80} 
        height={80} 
        priority
      />
      <Image
        src={darkThemeLogo}
        alt="reddit logo"
        className="size-20 hidden dark:block"
        width={80} 
        height={80} 
        priority
      />
    </div>
  );
};

export default Logo;