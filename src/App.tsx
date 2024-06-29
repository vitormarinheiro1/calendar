import React from 'react';
import styles from './App.module.scss';
import { RecoilRoot } from 'recoil';
import Card from './components/Card';

function App() {
  return (
    <RecoilRoot>
      <Card>
        teste
      </Card>
    </RecoilRoot>
  );
}

export default App;
