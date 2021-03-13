import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Regionais from "./pages/Regionais";
import AssocLocais from "./pages/AssocLocais";
import Preletores from "./pages/Preletores";

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/assoc_locais/:id" component={AssocLocais} />
            <Route path="/regionais" component={Regionais} />
            <Route path="/preletores" component={Preletores} />
         </Switch>
      </BrowserRouter>
   );
}
