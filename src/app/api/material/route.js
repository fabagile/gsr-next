import data from '@/lib/data/material.json'

export async function GET() {
    
    const res = data
    return Response.json(res)
}