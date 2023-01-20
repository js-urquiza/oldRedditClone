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

    voteUp(): void {
        this.votes = this.votes + 1;
    }

    voteDown(): void {
        this.votes = this.votes - 1;
    }

    // Agrego función para extraer el dominio del link
    domain(): any {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            
            return domainAndPath.split('/')[0];
        } catch (error: any) {
            console.log(error.message);
        }
    }
}