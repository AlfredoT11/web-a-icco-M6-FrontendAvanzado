import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SectionComponent from './components/SectionComponent'
import UserInfoComponent from './components/UserInfoComponent'
import SectionContextComponent from './components/SectionContextComponent'
import { UserInfoProvider } from './contexts/UserInfoContext'
import LogoutContextComponent from './components/LogoutContextComponent'
import ModifyFullnameComponent from './components/ModifyFullnameComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 
      <SectionComponent message='First level section'>
        <SectionComponent message='Second level section'>
          <SectionComponent message='Third level section'>
            <SectionComponent message='Fourth level section'>
              <UserInfoComponent username='JuanPerez11' fullname='Juan Pérez Sánchez' />
            </SectionComponent>
          </SectionComponent>
        </SectionComponent>
      </SectionComponent>
    */}
      <div id='mainAppDiv'>
        <div>
          <h2>Using props</h2>
          <SectionComponent
            message='This is a section component'
            hasChildSection={true}
            level={1}
            username='JuanPerez11'
            fullname='Juan Pérez'
          ></SectionComponent>
        </div>

        {/* 3.1. Accediendo al provider */}
        <div>
          <h2>Using context</h2>
          <UserInfoProvider>
            <SectionContextComponent
              message='This is a context section component'
              hasChildSection={true}
              level={1}
            >
            </SectionContextComponent>
            <LogoutContextComponent></LogoutContextComponent>
            <ModifyFullnameComponent></ModifyFullnameComponent>
          </UserInfoProvider>
        </div>
      </div>

    </>

  )
}

export default App
