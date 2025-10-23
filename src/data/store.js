const KEY = 'joyas-db';

const defaultDB = {
  products: [
    { id: 'p1', name: 'Aros de Corazones', price: 8000, stock: 10, category: 'Aros', visible: true },
    { id: 'p2', name: 'Collar de Perlas', price: 15000, stock: 5, category: 'Collares', visible: true }
  ],
  orders: [
    { id: 'o1', total: 23000, status: 'pendiente', createdAt: new Date().toISOString() }
  ],
  users: [
  { id: 'u1', name: 'Cliente 1', email: 'cliente1@correo.com', blocked: false },
  { id: 'u2', name: 'Cliente 2', email: 'cliente2@correo.com', blocked: false },
  { id: 'u3', name: 'Administrador', email: 'admin@charmeetchic.com', blocked: false }
]
};

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || defaultDB;
  } catch {
    return defaultDB;
  }
}
function save(db) {
  localStorage.setItem(KEY, JSON.stringify(db));
}

export const db = {
  getAll: (col) => load()[col],
  create: (col, item) => {
    const data = load();
    data[col].push(item);
    save(data);
  },
  update: (col, id, patch) => {
    const data = load();
    const i = data[col].findIndex(x => x.id === id);
    if (i >= 0) {
      data[col][i] = { ...data[col][i], ...patch };
      save(data);
    }
  },
  remove: (col, id) => {
    const data = load();
    data[col] = data[col].filter(x => x.id !== id);
    save(data);
  }
};
