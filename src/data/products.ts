import { Product } from '../store/cartSlice';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    rating: 4.8,
    reviews: 324,
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life."
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 299.99,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    rating: 4.6,
    reviews: 156,
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and smartphone integration."
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Fashion",
    rating: 4.4,
    reviews: 89,
    description: "Comfortable, eco-friendly organic cotton t-shirt available in multiple colors."
  },
  {
    id: 4,
    name: "Professional Camera Lens",
    price: 899.99,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Photography",
    rating: 4.9,
    reviews: 203,
    description: "Professional-grade camera lens with exceptional clarity and versatile focal range."
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: 399.99,
    originalPrice: 499.99,
    image: "https://images.pexels.com/photos/586237/pexels-photo-586237.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Furniture",
    rating: 4.7,
    reviews: 412,
    description: "Ergonomically designed office chair with lumbar support and adjustable height."
  },
  {
    id: 6,
    name: "Wireless Bluetooth Speaker",
    price: 79.99,
    image: "https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    rating: 4.3,
    reviews: 267,
    description: "Portable Bluetooth speaker with rich sound quality and waterproof design."
  },
  {
    id: 7,
    name: "Premium Coffee Maker",
    price: 249.99,
    image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Kitchen",
    rating: 4.5,
    reviews: 178,
    description: "Professional-grade coffee maker with programmable settings and thermal carafe."
  },
  {
    id: 8,
    name: "Designer Sunglasses",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Fashion",
    rating: 4.2,
    reviews: 94,
    description: "Stylish designer sunglasses with UV protection and polarized lenses."
  },
  {
    id: 9,
    name: "Gaming Mechanical Keyboard",
    price: 159.99,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    rating: 4.6,
    reviews: 345,
    description: "Mechanical gaming keyboard with RGB backlighting and tactile switches."
  },
  {
    id: 10,
    name: "Yoga Mat Set",
    price: 49.99,
    image: "https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Sports",
    rating: 4.4,
    reviews: 156,
    description: "Non-slip yoga mat with carrying strap and alignment guides for perfect poses."
  },
  {
    id: 11,
    name: "Smart Home Hub",
    price: 129.99,
    image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Electronics",
    rating: 4.7,
    reviews: 289,
    description: "Central smart home hub that connects and controls all your smart devices."
  },
  {
    id: 12,
    name: "Leather Messenger Bag",
    price: 189.99,
    originalPrice: 229.99,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Fashion",
    rating: 4.5,
    reviews: 127,
    description: "Handcrafted leather messenger bag with multiple compartments and laptop sleeve."
  }
];

export const categories = [
  "All",
  "Electronics",
  "Fashion", 
  "Photography",
  "Furniture",
  "Kitchen",
  "Sports"
];