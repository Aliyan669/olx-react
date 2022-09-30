import React from 'react';
import './footer.css'

export default function Footer() {
  return (
    <div>
        <div className='banner2'>
            <img src="banner2.png" alt="" />
        </div>
        <div className='concept'>
         <ul className='list'>
         <li className='imp'>POPULAR CATEGORIES</li>
         <li>Cars</li>
         <li>Flats for rent</li>
         <li>Mobile phones</li>
         <li>Jobs</li>
         </ul>
         <ul className='list'>
         <li className='imp'>TRENDING SEARCHES</li>
         <li>Bikes</li>
         <li>Watches</li>
         <li>Books</li>
         <li>Dogs</li>
         </ul>
         <ul className='list'>
         <li className='imp'>ABOUT US</li>
         <li>About EMPG</li>
         <li>OLX Blog</li>
         <li>Contact Us</li>
         <li>OLX for</li>
         <li>Businesses</li>
         </ul>
         <ul className='list'>
         <li className='imp'>OLX</li>
         <li>Help</li>
         <li>Sitemap</li>
         <li>Term of Use</li>
         <li>Privacy Policy</li>
         </ul>
         <ul className='list'>
            <li className='imp'>follw us</li>
            <ul className='none'>
                <li><img src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" alt="" srcset="" /></li>
                <li><img src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" srcset="" /></li>
                <li><img src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" alt="" srcset="" /></li>
            </ul>
         </ul>
        </div>
        <div className='last'>
        Free Classifieds in Pakistan . © 2006-2022 OLX
        </div>
    </div>
  )
}
