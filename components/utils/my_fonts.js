import { responsiveScreenFontSize } from "react-native-responsive-dimensions";

export const fonts= {
    
    bodyBold:'bodyBold',
    body: 'body',
    heading: 'heading',
    headingBold: 'heading1',

};

export const fontSizes={
    // veryTinyHalf:7,
    veryTinyHalf:responsiveScreenFontSize(1),
    // veryTiny:8,
    veryTiny:responsiveScreenFontSize(1.15),
    // tiny:10,
    tiny: responsiveScreenFontSize(1.27),
    // small: 12,
    small:responsiveScreenFontSize(1.47),
    // XSmall: 14,
    XSmall: responsiveScreenFontSize(1.6),
    // medium: 16,
    medium: responsiveScreenFontSize(1.8),
    // xMedium: 18,
    xMedium: responsiveScreenFontSize(2),
    // large: 20,
    large: responsiveScreenFontSize(2.2),
    // xLarge: 24,
    xLarge: responsiveScreenFontSize(2.4),
}

export const fontSizes_px={
    small: '14px',
    xSmall: '16px',
    medium: '17px',
    xMedium: '18px',
    large: '20px',
    xLarge: '22px',
}