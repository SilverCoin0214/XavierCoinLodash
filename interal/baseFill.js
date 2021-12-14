/*
 * @Author: your name
 * @Date: 2021-12-14 09:57:42
 * @LastEditTime: 2021-12-14 10:01:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/interal/baseFill.js
 */

function baseFill(array, value, start, end) {
    var length = array.length

    start = parseInt(start)
    if (start < 0) {
        start = -start > length ? 0 : (length + start)
    }
    end = (end == undefined || end > length) ? length : parseInt(end)
    if (end < 0) {
        end += length
    }
    end = start > end ? 0 : toLength(end)
    while (start < end) {
        array[start++] = value
    }
    return array
}
