import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

// 获取推荐数据，也就是轮播图的数据
export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

// 获取歌单数据
export function getDiscList () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  const data = Object.assign({}, commonParams, {
    rnd: Math.random(),
    platform: 'yqq',
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000
  })

  return jsonp(url, data, options)
}
