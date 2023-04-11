import Link from "next/link";
import styled from "styled-components";

type PropsType = {
  title: string;
};

export const LinkBlock = (props: PropsType) => {
  const { title } = props;

  return (
    <LinkWrapper>
      <Link href={`/${title.toLowerCase()}`}>
        <h2>{title} →</h2>
      </Link>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(131, 134, 135, 0);

  & h2 {
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 700px) {
    padding: 4px;

    & h2 {
      font-weight: 600;
      font-size: 24px;
    }
  }
`;
