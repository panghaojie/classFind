'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Descripttion: classFind
 * @Author: panghaojie
 * @Email: pang_hao_jie@163.com
 * @Date: 2021-02-03 22:37:25
 * @LastEditTime: 2021-02-04 00:03:06
 */
var find = exports.find = function find(data, whereObj, key, type) {
    var classFind = function () {
        function classFind(data) {
            _classCallCheck(this, classFind);

            this.data = data;
        }

        _createClass(classFind, [{
            key: 'where',
            value: function where(obj) {
                //过滤数据
                this.data = this.data.filter(function (itemValue) {
                    for (var _key in obj) {
                        if (obj[_key].test(itemValue[_key])) return true;
                    }
                });
                return this;
            }
        }, {
            key: 'orderBy',
            value: function orderBy(key, type) {
                //排序
                this.data.sort(function (a, b) {
                    if (type == 'desc') return b[key] - a[key];
                    return a[key] - b[key];
                });
                return this;
            }
        }]);

        return classFind;
    }();

    return new classFind(data).where(whereObj).orderBy(key, type).data;
};
