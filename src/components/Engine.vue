<template>
  <div class="canvas-anchor" ref="canvasAnchor">
    
  </div>
</template>

<script>
/**
 * PIXI-Based Game Engine
 * v0.0.1
 * r.w. 2017
 */
import * as PIXI from 'pixi.js';
// import AnimationLoop from 'pixi-animationloop';

export default {
    name: 'default',
    data () {
        return {
            app: {},     // PIXI.js Application Instance
        }
    },
    props: {
        contents: {
            required: false,
            type: Object
        }
    },
    methods: {
        
    },
    mounted () {
        // Init Game Engine
        const loader = PIXI.loader;
        loader.add('UMP9_S', 'assets/UMP9-s.png');
        let gameOptions = {
            width: 1280,
            height: 720,
            forceFXAA: true,
            powerPreference: true,
            backgroundColor: 0x2B2B2B,
            antialias: true
        };
        this.app = new PIXI.Application(gameOptions);
        this.$refs.canvasAnchor.appendChild(this.app.view);

        loader.load((loaderInstance, resources) => {

            // Start rendering here
            var UMP9_S = new PIXI.Sprite(resources.UMP9_S.texture);
            UMP9_S.height = 1440;
            UMP9_S.width = 1017.75;
            UMP9_S.x = 300;
            UMP9_S.y = -100;

            var FPS_Text = new PIXI.Text('00', {fontFamily:'Futura',fill:'#EBEBEB',fontSize: '32px'});
            FPS_Text.x = 20;
            FPS_Text.y = 10;

            
            this.app.stage.addChild(UMP9_S);
            this.app.stage.addChild(FPS_Text);

            // Frame Callback
            this.app.ticker.add(() => {
                FPS_Text.text = (this.app.ticker.FPS).toFixed(2) + 'FPS';
            });
        });
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.canvas-anchor
    line-height: 0
    z-index: 921
    
    
        
</style>
