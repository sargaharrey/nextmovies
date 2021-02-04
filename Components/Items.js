import Image from 'next/image'
const Item = (props)=> {

    //  const loop = props.data


    return(
        <>
        <div className="grid grid-flow-row grid-cols-3  gap-15">
        {props.output.map(op => op.map( p  =>  ( 
              
   <div className="py-5 text-lights-lighter">
     <div className="relative">
      <img src={`${props.imgY[0]}/${props.imgY[1]}${p.poster_path}`}  alt="Picture of the author"  />
      <div className="absolute top-0 left-0 w-100% h-100% bg-purple-light opacity-50 "></div>
      <span className="absolute bottom-50% left-31 text-mdc text-white bg-purple-dark">{p.name}</span>
     </div>
        
    </div>
    
        )))
        } 
        </div>
        </>
    )
}

export default Item