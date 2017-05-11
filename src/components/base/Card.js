import styled from 'styled-components';
import { breakLongWords } from './style-utils';

export const Card = styled.article`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  color: ${props => props.theme.textLight};
  background-color: ${props => props.theme.tertiary};
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.5);
`;

export const CardBody = styled.div`
  padding: ${props => props.theme.spaceM};
`;

export const CardTitle = styled.h3`
  margin-bottom: ${props => props.theme.spaceS};
  font-size: 1.25em;
  ${breakLongWords()};
`;

export const CardFooter = styled.footer`
  margin-top: auto;
  display: flex;
  padding: ${props => props.theme.spaceS};
  color: ${props => props.theme.textLight};
  background-color: ${props => props.theme.bgDark};
`;

export const CardButton = styled.button`
  padding: ${props => props.theme.spaceS};
  line-height: 1;
  cursor: pointer;
`;
