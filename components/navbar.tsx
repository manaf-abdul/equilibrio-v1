import React, { useEffect, useState } from "react";
import {
  Navbar as NextNav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRouter as useNextRouter } from "next/router";
import Logo from "../assets/images/logo_only.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const nextRouter = useNextRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "About Us",
      link: "/about-us",
    },
    {
      label: "Contact",
      link: "/contact-us",
    },
  ];

  const isActive = (pathname: string) => nextRouter.pathname === pathname;

  const navigateToHomePage = () => {
    router.push("/", { scroll: true });
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <NextNav
        className={`transition-all duration-300 ${
          nextRouter.pathname === "/" && !scrolled
            ? "bg-transparent" 
            : "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
        }`}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        height="5rem"
        classNames={{
          wrapper: "px-6 lg:px-8",
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[3px]",
            "data-[active=true]:after:rounded-[3px]",
            "data-[active=true]:after:bg-gradient-to-r",
            "data-[active=true]:after:from-red-600",
            "data-[active=true]:after:to-orange-600",
          ],
        }}
      >
        <NavbarContent onClick={navigateToHomePage}>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            style={{
              color: nextRouter.pathname === "/" && !scrolled ? "#ffffff" : "#111827"
            }}
          />
          <NavbarBrand className="cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src={Logo.src} 
                alt="Equilibrio" 
                width={60} 
                height={60}
                className="drop-shadow-sm"
              />
            </motion.div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          {menuItems.slice(1).map((item) => (
            <NavbarItem key={item.label} isActive={isActive(item.link)}>
              <Link 
                href={item.link}
                className={`navbar-link-override font-medium text-lg transition-all duration-300 relative group ${
                  isActive(item.link) 
                    ? "navbar-text-active" 
                    : nextRouter.pathname === "/" && !scrolled
                      ? "navbar-text-light"
                      : "navbar-text-dark"
                }`}
              >
                <span 
                  className={`${
                    isActive(item.link) 
                      ? "navbar-text-active" 
                      : nextRouter.pathname === "/" && !scrolled
                        ? "navbar-text-light"
                        : "navbar-text-dark"
                  }`}
                >
                  {item.label}
                </span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-red-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                as={Link} 
                href="/contact-us"
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                size="md"
              >
                Get In Touch
              </Button>
            </motion.div>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-white/95 backdrop-blur-md">
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 pt-6"
              >
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item.label}-${index}`}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.link}
                        className={`text-xl font-medium transition-colors duration-300 ${
                          isActive(item.link) ? "text-red-600" : "text-gray-700 hover:text-red-600"
                        }`}
                        size="lg"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </NavbarMenuItem>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </NavbarMenu>
      </NextNav>
    </motion.div>
  );
};
