import {instance} from './http';

// let base='/api';
// let base2='/api';

let base= Util.newDom + '/daily-inspection';
let base2= Util.newDom + '/backend-web';





// export const getRefundDetail = params =>{ return instance.get(`${base}/inspection/project/group`,{params:params}).then(res => res.data); };
// export const addGroup = params => { return instance.post(`${base}/inspection/project/group`, params).then(res => res.data); };
// 图片接口
// export const upload = (params,config) => {return instance.post('/upload',params,config).then(res => res.data);};
// let config = {
//   headers: {
//     flag: "img",
//     "Content-Type": "multipart/form-data" 
//   }
// };
// 页面
// this.api.getRefundDetail({ merchant_id: this.merchant_id }).then(res => {
//     if (res.result_code == 0) {
//       let _data = res.result_info;
//       this.merchantAccount = _data;
//     }else {
//        this.$toast(res.err_msg);
//     }
//   });
