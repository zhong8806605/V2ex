var Api = require('../../utils/Api.js');
Page({
    data: {
        hot:[]
    },
    fetchData: function () {
        var that = this;
        wx.request({
            url: Api.getHotestTopic({
                p: null
            }),
            success:function(res){
                console.log(res.data);
                that.setData({
                    hot:res.data
                })
            }
        })
    },
    onLoad: function () {
        this.fetchData();
    }
})