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
          animation: false, //是否显示动画控件
          homeButton: true, //是否显示home键
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

        viewer.scene.imageryLayers.addImageryProvider(
            new Cesium.UrlTemplateImageryProvider({
                url:'./cesiumData/tif/{z}/{x}/{y}.png',
                fileExtension: 'png'
            })
        );

        // 设置相机
        viewer.camera.setView({
          destination : Cesium.Cartesian3.fromDegrees(114.326000, 30.58000, 1271.81)
        })


        // 点击"home"按钮让相机跳转到别的经纬度
        viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
            e.cancel = true;
            viewer.scene.camera.flyTo({
              // 前两个参数为经纬度，第三个参数为高度
              destination : Cesium.Cartesian3.fromDegrees(113.98886, 22.60614, 1271.81)
            });
        });

        open();
      } catch(e) {
        console.log(e);
      }
    })

    // 打开提示窗
    function open() {
      ElNotification({
          title: '提示',
          message: '点击右上方按钮即可跳转到影像位置',
          type: 'success',
          offset: 100
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#cesiumContainer {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
