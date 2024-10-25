import { ref } from "vue"
import { useRouter } from 'vue-router';
//import { useAuthStore } from '@/modules/Auth/stores'
//import { getError } from "@/utils/helpers";
//import * as AuthService from "@/modules/Auth/services";
import type { FormLogin, StandaloneLogin } from '@/types/Auth'

export function useLogin(): StandaloneLogin {
  const router = useRouter();
  //const auth = useAuthStore()
  const error = ref(null)  
  const sending = ref(false)

  //form: FormLogin
  const login = async (form: FormLogin) => {
    const payload = {
      email: form.email,
      password: form.password,
    }


    const myPromise = new Promise((resolve) => {
      sending.value = true;
      setTimeout(() => {
        resolve(router.push("/dashboard"));
      }, 300);
      sending.value = false;
    });

    //error.value = null;

    /*try {
      sending.value = true;
      await AuthService.login(payload);
      const authUser = await auth.getAuthUser();
      if (authUser) {
        auth.setGuest({ value: "isNotGuest" });
        await router.push("/dashboard");
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
    }*/
  }

  return {
    login,
    sending,
    error
  }
}
