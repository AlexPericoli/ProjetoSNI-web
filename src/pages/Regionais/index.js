import PageTitle from '../../components/PageTitle';
import { CardRegional } from '../../components/CardRegional';

import { PageContent } from './styles';
import { array as dataRegionais } from '../../services/dataRegiona';

export function Regionais() {
   return (
      <>
         <PageTitle title="Regionais" color="#000" />
         <PageContent>
            {dataRegionais.map((item) => (
               <CardRegional key={item.id} regional={item} />
            ))}
         </PageContent>
      </>
   );
}
