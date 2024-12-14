/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode :'class',
  theme: {
    extend: {
      colors: {
        'gold-gradien' : '#dcac40',
        'gray-gold' : '#1A1A1A',
        'gray-obacity' : '#81807E',
        'gray/40' : '#676665',
        'dark/12' : '#1F1F1F',
        'dark/20' : '#333333',
        'gray/70' : '#B3B3B2'
      },
      spacing: {
        '1.5 ' : '5px',
        '2.5' : '10px',
        '3.5' : '14px',
        '4.2': '18px',
        '6.5' : '26px',
        '10.5' : '43px',
        '19' : '77px',
        '13.5' :'52px',
        '7.5': '30px',
        '13' : '50px',
        '15' : '60px',
        '16.5' : '70px',
        '17' : '72px',
        '17.5' : '75px',
        '23' : '90px',
        '25' : '100px',
        '30' : '122px',
        '29.5' : '120px', 
        '33' : '140px',
        '41' : '164px',
        '45' : '149px',
        '65' : '280px',
        '77' : '300px',
        '78' : '310px',
        '81' : '322px',
        '85' : '366px',
        '97' : '440px',
        '100' : '560px',
        '110' : '587px' ,
        '12/12' : '33%',
        '2.5/12' : '19%',
        '5.5/12' : '40%',
        'max-f' : '748px',
        'mid-f' : '554px',
        'min-f' : '470px',
        '1.9/12' : '42%'
        
        
      },
      borderRadius: {
        '2.5xl' : '20px',
        '1.5xl' : '14px',
        '5xl': '45px'
      },
      fontSize: {
        '1.5xl' : '22px',
        '2.5xl' : '28px',
        '4.4xl' : '38px',
        '4.5xl' : '40px',
        '5.5xl' : '58px',
        '7.5xl' : '75px',
      }
      ,
      lineHeight : {
        '7.5' : '30px',
        '6.5' : '27px',
        '15' : '87px',
        '13' : '50px',
        '13.5' : '45px',
        '14' : '56px',
        '17' : '117px'
      },
      size: {
        '17': '68px',
        '13' : '52px',
        '16.5' : '66px'
      },
      fontFamily: {
        "Roboto": ["Roboto Condensed"]
    },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #FFD700, #FFCC00)',
      },
      keyframes: {
        'slid': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-30%)' },
        },
        'slid-md': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-52%)' },
        },
       'slid-xl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-55%)' },
        },
      },
      animation: {
        slid: 'slid 10s linear infinite',
        'slid-md': 'slid-md 13s linear infinite',
        'slid-xl': 'slid-xl 13s linear infinite',
      },
      screens: {
        // 'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '992px',
       
  
        'me-xl': '1200px',
        
      },
    },
  },
  plugins: [],
}

