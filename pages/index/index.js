import homeStore from "../../store"

import { mapToData } from "../../lib/index"


const connect = mapToData((store) => ({ count: store.credits.count }), 'home')


Page(connect({
  onTap(e) {
    homeStore.credits.count++
  },
  onJump(e) {
    wx.navigateTo({
      url: "/pages/logs/logs"
    })
  }
}))



