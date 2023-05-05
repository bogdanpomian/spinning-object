import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Cube } from './components/cube/cube';

function App() {
    return (
        <div className={styles.App}>
            <Cube />
        </div>
    );
}

export default App;
