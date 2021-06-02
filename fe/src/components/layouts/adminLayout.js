import React from "react";
import Navigation from "../Navigation";

class AdminLayout extends React.Component {
  render(props) {
    return (
      <>
        <Navigation />
        <div className="main-content">
          {this.props.children}
        </div>
      </>
    );
  }
}

export default AdminLayout;