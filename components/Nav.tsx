'use client';

import { MenuIcon } from 'lucide-react';
import Logo from './Logo';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type NavProps = {} & React.ComponentProps<'div'>;

export default function Nav({ className }: NavProps) {
  return (
    <div
      className={cn(
        'w-full border border-dashed p-4 flex justify-between items-center gap-3 bg-white',
        className
      )}
    >
      <Logo className="h-12 lg:h-14 w-fit" />
      <MenuIcon className="size-6" />
    </div>
  );
}
