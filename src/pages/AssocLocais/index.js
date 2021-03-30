import PageTitle from '../../components/PageTitle';
import { CardAssocLocal } from '../../components/CardAssocLocal';

import { PageContent } from './styles';
import { array as dataAssocLocais } from '../../services/dataAssocLocais';

export function AssocLocais() {
   return (
      <>
         <PageTitle title="Associações Locais" color="#000" />
         <PageContent>
            {dataAssocLocais.map((item) => (
               <CardAssocLocal key={item.id} assoc_local={item} />
            ))}
         </PageContent>
      </>
   );
}
