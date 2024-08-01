import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '10rem'
      },
      width: {
        '2xl': '2000px'
      }
    },
    extend: {
      colors: {
        primary: {
          500: '#DBFF34',
          900: '#07acff'
        },
        text: {
          dark: '#AAAAAA'
        },
        border: {
          300: 'rgba(255, 255, 255, 0.2)'
        }
      }
    }
  }
})
