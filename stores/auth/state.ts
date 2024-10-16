import type { AuthStore } from '@/types/auth/index'

export default (): AuthStore => ({
  user: { isAdmin: false },
  loading: false,
  error: '',
});
