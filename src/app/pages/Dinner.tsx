'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface DinnerItem {
  image: string;
  title: string;
  items: string;
  price: string;
  time: string;
}

const dinnerItems: DinnerItem[] = [
  {
    image: '/dinner/steak-6975297_1280.jpg',
    title: 'Grilled Steak Platter',
    items:
      'Juicy grilled steak served with roasted vegetables and mashed potatoes.',
    price: '$19.99',
    time: 'Available 5 PM - 10 PM',
  },
  {
    image: '/dinner/pasta-2610762_1280.jpg',
    title: 'Creamy Alfredo Pasta',
    items:
      'Fettuccine pasta tossed in a rich and creamy Alfredo sauce with parmesan cheese.',
    price: '$14.99',
    time: 'Available 5 PM - 10 PM',
  },
  {
    image: '/dinner/pizza-5179939_1280.jpg',
    title: 'Classic Margherita Pizza',
    items:
      'Wood-fired Margherita pizza with fresh mozzarella, basil, and tomato sauce.',
    price: '$12.99',
    time: 'Available 5 PM - 10 PM',
  },
  {
    image: '/dinner/duck-2957809_1280.jpg',
    title: 'Roasted Duck',
    items:
      'Tender roasted duck with a side of garlic-infused mashed potatoes and cranberry sauce.',
    price: '$22.99',
    time: 'Available 5 PM - 10 PM',
  },
  {
    image: '/dinner/curry-7249247_1280.jpg',
    title: 'Spicy Thai Curry',
    items:
      'Aromatic Thai curry with tender chicken, bell peppers, and coconut milk, served with jasmine rice.',
    price: '$16.99',
    time: 'Available 5 PM - 10 PM',
  },
];

export function DinnerMenu() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {dinnerItems.map((item, index) => (
        <Card key={index} className="w-80 shadow-md overflow-hidden">
          {/* Food Image */}
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
