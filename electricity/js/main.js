let electricImage = new Image();
electricImage.src = './images/rotor-Sheet.png';
let canvas = document.getElementById('canvas');
canvas.width = 50;
canvas.height = 60;
let pushElectricity = document.querySelector('button');
pushElectricity.onclick = okay;
let conditionElectric = 0;
pushElectricity.classList.add('electricity-off');

function okay(){
    if (conditionElectric) {
        conditionElectric = 0;
        sprite.width = 306;
        sprite.numberOfFrames = 6;
        pushElectricity.classList.remove('electricity-on');
        pushElectricity.classList.add('electricity-off');
        pushElectricity.innerHTML = 'electricity off';
    } else if (conditionElectric == 0) {
        conditionElectric = 1;
        sprite.width = 612;
        sprite.numberOfFrames = 12;
        pushElectricity.classList.remove('electricity-off');
        pushElectricity.classList.add('electricity-on');
        pushElectricity.innerHTML = 'electricity on';
    }
}


class Sprite {
    constructor(options) {
        this.ctx = options.ctx;

        this.image = options.image;

        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames || 1;

        this.x = 0;

        this.width = options.width;
        this.height = options.height;

        this.start();
    }

    update() {
        this.tickCount++;

        if (this.width == 612) {
            this.x = 48;
        } else {
            this.x = 0;
        }



        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
            }
        }
    }

    render() {
      this.ctx.clearRect(0, 0, this.width / this.numberOfFrames, this.height);
        this.ctx.drawImage(
            this.image,
            this.frameIndex * this.width / this.numberOfFrames,
            this.x,
            this.width / this.numberOfFrames,
            this.height,
            0,
            0,
            this.width / this.numberOfFrames,
            this.height
        )
    }

    start() {
        let loop = () => {
            this.update();
            this.render();

            window.requestAnimationFrame(loop);
        }

        window.requestAnimationFrame(loop);
    }
}

let sprite = new Sprite({
    ctx: canvas.getContext('2d'),
    image: electricImage,
    width: 306,
    height: 48,
    numberOfFrames: 6,
    ticksPerFrame: 2
})


