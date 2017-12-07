import React from 'react';
import Content from './Content';
import Header from './Header'

class Container extends React.Component {

    render() {
        return(
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="Chat room"/>
                    <Content Activities={this.props.Activities}/>
                </div>
            </div>
        )
    }
}
export default Container;