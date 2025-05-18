import { Accordion } from "react-bootstrap"

const FAQ = () => {
    return (
        <div className="FAQ">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            Savollar va javoblar
                        </h6>
                    </div>
                    <div className="col-12">
                        <div className="topWrap">
                            <h1>Ko‘p so‘raladigan <span>savollar</span></h1>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src="./faq.png" alt="" className="w-100" />
                    </div>

                    <div className="col-lg-6">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Qaysi sohalarga xizmat ko‘rsatasiz?</Accordion.Header>
                                <Accordion.Body>
                                    Biz sanoat, ishlab chiqarish, logistika va avtomatlashtirish kabi ko‘plab sohalarda xizmat ko‘rsatamiz. Har bir mijozga moslashtirilgan echimlarni taklif qilamiz.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Mahsulot sifati qanday ta'minlanadi?</Accordion.Header>
                                <Accordion.Body>
                                    Mahsulot sifatini yuqori darajada ta'minlash uchun biz zamonaviy texnologiyalar, qat'iy sifat nazorati tizimlari va xalqaro standartlarga asoslangan ishlab chiqarish jarayonlaridan foydalanamiz.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Yetkazib berish muddati qancha?</Accordion.Header>
                                <Accordion.Body>
                                    Yetkazib berish muddati loyiha murakkabligi va hajmiga qarab belgilanadi. Odatda, biz mijoz bilan kelishilgan muddat ichida mahsulotni yetkazishni ta'minlaymiz.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Hamkorlik qilish jarayoni qanday kechadi?</Accordion.Header>
                                <Accordion.Body>
                                    Dastlab, mijoz bilan ehtiyojlar aniqlanadi. So‘ngra, individual taklif ishlab chiqiladi va texnik yechimlar muhokama qilinadi. Shartnoma asosida loyiha boshlanadi va muntazam aloqa orqali barcha bosqichlar nazorat qilinadi.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
