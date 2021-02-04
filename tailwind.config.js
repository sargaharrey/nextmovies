module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing:{
       '0':'0px',
      '1':'4px',
      '2':'5px',
      '3':'6px',
      '4':'9px',
      '5':'10px',
      '6':'11px',
      '7':'12px',
      '8':'14px',
      '9':'15px',
      '10':'16px',
      '12':'18px',
      '13':'20px',
      '14':'22px',
      '15':'24px',
      '16':'25px',
      '17':'30px',
      '18':'32px',
      '19':'34px',
      '20':'36px',
      '21':'42px',
      '22':'46px',
      '23':'52px',
      '24':'56px',
      '25':'62px',
      '26':'64px',
      '27':'68px',
      '28':'72px',
      '29':'92px',
      '30':'100px',
      '31':'120px',
      '32':'180px',
      '33':'250px',
      '34':'300px',
      '35':'450px',
      '45%':'45%',
       '50%':'50%',
       '100%':'100%',

       

    },
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         white: '#fff',
         purple:{
           lighter:'#b14887',
           light : '#3F255F',
           curent: '#2A1A37',
           dark : '#8c2263',
           darkest: '#210d31',
           other : '#352046',
           other2: '#86689E',
           other3 : '#5b3a84'
         },
         blue:{
           light:'#3E4A92',
           dark: '#1D1B3E'
         },
         red:{
           light:'#e43838',
           current:'#b33131',
         },
         lights:{
           light:'#1d0c2bc7',
           light2:'#ffffff1f',
           light3:'#e0e0ff',
           light4:'#2a1a37a6',
           light5:'#E0E0FF'
         }  
      },
    height:{
      '100' : '100px',
      '100%' : '100%',
    },
     width:{
      '100' : '100px',
      '100%' : '100%',
    },
    fontSize:{
       'xsc':'12px',
       'smc':'16px',
       'mdc' : '27px', 
       'lgc' : '29px', 
       'xlgc' : '54px', 
       '2xlgc' : '74px', 



    }  

   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
