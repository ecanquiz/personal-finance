import { ref } from "vue"
//import { useRouter } from 'vue-router';
// import * as AuthService from "../../services/auth";
import * as AuthService from "@/services/auth/__mocks__";
import { getError } from "../../utils/helpers";

interface UserAuthRegister{
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export function useRegister() {
  //const router = useRouter();
  const error = ref('')
  const sending = ref(false)
  
  const register = async (form: UserAuthRegister) => {
    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      password_confirmation: form.passwordConfirm
    };
    error.value = '';
    sending.value = true;  
    AuthService.registerUser(payload)
      //.then(() => router.push("/dashboard"))
      .catch((e) => error.value = getError(e))
      .finally(() => sending.value = false);
  }

  return {
    register,
    sending,
    error
  }
}
