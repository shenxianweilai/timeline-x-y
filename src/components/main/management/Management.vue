<template>
  <div id="management">
    <h2>管理测试</h2>
    <div id="content-wrapper">
      <el-row :gutter="10">
        <el-col :span="12", :offset="1">
          time-analysis-per-month
          time-analysis-per-year
        </el-col>
        <el-col :span="10">
          time-analysis-by-type
          edit-time-record
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import EditTimeRecord from './EditTimeRecord'
  import TimeAnalysisByType from './TimeAnalysisByType'
  import TimeAnalysisPerMonth from './TimeAnalysisPerMonth'
  import TimeAnalysisPerYear from './TimeAnalysisPerYear'
  export default {
    name: 'management',
    components: {
      EditTimeRecord,
      TimeAnalysisByType,
      TimeAnalysisPerMonth,
      TimeAnalysisPerYear
    }
  }
</script>

<style>
#management
{
  width: 100%;
  height: 100%;
  position: absolute;
}
#management #content-wrapper
{
  width: 100%;
  position: absolute;
  top: 25px
}
#management #content-wrapper .el-card
{
  background-color: rgba(0,0,0,0.2);
}
#management #content-wrapper .el-card input
{
  background-color: transparent;
  color: white
}
#management .el-picker-panel .el-dopdown-menu
{
  background-color: rgba(0,0,0,0.3);
}
#management .el-picker-panel .el-picker-panel button .el-dropdown .el-dorpdown-menu
{
  color: white
}
.el-month-table .el-year-table .el-date-table td .cell th
{
  color: white
}
.el-month-table .el-year-table .el-date-table td .cell:hover
{
  background-color: #20c1ff
}
.el-month-table .el-year-table .el-date-table td .available:hover
{
  background-color: #20c1ff
}
</style>
