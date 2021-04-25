import React, { useContext } from 'react';
import { CurrentProjectContext } from '../contexts/CurrentProjectContext';

type Props = {
  id: string;
}

export const Project: React.FC<Props> = ({ id }) => {
  const { currentProject } = useContext(CurrentProjectContext);

  return (
    <div>
      {JSON.stringify(currentProject ?? '')}
    </div>
  )
};
