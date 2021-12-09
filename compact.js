/*
 * @Author: your name
 * @Date: 2021-12-09 11:11:30
 * @LastEditTime: 2021-12-09 11:21:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/compact.js
 */

const _ = {

    // 2. compact
    // 创建一个新数组，包含原数组中所有的非假值元素。
    // 例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。

    compact: function(array) {
        let res = []

        // 判断array有效性
        if (array == null) {
            return res
        }

        // 确保为数组才调用
        Array.isArray(array) && array.forEach((item, index) => {
            if (item) {
                res.push(item)
            }
        })

        return res
    },

    // lodash源码
    _compact: function (array) {
        let resIndex = 0
        const result = []

        if (array == null) {
            return result
        }

        for (const value of array) {
            if (value) {
                result[resIndex++] = value
            }
        }

        return result
    }

    /* ------------------------------------------------------------- */

    // 源码对比
    // 1. 未考虑到传入的不是数组的情况
}

const result = _.compact([0, 1, false, 2, '', 3])
console.log(result)

const _result = _._compact([0, 1, false, 2, '', 3])
console.log(_result)
