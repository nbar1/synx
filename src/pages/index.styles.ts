import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
`;

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 0;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 4rem 0;
  text-align: center;
`;

export const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
  font-size: 1.1rem;
  padding: 0.75rem;
`;

export const Grid = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Card = styled.a`
  border-radius: 10px;
  border: 1px solid #eaeaea;
  color: inherit;
  margin: 1rem;
  max-width: 300px;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    border-color: #0070f3;
    color: #0070f3;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
    margin: 0;
  }
`;

export const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;

export const Footer = styled.footer`
  align-items: center;
  border-top: 1px solid #eaeaea;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 2rem 0;

  a {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }
`;
