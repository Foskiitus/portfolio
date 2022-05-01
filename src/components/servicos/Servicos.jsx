import "./servicos.scss"

export default function Servicos(params) {
    return (

        <div className="servicos">
            <div className="container">
                <div className="col left">
                    <h5>Rigor e Qualidade</h5>
                    <h2>Serviços que acrescentam valor à sua marca</h2>
                    <button>
                        <span className="text">Conheça os nossos serviços</span>
                        <div className="icon-container">
                            <div className="icon icon--left">
                                <svg>
                                    <use xlinkHref="#arrow-right"></use>
                                </svg>
                            </div>
                            <div className="icon icon--right">
                                <svg>

                                    <use xlinkHref="#arrow-right-only"></use>
                                </svg>

                            </div>
                        </div>
                    </button>
                </div>
                <div className="col col2">
                    <div className="card">
                        <h3>1. Branding</h3>
                        <p>Criamos a imagem da sua empresa, desde o logotipo, economato ou outro elemento à sua medida.</p>
                    </div>
                    <div className="card">
                        <h3>2. Web</h3>
                        <p>Personificamos a ideia do seu projecto com a apresentação de um design único e um website moderno.</p>
                    </div>
                </div>
                <div className="col col2">
                    <div className="card">
                        <h3>3. Mobile</h3>
                        <p>Desenvolvimento de aplicações nativas para os sistemas Android e iOS. O seu negócio ao alcance de todos.</p>
                    </div>
                    <div className="card">
                        <h3>4. Marketing</h3>
                        <p>A presença do seu negócio no mundo digital necessita de uma estratégia de comunicação delineada e cuidada.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
