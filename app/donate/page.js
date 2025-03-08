import React from 'react'
import { IoCallSharp} from "react-icons/io5";

const page = () => {
  return (
    <div className='mt-28'>
       <h2 className="text-gray-900 font-bold text-3xl mb-10 text-center underline underline-offset-8 decoration-4 decoration-red-700">For Donation</h2>
       <p className="text-gray-700 text-justify lg:mx-56 mx-4">Donations to All India Youth Development Party (AIYDP) are fully (100%) exempt from income tax under sections 80GGB (for corporate entities) and 80GGC (for individuals) of the Income Tax Act, 1961. If you have any questions about this, please contact us ( <a href="tel:9025228598" className="inline-flex text-green-700 hover:text-black">
                    <IoCallSharp className="mr-1"/>
                    +91 902-522-8598
                   </a> ).</p>
      <div className="bg-white rounded-3xl mx-4 md:mx-auto max-w-screen-md border-2 border-green-800 mt-20 mb-24">
    <div className="px-8 py-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-medium leading-tight text-gray-800 mb-6">Bank Details</h2>
        <p className="text-base md:text-lg font-normal leading-normal text-gray-800 mb-6">Account Name : All India Youth Development Party<br/>
        A/C No : 38902142101<br/>
        IFSC code: SBIN0000252<br/>
        Branch : Vaniyambadi
        </p>
    </div>
</div>
    </div>
  )
}

export default page