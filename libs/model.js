import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

// 1. Initialize the Draco Loader
const dracoLoader = new DRACOLoader()

// 2. Set the path to the decoder binaries
// Using the Google gstatic CDN is the easiest way to get the decoder without hosting it yourself
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')

export function loadGLTFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        // 3. Link the Draco Loader to the GLTF Loader
        loader.setDRACOLoader(dracoLoader)
        

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = '3d'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse(function (child) {
                    if (child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })
                resolve(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}