/*
 * @Author: your name
 * @Date: 2021-12-16 10:11:28
 * @LastEditTime: 2021-12-16 10:29:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/first.js
 */

var _ = {
    // first
    // 获取数组 array 的第一个元素。

    first: function (array) {
        return Array.isArray(array) ? array[0] : undefined
    }
}

console.log(_.first([1, 2, 3]))
console.log(_.first([]))
