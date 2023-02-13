import React from 'react'
// const Error = ({mensaje}) => {
//   return (
//     <div className='bg-red-700 text-center text-white font-bold p-3 mb-3'>
//           <p>{mensaje}</p>
//           </div>
//   )
// }

// Diferencia entre propos y children los children pueden recibir elementos html y varios parametros propos de debe dividir por cada parametro
const Error = ({children}) => {
    return (
      <div className='bg-red-700 text-center text-white font-bold p-3 mb-3'>
            {children}
            </div>
    )
  }
export default Error