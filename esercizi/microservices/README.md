# Tech Talent Factory - DevOps Class 2020
This is the "color space converter" exercise for the students of Tech Talent Factory - DevOps Class 2020.

Into this repository will be saved the exercises done by the students during the class. The final assessment partially
depends on the content and the usage of this repository.

## Utilizzo
Il repository è condiviso fra il docente e gli studenti. Gli studenti hanno completo accesso in lettura e scrittura al
repository. Il progetto prevede la realizzazione di un **convertitore di spazio colore** sfruttando un'architettura a
micro-servizi. Gli studenti si sono autonomamente organizzati in gruppi di 1 o 2 persone e a ogni gruppo è assegnata
l'implementazione di uno dei micro-servizi che compongono l'applicazione. Ogni gruppo ha la responsabilità
d'implementare il micro-servizio a esso assegnato. Sono liberi d'implementarlo nel modo che reputano più opportuno.
Resta inteso che l'implementazione deve rispettare le specifiche funzionali e non, sotto riportate e ogni ulteriore
indicazioni fornite in classe.

Gli studenti sono liberi di modificare qualsiasi parte di codice presente nel repository. Le modifiche al codice che
appartiene a un micro-servizio assegnato a un altro gruppo o parti comuni devono essere approvate tramite _pull-request_
dal gruppo responsabile. Le parti comuni sono di responsabilità del docente. 

## Visione del Prodotto
Creare un convertitore di spazio colore tra i seguenti formati: HEX, RGB, HSL e CMYK. Il prodotto deve poter convertire
un colore dato in uno qualsiasi dei formati gestiti a uno degli altri. Questo prodotto sarà raggiungibile tramite
Internet e utilizzato sia da pagine HTML che da applicazioni web.

## Specifiche
Le specifiche definite per un prodotto sono la parte fondamentale per la buona riuscita dello stesso. Quando si pensa a
un nuovo prodotto, compreso un'applicazione software, è necessario avere chiaro quale problema si vuole risolvere! La
"visione del prodotto" ci permette di definire l'esigenza da soddisfare e inquadrare il problema da risolvere. Una volta
che la "vision" è stata definita e condivisa è necessario entrare maggiormente nel dettaglio e definire una serie di
specifiche.

Per specifiche s'intende una descrizione schematica del software da sviluppare. Normalmente le specifiche includono dei
"casi d'uso" (in inglese "use cases"). Essi descrivono cosa deve accadere dal punto di vista di un osservatore esterno
al software stesso, tipicamente l'utente finale. Nelle metodologie "agili", a differenza di quella "waterfall", non sono
definite nel dettaglio tutte le specifiche e i casi d'uso prima dell'inizio dello sviluppo. Normalmente le specifiche e
i casi d'uso vengono definiti seguendo un processo interattivo di tipo "outside-in".

Applicando un approccio "outside-in" interattivo partiamo definendo le specifiche a livello più esterno (prodotto),
ignorando tutti i dettagli tecnici e mettendoci nei panni dell'utilizzatore finale. In seguito

### Specifiche funzionali per il prodotto
- consultabile tramite Internet
- utilizzabile da pagine HTML
- utilizzabile da applicazioni web

### Specifiche non funzionali per il prodotto
- ogni funzionalità deve poter essere rilasciata in modo indipendente dalle altre
- un bug o difetto in una funzionalità non deve impattare sul funzionamento delle altre

### Scelte dovute alle specifiche non funzionali
Le specifiche funzionali ci forniscono informazioni chiare e precise e da quelle decidiamo d'implementare una API HTTP.
Le specifiche non funzionali, invece, richiedono un ragionamento più articolato, perché ci danno indicazioni che
dovrebbero farci riflettere sul tipo di architettura da adottare. In altre parole, ci viene richiesto di creare
funzionalità indipendenti tra loro e che l'applicazione sia resiliente. La prima è una caratteristica tipica delle
architetture a micro-servizi e di difficile (o quasi impossibile) implementazione utilizzando altre architetture. La
seconda caratteristica, invece, è possibile soddisfarla con differenti architetture, ma usando un'architettura a
micro-servizi ha costo implementativo molto basso, tendente a zero!

Visto le specifiche di prodotto e le considerazioni fatto sopra, si decide di realizzare un API HTTP con architettura a
micro-servizi in cui ogni micro-servizio corrisponde a una singola funzionalità richiesta.

Una volta effettuate queste scelte si ragiona a livello più interno, cioè si inizia a pensare alle specifiche più vicine
all'implementazione del software.

### Specifiche funzionali per il singolo micro-servizio
- risponde alle chiamate HTTP:
  - metodo `GET`
  - url `/`
  - esempio: `http://<host>:<porta/<funzionalità>?color=<colore>`
- colore da convertire:
  - ricevuto come _query_param_:
  - il nome del _query_param_ è `color`
  - in formato JSON
- valore di ritorno:
  - nel body
  - in formato JSON
- formati JSON dei colori:
  - sono definiti in `commons/model/Colors.ts`
  - dati di esempio in `commons/test-data/colors.ts`

### Specifiche non funzionali per il singolo micro-servizio
- utilizzo dei modelli dati presenti in `commons/model`
- separazione della logica di dominio da quella di presentazione:
  - creare un `service` che effettua la conversione
  - il `service` può delegare la conversione a delle librerie esterne e.g. _color-converter_
  - creare un `controller` che espone l'end-point HTTP
  - il `controller` interagisce con il `service` solo tramite i modelli dati presenti in `commons/model`
- devono essere presenti le seguenti tipologie di test:
  - _lint_ (analisi statica del codice)
  - _unit_ per il service
  - _component_ tramite chiamate HTTP

## Iniziare
La struttura del progetto, solo file degni di nota
```
.
+-- commons                                         # file comnuni a tutti i microservizi
|   |   +-- src
|   |   |   +-- model                               # contiene le interface che rappresentano i formati dei colori
|   |   |   +-- test-data                           # contiene i dati da utilizzare nei test
|   +-- docker-compose.yml                          # definizione di docker-compose dell'applicazione
+-- microservice-template
|   +-- src
|   |   +-- controller
|   |   |   +-- HttpController.componentTest.ts     # test del micro-servizio attraverso chiamate HTTP
|   |   |   +-- HttpController.ts                   # logica relativa alla gestione delle chiamate HTTP
|   |   +-- service
|   |   |   +-- Service.test.ts                     # test servizio di conversione
|   |   |   +-- Service.ts                          # logica per la conversione dei colori
|   |   +-- HttpServer.ts                           # file principale del micro-servizio da eseguire con node.js
|   +-- .dockerignore
|   +-- Dockerfile
|   +-- package.json
+-- README.md
+-- STUDENTS.md
```

Cose da fare:
- copiare il template e assegnargli il nome della funzionalità/micro-servizio da implementare
- creare una nuova branch
- aggiornare il file package.json
- installare le dipendenze usando il comando `npm install`
- commit iniziale del micro-servizio
- implementare il servizio:
  - scrivere il test `<microservice>/src/service/Service.test.ts`
  - verificare che fallisca per il motivo giusto `npm run-script test:unit`
  - implementare il servizio
  - commit del servizio funzionante
- implementare il controller:
  - scrivere il test `<microservice>/src/controller/HttpController.componentTest.ts`
  - avviare l'applicazione con il comando `npm run-script serve`
  - sistemare gli errori di compilazione (dovrebbero essere solo in `<microservice>/src/controller/HttpController.ts`)
  - verificare che fallisca per il motivo giusto`npm run-script test:component`
  - implementare il controller
  - commit del controller funzionante
- creare il container:
  - scrivere il `Dockerfile`
  - eventualmente scrivere il `.dockerignore`
  - creare il pacchetto distribuibile dell'applicazione `node run-script dist`
  - fare il build dell'immagine docker
  - eseguire il container e mappare la porta `-p 3000:3000`
  - verificare il funzionamento tramite il component test `npm run-script test:component`
  - fermare il container
  - commit del `Dockerfile` funzionante
- configurare il servizio in compose
  - aggiungere il servizio a `commons/docker-compose.yml`
  - taggare l'ultima immagine funzionante come `latest`
  - avviare il compose e verificare manualmente il funzionamento

## License
This project is licensed under the GPL-v3 License - see the LICENSE.md file for details
