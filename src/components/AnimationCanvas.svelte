<script>
    import { onMount } from 'svelte';
    import { initCanvas, resizeCanvas } from '../lib/canvasHelpers';
    
    let canvas;
    let ctx;
    let animationFrameId;

    function initalize() {
        // Get canvas context
        ctx = canvas.getContext('2d');
    }

    // Animation loop
    function animate() {
        // Update and render
        update();
        render();
        // Request next frame
        animationFrameId = requestAnimationFrame(animate);
    }

    function update() {
        // Update state as needed
    }

    function render() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw something

    }


    onMount(() => {
        // Initialize the canvas
        initalize();

        // Handle window resize event
        window.addEventListener('resize', resizeCanvas);
        console.log('Resize event listener added');

         // Start the animation loop
        animate();

        // Cleanup on component destroy
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            console.log('Event listeners removed');
        };

    })
</script>

<canvas bind:this={canvas}></canvas>

<style>
    canvas {
        width: 100%;
        height: 100%;
    }
</style>