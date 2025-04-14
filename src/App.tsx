import { KeycloakProvider } from './auth/KeycloakProvider';

export default function App() {
  return (
    <KeycloakProvider>
      <div>Hello, World!</div>
    </KeycloakProvider>
  );
}
