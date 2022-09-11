import { h_to_lencois } from './data'

export interface Heuristics {
    [nodeName:string]: number;
}

export interface GraphNodesObj {
    [key:string]: GraphNode;
}
export type GraphAdjencyListObj = { node:GraphNode, weight:number}
export type NodeConstructor = { name: string };
export type twoNodesParams = [GraphNode, GraphNode];
export type EdgeConstructor = { link: [string,string], weight:number};

export class GraphNode {
    name: string;
    heuristc: number;
    fCost:number;

    constructor({name,heuristc = 0}) {
        this.name = name;
        this.heuristc = heuristc;
        this.fCost = heuristc;
    }
    
    setFcost(f:number){
        this.fCost = f;
    }

}

export class GraphEdge {
    link: [string,string];
    weight: number;

    constructor({ link, weight }:EdgeConstructor) {
       this.link = link;
       this.weight = weight;
    }
    
}

export class Graph {
    static #instance: Graph;
    #adjencyList: Map< string, GraphAdjencyListObj[] >
    #nodes: GraphNodesObj;
    #edges: GraphEdge[];

    private constructor() {
        this.#edges = [];
        this.#nodes = {};
        this.#adjencyList = new Map();
    }

    private setHeuristics = (heuristics: Heuristics) => {
        for(const tempHeuristic in heuristics){
            const node = this.#nodes[tempHeuristic] ?? undefined;
            
            if(!node){
                console.log(`Trying to set a heuristic on a non-existing node (${ tempHeuristic }), continuing to next heurisctic...`); 
                continue;
            }

            this.#nodes[tempHeuristic].heuristc = heuristics[tempHeuristic];
        }

    }
    private setFCosts = () => {
        for(const node of this.#adjencyList){
            const [key,nodeValue] = node;




        }
    }
    
    // Singleton 
    public static getInstance = () => {
        if(!this.#instance) {
            return new Graph();
        }
        
        throw new Error(`Already a Graph Instance`);
    }
    public addNode(node: GraphNode) {
        this.#nodes[node.name] = node;
        this.#adjencyList.set( this.#nodes[node.name].name, [] );
    }
    public addEdge(graphEdge: GraphEdge) {
        const { link,weight } = graphEdge;
        const [ node1, node2 ] = link;

        const graphNode1 = this.#nodes[ node1 ] ?? undefined;
        const graphNode2 = this.#nodes[ node2 ] ?? undefined;
        
        if(!graphNode1) throw new Error(`Node ${ node1 } not found!`);
        if(!graphNode2) throw new Error(`Node ${ node2 } not found!`);

        // const from = this.#adjencyList.get(graphNode1.name);
        // const to = this.#adjencyList.get(graphNode2.name);

        // if(!from) throw new Error(`Not founding node ${node1} in Adjency List`);
        // if(!to) throw new Error(`Not founding node ${node2} in Adjency List`)

        this.#adjencyList.get(graphNode1.name)?.push( { node:graphNode2, weight } );
        this.#adjencyList.get(graphNode2.name)?.push( { node:graphNode1, weight } );
        this.#edges.push( graphEdge );

        return true;
    }

    public printGraph (){
        return console.log(this.#adjencyList);
    }
    public runAstar (startNodeName:string,finishNodeName:string,heuristics = h_to_lencois) {
        const startNode = this.#nodes[startNodeName] ?? undefined;
        const finishNode = this.#nodes[finishNodeName] ?? undefined;

        if(!startNode) throw new Error(`No Node with name ${startNodeName}`);
        if(!finishNode) throw new Error(`No Node with name ${finishNodeName}`);

        this.setHeuristics( heuristics );
        const openQueue = [ startNode ];
        const closedQueue = [];

        while(openQueue.length > 0) {
            openQueue.sort((nodeA,nodeB) => nodeA.fCost - nodeB.fCost); 
            const path = openQueue.shift();

            const neighbors = this.#adjencyList
            
            

        }

    }
}
