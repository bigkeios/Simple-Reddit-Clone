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
        this.votes = vote || 0;
    }
    voteUp()
    {
        this.votes += 1;
    }
    voteDown()
    {
        this.votes -= 1;
    }
    domain():string
    {
        try
        {
            const domainAndPath:string =  this.link.split('// ')[1];
            return domainAndPath;
        }
        catch(err)
        {
            return null;
        }
    }
}
