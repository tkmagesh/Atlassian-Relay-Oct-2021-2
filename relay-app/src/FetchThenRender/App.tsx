import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useLazyLoadQuery } from 'react-relay';
import type { AppQuery } from './__generated__/AppQuery.graphql';

const { graphql } = require('babel-plugin-relay/macro');

function App() {
  const { totalUsers } = useLazyLoadQuery<AppQuery>(graphql`
    query AppQuery {
      totalUsers
    }
  `, {});

  return (
    <div>
        <p>Total Users : {totalUsers}</p>
    </div>
  );
}

export default App;
