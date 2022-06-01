import cardapio from 'data/itens.json';
import style from './Inicio.module.scss';
import styleTema from 'styles/Tema.module.scss'; 
import nossaCasa from 'assets/nossa_casa.png';

export default function Inicio() {

    let pratosRecomendados = [...cardapio];

    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

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
                        <button className={style.recomendado__botao}>
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