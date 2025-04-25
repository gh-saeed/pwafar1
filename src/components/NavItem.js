import React from 'react';

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
};

export default NavItem; 