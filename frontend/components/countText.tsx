"use client"

import React from 'react'
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

const countText = () => {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))
    useEffect(() => {
            const controls = animate(count, 100, { duration: 5 })
            return () => controls.stop()
        }, [])
  return (
    <div>
        <motion.pre style={body}>{rounded}</motion.pre>
    </div>
  )
}

const body = {
    fontSize: 64,
    color: "#4ff0b7",
  }
  
export default countText