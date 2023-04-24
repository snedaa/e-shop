export function getPaginationQuery (url,page=0,pageSize=20){
    return `${url}?Page=${page}&PageSize=${pageSize}`
}

