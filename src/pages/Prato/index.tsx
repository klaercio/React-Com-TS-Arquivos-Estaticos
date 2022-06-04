import style from './Prato.module.scss';
import { useLocation, useParams, useNavigate} from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'data/itens.json';
import NotFound from 'pages/NotFound/Index';
import Header from 'components/Header';

export default function Prato() {
    const { id } = useParams();
    const navigate = useNavigate();
    const prato = cardapio.find(item => item.id === Number(id));

    if (!prato) {
        return <NotFound/>;
    }

    return (
        <Header>
            <button className={style.voltar} onClick={() => navigate(-1)}>{'< Voltar'}</button>
            <section className={style.container}>
                <h1 className={style.titulo}>
                    {prato.title}
                </h1>
                <div className={style.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={style.conteudo}>
                    <p className={style.conteudo__descricao}>
                        {prato.description}
                    </p>
                    <div className={style.tags}>
                        <div className={classNames({
                            [style.tags__tipo] : true,
                            [style[`tags__tipo__${prato.category.label.toLowerCase()}`]] : true,
                        })}>
                            {prato.category.label}
                        </div>
                        <div className={style.tags__porcao}>
                            {prato.size}g
                        </div>
                        <div className={style.tags__qtdpessoas}>
                            Serve {prato.serving} pessoa{prato.serving === 1 ? '' : 's'}
                        </div>
                        <div className={style.tags__valor}>
                           R$ {prato.price.toFixed(2)}
                        </div>
                    </div>
                </div>
            </section>
        </Header>
    );
}