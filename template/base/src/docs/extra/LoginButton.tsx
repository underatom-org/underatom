import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { IconBrandGoogle } from "../../assets/Icons";
import { Button, ButtonWithLeftIcon } from "../../components/react-aria/button/Button.atoms";
import { getAuthorisationURLWithQueryParamsAndSetState } from "supertokens-web-js/recipe/thirdparty";
import { signOut } from "supertokens-web-js/recipe/session";
import { getLoggedInStateKey, useLoggedInState } from "./voting/utils/state";
import { AUTH_REDIRECT_URL } from "./voting/utils/constants";

async function googleSignInClicked() {
  try {
    localStorage.setItem("initial-url", window.location.pathname);
    const authUrl = await getAuthorisationURLWithQueryParamsAndSetState({
      thirdPartyId: "google",

      // This is where Google should redirect the user back after login or error.
      // This URL goes on the Google's dashboard as well.
      frontendRedirectURI: `${AUTH_REDIRECT_URL}/auth/callback`,
    });

    /*
        Example value of authUrl: https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&client_id=1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com&state=5a489996a28cafc83ddff&redirect_uri=https%3A%2F%2Fsupertokens.io%2Fdev%2Foauth%2Fredirect-to-app&flowName=GeneralOAuthFlow
        */

    // we redirect the user to google for auth.
    window.location.assign(authUrl);
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert("Oops! Something went wrong.");
    }
  }
}

async function logout(queryClient: QueryClient) {
  await signOut();
  queryClient.invalidateQueries({ queryKey: getLoggedInStateKey() });
}

export const LoginButton = ({ text }: { text?: string }) => {
  const queryClient = useQueryClient();
  const { data: isLoggedIn } = useLoggedInState();

  console.log(isLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <ButtonWithLeftIcon
          onPress={googleSignInClicked}
          icon={(className) => <IconBrandGoogle className={className} />}
        >
          {text ? text : "Sign In"}
        </ButtonWithLeftIcon>
      )}
      {isLoggedIn && <Button onPress={() => logout(queryClient)}>Sign Out</Button>}
    </>
  );
};
