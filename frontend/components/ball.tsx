"use client"

import React from 'react'
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

const ball = () => {
    const count = useMotionValue(0)
    
  return (
    <div>
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 2, scale: 2 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={body}
            className="mt-[90px]"
        />
    </div>
  )
}

const body = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
}
export default ball