import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todos, settodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    settodos(data);
    console.log(data);
  };

  return (
    <>
        <h1>test</h1>
    
    </>
  )
}
