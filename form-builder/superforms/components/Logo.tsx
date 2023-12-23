
import Link from 'next/link'
import React from 'react'

function logo() {
  return (
    <Link href={"/"} className="font-bold text-3xl bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text hover:cursor-pointer">SuperForms</Link>
  )
}

export default logo