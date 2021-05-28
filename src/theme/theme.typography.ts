import {
  fontWeightBold,
  fontWeightSemiBold,
  fontWeightMedium,
  fontWeightRegular,
  htmlFontSize,
} from './theme.constants'
import { pxToRem } from './theme.helpers'

const typography = {
  htmlFontSize,
  fontWeightBold,
  fontWeightSemiBold,
  fontWeightMedium,
  fontWeightRegular,
  h1: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(62),
  },
  h2: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(48),
  },
  h3: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(32),
  },
  h4: {
    fontWeight: fontWeightSemiBold,
    fontSize: pxToRem(26),
  },
  h5: {
    fontWeight: fontWeightSemiBold,
    fontSize: pxToRem(20),
  },
  h6: {
    fontWeight: fontWeightSemiBold,
    fontSize: pxToRem(16),
  },
  subtitle1: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(24),
  },
  subtitle2: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(18),
  },
  body1: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(16),
  },
  body1Medium: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(18),
  },
  body2: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(14),
  },
  body2Medium: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(14),
  },
  body2Bold: {
    fontWeight: fontWeightSemiBold,
    fontSize: pxToRem(14),
  },
  caption: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(12),
  },
  captionBold: {
    fontWeight: fontWeightSemiBold,
    fontSize: pxToRem(12),
  },
  overlineMedium: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(10),
  },
  overlineBold: {
    fontWeight: fontWeightBold,
    fontSize: pxToRem(10),
  },
}

export default typography
