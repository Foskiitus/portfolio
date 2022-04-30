import "./cardsRow.scss"
import { topCardsInfo } from "../../data"

export default function CardsRow(params) {
    return (
        <div className="row cards">
            {topCardsInfo.map((d) => (

                <div className="card" key={d.id}>
                    <div className="card-content">

                        <div className="right">
                            <img src={d.icon} alt="" />
                        </div>
                        <div className="left">
                            <h3 className="title">{d.title}</h3>
                            <p className="desc">{d.desc}</p>
                        </div>

                    </div>
                </div>
            ))}


        </div>
    )
}
