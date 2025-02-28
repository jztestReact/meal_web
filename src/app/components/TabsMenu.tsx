'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BreakfastMenu } from '../pages/Breakfast';
import { LunchMenu } from '../pages/Lunch';
import { DinnerMenu } from '../pages/Dinner';
import { Home } from '../pages/Home';

const tabOptions = [
  { name: 'Home', theme: 'home' },
  { name: 'Breakfast', theme: 'breakfast' },
  { name: 'Lunch', theme: 'lunch' },
  { name: 'Dinner', theme: 'dinner' },
];

export function TabsMenu() {
  const [activeTab, setActiveTab] = useState('Home');
  const { setTheme } = useTheme(); //  theme hook

  /* Set theme dynamically when tab changes */
  useEffect(() => {
    const selectedTab = tabOptions.find((tab) => tab.name === activeTab);
    if (selectedTab) {
      setTheme(selectedTab.theme);
    }
  }, [activeTab, setTheme]);

  return (
    <div
      className={`flex flex-col my-14 items-center w- max-w-full ${activeTab.toLowerCase()}`}
    >
      {/* Tabs Menu */}
      <div
        className="grid grid-cols-4 w-[400px] p-2 mb-8 gap-3 rounded-lg transition-all duration-300"
        style={{
          backgroundColor: 'var(--secondary)',
        }}
      >
        {tabOptions.map((tab) => (
          <button
            key={tab.name}
            className={`py-2  text-center rounded-md transition-all font-semibold ${
              activeTab === tab.name
                ? 'bg-primary text-white'
                : 'bg-secondary text-foreground'
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="w-full h-full flex items-center justify-center mt-6">
        {activeTab === 'Home' && <Home />}
        {activeTab === 'Breakfast' && <BreakfastMenu />}
        {activeTab === 'Lunch' && <LunchMenu />}
        {activeTab === 'Dinner' && <DinnerMenu />}
      </div>
    </div>
  );
}
