"use client";

import { request } from "http";
// import { useRouter } from 'next/router'
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { ItemType } from "@/app/assets/data/material";
import Title from "@/app/assets/components/typo/Title";
import Subtitle from "@/app/assets/components/typo/Subtitle";
import useMaterialStore from "@/app/assets/store/useMaterialStore";
import Link from "next/link";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";

const MaterialItem = () => {
  const materialData: ItemType[] = useMaterialStore((s) => s.items);
  // const navigator
  const { id } = useParams();

  const item = materialData.find((mat) => mat.serial == id);
  const values = Object.values(item!);
  const titles = ["Code-Barres", "N° de Série", "Modèle", "Salle"];
  // const values = Object.values(item?).map()
  // const router = useRouter()
  // const {id}=request.
  return (
    <main className="mx-auto flex flex-col gap-5">
      <Title>Fiche Matériel</Title>
      {/* <Subtitle>{id}</Subtitle> */}
      <div className="flex justify-center gap-2">
        <div>
          {titles.map((title, i) => (
            <>
              <div
                key={title}
                className="text-right font-semibold "
              >{`${title}:`}</div>
              {/* <div className="">{value ? value : "/"}</div> */}
            </>
          ))}
        </div>
        {/* <hr className="rotate-90 text-slate-600" /> */}
        <div>
          {values.map((value, i) => (
            <>
              {/* <div className="font-semibold ">{`${titles[i]}:`}</div> */}
              <div key={i} className="">
                {value ? value : "/"}
              </div>
            </>
          ))}
        </div>
      </div>
      {/* <div className='grid grid-cols-2 auto-cols-min grid'>
            {values.map((value, i) => (<>
                <div className="font-semibold ">{`${titles[i]}:`}</div>
                <div className="">{value ? value : "/"}</div>
            </>

            ))}
        </div> */}
      <div className="flex justify-center gap-1">
        <button className="bg-blue-500 py-2 px-3 rounded-xl text-gray-100 inline">
          <Link href={`/material`}>Retour</Link>
        </button>
        <button className="bg-amber-500 py-2 px-3 rounded-xl text-gray-100 inline">
          <Link href={`/material/${id}/update`}>Modifier</Link>
        </button>
        <button className="bg-red-500 py-2 px-3 rounded-xl text-gray-100 inline">
          Supprimer
        </button>
      </div>
    </main>
  );
};

export default MaterialItem;
