<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import * as Cesium from 'cesium';
import { onMounted } from 'vue'

export default {
  name: 'app',
  setup() {
    onMounted(() => {
      try {
        const viewer = new Cesium.Viewer('cesiumContainer', {
          terrainProvider: Cesium.createWorldTerrain(), // 加载天地图地形
          animation: false, //是否显示动画控件
          homeButton: false, //是否显示home键
          geocoder: false, //是否显示地名查找控件，如果设置为true，则无法查询
          baseLayerPicker: false, //是否显示图层选择控件
          timeline: false, //是否显示时间线控件
          fullscreenButton: true, //是否全屏显示
          scene3DOnly: false, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
          infoBox: false, //是否显示点击要素之后显示的信息
          sceneModePicker: false, //是否显示投影方式控件  三维/二维
          navigationInstructionsInitiallyVisible: true,
          navigationHelpButton: false, //是否显示帮助信息控件
          selectionIndicator: false, //是否显示指示器组件
        })

        const scene = viewer.scene;

        const tileset = scene.primitives.add(
          new Cesium.Cesium3DTileset({
            url: './cesiumData/3dtile/tileset.json',
          })
        );

        // 初始化图层
        tileset.readyPromise
          .then(function (tileset) {
            viewer.zoomTo(
              tileset,
              new Cesium.HeadingPitchRange(
                0.9,
                -0.6,
                tileset.boundingSphere.radius * 1.8
              )
            );
          })
          .catch(function (error) {
            console.log(error);
          });
          
      } catch(e) {
        console.log(e);
      }
    })
  }
}
</script>

<style>
#cesiumContainer {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
