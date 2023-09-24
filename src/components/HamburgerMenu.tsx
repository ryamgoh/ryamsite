import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function SheetSide({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>{children}</SheetContent>
      </Sheet>
    </div>
  );
}
