import { useEffect, useRef, useState } from 'react';
import Label from './Label.jsx';
import { Edges } from '@react-three/drei';

const Room = ( {
    children,
    model,
    texture,
    lDistanceFactor,
    lPos,
    lBackgroundColor = '#5995ED',
    lEdges = true
} ) => {
    const edges = useRef();

    const [ isHovered, setHovered ] = useState( false );
    const [ isActive, setActive ] = useState( false );

    const { geometry, position, rotation, scale } = model;

    useEffect( () => {
        if ( !edges.current ) return;

        edges.current.material.depthTest = false;
        edges.current.material.depthWrite = false;
        edges.current.renderOrder = 999;
    }, [] );


    return <mesh
        geometry={ geometry }
        position={ position }
        rotation={ rotation }
        scale={ scale }
    >
        <meshBasicMaterial map={ texture } />
        
        <Label 
            distanceFactor={ lDistanceFactor } 
            position={ lPos } 
            backgroundColor= { lBackgroundColor }
            setHovered={ setHovered } 
            isActive={ isActive } 
            setActive={ setActive } 
        >
            { children }
        </Label>

        { lEdges && <Edges ref={ edges } visible={ isHovered } lineWidth={ 2 } threshold={1} position={ [ 0, 0.001, 0 ] } /> }
    </mesh>
};

export default Room;