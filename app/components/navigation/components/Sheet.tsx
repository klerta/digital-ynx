import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/app/components/ui/Sheet"

const Drawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className='opacity-[80%] rounded-l-[20px] py-0 w-[50%] bg-gradient-to-t from-black to to-brand border-0'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-8 mt-10'>
            <SheetClose asChild>
              <a className='text-md' href="#accueil">Accueil</a>
            </SheetClose>
            <SheetClose asChild>
              <a className='text-md' href="#about">Qui somme nous?</a>
            </SheetClose>
            <SheetClose asChild>
              <a className='text-md' href="#services">Nos services</a>
            </SheetClose>
            <SheetClose asChild>
              <a className='text-md' href="#production">Production</a>
            </SheetClose>
            <SheetClose asChild>
              <a className='text-md' href="#devis">Demander devis</a>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;