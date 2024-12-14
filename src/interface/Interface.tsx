export interface InterfaceHero{
    dataHero: HeroHome,
    
}
interface DataSlider{
    id:number,
    name:string,
}
interface HeroHome{
    part1:string,
    part2:string,
    par:string,
    par2:string,
    arrow:string,
    text:string,
    text2:string,
    commpany:string,
    move:string,
    slider : DataSlider[],
    dataCard:CardData[]
}
export interface ArrowInterface{
    par:string,
    arrow:string,
    changing? :boolean
}
export interface CardData{
    id:number,
    text:string,
    num:number,
    single:string,
    mySecound:number,
    adding?:string,
}
export interface Title {
    title:string,
    exiset?:boolean,
    text?:string,
    withBorder?:boolean
}
export interface CardService{
    id?:number,
    icon:string,
        title:string,
        par:string,
        text:string,
        num:string
}
export interface Service{
    dataServies : CardService[]
}
export interface FeatureCardCommon{
    icon:string,
    title?:string,
    par?:string,
    work?:boolean
}
export interface Work{
    id:number,
    icon:string,
    par:string,
    title:string,
    dataCategory:{
        id:number,
        Category:string,
        nameCategory:string
    }[],
    text:string,
    path:string,
    titleTwo:string,
    buttons:{
        id:number,
        btn:string,
    }[],
    titleTHree:string,
    image:{
        id:number,
        pathUser:string
    }[],
}
export interface CardTest{
    title:string,
    pargraph:string,
    path:string,
    par1:string,
    par2:string,
    id?:number
}[]
export interface  DataTestMonioun{
    dataCardTest:CardTest[]
}
export interface CardFooterData{
    id?:number,
    icon:string,
    title:string,
    par:string,
    href:string
}

export interface InterFaceFooter{
    id:number,
    card: CardFooterData[],
    ul: {
        id:number,
        libasec:string,
        lisecound:{
            id:number,
            liTitle:string
        }[],
    }[],
    partTwoPar:string,
    partTwoTitle:string,
    placeholder:string,
    endFooter1:string,
    endFooter2:string,
    endFooter3:string,


}
export interface PartOneH{
    par:string,
    arrow:string,
    slider : DataSlider[],
    part1:string,
    part2:string,
    par2:string,
    dataCard?:CardData[],
    grid?:boolean,
}
