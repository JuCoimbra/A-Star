import { Graph, GraphEdge, GraphNode,EdgeConstructor,NodeConstructor,Heuristics } from './graph';
import {h_to_lencois, primitiveEdges, primitiveNodes} from './data';

const graphNodes = primitiveNodes.map((value,index) => {
    return new GraphNode({...value})
});

const graphEdges = primitiveEdges.map((value) => {
    return new GraphEdge({...value });
});

const graph = Graph.getInstance();

graphNodes.forEach((node) => {
    graph.addNode( node );
});

graphEdges.forEach(( edge ) => {
    graph.addEdge( edge );
});

// graph.printGraph()


graph.runAstar('Salvador','Lençóis');

