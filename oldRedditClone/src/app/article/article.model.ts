//Es buena práctica seprar las estructura de datos que usamos dentro del componente
//Acá creamos la clase "article" que representa su estructura de datos

export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
}