/*
 * @Author: your name
 * @Date: 2021-12-16 10:41:43
 * @LastEditTime: 2021-12-16 10:45:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLodash/interal/baseFlatten.js
 */

/**
 * The base implementation of `flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array 需要展平的数组
 * @param {number} depth 展平深度
 * @param {boolean} [predicate=isFlattenable] 是否可展平
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] 结果数组
 * @returns {Array} 返回结果数组
 */

function baseFlatten(array, depth, predicate, isStrict, result) {
    predicate || (predicate = isFlattenable)
    result || (result = [])

    if (array == null) {
        return result
    }

    for (const value of array) {
        if (depth > 0 && predicate(value)) {
            if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result)
            } else {
                result.push(...value)
            }
        } else if (!isStrict) {
            result[result.length] = value
        }
    }

    return result
}

export default baseFlatten
