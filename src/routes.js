import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import StatusBar from "./components/StatusBar/StatusBar";

import Login from "./pages/Login";
import Principal from "./pages/Principal";
import Regionais from "./pages/Regionais";
import AssocLocais from "./pages/AssocLocais";
import Preletores from "./pages/Preletores";

export default function Routes() {
   return (
      <BrowserRouter>
         <StatusBar />
         <TopBar />

         <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/assoc_locais/:id" component={AssocLocais} />
            <Route path="/principal" component={Principal} />
            <Route path="/regionais" component={Regionais} />
            <Route path="/preletores" component={Preletores} />
         </Switch>
      </BrowserRouter>
   );
}
