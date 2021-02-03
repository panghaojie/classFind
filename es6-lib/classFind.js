/*
 * @Descripttion: classFind
 * @Author: panghaojie
 * @Email: pang_hao_jie@163.com
 * @Date: 2021-02-03 22:37:25
 * @LastEditTime: 2021-02-04 00:03:06
 */
export const find = (data,whereObj,key,type) =>{
    class classFind{
        constructor(data){
            this.data = data
        }
        where(obj){
            //过滤数据
            this.data = this.data.filter((itemValue) => {
                for (const key in obj) {
                    if(obj[key].test(itemValue[key])) return true
                }
            })
            return this;
        }
        orderBy(key,type){
            //排序
            this.data.sort((a,b) => {
                if(type == 'desc') return b[key] - a[key]
                return a[key] - b[key]
            })
            return this
        }
    }
    return new classFind(data).where(whereObj).orderBy(key,type).data
}
