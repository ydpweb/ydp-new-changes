import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const ContactPage = () => {
  return (
    <section className="bg-gray-100 pt-10">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-gray-900 font-bold text-3xl mb-2 text-center underline underline-offset-8 decoration-4 decoration-red-700">தொடர்பு விவரங்கள்</h2>
        </div>
        <div className="mt-16 lg:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.933106613715!2d78.71511317789557!3d12.782854015903137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad08e665559619%3A0x62d25548c4536e3b!2sAmbur%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1741037327007!5m2!1sen!2sin"
                        width="100%" height="480" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                       
                        <div className="px-6 py-4">
                        <h2 className="text-lg mb-4 text-gray-900">ADDRESS:</h2>
            <address className="text-gray-600">
            <p className='not-italic inline-flex' >All India Youth Development Party - Head office No: 4/286, Kallipuram vattam, Vellakuttai village, Vaniyambadi (Tk), Tirupattur(Dt), Tamilnadu - 635752.</p>
            </address>
                        </div>

                        <div className="border-t border-gray-300 px-6 py-4">
                            <h2 className="text-lg mb-4 text-gray-900">CONTACT</h2>
                            <p className="mt-1 text-gray-600">Phone:  +91 902 522 8598</p>
                            <p className="mt-1 text-gray-600">Email:  aiydpambur@gmail.com</p>
                        </div> 

                        <div className="border-t border-gray-300 px-6 py-4">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">SOCIAL MEDIA</h2>
                            <div className="lg:flex lg:items-center mb-5">
                                        <ul className="flex space-x-6">
                                          <li>
                                            <a href="https://www.facebook.com/tamalaiydprvenkatesan.tamalaiydprvenkatesan?mibextid=ZbWKwL" target="_blank">
                                            <FaFacebookSquare className="text-2xl text-gray-600 hover:text-sky-500"/>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://www.instagram.com/aiydpleader?igsh=eXUzMTg1eTE1eHN2" target="_blank">
                                              <FaInstagram className="text-2xl text-gray-600 hover:text-fuchsia-500"/>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://wa.me/919025228598" target="_blank">
                                              <SiWhatsapp className="text-2xl text-gray-600 hover:text-lime-400"/>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactPage