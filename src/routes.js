import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Regionais } from './pages/Regionais';
import { AssocLocais } from './pages/AssocLocais';
import { Preletores } from './pages/Preletores';
import { PedidosProdutos } from './pages/PedidosProdutos';
import { EstoqueProdutos } from './pages/EstoqueProdutos';
import { CatalogoProdutos } from './pages/CatalogoProdutos';
import { VendasProdutos } from './pages/VendasProdutos';

export default function Routes() {
   return (
      <>
         <Route path="/PageContent" exact component={Home} />
         <Route path="/assoc_locais/:id" component={AssocLocais} />
         <Route path="/regionais" component={Regionais} />
         <Route path="/preletores" component={Preletores} />
         <Route path="/pedidos" component={PedidosProdutos} />
         <Route path="/estoque" component={EstoqueProdutos} />
         <Route path="/catalogo" component={CatalogoProdutos} />
         <Route path="/vendas" component={VendasProdutos} />
      </>
   );
}
