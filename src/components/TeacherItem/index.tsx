import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/14946830?s=460&u=90b8d7171ac2c20f5d19a2a2745fe0fc5541e201&v=4" alt="Henrique Rezende" />
                <div>
                    <strong>Henrique Rezende</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
      <br /><br />
      Apaixonado por explodir cosias em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
    </p>

            <footer>
                <p>
                    Preço/hora
        <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
            </footer>
        </article>
    );
}

export default TeacherItem;