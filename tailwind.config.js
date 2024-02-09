const { blackA, mauve, violet } = require('@radix-ui/colors');
const colors = [
  [
    "0D0016",
    "FE2C24",
    "FF9900",
    "FFD900",
    "A2E043",
    "38D8F0",
    "4DA8EE",
    "956FE7"
  ],
  [
    "F3F3F4",
    "CCCCCC",
    "FEF2F0",
    "FFF5E6",
    "FEFCD8",
    "EDF6E8",
    "E7FAFA",
    "EAF4FC",
    "EFEDF6"
  ],
  [
    "D7D8D9",
    "A5A5A5",
    "FBD4D0",
    "FFD7B9",
    "F9EDA6",
    "D4E9D5",
    "C7E6EA",
    "CBE0F1",
    "DAD5E9"
  ],
  [
    "7B7F82",
    "494949",
    "ED7976",
    "FAA572",
    "E6B223",
    "98C091",
    "79C6CD",
    "6EAAD7"
  ],
  [
    "9C8EC1",
    "333333",
    "BE191C",
    "B95514",
    "AD720D",
    "1C7331",
    "1C7892",
    "1A439C",
    "511B78"
  ]
]
const DraftRichColor = colors.flat().reduce((acc, color) => {
  acc[`${color}`] = `#${color}`;
  return acc;
}, {});
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
        ...DraftRichColor
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        }
      },
      animation: {
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [],
}

