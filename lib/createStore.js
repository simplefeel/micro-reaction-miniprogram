
const STORE_TREE = {}

function createStore(name, store) {
  STORE_TREE[name] = store;
  return store
}

export { STORE_TREE, createStore }
