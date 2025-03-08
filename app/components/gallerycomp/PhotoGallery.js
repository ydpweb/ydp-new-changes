'use client'

import React, {useState} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Image from "next/image";
import { FaChevronLeft, FaChevronRight,FaTimes } from "react-icons/fa";

import image1 from '@/public/banner/1.jpg'
import image2 from '@/public/banner/2.jpg'
import image3 from '@/public/banner/3.jpg'
import image4 from '@/public/banner/4.jpg'
import image5 from '@/public/banner/5.jpg'
import image6 from '@/public/banner/6.jpg'
import image7 from '@/public/banner/7.jpg'
import image8 from '@/public/banner/8.jpg'
import image9 from '@/public/banner/9.jpg'
import image10 from '@/public/banner/10.jpg'
import image11 from '@/public/banner/11.jpg'
import image12 from '@/public/banner/12.jpg'

const images = [
    image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12
 ]

const PhotoGallery = () => {

    const [data, setData] = useState({img:'', i: 0})

   const viewImage = (img, i) => {
       setData({img,i})
   }

   const imgAction = (action) => {
      let i = data.i;
      if(action === 'nxt-img'){
         setData({img: images[i+1], i: i+1});
      }
      if(action === 'pre-img'){
         setData({img: images[i-1], i: i-1});
      }
      if(!action){
         setData({img:'', i: 0});
      }
   }

  return (
    <div>
        <h1 className="text-gray-900 font-bold text-3xl mb-2 text-center underline underline-offset-8 decoration-4 decoration-red-700">கட்சி புகைப்படங்கள்</h1>

         {data.img &&
         <div style={{
            width:'100%',
            height:'100vh',
            background:'black',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            top:0,
            marginTop: '35px',
         }}>
            <button onClick={()=> imgAction()}
            style={{position:'absolute', top:'50px', right:'150px', color:'white'}}><FaTimes className="text-3xl" /></button>
            <button onClick={()=> imgAction('pre-img')}
               style={{color:'white'}} ><FaChevronLeft className="text-3xl"/></button>
            <Image src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}} alt="slideshow" />
            <button onClick={()=> imgAction('nxt-img')}
               style={{color:'white'}} ><FaChevronRight className="text-3xl"/></button>
         </div>
         }

      <div style={{padding:"20px"}}>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
        <Masonry columnsCount={3} gutter='20px'>

         {images.map((image, i) => (
               <Image key={i}
                src={image}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"
                onClick={()=> viewImage(image,i)}/>

         ))}

         

        </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default PhotoGallery