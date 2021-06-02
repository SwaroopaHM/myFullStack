import React from 'react';
import Navigation from '../components/navigation';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: []
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
                                    <div>
                                        Loading
                                    </div> :
                                    <>
                                        <div>
                                            <div className="main-content-header-text">
                                                <h2>About iJavascript</h2>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            IJavascript is a Javascript kernel for the Jupyter notebook. The Jupyter notebook combines the creation of rich-text documents (including equations, graphs and videos) with the execution of code in a number of programming languages. The execution of code is carried out by means of a kernel that implements the Jupyter messaging protocol. The IJavascript kernel executes Javascript code inside a Node.js session. And thus, it behaves as the Node.js REPL does, providing access to the Node.js standard library and to any installed npm modules.
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default About;