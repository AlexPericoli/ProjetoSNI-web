import P from 'prop-types';
import { FormBusca, InputBusca, BotaoBusca, FiltroCategoria } from './styles';

import { AiOutlineSearch } from 'react-icons/ai';

AreaBuscaPedidos.propTypes = {
   categoria: P.number,
   categorias: P.array,
   changeCategoria: P.func,
};

export function AreaBuscaPedidos({ categoria, categorias, changeCategoria }) {
   return (
      <FormBusca method="POST">
         <InputBusca type="text" name="busca" placeholder="Busca..." />
         <BotaoBusca type="submit">
            <AiOutlineSearch color="#000" size={30} />
         </BotaoBusca>
         <FiltroCategoria onChange={(e) => changeCategoria(e.target.value)}>
            <option value="0">Seleciona a categoria</option>
            {categorias.map((item, index) => (
               <option
                  key={index}
                  value={item.id}
                  defaultValue={item.id === categoria ? 'selected' : ''}
               >
                  {item.descricao}
               </option>
            ))}
         </FiltroCategoria>
      </FormBusca>
   );
}
