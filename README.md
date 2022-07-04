# 基于 Vue3 和 Cesium 的三维可视化系统

## 项目说明

> 本项目为三维可视化项目，前端框架采用 [Vite](https://vitejs.cn/) 和 [Vue3](https://v3.cn.vuejs.org/) ；三维可视化框架采用 [Cesium](https://www.cesium.com/) ；UI组件框架采用 [Element Plus](https://element-plus.gitee.io/zh-CN/) 。

> 本项目为课题组项目，课题组名称为`Smart Map小组`，小组的github地址在[这里](https://github.com/Cartographic-group-of-Hubei-University)。本课题组一直从事于`数据可视化开发`的相关工作，有丰富的数据可视化经验，对很多的可视化框架如[Cesium](https://www.cesium.com/)、[babylon.js](https://www.babylonjs.com/)、[MapBox GL](http://www.mapbox.cn/mapbox-gl-js/api/)、[ECharts](https://echarts.apache.org/zh/index.html)、[Highcharts](https://www.highcharts.com.cn/)等有着项目实战经验。

> 项目目前还在研发阶段，后期将会陆续完善项目，开发其他相关的功能及交互，如果您有疑问请直接在 Issues 中进行提问，欢迎大家积极提问。

## 技术栈

- **前端框架：**`Vite` + `Vue3全家桶`

- **三维可视化框架：**`Cesium`

- **UI组件：**`Element Plus`

## 功能展示

### 三维模型展示

使用`Cesium Lab`中的`通用模型切片`工具对数据进行处理，获取`b3dm`格式的数据；在`Vue`中，通过`Cesium`框架将数据进行加载显示。

通过`Element Plus`中的`Menu`组件进行菜单栏的显示以及路由的管理；并使用`Cesium`内部三维地形底图结合模型数据实现模型的展示。

<div align=center><img src="https://github.com/Cartographic-group-of-Hubei-University/vue-cesium-visualization/raw/master/images/cesium1.gif"></div>

### 影像展示

使用`Cesium`对处理后的tif影像进行显示，并使用`Element Plus`中的`Notification`组件对影像跳转操作进行提示。

结合`Cesium`中的相关方法，让场景中的相机进行跳转，跳转到目标影像区域。

<div align=center><img src="https://github.com/Cartographic-group-of-Hubei-University/vue-cesium-visualization/raw/master/images/cesium2.gif"></div>

## 运行项目（Node.js 12.0+）

```
1. 克隆到本地

git clone https://github.com/Cartographic-group-of-Hubei-University/vue-cesium-visualization.git

2. 进入文件夹并安装依赖

cd vue-cesium-visualization
npm install

3. 开启本地服务

npm run dev

4. 项目打包

npm run build
```

## 开发环境(For Developer)

> 如果您想根据该项目进行自己的相关开发，可以参照下面的步骤来进行。

- **首先，您需要编写自己的组件，在组件中实现三维模型可视化及相关的交互逻辑。您可以在`src/components`文件夹下实现自己的组件。**

- **其次，您需要注册自己的路由(即在`src/router/index.js`文件中添加自己的路由地址)，具体位置如下图所示。**

<div align=center><img src="https://github.com/Cartographic-group-of-Hubei-University/vue-cesium-visualization/raw/master/images/step1.png"></div>

首先需要在`index.js`中导入对应的组件，然后在`routes`中添加对应模块的<strong>路由地址(path)</strong>、<strong>名称(name)</strong>以及<strong>组件(component)</strong>。

- **之后，您需要在`App.vue`中修改对应的目录树名称，并添加对应的路由链接，以此来实现点击目录树跳转到对应的路由地址并显示相关的组件。**

<div align=center><img src="https://github.com/Cartographic-group-of-Hubei-University/vue-cesium-visualization/raw/master/images/step2.png"></div>

修改的位置如上图所示。其中`<el-menu-item index="xxx">xxx</el-menu-item>`为一个导航栏，您可以修改导航栏的名称；导航栏中的`index`属性的属性值为<strong>路由地址</strong>，您只需要将之前自己创建的路由地址与之进行替换就行了。之后，你只需要点击对应的导航栏，就可以跳转到对应的路由链接，显示相应的组件了。

- **最后，由于本项目没有涉及到后端的相关操作，您可以将组件使用到的模型数据统一放在`public/cesiumData`文件夹下，在使用`Cesium`或者其他框架进行可视化展示的时候，以`./cesiumData/xxx`为数据地址即可获取到对应的模型数据。**