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
## 骨架屏使用
```
安装： npm install vue-content-loader --save
单组件中引入
import { ContentLoader } from 'vue-content-loader'

内置骨架
import {
  ContentLoader,
  FacebookLoader,
  CodeLoader,
  BulletListLoader,
  InstagramLoader,
  ListLoader
} from 'vue-content-loader'

使用方法
<ContentLoader>
  <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
  <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
  <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
  <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
  <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
  <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
</ContentLoader>
```
For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
