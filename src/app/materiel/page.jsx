// 'use client'

import React from "react";
import Title from "../assets/components/typo/Title";

import { rootName } from "./root";
import { redirect } from "next/navigation";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Button from "../assets/components/ui/button";
import Link from "next/link";

// const ButtonGroup = ({ id }) => {
// //   const router = useRouter();
//   const updateItem = () => redirect(`/material/${id}/update`);
//   const readItem = () => redirect(`/material/${id}`);
//   const deleteItem = () => alert(`${id} va être supprimé`);
//   const buttons = [
//     { title: "Voir", color: "sky", action: readItem, component: <FaEye /> },
//     {
//       title: "Modifier",
//       color: "amber",
//       action: updateItem,
//       component: <FaRegPenToSquare />,
//     },
//     {
//       title: "Effacer",
//       color: "red",
//       action: deleteItem,
//       component: <FaRegTrashCan />,
//     },
//   ];
//   return (
//     <div className="inline-flex items-center ml-2">
//       {buttons.map(({ title, color, action, component }) => (
//         <button
//           title={title}
//           onClick={action}
//           key={title}
//           className={`text-slate-800 hover:text-blue-600 text-sm bg-${color} hover:bg-${color}-100 rounded-sm font-medium px-3 py-2 space-x-1`}
//         >
//           {component}
//         </button>
//       ))}
//     </div>
//   );
// };

async function Test() {
  const head = ["Code-Barres", "N° de Série", "Modèle", "Salle", "Actions"];
  const getMaterial = async () => {
    const res = await fetch("http://localhost:4000/api/material/");
    return res.json();
  };
  const data = await getMaterial();
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

          {/* {sample.map((item, i) => <div className='grid grid-cols-5 auto-cols-min' key={i}>{Object.values(item).map((val, v) => <div className={i==0?"font-semibold uppercase text-lg":"font-light"} key={v}>{val.length?val:"/"}</div>)}<div role="button"><FaRegEye /></div></div>)} */}
        </table>
      </section>
    </>
  );
}

export default Test;
