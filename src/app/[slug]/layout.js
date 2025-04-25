'use client';

import Header from '@/components/Header';
import { MobileMenu } from '@/components/MobileMenu';
import NavItem from '@/components/NavItem';
import StarMenu from '@/components/StarMenu';
import { BookText, CreditCard, Home, MessageSquareText, Package, ShoppingCart, Users } from 'lucide-react';


export default function DynamicLayout({ children }) {
    const starMenuItems = [
        {
          label: 'سبد خرید',
          icon: <ShoppingCart className="w-5 h-5" />,
          href: '/cart'
        },
        {
          label: 'پرداخت',
          icon: <CreditCard className="w-5 h-5" />,
          href: '/payment'
        },
        {
          label: 'سفارشات',
          icon: <Package className="w-5 h-5" />,
          href: '/orders'
        }
      ];
  return (
    <div className="max-w-md mx-auto bg-slate-100 min-h-screen flex flex-col pb-24">
      <Header />
      <main className="flex-1">
        {children}
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
      </main>
      <MobileMenu />
    </div>
  );
} 