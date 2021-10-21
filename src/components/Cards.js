import React from 'react'
import Carditem from './Carditem'
import './Card.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Checkout these epic destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"vices
                            label="Adventure"
                            path="/ser"
                        />
                        <Carditem
                            src="images/img-2.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"vices
                            label="Adventure"
                            path="/ser"
                        />
                    </ul>
                     <ul className="cards__items">
                        <Carditem
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"vices
                            label="Adventure"
                            path="/ser"
                        />
                        <Carditem
                            src="images/img-2.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"vices
                            label="Adventure"
                            path="/ser"
                        />
                        <Carditem
                            src="images/img-2.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"vices
                            label="Adventure"
                            path="/ser"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
