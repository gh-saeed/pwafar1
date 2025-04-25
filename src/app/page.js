'use client';

import React from 'react';
import StatusBar from '../components/StatusBar';
import Header from '../components/Header';
import WelcomeSection from '../components/WelcomeSection';
import ServiceCard from '../components/ServiceCard';
import PromoBanner from '../components/PromoBanner';
import NavItem from '../components/NavItem';
import StarMenu from '../components/StarMenu';
import { 
  Users, 
  Gift, 
  Star, 
  Scroll, 
  Home, 
  BookText, 
  MessageSquareText,
  ShoppingCart,
  CreditCard,
  Package
} from 'lucide-react';

export default function HomePage() {
  const mainServices = [
    {
      title: 'مظنه طلا',
      icon: (
        <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
          <div className="w-10 h-10 bg-teal-200"></div>
        </div>
      ),
      href: '/مظنه-طلا'
    },
    {
      title: 'سیگنال طلا',
      icon: (
        <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
          <div className="w-10 h-10 bg-teal-200"></div>
        </div>
      ),
      href: '/سیگنال-طلا'
    },
    {
      title: 'سیگنال فارکس',
      icon: (
        <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
          <div className="w-10 h-10 bg-teal-200"></div>
        </div>
      ),
      href: '/سیگنال-فارکس'
    },
  ];

  const recommendedServices = [
    {
      title: 'مظنه-طلا',
      icon: (
        <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
          <div className="w-10 h-10 bg-teal-200"></div>
        </div>
      ),
      href: '#'
    },
    {
      title: 'مظنه-طلا',
      icon: (
        <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
          <div className="w-10 h-10 bg-teal-200"></div>
        </div>
      ),
      href: '#'
    },
    {
      title: 'مظنه-طلا',
      icon: (
        <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
          <div className="w-10 h-10 bg-teal-200"></div>
        </div>
      ),
      href: '#'
    },
  ];

  const starMenuItems = [
    {
      label: 'سبد خرید',
      icon: <ShoppingCart className="w-5 h-5" />,
      href: '#'
    },
    {
      label: 'پرداخت',
      icon: <CreditCard className="w-5 h-5" />,
      href: '#'
    },
    {
      label: 'سفارشات',
      icon: <Package className="w-5 h-5" />,
      href: '#'
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-slate-100 min-h-screen flex flex-col pb-24">
      <StatusBar />
      <Header />
      <WelcomeSection />

      {/* Main Services */}
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold text-right mb-4">سرویس های اصلی</h2>
        <div className="grid grid-cols-3 gap-4">
          {mainServices.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              icon={service.icon} 
              href={service.href}
            />
          ))}
        </div>
      </div>

      <PromoBanner />

      {/* Recommended Services */}
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold text-right mb-4">سرویس های پیشنهادی</h2>
        <div className="grid grid-cols-3 gap-4">
          {recommendedServices.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              icon={service.icon} 
              href={service.href}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-40">
        <div className="mx-auto w-full max-w-md">
          <div className="grid grid-cols-5 bg-white py-4 rounded-t-xl shadow-lg">
            <NavItem icon={<Home className="w-6 h-6" />} label="خانه" />
            <NavItem icon={<MessageSquareText className="w-6 h-6" />} label="پشتیبانی" />
            <StarMenu items={starMenuItems} />
            <NavItem icon={<BookText className="w-6 h-6" />} label="آموزش" />
            <NavItem icon={<Users className="w-6 h-6" />} label="حساب کاربری" />
          </div>
        </div>
      </div>

      {/* <div className="fixed bottom-0 left-0 w-full z-50">
        <div className="grid grid-cols-5 bg-white py-4 border-t">
          <NavItem icon={<Home className="w-6 h-6" />} label="خانه" />
          <NavItem icon={<MessageSquareText className="w-6 h-6" />} label="پشتیبانی" />
          <StarMenu items={starMenuItems} />
          <NavItem icon={<BookText className="w-6 h-6" />} label="آموزش" />
          <NavItem icon={<Users className="w-6 h-6" />} label="حساب کاربری" />
        </div>
      </div> */}



      {/* <div className="mt-auto">
        <div className="grid grid-cols-5 bg-white py-4 fixed">
          <NavItem icon={<Home className="w-6 h-6" />} label="خانه" />
          <NavItem icon={<MessageSquareText className="w-6 h-6" />} label="پشتیبانی" />
          <StarMenu items={starMenuItems} />
          <NavItem icon={<BookText className="w-6 h-6" />} label="آموزش" />
          <NavItem icon={<Users className="w-6 h-6" />} label="حساب کاربری" />
        </div>
      </div> */}
    </div>
  );
}
