import './index.css'

import { Dropdown } from './components/Dropdown';

export type Inputs = {
  firstname: string;
  lastname: string;
  role: string
  newsletter: any
}

const members:any= []



function App() {
  
 
  return (
    <Dropdown/>
  )
}

export default App
