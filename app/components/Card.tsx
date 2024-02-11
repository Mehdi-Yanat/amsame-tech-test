"use client"
import React, { useEffect, useState } from 'react'
import styles from "../styles/card.module.css"
import IdBox from './IdBox'
import { RootState } from '@/lib/store'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

function Card() {

  const count = useAppSelector((state: RootState) => state.counter.ids) 
  const dispatch = useAppDispatch()

  const [ids , setIds] = useState()




  return (
    <div className={styles.card} >
      <div>
      <IdBox/>
      </div>
      <div>
      <textarea placeholder='Please put your IDs' />
      <button  >
        submit
      </button>
      </div>
    </div>
  )
}

export default Card
