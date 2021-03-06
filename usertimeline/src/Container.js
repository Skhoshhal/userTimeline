import React from 'react';
import Content from './Content';
import Header from './Header'

class App extends React.Component {
    render() {
        return(
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="Chat room"/>
                    <Content/>
                </div>
            </div>
        )
    }
}
export default App;