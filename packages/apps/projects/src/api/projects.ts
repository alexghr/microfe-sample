import { Project } from "../models/project";

const PROJECTS_DB = "@@projects";
const PROJECTS_STORE = "projects";
const db$ = openProjectsDatabase();

// fake an API using IndexDB

export async function createProject(input: { name: string }): Promise<Project> {
  return new Promise<IDBValidKey>(async (res, rej) => {
    const store = await openTx("readwrite");
    const req = store.add({
      name: input.name,
      items: [],
    });

    req.onsuccess = () => res(req.result);
    req.onerror = rej;
  }).then((key) => getProject(key));
}

export async function fetchProjects(): Promise<ReadonlyArray<Project>> {
  return new Promise(async (res, rej) => {
    const store = await openTx("readonly");
    const req = store.getAll();
    req.onsuccess = () => res(req.result);
    req.onerror = rej;
  });
}

async function getProject(id: IDBValidKey): Promise<Project> {
  return new Promise<Project>(async (res, rej) => {
    const store = await openTx("readonly");
    const req = store.get(id);

    req.onsuccess = () => res(req.result);
    req.onerror = rej;
  });
}

async function openProjectsDatabase(): Promise<IDBDatabase> {
  return new Promise((res, rej) => {
    const req = indexedDB.open(PROJECTS_DB, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      db.createObjectStore("projects", { keyPath: "id", autoIncrement: true });
    };

    req.onsuccess = () => res(req.result);
    req.onerror = (err) => rej(err);
  });
}

async function openTx(mode: IDBTransactionMode): Promise<IDBObjectStore> {
  const db = await db$;
  const tx = db.transaction([PROJECTS_STORE], mode);
  return tx.objectStore(PROJECTS_STORE);
}
