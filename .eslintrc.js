/*
 * @Author: your name
 * @Date: 2022-01-06 09:58:57
 * @LastEditTime: 2022-01-06 09:58:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\src\views\login\.eslintrc.js
 */
/*
 * @Author: your name
 * @Date: 2021-12-28 17:45:07
 * @LastEditTime: 2021-12-28 17:48:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-ts\dist\.eslintrc.js
 */

module.exports = {
    root: true,
    parserOptions: {
        sourceType: "module"
    },
    parser: "vue-eslint-server",
    extends: ['plugin:vue/vue3-essential', 'plugin:vue/vue3-strongly-recommended', 'plugin:vue/vue3-recommended'],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {
        'no-console': 'off',
        'comma-dangle': [2, 'never']  // 禁止使用逗号结尾
    }
}
