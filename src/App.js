import React from 'react'
import {hot} from  'react-hot-loader'

   const Warning = React.lazy(() => import ('./Warning'))

class App extends React.Component{

 state = {count:0} 
  updateCountPlus = ()=>{this.setState(state=>({count:state.count+1}))}
 updateCountMinus = ()=> {this.setState(state=>({count:state.count-1}))}
 render(){
   
   return (
           <React.Fragment>
           <h1>Hello React World !!!</h1>
             <h2>Count: {this.state.count}</h2>
              
             {this.state.count > 10 ?
             <React.suspense fallback={null}> 
             <Warning/>
             </React.suspense>
             :null}
              
            <button onClick={this.updateCountPlus}>+</button>
            <button onClick={this.updateCountMinus}>-</button>
             
           </React.Fragment>
   )
   
  }

}

export default hot(module)(App)
