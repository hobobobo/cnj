/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Jokes from 'containers/Jokes/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100%;
  padding: 0 16px;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <title>Chuck Norrise Jokes</title>
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Jokes />
      <GlobalStyle />
    </AppWrapper>
  );
}
