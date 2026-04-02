import "../homepage4/Home4.css"
import heroImg from "../../images/Home4image.png"; 

const Home4 = () => {
  return (
    
    <div className="home4">
      <div className="home4-container">
        
        {/* LEFT CONTENT */}
        <div className="home4-content">
          <h1> PEACE IS IMPORTANT, NOT WAR.</h1>

          <p>
            Lorem Ipsum has been the industry's standard dummy text ever
            since the scrambled it to make.
          </p>

          <button className="home4-btn">
           <span>JOIN THE CAMPAIGN</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="home4-image">
          <img src={heroImg} alt="leader" />
        </div>

      </div>
    </div>
   
  );
};

export default Home4;
