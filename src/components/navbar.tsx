import Logo from "@/components/images/Logo1.png";
import Image from "next/image";
import Link from "next/link";
import SideSheet from "@/components/sideSheet";
import { NavigationMenuDemo } from "./navigationMenu";


const Navbar = () => {
    return (
        <nav className="bg-[#16602a] sticky top-0 z-50 items-center py-4">
          <div className="container flex justify-between items-center mx-auto">
                <Link href="/" className="flex-shrink-0 items-center h-14">
                  <Image src={Logo} alt="Logo" height={250} width={250} className="h-full w-auto rounded-[100px]" />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    
                    <NavigationMenuDemo />
                  </div>
                </div>
                <SideSheet />
              </div>

          {/* Mobile menu, show/hide based on menu state. */}
            
          
        </nav>
    )
};


export default Navbar;