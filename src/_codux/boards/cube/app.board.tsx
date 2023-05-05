import { createBoard } from '@wixc3/react-board';
import { Cube } from '../../../components/cube/cube';

export default createBoard({
    name: 'CubeCanvas',
    Board: () => <Cube />,
    environmentProps: {
        canvasWidth: 1202,
        canvasHeight: 756,
    },
});
