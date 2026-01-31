import { useState, useEffect, useRef, useCallback } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from "../libs/model";
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const ModelLap = () => {
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const cameraRef = useRef() // Using a ref for the camera to ensure the animation loop always has the current instance
    const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            40 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [controls, setControls] = useState()

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer
        if (container && renderer && cameraRef.current) {
            const scW = container.clientWidth
            const scH = container.clientHeight
            renderer.setSize(scW, scH)

            // BIGGER MODEL: Lowering the constant from 4.8 to 2.5
            const scale = scH * 0.005 + 4.4 
            const camera = cameraRef.current
            camera.left = -scale
            camera.right = scale
            camera.top = scale
            camera.bottom = -scale
            camera.updateProjectionMatrix()
        }
    }, [renderer])

    useEffect(() => {
        const { current: container } = refContainer
        if (container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            // This works for both old and new versions of Three.js
            renderer.outputColorSpace = THREE.SRGBColorSpace || 'srgb'; 

            // Also, if you are on a very old version, you might need:
            if (renderer.outputEncoding !== undefined) {
                renderer.outputEncoding = THREE.sRGBEncoding || 3001; 
            }
            renderer.shadowMap.enabled = true
            renderer.shadowMap.type = THREE.PCFSoftShadowMap
            
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            // TRANSITION SCALES
            // finalScale 2.5 makes the model fill the box
            const finalScale = scH * 0.005 + 5.5 
            const initialScale = finalScale * 6 // Start very far for a dramatic zoom

            const camera = new THREE.OrthographicCamera(
                -initialScale, initialScale, initialScale, -initialScale, 0.01, 50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            cameraRef.current = camera

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
            scene.add(ambientLight)

            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.31);
            directionalLight.position.set(15, 20, 15);
            directionalLight.castShadow = true;

            // --- FIX SHADOW ACNE HERE ---
            directionalLight.shadow.bias = -0.0005; // Pushes shadow away to stop the "moving lines"
            directionalLight.shadow.mapSize.set(2048, 2048); // High res shadows for voxel edges

            // Tighten the shadow area to just the model size
            directionalLight.shadow.camera.left = -10;
            directionalLight.shadow.camera.right = 10;
            directionalLight.shadow.camera.top = 10;
            directionalLight.shadow.camera.bottom = -10;
            directionalLight.shadow.camera.near = 0.1;
            directionalLight.shadow.camera.far = 40;

            scene.add(directionalLight);

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.enableDamping = true
            controls.dampingFactor = 0.05
            controls.target = target
            setControls(controls)

            loadGLTFModel(scene, '/systemNew.glb', {
                receiveShadow: true,
                castShadow: true
            }).then(() => {
                animate()
                setLoading(false)
            })

            let req = null
            let frame = 0
            const animate = () => {
                req = requestAnimationFrame(animate)
                frame = frame <= 100 ? frame + 1 : frame

                if (frame <= 100) {
                    const p = initialCameraPosition
                    const progress = frame / 100
                    const easeProgress = easeOutCirc(progress)
                    
                    // Rotation
                    const rotSpeed = -easeProgress * Math.PI * 10
                    camera.position.y = 5
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)

                    // Zooming In Transition
                    const currentScale = initialScale - (initialScale - finalScale) * easeProgress
                    camera.left = -currentScale
                    camera.right = currentScale
                    camera.top = currentScale
                    camera.bottom = -currentScale
                    camera.updateProjectionMatrix()
                    
                    camera.lookAt(target)
                }

                controls.update()
                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [handleWindowResize])

    return (
        <Box ref={refContainer} className="model-lap"
            m="auto"
            mt={['-20px', '-60px', '-120px']}
            mb={['-40px', '-140px', '-200px']}
            w={[300, 500, 700]} // Slightly wider container to show off the big model
            h={[300, 500, 700]}
            position="relative"
        >
            {loading && (
                <Spinner size="xl"
                    position="absolute"
                    left="50%"
                    top="50%"
                    ml="-20px"
                    mt="-20px"
                />
            )}
        </Box>
    )
}

export default ModelLap