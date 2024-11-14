import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    state = {advice : '' };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        // here we are making the get request
        axios.get('https://api.adviceslip.com/advice').then((resp) => {
            // here as we are using the destructing technique so that the data can be easy to access.
            const { advice } = resp.data.slip;
            console.log(advice);
            this.setState({ advice : advice });
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        const { advice } = this.state;

        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">
                        {advice}
                    </h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>give me advice!</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App;