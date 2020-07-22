import * as Types from './../constants/ActionType';
import callApi from '../utils/ApiCaller';

export const actFecthNewsRequet = () =>{
    return(dispath) =>{
        return callApi('news','GET', null).then(res =>{
            dispath(actFechNews(res.data))
        })
    }
}


export const actFechNews =(news)=>{
        return{
            type : Types.FETCH_NEWS,
            news
        }
    }