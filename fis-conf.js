/*
 * 项目目录
 * components   (用来放内部编写的一些公有函数)
 *       --common
 *           --host-config.js    （配置调试IP）
 *           --url.js    （配置项目内页面路径）
 *           --common.js     （一些基础功能能函数封装）
 *       --widget    （用来存放一些插件）
 * 
 * static   (用来存放外部获取的库,如jquery，bootstr)
 *       --js
 *       --styles
 * 
 * page  (页面)
 * 
 * build  (输出文件夹)
 * 
 * code line:
 *      dio release -d  // 编译输出
 * 
 * */




//将 fis3 编译产出到指定目录
fis.match('**', {
    deploy: fis.plugin('local-deliver', {
        to: 'build/'
    })
})