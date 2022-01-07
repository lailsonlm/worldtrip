import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '415px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  '2xl': '1536px',
})

export const theme = extendTheme({
  colors: {
    gray: {
      "400": "#47585B",
      "300": "#999999",
      "200": "#DADADA;",
      "100": "#F5F8FA",
      "50": "rgba(153, 153, 153, 0.5)",
    },
    yellow: {
      "400": "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.400'
      }
    }
  },
  breakpoints
})
