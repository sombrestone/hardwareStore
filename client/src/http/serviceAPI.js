import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const getServices = async () => {
    const {data} = await $host.get('api/service/getAll');
    let result=[]
    data.map(el=>result.push({
        id: el.id,
        name: el.name,
        unit: el.unit.name,
        unitShortname: el.unit.shortname,
        price: el.rates[0].price
    }));
    return result;
}

export const delService=async(id)=>{
    const {data} = await $authHost.delete('api/service/delete', {data:id});
    return data;
}

export const addService=async(service)=>{
    const {data} = await $authHost.post('api/service/new', service);
    return data;
}

export const getUnits = async () => {
    const {data} = await $host.get('api/unit/getAll');
    return data;
}

export const addUnit = async () => {
    const {data} = await $host.get('api/unit/getAll');
    return data;
}
