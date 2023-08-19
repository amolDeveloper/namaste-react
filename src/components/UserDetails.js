import React from "react";

class UserDetails extends React.Component {

    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            count: 0,
            userData: {
                name: 'Vinay Katkam',
                location: 'Bidar',
                bio: 'Carefree attitide works',
                avatar_url: ""
            }
        }
    }

    async componentDidMount() {
        console.log('comp did mount API CALL');
        const data = await fetch("https://api.github.com/users/amolDeveloper");
        const json = await data.json();
        this.setState({
            userData: json
        })
        console.log('after setState');

        this.timer = setInterval(() => {
            // console.log('User Class Timer')
        },1000)
    }

    componentDidUpdate() {
        console.log('comp did update');
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log('comp will unmount');
    }

    render() {
        console.log('render');
        console.log(this.state);
        let {count} = this.state;
        const {name, location, bio, avatar_url} = this.state.userData;
        return (
            <div className="user-details">
                <img src={avatar_url} />
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Bio: {bio}</h3>
                <h4>Count: {count}</h4>
                <button className="increase" onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }}>Increase Count</button>
                <button className="decrease" onClick={() => {
                    this.setState({
                        count: count - 1
                    })
                }}>Decrease Count</button>
            </div>
        )
    }
}

export default UserDetails;