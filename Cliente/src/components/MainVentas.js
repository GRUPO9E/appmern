import React from 'react'
import TopHader from './TopHeader'
import Ventas from './Ventas'

function MainVentas () {
    return (
        <main>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <TopHader></TopHader>
                    <Ventas> </Ventas>
                    
                </div>
            </div>

        </main>
    )
}

export default MainVentas