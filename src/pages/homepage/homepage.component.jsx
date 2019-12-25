import React from "react";
import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const Homepage = () => (
  <HomePageContainer className="homepage">
    <Directory className="directory-menu" />
  </HomePageContainer>
);

export default Homepage;
