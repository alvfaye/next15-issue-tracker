'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';
import { clsx } from 'clsx';
// import classnames from 'classnames'

const navlinks = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/issues',
    text: 'Issues',
  },
];

const NavBar = () => {
  let curPath = usePathname();
  console.log(curPath);
  return (
    <nav className="flex space-x-6 border-b px-5 h-14 mb-4 items-center">
      <Link href="/" className="p-2">
        <AiFillBug className="h-5 w-5 fill-blue-500" />
      </Link>
      <ul className="flex space-x-5">
        {navlinks.map((link) => (
          <Link
            key={link.text}
            href={link.href}
            className={clsx({
              'text-zinc-400': curPath !== link.href,
              'text-zinc-900': link.href === curPath,
              'hover:text-zinc-900 transition-colors': true,
            })}
          >
            {link.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
