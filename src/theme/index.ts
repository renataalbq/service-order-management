export const colors = {
  primary: "#4A7C59",
  primaryDark: "#3A6347",
  primaryLight: "#EEF4F0",
  primaryMid: "#C8DECE",

  accent: "#C4653A",
  accentDark: "#A5522E",
  accentLight: "#FAF0EB",
  accentMid: "#F0CBBA",

  background: "#fbf8f3",
  surface: "#FDFCFB",
  border: "#E4DDD7",
  borderStrong: "#CBBFB8",

  text: "#2C2420",
  textSecondary: "#6B5C55",
  textMuted: "#A1908A",
  textInverse: "#FDFCFB",

  pending: "#9A6B20",
  pendingBg: "#FDF4E3",
  inProgress: "#4a697c",
  inProgressBg: "#cbf2fd",
  completed: "#4A7C59",
  completedBg: "#E8F4F2",

  success: "#4A7C59",
  successLight: "#EEF4F0",
  warning: "#9A6B20",
  warningLight: "#FDF4E3",
  error: "#C4653A",
  errorLight: "#FAF0EB",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  full: 9999,
};

export const typography = {
  h1: { fontSize: 26, fontWeight: "700" as const },
  h2: { fontSize: 20, fontWeight: "700" as const },
  h3: { fontSize: 17, fontWeight: "600" as const },
  h4: { fontSize: 15, fontWeight: "600" as const },
  body: { fontSize: 15, fontWeight: "400" as const },
  small: { fontSize: 13, fontWeight: "400" as const },
  caption: { fontSize: 11, fontWeight: "500" as const },
  label: { fontSize: 11, fontWeight: "600" as const, letterSpacing: 0.6 },
};

export const shadow = {
  sm: {
    shadowColor: "#4A7C59",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: "#2C2420",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
};
