"use client";

import React, { useRef, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Badge,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Icon from "@/lib/IconSprite";



export default function Header() {
  
  
  const currentRoute = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { title: "Главная", href: "/" },
    { title: "Услуги", href: "/category" },
    { title: "Контакты", href: "/contact" },
    
  ];

  return (
    <Navbar isBlurred={false} shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        
        <NavbarBrand>
          <Link href={`/`} className="space-x-2">
            <img src="/logo.png" alt="" className="w-10 h-10" />
            <div className="flex flex-col items-center justify-center">
              <span className="text-black text-sm tracking-[0.18rem] leading-3">группа компаний</span>
              <h1 className="text-black leading-6 uppercase font-bold font-serif text-2xl">
                печатаем
              </h1>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={currentRoute === item.href}>
            <Link
              color={currentRoute === item.href ? "primary" : "foreground"}
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-2">
          <div className="hidden md:flex gap-2">
            <Button
              color="secondary"
              variant="flat"
              isIconOnly
              href="https://vk.com/vologdapechataem35"
              as={Link}
              className="w-8 h-8 sm:w-10 sm:h-10 min-w-0 fill-secondary"
            >
              <Icon name="vk" size={24} />
            </Button>
            <Button
              color="secondary"
              variant="flat"
              isIconOnly
              href="https://t.me/pechataem35vol"
              as={Link}
              className="w-8 h-8 sm:w-10 sm:h-10 min-w-0 fill-secondary"
            >
              <Icon name="tg" size={24} />
            </Button>
            <Button
            color="secondary"
            variant="flat"
            className="font-semibold">
            +7 (8172) 507-501
            </Button>
            {/* <Button
              color="secondary"
              variant="flat"
              isIconOnly
              href="#"
              as={Link}
              hidden={false}
              className="w-8 h-8 sm:w-10 sm:h-10 min-w-0 fill-secondary"
            >
              <Icon name="whatsapp" size={24} />
            </Button> */}
          </div>
          {/* <Cart /> */}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Button
              color="secondary"
              variant="flat"
              href={item.href}
              as={Link}
              fullWidth
            >
              {item.title}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
