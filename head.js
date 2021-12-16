/*
 * @Author: your name
 * @Date: 2021-12-16 10:30:24
 * @LastEditTime: 2021-12-16 10:31:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/head.js
 */


var _ = {
    // head
    // 获取数组 array 的第一个元素。

    // lodash源码
    head: function (array) {
        return (array != null && array.length) ? array[0] : undefined
    }
}

console.log(_.head([3, 2, 3]))
console.log(_.head([]))
