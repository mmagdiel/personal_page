//                      0,   1,   2,    3,    4
const breakpoints = [ 331, 419, 769, 1031, 1579 ]

//                   0,  1,  2,  3,  4,  5,  6,  7
const fontSizes = [ 12, 14, 16, 20, 24, 32, 48, 64 ]

//              0, 1, 2,  3,  4,  5,   6,   7 
const space = [ 0, 4, 8, 16, 32, 64, 128, 256 ]

const shadows = {
    small: '0 5px 7px #ccc',
    large: '0 7px 14px #ccc'
}

const colors = {
    blank: 'transparent',
    white: '#d3eaea',
    blue: '#07c',
    lightgray: '#f6f6ff',
    themePrimary: '#004b1c',
    black: '#000'
}

const fontWeights = {
    ligther: 200,
    normal: 500,
    darker: 700
}

const lineHeights = {
    stretch: 0.7,
    normal: 1.2,
    expand: 1.7
}

const letterSpacings = {
    normal: 0,
    stretch: '-2px',
    expand: '2px'
}

const borders = {
    forButton: '5px solid red',
    forCards: '7px solid red'
}

const radii = {
    forButtons: '14px 3px 14px 3px',
    forCards: '21px 7px 21px 7px'
}

const opacity = {
    none: 1,
    watermark: 0.5,
    almost: 0.2
}

const buttons = {
    primary: {
      color: colors.white,
      backgroundColor: colors.blue,
    },
    outline: {
      color: colors.blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    }
}

const cards = {
    primary: {
        color: '#fff',
        backgroundColor: colors.themePrimary,
        boxShadow: shadows.small
    },
    outline: {
        color: colors.blue,
        backgroundColor: 'transparent',
        boxShadow: 'inset 0 0 0 2px'
    },
    icons: {
        color: colors.black,
        backgroundColor: colors.lightgray,
        border: 'none'
    }
}

export default {
    breakpoints,
    fontSizes,
    space,
    colors,
    shadows,
    radii,
    borders,
    opacity,
    fontWeights,
    lineHeights,
    letterSpacings,
    buttons, 
    cards
}

/*
export defaultbreakpoints	Array	Array of strings representing viewport widths to use for min-width media queries.
fontSizes	Array	Array of numbers to use as a typographic scale
colors	Object	Color names that can be used in color, bg, and borderColor props
space	Array	Array of numbers for use as margin and pixel values
fonts	Array or Object	Values for the fontFamily prop
fontWeights	Array or Object	Values for fontWeight prop
lineHeights	Array or Object	Values for lineHeight prop
letterSpacings	Array or Object	Values for letterSpacing prop
shadows	Array or Object	Values for boxShadow prop
borders	Array or Object	Values for border props
radii	Array or Object	Values for borderRadius props
opacity
    u1: '7px',breakpoints	Array	Array of strings representing viewport widths to use for min-width media queries.
fontSizes	Array	Array of numbers to use as a typographic scale
colors	Object	Color names that can be used in color, bg, and borderColor props
space	Array	Array of numbers for use as margin and pixel values
fonts	Array or Object	Values for the fontFamily prop
fontWeights	Array or Object	Values for fontWeight prop
lineHeights	Array or Object	Values for lineHeight prop
letterSpacings	Array or Object	Values for letterSpacing prop
shadows	Array or Object	Values for boxShadow prop
borders	Array or Object	Values for border props
radii	Array or Object	Values for borderRadius props
opacity
    u2: '14px',
    u3: '21px',
    u4: '28px',
    u5: '35px',
    u6: '42px',
    u7: '49px',
    p1: '7px 14px',
    p2: '14px 21px',
    p3: '21px 35px',
    p4: '35px 42px',
    p5: '42px 49px',
    b_outlined_border_width: '2px',
    dark_green: '#235e07',
    darker_green: '#275114',
    darkest_green: '#112f03',
    green: '#e8ffdd',

    themePrimary: '#004b1c',
    themeSecondary: '#449a63',
    themeTertiary: '#5fae7c',
    themeLighterAlt: '#cde9d8',
    themeLighter: '#a4d5b6',
    themeLight: '#80c198',

    themeDarker: '#0a5e29',
    themeDark: '#19723a',
    themeDarkAlt: '#2c864d',
    
    neutralTertiaryAlt: '#b4c8c8',
    neutralQuaternary: '#bbd0d0',
    neutralQuaternaryAlt: '#c4dada',
    neutralLight: '#d3eaea',
    neutralLighter: '#dcf4f4',
    neutralLighterAlt: '#dff8f8',
    white: '#e6ffff',
    
    black: '#1a2c23',
    neutralDark: '#233c30',
    neutralPrimary: '#2f4f3f',
    neutralPrimaryAlt: '#406452',
    neutralSecondary: '#719583',
    neutralTertiary: '#b1cabe',
}

breakpoints	Array	Array of strings representing viewport widths to use for min-width media queries.
fontSizes	Array	Array of numbers to use as a typographic scale
colors	Object	Color names that can be used in color, bg, and borderColor props
space	Array	Array of numbers for use as margin and pixel values
fonts	Array or Object	Values for the fontFamily prop
fontWeights	Array or Object	Values for fontWeight prop
lineHeights	Array or Object	Values for lineHeight prop
letterSpacings	Array or Object	Values for letterSpacing prop
shadows	Array or Object	Values for boxShadow prop
borders	Array or Object	Values for border props
radii	Array or Object	Values for borderRadius props
opacity

*/

