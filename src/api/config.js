// 这个文件的作用是
// qq音乐接口有一些公共的参数，拿出来封装了
export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}
// jsonp 需要三个参数，这里将第三个参数也封装了
export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0
