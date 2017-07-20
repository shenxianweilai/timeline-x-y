<template>
  <div id="main">
    <div id="header">
      <el-row :gutter="20">
        <el-col :span="1" :offset="1">
          <i class="el-icon-time" id="logo"></i>
        </el-col>
        <el-col :span="2" :offset="12">
          <router-link class="header-item" to="timeline" active-class="header-item-active">时光轴</router-link>
        </el-col>
        <el-col :span="2">
          <router-link class="header-item" to="time-slide" active-class="header-item-active">时光展</router-link>
        </el-col>
        <el-col :span="2">
          <router-link class="header-item" to="management" active-class="header-item-active">管理</router-link>
        </el-col>
        <el-col :span="2">
         <span class="header-item" @click="lockScreen">锁屏</span>
        </el-col>
      </el-row>
    </div>
    <div id="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main',
    methods: {
      lockScreen () {
        this.$store.commit('LOCK')
        this.$router.replace('/auth')
      }
    },
    created () {
      if (this.$store.state.timeRecords.length === 0) {
        this.$store.dispatch('fatchData')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main
{
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(../../assets/main-bg.jpg) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed
}

#main #header
{
    width: 100%;
    height: 75px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.15);
    box-shadow: 0px -3px 3px rgba(0,0,0,0.30) inset;
    line-height: 75px;
    z-index: 99
}

#main #header .el-row
{
  vertical-align: middle
}

#main #header .el-row .header-item, #logo
{
  font-size: 18px;
  color: white;
  text-decoration: none
}

#main #header .el-row .header-item:hover, .header-item-active
{
  color: #79f7af;
  cursor: pointer
}

#body
{
  width: 100%;
  position: absolute;
  top: 75px;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden
}
</style>
