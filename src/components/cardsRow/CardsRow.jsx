import { FaPencilRuler } from "react-icons/fa";
import { AiOutlineDesktop, AiOutlineMobile } from "react-icons/ai"
import { BsMegaphone } from "react-icons/bs"
import "./cardsRow.scss"

export default function CardsRow(params) {
    return (
        <div className="row cards">
            <div className="card">
                <div className="card-content">

                    <div className="right">
                        <FaPencilRuler />
                    </div>
                    <div className="left">
                        <h3 className="title">Branding</h3>
                        <p className="desc">Pensamos e criamos a imagem da sua empresa</p>
                    </div>

                </div>
            </div>

            <div className="card">
                <div className="card-content">

                    <div className="right">
                        <AiOutlineDesktop />
                    </div>
                    <div className="left">
                        <h3 className="title">Website</h3>
                        <p className="desc">A identidade da sua empresa com elegância</p>
                    </div>

                </div>
            </div>
            <div className="card">
                <div className="card-content">

                    <div className="right">
                        <AiOutlineMobile />
                    </div>
                    <div className="left">
                        <h3 className="title">Mobile</h3>
                        <p className="desc">A ideia do seu negócio ao alcance de todos</p>
                    </div>

                </div>
            </div>

            <div className="card">
                <div className="card-content">

                    <div className="right">
                        <BsMegaphone />
                    </div>
                    <div className="left">
                        <h3 className="title">Marketing</h3>
                        <p className="desc">Ative a pegada digital do seu negócio</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
