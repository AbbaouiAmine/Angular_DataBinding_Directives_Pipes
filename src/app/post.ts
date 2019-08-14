export class Post {
    private title: string;
    private  content: string;
    private loveIts: number;
    private created_at: Date;
    constructor(title?:string,content?:string,loveIts?:number,created_at?:Date)
    {
        this.title=title;
        this.content=content;
        this.loveIts=loveIts;
        this.created_at=created_at;
    }

    getTitle()
    {
        return this.title;
    }
    getContent(){
        return this.content;
    }
    getLoveIts()
    {
        return this.loveIts;
    }
    loveItsPlus()
    {
        this.loveIts++;
    }
    loveItsMoins()
    {
        this.loveIts--;
    }
    getCreated_at()
    {
        return this.created_at;
    }
}