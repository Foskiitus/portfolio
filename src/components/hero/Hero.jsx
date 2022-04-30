import "./hero.scss"

export default function Hero(params) {

    return (
        <div className="hero">
            <div className="row clearfix">
                <div className="img left">
                    <img src="./assets/tiagomano3.svg" alt="" />
                </div>
                <div className="right">
                    <h5 className="firsttext">ATENÇÃO AO DETALHE</h5>
                    <h2 className="title">Pensamos na sua ideia ou negócio em conjunto.</h2>
                    <p>A nossa equipa conta com uma vasta experiência, que o irá ajudar aprimorar a ideia do seu negócio, com uma análise e definição de mais-valias para o seu projecto. Confie em nós a valorização do seu negócio!</p>
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
            </div>
        </div>
    )
}
