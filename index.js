//class for the body
import style from './styles.js';

//progress div
class Progressdiv extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: "open" });

        const pb = document.createElement('div');
        pb.setAttribute('class', 'progress');
        const sub = document.createElement('div');
        sub.setAttribute('class', 'fill');
        const tp = document.createElement('p');
        tp.setAttribute('class', 'text1');
        tp.innerHTML = "33% complete";

        //appending
        shadow.appendChild(pb);
        pb.appendChild(sub);
        shadow.appendChild(tp);
        shadow.adoptedStyleSheets = [style];
    }
}

//the custom ul
class Customul extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: "open" });

        const momlist = document.createElement('ul');
        momlist.setAttribute('class', 'list');
        const task =['Meditation', 'Pick Up Anna', 'set up meeting with Jay', 'finish Daily UI', 
                      'Second edit on article','Email Chris'];
        for (let i = 1; i <= 6; i++) {
            const li = document.createElement('li');
            li.setAttribute('class', 'completed');
            li.innerHTML = task[i];
            momlist.appendChild(li);
        }

        //appending
        shadow.appendChild(momlist);
        shadow.adoptedStyleSheets = [style];
    }
}

//coustom horizontal line
class Customline extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const shadow = this.attachShadow({ mode: "open" });

        const line = document.createElement('div');
        line.setAttribute('class', 'line');
        
        shadow.appendChild(line);
        shadow.adoptedStyleSheets = [style];
    }
}

//display div in four grid
class Customdisplay extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const shadow = this.attachShadow({ mode: "open" });

        const dp = document.createElement('div');
        dp.setAttribute('class', 'grid1');
        const done = document.createElement('div');
        done.setAttribute('class', 'div1');
        done.innerHTML = "<p>Daily</p>";
        const dtwo = document.createElement('div');
        dtwo.setAttribute('class', 'div2');
        dtwo.innerHTML = 'Weekly';
        const dthree = document.createElement('div');
        dthree.setAttribute('class', 'div3');
        dthree.innerHTML =  'Monthly';
        const dfour = document.createElement('div');
        dfour.setAttribute('class', 'div4');
        dfour.innerHTML = 'Occasional';
        
        shadow.appendChild(dp);
        dp.appendChild(done);
        dp.appendChild(dtwo);
        dp.appendChild(dthree);
        dp.appendChild(dfour);
        shadow.adoptedStyleSheets = [style];
    }
}


customElements.define('progress-div', Progressdiv);
customElements.define('custom-ul', Customul);
customElements.define('custom-line', Customline);
customElements.define('custom-display', Customdisplay);