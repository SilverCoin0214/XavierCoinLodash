/*
 * @Author: your name
 * @Date: 2021-12-13 22:32:05
 * @LastEditTime: 2021-12-13 22:51:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/dropRight.js
 */

var _ = {
    // dropRight
    // 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

    dropRight: function (array, n = 1) {
        let res = []

        if (Array.isArray(array) && array.length != 0) {
            for (let i = 0; i < array.length; i++) {
                if ( i < array.length - n) {
                    res.push(array[i])
                }
            }
        }

        return res
    },


    // lodash源码
    _dropRight: function (array, n = 1) {
        const length = array == null ? 0 : array.length
        n = length - toInteger(n)
        return length ? slice(array, n < 0 ? 0 : n) : []
    }
}

var res = _.dropRight([1, 2, 3], 2);
console.log(res)
