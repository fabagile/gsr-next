import data from '@/lib/data/material.json'

export async function GET(req, {params}) {
    const serial = params.serial
    const res = data.find(item=>item.serial==serial)
    return Response.json(res)
}