import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { UserContextProvider } from './contexts/UserContext';
import { IssueContextProvider } from './contexts/IssuesContext';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <UserContextProvider>
        <IssueContextProvider>
          <RouterProvider router={router} />
        </IssueContextProvider>
      </UserContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
