/*
  .eslintrc.js 的优先级最大
  + 统一的eslint规则，保证代码风格的一致性，提高代码的可读性，便于团队合作。
  有的可以帮我们避免错误；
  有的可以帮我们写出最佳实践的代码；
  有的可以帮我们规范变量的使用方式；
  有的可以帮我们规范代码格式；
  用的可以帮我们更合适的使用新的语法；
 */
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
    该工具包包含了react的相关Eslint规则(eslint-plugin-react与eslint-plugin-jsx-a11y)，
    所以安装此依赖包的时候还需要安装刚才提及的两个插件
   */
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  /* 
    指定 ESLint 要使用的语法分析器, ESLint 兼容的有：Esprima、Babel-ESLint、@typescript-eslint/parser。
    ESLint 默认使用 Esprima(只转换 js，默认支持 ES5 的语法)。
    作用：是将我们写的代码转换为 ESTree，ESLint 会对 ESTree 进行校验。
    ESTree 只是一个 AST 的某一种规范，ESTree 本质上还是 AST
  */
  parser: '@typescript-eslint/parser',
  //指定语法分析器选项。（parser和parserOptions要同时使用） 默认使用的语法分析器支持如下几个选项：ecmaVersion、sourceType、ecmaFeatures。
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
  // 手动自定义代码规范。可以覆盖掉extends的配置
  rules: {
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    camelcase: 'off',
  },
}
