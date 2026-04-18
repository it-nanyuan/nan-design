import type { CSSProperties, PropsWithChildren } from "react";
import { defaultThemeTokens, type ThemeTokens } from "../../theme/tokens";

export type ThemeOverrides = Partial<ThemeTokens>;

export interface ConfigProviderProps extends PropsWithChildren {
  theme?: ThemeOverrides;
  className?: string;
  style?: CSSProperties;
}

function toCSSVariables(theme: ThemeOverrides | undefined): CSSProperties {
  if (!theme) {
    return {};
  }

  return Object.entries(theme).reduce<Record<string, string>>((acc, [key, value]) => {
    if (value !== undefined) {
      acc[`--nd-${key}`] = value;
    }
    return acc;
  }, {}) as CSSProperties;
}

export function ConfigProvider({ children, theme, className, style }: ConfigProviderProps) {
  const mergedStyle = {
    ...toCSSVariables(defaultThemeTokens),
    ...toCSSVariables(theme),
    ...style,
  };

  return (
    <div className={className} style={mergedStyle}>
      {children}
    </div>
  );
}
