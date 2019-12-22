import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home} from './pages/home'
import Planets from './pages/planets'
import SearchContainer from './pages/search'
import Information from './pages/information'
import Apod from './pages/apod'
import {Navbar} from './components/navbar'


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container pt-4">
                    <Switch>
                        <Route path='/' exact render={() => <Home/>}/>
                        <Route path='/planets' exact render={() => <Planets/>}/>
                        <Route path='/search' exact render={() => <SearchContainer/>}/>
                        <Route path='/apod' exact render={() => <Apod/>}/>
                        <Route path='/planets/:nameId' exact render={() => <Information/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
