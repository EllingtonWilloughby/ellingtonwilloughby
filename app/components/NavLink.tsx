'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from '@emotion/styled';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({
  href,
  children
}: NavLinkProps) {

  const pathname = usePathname();
  const isActive = pathname === href;

  const CustomLink = styled.a`
    color: var(--text);
    font-size: 1.3rem;
    font-weight: 300;
    text-decoration: none;
    margin: 1rem 0;
    transition: color 0.5s;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      color: var(--accent);
    }
  `;

  return (
      <Link href={href} passHref prefetch={true}>
      <CustomLink className={isActive ? 'active' : ''}>{ children }</CustomLink>
      </Link>
  );
};

