'use client'
import { updateCursos } from '@/lib/actions/cursos.actions';
import { useUploadThing } from '@/lib/uploadthing';
import { isBase64Image } from '@/lib/utils';

import React, { ChangeEvent, useState } from 'react'
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import Image from 'next/image';

import { usePathname, useRouter  } from 'next/navigation';
import { updateDisciplinas } from '@/lib/actions/disciplinas.actions';
import { DiciplinasValidation } from '@/lib/validations/Diciplinas';

interface Props{
  nome:string, 
  imagem:string, 
  descricao:string,
  idCurso:string,
  professores:any
}

function FormCadModulos({idCurso , nome, professores, imagem , descricao}:Props) {
  const pathname = usePathname();
    const [files, setFiles] = useState<File[]>([]);
    const { startUpload } = useUploadThing("media");
    const router = useRouter()
    const professoresArray = JSON.parse(professores)
     professores = professoresArray?.professores 

    

const form = useForm<z.infer<typeof DiciplinasValidation>>({
    resolver: zodResolver(DiciplinasValidation),
    defaultValues: {
      imagem: imagem!==""? imagem : "",
      nome: nome !==""? nome : "",
      descricao: descricao!==""? descricao : "",
      professores:professores ? professores : [],
      idCurso:idCurso
    },
  });


const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };


  const onSubmit = async (values: z.infer<typeof DiciplinasValidation>) => {
    
  

        const blob = values.imagem;

        const hasImageChanged = isBase64Image(blob);
        if (hasImageChanged) {
          const imgRes = await startUpload(files);
    
          if (imgRes && imgRes[0].fileUrl) {
            values.imagem = imgRes[0].fileUrl;
          }
        }

       
    
        await updateDisciplinas({
            idCurso:idCurso,
          imagem: values.imagem,
          nome: values.nome,
          path: pathname,
          descricao: values.descricao,
          professores:professores
         
        });

        if (pathname === "/profile/edit") {
          router.back();
        } else {
          router.push(`/disciplinas/todas/${idCurso}`);
        }

    }



  return (
    <div className='flex flex-col w-full h-full p-4 mt-36 items-center justify-center'>
        
        <div className='w-full my-10 items-center justify-center'> 
            <h1 className='text-center'>Modulos </h1>
        </div>

        <div className='w-[100%] h-full flex felx-col relative bg-black rounded-e-lg p-4 items-center justify-center '>

        <Form {...form}>
      <form
        className='flex flex-col justify-start bg-slate-950 p-4 rounded-lg gap-10'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='imagem'
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel className='account-form_image-label'>
                {field.value ? (
                  <Image
                    src={field.value}
                    alt='Curso_icon'
                    width={96}
                    height={96}
                    priority
                    className='rounded-full object-contain'
                  />
                ) : (
                  <Image
                    src='/assets/professor.png'
                    alt='curso_icon'
                    width={96}
                    height={96}
                    className='object-contain rounded-full'
                  />
                )}
              </FormLabel>
              <FormControl className='flex-1 text-base-semibold text-gray-200'>
                <Input
                  type='file'
                  accept='image/*'
                  placeholder='Add profile photo'
                  className='account-form_image-input bg-black'
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='nome'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Titulo
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='account-form_input no-focus bg-black'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

     
        <FormField
          control={form.control}
          name='descricao'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                descricao
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='bg-black'>
          Enviar dados
        </Button>
      </form>
    </Form>

        </div>

   
      
    </div>
  )
}

export default FormCadModulos
