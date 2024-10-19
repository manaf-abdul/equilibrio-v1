import React from "react";
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
  Avatar,
  Image,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useRouter as useNextRouter } from "next/router";
import Logo from "../assets/images/logo.png";
// import { ThemeSwitch } from "./theme-switch";

const NavLink = ({ href, isActive, fill, nonFill, ...props }: any) => {
  return <Link href={href}>{isActive(href) ? fill : nonFill}</Link>;
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const router = useRouter();
  const nextRouter = useNextRouter();

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
      label: "Careers",
      link: "/careers",
    },
  ];

  const isActive = (pathname: string) => nextRouter.pathname === pathname;

  const navigateToHomePage = () => {
    router.push("/", { scroll: true });
  };

  return (
    <NextNav
      style={{background:"#e5e7eb"}}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
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
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent onClick={navigateToHomePage}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand style={{ cursor: "pointer" }}>
          <Image src={Logo.src} alt={"Equilibrio"} width={75} />
          {/* <p className="font-bold text-inherit">ACME</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isActive('/projects')}>
          <Link color="foreground" href="/projects" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/about-us')}>
          <Link href="/about-us" color="foreground" >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/careers')}>
          <Link color="foreground" href="/careers">
            Careers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <ThemeSwitch/>
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} color="primary" href="/projects" variant="flat">
            Projects
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNav>
  );
};
