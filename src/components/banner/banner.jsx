import bannerPic from '/banner.png';
import Button from '../ui/button/button';
import { NavLink } from 'react-router';

function Banner() {
  return (
    <div
      className="h-[400px] lg:h-[500px] w-full flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${bannerPic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Banner Text */}
      <div className="absolute lg:right-10 left-4 lg:left-auto max-w-md lg:max-w-lg text-center lg:text-right flex flex-col gap-4">
        <h3 className="text-3xl lg:text-6xl text-white font-extrabold leading-tight">
          Buy from <br /> Our Website
        </h3>
        <p className="text-white text-sm lg:text-base opacity-90">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ea
          officia expedita earum fugiat eligendi tenetur autem excepturi
          aperiam cupiditate!
        </p>
        <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
          <NavLink to = '/products'>Shop Now</NavLink>
        </Button>
      </div>
    </div>
  );
}

export default Banner;
