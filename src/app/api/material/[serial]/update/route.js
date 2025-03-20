import data from '../../material.json'

export async function PUT(req, {params}) {
    const serial = params.serial
    const res = data.find(item=>item.serial==serial)
    return Response.json(res)
}