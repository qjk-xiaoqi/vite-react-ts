/*
  .eslintrc.js 的优先级最大
  + 统一的eslint规则，保证代码风格的一致性，提高代码的可读性，便于团队合作。
  有的可以帮我们避免错误；
  有的可以帮我们写出最佳实践的代码；
  有的可以帮我们规范变量的使用方式；
  有的可以帮我们规范代码格式；
  用的可以帮我们更合适的使用新的语法；
 */

const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce((acc, rule) => {
  // eslint-disable-next-line no-param-reassign
  acc[`jsx-a11y/${rule}`] = 'off'
  return acc
}, {})

module.exports = {
  // 指定代码执行环境
  env: {
    browser: true,
    es2021: true, // 启用es2021的新特性
    node: true,
  },
  /* 
    继承某些配置。就是别人提前写好了一套 rules，你直接拿过来用就行，不用手写 rules 规则。要是有不符合自己心意的规则，就手写 rules 去覆盖。
    eslint-config-airbnb:该包提供了所有的Airbnb的ESLint配置.
    该工具包包含了react的相关Eslint规则(eslint-plugin-react与eslint-plugin-jsx-a11y，eslint-plugin-import )，
    所以安装此依赖包的时候还需要安装刚才提及的三个插件
    plugin:prettier/recommended --- 解决prettier和eslint的冲突
   */
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  /* 
    指定 ESLint 要使用的语法分析器, ESLint 兼容的有：Esprima、Babel-ESLint、@typescript-eslint/parser。
    ESLint 默认使用 Esprima(只转换 js，默认支持 ES5 的语法)。
    作用：是将我们写的代码转换为 ESTree，ESLint 会对 ESTree 进行校验。
    ESTree 只是一个 AST 的某一种规范，ESTree 本质上还是 AST
  */
  parser: '@typescript-eslint/parser',
  // 指定语法分析器选项。（parser和parserOptions要同时使用） 默认使用的语法分析器支持如下几个选项：ecmaVersion、sourceType、ecmaFeatures。
  parserOptions: {
    ecmaVersion: 12, // 按照 ECMAScript 哪个版本语法做检查(可以开启更高 ES 版本校验)
    sourceType: 'module', // 默认是 script。模块化的代码要写：module（当前最常见做法）
    ecmaFeatures: {
      jsx: true, // 启用JSX
    },
  },
  /*
    使用第三方插件，必须安装其 npm 包。作用：增强eslint的能力。
    比如 eslint-plugin-prettier 这个插件，就是用来把 prettier 的能力赋给 eslint。即：让 eslint 拥有和 prettier 一样的代码格式化能力。
    使用时，可以省略 eslint-plugin 前缀。
    eslint-plugin-react: React专用的校验规则插件.
    @typescript-eslint/eslint-plugin: Typescript辅助Eslint的插件
  */
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  // 手动自定义代码规范。可以覆盖掉extends的配置, 0 - off(关闭) 1 - warn (检查并警告) 2 - error(检查并报错)
  rules: {
    ...a11yOff,
    camelcase: 'off',
    // 禁用未声明的变量
    'no-undef': 'off',
    // 检查 Hook 的规则
    'react-hooks/rules-of-hooks': 'error',
    // 检查 effect 的依赖
    'react-hooks/exhaustive-deps': 'warn',
    // 不能正确处理文件后缀名,需要关闭
    'import/extensions': 'off',
    // 只有一个导出值时 需要使用 export default，
    'import/prefer-default-export': 0,
    // 规定不能引入本地找不到的模块。
    'import/no-unresolved': 0,
    // 不允许重复的变量名，包括重复的变量和TS类型名
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    // 不允许作用域内部有跟外部一样的变量名，但是从实际应用出发，对于如下变量允许存在同名变量
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // 不允许定义前使用变量，但是对于function和Class，可以先使用再声明，
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    // 警告未使用的变量，实际业务中存在某些变量先声明，但暂时未使用的情况。
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // 默认props
    'react/require-default-props': 'off',
    // 规定每一个组件都应该声明 PropTypes。
    // 'react/prop-types': 0,
    // props使用扩展语法
    // 'react/jsx-props-no-spreading': 0,
    // 限制文件扩展名
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
