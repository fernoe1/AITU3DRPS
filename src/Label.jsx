import { useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useFrame } from '@react-three/fiber';

import useClickOutside from './useOutside.jsx';

gsap.registerPlugin( useGSAP );

const Label = ( {
    children,
    distanceFactor,
    position,
    backgroundColor,
    setHovered,
    isActive,
    setActive,
} ) => {
    const label = useRef( null );
    const labelContent = useRef( null );
    const before = useRef( null );

    const [ distanceFactorScale, setDistanceFactorScale ] = useState( 0 );

    const { contextSafe } = useGSAP( {
        scope: label,
    } );

    useFrame( ( { camera } ) => {
        const minDistance = 5;
        const maxDistance = 35;

        const scale = gsap.utils.clamp(
            0,
            1,
            ( camera.position.length() - minDistance ) / ( maxDistance - minDistance )
        );

        setDistanceFactorScale( ( prev ) =>
            prev === scale ? prev : scale
        );
    });

    const onOcclude = contextSafe( ( isOccluded ) => {
        if ( !label.current ) return;

        gsap.to( label.current, {
            opacity: isOccluded ? 0 : 1,
            scale: isOccluded ? 0 : 1,
            duration: 0.2,
        } );
    });

    const pointerEnterAnimation = contextSafe( () => {
        if ( !label.current || !labelContent.current || !before.current ) return;

        setHovered( true );

        gsap.timeline()
            .set( before.current, { backgroundColor: backgroundColor } )
            .to( before.current, {
                scaleX: 1,
            } )
            .to( labelContent.current, {
                color: 'white',
            }, 0 )
            .to( label.current, {
                backgroundColor: backgroundColor,
                duration: 0.8,
            }, 0 );
    } );

    const pointerLeaveAnimation = contextSafe( () => {
        if ( !label.current || !labelContent.current || !before.current ) return;

        setHovered( false );

        gsap.timeline()
            .to( before.current, {
                scaleX: 0,
            } )
            .to( labelContent.current, {
                color: 'black',
                ease: 'power1.in',
            }, 0 )
            .to( label.current, {
                backgroundColor: 'white',
                duration: 0.8,
            }, 0 );
    } );

    const onPointerEnter = contextSafe( () => { pointerEnterAnimation(); } );

    const onPointerLeave = contextSafe(() => { if (!isActive) { pointerLeaveAnimation(); } } );

    useClickOutside(
        label,
        () => {
            setActive( false );
            pointerLeaveAnimation();
        },
        () => {
            setActive( ( prev ) => !prev );

            if ( isActive ) pointerLeaveAnimation();
            else pointerEnterAnimation();
        }
    );

    return (
        <Html
            distanceFactor={ distanceFactor + 2 * distanceFactor * distanceFactorScale }
            position={position}
            occlude
            center
            onOcclude={onOcclude}
        >
            <div
                ref={label}
                className="label"
                onPointerEnter={onPointerEnter}
                onFocus={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onBlur={onPointerLeave}
            >
                <div
                    ref={before}
                    className="before"
                />

                <div
                    ref={labelContent}
                    className="label-content"
                >
                    { children }
                </div>
            </div>
        </Html>
    );
};

export default Label;