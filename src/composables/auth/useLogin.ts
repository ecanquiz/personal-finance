import { ref } from "vue"
//import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'
import { getError } from "@/utils/helpers";
// import * as AuthService from "@/services/auth";
import * as AuthService from "@/services/auth/__mocks__";
import type { FormLogin, StandaloneLogin } from '@/types/auth'

export function useLogin(): StandaloneLogin {
  //const router = useRouter();
  const auth = useAuthStore()
  const error = ref(null)
  const sending = ref(false)

  const login = async (form: FormLogin) => {
    const payload = {
      email: form.email,
      password: form.password,
    }
    error.value = null;
    try {      
      sending.value = true;
      await AuthService.login(payload);
      const authUser = await auth.getAuthUser();
      console.log(authUser)
      if (authUser) {
        auth.setGuest({ value: "isNotGuest" });
        //await router.push("/dashboard");
        await navigateTo({ path: '/dashboard' })
      } else {
        const err = Error(
          "Unable to fetch user after login, check your API settings."
        );
        err.name = "Fetch User";
        throw err;
      }
    } catch (err) {
      error.value = getError(err);
    } finally {
      sending.value = false;
    }
  }

  return {
    login,
    sending,
    error
  }
}
