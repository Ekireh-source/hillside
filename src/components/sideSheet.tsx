import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export function SideSheet() {
  return (
    <Sheet>
    <SheetTrigger asChild>
      <div className="flex justify-end sm:hidden">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </SheetTrigger>
    <SheetContent side="left" className="bg-gray-900 text-white transition-transform duration-300 ease-out">
      <SheetHeader>
        {/* You can add a title or description here if needed */}
      </SheetHeader>
      <div className="grid w-full items-center gap-4 p-4">
        <div className="flex flex-col py-4 hover:text-[#16602a]">
          <Label className="text-2xl" htmlFor="home">Home</Label>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="flex flex-col py-4 hover:text-[#16602a]">
          <Label className="text-2xl" htmlFor="about">About Us</Label>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="flex flex-col py-4 hover:text-[#16602a]">
          <Label className="text-2xl" htmlFor="nursery">Nursery School</Label>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="flex flex-col py-4 hover:text-[#16602a]">
          <Label className="text-2xl" htmlFor="facilities">School Facilities</Label>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="flex flex-col py-4 hover:text-[#16602a]">
          <Label className="text-2xl" htmlFor="co-curricular">Co-curricular</Label>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="flex flex-col py-4 hover:text-[#16602a]">
          <Label className="text-2xl" htmlFor="ple">PLE Results</Label>
        </div>
      </div>
    </SheetContent>
  </Sheet>
  )
}



export default SideSheet;