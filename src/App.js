import React from 'react';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Search from './components/Search/Search'
import Posts from './components/Posts/Posts';
import Navigation from './components/Navigation/Navigation';
import Single from './components/Single/Single';
import Result from './components/Result/Result'
import Tag from './components/Tag/Tag';

function App() {
  return (
    <div className="App">
        <Router>

            <Navigation/>

          <main>
            <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/search" component={Search}/>
                  <Route exact path="/blog" component={Posts}/>
                  <Route path="/blog/:id" component={Single}/>
                  <Route path="/result" component={Result}/>
                  
                  <Route path="/tag/:id" component={Tag}/>
            </Switch>
          </main>

        </Router>
    </div>
  );
}

export default App;
