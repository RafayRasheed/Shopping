import { responsiveScreenFontSize } from "react-native-responsive-dimensions";

export const fonts= {
    
    bodyBold:'bodyBold',
    body: 'body',
    heading: 'heading',
    headingBold: 'heading1',

};

export const fontSizes={
    // tiny:10,
    tiny: responsiveScreenFontSize(1.25),
    // small: 12,
    small:responsiveScreenFontSize(1.5),
    // XSmall: 14,
    XSmall: responsiveScreenFontSize(1.75),
    // medium: 16,
    medium: responsiveScreenFontSize(2),
    // xMedium: 18,
    xMedium: responsiveScreenFontSize(2.25),
    // large: 20,
    large: responsiveScreenFontSize(2.5),
    // xLarge: 24,
    xLarge: responsiveScreenFontSize(3),
}

export const fontSizes_px={
    small: '14px',
    xSmall: '16px',
    medium: '17px',
    xMedium: '18px',
    large: '20px',
    xLarge: '22px',
}