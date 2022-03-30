import axios from "../utils/request"

const base = {
    baseUrl:"http://api.tianapi.com",
    ncov:"/txapi/ncov/index",
    ncovcity:"/txapi/ncovcity/index",
    ncovabroad:"/txapi/ncovabroad/index",
    juheBaseUrl:"/api",
    springTravel:"/springTravel/citys",
    springTravelQuery:"/springTravel/query"
}


const api = {
    /**
     * 疫情数据
     */
    getNcov(params){
        return axios.get(base.baseUrl + base.ncov,{
            params
        })
    },
    /**
     * 省市疫情数据
     */
    getNocvCity(params){
        return axios.get(base.baseUrl + base.ncovcity,{
            params
        })
    },
    /**
     * 世界疫情
     */
    getNcovabroad(params){
        return axios.get(base.baseUrl + base.ncovabroad,{
            params
        })
    },
    /**
     * 各地政策城市数据
     */
    springTravel(params){
        return axios.get(base.juheBaseUrl + base.springTravel,{
            params
        })
    },
    /**
     * 各地政策详情
     */
    springTravelQuery(params){
        return axios.get(base.juheBaseUrl + base.springTravelQuery,{
            params
        })
    }
}

export default api;