import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { createBoard } from '@wixc3/react-board';



export default createBoard({
    name: 'spinning-cube',
    Board: () => (
        <div>
            <div></div>
        </div>
    ),
});
