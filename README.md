
# KASK1 Portfolio

Benvenuti nel portfolio di **KASK1**, un progetto React che mette in mostra competenze, esperienza e progetti personali attraverso un design moderno e interattivo. Il sito include sezioni come presentazione, abilità, contatti e animazioni fluide per offrire un’esperienza utente coinvolgente.

## Sommario

- [Demo](#demo)
- [Funzionalità](#funzionalità)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Installazione](#installazione)
- [Struttura del Progetto](#struttura-del-progetto)
- [Contribuire](#contribuire)
- [Licenza](#licenza)

---

## Demo

Visualizza il progetto live [qui](https://example.com).  

![Screenshot](./path/to/screenshot.png)

## Funzionalità

- **Design moderno** e completamente responsivo
- Sezioni principali:
  - **Home**: introduzione visiva con video di sfondo e collegamento a LinkedIn
  - **About Me**: informazioni personali con un pulsante per il download del curriculum
  - **Skills**: abilità tecniche con progress bar animate per ogni linguaggio e tecnologia
  - **Contact Me**: collegamento diretto tramite email a `info@kask1.it`
- **Animazioni GSAP** per una UX interattiva
- **Integrazione con Tailwind CSS** per uno styling veloce e responsivo

## Tecnologie Utilizzate

- [React.js](https://reactjs.org/) - Libreria JavaScript per costruire l’interfaccia utente
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS per uno styling personalizzato e responsivo
- [GSAP](https://greensock.com/gsap/) - Libreria di animazioni per transizioni fluide
- [Font Awesome](https://fontawesome.com/) - Icone vettoriali per i social e le tecnologie

## Installazione

Per eseguire il progetto in locale, segui questi passaggi:

1. **Clona il repository**:

   ```bash
   git clone https://github.com/username/portfolio-react.git
   ```

2. **Accedi alla directory del progetto**:

   ```bash
   cd portfolio-react
   ```

3. **Installa le dipendenze**:

   ```bash
   npm install
   ```

4. **Avvia il server di sviluppo**:

   ```bash
   npm start
   ```

   L’app sarà accessibile su `http://localhost:3000`.

## Struttura del Progetto

Il progetto è organizzato in componenti per una gestione modulare:

```
src
│
├── App.js                # Componente principale dell'app
├── index.js              # Punto di ingresso dell’app
├── styles
│   └── style.css         # File di stile globale
└── components            # Componenti riutilizzabili
    ├── Navbar.js         # Navbar con pulsante hamburger
    ├── Hero.js           # Sezione iniziale con video di sfondo
    ├── About.js          # Sezione descrittiva di presentazione
    ├── Skills.js         # Sezione abilità tecniche con barre di progresso
    ├── ContactMe.js      # Sezione di contatto con link email
    └── Footer.js         # Footer con link ai social media
```

## Contribuire

Contributi, issue e suggerimenti sono benvenuti! Sentiti libero di fare una **pull request** o aprire un **issue**.

1. **Fai il fork** del progetto
2. **Crea un branch** per la tua feature: `git checkout -b feature/nome-feature`
3. **Fai il commit delle modifiche**: `git commit -m 'Descrizione della modifica'`
4. **Push del branch**: `git push origin feature/nome-feature`
5. **Apri una pull request**

## Licenza

Distribuito sotto la licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

---

Questo `README.md` fornisce una panoramica chiara e organizzata del progetto, con tutte le informazioni necessarie per installarlo e contribuire.
