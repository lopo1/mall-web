/*
 * @Author: your name
 * @Date: 2022-01-05 14:35:33
 * @LastEditTime: 2022-01-06 16:24:46
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\src\utils\update.ts
 */
import {ossUrl} from '@/api/api'
export function send_request (){
    var xmlhttp = null;
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    // else if ((window as any).ActiveXObject)
    // {
    //     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    // }

    if (xmlhttp!=null)
    {
      let tokenUrl = ossUrl//"http://39.107.30.137:8029"
        // serverUrl是 用户获取 '签名和Policy' 等信息的应用服务器的URL，请将下面的IP和Port配置为您自己的真实信息。
        let serverUrl = tokenUrl+'/oss/v1/oss/token'

        xmlhttp.open( "GET", serverUrl, false );
        xmlhttp.send( null );
        return xmlhttp.responseText
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
};
export default send_request
