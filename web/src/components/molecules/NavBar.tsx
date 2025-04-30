import { Button, ModeToggle } from "@/components/atoms";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

type NavLinkProps = {
  name: string;
  path: string;
};

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks: NavLinkProps[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      // Check if we're at a large screen size
      if (window.innerWidth >= 768) {
        // lg breakpoint in Tailwind
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-background p-5 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center ">
        <div className="text-secondary-foreground font-bold text-xl">
          FlashFox
        </div>
        <div className="ml-auto flex relative">
          <div className="hidden md:flex items-center space-x-6 ">
            <ul className="flex text-primary-foreground">
              {NavLinks.map((link) => (
                <li>
                  <a
                    className="text-secondary-foreground text-sm p-2 mr-6"
                    href={link.path}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <div className="md:hidden ">
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-background">
                    <Menu className="text-secondary-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="md:hidden w-[50vw] h-[30vh] flex flex-col justify-evenly py-2 px-6"
                  align="end"
                >
                  {NavLinks.map((link, i) => [
                    <DropdownMenuItem asChild
                      key={link.name || i}
                      className="cursor-pointer"
                    >
                      <Link to={link.path}>{link.name}</Link>
                    </DropdownMenuItem>,
                    i < NavLinks.length - 1 && (
                      <DropdownMenuSeparator key={`sep-${link.name}`} />
                    ),
                  ])
                    .flat()
                    .filter(Boolean)}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
