"use client"
import { Form } from '@prisma/client'
import React from 'react'

function FormBuilder({form}: {form: Form}) {
  return (
    <div>FormBuilder : {form.name}</div>
  )
}

export default FormBuilder