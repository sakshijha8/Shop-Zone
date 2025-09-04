import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface HeroProps {
  onShopNowClick: () => void;
  onLearnMoreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNowClick, onLearnMoreClick }) => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <ShoppingBag className="h-12 w-12 text-orange-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Amazing
            <span className="block text-orange-400">Products</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Shop the latest trends with unbeatable prices and fast delivery. 
            Your perfect product is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onShopNowClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Shop Now
            </button>
            <button 
              onClick={onLearnMoreClick}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;