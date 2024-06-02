'use client'
import { updateCursos } from '@/lib/actions/cursos.actions';
import { useUploadThing } from '@/lib/uploadthing';
import { isBase64Image } from '@/lib/utils';
import { CursosValidation } from '@/lib/validations/Cursos';
import React, { ChangeEvent, useState } from 'react'
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription, } from './ui/form';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/Checkbox"
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import Image from 'next/image';

import { usePathname, useRouter  } from 'next/navigation';

interface Props{
  id:string, 
  nome:string, 
  imagem:string, 
  descricao:string
  items:any,
}

function FormCurso({id ,items, nome, imagem , descricao}:Props) {
  const pathname = usePathname();
    const [files, setFiles] = useState<File[]>([]);
    const { startUpload } = useUploadThing("media");
    const router = useRouter()

    const professores:any = JSON.parse(items) 
   

const form = useForm<z.infer<typeof CursosValidation>>({
    resolver: zodResolver(CursosValidation),
    defaultValues: {
      imagem: imagem!==""? imagem : "",
      nome: nome !==""? nome : "",
      descricao: descricao!==""? descricao : "",
      professores:[]
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


  const onSubmit = async (values: z.infer<typeof CursosValidation>) => {
        const blob = values.imagem;

        const hasImageChanged = isBase64Image(blob);
        if (hasImageChanged) {
          const imgRes = await startUpload(files);
    
          if (imgRes && imgRes[0].fileUrl) {
            values.imagem = imgRes[0].fileUrl;
          }
        }
        
  
        await updateCursos({
          imagem: values.imagem,
          nome: values.nome,
          path: pathname,
          descricao: values.descricao,
          professores:values.professores
         
        });
        

        if (pathname === "/profile/edit") {
          router.back();
        } else {
          router.push(`/disciplinas/todas/${id}`);
        }

    }



  return (
    <div className='flex w-full h-full items-center justify-center p-4'>
        
        <Form {...form}>
      <form
        className='flex flex-col justify-start bg-slate-950 rounded-lg p-4 gap-10'
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

          <FormField
          control={form.control}
          name="professores"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Professores</FormLabel>
                <FormDescription>
                  Selecione os professores que darão este curso.
                </FormDescription>
              </div>
              {professores.map((item:any, key:any) => (
                <FormField
                  key={key}
                  control={form.control}
                  name="professores"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item._id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item._id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item._id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.nomeCompleto}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
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
  )
}

export default FormCurso
