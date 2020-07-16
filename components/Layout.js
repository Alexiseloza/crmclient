import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useRouter } from 'next/router';

const Layout = ({children}) => {

    // Hook de routing
    const router = useRouter();

    return ( 
        <>
            <Head>
                <title>CRM - Administración de Clientes</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
            </Head>

            {router.pathname === '/login' || router.pathname === '/nuevacuenta' ? (
                <div className="bg-gray-400 min-h-screen flex flex-col justify-center">
                    <p className="text-center text-blue-600 text-2xl">Technologies: React -Next JS, Node JS, Mongo DB, Graphql, Tailwindcss, Heroku, Vercel</p>
                    <div>
                        {children}
                    </div>
                    <p className="text-center text-gray-900 mt-20"> Demo Access |<span className="text-indigo-500">Email:</span>   correo@correo.com <span className="text-indigo-500"> Password:</span>  123456</p>
                    <p className="text-center text-orange-600 mt-5">💻 powered by <a href="" target="_blank" className="text-teal-400 ">Alexis Loza
                    </a>  React ⚛️ - Node -Developer</p>
                </div>
                
            ) : (
                <div className="bg-gray-200 min-h-screen">
                    <div className="sm:flex min-h-screen">
                        <Sidebar />
                        
                       
                        <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
                            <Header />
                            {children}
                        </main>
                        
                    </div>
                </div>
            )}
        </>
     );
}
 
export default Layout;