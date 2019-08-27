import Login from '../login'
import Order from '../order'
import Calculate from '../calculate'
import Forms from '../forms'
import { Children } from 'react';
import Life from '../life'
import Toggle from '../toggle'
import OnOrOff from '../toggle/onOrOff'
import Condition from '../toggle/condition'
import Search from '../order/search'
import List from '../order/list'
import Double from '../calculate/double'
import Temperature from '../calculate/temperature'
import Func from '../func'
import Count from '../calculate/count'

export default [{
        path: '/login',
        Icon: 'user',
        name: '账户',
        component: Login
    },
    {
        path: '/order',
        Icon: 'video-camera',
        name: '遍历',
        component: Order,
        children: [{
                path: '/order/search',
                name: '查询',
                component: Search
            },
            {
                path: '/order/list',
                name: '列表',
                component: List
            },
        ]
    },
    {
        path: '/calculate',
        Icon: 'upload',
        name: '计算',
        component: Calculate,
        children: [{
                path: '/calculate/search',
                name: '成倍自增',
                component: Double
            },
            {
                path: '/calculate/list',
                name: '温度转换',
                component: Temperature
            },
            {
                path: '/calculate/count',
                name: '自增/自减',
                component: Count
            }
        ]
    }, {
        path: '/life',
        Icon: 'form',
        name: '生命周期',
        component: Life
    }, {
        path: '/toggle',
        Icon: 'form',
        name: '开关',
        component: Toggle,
        children: [{
                path: '/toggle/onOrOff',
                name: '开关',
                component: OnOrOff
            },
            {
                path: '/toggle/condition',
                name: '切换组件',
                component: Condition
            },
        ]
    }, {
        path: '/func',
        Icon: 'form',
        name: '组合和继承',
        component: Func
    }, {
        path: '/form',
        Icon: 'form',
        name: '表单集',
        component: Forms
    }
];
//export default routes;