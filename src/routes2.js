import { Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Regionais } from './pages/Regionais';
import { AssocLocais } from './pages/AssocLocais';
import { Preletores } from './pages/Preletores';
import { PedidosProdutos } from './pages/PedidosProdutos';
import { VendasProdutos } from './pages/VendasProdutos';

export default function Routes() {
   return (
      <>
         <Route path="/" exact component={Main} />
         <Route path="/assoc_locais/:id" component={AssocLocais} />
         <Route path="/regionais" component={Regionais} />
         <Route path="/preletores" component={Preletores} />
         <Route path="/pedidos" component={PedidosProdutos} />
         <Route path="/vendas" component={VendasProdutos} />
      </>
   );
}
