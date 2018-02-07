export class Article 
{
    link: string;
    title: string;
    votes: number;
    constructor(link:string, title:string, vote?:number)
    // vote is optional
    {
        this.link = link;
        this.title = title;
        this.votes = vote;
    }
}
