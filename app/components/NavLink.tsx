import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { NavLinkProps } from '@/lib/types';

export default function NavLink({ href, children }: NavLinkProps) {

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full text-center"
    >
      <Link href={href}>
        <Button variant='text' sx={{
          color: 'var(--text)',
          fontWeight: 400,
          textTransform: 'none',
          lineHeight: 1.75,
          borderRadius: '4px',
          borderColor: 'var(--text)',
          backgroundColor: 'transparent',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'var(--text)',
            color: 'var(--background)',
            border: '1px solid'

          }
        }}
        className="text-sm sm:text-base md:text-lg">{children}</Button>
      </Link>
    </div>
  );
};

