import logo from './logo.svg';
import './App.css';
import React , {useState , useEffect} from 'react'



function App() {


  const [advice, setAdvice] = useState('')
  const [advId, setAdviceId] = useState(0)
  let Advice  = async ()=>{
    let response = await fetch('https://api.adviceslip.com/advice').then(resp => resp.json()).then(resp => resp)
    console.log(response)
    setAdvice(response.slip.advice)
    setAdviceId(response.slip.id)

  }
  useEffect(()=>{

    Advice() 
  } , [])
 
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          
           <div className='col-6 col-aligncenter'>
            <div className='Advice-Box'>
              <h4 className='Advice-Id'>ADVICE #{advId}</h4>
              <h2 className='Advice'>"{advice}"</h2>
            <div className='spliter'>d</div>  
           </div>
           <div className='Change'>
               <button className='Change-Adv' onClick={()=> Advice() }></button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
