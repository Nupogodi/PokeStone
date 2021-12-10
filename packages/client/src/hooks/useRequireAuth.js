import { useEffect } from 'react';

// Constants
import { ROUTES } from 'constants/index';

// Auth
import { useAuth } from 'hooks/useAuth';
import useRouter from 'hooks/useRouter';
// eslint-disable-next-line
export function useRequireAuth(redirectUrl = ROUTES.auth.url) {
  const auth = useAuth();
  const router = useRouter();

  // If auth.user is false that mWeans we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.state.isAuthenticated === false) {
      router.push(redirectUrl);
    }
  }, [auth, router, redirectUrl]);

  return auth;
}
