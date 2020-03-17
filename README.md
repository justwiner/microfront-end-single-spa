# microfront-end-single-spa
利用single-spa搭建的一个微前端架构，其中各个小型应用具有独立部署、独立运行、允许存在独立仓储的特性。由portal项目实现各个应用的组合

# 主要技术
1. single-spa
2. systemJs

# 项目结构
1. menu项目，开发框架`react`
2. portal项目，`组件调度、路由分发`
3. project1项目，开发框架`react`
4. project2项目，开发框架`vue`，由`vue-cli3脚手架生成`

# 项目介绍
## menu项目
1. 基于`react`框架，自定义webpack打包配置
2. 集成`antd-design`
## portal项目
1. 不依赖三大框架，自定义webpack打包配置
2. 集成`systemJS`，用于引入子模块打包后的js文件(例如`bundle.js`)
3. 提供路由分发功能，具体请见`/portal/src/config`和`/portal/src/activityFns`，用于控制懒加载模块js文件，例跳转到project2项目时，才开始加载project2打包后的js文件
4. 提供页面容器，可以理解成最外层门户，详情请见`/portal/src/index.html`；预定义子模块的打包js文件，引入公共模块依赖，子模块不需要自己单独打包，例如react、vue、axios等开源框架；提供HTML容器
```
<div id='menu'></div>
<div id='content'>
    <div id="react"></div>
    <div id="vue"></div>
</div>
```
## project1项目
1. 基于`react`框架，自定义webpack打包配置
2. 集成`react-router-dom`，实现路由与页面组件的绑定
## project2项目
1. 基于`vue-cli3`生成的VUE项目，引入了`single-spa`，即在`vue-cli3`项目基础上执行了`vue add single-spa`
2. 集成了`vuex、vue-router、axios、element-ui`

# 基于portal整合的完整运行步骤
1. 开启`公共依赖模块的服务`，我的公共依赖模块在portal项目下common-deps-static文件夹中，只需要在这个文件夹下开启服务即可，可以通过http-server插件，端口设置为`8000`，并且设置跨域`--cors`
2. 在`portal`项目下，执行命令`npm run start`
3. 在`project2、menu、project1`项目下，分别执行命令`npm run dev`
4. chrome中打开页面：`http://localhost:8233/`即可

# 各个子模块单独启动
由于DEMO中，业务模块就`menu、project1、project2`，因此，只对这三个项目进行了webpack打包配置
1. 启动本地开发模式（适用于：`menu、project1、project2`）,都是相同的命令：`npm run dev:local`

# 提示（TIP）
1. 很多同学说启动单个项目的时候，控制台报错，`define is not defined`，  
这个是因为，在基于portal整合的启动模式下：`npm run dev`，project2(Vue)的打包成umd模式的，project1、menu是打包成amd模式，且只是一个单独的js文件，这样通过各自启动的IP端口打开页面是会报错的，浏览器解析不了这种JS模块，需要portal项目的systemjs来引入，而且`npm run dev`执行后，并没有生成index.html，更不可能打开页面。  
因此要单独启动小模块，请运行`npm run dev:local`,或参考`package.json`中的启动命令

# 预告
后续将在子模块中尝试集成各种优秀开源框架，探索single-spa到底有多大的利用价值！  
能否应用到正式的大型超大型项目中？  
优化微服务架构，达到开箱即用。