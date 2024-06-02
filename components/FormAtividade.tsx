'use client'
import { updateAtividade} from '@/lib/actions/atividades.actions';
import { useUploadThing } from '@/lib/uploadthing';
import { isBase64Image } from '@/lib/utils';
import { Atividades } from '@/lib/validations/Atividades';
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

interface Props{
  id_user:string,
  id_modulo:string 
  titulo:string, 
  imagem:string, 
  descricao:string
}

function FormAtividade({id_user, id_modulo , titulo, imagem , descricao}:Props) {
  const pathname = usePathname();
    const [files, setFiles] = useState<File[]>([]);
    const { startUpload } = useUploadThing("media");
    const router = useRouter()

const form = useForm<z.infer<typeof Atividades>>({
    resolver: zodResolver(Atividades),
    defaultValues: {
      imagem: imagem!==""? imagem : "",
      titulo: titulo !==""? titulo : "",
      descricao: descricao!==""? descricao : "",
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


  const onSubmit = async (values: z.infer<typeof Atividades>) => {
        const blob = values.imagem;

        const hasImageChanged = isBase64Image(blob);
        if (hasImageChanged) {
          const imgRes = await startUpload(files);
    
          if (imgRes && imgRes[0].fileUrl) {
            values.imagem = imgRes[0].fileUrl;
          }
        }
    
        await updateAtividade({
          imagem: values.imagem,
          titulo: values.titulo,
          path: pathname,
          descricao: values.descricao,
          idModulo:id_modulo,
          idProfessor:id_user
         
        });

        if (pathname === "/profile/edit") {
          router.back();
        } else {
          router.push(`/modulos/modulo/${id_modulo}/${id_user}`);
        }

    }



  return (
    <div className='flex w-full h-full p-4 items-center justify-center'>
        
        <Form {...form}>
      <form
        className='flex flex-col justify-start gap-10'
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
                  className='account-form_image-input'
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='titulo'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Titulo
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='account-form_input no-focus'
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

        <Button type='submit' className='bg-primary-500'>
          Enviar dados
        </Button>
      </form>
    </Form>
      
    </div>
  )
}

export default FormAtividade
