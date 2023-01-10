import React, {useState} from 'react';

import classes from "./Cards.module.scss";
import Header from "../Header";

const Cards = () => {
    const [items, setItems] = useState([{
        id: 1,
        img: 'https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png',
        type: 'settings',
        active: false
    }, {
        id: 2,
        img: 'https://cdn-icons-png.flaticon.com/128/3210/3210551.png',
        type: 'heart',
        active: false
    }, {
        id: 3,
        img: 'https://cdn-icons-png.flaticon.com/128/5812/5812316.png',
        type: 'Earth',
        active: false
    }, {
        id: 4,
        img: 'https://cdn-icons-png.flaticon.com/128/5923/5923633.png',
        type: 'tg',
        active: false
    }, {
        id: 5,
        img: 'https://cdn-icons-png.flaticon.com/512/5600/5600883.png',
        type: 'dollar',
        active: false
    }, {
        id: 6,
        img: 'https://cdn-icons-png.flaticon.com/128/609/609361.png',
        type: 'peoples',
        active: false
    }, {
        id: 7,
        img: 'https://cdn-icons-png.flaticon.com/128/3063/3063822.png',
        type: 'bank',
        active: false
    }, {
        id: 9,
        img: 'https://cdn-icons-png.flaticon.com/128/5046/5046076.png',
        type: 'star',
        active: false
    }, {
        id: 10,
        img: 'https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png',
        type: 'settings',
        active: false
    }, {
        id: 11,
        img: 'https://cdn-icons-png.flaticon.com/128/3210/3210551.png',
        type: 'heart',
        active: false
    }, {
        id: 12,
        img: 'https://cdn-icons-png.flaticon.com/128/5812/5812316.png',
        type: 'Earth',
        active: false
    }, {
        id: 13,
        img: 'https://cdn-icons-png.flaticon.com/128/5923/5923633.png',
        type: 'tg',
        active: false
    }, {
        id: 14,
        img: 'https://cdn-icons-png.flaticon.com/512/5600/5600883.png',
        type: 'dollar',
        active: false
    }, {
        id: 15,
        img: 'https://cdn-icons-png.flaticon.com/128/609/609361.png',
        type: 'peoples',
        active: false
    }, {
        id: 16,
        img: 'https://cdn-icons-png.flaticon.com/128/3063/3063822.png',
        type: 'bank',
        active: false
    }, {
        id: 18,
        img: 'https://cdn-icons-png.flaticon.com/128/5046/5046076.png',
        type: 'star',
        active: false
    },

    ]);
    const [data, setData] = useState({})
    const [start, setStart] = useState(true)

    const startHandle = () => {
        setStart(!start)
        const cards = items.sort(() => Math.random() - 0.5);
        setItems(cards)
    }

    const handleClick = (id, type) => {
        let newItems = [];
        if (!data.type) {
            setData(items.find(item => item.id === id));

            newItems = items.map(item => {
                if (item.id === id) {
                    return {...item, active: !item.active}
                }
                return item;
            })
        } else {
            if (data.id === id) {

                newItems = items.map(item => {
                    if (item.id === id) {
                        return {...item, active: false}
                    }
                    return item;
                });
                setData({})
            } else {
                if (data.type === type) {
                    setTimeout(function () {
                        setItems(items.filter(item => item.type !== type))
                    }, 500);

                    newItems = items.map(item => {
                        if (item.type === type) {
                            return {...item, active: true}
                        }
                        return item;
                    });
                } else {
                    newItems = items.map(item => {
                        if (item.id === id) {
                            return {...item, active: true}
                        }
                        return item;
                    });
                    setTimeout(function () {
                        setItems(items.map(item => {
                            if (item.id === id || item.type === data.type) {
                                return {...item, active: false}
                            }
                            return item
                        }))
                    }, 500)
                }
                setData({});
            }
        }
        setItems(newItems);
    }


    if (start) {
        return <div className={classes.startButton} onClick={startHandle}>Lets start the game</div>
    }

    return (
        <div className={classes.wrapper}>
            <Header items={items}/>
            <div className={classes.cards}>
                {items.map((card) => (
                    <div className={classes.card} onClick={() => handleClick(card.id, card.type)}>
                        {card.active ? (<div key={card.id} className={classes.image} id={card.type}>
                            <img src={card.img} alt=''/>
                        </div>) : <div key={card.id} className={classes.disabled}></div>}
                    </div>))
                }
            </div>
        </div>);
};

export default Cards;