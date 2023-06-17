import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

export const Title = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <TitleText {...props}>{children}</TitleText>;
};

const TitleText = styled.div`
  margin-botton: 24px;
  color: #ffeeeeee;
  font-size: 24px;
  text-align: center;
`;
