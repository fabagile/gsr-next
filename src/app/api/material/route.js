import data from './material.json'

export async function GET() {
    
    const res = data
    return Response.json(res)
}