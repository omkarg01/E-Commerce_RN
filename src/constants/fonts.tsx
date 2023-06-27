const Inter_500Medium = {fontFamily: 'Inter-Medium'};
const Inter_600SemiBold = {fontFamily: 'Inter-SemiBold'};
const Inter_700Bold = {fontFamily: 'Inter-Bold'};
const DMSans_400Regular = {fontFamily: 'DMSans-Regular'};
const DMSans_500Medium = {fontFamily: 'DMSans-Medium'};
const DMSans_700Bold = {fontFamily: 'DMSans-Bold'};

export const fonts = {
  // H1-5
  H1: {...Inter_700Bold, fontSize: 32, lineHeight: 32 * 1.3},
  H2: {...Inter_700Bold, fontSize: 22, lineHeight: 22 * 1.4},
  H3: {...Inter_500Medium, fontSize: 20, lineHeight: 20 * 1.2},
  H4: {...Inter_500Medium, fontSize: 18, lineHeight: 18 * 1.2},
  H5: {...Inter_600SemiBold, fontSize: 14, lineHeight: 14 * 1.2},
  // TS 14-16
  textStyle_14: {...DMSans_400Regular, fontSize: 14, lineHeight: 14 * 1.5},
  textStyle_16: {...DMSans_400Regular, fontSize: 16, lineHeight: 16 * 1.7},
  // Inter & DMSans
  Inter_500Medium: {...Inter_500Medium},
  Inter_600SemiBold: {...Inter_600SemiBold},
  Inter_700Bold: {...Inter_700Bold},
  DMSans_400Regular: {...DMSans_400Regular},
  DMSans_500Medium: {...DMSans_500Medium},
  DMSans_700Bold: {...DMSans_700Bold},
};
