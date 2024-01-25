/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  important: ".ft-job-board",
  theme: {
    "extend": {
      "colors": {
        "primary": "rgb(var(--ft-primary,59 130 246) / <alpha-value>)",
        "secondary": "rgb(var(--ft-secondary,251 113 133) / <alpha-value>)",
        "tertiary": "rgb(var(--ft-tertiary,31 41 55) / <alpha-value>)",
        "quaternary": "rgb(var(--ft-quaternary,250 204 21) / <alpha-value>)",
        "transparent": "transparent",
        "current": "currentColor"
      },
      "zIndex": {
        "10": "999810",
        "20": "999820",
        "30": "999830",
        "40": "999840",
        "50": "999850"
      },
    },
    maxWidth: {
      xs: "320px",
      sm: "384px",
      md: "448px",
      lg: "512px",
      xl: "576px",
      "2xl": "672px",
      "3xl": "768px",
      "4xl": "896px",
      "5xl": "1024px",
      "6xl": "1152px",
      "screen-sm": "640px",
      "screen-md": "768px",
      "screen-lg": "1024px",
      "screen-xl": "1280px",
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
      128: '512px',
    },
  },
  safelist: [
    {
      pattern: /^border-?(\w*)$/,
    }, 
    {
      pattern: /^rounded-?(\w*)$/,
      // variants: ["sm","md"]
    },
    {
      pattern: /^shadow-?(\w*)$/, 
    },
    {
      pattern: /^p-?(\w*)$/,
    },
    {
      pattern: /^m-?(\w*)$/,
    },
    {
      pattern: /^gap-?(\w*)$/,
    },
    {
      pattern: /^grid-cols-?(\w*)$/,
      variants: ["sm","md","lg","xl"]
    },
    {
      pattern: /^columns-?(\w*)$/,
      variants: ["sm","md","lg","xl"]
    },
  ],
  
  plugins: [],
}

