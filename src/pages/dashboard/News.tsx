import React, { useState } from 'react'

import Sidenav from '../../components/Sidenav'
import Topnav from '../../components/Topnav'
import Footer from '../../components/Footer'

function News() {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full flex flex-row">
            <div className='fixed'>
                <Sidenav open={open} setOpen={setOpen} />
            </div>
            <div className={`w-full duration-300 ${open ? 'ml-60' : 'ml-20'}`}>
                <section className='min-h-screen py-5 px-10 text-primary'>
                    <h1 className='font-medium text-2xl mt-10'>News</h1>

                </section>
                <Footer />
            </div>
        </div>
    )
}

export default News