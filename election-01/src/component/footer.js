import react from "react";
import Logo from '..//images/logo-img.png.svg'

import './footer.css'

function FooterPage(){
    return(
        <>

        <div>
            <div className="footer-wrapper bg-dark text-primary">
                <div className="Container-page d-flex justify-content-around">
                <div className="electian-foot">
                    <h2><img src={Logo} alt="logo" width={"150px"} /></h2>
                    <p className="text-light">Lorem Ipsum has been the industry's
                        <br /> standard dummy text ever since the 
                        <br /> 1500s, make specimen book.</p>
                    <ul className="social-icon d-flex gap-4">
                        <li><a href="f"><i class="fa-brands fa-square-facebook"></i></a></li>
                        <li><a href="T"><i class="fa-brands fa-square-twitter"></i></a></li>  
                        <li><a href="I"><i class="fa-brands fa-square-instagram"></i></a></li>
                        <li><a href="G"><i class="fa-brands fa-square-google-plus"></i></a></li>
                    </ul>
                </div>

                <div className="links-nav">
                    <h3 className="">quick links:</h3>
                    <ul>
                        <li>Home</li>
                        <li>Blog Post</li>
                        <li>Donate</li>
                        <li>Members</li>
                        <li>Events</li>
                    </ul>
                </div>

                <div className="contact-us">
                    <h3>CONTACT US</h3>
                    <ul>
                        <li><i class="fa-solid fa-location-dot"></i>68, Belsion Town 2365 <br /> <span className="num-span">Fna city, LH 3656,USA</span></li>
                        <li><i class="fa-solid fa-phone-volume"></i>+8(123) 123 6456544 <br /> <span className="num-span">+8(123) 123 6456544</span></li>
                        <li><i class="fa-regular fa-envelope"></i>election@gmail.com</li>
                    </ul>
                </div>

                <div className="sletter">
                    <h3>NEWSLETTER:</h3>
                    <p>Lorem Ipsum has been the industry <br /> standard text ever since the printer took.</p>
                    
                    <div class="mb-3">
                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                    </div>

                </div>
                </div>
                 <hr />
                 <div className="copyright text-center text-light">
                    <p>Copyright © 2023 Electian by wpOceans.All Rights Reserved.</p>
                 </div>
            </div>
        </div>
        
        </>
    )
}

export default FooterPage;