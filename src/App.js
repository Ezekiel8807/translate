import './App.css';
import Button from './comps/button/Button';
import { useState } from 'react';

function App() {

  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [message, setMessage] = useState('')

  const copy = () => {
    alert('copy')
  }

  const translate = (e) => {
    e.preventDeafault()
    
    if(!from || !to || !message){
      alert('all fields require')
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1><span>&gt;_</span>Translator</h1> 
      </header>
      <main className='main-content'>
        <div className='translate'>
          <form method='POST'>

            <div className='from'>
              <label htmlFor='from'>From</label>
              <select onChange={ (e) => { setFrom(e.target.value)}} required>
                <option value={'english'} selected>English</option>
                <option value={'yoruba'} >Yoruba</option>
                <option value={'french'} >French</option>
                <option value={'spanish'} >Spanish</option>
                <option value={'hindi'} >Hindi</option>
              </select>
            </div>

            <div className='to'>
              <label htmlFor='To'>To</label>
              <select onChange={ (e) => { setTo(e.target.value)}} required>
                <option value={'english'} selected>English</option>
                <option value={'yoruba'} >Yoruba</option>
                <option value={'french'} >French</option>
                <option value={'spanish'} >Spanish</option>
                <option value={'hindi'} >Hindi</option>
              </select>
            </div>

            <textarea  onChange={ (e) => { setMessage(e.target.value)}}  placeholder='i love typing...' required></textarea>
            <Button value={'Translate'} someFuction={ translate } />
          </form>
        </div>

        <div className='output'>
          <h1>Output</h1>
          <textarea disabled></textarea>
          <Button value={'copy'} someFuction={ copy } />
        </div>
      </main>

      <div className='foot'>
        <p className='foot-content'> &lt;&gt; by <a href='/hello'>Ezefizzy</a></p>
      </div>
    </div>
  );
}

export default App;
