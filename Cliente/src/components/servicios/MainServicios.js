import React from 'react'
import TopHader from '../TopHeader'
import CuerpoServicio from './CuerpoServicio'

function MainServicio() {
    return (
        <main>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <TopHader></TopHader>
                    <CuerpoServicio></CuerpoServicio>
                    
                </div>
            </div>

        </main>
    )
}

export default MainServicio