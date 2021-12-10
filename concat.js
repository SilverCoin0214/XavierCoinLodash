/*
 * @Author: your name
 * @Date: 2021-12-10 09:44:13
 * @LastEditTime: 2021-12-10 10:15:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/concat.js
 */

var _ = {

    // concat
    // 创建一个新数组，将array与任何数组 或 值连接在一起。
    concat: function (array, ...values) {
        let res = [...array]

        Array.isArray(values) && values.forEach((item, index) => {
            if (Array.isArray(item)) {
                item.forEach((iten, indey) => {
                    res.push(iten)
                })
            } else {
                res.push(item)
            }
        })

        return res
    },

    // lodash源码
    _concat: function () {
        var length = arguments.length;
        if (!length) {
            return []
        }

        var args = Array(length - 1)
        var array = arguments[0]
        var index = length

        while (index--) {
            args[index - 1] = arguments[index]
        }

        return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1))
    }
}

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
var other = _.concat(array, {}, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
