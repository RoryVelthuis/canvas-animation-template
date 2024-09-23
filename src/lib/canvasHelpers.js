
    //Inialize canvas
export function initCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Failed to get 2D context for canvas');
    }
    console.log('canvas initalized');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    return ctx;
}

export function resizeCanvas(canvas) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}