# microfront-end-single-spa
利用single-spa搭建的一个微前端架构，其中各个小型应用具有独立部署、独立运行、允许存在独立仓储的特性。由portal项目实现各个应用的组合

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`最后总结一下这个项目运行起来的步骤`  
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.开启`公共依赖模块的服务`，我的公共依赖模块在portal项目下common-deps-static文件夹中，只需要在这个文件夹下开启服务即可，可以通过http-server插件，端口设置为`8000`，并且设置跨域`--cors`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.在`portal、menu、project1`项目下，分别执行命令`npm run start`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.在`project2`项目下，执行命令`npm run serve`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.chrome中打开页面：`http://localhost:8233/`即可
