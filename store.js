import { observable } from 'micro-reaction';
import { createStore } from './lib/index'

const store = observable({
  credits: {
    count: 0
  }
});

export default createStore('home', store)
