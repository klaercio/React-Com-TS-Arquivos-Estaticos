import filtros from './filtros.json';
import style from './Filtros.module.scss';
import classNames from 'classnames';

type Iopcao = typeof filtros[0];

interface FiltroProps {
    filtro : number | null;
    setFiltro : React.Dispatch<React.SetStateAction<number | null>>;

}

export default function Filtros({filtro, setFiltro} : FiltroProps) {

    function selecionarFiltro(opcao: Iopcao) {
        if (filtro == opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);
    }

    return <div className={style.filtros}>
        {filtros.map((opcao) => 
            <button key={opcao.id} onClick={()=> selecionarFiltro(opcao)} className={/* ` ${style.filtros__filtro} ${filtro === opcao.id ? style['filtros__filtro--ativo']: ""}` */ 
            classNames({
                [style.filtros__filtro] : true,
                [style['filtros__filtro--ativo']] : filtro === opcao.id
            })}>
                {opcao.label}
            </button>
        )}
    </div>
}