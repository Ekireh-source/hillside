
import CarouselSlide from "@/components/carousel";
import slide1 from "@/components/images/slide1.jpeg"
import slide2 from "@/components/images/slide2.jpg"
import slide3 from "@/components/images/slide3.jpeg"
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label"


export default function Home() {
  return (
   <main>
    <Navbar />
    <CarouselSlide />
    <section className="flex my-8 mx-4 items-center lg:container">
      <div className="bg-[#16602a] w-[20%] py-5 text-[10px] sm:text-sm flex-nowrap text-center text-white"><h1>SCHOOL UPDATES</h1></div>
      <div className="w-[80%]">
      <p className="bg-[#f50000] text-[10px] sm:text-sm py-2 text-white">
        REPORTING DATES FOR TERM 2 2024: P.7 - Friday, 24.05.2024 | P.6 - 
      </p>
      </div>
    </section>
    <section className="my-8 py-4 mx-4 flex flex-col sm:flex-row lg:container gap-10">
   
      <div className="py-4 mb-8 flex-1 ">
        <h1 className="text-4xl py-4">
        Hillside Nursery & Primary Schools Naalya
        </h1>
        <p className="text-sm py-2 text-gray-600">
          
          Hillside primary school is a private mixed Day and Boarding registered with the Ministry of Education and Sports. It is a Non – denominational school which strives for Academic Excellence, Discipline and Spirituality.
      
        </p>
        <p className="text-sm py-2 text-gray-600"> 
          Hillside provides a holistic Curriculum to cater for the learners’ proper growth and development needs.
        </p>
            
        <p className="text-sm mb-4 py-2 text-gray-600">
        Since its inception in 2001, the school has registered remarkable growth and development in terms of infrastructure and population. The school now has semi autonomous Nursery Section with a spacious environment for the pupils various activities.
        </p>
        <Button className="bg-[#16602a]  rounded-[50px] text-white hover:bg-[#1e232d]">MORE ABOUT US</Button>
      </div>
      <div className="flex-1 relative">
  <div className="grid md:grid-rows-2 md:grid-flow-col md:relative flex-col md:flex-row">
    <div className="row-start-1 row-span-2 md:order-none order-2">
      <Image
        src={slide2}
        alt="slide2"
        className="w-full h-[250px] md:-mr-[30px] mt-[150px] md:mt-[150px] rounded-[10px] relative z-10"
      />
    </div>
    <div className="row-end-3 row-span-2 md:order-none order-1">
      <Image
        src={slide2}
        alt="slide2"
        className="w-full h-[250px] rounded-[10px] md:relative md:-mt-[10px] md:-ml-[30px] z-20"
      />
    </div>
  </div>
</div>


     
  
    </section>
    <section className="container bg-[#f0f3f8] my-[50px] pt-[50px] pb-[50px] text-center">
    
      <div className="">
        <h1 className="text-4xl py-4">Explore more</h1>
        <p className="text-sm mx-auto py-4 text-gray-600">We believe in providing each student with a comprehensive and well-balanced education which takes cognizance of their physical, intellectual, social and emotional development.</p>
      </div>
      <div>
      <Card className="w-full bg-white rounded-[10px] my-8 py-10 shadow-lg">
      <CardContent>

          <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col  py-4 hover:text-[#16602a] ">
              <Label className="text-2xl" htmlFor="name">School Requirements</Label>
            </div>
            <hr className="border-t border-gray-300"/>
            <div className="flex flex-col py-4 hover:text-[#16602a]">
              <Label className="text-2xl" htmlFor="name">Fees structure</Label>
            </div>
            <hr className="border-t border-gray-300"/>
            <div className="flex flex-col py-4 hover:text-[#16602a]">
              <Label className="text-2xl" htmlFor="name">School Facilities</Label>
            </div>
            <hr className="border-t border-gray-300"/>
            <div className="flex flex-col py-4 hover:text-[#16602a]">
              <Label className="text-2xl" htmlFor="name">Our Staff</Label>
            </div>
            <Button className="bg-[#16602a] hover:bg-[#16602a] w-full rounded-[10px] text-white">Contact Us</Button>
        
          </div>
      
      </CardContent>
      
    </Card>
      </div>
  
    </section>
    
    <footer className="bg-[#181818]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 lg:container">
            <div className="md:flex md:justify-between">
              
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Get In Touch</h2>
                      <ul className="text-white font-medium">
                          <li className="mb-4">
                              <a href="" className="hover:underline">Naalya Parish, Kira Sub-county Kyadondo Kyaliwajjala – Naalya Rd, Kampala, Uganda</a>
                          </li>
                          <li>
                              <a href="" className="hover:underline">+256 414 240 225</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-white uppercase">School Location</h2>
                      <ul className="text-white font-medium">
                          <li className="mb-4">
                              <a href="" className="hover:underline ">map</a>
                          </li>
                          <li>
                              <a href="" className="hover:underline">map</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Quick Links</h2>
                      <ul className="text-white font-medium">
                          <li className="mb-4">
                              <a href="#" className="hover:underline">Contact Us</a>
                          </li>
                          <li>
                              <a href="#" className="hover:underline">Gallery</a>
                          </li>
                          <li>
                              <a href="#" className="hover:underline">Admissions</a>
                          </li>
                          <li>
                              <a href="#" className="hover:underline">Fees Structure</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Hillside nursery and primary schools – naalya</a>. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                        </svg>
                      <span className="sr-only">Facebook page</span>
                  </a>
                  <a href="#" className="text-white ms-5">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                        </svg>
                      <span className="sr-only">Discord community</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                    </svg>
                      <span className="sr-only">Twitter page</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                      </svg>
                      <span className="sr-only">GitHub account</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                    </svg>
                      <span className="sr-only">Dribbble account</span>
                  </a>
              </div>
          </div>
        </div>
    </footer>
   </main>
  );
}




