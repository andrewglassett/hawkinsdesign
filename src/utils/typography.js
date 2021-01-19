import Typography from "typography"
import twinPeaksTheme from "typography-theme-twin-peaks"

twinPeaksTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      color: `#2B242B`,
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #472944 1px, #472944 2px, rgba(0, 0, 0, 0) 2px)`,
    },
    "body": {
      backgroundColor: `#FBFEFB`,
    },
    "blockquote":{
      borderLeft: `0.28125rem solid #472944;`
    },
  }
}


const typography = new Typography(twinPeaksTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
