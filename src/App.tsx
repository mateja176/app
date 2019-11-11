import React, { Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

const HomeLazy = React.lazy(() =>
  import('./Home').then(
    imp => new Promise(resolve => setTimeout(resolve, 2000, imp)),
  ),
);
const AboutLazy = React.lazy(() =>
  import('./About').then(
    imp => new Promise(resolve => setTimeout(resolve, 2000, imp)),
  ),
);

const loading = 'Loading...';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route
          path="/home"
          render={() => (
            <Suspense fallback={loading}>
              <HomeLazy />
            </Suspense>
          )}
        />
        <Route
          path="/about"
          render={() => (
            <Suspense fallback={loading}>
              <AboutLazy />
            </Suspense>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
