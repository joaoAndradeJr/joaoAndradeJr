import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <h1>Olá, seja bem-vindo(a) à página do meu portifólio</h1>
          <p>
            Meu nome é João Andrade Junior. Tenho formação em <strong>Análise e desenvolvimento de sistemas</strong> na <en>Uninter</en> e
            sou de Lages/SC. Resido em Manaus/AM desde 2009. Atualmente estou cursando Desenvolvimento Web Full Stack na <a href="https://www.betrybe.com/" target="_blanck"><en>Trybe</en></a>.
          </p>
          <p>
            Fique à vontade para explorar meu portifólio! Aqui tem alguns dos meus projetos desenvolvidos durante o curso
          </p>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
