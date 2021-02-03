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
 * @LastEditTime: 2021-02-03 23:16:07
 */
var find = exports.find = function find(data) {
    var classFind = function () {
        function classFind(data) {
            _classCallCheck(this, classFind);

            this.data = data;
        }

        _createClass(classFind, [{
            key: 'where',
            value: function where(obj) {
                //过滤数据
                //校验obj
                return this.data.find(function (itemValue) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var key = _step.value;

                            if (obj[key].test(itemValue[key])) return true;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                });
            }
        }, {
            key: 'orderBy',
            value: function orderBy(key, type) {
                //排序
                this.data.compare(function (a, b) {
                    if (type == 'desc') return a[key] - b[key] > 0;
                    return a[key] - b[key] < 0;
                });
            }
        }]);

        return classFind;
    }();

    return new classFind(data);
};
