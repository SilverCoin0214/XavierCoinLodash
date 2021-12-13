/*
 * @Author: your name
 * @Date: 2021-12-13 16:34:09
 * @LastEditTime: 2021-12-13 16:44:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/drop.js
 */

var _ = {
    // drop
    // 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）

    drop: function (array, n = 1) {
        let res = []

        let isArr = Array.isArray(array)

        if (isArr) {
            for (let i = 0; i < array.length; i++) {
                if (i < n) {
                    continue
                } else {
                    res.push(array[i])
                }
            }
        }

        return res
    },


    // lodash源码
    _drop: function (array, n = 1) {
        const length = array == null ? 0 : array.length

        return lenth
            ? slice(array, n < 0 ? 0 : toInteger(n), length)
            : []
    }
}

let a = [1,2,3]
let res = _.drop(a, 2)
console.log(a)
console.log(res)
