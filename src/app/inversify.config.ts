import { Container } from 'inversify';
import { TYPES } from './types';
import { Artist, ContainerConfig, Greeter } from './interfaces';
import { Tongo, FosterThePeople, PoliteGreeter, RudeGreeter } from './entities';

export class InversifyContainer {
    private container = new Container();

    constructor(config: ContainerConfig) {
        this.container.bind<Greeter>(TYPES.Greeter).to(config.shouldGreetPolitely ? PoliteGreeter : RudeGreeter);
        this.container.bind<Artist>(TYPES.Artist).to(config.coverArtist ? FosterThePeople : Tongo);
    }

    public getArtist(): Artist {
        return this.container.get<Artist>(TYPES.Artist);
    }
}
