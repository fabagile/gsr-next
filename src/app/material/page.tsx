"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Title from "../assets/components/typo/Title";
import { FaEye, FaRegEye } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import { ItemType } from "@/app/assets/data/material";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import useMaterialStore from "../assets/store/useMaterialStore";

const ButtonGroup = ({ id }: { id: string }) => {
  const router = useRouter();
  const updateItem = () => router.push(`/material/${id}/update`);
  const readItem = () => router.push(`/material/${id}`);
  const deleteItem = () => alert(`${id} va être supprimé`);
  const buttons = [
    { title: "Voir", color: "sky", action: readItem, component: <FaEye /> },
    {
      title: "Modifier",
      color: "amber",
      action: updateItem,
      component: <FaRegPenToSquare />,
    },
    {
      title: "Effacer",
      color: "red",
      action: deleteItem,
      component: <FaRegTrashCan />,
    },
  ];
  return (
    <div className="inline-flex items-center ml-2">
      {buttons.map(({ title, color, action, component }) => (
        <button
          title={title}
          onClick={action}
          key={title}
          className={`text-slate-800 hover:text-blue-600 text-sm bg-${color} hover:bg-${color}-100 rounded-sm font-medium px-3 py-2 space-x-1`}
        >
          {component}
        </button>
      ))}
    </div>
  );
};

const Material = () => {
  const head = ["Code-Barres", "N° de Série", "Modèle", "Salle", "Actions"];
  const materialData: ItemType[] = useMaterialStore((s) => s.items);
  const getMaterial = () => {
    return materialData;
  };
  useEffect(() => {
    getMaterial();
  });

  return (
    <>
      <section className="text-center">
        <Title>Matériel</Title>
        <table className="table-auto border-separate border-spacing-x-5 border-spacing-y-1 mx-auto">
          <thead>
            <tr>
              {head.map((val) => (
                <th className="" key={val}>
                  {val}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {materialData.map((item, i) => (
              <tr key={i} className={i % 2 == 1 ? "bg-slate" : ""}>
                {Object.values(item).map((val, v) => (
                  <td className="" key={v}>
                    {val ? val : "/"}
                  </td>
                ))}
                <td>
                  <ButtonGroup id={item.serial} />
                </td>
              </tr>
            ))}
          </tbody>

          {/* {sample.map((item, i) => <div className='grid grid-cols-5 auto-cols-min' key={i}>{Object.values(item).map((val, v) => <div className={i==0?"font-semibold uppercase text-lg":"font-light"} key={v}>{val.length?val:"/"}</div>)}<div role="button"><FaRegEye /></div></div>)} */}
        </table>
      </section>
    </>
  );
};

export default Material;
