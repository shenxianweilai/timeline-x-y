<template>
  <div id="auth">
    <star-flow></star-flow>
    <div id="auth-input">
      <el-row :gutter="20">
        <el-col :span="8" offset="8">
          <el-tooltip :disabled="disabled" :content="errorTip" placement="bottom-start" effect="light">
            <el-input placeholder="请输入密码" v-model="password" type="password">
              <template slot="append">
                <el-button @click="signin">Go</el-button>
              </template>
            </el-input>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import StarFlow from './StarFlow'
  export default {
    name: 'auth',
    components: {StarFlow},
    data () {
      return {
        password: '',
        disabled: true,
        errorTip: ''
      }
    },
    methods: {
      setTip (tip) {
        this.errorTip = tip
        this.disabled = false
        setTimeout(() => {
          this.disabled = true
          this.errorTip = ''
        }, 1500)
      },

      signin () {
        if (!this.password) {
          this.setTip('密码不能为空')
        } else {
          this.$store.dispatch('unlockScreen', this.password).then((err) => {
            if (err) this.setTip('密码错误')
              else this.$router.replace('/main')
          })
        }
      }
    }
   }
</script>

<style>
#auth
{
  width: 100%;
  height: 100%;
  background: url(../../assets/auth-bg.jpg) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
#auth #auth-input
{
  position: absolute;
  width: 100%;
  height: 30px;
  top: calc(50% - 15px)
}
</style>
