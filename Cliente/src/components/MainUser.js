import React from 'react'
import TopHader from './TopHeader'
import Cuerpo from './Cuerpo'

function MainUser() {
    return (
        <main>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <TopHader></TopHader>
                    <Cuerpo></Cuerpo>
                    
                </div>
            </div>

        </main>
    )
}

export default MainUser