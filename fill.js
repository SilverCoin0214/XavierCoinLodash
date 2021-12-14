/*
 * @Author: your name
 * @Date: 2021-12-14 09:46:31
 * @LastEditTime: 2021-12-14 10:02:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/fill.js
 */

var _ = {
    // fill
    // 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。

    /**
     *
     * @param {*} array  要填充改变的数组。
     * @param {*} value  填充给 array 的值。
     * @param {*} start  (number): 开始位置（默认0）。
     * @param {*} end  (number):结束位置（默认array.length）。
     */
    fill: function (array, value, start = 0, end = array.length) {
        const len = array == null ? 0 : array.length

        if (Array.isArray(array)) {
            for (let i = 0; i < array.length; i++) {
                if (i >= start && i < end) {
                    array[i] = value
                }
            }
        }

        return array
    },

    // lodash源码
    _fill: function(array, value, start, end) {
        var length = array == null ? 0 : array.length
        if (!length) {
            return []
        }
        if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
        }

        return baseFill(array, value, start, end)
    }


    /* ------------------------------------------------------------- */

    // 对照源码分析
    // 1. 未考虑到 start 和 end 还有存在负值的情况
}

var array = [1, 2, 3];

_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

var res2 = _.fill(Array(3), 2);
console.log(res2)
// => [2, 2, 2]

var res3 = _.fill([4, 6, 8, 10], '*', 1, 3);
console.log(res3)
// => [4, '*', '*', 10]
