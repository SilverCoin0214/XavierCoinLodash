/*
 * @Author: your name
 * @Date: 2021-12-09 10:44:44
 * @LastEditTime: 2021-12-09 10:48:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/chunk.js
 */

var _ = {

    // 1. chunk
    // 将数组拆分成多个size长度的区块, 并将这些区块组成一个新的数组. 如果无法等长区分, 那么剩余元素组成一块区块
    chunk: function (array, size = 1) {
        if (array.length == 0 || size < 1) {
            return []
        }

        let res = []
        let item = []

        for (let i = 0; i < array.length; i++) {
            if (item.length < size) {
                item.push(array[i])
                if (item.length == size) {
                    res.push(item)
                    item = []
                }
            }
        }

        if (item.length != 0) {
            res.push(item)
        }

        return res
    },

    // lodash源码
    _chunk: function (array, size) {
        // size = Math.max(toInteger(size), 0) 源码替换
        size = Math.max(parseInt(size), 0)
        const length = array == null ? 0 : array.length

        if (!length || size < 1) {
            return []
        }

        let index = 0
        let resIndex = 0
        const result = new Array(Math.ceil(length / size))

        while (index < length) {
            // result[resIndex++] = slice(array, index, (index += size)) 源码替换
            result[resIndex++] = array.slice(index, (index += size))
        }

        return result
    },

    /* ------------------------------------------------------------- */

    // 对照源码分析
    // 1. 未考虑到数组长度可能为0 以及 size 为负数以及非整数的可能
    // 2. 源码更节省内存空间
}

let arr = _._chunk(['a', 'b', 'c', 'd'], 2)
console.log(arr)
