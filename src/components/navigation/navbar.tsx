import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export async function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 h-20 w-full border-b border-border bg-background/40 px-4 backdrop-blur-lg">
      <div className="mx-auto flex h-full items-center justify-between md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.webp"
              alt="Neurix's Logo"
              height={40}
              width={40}
            />
            <span className="text-xl font-medium">Escape</span>
          </Link>
        </div>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:flex">
          <ul className="flex items-center justify-center gap-8">
            <li className="text-sm hover:text-foreground/80">
              <Link href="/#">Prices</Link>
            </li>
            <li className="text-sm hover:text-foreground/80">
              <Link href="#">Features</Link>
            </li>
            <li className="text-sm hover:text-foreground/80">
              <Link href="#">Enterprise</Link>
            </li>
            <li className="text-sm hover:text-foreground/80">
              <Link href="#">Blog</Link>
            </li>
            <li className="text-sm hover:text-foreground/80">
              <Link href="#">Forum</Link>
            </li>
            <li className="text-sm hover:text-foreground/80">
              <Link href="#">Careers</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="py-4 rounded-sm bg-transparent border-zinc-800 border-[1px] hover:border-zinc-600 hover:bg-transparent">
            Sign In
          </Button>
          <Button className="py-4 rounded-sm bg-white text-black border-zinc-800 border-[1px] hover:bg-zinc-200 ">
            Download
          </Button>
        </div>
      </div>
    </header>
  );
}
