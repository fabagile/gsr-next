import data from './devices.json'

export async function GET() {
    
    const res = data
    return Response.json(res)
}