# Vite的优势

快！

## Vite基本原理

- Vite将代码区分为`源码` 与`依赖`

- 依赖：node_modules 中的三方包

  - esbuild构建依赖，比使用NodeJS制作的编译器快上数倍

- 源码：工程代码包含（JS/JSX/CSS/Vue等，Vite会将其编译）

  - 使用ESM方式提供源码给浏览器，让浏览器取代了部分打包工作（现代浏览器可以理解ESM模块文件）
  - 根据依赖按需加载文件

  

## 什么是ESM方式提供源码给浏览器 ？

浏览器通过 ESM 的方式加载JS文件，类似我们本地使用ES6 的 ESM 方式开发 Webpack 等打包工具均可以理解我们的意图，浏览器现在也可以直接理解 ESM 规范的JS文件了，同时支持同步ESM模块和异步ESM模块。详细请看：[在浏览器中使用 ECMAScript Modules](https://juejin.cn/post/6943233321765715976)，这位大佬已经写的很好了

学以致用：[vite-demos/hello-esm](https://github.com/swdenglian/vite-demos/tree/master/packages/hello-esm)

## Hello Vite

代码示例：[vite-demos/hello-vite](https://github.com/swdenglian/vite-demos/tree/master/packages/hello-vite)

根据浏览器加载ESM原理，可以猜测Vite也是启动了一个特殊的本地资源服务器，Vite比`hello-esm`中的实例使用hettp-server应该多了一层.ts=>转化为.js文件的过程。通过浏览器调试工具(如下图)加上[官网的说明](https://cn.vitejs.dev/guide/#index-html-and-project-root)可以初步的佐证猜想，Vite内部肯定不可能是猜想这么简单，但是对于目前理解Vite够用了。

![image-20220425003314700](./imgs/image-20220425003314700.png)

![image-20220425003428954](./imgs/image-20220425003428954.png)

## Webpack 转 Vite 关注点

- [wp2vite](https://github.com/tnfe/wp2vite) 该工具按照webpack配置来转化成Vite项目，目前看issue只有一页。主要问题集中在一些插件未适配、一些用户自己知识缺乏导致不知道如何正确使用、cjs 不支持问题
  - 按照webpack配置的来生成对应的vite生态下的插件组成vite.config.json文件，如：webpack.DefinePlugin ---> vite.define
  - 可能需要人工再次进行校对
- 路由问题：由于Vite使用浏览器支持esm规范的能力，需要将路由替换为按需加载路由，否则对开发体验几乎没有优化
- cjs->esm 问题：这是最普遍也是最关键的问题。目前没有找到较为合适的库直接使用，可以有解决方案如下：
  - 基础能力：AST语法树转化 cjs->esm，cjs/esm 互转的单元测试
  - 能力使用：可以有3种使用方式
    - Vite-plugin： 自定义 vite插件， 使用插件的能力将加载到的部分转化为esm规范。
      - 优点：并不通篇修改源码，仅仅在开发环境下替换，不影响webpack的build流程，可以较好的保证项目的质量。
      - 缺点：代码还是停留在较老的位置，没有开始就不可能有变化，以后还是cjs形式，对后续继续逐步重构没有推进能力
    - 通篇源码AST转化：牵扯到的项目源码太多，将有较大的可能出现意向之外的BUG
      - 优缺点为vite-plugin的调换，这种模式较为激进，个人不推荐方式
    - <推荐>逐步替换源码：结合Vite-plugin/源码AST转化2种方式，在开发的时候先使用vite-plugin模式，在不断迭代的过程中使用人工/工具的形式将迭代部分代码转化为ESM规范，由于webpack可以同时使用2种规范，可以这么处理
      - 优点：不激进，也同时逐步的推进代码的重构，让项目逐步的演化推进
      - 缺点：项目中会同时存在2个格式的代码分格，不了解历史背景的人将对项目产生疑惑<个人认为这是项目重构需要经历的正常过程，不算太大问题，可以找到合适时机直接执行通篇源码转化，没有合适时机可以继续保持该形式进行运转>
- URL问题
- jsx问题
- -----其他，待发现