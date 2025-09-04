import React from 'react';
import { X, Star, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product } from '../store/cartSlice';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity?: number) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    setQuantity(1);
  }, [product]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    onClose();
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

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
        
        <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="lg:w-1/2 p-8">
            <div className="mb-4">
              <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">{product.rating}</span>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {product.description}
            </p>
            
            {/* Quantity Selector */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-3">
                <span className="text-lg font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-6 w-6" />
              <span>Add to Cart - ${(product.price * quantity).toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;