

import React,{useEffect,useRef} from 'react'

const Search = (props) =>{

const ref = useRef()
  useEffect(() => {
     
     props.apiv[3][1](ref.current.value)

  }, [props.value]);

  const data = (e)=>{
      e.preventDefault()
      props.apiv[5][1](props.apiv[2])
   
      
  }

    return(
    <div className='search  h-100  ovreflow-auto  flex-col  w-full justify-center  mr-auto  px-15	py-15  items-center flex flex-initial bg-lights-light	transform -translate-y-35 ' style={props.apiv[4][0] ==  true? {transform:`translatey(0)`} : {transform:`translatey(-450px)`}}>
   <form className="flex flex-row" >
       <button  type="submit" className='px-20  border bg-white' onClick={data} >Sumbit</button>
   <input type="search" className="w-34 border px-20 py-5 mx-auto" onChange={(e) => (props.apiv[3][1](e.target.value))}   ref={ref}  value={props.apiv[3][0]} />
   
   </form>
 
</div>
    )
}
export default Search