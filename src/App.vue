<template>
  <div class="container">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="pathUrl"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        unique-opened="true"
        router
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><film /></el-icon>
            <span>瓦片影像</span>
          </template>
          <el-menu-item index="/tif">影像展示</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><promotion /></el-icon>
            <span>三维模型</span>
          </template>
          <el-menu-item index="2-1">选项一</el-menu-item>
          <el-menu-item index="2-2">选项二</el-menu-item>
          <el-menu-item index="2-3">选项三</el-menu-item>
          <el-menu-item index="2-4">选项四</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>倾斜摄影</span>
          </template>
          <el-menu-item index="/objtiles">三维模型展示</el-menu-item>
        </el-sub-menu>
      </el-menu>
      <router-view></router-view>
  </div>
</template>

<script>
import {
  Film,
  Promotion,
  Menu as IconMenu,
} from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'app',
  components: {
    Film,
    Promotion,
    IconMenu
  },
  setup() {
    // 路由对象
    const route = useRoute()
    // 侧边栏默认展开地址
    const pathUrl = ref('/objtiles')

    // 监听路由的变化
    watch(route, (count, prevCount) => {
      pathUrl.value = count.path
    }, { deep: true })

    return {
      pathUrl
    }
  }
}
</script>

<style>
.container, #app {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 去掉logo */
.cesium-viewer-bottom { 
  display: none!important; 
} 
.el-menu-vertical-demo {
  position: absolute;
  left:50px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  width: 200px;
  height: 500px;
}
.el-menu, .el-sub-menu {
  border: none;
}
</style>
