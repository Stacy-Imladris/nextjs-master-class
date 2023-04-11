import { PropsWithChildren } from "react";
import styled from "styled-components";
import {HeadMeta} from '../HeadMeta/HeadMeta';

type PropsType = {
  title?: string;
};

export const PageWrapper = (props: PropsWithChildren<PropsType>) => {
  const { children, title } = props;

  return (
    <>
      <HeadMeta title={title} />
      <MainBlock>{children}</MainBlock>
    </>
  );
};

const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 15px;
  position: relative;
  padding: 4rem 0;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 700px) {
    padding: 8rem 0 6rem;
  }
`;
