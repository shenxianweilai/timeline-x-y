<template>
  <div id="time-slide">
    <h2>时间展</h2>
    <div class="slide" v-for="(record, i) in $store.state.timeRecords" :class="'slide-bg-' + Number.parseInt(i % 10)">
      <div class="record-info">
        <h2>{{record.year + '年' + record.month + '月' +record.date + '日'}}</h2>
        <h3>{{days[record.day]}}</h3>
        <p v-for="(item,index) in record.items">{{index + 1 + '.' +item.content +',' +item.time +'h.'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'time-slide',
    data () {
      return {
        days: [
          '星期日',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六'
        ]
      }
    }
  }
</script>

<style>
#time-slide
{
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center
}
#time-slide .slide-bg-0
{
 background-image: url(../../../assets/slide-bg-0.jpg)
}
#time-slide .slide-bg-1
{
    background-image: url(../../../assets/slide-bg-1.jpg)
}
#time-slide .slide-bg-2
{
    background-image: url(../../../assets/slide-bg-2.jpg)
}
#time-slide .slide-bg-3
{
    background-image: url(../../../assets/slide-bg-3.jpg)
}
 #time-slide .slide-bg-4
{
    background-image: url(../../../assets/slide-bg-4.jpg)
}
#time-slide .slide-bg-5
{
   background-image: url(../../../assets/slide-bg-5.jpg)
}
#time-slide .slide-bg-6
{
    background-image: url(../../../assets/slide-bg-6.jpg)
}
#time-slide .slide-bg-7
{
    background-image: url(../../../assets/slide-bg-7.jpg)
}
 #time-slide .slide-bg-8
{
    background-image: url(../../../assets/slide-bg-8.jpg)
}
 #time-slide .slide-bg-9
{
    background-image: url(../../../assets/slide-bg-9.jpg)
}
#time-slide .slide
{
    width: 30%;
    height: 300px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    display: inline-block;
    margin: 5px
}
#time-slide .slide .record-info
{
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      padding-left: 15px
}
#time-slide .slide .record-info h2
{
        font-size: 18px
}
#time-slide .slide .record-info h3, p
{
        font-size: 14px
}
#time-slide .slide .record-info h2, h3, p
{
        margin: 5px
}
</style>
