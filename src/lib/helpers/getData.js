export default async function getData(url) {
    const response  = await fetch(url,{cache:"no-store"})
        
    
    return await response.json()
}