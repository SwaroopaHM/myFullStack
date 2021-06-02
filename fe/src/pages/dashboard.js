import React from 'react';
import axios from 'axios';
import userImage from '../assets/images/user.png';

import Navigation from '../components/navigation';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            loading: false
        }
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = async () => {
        await this.setState({
            loading: true
        })
        const url = 'http://localhost:8080/detail/user/' + localStorage.getItem("userId");
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
        try {
            const response = await axios.get(url, { headers })
            await this.setState({
                user: response.data.user,
                loading: false
            })
        } catch (err) {
            await this.setState({
                loading: false
            })
            console.log(err.response)
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
                                {this.state.loading ?
                                    <>
                                        Loading
                                    </> :
                                    <>
                                        <div className="main-content-header">
                                            <div>
                                                <img src={userImage} alt="" height="100px" width="100px" />
                                            </div>
                                            <div className="main-content-header-text">
                                                <h2>Welcome {this.state.user.name}</h2>
                                                <p>Last login</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <h3 className="main-content-description-header">Account Balance: $30</h3>
                                            <table id="description-table">
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Description</th>
                                                    <th>Amount</th>
                                                </tr>
                                                <tr>
                                                    <td>date</td>
                                                    <td>description</td>
                                                    <td>amount</td>
                                                </tr>
                                            </table>
                                            <hr />
                                            <div className="dashboard-description-footer">
                                            <div>
                                                <h3>Subscribe to alerts</h3>
                                                <ul>
                                                    <li>1</li>
                                                    <li>2</li>
                                                    <li>3</li>
                                                </ul>
                                                </div>
                                                <div>
                                                <h2>Tow way data biding</h2>
                                                <input className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Dashboard;