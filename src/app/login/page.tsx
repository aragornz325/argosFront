import React from 'react';

import './style.css'

export default function login(){
    return(
        <body>
            <div className='flex flex-col md:flex-row h-screen'>
                <div className='p-4 flex-1 flex flex-col justify-center items-center md:items-start'>
                    <h1 className='main_title_rigth'>Sistema</h1>
                    <h1 className='main_argos_title'>ARGOS</h1>
                        </div>
                            <div className='p-4 flex-1 flex items-center justify-center'>
                                <div className='marco_login location_login color_login'>
                                    <h3 className='color_font_login'>Bienvenido al sistema 👋</h3>
                                    <form className="mt-8 space-y-6">
                                        <div className="rounded-md shadow-sm space-y-4"><div>
                                    <label htmlFor="email" className="sr-only">Email or Username</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Ingresar nombre de usuario o email"
                                    />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="password" className="sr-only">Password</label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                    <input
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
                                
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Olvidaste el pass?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                            </div>
                            </form>

                    </div>
                </div>
            </div> 
        </body>
    )
}