import { Product } from '../types';

// Helper function to generate unique IDs
const generateId = (index: number): string => (index + 1).toString().padStart(3, '0');

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium wireless headphones with active noise cancellation for an immersive audio experience.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Electronics',
    rating: 4.5,
    reviews: 128,
    brand: 'SoundMaster',
    specifications: {
      'Battery Life': '30 hours',
      'Bluetooth Version': '5.0',
      'Weight': '250g',
      'Color': 'Black',
      'Connectivity': 'Bluetooth, USB-C'
    },
    features: [
      'Active Noise Cancellation',
      'Touch Controls',
      'Voice Assistant Support',
      'Quick Charging',
      'Multi-device Pairing'
    ],
    inStock: true,
    stockCount: 45,
    discount: {
      percentage: 15,
      validUntil: '2024-04-30'
    },
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'John Doe',
        rating: 5,
        date: '2024-03-15',
        comment: 'Best headphones I\'ve ever used! The noise cancellation is incredible.',
        verifiedPurchase: true,
        helpful: 45
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Jane Smith',
        rating: 4,
        date: '2024-03-10',
        comment: 'Great sound quality and comfortable for long use. Battery life is impressive.',
        verifiedPurchase: true,
        helpful: 32
      }
    ],
    relatedProducts: ['2', '9', '14']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Electronics',
    rating: 4.2,
    reviews: 95,
    brand: 'FitTech',
    specifications: {
      'Battery Life': '7 days',
      'Water Resistance': '5 ATM',
      'Display Size': '1.4 inch',
      'Color': 'Black',
      'Connectivity': 'Bluetooth 5.0'
    },
    features: [
      'Heart Rate Monitoring',
      'GPS Tracking',
      'Sleep Tracking',
      'Water Resistant',
      'Mobile Notifications'
    ],
    inStock: true,
    stockCount: 30,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Mike Johnson',
        rating: 4,
        date: '2024-03-12',
        comment: 'Great fitness tracker with accurate heart rate monitoring.',
        verifiedPurchase: true,
        helpful: 28
      }
    ],
    relatedProducts: ['1', '10', '14']
  },
  {
    id: '3',
    name: 'Professional Camera Kit',
    description: 'Complete photography kit with a high-resolution sensor and versatile lens options.',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Electronics',
    rating: 4.8,
    reviews: 256,
    brand: 'PhotoPro',
    specifications: {
      'Sensor Size': 'Full Frame',
      'Resolution': '24.2 MP',
      'ISO Range': '100-51200',
      'Color': 'Black',
      'Weight': '1.2 kg'
    },
    features: [
      '4K Video Recording',
      'Dual Card Slots',
      'Weather Sealed',
      'Touch Screen',
      'WiFi Connectivity'
    ],
    inStock: true,
    stockCount: 15,
    shipping: {
      free: true,
      estimatedDays: '3-5 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: 'r4',
        userId: 'u4',
        userName: 'Sarah Wilson',
        rating: 5,
        date: '2024-03-08',
        comment: 'Professional-grade camera with excellent image quality.',
        verifiedPurchase: true,
        helpful: 56
      }
    ],
    relatedProducts: ['11', '14', '9']
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable office chair with lumbar support and adjustable features for long work hours.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Furniture',
    rating: 4.3,
    reviews: 167,
    brand: 'ErgoComfort',
    specifications: {
      'Material': 'Mesh',
      'Color': 'Black',
      'Weight Capacity': '300 lbs',
      'Height Range': '17-21 inches',
      'Assembly Required': 'Yes'
    },
    features: [
      'Lumbar Support',
      'Adjustable Height',
      '360° Swivel',
      'Breathable Mesh',
      'Armrests'
    ],
    inStock: true,
    stockCount: 25,
    shipping: {
      free: false,
      estimatedDays: '5-7 days'
    },
    warranty: '5 years limited warranty',
    customerReviews: [
      {
        id: 'r5',
        userId: 'u5',
        userName: 'David Brown',
        rating: 4,
        date: '2024-03-05',
        comment: 'Very comfortable for long work sessions. Assembly was straightforward.',
        verifiedPurchase: true,
        helpful: 42
      }
    ],
    relatedProducts: ['7', '13', '6']
  },
  {
    id: '5',
    name: 'Gaming Laptop',
    description: 'High-performance gaming laptop with RTX 3080, 32GB RAM, and 1TB SSD storage.',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Electronics',
    rating: 4.7,
    reviews: 89,
    brand: 'GameTech',
    specifications: {
      'Processor': 'Intel i9-12900H',
      'Graphics': 'RTX 3080',
      'RAM': '32GB',
      'Storage': '1TB SSD',
      'Display': '15.6" 165Hz'
    },
    features: [
      'RGB Keyboard',
      'High Refresh Display',
      'Thermal Cooling',
      'Thunderbolt 4',
      'WiFi 6E'
    ],
    inStock: true,
    stockCount: 10,
    shipping: {
      free: true,
      estimatedDays: '3-5 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: 'r6',
        userId: 'u6',
        userName: 'Alex Chen',
        rating: 5,
        date: '2024-03-01',
        comment: 'Beast of a laptop! Runs all modern games at max settings.',
        verifiedPurchase: true,
        helpful: 67
      }
    ],
    relatedProducts: ['11', '9', '1']
  },
  {
    id: '6',
    name: 'Smart Home Security System',
    description: 'Complete home security system with cameras, motion sensors, and mobile app control.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Smart Home',
    rating: 4.6,
    reviews: 156,
    brand: 'SecureHome',
    specifications: {
      'Cameras': '4 HD Cameras',
      'Motion Sensors': '2 units',
      'Storage': 'Cloud + Local',
      'Connectivity': 'WiFi',
      'Mobile App': 'iOS & Android'
    },
    features: [
      'Night Vision',
      'Motion Detection',
      'Mobile Alerts',
      'Cloud Storage',
      'Two-way Audio'
    ],
    inStock: true,
    stockCount: 20,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: 'r7',
        userId: 'u7',
        userName: 'Emily Davis',
        rating: 5,
        date: '2024-02-28',
        comment: 'Easy to install and great peace of mind. App works perfectly.',
        verifiedPurchase: true,
        helpful: 38
      }
    ],
    relatedProducts: ['10', '12', '15']
  },
  {
    id: '7',
    name: 'Standing Desk',
    description: 'Electric adjustable standing desk with memory presets and cable management.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Furniture',
    rating: 4.4,
    reviews: 203,
    brand: 'ErgoFlex',
    specifications: {
      'Material': 'Bamboo',
      'Color': 'Natural',
      'Height Range': '28-48 inches',
      'Weight Capacity': '350 lbs',
      'Assembly Required': 'Yes'
    },
    features: [
      'Memory Presets',
      'Cable Management',
      'Anti-collision',
      'Quiet Motor',
      'Stable Design'
    ],
    inStock: true,
    stockCount: 15,
    shipping: {
      free: false,
      estimatedDays: '5-7 days'
    },
    warranty: '5 years limited warranty',
    customerReviews: [
      {
        id: 'r8',
        userId: 'u8',
        userName: 'Lisa Chen',
        rating: 4,
        date: '2024-02-25',
        comment: 'Great quality and smooth height adjustment. Assembly took about 30 minutes.',
        verifiedPurchase: true,
        helpful: 45
      }
    ],
    relatedProducts: ['4', '13', '6']
  },
  {
    id: '8',
    name: 'Smart Refrigerator',
    description: 'Smart fridge with touchscreen, inventory tracking, and recipe suggestions.',
    price: 1999.99,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Smart Home',
    rating: 4.3,
    reviews: 78,
    brand: 'SmartKitchen',
    specifications: {
      'Capacity': '25 cu ft',
      'Color': 'Stainless Steel',
      'Door Style': 'French Door',
      'Ice Maker': 'Built-in',
      'Smart Features': 'WiFi Enabled'
    },
    features: [
      'Touchscreen Display',
      'Inventory Tracking',
      'Recipe Suggestions',
      'Temperature Control',
      'Voice Commands'
    ],
    inStock: true,
    stockCount: 8,
    shipping: {
      free: true,
      estimatedDays: '5-7 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: 'r9',
        userId: 'u9',
        userName: 'Robert Wilson',
        rating: 4,
        date: '2024-02-20',
        comment: 'Love the smart features and spacious design. Pricey but worth it.',
        verifiedPurchase: true,
        helpful: 32
      }
    ],
    relatedProducts: ['12', '15', '10']
  },
  {
    id: '9',
    name: 'Wireless Mechanical Keyboard',
    description: 'RGB mechanical keyboard with custom switches and wireless connectivity.',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Electronics',
    rating: 4.5,
    reviews: 245,
    brand: 'KeyMaster',
    specifications: {
      'Switch Type': 'Cherry MX Red',
      'Layout': 'Full Size',
      'Backlight': 'RGB',
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': '40 hours'
    },
    features: [
      'RGB Backlight',
      'Wireless',
      'Mechanical Switches',
      'Macro Keys',
      'Palm Rest'
    ],
    inStock: true,
    stockCount: 35,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: 'r10',
        userId: 'u10',
        userName: 'Tom Lee',
        rating: 5,
        date: '2024-02-15',
        comment: 'Best mechanical keyboard I\'ve used. Great for gaming and typing.',
        verifiedPurchase: true,
        helpful: 58
      }
    ],
    relatedProducts: ['14', '1', '5']
  },
  {
    id: '10',
    name: 'Smart Doorbell',
    description: 'Video doorbell with motion detection, night vision, and two-way audio.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Smart Home',
    rating: 4.6,
    reviews: 189,
    brand: 'SecureHome',
    specifications: {
      'Resolution': '1080p HD',
      'Field of View': '160°',
      'Night Vision': 'Yes',
      'Connectivity': 'WiFi',
      'Power Source': 'Battery/Wired'
    },
    features: [
      'Motion Detection',
      'Night Vision',
      'Two-way Audio',
      'Mobile Alerts',
      'Cloud Storage'
    ],
    inStock: true,
    stockCount: 40,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: 'r11',
        userId: 'u11',
        userName: 'Maria Garcia',
        rating: 5,
        date: '2024-02-10',
        comment: 'Crystal clear video and reliable motion detection. Easy installation.',
        verifiedPurchase: true,
        helpful: 42
      }
    ],
    relatedProducts: ['6', '12', '15']
  },
  {
    id: '11',
    name: 'Gaming Monitor',
    description: '27-inch 4K gaming monitor with 144Hz refresh rate and HDR support.',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Electronics',
    rating: 4.7,
    reviews: 134,
    brand: 'GameTech',
    specifications: {
      'Size': '27 inch',
      'Resolution': '4K (3840x2160)',
      'Refresh Rate': '144Hz',
      'Panel Type': 'IPS',
      'HDR': 'HDR400'
    },
    features: [
      'G-Sync Compatible',
      'HDR Support',
      'Low Input Lag',
      'Built-in Speakers',
      'Height Adjustable'
    ],
    inStock: true,
    stockCount: 25,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '3 years limited warranty',
    customerReviews: [
      {
        id: 'r12',
        userId: 'u12',
        userName: 'Chris Thompson',
        rating: 5,
        date: '2024-02-05',
        comment: 'Perfect for gaming and content creation. Colors are vibrant and motion is smooth.',
        verifiedPurchase: true,
        helpful: 49
      }
    ],
    relatedProducts: ['5', '9', '14']
  },
  {
    id: '12',
    name: 'Smart Thermostat',
    description: 'WiFi-enabled thermostat with energy saving features and remote control.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Smart Home',
    rating: 4.4,
    reviews: 167,
    brand: 'EcoSmart',
    specifications: {
      'Connectivity': 'WiFi',
      'Compatibility': 'Most HVAC Systems',
      'Display': 'Color Touchscreen',
      'Power Source': 'Battery/C-Wire',
      'Voice Control': 'Yes'
    },
    features: [
      'Energy Reports',
      'Geofencing',
      'Schedule Learning',
      'Remote Control',
      'Voice Commands'
    ],
    inStock: true,
    stockCount: 50,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: 'r13',
        userId: 'u13',
        userName: 'Jennifer Park',
        rating: 4,
        date: '2024-02-01',
        comment: 'Great energy savings and easy to control from anywhere.',
        verifiedPurchase: true,
        helpful: 35
      }
    ],
    relatedProducts: ['6', '10', '15']
  },
  {
    id: '13',
    name: 'Office Desk',
    description: 'Modern minimalist desk with built-in cable management and storage.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Furniture',
    rating: 4.2,
    reviews: 98,
    brand: 'ModernHome',
    specifications: {
      'Material': 'Wood & Metal',
      'Color': 'White',
      'Dimensions': '60" x 30" x 29"',
      'Weight Capacity': '200 lbs',
      'Assembly Required': 'Yes'
    },
    features: [
      'Cable Management',
      'Storage Drawer',
      'Sturdy Design',
      'Easy Assembly',
      'Modern Style'
    ],
    inStock: true,
    stockCount: 30,
    shipping: {
      free: false,
      estimatedDays: '5-7 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: 'r14',
        userId: 'u14',
        userName: 'Michael Brown',
        rating: 4,
        date: '2024-01-28',
        comment: 'Clean design and good quality. Assembly was straightforward.',
        verifiedPurchase: true,
        helpful: 28
      }
    ],
    relatedProducts: ['4', '7', '6']
  },
  {
    id: '14',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Electronics',
    rating: 4.3,
    reviews: 312,
    brand: 'KeyMaster',
    specifications: {
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': '12 months',
      'DPI Range': '800-4000',
      'Buttons': '6 programmable',
      'Color': 'Black'
    },
    features: [
      'Ergonomic Design',
      'Precision Tracking',
      'Long Battery Life',
      'Programmable Buttons',
      'Silent Clicks'
    ],
    inStock: true,
    stockCount: 100,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: 'r15',
        userId: 'u15',
        userName: 'Sarah Johnson',
        rating: 4,
        date: '2024-01-25',
        comment: 'Comfortable for long use and battery life is impressive.',
        verifiedPurchase: true,
        helpful: 45
      }
    ],
    relatedProducts: ['9', '1', '5']
  },
  {
    id: '15',
    name: 'Smart Light Bulbs',
    description: 'Set of 4 WiFi-enabled color-changing smart bulbs with voice control.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Smart Home',
    rating: 4.5,
    reviews: 278,
    brand: 'EcoSmart',
    specifications: {
      'Wattage': '9W (60W equivalent)',
      'Color Range': '16 million colors',
      'Connectivity': 'WiFi',
      'Voice Control': 'Yes',
      'Lumens': '800'
    },
    features: [
      'Color Changing',
      'Voice Control',
      'Schedule Control',
      'Scene Modes',
      'Energy Efficient'
    ],
    inStock: true,
    stockCount: 75,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: 'r16',
        userId: 'u16',
        userName: 'David Lee',
        rating: 5,
        date: '2024-01-20',
        comment: 'Great colors and easy to control. Perfect for smart home setup.',
        verifiedPurchase: true,
        helpful: 52
      }
    ],
    relatedProducts: ['12', '6', '10']
  },
  {
    id: generateId(15),
    name: 'Smart Coffee Maker',
    description: 'WiFi-enabled coffee maker with scheduling and custom brewing options.',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Kitchen Appliances',
    rating: 4.6,
    reviews: 156,
    brand: 'SmartKitchen',
    specifications: {
      'Capacity': '12 cups',
      'Programs': '5 brewing modes',
      'Timer': 'Yes',
      'Filter Type': 'Permanent',
      'Power': '1000W'
    },
    features: [
      'WiFi Control',
      'Custom Brewing',
      'Schedule Programming',
      'Keep Warm Function',
      'Water Level Indicator'
    ],
    inStock: true,
    stockCount: 45,
    discount: {
      percentage: 20,
      validUntil: '2024-05-15'
    },
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: generateId(16) + '_r1',
        userId: 'u17',
        userName: 'James Wilson',
        rating: 5,
        date: '2024-03-15',
        comment: 'Love being able to schedule my morning coffee from bed!',
        verifiedPurchase: true,
        helpful: 28
      }
    ],
    relatedProducts: ['008', '012', '015']
  },
  {
    id: generateId(16),
    name: 'Electric Skateboard',
    description: 'High-performance electric skateboard with remote control and regenerative braking.',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Sports & Outdoors',
    rating: 4.7,
    reviews: 89,
    brand: 'RideX',
    specifications: {
      'Range': '20 miles',
      'Top Speed': '25 mph',
      'Motor': '1000W Dual',
      'Battery': 'Lithium-ion',
      'Weight': '15 lbs'
    },
    features: [
      'Regenerative Braking',
      'Remote Control',
      'Multiple Speed Modes',
      'LED Lights',
      'Mobile App'
    ],
    inStock: true,
    stockCount: 20,
    shipping: {
      free: true,
      estimatedDays: '3-5 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: generateId(17) + '_r1',
        userId: 'u18',
        userName: 'Ryan Cooper',
        rating: 5,
        date: '2024-03-10',
        comment: 'Amazing range and super smooth ride. Battery life is impressive.',
        verifiedPurchase: true,
        helpful: 34
      }
    ],
    relatedProducts: ['002', '014', '011']
  },
  {
    id: generateId(17),
    name: 'Smart Plant Sensor',
    description: 'WiFi-enabled plant sensor that monitors soil moisture, light, and temperature.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Smart Home',
    rating: 4.4,
    reviews: 234,
    brand: 'GreenTech',
    specifications: {
      'Sensors': 'Moisture, Light, Temperature',
      'Battery Life': '6 months',
      'Connectivity': 'WiFi',
      'App Support': 'iOS & Android',
      'Range': '100ft'
    },
    features: [
      'Real-time Monitoring',
      'Plant Database',
      'Care Reminders',
      'Historical Data',
      'Multiple Plant Tracking'
    ],
    inStock: true,
    stockCount: 150,
    discount: {
      percentage: 15,
      validUntil: '2024-04-30'
    },
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: generateId(18) + '_r1',
        userId: 'u19',
        userName: 'Emma Green',
        rating: 4,
        date: '2024-03-05',
        comment: 'Really helps keep my plants healthy. App is intuitive.',
        verifiedPurchase: true,
        helpful: 45
      }
    ],
    relatedProducts: ['012', '015', '006']
  },
  {
    id: generateId(18),
    name: 'Digital Drawing Tablet',
    description: 'Professional drawing tablet with pressure sensitivity and wireless connectivity.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1526925539332-aa3b66e35444?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Art Supplies',
    rating: 4.8,
    reviews: 312,
    brand: 'ArtTech',
    specifications: {
      'Active Area': '10 x 6 inches',
      'Pressure Levels': '8192',
      'Resolution': '5080 LPI',
      'Connectivity': 'USB-C/Bluetooth',
      'Battery Life': '15 hours'
    },
    features: [
      'Wireless Mode',
      'Tilt Recognition',
      'Customizable Shortcuts',
      'Palm Rejection',
      'Battery-free Pen'
    ],
    inStock: true,
    stockCount: 35,
    discount: {
      percentage: 10,
      validUntil: '2024-05-30'
    },
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: generateId(19) + '_r1',
        userId: 'u20',
        userName: 'Alice Chen',
        rating: 5,
        date: '2024-03-01',
        comment: 'Perfect for digital art. The pressure sensitivity is amazing.',
        verifiedPurchase: true,
        helpful: 67
      }
    ],
    relatedProducts: ['003', '011', '014']
  },
  {
    id: generateId(19),
    name: 'Smart Indoor Garden',
    description: 'Automated indoor garden system with LED grow lights and self-watering feature.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Home & Garden',
    rating: 4.6,
    reviews: 178,
    brand: 'GreenTech',
    specifications: {
      'Capacity': '6 plants',
      'Light Type': 'Full Spectrum LED',
      'Water Tank': '2.5L',
      'Height': '15 inches',
      'Power': '24W'
    },
    features: [
      'Automated Watering',
      'LED Grow Lights',
      'Mobile App Control',
      'Nutrient Monitoring',
      'Plant Recognition'
    ],
    inStock: true,
    stockCount: 25,
    shipping: {
      free: true,
      estimatedDays: '3-5 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: generateId(20) + '_r1',
        userId: 'u21',
        userName: 'Mark Thompson',
        rating: 5,
        date: '2024-02-28',
        comment: 'Fresh herbs year-round! Very easy to maintain.',
        verifiedPurchase: true,
        helpful: 42
      }
    ],
    relatedProducts: ['017', '015', '012']
  },
  {
    id: generateId(20),
    name: 'Smart Pet Feeder',
    description: 'Automated pet feeder with camera, app control, and scheduled feeding times.',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Pet Supplies',
    rating: 4.7,
    reviews: 245,
    brand: 'PetTech',
    specifications: {
      'Capacity': '6L',
      'Portions': '1-12 portions',
      'Camera': '1080p HD',
      'Power': 'AC/Battery Backup',
      'Connectivity': 'WiFi'
    },
    features: [
      'Scheduled Feeding',
      'Live Camera Feed',
      'Voice Recording',
      'Low Food Alerts',
      'Portion Control'
    ],
    inStock: true,
    stockCount: 40,
    discount: {
      percentage: 20,
      validUntil: '2024-04-15'
    },
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: generateId(21) + '_r1',
        userId: 'u22',
        userName: 'Sophie Miller',
        rating: 5,
        date: '2024-02-25',
        comment: 'Perfect for keeping my cat on a regular feeding schedule!',
        verifiedPurchase: true,
        helpful: 53
      }
    ],
    relatedProducts: ['006', '010', '012']
  },
  {
    id: generateId(21),
    name: 'Smart Guitar',
    description: 'Electric guitar with built-in effects, wireless connectivity, and learning features.',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Musical Instruments',
    rating: 4.8,
    reviews: 156,
    brand: 'MusicTech',
    specifications: {
      'Type': 'Electric',
      'Body': 'Mahogany',
      'Pickups': 'Dual Humbucker',
      'Connectivity': 'Bluetooth/USB',
      'Battery Life': '12 hours'
    },
    features: [
      'Built-in Effects',
      'Mobile App Integration',
      'LED Fretboard Guide',
      'Recording Function',
      'Auto-Tuning'
    ],
    inStock: true,
    stockCount: 15,
    discount: {
      percentage: 15,
      validUntil: '2024-05-15'
    },
    shipping: {
      free: true,
      estimatedDays: '3-5 days'
    },
    warranty: '3 years limited warranty',
    customerReviews: [
      {
        id: generateId(22) + '_r1',
        userId: 'u23',
        userName: 'Jack Robinson',
        rating: 5,
        date: '2024-02-20',
        comment: 'Amazing learning tool for beginners. Sound quality is excellent.',
        verifiedPurchase: true,
        helpful: 48
      }
    ],
    relatedProducts: ['014', '001', '009']
  },
  {
    id: generateId(22),
    name: 'Smart Yoga Mat',
    description: 'Interactive yoga mat with pose detection and guided workouts.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Fitness Equipment',
    rating: 4.6,
    reviews: 289,
    brand: 'FitTech',
    specifications: {
      'Material': 'Eco-friendly TPE',
      'Thickness': '6mm',
      'Size': '72" x 26"',
      'Sensors': 'Pressure Sensitive',
      'Connectivity': 'Bluetooth'
    },
    features: [
      'Pose Detection',
      'Guided Workouts',
      'Progress Tracking',
      'Non-slip Surface',
      'Mobile App Integration'
    ],
    inStock: true,
    stockCount: 50,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: generateId(23) + '_r1',
        userId: 'u24',
        userName: 'Emma Davis',
        rating: 5,
        date: '2024-02-15',
        comment: 'Love the guided workouts and pose feedback!',
        verifiedPurchase: true,
        helpful: 56
      }
    ],
    relatedProducts: ['002', '016', '020']
  },
  {
    id: generateId(23),
    name: 'Smart Mirror',
    description: 'Interactive fitness mirror with live classes and form correction.',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Fitness Equipment',
    rating: 4.7,
    reviews: 134,
    brand: 'FitTech',
    specifications: {
      'Display': '43" 4K LCD',
      'Camera': '1080p',
      'Speakers': 'Stereo 20W',
      'Connectivity': 'WiFi/Bluetooth',
      'Size': '52" x 22" x 2"'
    },
    features: [
      'Live Classes',
      'Form Correction',
      'Progress Tracking',
      'Heart Rate Monitor',
      'Voice Control'
    ],
    inStock: true,
    stockCount: 10,
    shipping: {
      free: true,
      estimatedDays: '5-7 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: generateId(24) + '_r1',
        userId: 'u25',
        userName: 'Michael Chang',
        rating: 5,
        date: '2024-02-10',
        comment: 'Transformed my home workouts. The live classes are fantastic.',
        verifiedPurchase: true,
        helpful: 72
      }
    ],
    relatedProducts: ['022', '002', '016']
  },
  {
    id: generateId(24),
    name: 'Professional 3D Printer',
    description: 'High-precision 3D printer with dual extruders and large build volume.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1631744591853-998c4308bbb0?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Tools & Hardware',
    rating: 4.7,
    reviews: 178,
    brand: 'TechMaker',
    specifications: {
      'Build Volume': '300x300x400mm',
      'Layer Height': '0.1-0.4mm',
      'Extruder Type': 'Dual Direct Drive',
      'Connectivity': 'WiFi/USB',
      'Print Speed': '150mm/s'
    },
    features: [
      'Dual Extruders',
      'Auto Bed Leveling',
      'Remote Monitoring',
      'Filament Sensor',
      'Resume Printing'
    ],
    inStock: true,
    stockCount: 20,
    discount: {
      percentage: 10,
      validUntil: '2024-05-30'
    },
    shipping: {
      free: true,
      estimatedDays: '3-5 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: generateId(25) + '_r1',
        userId: 'u26',
        userName: 'David Wilson',
        rating: 5,
        date: '2024-02-05',
        comment: 'Excellent print quality and reliable performance.',
        verifiedPurchase: true,
        helpful: 45
      }
    ],
    relatedProducts: ['018', '011', '005']
  },
  {
    id: generateId(26),
    name: 'Smart Air Purifier',
    description: 'HEPA air purifier with air quality monitoring and smart controls.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Home Appliances',
    rating: 4.6,
    reviews: 198,
    brand: 'CleanAir',
    specifications: {
      'Coverage': '500 sq ft',
      'Filter': 'True HEPA H13',
      'CADR': '300',
      'Noise Level': '24-54dB',
      'Power': '45W'
    },
    features: [
      'Air Quality Monitor',
      'Auto Mode',
      'Sleep Mode',
      'Filter Life Indicator',
      'Voice Control'
    ],
    inStock: true,
    stockCount: 30,
    discount: {
      percentage: 15,
      validUntil: '2024-04-30'
    },
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: generateId(27) + '_r1',
        userId: 'u28',
        userName: 'Thomas Lee',
        rating: 5,
        date: '2024-01-28',
        comment: 'Significant improvement in air quality. Very quiet operation.',
        verifiedPurchase: true,
        helpful: 43
      }
    ],
    relatedProducts: ['012', '015', '008']
  },
  {
    id: generateId(27),
    name: 'Smart Sous Vide',
    description: 'Precision cooker with WiFi control and recipe database.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Kitchen Appliances',
    rating: 4.7,
    reviews: 167,
    brand: 'ChefTech',
    specifications: {
      'Power': '1000W',
      'Temperature Range': '32-197°F',
      'Pump Speed': '8L/min',
      'Connectivity': 'WiFi',
      'Display': 'Touch Screen'
    },
    features: [
      'WiFi Control',
      'Recipe Database',
      'Temperature Alerts',
      'Timer Function',
      'Mobile App'
    ],
    inStock: true,
    stockCount: 35,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: generateId(28) + '_r1',
        userId: 'u29',
        userName: 'Gordon Smith',
        rating: 5,
        date: '2024-01-25',
        comment: 'Perfect temperature control. Makes amazing steaks!',
        verifiedPurchase: true,
        helpful: 38
      }
    ],
    relatedProducts: ['016', '008', '026']
  },
  {
    id: generateId(28),
    name: 'Smart Door Lock',
    description: 'Fingerprint and keypad door lock with remote access.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Smart Home',
    rating: 4.8,
    reviews: 289,
    brand: 'SecureHome',
    specifications: {
      'Lock Type': 'Smart Lock',
      'Access Methods': 'Fingerprint, PIN, App',
      'Battery Life': '6 months',
      'Material': 'Zinc Alloy',
      'Connectivity': 'WiFi/Bluetooth'
    },
    features: [
      'Fingerprint Scanner',
      'Remote Access',
      'Guest Access',
      'Activity Log',
      'Low Battery Alert'
    ],
    inStock: true,
    stockCount: 40,
    discount: {
      percentage: 20,
      validUntil: '2024-05-15'
    },
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '3 years limited warranty',
    customerReviews: [
      {
        id: generateId(29) + '_r1',
        userId: 'u30',
        userName: 'Linda Martinez',
        rating: 5,
        date: '2024-01-20',
        comment: 'Easy to install and very secure. Love the app features.',
        verifiedPurchase: true,
        helpful: 52
      }
    ],
    relatedProducts: ['006', '010', '015']
  },
  {
    id: generateId(29),
    name: 'Smart Plant Pot',
    description: 'Self-watering plant pot with soil monitoring and app control.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Home & Garden',
    rating: 4.5,
    reviews: 145,
    brand: 'GreenTech',
    specifications: {
      'Capacity': '2 Gallons',
      'Sensors': 'Moisture, Light, Temperature',
      'Water Tank': '1L',
      'Battery Life': '3 months',
      'Material': 'UV-resistant plastic'
    },
    features: [
      'Self-watering',
      'Soil Monitoring',
      'Light Detection',
      'Water Level Alert',
      'Plant Care Tips'
    ],
    inStock: true,
    stockCount: 60,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: generateId(30) + '_r1',
        userId: 'u31',
        userName: 'Sarah Parker',
        rating: 4,
        date: '2024-01-15',
        comment: 'Perfect for busy plant parents. Plants are thriving!',
        verifiedPurchase: true,
        helpful: 34
      }
    ],
    relatedProducts: ['017', '019', '026']
  },
  {
    id: generateId(30),
    name: 'Smart Bike Trainer',
    description: 'Interactive indoor bike trainer with virtual racing and training programs.',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Fitness Equipment',
    rating: 4.9,
    reviews: 234,
    brand: 'FitTech',
    specifications: {
      'Resistance': 'Electromagnetic',
      'Power Accuracy': '±2%',
      'Max Power': '2000W',
      'Connectivity': 'ANT+/Bluetooth',
      'Gradient Simulation': '20%'
    },
    features: [
      'Virtual Racing',
      'Training Programs',
      'Power Measurement',
      'Auto Resistance',
      'Third-party App Support'
    ],
    inStock: true,
    stockCount: 25,
    discount: {
      percentage: 15,
      validUntil: '2024-05-30'
    },
    shipping: {
      free: true,
      estimatedDays: '3-5 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: generateId(31) + '_r1',
        userId: 'u32',
        userName: 'Chris Anderson',
        rating: 5,
        date: '2024-01-10',
        comment: 'Amazing for winter training. Virtual races are super fun!',
        verifiedPurchase: true,
        helpful: 48
      }
    ],
    relatedProducts: ['022', '023', '002']
  },
  {
    id: generateId(32),
    name: 'Smart Projector',
    description: 'Portable 4K projector with auto-focus and streaming capabilities.',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Electronics',
    rating: 4.7,
    reviews: 156,
    brand: 'ViewTech',
    specifications: {
      'Resolution': '4K UHD',
      'Brightness': '2500 ANSI',
      'Throw Ratio': '1.2:1',
      'Speaker': '10W Stereo',
      'Connectivity': 'WiFi/HDMI/USB-C'
    },
    features: [
      'Auto Focus',
      'Keystone Correction',
      'Built-in Streaming',
      'Screen Mirroring',
      'Portable Design'
    ],
    inStock: true,
    stockCount: 30,
    discount: {
      percentage: 10,
      validUntil: '2024-04-30'
    },
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: generateId(33) + '_r1',
        userId: 'u34',
        userName: 'Robert Chen',
        rating: 5,
        date: '2024-01-01',
        comment: 'Amazing picture quality and super easy setup.',
        verifiedPurchase: true,
        helpful: 45
      }
    ],
    relatedProducts: ['011', '005', '001']
  },
  {
    id: generateId(33),
    name: 'Smart Telescope',
    description: 'Computerized telescope with automatic star tracking and mobile app control.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Outdoor & Hobbies',
    rating: 4.8,
    reviews: 123,
    brand: 'StarTech',
    specifications: {
      'Aperture': '8 inches',
      'Focal Length': '1200mm',
      'Mount': 'Computerized Alt-Az',
      'Database': '40,000+ objects',
      'Battery Life': '10 hours'
    },
    features: [
      'Auto Star Tracking',
      'Mobile App Control',
      'GPS Alignment',
      'Astrophotography Mode',
      'Guided Tours'
    ],
    inStock: true,
    stockCount: 15,
    shipping: {
      free: true,
      estimatedDays: '3-5 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: generateId(34) + '_r1',
        userId: 'u35',
        userName: 'Alan Cooper',
        rating: 5,
        date: '2023-12-28',
        comment: 'Amazing for beginners. The auto-tracking works perfectly.',
        verifiedPurchase: true,
        helpful: 42
      }
    ],
    relatedProducts: ['003', '011', '032']
  },
  {
    id: generateId(34),
    name: 'Smart Pet Camera',
    description: 'Interactive pet camera with treat dispenser and two-way audio.',
    price: 169.99,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Pet Supplies',
    rating: 4.6,
    reviews: 345,
    brand: 'PetTech',
    specifications: {
      'Camera': '1080p HD',
      'Field of View': '160°',
      'Treat Capacity': '100 pieces',
      'Audio': 'Two-way',
      'Night Vision': 'IR LED'
    },
    features: [
      'Treat Dispenser',
      'Two-way Audio',
      'Motion Alerts',
      'Night Vision',
      'Video Recording'
    ],
    inStock: true,
    stockCount: 45,
    discount: {
      percentage: 20,
      validUntil: '2024-04-15'
    },
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: generateId(35) + '_r1',
        userId: 'u36',
        userName: 'Emily Wilson',
        rating: 5,
        date: '2023-12-25',
        comment: 'Great way to check on pets during the day. They love the treats!',
        verifiedPurchase: true,
        helpful: 56
      }
    ],
    relatedProducts: ['020', '028', '010']
  },
  {
    id: generateId(35),
    name: 'Smart Garden Sprinkler',
    description: 'WiFi-enabled sprinkler system with weather adaptation and zone control.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Home & Garden',
    rating: 4.7,
    reviews: 234,
    brand: 'GreenTech',
    specifications: {
      'Zones': '16 zones',
      'Flow Rate': '0.5-35 GPM',
      'Pressure Range': '20-100 PSI',
      'Weather Data': 'Real-time',
      'Connectivity': 'WiFi'
    },
    features: [
      'Weather Adaptation',
      'Zone Control',
      'Smart Scheduling',
      'Water Usage Reports',
      'Freeze Protection'
    ],
    inStock: true,
    stockCount: 30,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: generateId(36) + '_r1',
        userId: 'u37',
        userName: 'James Taylor',
        rating: 5,
        date: '2023-12-20',
        comment: 'Significantly reduced water usage. Love the weather adaptation.',
        verifiedPurchase: true,
        helpful: 47
      }
    ],
    relatedProducts: ['029', '017', '019']
  },
  {
    id: generateId(36),
    name: 'Smart Drum Kit',
    description: 'Electronic drum kit with built-in lessons and recording features.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Musical Instruments',
    rating: 4.8,
    reviews: 167,
    brand: 'MusicTech',
    specifications: {
      'Pads': '8 piece kit',
      'Sounds': '600+ built-in',
      'Connectivity': 'USB/MIDI/Bluetooth',
      'Recording': '16-track',
      'Speaker': '20W Stereo'
    },
    features: [
      'Interactive Lessons',
      'Recording Studio',
      'Bluetooth Connectivity',
      'Custom Sound Editor',
      'Practice Tracks'
    ],
    inStock: true,
    stockCount: 20,
    discount: {
      percentage: 15,
      validUntil: '2024-05-15'
    },
    shipping: {
      free: true,
      estimatedDays: '3-5 days'
    },
    warranty: '3 years limited warranty',
    customerReviews: [
      {
        id: generateId(37) + '_r1',
        userId: 'u38',
        userName: 'Mike Thompson',
        rating: 5,
        date: '2023-12-15',
        comment: 'Perfect for learning drums. The built-in lessons are excellent.',
        verifiedPurchase: true,
        helpful: 52
      }
    ],
    relatedProducts: ['021', '001', '032']
  },
  {
    id: generateId(37),
    name: 'Smart Desk Lamp',
    description: 'LED desk lamp with wireless charging and customizable lighting modes.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Home Office',
    rating: 4.5,
    reviews: 289,
    brand: 'LightTech',
    specifications: {
      'Brightness': '1000 lumens',
      'Color Temperature': '2700-6500K',
      'Wireless Charging': '15W',
      'Power': '12W LED',
      'Controls': 'Touch/App'
    },
    features: [
      'Wireless Charging',
      'Color Temperature',
      'Timer Function',
      'Eye Protection',
      'Memory Function'
    ],
    inStock: true,
    stockCount: 75,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: generateId(38) + '_r1',
        userId: 'u39',
        userName: 'Sarah Miller',
        rating: 4,
        date: '2023-12-10',
        comment: 'Great desk lamp with useful charging feature.',
        verifiedPurchase: true,
        helpful: 34
      }
    ],
    relatedProducts: ['013', '004', '007']
  },
  {
    id: generateId(39),
    name: 'Smart Backpack',
    description: 'Anti-theft backpack with built-in USB charging and location tracking.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Travel & Accessories',
    rating: 4.7,
    reviews: 234,
    brand: 'TravelTech',
    specifications: {
      'Capacity': '25L',
      'Material': 'Water-resistant Polyester',
      'USB Ports': '2 external',
      'Tracking': 'GPS/Bluetooth',
      'Weight': '2.2 lbs'
    },
    features: [
      'Anti-theft Design',
      'USB Charging',
      'Location Tracking',
      'RFID Protection',
      'Hidden Pockets'
    ],
    inStock: true,
    stockCount: 45,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: generateId(40) + '_r1',
        userId: 'u41',
        userName: 'Laura Chen',
        rating: 5,
        date: '2023-12-01',
        comment: 'Perfect travel companion. Love the charging feature.',
        verifiedPurchase: true,
        helpful: 39
      }
    ],
    relatedProducts: ['002', '014', '037']
  },
  {
    id: generateId(40),
    name: 'Smart Water Bottle',
    description: 'Self-cleaning water bottle with hydration tracking and temperature control.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Health & Fitness',
    rating: 4.5,
    reviews: 178,
    brand: 'HealthTech',
    specifications: {
      'Capacity': '20 oz',
      'Battery Life': '2 weeks',
      'Temperature Range': '40-140°F',
      'Cleaning Cycle': 'UV-C LED',
      'Material': 'Stainless Steel'
    },
    features: [
      'UV Sterilization',
      'Temperature Control',
      'Hydration Tracking',
      'Mobile App',
      'LED Display'
    ],
    inStock: true,
    stockCount: 80,
    discount: {
      percentage: 15,
      validUntil: '2024-04-15'
    },
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '1 year limited warranty',
    customerReviews: [
      {
        id: generateId(41) + '_r1',
        userId: 'u42',
        userName: 'Mark Davis',
        rating: 4,
        date: '2023-11-28',
        comment: 'Great for tracking water intake. Temperature control works well.',
        verifiedPurchase: true,
        helpful: 45
      }
    ],
    relatedProducts: ['022', '038', '002']
  },
  {
    id: generateId(41),
    name: 'Smart Wallet',
    description: 'RFID-blocking wallet with location tracking and wireless charging.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Travel & Accessories',
    rating: 4.6,
    reviews: 156,
    brand: 'TravelTech',
    specifications: {
      'Material': 'Genuine Leather',
      'Card Slots': '8 slots',
      'Tracking': 'Bluetooth',
      'Battery Life': '6 months',
      'Wireless Charging': 'Qi compatible'
    },
    features: [
      'RFID Protection',
      'Location Tracking',
      'Wireless Charging',
      'Lost Phone Alert',
      'Slim Design'
    ],
    inStock: true,
    stockCount: 55,
    shipping: {
      free: true,
      estimatedDays: '2-3 days'
    },
    warranty: '2 years limited warranty',
    customerReviews: [
      {
        id: generateId(42) + '_r1',
        userId: 'u43',
        userName: 'Peter Wong',
        rating: 5,
        date: '2023-11-25',
        comment: 'Excellent quality and the tracking feature saved me once!',
        verifiedPurchase: true,
        helpful: 42
      }
    ],
    relatedProducts: ['039', '014', '037']
  }
];

// Add type checking to ensure all products follow the Product interface
const validateProducts = (products: Product[]): boolean => {
  return products.every(product => {
    return (
      typeof product.id === 'string' &&
      typeof product.name === 'string' &&
      typeof product.description === 'string' &&
      typeof product.price === 'number' &&
      typeof product.image === 'string' &&
      typeof product.category === 'string' &&
      typeof product.rating === 'number' &&
      typeof product.reviews === 'number' &&
      Array.isArray(product.features) &&
      typeof product.inStock === 'boolean' &&
      typeof product.stockCount === 'number'
    );
  });
};

// Validate the products array
console.assert(validateProducts(SAMPLE_PRODUCTS), 'Invalid product data detected'); 