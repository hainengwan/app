import { Toast } from 'vant';
import { resolve, reject } from 'q';


export function handlePost(option){
    let qs = require('qs')
    let params = qs.stringify(option.params)
    // let a = {
    //     istoast:true,
    //     url:url,
    //     parmas:{
            
    //     },
    //     toastOption:{

    //     }
    // }
    let toast=null
    if(option.istoast){
        toast  = Toast.loading(option.toastOption);
    }
    return new Promise((resolve,reject)=>{
        this.$http.post(option.url,params).then(res=>{
            console.log(res)
            resolve(res)
            toast.clear();
        }).catch(err=>{
            reject(err)
            toast.clear();
        })
    })
}