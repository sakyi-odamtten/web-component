//class for the body
import style from './styles.js';
class Customdiv extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: "open" });
        
        const contain = document.createElement('div');
        contain.setAttribute('class', 'container');
        
        //text in the div
        const fp = document.createElement('p');
        fp.innerHTML= "Back to lists";
        const sp = document.createElement('p');
        sp.innerHTML = "TOTAL";

        //for the progress bar
        const pb = document.createElement('div');
        pb.setAttribute('class', 'progress');
        const sub = document.createElement('div');
        sub.setAttribute('class', 'fill');
        const tp = document.createElement('p');
        tp.setAttribute('class', 'text1');
        tp.innerHTML = "33% complete";

        //the list
        const momlist = document.createElement('ul');
        momlist.setAttribute('class', 'list');
        const task =['Meditation', 'Pick Up Anna', 'set up meeting with Jay', 'finish Daily UI', 
                      'Second edit on article','Email Chris'];
        for (let i = 1; i <= 6; i++) {
            const li = document.createElement('li');
            li.innerHTML = task[i];
            momlist.appendChild(li);
        }
        //the appending
        shadow.appendChild(contain);
        contain.appendChild(fp);
        contain.appendChild(sp);
        contain.appendChild(pb);
        pb.appendChild(sub);
        contain.appendChild(tp);
        contain.appendChild(momlist);
        shadow.adoptedStyleSheets = [style];
    }
}

customElements.define('custom-div', Customdiv);