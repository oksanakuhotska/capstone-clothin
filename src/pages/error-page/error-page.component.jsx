import { useRouteError } from "react-router-dom";
import Navigation from "../navigation/naviagation.component";
import { ErrorContainer } from "./error-page.style";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorContainer id="error-page">
			<Navigation />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorContainer>
  );
}