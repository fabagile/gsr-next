import {DeviceType} from "./types"
// import React from 'react'

export default async function  Device  ()  {
    
    // import React from 'react'
    
    // export default async function Users  ()  {
        const response  = await fetch('http://localhost:3001/devices')
    
        const devices = await response.json()
      return (
        <>
        
            <h1>Matériel</h1>
            <ul>
                {devices.map((item:DeviceType, k:number)=>(
                    <li key={k} >
                        <h2>{item['Alias']}</h2>
                        {/* <p>{item.model}
                            <br /><em>{item.code}</em>
                            <br /><i>{item.room}</i>
                        </p> */}
    
                    </li>
                ))}
            </ul>
          
        
        </>
      )
    }
    
    
    
    


// export default Material
