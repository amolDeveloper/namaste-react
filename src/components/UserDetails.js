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
            <div className="m-4 p-4 bg-gray-300 rounded-lg shadow-lg">
                <img className="w-32 m-2" src={avatar_url} />
                <h1 className="font-bold">Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Bio: {bio}</h3>
                <h4>Count: {count}</h4>
                <button className="m-1 p-1 text-white font-bold rounded-md bg-green-500 hover:bg-green-700" onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }}>Increase Count</button>
                <button className="m-1 p-1 text-white font-bold rounded-md bg-red-500 hover:bg-red-700" onClick={() => {
                    this.setState({
                        count: count - 1
                    })
                }}>Decrease Count</button>
            </div>
        )
    }
}

export default UserDetails;