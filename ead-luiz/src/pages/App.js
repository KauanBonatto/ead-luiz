import React from 'react';
import '../styles/global.css';
import '../styles/global-responsive.css';
import AvatarGroup from '../assets/avatar-group.png';
import whoAmI from '../assets/whoAmI.png';

// ICONS
import ScrollDownIcon from '../assets/scroll-down-icon.png';
import ConfigIcon from '../assets/icons/config.png';
import CoinsIcon from '../assets/icons/coins.png';
import LockOpenIcon from '../assets/icons/lockOpen.png';
import PaintBrushHouseIcon from '../assets/icons/paintBrushHousehold.png';
import BrainIcon from '../assets/icons/brain.png';
import DolarIcon from '../assets/icons/dolar.png';
import AtomIcon from '../assets/icons/atom.png';
import GroupIcon from '../assets/icons/group.png';
import ScaleIcon from '../assets/icons/scale.png';
import SingInDialog from '../components/SingInDialog';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="app">
      <section className="home-section">
        <div className="home-wrapper flex">
          <div className="home-text-wrapper">
            <div className="flex home-title-wrapper">
            <h4>Agora você pode dar um upgrade no seu Curso</h4>
              <div>
                <div className="flex vertical-center" style={{ gap: 12 }}>
                  <h1 className="home-title"><b>Análise</b></h1>
                  <h1 className="home-title">de</h1>
                  <div className="box-yellow"></div>
                </div>
                <h1 className="home-title"><b className="home-title-big">Curso online</b></h1>
              </div>
            </div>

            <div className='flex vertical-center'>
              <img src={AvatarGroup} />
              <h5 className="home-text m-big"> 
                <span className="text-yellow">Diversas pessoas já tiveram seus cursos </span>
                intensificados.
              </h5>
            </div>

            <div className="home-text uppercase">
              <h6>Vagas para <strong>jan e fev/2023</strong></h6>
            </div>

            <div className="sign-in-wrapper">
              <button className="sign-in uppercase" onClick={() => setOpen(true)}>Garanta sua vaga</button>
            </div>

            <div className="scroll-down-wrapper flex">
              <div className="scroll-down flex all-center">
                <img src={ScrollDownIcon} />
              </div>
              Arraste para baixo
            </div>

          </div>
          <div className="home-image-wrapper no-display-lg"></div>
        </div>
      </section>
      <section className="for-you-section bg-yellow">
        <div className="for-you-wrapper">
          <div className="for-you-title-wrapper">
            <h1 className="for-you-title">Essa análise é para você que</h1>
          </div>
          <div className="for-you-cards-wrapper">
            <div className="box">
              <div className="for-you-card flex fx-direction-column">
                <div className="icon flex all-center">
                  <img src={ConfigIcon} />
                </div>
                <p>Lançou seu curso, mas acha que ele é monótono e pouco criativo</p>
              </div>
              <div className="for-you-card flex fx-direction-column">
                <div className="icon all-center">
                  <div className="icon flex all-center">
                    <img src={PaintBrushHouseIcon} />
                  </div>
                </div>
                <p>Quer repaginar seu curso com mais recursos tecnológicos e criativos</p>
              </div>
            </div>
            <div className="box">
              <div className="for-you-card flex fx-direction-column">
                <div className="icon all-center">
                  <div className="icon flex all-center">
                    <img src={LockOpenIcon} />
                  </div>
                </div>
                <p>Está seguro quanto ao conteúdo que entrega, mas não em relação à forma como disponibiliza o curso</p>
              </div>
              <div className="for-you-card flex fx-direction-column">
                <div className="icon all-center">
                  <div className="icon flex all-center">
                    <img src={CoinsIcon} />
                  </div>
                </div>
                <p>Quer aumentar o valor agregado do curso melhorando a experiência do aluno</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="if-you-want-section bg-gray">
        <div className="if-you-want-wrapper flex fx-direction-row">
          <div className="if-you-want-title-wrapper">
            <h1 className="if-you-want-title">Se <br className="no-display-sm" /><b>você</b><br className="no-display-sm" /> quer...</h1>
          </div>
          <div className="if-you-want-cards-wrapper">
            <div className="if-you-want-card flex fx-direction-column">
              <div className="icon all-center">
                <div className="icon flex all-center">
                  <img src={ScaleIcon} />
                </div>
              </div>
              <p>Elevar seu curso a um outro patamar</p>
            </div>

            <div className="if-you-want-card flex fx-direction-column">
              <div className="icon all-center">
                <div className="icon flex all-center">
                  <img src={GroupIcon} />
                </div>
              </div>
              <p>Ser um expert recomendado por todos os alunos que tiver</p>
            </div>

            <div className="if-you-want-card flex fx-direction-column">
              <div className="icon all-center">
                <div className="icon flex all-center">
                  <img src={AtomIcon} />
                </div>
              </div>
              <p>Desenvolver suas habilidades como multiplicador</p>
            </div>

            <div className="if-you-want-card flex fx-direction-column">
              <div className="icon all-center">
                <div className="icon flex all-center">
                  <img src={DolarIcon} />
                </div>
              </div>
              <p>Aumentar o valor agregado e, consequentemente, o...</p>
            </div>

            <div className="if-you-want-card flex fx-direction-column">
              <div className="icon all-center">
                <div className="icon flex all-center">
                  <img src={BrainIcon} />
                </div>
              </div>
              <p>Pensar em novos projetos com um novo mindset</p>
            </div>

            <div className="sign-in-wrapper" style={{ width: '90%' }}>
              <button className="sign-in uppercase" onClick={() => setOpen(true)}>Garanta sua vaga</button>
            </div>
          </div>
        </div>
      </section>
      <section className="who-am-i-section">
        <div className="who-am-i-wrapper">
          <div className="who-am-i-image-wrapper">
            <img className="who-am-i-image" src={whoAmI} />
          </div>
          <div className="who-am-i-text-wrapper">
            <h1 className="who-am-i-title">Quem sou eu?</h1>
            <p className="who-am-i-text">
              Trabalho na criação de cursos online há mais de 15 anos. 
              Formado em Comunicação, entrei nessa área para a transmissão de aulas 
              ao vivo, num estúdio audiovisual. Mas minha paixão pela área da educação 
              foi me guiando para outros horizontes, até que com o passar do tempo e 
              outras experiências, me vi como gerente de projetos educacionais.
              <br/><br/>
              Já criei, implementei gerenciei cursos de diversas áreas, 
              como Direito, Linguística, Saúde, beleza, artesanato, psicanálise... 
              Sempre buscando alinhar a estratégia dos meus clientes com as 
              necessidades de seus alunos, criando cursos que transformaram a vida dos 
              cursistas.
            </p>
          </div>
        </div>
      </section>
      <section className="about-me-section bg-yellow">
        <div className="about-me-wrapper">
          <div className="about-me-cards-wrapper">
            <div className="about-me-title-wrapper">
              <h1 className="about-me-title">O que falam sobre mim</h1>
            </div>
          
            <div className="about-me-card">
              <p className="about-me-text">
                “O Luiz é um profissional que se
                atualiza o tempo todo, não se
                satisfaz com o que já sabe,
                sempre quer buscar mais
                conhecimento.”
              </p>
              <p className="about-me-footer">
                Karina Meyer – Grupo <br />
                Bandeirantes de Comunicação
              </p>
            </div>
          </div>

          <div className="about-me-cards-wrapper">
            <div className="about-me-card">
              <p className="about-me-text">
                É um trabalho muito sério, muito incrível, com resultados bárbaros. 
                Todos os alunos nos parabenizam pelo curso. 
                Nós criamos um vínculo com a EAD PRA VOCÊ, o Luiz é muito parceiro.
              </p>
              <p className="about-me-footer">
                Solange Belchior – Ibrape <br />
                Instituto
              </p>
            </div>

            <div className="about-me-card">
              <p className="about-me-text">
                “Confiança não se pede, se conquista e tenho plena confiança no trabalho
                do Luiz. Ele soube captar muito bem a necessidade e a especificidade
                do nosso trabalho.”
              </p>
              <p className="about-me-footer">
                André Antunes – <br />
                Clin-A
              </p>
            </div>
          </div>
        </div>
        <div className="about-me-wrapper-footer"></div>
      </section>
      <section className="footer-section">
        <div className="sign-in-wrapper" style={{ width: '30%' }}>
          <button className="sign-in uppercase" onClick={() => setOpen(true)}>Inscreva-se</button>
        </div>
      </section>

      <SingInDialog open={open} setOpen={setOpen} />
    </section>
  );
}

export default App;
