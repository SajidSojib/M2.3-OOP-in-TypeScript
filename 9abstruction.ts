//* abstruction -> age idea, pore implementation
//* abstruction -> interface, abstract class

//* interface
interface MediaRecord{
    play(): void
    pause(): void
    stop(): void
}
class MediaPlayer implements MediaRecord{
    play(): void {
        console.log("playing");
    }
    pause(): void {
        console.log("pausing");
    }
    stop(): void {
        console.log("stopping");
    }
}

const media = new MediaPlayer();
media.play();
media.pause();
media.stop();


//* abstract class using inharitance
abstract class Media {
    abstract play(): void
    abstract pause(): void
    abstract stop(): void
}

class MediaPlayer1 extends Media{
    play(): void {
        console.log("playing");
    }
    pause(): void {
        console.log("pausing");
    }
    stop(): void {
        console.log("stopping");
    }
}