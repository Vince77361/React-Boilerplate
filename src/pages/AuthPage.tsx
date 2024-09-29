import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../lib/supabase/supabase";

const AuthPage = () => {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={[]}
    />
  );
};

export default AuthPage;
