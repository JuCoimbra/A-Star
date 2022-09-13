from operator import itemgetter as itemgetter
from weakref import finalize

percurso = {"Salvador" : {"TempoL":346, "Destinos":["BR-324"], "TempoD":[79], "f": 0, "Previous":"null"},
            "BR-324" : {"TempoL":327, "Destinos":["Feira de Santana", "Sapeaçu"], "TempoD":[28, 64], "f": 0, "Previous":"null"},
            "Sapeaçu": {"TempoL":265, "Destinos":["Ipueira"], "TempoD":[63], "f": 0, "Previous":"null"},
            "Feira de Santana": {"TempoL":260, "Destinos":["Ipirá", "Ipueira"], "TempoD":[81, 65], "f": 0, "Previous":"null"},
            "Ipirá": {"TempoL":180, "Destinos":["Itaberaba"], "TempoD":[65], "f": 0, "Previous":"null"},
            "Ipueira": {"TempoL":200, "Destinos":["Itaberaba", "Iaçu"], "TempoD":[82, 68], "f": 0, "Previous":"null"},
            "Iaçu": {"TempoL":125, "Destinos":["Itaberaba", "Crispim"], "TempoD":[29, 62], "f": 0, "Previous":"null"},
            "Crispim":{"TempoL":150, "Destinos":["Boa Vista do Tupim"], "TempoD":[55], "f": 0, "Previous":"null"},
            "Boa Vista do Tupim":{"TempoL":180, "Destinos":["Lençois"], "TempoD":[120], "f": 0, "Previous":"null"},
            "Itaberaba":{"TempoL":120, "Destinos":["Lençois"], "TempoD":[125], "f": 0, "Previous":"null"},
            "Lençois":{"TempoL":0, "Destinos":[], "TempoD":[], "f": 0, "Previous":"null"}}

#Calcula o valor f (TempoL + Heuristica) para o nó passado
def antPercu(vertex, antVertex):

    if vertex != 'Salvador':
        indexAntn = percurso[antVertex]["Destinos"].index(vertex)
        f = percurso[antVertex]["TempoD"][indexAntn] + antPercu(antVertex, percurso[antVertex]["Previous"])
        return f
    else:
        return percurso[vertex]["TempoD"][0]

#Adiciona a lista acessar(lista "open" no slide) os nós vizinhos ao atual, sempre atualizando o estado f deles.
def addAcessar(atuVertex, acessar):

    for vertex in percurso[atuVertex]["Destinos"]:

        f = antPercu(vertex, atuVertex)

        if (percurso[vertex]["f"] == 0):
            percurso[vertex]["f"] = f
            percurso[vertex]["Previous"] = atuVertex
            acessar.append((vertex, percurso[vertex]["f"]))
            
        elif percurso[vertex]["f"] > f:
            antF = percurso[vertex]["f"]
            percurso[vertex]["f"] = f
            percurso[vertex]["Previous"] = atuVertex
            acessar.append((vertex, percurso[vertex]["f"]))
            
            if (vertex, antF) in acessar:
                acessar.remove((vertex, antF))

    return sorted(acessar, key=lambda i: i[1])

#Monta o caminho da origem ao destino
def way(vertex, finalWay):

    if vertex != "Salvador":
        finalWay.append((vertex, percurso[vertex]["f"]))
        return way(percurso[vertex]["Previous"], finalWay)

    else:
        finalWay.append(("Salvador", percurso["Salvador"]["f"]))
        finalWay.reverse()
        return finalWay


def aStar(origin, destino):
    acessados = []
    finalWay = []
    
    percurso[origin]["f"] = antPercu(origin, "null")
    percurso[origin]["Previous"] = "null"

    acessar = [(origin, percurso[origin]['f'])]

    while acessar:
        
        if acessar[0][0] != destino:

            acessados.append((acessar[0][0], acessar[0][1]))
            acessar = addAcessar(acessar[0][0], acessar)
            acessar.remove(acessados[len(acessados)-1])

        else:

            acessados.append((acessar[0][0], acessar[0][1]))
            acessar.remove(acessados[len(acessados)-1])

    finalWay = way(destino, finalWay)
    print("O melhor caminho é:")
    print(finalWay)

if __name__ == '__main__':
    aStar("Salvador", "Lençois")


    


