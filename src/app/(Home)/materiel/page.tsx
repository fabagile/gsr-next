'use client'

import React, { useEffect, useState } from "react";
import Title from "@/lib/components/typo/Title";


import { rootName } from "./root";
import { redirect } from "next/navigation";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Button from "@/lib/components/ui/Button";
import Link from "next/link";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import Subtitle from "@/lib/components/typo/Subtitle";

export interface MaterialType {
  code: string;
  serial: string;
  model: string;
  room: string;
}

const Test:React.FC=()=> {
  const [material,setMaterial] = useState<MaterialType[]>([])
  const [loading, setLoading]=useState<boolean>(true)
  const [error, setError] = useState<string|null>(null)
  useEffect(()=> {
    const fetchMat=async()=> {
      try{
        const res = await fetch('http://localhost:3001/material')
        if(!res.ok) {
          throw new Error("Network response not OK")
        }
        const data = await res.json()
        setMaterial(data)
      }
      catch(err) {
        if (err instanceof Error) {
          setError(err.message)

        } else {
          setError("An unknown error occured")
        }
      } finally {
        setLoading(false)
      }

    }
    fetchMat()
  }, [])

  if (loading)
    return <p>loading...</p>
  if (error)
    return <p>Error: {error}</p>
  // const head = ["Code-Barres", "N° de Série", "Modèle", "Salle", "Actions"];
  // const getMaterial = async () => {
  //   const res = await fetch("http://localhost:3000/api/material/");
  //   return res.json();
  // };
  // const data = await getMaterial();
  return (
    <>
      <section className="text-center">
        <Title>Matériel</Title>
        <ul className="space-y-4 p-4">
          {material.map((item:MaterialType, i:number)=>(
            <li key={i} className="p-4 bg-white shadow-md rounded-lg text-gray-700" >
              <Subtitle>{item.serial}</Subtitle>
              <p>{item.model}</p>
              <p className="text-lg font-medium">{item.room}</p>
            </li>
          ))}
        </ul>
        {/* <table className="table-auto border-separate border-spacing-x-5 border-spacing-y-1 mx-auto">
          <thead>
            <tr>
              {material.map((val:MaterialType) => (
                <th className="" key={val.serial}>
                  {val}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className={i % 2 == 1 ? "bg-slate" : ""}>
                {Object.values(item).map((val, v) => (
                  <td className="" key={v}>
                    {val ? val : "/"}
                  </td>
                ))}
                <td>
                  <div className="flex gap-[2px]">
                    <Button color="blue" size="md" pd={2}>
                      <Link href={`${rootName}/${item.serial}`}>
                        <FaEye />
                      </Link>
                    </Button>
                    <Button color="amber" size="md" pd={2}>
                      <Link href={`${rootName}/${item.serial}/update`}>
                        <FaRegPenToSquare />
                      </Link>
                    </Button>
                    <Button color="red" size="md" pd={2}>
                      <FaRegTrashCan />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

          
        </table> */}
      </section>
    </>
  );
}

export default Test;
