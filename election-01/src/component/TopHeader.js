import './TopHeader.css'

function TopHeader(){
    return(
        <div className="container-tophead d-flex justify-content-between align-items-center">

            {/* Left Side */}
            <div className="contact-tophead">
                <ul className="contact-div d-flex">
                    <li><i className="fa-solid fa-phone"></i><span> Call Us:</span> 688978476</li>
                    <li><i className="fa-regular fa-envelope"></i> demo@gmail.com</li>
                    <li><i className="fa-solid fa-location-dot"></i> 45 Dream Street</li>
                </ul>
            </div>

            {/* Right Side */}
            <div className="Social-Contant">
                <ul className='Social-div d-flex'>
                    <li className="label">Social Address :</li>
                    <li><i className="fa-brands fa-facebook-f"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-google-plus-g"></i></li>
                </ul>
            </div>

        </div>
    )
}

export default TopHeader;
