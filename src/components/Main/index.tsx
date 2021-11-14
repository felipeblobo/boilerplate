import { Description, Ilustration, Logo, Title, Wrapper } from './styles';

const Main = () => {
  return (
    <Wrapper>
      <Logo
        src="/img/logo.svg"
        alt="An image with the name React Avançado besides"
      />
      <Title>Practicing Next </Title>
      <Description>
        A small project to learn Typescript, ReactJS, NextJS and Styled
        Components
      </Description>
      <Ilustration
        src="/img/hero-illustration.svg"
        alt="A developer guy working"
      />
    </Wrapper>
  );
};

export default Main;
