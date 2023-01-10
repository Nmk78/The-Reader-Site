import React, {useEffect} from "react";

import Aos from "aos";
import 'aos/dist/aos.css'

export default function Participants() {
  useEffect(() =>{
    Aos.init({duration:1500})
  })
  return (

<>
      <p data-aos='zoom-out-up' className="text-xxxl text-bold m-5 mx-auto mt-16">Main Members</p>

      <div class="grid mx-10 mb-2 border border-gray-300 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2">
        <figure data-aos='fade-right' class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-lg md:rounded-lg md:border ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
    
    //header          Very easy this was to integrate
            </h3>
            <p class="my-4 font-light">
    //main paragraph
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
    //url
              class="rounded-full w-9 h-9"
              src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/321115102_1115069889028621_102309157165589400_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pwn784hL3OoAX-meO18&_nc_ht=scontent-sin6-3.xx&oh=00_AfC78XSSdYZi9SJvCyIqXAJ6_p3TsZ5KeJBUJ-WUhLq0qw&oe=63C02695"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>Bonnie Green</div>  
    //name
            </div>
          </figcaption>
        </figure>
    
    {/* //this is sample format */}

        <figure data-aos='fade-left' class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              Very easy this was to integrate
            </h3>
            <p class="my-4 font-light">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>Bonnie Green</div>
              <div class="text-sm font-light text-black ">
                Developer at Open AI
              </div>
            </div>
          </figcaption>
        </figure>
        <figure data-aos='fade-right' class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              Very easy this was to integrate
            </h3>
            <p class="my-4 font-light">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>Bonnie Green</div>
              <div class="text-sm font-light text-black ">
                Developer at Open AI
              </div>
            </div>
          </figcaption>
        </figure>
        <figure data-aos='fade-left' class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              Very easy this was to integrate
            </h3>
            <p class="my-4 font-light">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>Bonnie Green</div>
              <div class="text-sm font-light text-black ">
                Developer at Open AI
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
