import React from 'react';
import { X, Award, Truck, Shield, Heart } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 lg:p-12">
            <h2 className="text-4xl font-bold mb-4">About ShopZone</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Your trusted partner for premium products and exceptional shopping experiences since 2020.
            </p>
          </div>
          
          <div className="p-8 lg:p-12">
            {/* Mission Statement */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                At ShopZone, we believe shopping should be simple, enjoyable, and trustworthy. 
                We curate the finest products from around the world and deliver them to your doorstep 
                with unmatched service and care.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h4>
                  <p className="text-gray-600">
                    Every product is carefully selected and tested to meet our high standards for quality and durability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h4>
                  <p className="text-gray-600">
                    Free shipping on orders over $50 with delivery in 2-3 business days nationwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure Shopping</h4>
                  <p className="text-gray-600">
                    Your personal and payment information is protected with bank-level security encryption.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer First</h4>
                  <p className="text-gray-600">
                    24/7 customer support and hassle-free returns within 30 days of purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">1M+</div>
                  <div className="text-gray-600">Products Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">99.8%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;