export class Film{
    id: number;
    title: string;
    description: string;
    duration: number;
    movieGenre: string;
    src: string;
    
    constructor(id: number, title: string, description: string, duration: number, movieGenre: string, src: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.movieGenre = movieGenre;
        this.src = src;
    };
}