/*
 * @Author: your name
 * @Date: 2021-12-10 10:17:15
 * @LastEditTime: 2021-12-10 10:43:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/difference.js
 */

var _ = {

    // difference
    // 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
    // 即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。
    // 该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。

    difference: function (array, ...values) {

        // 遍历values
        Array.isArray(values) && values.forEach((item, index) => {
            if (Array.isArray(item)) {
                item.forEach((iten, indey) => {
                    let index = array.indexOf(iten)
                    if (index != -1) {
                        array.splice(index, 1)
                    }
                })
            } else {
                let index = array.indexOf(item)
                if (index != -1) {
                    array.splice(index, 1)
                }
            }
        })

        return array
    },

    // lodash源码
    _difference: function (array, ...values) {
        return isArrayLikeObject(array)
            ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
            : []
    }
}

var res = _.difference([3, 2, 1], [4, 2]);
console.log(res)
