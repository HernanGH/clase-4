import logo from './logo.svg';
import './App.css';
import Item from './Components/Item';
import Input from './Components/Input';
import Title from './Components/Title';
import { useState } from 'react';

// children los hijos que me mando mi padre

// COMPONENTE CONTENEDOR / STATE COMPONENTS
const App = ({ app, children ,name, saludaPapa }) => {
  // variable o atributo del estado react
  const [data] = useState(['Ingrese nombre', 'Ingrese apellido', 'Ingrese DNI'])


  // const saludoYoHijo = () => console.log('Hola, saludos a conocidos')

  return (
    <div className="App">
      <h1>{name} esta es {app}</h1>
      <button onClick={saludaPapa}>SALUDA PAPA</button>
      <Title name='FORMULARIO' />
      <Title name='INGRESE TODOS LOS DATOS' />
      {/* <Input placeholder='Ingrese nombre' />
      <Input placeholder='Ingrese apellido' />
      <Input placeholder='Ingrese DNI' /> */}
      {
        data.map((item) => (
            <Input key={item} placeholder={item} />
          )
        )
      }
      <Item value='ACEPTAR' />
      <Item value='CANCELAR' />
      {children}
    </div>
  );
}

export default App;
