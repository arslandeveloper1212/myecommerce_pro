import React,{useState} from 'react'
import choose from './Pages/Choosedata'
import Chooseshow from './Chooseshow';
const Choosebybrand = () => {
    const [datahere, Setdata]= useState(choose);
    console.log(datahere);
    return (
       <div>
        
           <div className='col-12'>
           <div className='choosebybrand_controls flex-wrap d-flex align-items-center justify-content-center' style={{gap:"27px"}}>
           {
            datahere.map((item,i)=>{
                return(
                    <div>
                     <Chooseshow 
                     image={item.image}
                     title= {item.title}
                     desc = {item.desc}
                     />
                    </div>
                )
            })

           }
           </div>
           </div>
           

       
        </div>
    )
}

export default Choosebybrand
