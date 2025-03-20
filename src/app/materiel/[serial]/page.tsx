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
import { rootName } from "../root";
import Button from "@/app/assets/components/ui/button";
import { FaEye } from "react-icons/fa";

const MaterialItem = () => {
  const materialData: ItemType[] = useMaterialStore((s) => s.items);
  // const navigator
  const { serial } = useParams();

  const item = materialData.find((mat) => mat.serial == serial);
  const values = Object.values(item!);
  const titles = ["Code-Barres", "N° de Série", "Modèle", "Salle"];
  // const values = Object.values(item?).map()
  // const router = useRouter()
  // const {serial}=request.
  return (
    <main className="mx-auto flex flex-col gap-5">
      <Title>Fiche Matériel</Title>
      {/* <Subtitle>{serial}</Subtitle> */}
      <div className="flex justify-center gap-2">
        <div>
          {titles.map((title, i) => (
            <div
              key={title}
              className="text-right font-semibold "
            >{`${title}:`}</div>
          ))}
        </div>
        {/* <hr className="rotate-90 text-slate-600" /> */}
        <div>
          {values.map((value, i) => (
            <div key={i} className="">
              {value ? value : "/"}
            </div>
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
        <Button color="blue" size="lg" pd={2}>
          <div className="inline-flex">
            {/* <FaEye /> */}
            <Link href={rootName}>Retour</Link>
          </div>
        </Button>
        <Button color="amber" size="lg" pd={2}>
          <div className="inline-flex">
            {/* <FaRegPenToSquare /> */}
            <Link href={`${rootName}/${serial}/update`}>Modifier</Link>
          </div>
        </Button>
        <Button color="red" size="lg" pd={2}>
          <div className="inline-flex">
            {/* <FaRegTrashCan /> */}
            Supprimer
          </div>
        </Button>
        {/* <button className="bg-blue-500 py-2 px-3 rounded-xl text-gray-100 inline">
        </button>
        <button className="bg-amber-500 py-2 px-3 rounded-xl text-gray-100 inline">
        </button>
        <button className="bg-red-500 py-2 px-3 rounded-xl text-gray-100 inline">
        </button> */}
      </div>
    </main>
  );
};

export default MaterialItem;
