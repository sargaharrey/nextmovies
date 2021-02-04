import React,{useState,useEffect, Component} from 'react';
import Layout from './../Components/Layout';
import Item from './../Components/Items';


import axios from 'axios'
 export const  context = React.createContext();

export default function Index(props) {
  const [name,setName] = useState('')
    const lowerName = name.toLowerCase()
  const [isOpen,setIsOpen] = useState(false)

  const dataa = props.data;
  const dataaUrl = props.dataUrl
 
   const z = dataa.map( i => {
    return i.results
   })

   const filterd = z.map( i => i.filter( q => (q.name.toLowerCase().startsWith(lowerName.substring(0,20)) )))

    const [output,setOutput] = useState(filterd)

  const arry  = [dataa[0],dataa[1]]  
   // comineData 
     
  const baseImgUrl = "https://image.tmdb.org/t/p"
const size = "w500"
const poster = arry[0].results.poster_path
        
    var arrcon = [baseImgUrl,size,poster]
   
 
 
  return (
    <context.Provider value={[dataa,dataaUrl,filterd,[name,setName],[isOpen,setIsOpen],[output,setOutput]]}>
    <Layout>
   <Item output={output} pages={arry} imgY={arrcon} />
  
    {console.log(arry[0])}
      
      
    </Layout>
    </context.Provider>
  )
}

Index.getInitialProps = async function(){

  const arrUrl =[] 
  const arr =[]
  
   for(let p =10; p < 30 ;p++){
       arrUrl.push(`https://api.themoviedb.org/3/tv/popular/configuration/?api_key=03d313e2f922689871a2ffb72bd6be0d&language=en-US&page=${p}`)
      arr.push(await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=03d313e2f922689871a2ffb72bd6be0d&language=en-US&page=${p}`).then(data => data.data))
   } 

  return{
    data: arr,
    dataUrl : arrUrl
   
  }
   }
  

