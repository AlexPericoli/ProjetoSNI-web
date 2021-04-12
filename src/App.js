import './styles/global.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import { Preload } from './pages/Preload';
import { PageContent } from './pages/PageContent';
import { SignIn } from './pages/SignIn';

const store = createStore(reducers);

export function App() {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <Switch>
               <Route path="/" exact name="Preload" component={Preload} />
               <Route
                  path="/pagecontent"
                  exact
                  name="PageContent"
                  component={PageContent}
               />
               <Route path="/signin" exact name="SignIn" component={SignIn} />
            </Switch>
         </BrowserRouter>
      </Provider>
   );
}
