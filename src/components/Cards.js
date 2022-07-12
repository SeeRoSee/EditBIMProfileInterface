import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Beispiele für BIM-Profile</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/plan.jpg'
                            text='Betreiberverantwortung'
                            label='Beispiel'
                            path='/bearbeiten'
                        />
                        <CardItem
                            src='images/plan.jpg'
                            text='Ersatzbeschaffung'
                            label='Beispiel'
                            path='/bearbeiten'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/plan.jpg'
                            text='TGM - Ausschreibung Wartung'
                            label='Beispiel'
                            path='/bearbeiten'
                        />
                        <CardItem
                            src='images/plan.jpg'
                            text='IGM - Ausschreibung (Glas, Grünflächen, Winterdienste)'
                            label='Beispiel'
                            path='/bearbeiten'
                        />
                        <CardItem
                            src='images/plan.jpg'
                            text='Energiemanagement'
                            label='Beispiel'
                            path='/bearbeiten'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
