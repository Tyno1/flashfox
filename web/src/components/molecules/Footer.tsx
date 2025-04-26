import { ModeToggle } from "@/components/atoms";

export function Footer() {
  type NavLinkProps = {
    name: string;
    path: string;
  };
  const NavLinks: NavLinkProps[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <footer className="bg-secondary p-5 mt-12 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Brand */}
        <div className="text-secondary-foreground font-bold text-xl">
          FlashFox
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center space-x-4 text-primary-foreground">
          {NavLinks.map((link) => (
            <li key={link.path}>
              <a
                className="text-secondary-foreground text-sm hover:underline"
                href={link.path}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mode Toggle */}
        <div>
          <ModeToggle />
        </div>
      </div>

      {/* Optional copyright */}
      <div className="container mx-auto mt-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FlashFox. All rights reserved.
      </div>
    </footer>
  );
}
