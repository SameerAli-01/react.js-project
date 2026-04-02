import '../component/Home2cardSection.css'


function Home2cardSection(){
    return(
        <>

         <div className="home2-container">

          {/* Card 1 */}
      <div className="home2-card card-blue">
        <div className="icon-circle">
          <i className="fas fa-bullhorn"></i>
        </div>
        <h3>OUR CAMPAIGN</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy of the text ever
          since the scrambled it to make.
        </p>
        <div className="arrow">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>


      
      {/* Card 2 */}
      <div className="home2-card card-green">
        <div className="icon-circle">
          <i className="fas fa-users"></i>
        </div>
        <h3>BECOME A VOLUNTEER</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy of the text ever
          since the scrambled it to make.
        </p>
        <div className="arrow">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>


      
      {/* Card 3 */}
      <div className="home2-card card-red">
        <div className="icon-circle">
          <i className="fas fa-handshake"></i>
        </div>
        <h3>MAKE DONATION</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy of the text ever
          since the scrambled it to make.
        </p>
        <div className="arrow">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>


      </div>

        
        
        </>
    )
}


export default Home2cardSection;