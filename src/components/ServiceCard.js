import React from 'react';
import Link from 'next/link';

const ServiceCard = ({ title, icon, href }) => {
  const content = (
    <div className="flex flex-col items-center">
      {icon}
      <span className="text-sm text-gray-700 mt-2">{title}</span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
};

export default ServiceCard; 