import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import '../../../index.css';

export default createBoard({
    name: 'App',
    Board: () => <App className="set-max-dimensions" />,
    environmentProps: {},
    // setup
});
