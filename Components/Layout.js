import React from 'react';
import { context } from '../pages/index.js'
import Head from './Head.js'

import Navbar from './Navbar.js'
import Search from './Search';
const  Layout = (props) => (

  <context.Consumer>
    
      { value => 
         <> 
       <Head />
    
       <Navbar apiv={[value[0],value[1],value[2],value[3],value[4],value[5]]} />
       <div className="bg-purple-other3">
       <Search apiv={[value[0],value[1],value[2],value[3],value[4],value[5],value[6]]} />
        </div>
        <div> 
        {props.children}
      </div>
      </>
      }
      
    </context.Consumer>  


)
export default Layout