# nuxtProject

> My supreme Nuxt.js project

## Build Setup

``` bash
# install dependencies 安装依赖
$ npm install

# 运行项目命令  端口号localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
## 项目目录结构
```
项目目录结构

资源目录  assets  
    用于组织未编译的静态资源   如：less 、 sass 、 JavaScript

组件目录 components  
    用于组件应用的 Vue.js 组件

   
布局目录  layouts  入口文件  
   该目录名为 Nuxt.js 保留的，不可更改

中间件目录 middleware  
   目录用于存放应用的中间件

页面目录 pages
  该目录名为Nuxt.js保留的，不可更改

插件目录  plugins 
  用于组织那些需要在  根vue.js应用 实例化之前需要运行的 Javascript 插件

静态文件目录  static
  用于存放应用的静态文件，此类文件不会被Nuxt.js 调用 Webpack 进行构建编译处理
  该目录名为Nuxt.js保留的，不可更改

Store 目录
  用于组织应用的 Vuex 状态树文件， 创建一个index.js 文件 可激活这些配置
  该目录名为Nuxt.js保留的，不可更改

nuxt.config.js 文件
   用于组件 Nuxt.js 应用的个性化配置，以便覆盖默认配置
   该目录名为Nuxt.js保留的，不可更改

package.json 文件
   用于描述应用的依赖关系和对外暴露的脚本接口
   该目录名为Nuxt.js保留的，不可更改

```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
