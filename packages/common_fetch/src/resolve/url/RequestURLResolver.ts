import {Resolver} from "../Resolver";
import {ProxyApiService} from "../../proxy/ProxyApiService";


/**
 * url 解析
 */
export  interface RequestURLResolver extends Resolver<string> {


    /**
     * 解析url
     * @param apiService  接口服务
     * @param methodName  服务方法名称
     * @param data        服务请求数据
     */
    resolve: (apiService: ProxyApiService, methodName: string,data:object) => string;


}