
const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-12 zIndex">
            <h1>Excellence innovating <span>industry for today</span></h1>
            <h2>At the heart of our operations is a commitment to delivering superior products through cutting-
              edge technology and innovative processes.</h2>
            <button className="btn myBtn">Explore More</button>
          </div>
          <div className="col-12 bottom zIndex">
            <div className="wrap">
              <span><img src="./verified.png" alt="" /></span>
              <h3>Advanced Manufacturing Solutions</h3>
            </div>
            <div className="wrap">
              <span><img src="./verified.png" alt="" /></span>
              <h3>Advanced Manufacturing Solutions</h3>
            </div>
            <div className="wrap">
              <span><img src="./verified.png" alt="" /></span>
              <h3>Advanced Manufacturing Solutions</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient"></div>
      <div className="bgImage"><img src="./headerBackground.png" alt="" /></div>
    </div>
  )
}

export default Header
