import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/37316420?s=460&u=20a50ef2a62cdc08390513de2f876e72432e0e28&v=4"
          alt="Renato"
        />
        <div>
          <strong>Renato/test</strong>
          <p>TESTE</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/37316420?s=460&u=20a50ef2a62cdc08390513de2f876e72432e0e28&v=4"
          alt="Renato"
        />
        <div>
          <strong>Renato/test</strong>
          <p>TESTE</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/37316420?s=460&u=20a50ef2a62cdc08390513de2f876e72432e0e28&v=4"
          alt="Renato"
        />
        <div>
          <strong>Renato/test</strong>
          <p>TESTE</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
