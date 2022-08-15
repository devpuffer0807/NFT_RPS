import AxiosOpensea from "./opensea-instance"

export const getOpenseaCollection = async () => {
    try{
        const res = await AxiosOpensea.get(`collections?offset=0&limit=10`)
        return res.data.collections
    }catch(e){
        return [];
    }
}

export const getNFTAssetsBySlug = async (slug) => {
    try{
        let res = []
        if(slug === "All"){
            const res = await AxiosOpensea.get(`asset/0x007831cbd196294dae418158609b98411b5ef49b/0`)
            return [res.data]
            res = await AxiosOpensea.get(`assets?limit=30&include_orders=true&order_by=sale_count`)
        }else{
            res = await AxiosOpensea.get(`assets?collection_slug=${slug}&include_orders=true&order_by=sale_count`)
        }
        return res.data.assets
    }catch(e){
        return []
    }
}

export const getNFTForTest = async () => {
    try{
        const res = await AxiosOpensea.get(`asset/0x007831cbd196294dae418158609b98411b5ef49b/7`)
        return [res.data]
    }catch(e){
        return []
    }
}

export const getNFTDetailData = async (contract_address, tokenId) => {
    try{
        const res = await AxiosOpensea.get(`asset/${contract_address}/${tokenId}`)
        console.log("===========detail", res)
        return res.data;
    }catch(e){
        return []
    }
}