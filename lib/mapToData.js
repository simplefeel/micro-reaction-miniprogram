import { STORE_TREE } from "./createStore"
import { observe, observable } from 'micro-reaction';

function mapToData(fn, name) {
  return function (pageOpt) {
    const { onLoad } = pageOpt;
    pageOpt.onLoad = function (opt) {
      const self = this
      const dataFromStore = fn.call(self, STORE_TREE[name], opt)
      self.setData(Object.assign({}, self.data, dataFromStore))

      observe(() => {
        const dataFromStore = fn.call(self, STORE_TREE[name], opt)
        self.setData(Object.assign({}, self.data, dataFromStore))
      })

      onLoad && onLoad.call(self, opt)
    }
    return pageOpt
  }
}

export { mapToData, observable }
