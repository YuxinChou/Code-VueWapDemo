## 项目说明

自己在学习vue和使用vue做项目的时候，也是不断的在网上搜索，不断阅读别人的项目，不断优化自己的项目。之前也做过一次demo，写过相关的文章[Vue教程--使用官方脚手架构建实例](http://www.jianshu.com/p/ee2464501c65)，但是根据其他伙伴的反馈，自己再回头看，发现写的并不够好，还有很多可以完善的地方。

那这一次所搭建的demo，主要是针对Wap端进行，想从一个更基础、更整体的角度去上手一个项目，并且不断完善让其拥有Wap端一些常用的主要功能。这是我这一次的主要目的。那在开发过程中需要找一个参考，这里我选择了手机QQapp为界面原型，当然没有实际的接口调用，放心。

说明1：目前demo的版本相对简单，后续将陆续更新

说明2：对应的博文地址为[Vue教程--Wap端项目搭建从0到1（详解）]()  （博文尚未发布，请稍后）

## 效果演示

[在线demo地址](http://www.knowing365.com)（请用chrome手机模式预览）

#### 移动端请扫描下方二维码

<img src="https://raw.githubusercontent.com/YuxinChou/vue-wap-demo/master/screenshots/%E5%9C%A8%E7%BA%BF%E5%9C%B0%E5%9D%80%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg" width="250" height="250"/>

## 技术栈

vue2 + vuex + vue-router + webpack + ES6/7 + fetch／axios + sass + flex + svg

## 项目运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 项目结构

```
├── build                      // 构建相关  
├── config                     // 配置相关
├── dist                       // 打包的部署文件
├── node_modules               // 模块安装的文件夹
├── screenshots                // 项目截图
├── src                        // 核心代码
│   ├── assets                 // 静态资源
│   ├── components             // 组件
│   ├── page                	 // 页面
│   ├── router                 // 路由
│   ├── service              	 // 请求服务
│   ├── store                  // 仓库存储
│   ├── style                  // 样式
│   ├── utils              	   // 公用方法
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
├── .babelrc                   // babel-loader 配置
├── .editorconfig              // 代码编辑 配置项
├── .eslintignore              // eslint 忽略项
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
├── package-lock.json          // package-lock.json
├── package.json               // package.json
└── README.md                  // 说明文档
```

## 项目截图

<img src="https://raw.githubusercontent.com/YuxinChou/vue-wap-demo/master/screenshots/preview.gif" width="338" height="600"/>

<img src="https://raw.githubusercontent.com/YuxinChou/vue-wap-demo/master/screenshots/all%E5%90%88%E5%9B%BE.jpg" width="1000" height="850"/>

（更多截图查看项目内screenshots，或者访问demo）

## 总结

项目还在陆续更新中...