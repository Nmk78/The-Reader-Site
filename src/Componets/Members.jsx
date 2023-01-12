import React from 'react'

const Members = (Participant) => {
      console.log('Participant')
      console.log(Participant.name)
  return (
    <>
    <h1>Helo Member</h1>
      {/* {props.articles.Review?.forEach((Participant) => {
            console.log(Participant.name);
            console.log(Participant.Header);
            console.log(Participant.whyDoULike); */}
            
              {/* <figure
                id="toClone"
                data-aos="fade-right"
                class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-lg md:rounded-lg md:border "
              >
                <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
                  <h3 class="text-lg font-semibold text-black">
                  {Participant?.Header}
                  </h3>
                  <p class="my-4 font-light">
                    {Participant?.whyDoULike}
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                  <img
                    //url
                    class="rounded-full w-9 h-9"
                    src={Participant?.URL}
                    alt="profile picture"
                  />
                  <div class="space-y-0.5 font-mediumtext-black text-left">
                    <div>
                      {Participant.name}
                    </div>
                  </div>
                </figcaption>
              </figure>; */}

    </>
  )
}

export default Members