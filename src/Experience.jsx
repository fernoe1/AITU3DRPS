import { useTexture, useGLTF, OrbitControls, Stats } from '@react-three/drei';
import Stairs2RoundedIcon from '@iconify-react/material-symbols-light/stairs-2-rounded';
import WcRoundedIcon from '@iconify-react/material-symbols-light/wc-rounded';
import ElevatorOutlineRoundedIcon from '@iconify-react/material-symbols-light/elevator-outline-rounded';
import ExitToAppRoundedIcon from '@iconify-react/material-symbols-light/exit-to-app-rounded';
import Room from './Room.jsx';

const Experience = () => {
    const { nodes: a112 } = useGLTF( './model/1/12/mesh.glb' );
    const a112Flooring = useTexture( './model/1/12/flooring2.jpg' );
    a112Flooring.flipY = false;
    const a112Walls = useTexture( './model/1/12/walls2.jpg' );
    a112Walls.flipY = false;

    const { nodes: a1I } = useGLTF( './model/1/inter/mesh.glb' );
    console.log(a1I);
    const a1ITexture = useTexture( './model/1/inter/texture2.jpg' );
    a1ITexture.flipY = false;

    return <>
        <color args={ [ '#313655' ] } attach="background" />

        <OrbitControls makeDefault />

        <Stats />

        <Room
            model={ a112['121K'] } texture={ a112Flooring }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] }
        >
            { '121K' }
        </Room>

        <Room
            model={ a112['122K'] } texture={ a112Flooring }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] }
        >
            { '122K' }
        </Room>

        <Room
            model={ a112['123K'] } texture={ a112Flooring }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] }
        >
            { '123K' }
        </Room>

        <Room
            model={ a112['124K'] } texture={ a112Flooring }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] }
        >
            { '124K' }
        </Room>

        <Room
            model={ a112['135'] } texture={ a112Flooring }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] }
        >
            { '135' }
        </Room>

        <Room
            model={ a112['136'] } texture={ a112Flooring }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] }
        >
            { '136' }
        </Room>

        <Room
            model={ a112['137P'] } texture={ a112Flooring }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] }
        >
            { '137P' }
        </Room>

        <Room
            model={ a112['138L'] } texture={ a112Flooring }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] } 
        >
            { '138L' }
        </Room>

        <Room 
            model={ a112['139'] } texture={ a112Flooring }
            lDistanceFactor={ 18 } lPos={ [0, 0.2, 0 ] }
        >
            { '139' }
        </Room>

        <Room
            model={ a112.atrium } texture={ a112Flooring }
            lDistanceFactor={ 20 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#32174D' }
        >
            { 'Atrium' }
        </Room>

        <mesh 
            geometry={ a112.atriumCloakroom.geometry }
            position={ a112.atriumCloakroom.position }
            rotation={ a112.atriumCloakroom.rotation }
            scale={ a112.atriumCloakroom.scale }
        >
            <meshBasicMaterial map={ a112Flooring } />
        </mesh>

        <mesh 
            geometry={ a112.atriumCoffee.geometry }
            position={ a112.atriumCoffee.position }
            rotation={ a112.atriumCoffee.rotation }
            scale={ a112.atriumCoffee.scale }
        >
            <meshBasicMaterial map={ a112Flooring } />
        </mesh>

        <mesh 
            geometry={ a112.atriumMerch.geometry }
            position={ a112.atriumMerch.position }
            rotation={ a112.atriumMerch.rotation }
            scale={ a112.atriumMerch.scale }
        >
            <meshBasicMaterial map={ a112Flooring } />
        </mesh>

        <mesh 
            geometry={ a112.atriumSecurity.geometry }
            position={ a112.atriumSecurity.position }
            rotation={ a112.atriumSecurity.rotation }
            scale={ a112.atriumSecurity.scale }
        >
            <meshBasicMaterial map={ a112Flooring } />
        </mesh>

        <Room
            model={ a112.cloakroom } texture={ a112Flooring }
            lDistanceFactor={ 16 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#6F4E37' }
        >
            { 'Cloakroom' }
        </Room>

        <Room
            model={ a112.coffee } texture={ a112Flooring }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#355E3B' }
        >
            { 'Cafe' }
        </Room>

        <Room
            model={ a112.coworking } texture={ a112Flooring }
            lDistanceFactor={ 24 } lPos={ [ 0, 0.2, -1 ] } lBackgroundColor={ '#563C5C' }
        >
            { 'Coworking' }
        </Room>

        <Room
            model={ a112.elevator112 } texture={ a112Flooring }
            lDistanceFactor={ 16 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#708090' }
        >
            <ElevatorOutlineRoundedIcon height={ '2.2em' } />
        </Room>

        <Room
            model={ a112.exitStair1121 } texture={ a112Flooring }
            lDistanceFactor={ 12 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#A50021' }
        >
            <ExitToAppRoundedIcon height={ '2em' } />
        </Room>

        <Room
            model={ a112.exitStair1122 } texture={ a112Flooring }
            lDistanceFactor={ 12 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#A50021' }
        >
            <ExitToAppRoundedIcon height={ '2em' } />
        </Room>

        <mesh 
            geometry={ a112.floor112.geometry }
            position={ a112.floor112.position }
            rotation={ a112.floor112.rotation }
            scale={ a112.floor112.scale }
        >
            <meshBasicMaterial map={ a112Flooring } />
        </mesh>

        <Room
            model={ a112.merch } texture={ a112Flooring }
            lDistanceFactor={ 14 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#3AA8C1' }
        >
            { 'Merch' }
        </Room>

        <Room
            model={ a112.security } texture={ a112Flooring }
            lDistanceFactor={ 14 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#708090' }
        >
            { 'Security' }
        </Room>

        <mesh 
            geometry={ a112.walls112.geometry }
            position={ a112.walls112.position }
            rotation={ a112.walls112.rotation }
            scale={ a112.walls112.scale }
        >
            <meshBasicMaterial map={ a112Walls } />
        </mesh>

        <Room
            model={ a112.wc1121 } texture={ a112Flooring }
            lDistanceFactor={ 14 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#003262' }
        >
            <WcRoundedIcon height={ '2em' } />
        </Room>

        <Room
            model={ a112.wc1122 } texture={ a112Flooring }
            lDistanceFactor={ 14 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#003262' }
        >
            <WcRoundedIcon height={ '2em' } />
        </Room>

        <Room 
            model={ a1I.ffInterCafe1 } texture={ a1ITexture }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#355E3B' }
        >
            { 'Cafe' }
        </Room>

        <Room 
            model={ a1I.ffInterCafe2 } texture={ a1ITexture }
            lDistanceFactor={ 18 } lPos={ [ 0, -0.2, 0 ] } lBackgroundColor={ '#355E3B' }
        >
            { 'Cafe' }
        </Room>

        <mesh 
            geometry={ a1I.ffInterFloor.geometry }
            position={ a1I.ffInterFloor.position }
            rotation={ a1I.ffInterFloor.rotation }
            scale={ a1I.ffInterFloor.scale }
        >
            <meshBasicMaterial map={ a1ITexture } />
        </mesh>

        <mesh 
            geometry={ a1I.ffInterWalls.geometry }
            position={ a1I.ffInterWalls.position }
            rotation={ a1I.ffInterWalls.rotation }
            scale={ a1I.ffInterWalls.scale }
        >
            <meshBasicMaterial map={ a1ITexture } />
        </mesh>

        <Room 
            model={ a1I.ffStairs1 } texture={ a1ITexture }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#708090' }
            lEdges={ false }
        >
            <Stairs2RoundedIcon height={ '1.8em' } />
        </Room>

        <Room
            model={ a1I.ffStairs2 } texture={ a1ITexture }
            lDistanceFactor={ 16 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#708090' }
            lEdges={ false }
        >
            <Stairs2RoundedIcon height={ '1.8em' } />
        </Room>

        <Room
            model={ a1I.ffStairs3 } texture={ a1ITexture }
            lDistanceFactor={ 18 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#708090' }
            lEdges={ false }
        >
            <Stairs2RoundedIcon height={ '1.8em' } />
        </Room>

        <Room
            model={ a1I.ffStairs4 } texture={ a1ITexture }
            lDistanceFactor={ 16 } lPos={ [ 0, 0.2, 0 ] } lBackgroundColor={ '#708090' }
            lEdges={ false }
        >
            <Stairs2RoundedIcon height={ '1.6em' } />
        </Room>
    </>
};

export default Experience;