const common = {
    state: {
        messages: [],
        contacts: []
    },
    mutations: {
        GET_MESSAGES_LIST: (state, list) => {
            state.messages = [...state.messages, ...list];
        },
        GET_CONTACTS_LIST: (state, list) => {
            state.contacts = [...state.contacts, ...list];
        },
    },
    actions: {
        // 获取消息列表
        GetMessagesList({ commit, state }) {
            let list = [{
                    image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170928180518_0_KcXn.jpg",
                    name: "万丈-Infinite",
                    time: "上午11:47",
                    type: "",
                    content: "+1"
                },
                {
                    image: "http://img.pingan.fusio.com.cn/materials/pic/700/20171012184532_0_xTaB.jpg",
                    name: "切图者联盟",
                    time: "上午11:47",
                    type: "",
                    content: "dav:世界上最可怕的不是孤独终老，而是跟那个使你孤独的人终老。"
                },
                {
                    image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170928180152_0_ldsQ.jpg",
                    name: "群助手",
                    time: "上午11:40",
                    type: "[6个群有新消息]",
                    content: ""
                },
                {
                    image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170920181437_0_YqPR.jpg",
                    name: "VR实验室",
                    time: "上午11:38",
                    type: "",
                    content: "收到"
                },
                {
                    image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170920181200_0_czDQ.jpg",
                    name: "我的电脑",
                    time: "上午11:36",
                    type: "",
                    content: "[图片]IMG_8724.PNG"
                },
                {
                    image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170919182858_0_5sfc.jpg",
                    name: "QQ看点",
                    time: "上午11:30",
                    type: "",
                    content: "健身最女王:除了彭于晏，也就他的身材让女人着迷！"
                },
                {
                    image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171022233804_0_0QNg.jpg",
                    name: "D3.js",
                    time: "上午11:30",
                    type: "",
                    content: "w 加入本群"
                },
                {
                    image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170919182002_0_teEG.jpg",
                    name: "购物号",
                    time: "上午11:27",
                    type: "[新消息]",
                    content: "蘑菇街每日精选:秋冬好货双十一，全场49元封顶！"
                },
                {
                    image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171012183756_0_i4am.jpg",
                    name: "夕阳",
                    time: "上午11:20",
                    type: "",
                    content: "知道"
                },
                {
                    image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171012183530_0_CyI7.jpg",
                    name: "小红帽",
                    time: "上午11:19",
                    type: "",
                    content: "就这样处理吧"
                },
                {
                    image: "http://img.pingan.fusio.com.cn/materials/pic/300/20170929190950_0_THbY.jpg",
                    name: "京东商城",
                    time: "上午11:17",
                    type: "[新消息]",
                    content: "京东每日精选:好货双十一，全场99元封顶！"
                }
            ];
            commit('GET_MESSAGES_LIST', list);
        },
        // 获取联系人列表
        GetContactsList({ commit, state }) {
            let list = [{
                    name: "特别关心",
                    online: 2,
                    total: 2,
                    closed: true,
                    list: [{
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170928180518_0_KcXn.jpg",
                            name: "万丈-Infinite",
                            time: "上午11:47",
                            type: "",
                            content: "+1"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20171012184532_0_xTaB.jpg",
                            name: "切图者联盟",
                            time: "上午11:47",
                            type: "",
                            content: "dav:世界上最可怕的不是孤独终老，而是跟那个使你孤独的人终老。"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170928180152_0_ldsQ.jpg",
                            name: "群助手",
                            time: "上午11:40",
                            type: "[6个群有新消息]",
                            content: ""
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170920181437_0_YqPR.jpg",
                            name: "VR实验室",
                            time: "上午11:38",
                            type: "",
                            content: "收到"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170920181200_0_czDQ.jpg",
                            name: "我的电脑",
                            time: "上午11:36",
                            type: "",
                            content: "[图片]IMG_8724.PNG"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170919182858_0_5sfc.jpg",
                            name: "QQ看点",
                            time: "上午11:30",
                            type: "",
                            content: "健身最女王:除了彭于晏，也就他的身材让女人着迷！"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171022233804_0_0QNg.jpg",
                            name: "D3.js",
                            time: "上午11:30",
                            type: "",
                            content: "w 加入本群"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170919182002_0_teEG.jpg",
                            name: "购物号",
                            time: "上午11:27",
                            type: "[新消息]",
                            content: "蘑菇街每日精选:秋冬好货双十一，全场49元封顶！"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171012183756_0_i4am.jpg",
                            name: "夕阳",
                            time: "上午11:20",
                            type: "",
                            content: "知道"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171012183530_0_CyI7.jpg",
                            name: "小红帽",
                            time: "上午11:19",
                            type: "",
                            content: "就这样处理吧"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/300/20170929190950_0_THbY.jpg",
                            name: "京东商城",
                            time: "上午11:17",
                            type: "[新消息]",
                            content: "京东每日精选:好货双十一，全场99元封顶！"
                        }
                    ]
                },
                {
                    name: "我的好友",
                    online: 23,
                    total: 56,
                    closed: true,
                    list: [{
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170928180518_0_KcXn.jpg",
                            name: "万丈-Infinite",
                            time: "上午11:47",
                            type: "",
                            content: "+1"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20171012184532_0_xTaB.jpg",
                            name: "切图者联盟",
                            time: "上午11:47",
                            type: "",
                            content: "dav:世界上最可怕的不是孤独终老，而是跟那个使你孤独的人终老。"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170928180152_0_ldsQ.jpg",
                            name: "群助手",
                            time: "上午11:40",
                            type: "[6个群有新消息]",
                            content: ""
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170920181437_0_YqPR.jpg",
                            name: "VR实验室",
                            time: "上午11:38",
                            type: "",
                            content: "收到"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170920181200_0_czDQ.jpg",
                            name: "我的电脑",
                            time: "上午11:36",
                            type: "",
                            content: "[图片]IMG_8724.PNG"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170919182858_0_5sfc.jpg",
                            name: "QQ看点",
                            time: "上午11:30",
                            type: "",
                            content: "健身最女王:除了彭于晏，也就他的身材让女人着迷！"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171022233804_0_0QNg.jpg",
                            name: "D3.js",
                            time: "上午11:30",
                            type: "",
                            content: "w 加入本群"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170919182002_0_teEG.jpg",
                            name: "购物号",
                            time: "上午11:27",
                            type: "[新消息]",
                            content: "蘑菇街每日精选:秋冬好货双十一，全场49元封顶！"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171012183756_0_i4am.jpg",
                            name: "夕阳",
                            time: "上午11:20",
                            type: "",
                            content: "知道"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171012183530_0_CyI7.jpg",
                            name: "小红帽",
                            time: "上午11:19",
                            type: "",
                            content: "就这样处理吧"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/300/20170929190950_0_THbY.jpg",
                            name: "京东商城",
                            time: "上午11:17",
                            type: "[新消息]",
                            content: "京东每日精选:好货双十一，全场99元封顶！"
                        }
                    ]
                },
                {
                    name: "职场工作",
                    online: 123,
                    total: 239,
                    closed: true,
                    list: [{
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170928180518_0_KcXn.jpg",
                            name: "万丈-Infinite",
                            time: "上午11:47",
                            type: "",
                            content: "+1"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20171012184532_0_xTaB.jpg",
                            name: "切图者联盟",
                            time: "上午11:47",
                            type: "",
                            content: "dav:世界上最可怕的不是孤独终老，而是跟那个使你孤独的人终老。"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170928180152_0_ldsQ.jpg",
                            name: "群助手",
                            time: "上午11:40",
                            type: "[6个群有新消息]",
                            content: ""
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170920181437_0_YqPR.jpg",
                            name: "VR实验室",
                            time: "上午11:38",
                            type: "",
                            content: "收到"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170920181200_0_czDQ.jpg",
                            name: "我的电脑",
                            time: "上午11:36",
                            type: "",
                            content: "[图片]IMG_8724.PNG"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170919182858_0_5sfc.jpg",
                            name: "QQ看点",
                            time: "上午11:30",
                            type: "",
                            content: "健身最女王:除了彭于晏，也就他的身材让女人着迷！"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171022233804_0_0QNg.jpg",
                            name: "D3.js",
                            time: "上午11:30",
                            type: "",
                            content: "w 加入本群"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170919182002_0_teEG.jpg",
                            name: "购物号",
                            time: "上午11:27",
                            type: "[新消息]",
                            content: "蘑菇街每日精选:秋冬好货双十一，全场49元封顶！"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171012183756_0_i4am.jpg",
                            name: "夕阳",
                            time: "上午11:20",
                            type: "",
                            content: "知道"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/ori/20171012183530_0_CyI7.jpg",
                            name: "小红帽",
                            time: "上午11:19",
                            type: "",
                            content: "就这样处理吧"
                        },
                        {
                            image: "http://img.pingan.fusio.com.cn/materials/pic/300/20170929190950_0_THbY.jpg",
                            name: "京东商城",
                            time: "上午11:17",
                            type: "[新消息]",
                            content: "京东每日精选:好货双十一，全场99元封顶！"
                        }
                    ]
                }
            ];
            commit('GET_CONTACTS_LIST', list);
        },
    }
};

export default common;