import React from 'react';
import axios from 'axios';
import Avatar from 'react-avatar';
import Navigation from '../components/navigation';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = async () => {
        await this.setState({
            loading: true
        })
        const url = 'http://localhost:8080/detail/users';
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
        try {
            const response = await axios.get(url, { headers })
            console.log(response)
            await this.setState({
                users: response.data.users,
                loading: false
            })
        }
        catch (err) {
            console.log(err.response)
            await this.setState({
                loading: false
            })
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="header">
                        iJavascript
                </div>
                    <div className="row">
                        <Navigation />
                        <div class="column2">
                            <div className="main-content">
                                {this.state.loader ?
                                    <div>
                                        Loading
                                    </div> :
                                    <>
                                        <div>
                                            <div className="main-content-header-text">
                                                <h2>Meet the Team</h2>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <ul style={{ listStyle: 'none' }}>
                                                {this.state.users.map((user, index) => {
                                                    return <li key={user.userId} className="list-item">
                                                        <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} round={true} size="50" name={user.name} />
                                                        <div className="list-item-name">
                                                        {user.name}
                                                        </div>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>)
    }
}

export default Team;