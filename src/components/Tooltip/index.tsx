import React from 'react';

import { Container } from './styles';

interface ToolTipPorps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<ToolTipPorps> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
