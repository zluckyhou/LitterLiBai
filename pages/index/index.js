//index.js
//获取应用实例
const app = getApp()
var initData = "this is first line\nthis is second line"
var extraLine = [];

Page({
  data: {
    motto: 'Wechat!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    defLat:'31.2303700000',
    defLong: '121.4737000000',
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    text:initData,
    blank_line:'\n',
    image: [{
      name: 'img',
      attrs: {
        class: 'div_class',
        src:'../../images/libai_001.jpeg',
        alt:'里小白回眸',
        // style: 'line-height: 60px; color: red;'
        style:'border-radius: 8px; max-width:80%; height:auto;text-align:center;margin-left:auto;margin-right:auto;display:block;'
      },
      children: [{
        type: 'node',
        // text: 'Hello&nbsp;World!'
      }]
    }],
    a:[{
      name:"a",
      attrs:{
        class:'a_class',
        href:'http://zluckyhou.github.io/',
        target:'_blank',
        style:'color:blue;'
      },
      children:[{
        type:'text',
        text:'welcome to my blog'
      }]
    }],
    br:[{
      name:'br',
      attrs:{

      },
      children:[{

      }]
    }],
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  tap() {
    console.log('tap')
  },
  add:function(e){
    extraLine.push('other line')
    this.setData({
      text:initData+'\n'+extraLine.join('\n')
    })
  },
  remove:function(e){
    if (extraLine.length>0){
      extraLine.pop()
      this.setData({
        text:initData+'\n'+extraLine.join('\n')
      })
    }
  },

  tapName:function(event){
    console.log(event)
  },
  // add:function(e){
  //   this.setData({
  //     count:this.data.count + 1
  //   })
  // },
  changeName: function () {
    this.setData({
      motto: app.globalData.userInfo.nickName
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
