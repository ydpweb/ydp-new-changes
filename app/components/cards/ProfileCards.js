import React from "react";
import Image from "next/image";
import venkatesan from '@/public/venkatesan.jpg'
import vasanth from '@/public/vasanth.jpg'
import { IoCallSharp} from "react-icons/io5";

const ProfileCards = () => {
  return (

    <div className="pb-16 pt-10">
        <h2 className="text-gray-900 font-bold text-3xl mb-2 text-center underline underline-offset-8 decoration-4 decoration-red-700">கட்சி உறுப்பினர்</h2>
      <div className="grid sm:grid-cols-2 mt-12 max-sm:max-w-xs mx-auto lg:mx-40">

<div className="h-auto pt-6">
     <div className="max-w-80 mx-auto bg-stone-200 rounded-lg overflow-hidden shadow-sm">
            <div className="px-4 py-6">
                <div className="text-center my-4">
                    
                        <Image src={venkatesan} width={200} alt="profile" className="h-44 w-44 rounded-full  mx-auto my-4"/>
                    <div className="py-2">
                        <h3 className="font-bold text-2xl text-gray-900">R. வெங்கடேசன்</h3>
                        <h6 className="text-gray-700 ">நிறுவனர் & தேசிய தலைவர்</h6>
                        <div className="inline-flex text-green-700 hover:text-green-800 items-center mt-4">
                        <a href="tel:9025228598">
                            
                            <p className="inline-flex">
                                <IoCallSharp className="mr-1 mt-0.2 text-lg"/>
                                +91 902 522 8598
                            </p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</div>

<div className="h-auto pt-6">
     <div className="max-w-80 mx-auto bg-stone-200 rounded-lg overflow-hidden shadow-sm">
            <div className="px-4 py-6">
                <div className="text-center my-4">
                    
                        <Image src={vasanth} width={200} alt="profile" className="h-44 w-44 rounded-full  mx-auto my-4"/>
                    <div className="py-2">
                        <h3 className="font-bold text-2xl text-gray-900">V. வசந்த் குமார்
                        </h3>
                        <h6 className="text-gray-700 ">தேசிய பொதுச் செயலாளர்</h6>
                        <div className="inline-flex text-green-700 hover:text-green-800 items-center mt-4">
                        <a href="tel:7667385578">
                            
                            <p className="inline-flex">
                                <IoCallSharp className="mr-1 mt-0.2 text-lg"/>
                                +91 766 738 5578
                            </p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</div>

      </div>
      </div>
  );
};

export default ProfileCards;
