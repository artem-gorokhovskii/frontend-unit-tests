import React from 'react';

export class Counter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { pressedTimes: 0 };
        this.increasePressedTimesBinded = this.increasePressedTimes.bind(this);
    }

    componentDidUpdate(prevProps) { // Только для теста метода жизненного цикла
        // после изменения props.name установим prevProps.name.length в state.pressedTimes
        if (prevProps.name !== this.props.name) {
            this.setState({ pressedTimes: prevProps.name.length });
        }
    }

    increasePressedTimes() {
        this.setState(prevState => ({ pressedTimes: prevState.pressedTimes + 1 }));
    }

    render() {
        return (
            <div className="counter">
                <div className='greetings'>Привет, {this.props.name}!</div>
                <div className='message'>Вы нажали {this.state.pressedTimes} раз</div>
                {this.state.pressedTimes >= 3 && <div className='notification'>Кликов больше 2!</div>}
                <button onClick={this.increasePressedTimesBinded}></button>
            </div>
        );
    }
}

