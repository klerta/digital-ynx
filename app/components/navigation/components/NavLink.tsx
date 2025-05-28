import React from 'react';
import Link from 'next/link';

type NavLinkProps = {
  href: string
  title: string
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return <Link className='font-[400] text-[16px] text-brand' href={`#${href}`}>{title}</Link>
};

export default NavLink;