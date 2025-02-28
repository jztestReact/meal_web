'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface LunchItem {
  image: string;
  title: string;
  items: string;
  price: string;
  time: string;
}

const lunchItems: LunchItem[] = [
  {
    image: '/lunch/burger-500054_1280.jpg',
    title: 'Classic Cheeseburger',
    items:
      'Juicy beef patty topped with melted cheddar, lettuce, tomato, and served with crispy fries.',
    price: '$10.99',
    time: 'Available 11 AM - 3 PM',
  },
  {
    image: '/lunch/ramen.jpg',
    title: 'Spicy Miso Ramen',
    items:
      'Rich miso broth with tender pork slices, soft-boiled egg, and fresh scallions.',
    price: '$13.99',
    time: 'Available 11 AM - 3 PM',
  },
  {
    image: '/lunch/rice.jpg',
    title: 'Teriyaki Chicken Rice Bowl',
    items:
      'Grilled chicken glazed with teriyaki sauce, served over steamed rice with veggies.',
    price: '$9.99',
    time: 'Available 11 AM - 3 PM',
  },
  {
    image: '/lunch/sandwich-7066273_1280.jpg',
    title: 'Turkey Avocado Sandwich',
    items:
      'Whole grain sandwich with smoked turkey, avocado, lettuce, and honey mustard.',
    price: '$8.99',
    time: 'Available 11 AM - 3 PM',
  },
];

export function LunchMenu() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {lunchItems.map((item, index) => (
        <Card key={index} className="w-80 shadow-md overflow-hidden">
          <div className="relative w-full h-80">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="rounded-t-md object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-gray-700">{item.items}</p>
            <p className="text-lg font-semibold mt-2">{item.price}</p>
          </CardContent>

          <CardFooter>
            <p className="text-gray-500">{item.time}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
