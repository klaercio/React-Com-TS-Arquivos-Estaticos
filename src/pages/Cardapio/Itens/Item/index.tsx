import logo from 'assets/logo.svg';
import style from './Item.module.scss'

export default function Item() {
    return (
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img src={logo} alt="imagem" />
            </div>
            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2> Macarrão</h2>
                    <p> Descrição do Macarrão</p>
                </div>
                <div className={style.item__tags}>
                    <div className={style.item__tipo}>
                        Massa
                    </div>
                    <div className={style.item__porcao}>
                        400G
                    </div>
                    <div className={style.item__qtdpessoas}>
                        Serve 2 pessoas
                    </div>
                    <div className={style.item__valor}>
                        R$ 50
                    </div>
                </div>
            </div>
        </div>
    )
}