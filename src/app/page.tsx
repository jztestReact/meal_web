import { Footer } from './components/Footer';
import { TabsMenu } from './components/TabsMenu';
import { Header } from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto  text-center">
        <div className="flex justify-center gap-6 ">
          <TabsMenu />
        </div>
      </div>
      <Footer />
    </main>
  );
}
