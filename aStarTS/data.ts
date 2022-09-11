import { EdgeConstructor, Heuristics, NodeConstructor } from "./graph";

export let primitiveNodes:NodeConstructor[] = [
    {  name:"Salvador" },
    {  name:"BR-324" },
    {  name:"Sapeaçu" },
    {  name:"Feira de Santana" },
    {  name:"Ipirá" },
    {  name:"Ipueira" },
    {  name:"Itaberaba" },
    {  name:"Iaçu" },
    {  name:"Crispim" },
    {  name:"Boa vista do Tupim" },
    {  name: "Lençóis" }
];
export const primitiveEdges:EdgeConstructor[] = [
    {link: ["Salvador","BR-324"],weight:79 },
    {link: ["BR-324","Feira de Santana"], weight:28 },
    {link: ["BR-324","Sapeaçu"],weight:64 },
    {link: ["Sapeaçu","Ipueira"],weight:63 },
    {link: ["Feira de Santana","Ipirá"],weight:81 },
    {link: ["Feira de Santana","Ipueira"],weight:65 },
    {link: ["Ipirá","Itaberaba"],weight:65 },
    {link: ["Ipueira","Itaberaba"],weight:82},
    {link: ["Ipueira","Iaçu"],weight:68 },
    {link: ["Iaçu","Itaberaba"],weight:29 },
    {link: ["Iaçu","Crispim"],weight:62 },
    {link: ["Crispim","Boa vista do Tupim"],weight:55 },
    {link: ["Boa vista do Tupim","Lençóis"],weight:120 },
    {link: ["Itaberaba","Lençóis"],weight:125 },
];
export const h_to_lencois: Heuristics = { 
    ["Salvador"]: 346,
    ["BR-324"]: 327,
    ["Sapeaçu"]: 265,
    ["Feira de Santana"]: 260,
    ["Ipirá"]: 180,
    ["Ipueira"]: 200,
    ["Itaberaba"]: 125,
    ["Iaçu"]: 150,
    ["Crispim"]: 180,
    ["Boa vista do Tupim"]: 120,
    // ["Paralela"]: 24,
}