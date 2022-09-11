percurso = {"Salvador" : {"TempoL":346, "Destinos":["BR-324"], "TempoD":[79], "f": 0, "Previous":"null"},
            "BR-324" : {"TempoL":327, "Destinos":["Feira de Santana", "Sapeaçu"], "TempoD":[28, 64], "f": 0, "Previous":"null"},
            "Sapeaçu": {"TempoL":265, "Destinos":["Ipueira"], "TempoD":[63], "f": 0, "Previous":"null"},
            "Feira de Santana": {"TempoL":260, "Destinos":["Ipirá", "Ipueira"], "TempoD":[81, 65], "f": 0, "Previous":"null"},
            "Ipirá": {"TempoL":180, "Destinos":["Itaberaba"], "TempoD":[65], "f": 0, "Previous":"null"},
            "Ipueira": {"TempoL":200, "Destinos":["Itaberaba", "Iaçu"], "TempoD":[82, 68], "f": 0, "Previous":"null"},
            "Iaçu": {"TempoL":125, "Destinos":["Itaberaba", "Crispim"], "TempoD":[29, 62], "f": 0, "Previous":"null"},
            "Crispim":{"TempoL":150, "Destinos":["Boa Vista do Tupim"], "TempoD":[55], "f": 0, "Previous":"null"},
            "Boa Vista do Tupim":{"TempoL":180, "Destinos":["Lençois"], "TempoD":[120], "f": 0, "Previous":"null"},
            "Itaberaba":{"TempoL":120, "Destinos":["Lençois"], "TempoD":[125], "f": 0, "Previous":"null"}}

#Calcula o valor f (TempoL + Heuristica) para o nó passado
def antPercu(vertex, antVertex):
    if vertex !=  'Salvador':
        indexAntn = percurso[vertex]["Destinos"].index(antVertex)
        f = percurso[vertex]["TempoD"][indexAntn] + antPercu(percurso[vertex]["Previous"], vertex)
        return f
    else:
        return percurso[vertex]["TempoL"]


#Adiciona a lista acessar(lista "open" no slide) os nós vizinhos ao atual, sempre atualizando o estado f deles.
def addAcessar(atuVertex, acessar):
    for vertex in percurso[atuVertex]["Destinos"]:
        f = antPercu(vertex, percurso[vertex]["Previous"])
        if (percurso[vertex]["f"] == 0) or (percurso[vertex]["f"] > f):
            percurso[vertex]["f"] = f
        
        acessar = acessar.append(vertex)
        
    return acessar

def aStar(origin, destino):
    acessados = []
    acessar = [origin]

    

        


    


