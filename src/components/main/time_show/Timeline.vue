<template>
  <div id="timeline">
    <h2>时间轴</h2>
    <div class="timeline-wrapper">
      <div class="timeline">
        <div class="timeline-records" v-for="(record,i) in this.$store.state.timeRecords">
          <div class="side-info">
            <span class="year">{{record.year}}</span>
          </div>
          <div class="timeline-icon" :class="iconBg[Number.parseInt(i%12)]">
            <div class="month">
              {{record.month}}月
              <span class="date">{{record.date}}</span>
            </div>
          </div>
          <div class="timeline-content">
            <h2 class="day">
            {{days[record.day]}}
            </h2>
            <div class="details">
              <p v-for="(item,index) in record.items">
              {{ index + 1 + '. ' + item.content + ', ' + item.time + 'h.'}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'timeline',
    data () {
      return {
        iconBg: [
          'iconbg-turqoise',
          'iconbg-black',
          'iconbg-brown',
          'iconbg-indigo',
          'iconbg-purple',
          'iconbg-grey',
          'iconbg-blue',
          'iconbg-red',
          'iconbg-orange',
          'iconbg-opal',
          'iconbg-green',
          'iconbg-pink'
        ],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#timeline
{
  width: 100%;
  height: 100%;
  position: absolute
}

#timeline .timeline-wrapper, .timeline-wrapper *
  {

    box-sizing: border-box;
    padding: 0;
    margin: 0
}

#timeline .timeline-wrapper
{
    width: 90%;
    font-family: Arial,Helvetica,sans-serif;
    font-weight: 400;
    position: absolute;
    top: 3em;
    left: 5%
}
#timeline .timeline-wrapper .timeline
{
    padding: 15px 0;
    position: relative
}
#timeline .timeline-wrapper .timeline .timeline-records
{
    margin: 0;
    border: 0 none;
    padding: 0 45px 4px 0;
    width: 50%
}
#timeline .timeline-wrapper .timeline .timeline-records .side-info
{
    left: 50%;
    margin: 34px 0 0 38px;
    position: absolute;
    font-weight: 375;
    color: white
}
#timeline .timeline-wrapper .timeline .timeline-records .timeline-icon
{

    background: #fff;
    line-height: 52px;
    position: absolute;
    text-align: center;
    margin: 16px 0 0 -26px;
    border-radius: 30px;
    color: #FFF;
    font-size: 14px;
    height: 52px;
    width: 52px;
    left: 50%;
    z-index: 10
}
#timeline .timeline-wrapper .timeline .timeline-records .month
{
    font-family: Arial,Helvetica,sans-serif;
    line-height: 22px;
    font-weight: 375;
    font-size: 10px;
    padding: 4px 0
}
#timeline .timeline-wrapper .timeline .timeline-records .month .date
{

    display: block;
    line-height: 9px;
    font-weight: 525;
    font-size: 22px
}
#timeline .timeline-wrapper .timeline .timeline-records .iconbg-turqoise
  {

    background: #28C0C6
}
#timeline .timeline-wrapper .timeline .timeline-records .iconbg-black
{
    background: #2F3949
}
#timeline .timeline-wrapper .timeline .timeline-records .iconbg-brown
{
    background: #E46D2B
}
 #timeline .timeline-wrapper .timeline .timeline-records .iconbg-indigo
{
    background: #3F51B5
}
 #timeline .timeline-wrapper .timeline .timeline-records .iconbg-purple
{
    background: #9C27B0
}
 #timeline .timeline-wrapper .timeline .timeline-records .iconbg-grey
{        
  background: #7E8DA3
}
#timeline .timeline-wrapper .timeline .timeline-records .iconbg-blue
{
  background: #2196F3
}
#timeline .timeline-wrapper .timeline .timeline-records .iconbg-red
{
   background: #F25B5A
}
#timeline .timeline-wrapper .timeline .timeline-records .iconbg-orange
{
   background: #F0CA45
}
 #timeline .timeline-wrapper .timeline .timeline-records .iconbg-opal
{
   background: #76BBDA
}
#timeline .timeline-wrapper .timeline .timeline-records .iconbg-green
{
   background: #75CE66
}
 #timeline .timeline-wrapper .timeline .timeline-records .iconbg-pink
{
   background: #F282C7
}
#timeline .timeline-wrapper .timeline .timeline-records  .iconbg-turqoise, .iconbg-red, .iconbg-opal, .iconbg-blue,
 .iconbg-grey, .iconbg-pink, .iconbg-green, .iconbg-black, .iconbg-brown, .iconbg-purple, .iconbg-indigo, .iconbg-orange
{
   box-shadow: 0 0 0 4px white,inset 0 2px 0 rgba(0,0,0,0.30),0 3px 0 4px rgba(0,0,0,0.30)
}
#timeline .timeline-wrapper .timeline .timeline-records .timeline-content
{
  background: rgba(0, 0, 0, 0.2);
  color: white;
  position: relative;
  transition: all .4s;
  border-radius: 10px;
  padding: 22px;
  box-shadow: 0px -3px 3px rgba(0,0,0,0.30) inset
}
 #timeline .timeline-wrapper .timeline .timeline-records .timeline-content .day
{
  font-size: 14px;
  font-family: Arial,Helvetica,sans-serif;
  margin: 0 0 8px;
  color: #00efc8;
  font-weight: 375
}
#timeline .timeline-wrapper .timeline .timeline-records .timeline-content .details
{
   margin: 0
}
#timeline .timeline-wrapper .timeline .timeline-records .timeline-content .details p
{
  margin: 0;
  line-height: 18px;
  font-size: 14px;
  font-weight: 300
}
#timeline .timeline-wrapper .timeline .timeline-records .timeline-content:after
{
  content: "";
  display: block;
  border: 15px solid transparent;
  border-left-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  right: -30px;
  top: 26px
}
#timeline .timeline-wrapper .timeline .timeline-records:nth-child(even)
{
  margin-left: 50%;
  padding: 0 0 4px 45px
}
#timeline .timeline-wrapper .timeline .timeline-records:nth-child(even) .side-info
{
  left: auto;
  margin: 18px 38px 0 0;
  text-align: right;
  right: 50%
}
#timeline .timeline-wrapper .timeline .timeline-records:nth-child(even)  .timeline-content:before
{
  border: 15px solid transparent;
  border-right-color: rgba(0, 0, 0, 0.3);
  left: -30px;
  right: auto
}
#timeline .timeline-wrapper .timeline .timeline-records:nth-child(even)  .timeline-content:after
{
  border: 14px solid transparent;
  border-right-color: rgba(0, 0, 0, 0.3);
  left: -27px;
  right: auto
}
#timeline .timeline-wrapper .timeline:before
{
  content: "";
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  margin-left: -2px;
  position: absolute;
  display: block;
  height: 100%;
  width: 4px;
  left: 50%;
  top: 0
}
</style>
