import React from 'react';
import { CreateProjectMessage, InitProjectClient } from '../messages';

export const ProjectsShim: React.FC = ({ children }) => {
  const ch = React.useRef<MessageChannel>();
  React.useEffect(() => {
    postMessage('projects:load', '*');
  }, []);

  React.useEffect(() => {
    console.log('made channel');
    ch.current = new MessageChannel();
    ch.current.port1.addEventListener('message', (ev) => {
      console.log(ev.data);
    });

    const msg: InitProjectClient = {
      type: 'project:connect',
      payload: {
        port: ch.current.port2
      }
    }

    postMessage(msg.type, location.origin, [ch.current.port2])

    ch.current.port1.start();
    ch.current.port1.postMessage('project:load');
  }, []);

  const handleClick = () => {
    const msg: CreateProjectMessage = {
      type: 'project:create',
      payload: {
        name: 'asd'
      }
    }

    console.log('posting msg', msg);

    ch.current!.port1.postMessage(JSON.stringify(msg));
  };

  return (
    <>
      <button onClick={handleClick}>create proj</button>
      {children}
    </>
  );
};
