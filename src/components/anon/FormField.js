"use client"
import React from 'react'
import { Controller } from 'react-hook-form'
import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";



const FormField = ({ name, descrption = '', placeholder = '', control }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="label"    >{name}</FormLabel>
                    <FormControl>
                        <Input className="input" placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormDescription>
                        {descrption}
                    </FormDescription>
                    <FormMessage />
                </FormItem>

            )}
        />
    )
}

export default FormField
