import React from 'react';

export const Counter = ({ name }) => {
    const [pressedTimes, setPressedTimes] = React.useState(0);
    return (
        <div className="counter">
            <div className='greetings'>Привет, {name}!</div>
            <div className='message'>Вы нажали {pressedTimes} раз</div>
            {pressedTimes >= 3 && <div className='notification'>Кликов больше 2!</div>}
            <button onClick={() => setPressedTimes(prevTimes => prevTimes + 1)}></button>
        </div>
    );
};


