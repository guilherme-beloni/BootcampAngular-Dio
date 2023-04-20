class Cardnews extends HTMLElement {
    constructor() {
        super();


        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }
    


    build() {
        const componentRoot = document.createElement("div"); //"card"
        componentRoot.setAttribute("class", "card"); // setando o atributo da classe do card


        const cardLeft = document.createElement("div");      //cardLeft
        cardLeft.setAttribute("class", "card_left");

        
        const cardRight = document.createElement("div");     //cardRight
        cardRight.setAttribute("class", "card_right");


    
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");



        const linkTitle = document.createElement("h1"); // troca <a>
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")



        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")


        const imageCard = document.createElement("img");
        imageCard.setAttribute("src", "./assets/images.jpg") //DEIXANDO FOTO DEFAULT || ou imagCard.src = 'caminho'
        imageCard.alt = "Foto Dart Vader"



        /// É importente colocar na Ordem!!!!!!!!

        componentRoot.appendChild(cardLeft);  // concatenando os componentes child no "card" principal
        componentRoot.appendChild(cardRight); // concatenando os componentes child no "card" principal
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle); // concatenando os componentes child no "card-left"
        cardLeft.appendChild(newsContent);
        cardRight.appendChild(imageCard); // concatenando os componentes child no "
        return componentRoot;
    }

        
    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            
            width: 100%;
            box-shadow: 16px 13px 13px -6px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        
        .card_left, .card_right {
        
            padding-left: 10px;
        }
        
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .card_left > h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card_left > p {
            color: gray;
        
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        
        `


        return style;

    }
}


customElements.define("card-news", Cardnews);


