
const OurStory = () => {
  return (
    <div className="OurStory">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h6 className="title">
              <span><img src="./setting.png" alt="" /></span>
              OUR STORY
            </h6>
            <h1>Transforming industries <span>with innovative efficient
              solutions</span></h1>
          </div>

          <div className="col-lg-6 colWrap">
            <img src="./story1.png" alt="" />
            <img src="./story2.png" alt="" />
          </div>
        </div>

        <div className="row rowWrap">
          <div className="col-lg-6 left">
            <img src="./story3.png" alt="" className="" />
          </div>

          <div className="col-lg-6 right">
            <h2>We specialize in revolutionizing industries by delivering innovative, efficient
              solutions that enhance productivity and streamline processes. Through advanced
              technologies, precision engineering, and sustainable practices.</h2>
            <div className="numberWrap">
              <div className="cards">
                <h3>10k+</h3>
                <h4>Completed Project</h4>
              </div>
              <div className="cards">
                <h3>10k+</h3>
                <h4>Completed Project</h4>
              </div>
              <div className="cards">
                <h3>10k+</h3>
                <h4>Completed Project</h4>
              </div>
            </div>

            <div className="personWrap">
              <div className="persons">
                <img src="./person1.png" alt="" />
                <img src="./person2.png" alt="" />
                <img src="./person3.png" alt="" />
              </div>
              <a href="#"><span><img src="./playButton.png" alt="" /></span> Watch Intro</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
