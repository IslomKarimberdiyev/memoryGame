import React, {useEffect, useState} from 'react';

import classes from './Header.module.scss'

const Header = ({items}) => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [endGame, setEndGame] = useState(false)

    useEffect(() => {
        setTimeout(function () {
            if (!endGame) {
                setSeconds(seconds + 1)
            }
        }, 1000);
    },[seconds])

    function stopwatch(seconds) {
        if (seconds === 60) {
            setMinutes(minutes + 1)
            setSeconds(0)
        }
    }

    useEffect(() => {
        stopwatch(seconds);
    }, [seconds]);

    useEffect(() => {
        if (!items.length) {
            setEndGame(true)
        }

    }, [items.length]);

    return (
        <div className={classes.wrapper}>
            {endGame ? <>
                <div className={classes.title}>Good Job</div>
                <div className={classes.time}>Your time is: {minutes}: {seconds < 10 ? <div>0{seconds}</div> :
                    <div>{seconds}</div>}
                </div>
            </> : <>
                <div className={classes.title}>Good luck</div>
                <div className={classes.time}>Time: {minutes}: {seconds < 10 ? <div>0{seconds}</div> :
                    <div>{seconds}</div>}
                </div>
            </>
            }
        </div>
    );
};

export default Header;