"use client";
import React from 'react';
import { Controller } from 'react-hook-form';
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormField = ({
    name,
    description = '',
    placeholder = '',
    control,
    label = "===",
    type = "text",


}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <FormItem className="grid gap-4">
                    <FormLabel className="label">{label}</FormLabel>

                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            {...field}
                            className={`input ${fieldState.error ? 'border-red-500 ring-red-500 focus-visible:ring-red-500' : ''}`}
                        />
                    </FormControl>

                    {/* Optional custom error message or icon */}
                    {fieldState.error && (
                        <p className="text-sm text-red-500">{fieldState.error.message}</p>
                    )}

                    {/* Or use FormMessage which will automatically show the error */}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormField;
