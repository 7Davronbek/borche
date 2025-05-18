
const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-12 zIndex">
            <h1>Zamonaviy sanoat uchun <span>innovatsion yechimlar</span></h1>
            <h2>Bizning faoliyatimiz markazida ilg‘or texnologiyalar va yuqori sifatli mahsulotlar orqali mijozlarimizga ishonchli echimlar taqdim etish turadi.</h2>
            <button className="btn myBtn">Explore More</button>
          </div>
            <div className="col-12 bottom zIndex">
              <div className="wrap">
                <span><img src="./verified.png" alt="" /></span>
                <h3>Energiya tejamkor texnologiyalar</h3>
              </div>
              <div className="wrap">
                <span><img src="./verified.png" alt="" /></span>
                <h3>Yuqori aniqlikdagi quyish tizimi</h3>
              </div>
              <div className="wrap">
                <span><img src="./verified.png" alt="" /></span>
                <h3>Global sifat standartlariga mos</h3>
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
