import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <div className="top-0 sticky bg-transparent flex items-center justify-between px-8 py-4 z-10">
      <Button className="hidden md:block">Ryann</Button>
      <div className="flex-1 justify-end space-x-4 hidden md:flex">
        <Button>Home</Button>
        <Button>Contact</Button>
        <ModeToggle />
      </div>
      <HamburgerMenu>
        <div className="p-4 flex flex-col space-y-4">
          <Button>Ryann</Button>
          <Button>Home</Button>
          <Button>Contact</Button>
          <ModeToggle />
        </div>
      </HamburgerMenu>
    </div>
  );
}

export default Navbar;
