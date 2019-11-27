# micro-reaction-miniprogram

> one small ande strong state manage for miniprogram

## Install

```js
npm install micro-reaction-miniprogram
```

## Usage

### 1 create global store

```js
import { createStore, observable } from "micro-reaction-miniprogram"

const store = observable({
  credits: {
    count: 0
  }
});

export default createStore('home', store)
```

### 2 connect page with store

```js
import homeStore from "../../store"

import { mapToData } from "micro-reaction-miniprogram"

const connect = mapToData((store) => ({ count: store.credits.count }), 'home')


Page(connect({}))
```

### 3 chanage store, page auto reaction

```html
<button class="btn" type="primary" bindtap="onTap">Add</button>
```

```js

Page(connect({
  onTap(e) {
    homeStore.credits.count++
  },
  onJump(e) {
    wx.navigateTo({
      url: "/pages/mine/mine"
    })
  }
}))
```

### Demo

![](https://si.geilicdn.com/img-65510000016eaaa24a440a2262d5-unadjust_720_540.gif)

