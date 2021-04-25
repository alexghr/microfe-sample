export type InitProjectClient = {
  type: 'project:connect',
  payload: {
    port: MessagePort
  }
}

export type CreateProjectMessage = {
  type: 'project:create',
  payload: {
    name: string
  }
};

export type LoadProjectsMessage = {
  type: 'project:load',
};

export type SelectProjectMessage = {
  type: 'project:select',
  payload: {
    id: string
  };
};
