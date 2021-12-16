/*
 * @Author: your name
 * @Date: 2021-12-16 10:34:06
 * @LastEditTime: 2021-12-16 10:41:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/flatten.js
 */


var _ = {
    // flatten
    // 减少一级array嵌套深度。

    flatten: function (array) {
        const res = []

        array != null && array.length && array.forEach((item, index) => {
            if (Array.isArray(item)) {
                item.forEach((iten, indey) => {
                    res.push(iten)
                })
            } else {
                res.push(item)
            }
        });

        return res
    },


    // lodash源码
    faltten: function (array) {
        const length = array == null ? 0 : array.length
        return length ? baseFlatten(array, 1) : []
    }

}

console.log(_.flatten([1, [2, [3, [4]], 5]]))
// => [1, 2, [3, [4]], 5]
console.log(_.flatten([]))

console.log(_.flatten(2))

