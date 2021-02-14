export type Project = {
  id: number;
  name: string;
  createdAt: Date;
  items: ReadonlyArray<ProjectItem>;
};

export enum ProjectItemType {
  NOTE = "note",
  ARTICLE = "article",
}

export type PinnedItem = {
  type: ProjectItemType;
  id: string;
};

export type ProjectItem = {
  id: string;
  createdAt: Date;
  item: PinnedItem;
};
