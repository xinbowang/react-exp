const Storage: any = {};
Storage.local = {
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  }
}

Storage.session = {
  set: (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  },
  remove: (key: string) => {
    sessionStorage.removeItem(key);
  }
}

const {local, session} = Storage;
export {local, session};