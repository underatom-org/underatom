import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef } from "react";
import { signInAndUp } from "supertokens-web-js/recipe/thirdparty";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useCallback(async () => {
    console.log("handleGoogleCallback");
    try {
      const response = await signInAndUp();
      console.log(response);

      if (response.status === "OK") {
        console.log(response.user);
        if (response.createdNewRecipeUser && response.user.loginMethods.length === 1) {
          // sign up successful
        } else {
          // sign in successful
        }
        const initialUrl = localStorage.getItem("initial-url");
        navigate({ to: initialUrl || "/home" });
        // window.location.assign("/home");
      } else if (response.status === "SIGN_IN_UP_NOT_ALLOWED") {
        // the reason string is a user friendly message
        // about what went wrong. It can also contain a support code which users
        // can tell you so you know why their sign in / up was not allowed.
        window.alert(response.reason);
      } else {
        // SuperTokens requires that the third party provider
        // gives an email for the user. If that's not the case, sign up / in
        // will fail.

        // As a hack to solve this, you can override the backend functions to create a fake email for the user.

        window.alert("No email provided by social login. Please use another form of login");
        window.location.assign("/auth"); // redirect back to login page
      }
    } catch (err: any) {
      if (err.isSuperTokensGeneralError === true) {
        // this may be a custom error message sent from the API by you.
        window.alert(err.message);
      } else {
        window.alert("Oops! Something went wrong.");
        console.log(err);
      }
    } finally {
      queryClient.invalidateQueries({ queryKey: ["session"] });
    }
  }, [navigate, queryClient]);
}

export const AuthCallback = () => {
  const login = useLogin();
  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    login();
    initialized.current = true;
  }, [initialized, login]);

  return <div></div>;
};
