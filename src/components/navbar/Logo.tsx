import { type FC } from "react";

interface LogoProps {
  brand: string;
  className?: string;
}

const Logo: FC<LogoProps> = ({ brand, className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* You can add your logo image here */}
      <span className="text-xl font-extrabold text-gray-800">{brand}</span>
    </div>
  );
};

export default Logo;
