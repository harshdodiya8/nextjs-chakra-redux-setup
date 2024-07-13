"use client"
import { theme } from '@/theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const ChakraThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ChakraThemeProvider