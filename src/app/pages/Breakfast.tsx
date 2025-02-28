import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface BreakfastItem {
  image: string;
  title: string;
  items: string;
  price: string;
  time: string;
}

//create breakfast items list
const breakfastItems: BreakfastItem[] = [
  {
    image: '/breakfast/pancakes-2291908_1280.jpg',
    title: 'Classic Pancake Combo',
    items:
      'Fluffy pancakes served with scrambled eggs, crispy bacon, and a side of maple syrup.',
    price: '$9.99',
    time: 'Available 7 AM - 11 AM',
  },
  {
    image: '/breakfast/bread-1836411_1280.jpg',
    title: 'Protein Breakfast',
    items:
      'Grilled steak with scrambled eggs, avocado slices, and whole wheat toast.',
    price: '$12.99',
    time: 'Available 7 AM - 11 AM',
  },
  {
    image: '/breakfast/berries-6514669_1280.jpg',
    title: 'Bagel Delight',
    items:
      'Freshly toasted bagel with cream cheese, served with mixed berries and honey drizzle.',
    price: '$6.99',
    time: 'Available 7 AM - 11 AM',
  },
  {
    image: '/breakfast/coffee-8174257_1280.jpg',
    title: 'Morning Coffee Set',
    items:
      'A freshly brewed cup of coffee paired with a buttery croissant and seasonal berries.',
    price: '$4.99',
    time: 'Available All Day',
  },
  {
    image: '/breakfast/breakfastbackground.jpg',
    title: 'Gourmet Breakfast Platter',
    items:
      'A premium breakfast spread featuring bacon, fried eggs, avocado, and a warm croissant.',
    price: '$14.99',
    time: 'Available 7 AM - 11 AM',
  },
];

export function BreakfastMenu() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {breakfastItems.map((item, index) => (
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
