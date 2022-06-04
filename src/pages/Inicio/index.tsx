import cardapio from 'data/itens.json';
import style from './Inicio.module.scss';
import styleTema from 'styles/Tema.module.scss'; 
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export default function Inicio() {

    let pratosRecomendados = [...cardapio];
    const navigate = useNavigate();
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

    function redirecionarParaDetalhes(prato: typeof cardapio[0]) {
        navigate(`/prato/${prato.id}`, {state : {prato}});
    };

    return(
        <section>
            <h3 className={styleTema.titulo}>
                Recomendações da cozinha
            </h3>
            <div className={style.recomendados}>
                {pratosRecomendados.map( item => (
                    <div key={item.id} className={style.recomendado}>
                        <div className={style.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button 
                            className={style.recomendado__botao} 
                            onClick={()=>redirecionarParaDetalhes(item)}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={styleTema.titulo}> Nossa casa</h3>
            <div className={style.nossaCasa}>
                <img src={nossaCasa} alt="Casa do aluroni" />
                <div className={style.nossaCasa__endereco}>
                    Rua vergueiro, 3185<br/><br/> Vila Mariana SP.
                </div>
            </div>
        </section>
    );
}