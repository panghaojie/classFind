/*
 * @Descripttion: classFind test
 * @Author: panghaojie
 * @Email: pang_hao_jie@163.com
 * @Date: 2021-02-03 22:46:58
 * @LastEditTime: 2021-02-04 00:04:24
 */
import {find} from '../es6-lib/classFind.js'

var test = () => {
    var data = [
        {userId: 8, title: 'title1'},
        {userId: 11, title: 'other'},
        {userId: 15, title: null},
        {userId: 19, title: 'title2'}
    ];
    //查找data中，符合条件的数据，并进行排序
    var result = find(data,{"title": /\d$/},'userId', 'desc');
    console.log(result); // [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];
};

test();