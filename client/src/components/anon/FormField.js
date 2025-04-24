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



const FormField = ({ name, descrption = '', placeholder = '', control, label = "===" }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="grid gap-4">
                    <FormLabel className="label" >{label}</FormLabel>
                    <FormControl>
                        <Input className="input" placeholder={placeholder}  {...field} />
                    </FormControl>

                    <FormMessage />
                </FormItem>

            )}
        />
    )
}

export default FormField
