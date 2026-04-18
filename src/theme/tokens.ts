export interface ThemeTokens {
  colorPrimary: string;
  colorPrimaryHover: string;
  colorPrimaryActive: string;
  colorText: string;
  colorTextSecondary: string;
  colorTextLightSolid: string;
  colorBorder: string;
  colorBorderSecondary: string;
  colorBgContainer: string;
  colorBgElevated: string;
  colorBgLayout: string;
  colorFillTertiary: string;
  colorFillQuaternary: string;
  colorSuccess: string;
  colorWarning: string;
  colorError: string;
  colorInfo: string;
  boxShadow: string;
  boxShadowSecondary: string;
  fontFamily: string;
  fontSize: string;
  fontSizeHeading3: string;
  fontSizeHeading2: string;
  lineHeight: string;
  lineWidth: string;
  motionDurationFast: string;
  motionDurationMid: string;
  motionEaseInOut: string;
  borderRadius: string;
  borderRadiusSM: string;
  borderRadiusLG: string;
  controlHeight: string;
  controlHeightSM: string;
  controlHeightLG: string;
  padding: string;
  paddingSM: string;
  paddingLG: string;
}

export const defaultThemeTokens: ThemeTokens = {
  colorPrimary: "#1677ff",
  colorPrimaryHover: "#4096ff",
  colorPrimaryActive: "#0958d9",
  colorText: "#1f2329",
  colorTextSecondary: "#5b6472",
  colorTextLightSolid: "#ffffff",
  colorBorder: "#d9dce3",
  colorBorderSecondary: "#ebeef5",
  colorBgContainer: "#ffffff",
  colorBgElevated: "#ffffff",
  colorBgLayout: "#f5f7fb",
  colorFillTertiary: "#f4f6fa",
  colorFillQuaternary: "#fafbfc",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  boxShadow: "0 10px 30px rgba(31, 35, 41, 0.08)",
  boxShadowSecondary: "0 6px 18px rgba(22, 119, 255, 0.12)",
  fontFamily: "'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', sans-serif",
  fontSize: "14px",
  fontSizeHeading3: "20px",
  fontSizeHeading2: "28px",
  lineHeight: "1.5715",
  lineWidth: "1px",
  motionDurationFast: "0.15s",
  motionDurationMid: "0.2s",
  motionEaseInOut: "cubic-bezier(0.2, 0, 0, 1)",
  borderRadius: "10px",
  borderRadiusSM: "8px",
  borderRadiusLG: "14px",
  controlHeight: "40px",
  controlHeightSM: "32px",
  controlHeightLG: "48px",
  padding: "16px",
  paddingSM: "12px",
  paddingLG: "20px",
};
export type ThemeTokenName = keyof ThemeTokens;
