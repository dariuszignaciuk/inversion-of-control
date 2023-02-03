import { InversifyContainer } from './app/inversify.config';
import { Artist } from './app/interfaces';

class App {
    private artistButton: HTMLElement = document.getElementById('artistButton');
    private coverArtistButton: HTMLElement = document.getElementById('coverArtistButton');
    private container1 = new InversifyContainer({ coverArtist: false, shouldGreetPolitely: true });
    private container2 = new InversifyContainer({ coverArtist: true, shouldGreetPolitely: true });

    constructor() {
        this.artistButton.addEventListener('click', () => {
            this.updateView(this.container1);
        });
        this.coverArtistButton.addEventListener('click', () => {
            this.updateView(this.container2);
        });
    }

    private updateView(container: InversifyContainer): void {
        const artist = container.getArtist();

        this.updateIframeSrc(artist);
        this.greet(artist);
    }

    private updateIframeSrc(artist: Artist): void {
        const iframe = document.getElementById('iframe') as HTMLIFrameElement;

        iframe.src = artist.songLink;
        iframe.style.display = 'block';
    }

    private greet(artist: Artist): void {
        const greetingContainer: HTMLElement = document.getElementById('greeting');

        greetingContainer.textContent = artist.greet();
    }
}

new App();
