import { Link } from "react-router-dom";

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages=[hero1,hero2,hero3,hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
            <div>
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl capitalize">
                    we are changing the way 
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aut officiis inventore suscipit repudiandae corrupti, nobis sed at accusamus rerum repellat eius. Eos corrupti minima quod tempore? Ratione, repudiandae veniam.
                </p>
                <div className="mt-10">
                    <Link to='/products' className="btn btn-primary uppercase">
                        our products
                    </Link>
                </div>
            </div>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
            {carouselImages?.map((image)=>{
                return <div key={image} className="carousel-item">
                    <img src={image} className="rounded-box h-full w-80 object-cover" />
                </div>
            })}
        </div>
    </div>
  )
}
export default Hero