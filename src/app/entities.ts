import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { Artist, Greeter } from './interfaces';
import { TYPES } from './types';

@injectable()
export class RudeGreeter implements Greeter {
    public greet(): string {
        return 'Why are you geh??';
    }
}

@injectable()
export class PoliteGreeter implements Greeter {
    public greet(): string {
        return 'Mornink, shall I call you mista?';
    }
}

@injectable()
export class Tongo implements Artist {
    @inject(TYPES.Greeter) private greeter: Greeter;

    public songLink = 'https://www.youtube.com/embed/bjwgt1kRqEU?start=37&autoplay=1';

    public greet(): string {
        return this.greeter.greet();
    }
}

@injectable()
export class FosterThePeople implements Artist {
    @inject(TYPES.Greeter) private greeter: Greeter;

    public songLink = 'https://www.youtube.com/embed/SDTZ7iX4vTQ?start=37&autoplay=1';

    public greet(): string {
        return this.greeter.greet();
    }
}
