"use client";
import { useParams, useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";

import React, { FormEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


import material, { ItemType } from "@/lib/data/material";
import Title from "@/lib/components/typo/Title";
import Subtitle from "@/lib/components/typo/Subtitle";
import useMaterialStore from "@/lib/store/useMaterialStore";

enum RoomEnum {
  fb10 = "FB010",
  fb16 = "FB016",
  fb20 = "FB020",
  fb24 = "FB024",
  fb26 = "FB026",
  fb28 = "FB028",
  fb30 = "FB030",
}
type FormInput = {
  code: string;
  serial: string;
  model: string;
  room: RoomEnum|string;
};

const UpdateForm = () => {
  
  const { register, handleSubmit } = useForm<FormInput>();
  const onsubmit: SubmitHandler<FormInput> = (data) => console.log(JSON.stringify(data));
  const rooms = ["FB010", "FB016", "FB020", "FB024", "FB026", "FB028", "FB030"];

  return (
    <form
      className=""
      onSubmit={handleSubmit(onsubmit)}
      action=""
      method="post"
    >
      <div className="w-50 grid grid-rows-5 ">
        <input className="placeholder-current" placeholder="Nouveau Code-Barres" {...register("code")} />
        <input className="placeholder-current" placeholder="Nouveau N° de série" {...register("serial")} />
        <input className="placeholder-current" placeholder="Nouveau Modèle" {...register("model")} />
        <select {...register("room")}>
          <option>Nouvelle Salle</option>
          {rooms.map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-amber-500 text-lg uppercase py-2 px-3 rounded-xl text-gray-100"
        >
          Valider
        </button>

        {/* <div className='mb-5' >
    </div>
    <div className='mb-5' >
    </div>
    <div className='mb-5' >
    </div>
    <div className='mb-5' >
    </div> */}
      </div>
    </form>
  );
};

const Update = () => {
  // console.log(JSON.stringify(material,null,2))

  // const { register, getValues } = useForm<formInput>()
  // const 
  const materialData:ItemType[] = useMaterialStore(s=>s.items)
  const updateMaterial = useMaterialStore(s=>s.update)
  

  const router = useRouter()
  const { id } = useParams();
  const [index,item] = [
    materialData.findIndex((mat) => mat.serial == id),
    materialData.find((mat) => mat.serial == id),
  ]
  // const item = materialData.find((mat) => mat.serial == id);
  const values = Object.values(item!);
  const titles = ["Code-Barres", "N° de Série", "Modèle", "Salle"];

  const { register, handleSubmit } = useForm<FormInput>();
  const onsubmit: SubmitHandler<FormInput> = (data) => {
// e.defaultPrevent()
    // router.push("/material")
    // function replaceData (key:void|string){ if( data?[key]=="" )
    //    return item![key]
    //    else return data?[key]}}
    const newData = {
      code: data.code.length?data.code:item!.code,
      serial: data.serial.length?data.serial:item!.serial,
      model: data.model.length?data.model:item!.model,
      room: data.room!=item!.room?data.room:item!.room,

    }
    updateMaterial(newData)
    // materialData[index] = newData
    // console.log(item)
    // console.log(data)
    // console.log(newData)
    // materialData[index]={}
    // console.log(index)
    // console.log(JSON.stringify(data))

  };
  const rooms = ["FB010", "FB016", "FB020", "FB024", "FB026", "FB028", "FB030"].filter(room=> room!=item!.room);

  // const [value, setValue] = useState("")

  return (
    <main className="">
      <Title>Modification</Title>
      <Subtitle>{item!.model} - {id} - {item!.code}</Subtitle>
      <div  className="w-auto mx-auto"></div>
      <form
        
        onSubmit={handleSubmit(onsubmit)}
        // action="/material"
        method="post"
      >
        <div className="w-full max-w-md grid grid-rows-5 gap-2 mx-auto ">
          <input className="placeholder-current bg-gray-100 rounded-md py-0 px-2" placeholder={item!.code} {...register("code")} />
          <input className="placeholder-current bg-gray-100 rounded-md py-0 px-2" placeholder={item!.serial} {...register("serial")} />
          <input className="placeholder-current bg-gray-100 rounded-md py-0 px-2" placeholder={item!.model}{...register("model")} />
          <select className="text-gray-500 bg-gray-100 rounded-md py-0 px-2" {...register("room")}>
            <option className="font-semibold">{item!.room}</option>
            {rooms.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-amber-500 text-lg uppercase py-2 px-3 rounded-xl text-gray-100"
          >
            Valider
          </button>

          {/* <div className='mb-5' >
    </div>
    <div className='mb-5' >
    </div>
    <div className='mb-5' >
    </div>
    <div className='mb-5' >
    </div> */}
        </div>
      </form>
      {/* <div className="grid grid-cols-2">
        <div className="grid-custom">
          {values.map((value, i) => (
            <>
              <div className="font-semibold">{`${titles[i]}:`}</div>
              <div className="w-auto">{value ? value : "/"}</div>
            </>
          ))}
        </div> */}
      {/* <UpdateForm /> */}

      {/* <form action="" method="post">
          <div>
            <input {...register("code")} />
          </div>
          <div>
          <input {...register("serial")} />
          </div>
          <div>
                      <input {...register("model")} />
          </div>
          <div>
            <select id="room"><option>Salle</option>
              {rooms.map((room) => (<option key={room} value={room} >{room}</option>))}
              </select>
          </div>
        </form> */}
    {/* </div> */}
    </main >
  );
};

export default Update;
