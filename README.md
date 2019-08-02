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
  
# 运行步骤
1. 开启`公共依赖模块的服务`，我的公共依赖模块在portal项目下common-deps-static文件夹中，只需要在这个文件夹下开启服务即可，可以通过http-server插件，端口设置为`8000`，并且设置跨域`--cors`
2. 在`portal、menu、project1`项目下，分别执行命令`npm run start`
3. 在`project2`项目下，执行命令`npm run serve`
4. chrome中打开页面：`http://localhost:8233/`即可
