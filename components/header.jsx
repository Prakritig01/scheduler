import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UserMenu from "./userMenu";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="container mx-auto flex items-center justify-between py-3 px-6 shadow-md border-b-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Scheduler logo"
            width={150}
            height={60}
            className="h-16 w-auto"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/events?create=true">
            <Button>
              <PenBox /> Create Event
            </Button>
          </Link>


          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          
          <SignedIn>
           <UserMenu/>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
