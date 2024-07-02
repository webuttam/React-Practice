import React, { useState } from 'react'

    const Lists =({items}) =>{
        return(
            <>
                <ul>
                    {
                        items.map((item, index)=>
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
            </>
        )
    }

export default Lists