# Nan Design

`Nan Design` 是一个基于 `React + TypeScript` 的组件库，面向中后台、工作台和通用 Web 应用。

这个公开仓库仅包含组件库源码、样式、类型声明配置和测试文件，不包含站点展示页或业务演示页面。

## Included Components

- `Badge`
- `Breadcrumb`
- `Button`
- `Card`
- `ConfigProvider`
- `Drawer`
- `Dropdown`
- `Empty`
- `Input`
- `Modal`
- `NavMenu`
- `PageHeader`
- `Pagination`
- `Select`
- `Space`
- `Statistic`
- `Switch`
- `Table`
- `Tabs`
- `Tag`
- `Textarea`
- `Typography`

## Development

```bash
npm install
npm test
npm run build
```

## Usage

```tsx
import { Button, Card, ConfigProvider } from "nan-design";
import "nan-design/style.css";

export function App() {
  return (
    <ConfigProvider theme={{ colorPrimary: "#0057ff" }}>
      <Card title="Hello">
        <Button variant="primary">Action</Button>
      </Card>
    </ConfigProvider>
  );
}
```

## Notes

- Source code lives in `src/components`
- Package entry lives in `src/lib.ts`
- Build output is generated into `dist`
