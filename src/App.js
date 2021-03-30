import './styles/global.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Page404 } from './pages/Page404';
import { Page500 } from './pages/Page500';
import { PageContent } from './pages/PageContent';

export function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/page404" name="Page 404" component={Page404} />
            <Route exact path="/page500" name="Page 500" component={Page500} />
            <Route path="/" name="Home" component={PageContent} />
         </Switch>
      </BrowserRouter>
   );
}
