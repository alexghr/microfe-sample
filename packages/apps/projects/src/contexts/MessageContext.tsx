import React from 'react';

export const MessageContext = React.createContext({});

export const MessageProvider: React.FC = ({ children }) => {
  return (
    <MessageContext.Provider value={{}}>
      {children}
    </MessageContext.Provider>
  )
};
