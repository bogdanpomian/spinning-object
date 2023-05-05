import { createBoard } from '@wixc3/react-board';
import { Cube } from '../../../components/cube/cube';

export default createBoard({
    name: 'CubeCanvas',
    Board: () => <Cube />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 1246,
        canvasWidth: 2172,
    },
});
