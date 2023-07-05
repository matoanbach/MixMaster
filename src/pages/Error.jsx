import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }

  if (error.status === 401) {
    return <Wrapper>You aren't authorized to see this</Wrapper>;
  }

  if (error.status === 503) {
    return <Wrapper>Looks like our API is down</Wrapper>;
  }

  if (error.status === 418) {
    return <Wrapper>🫖</Wrapper>;
  }

  return <h1>Error</h1>;
}

export default Error;
