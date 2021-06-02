import React from 'react';

class PublicLayout extends React.Component {

    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

export default PublicLayout;