'use client';
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { validationSchema } from './validationSchema/schema';
import { FormValues } from './interfaces/login.interface';
import { queryLogin } from './querys/login.query';
import './style.css';
import ojo from '../../../public/iconOjo.png';

export default function Login() {
    const router = useRouter();
    
    const [showPassword, setShowPassword] = useState(false);

    const initialValues: FormValues = {
        email: '',
        password: '',
        remember_me: false,
    };

    const handleSubmit = async(values: FormValues) => {
        
        const login = await queryLogin(values);
        
        if(!login)
            router.push('/login')
        else
            router.push('/dashboardAdmin');
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex flex-col md:flex-row h-screen'>
            <div className='p-4 flex-1 flex flex-col justify-center items-center md:items-start'>
                <h1 className='main_title_rigth'>Sistema</h1>
                <h1 className='main_argos_title'>ARGOS</h1>
            </div>
            <div className='p-4 flex-1 flex items-center justify-center'>
                <div className='marco_login location_login color_login'>
                    <h3 className='color_font_login'>Bienvenido al sistema 👋</h3>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            handleSubmit(values);
                            setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="mt-8 space-y-6">
                                <div className="rounded-md shadow-sm space-y-4">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email or Username</label>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Ingresar nombre de usuario o email"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-600 mt-2" />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="password" className="sr-only">Password</label>
                                        <div className="relative">
                                            <Field
                                                id="password"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                autoComplete="current-password"
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Password"
                                            />
                                            <button
                                                type="button"
                                                className="ml-2 flex items-center text-sm leading-5"
                                                onClick={toggleShowPassword}
                                            >
                                                <Image src={ojo} alt='ojo' width={20} />
                                            </button>
                                            <ErrorMessage name="password" component="div" className="text-red-600 mt-2" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Field
                                            id="remember_me"
                                            name="remember_me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                            Recordarme
                                        </label>
                                        <br />
                                        <br />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        disabled={isSubmitting}
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Olvidaste el pass?
                                    </a>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

