var Api = require('../../utils/Api.js');
Page({
    data: {
        node: [{title:"123"}]
    },
    fetchData: function () {
        var that = this;
        wx.request({
            url: Api.getAllNode(),
            success: function (res) {
                that.setData({
                    node:res.data
                });
            }
        })
    },
    onLoad: function () {
        this.fetchData();
    }
})