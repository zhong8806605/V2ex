// topicList.js
var Api = require('../../utils/Api.js');

Page({
  data: {
    topics: [],
  },
  fetchData: function(id) {
    var that = this;
    wx.request({
      url: Api.getTopicInfo({
        node_id: id
      }),
      success: function(res) {
        that.setData({
          topics: res.data
        })
      }
    })
  },
  onLoad: function (options) {
      console.log(options);
    this.fetchData(options.id);
  }
})
