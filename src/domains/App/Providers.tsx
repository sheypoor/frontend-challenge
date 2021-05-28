import { ConfigProvider } from 'antd'
import faIR from 'antd/lib/locale-provider/fa_IR'
import React, { Children, FC, memo, ReactNode } from 'react'
import { ThemeProvider } from 'react-jss'
import theme from 'theme'

interface IProvidersProps {
  children: ReactNode
}

const Providers: FC<IProvidersProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ConfigProvider direction="rtl" locale={faIR}>
      {Children.only(children)}
    </ConfigProvider>
  </ThemeProvider>
)

export default memo(Providers)
