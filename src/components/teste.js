class CardNews extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(this.build());
      shadow.appendChild(this.styles());
    }
  
    build() {
      const componentRoot = document.createElement("div");
      componentRoot.setAttribute("class", "card");
  
      const inft = document.createElement("div");
      inft.setAttribute("class", "info");
  
      const autor = document.createElement("span");
      autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
  
      const linkTitle = document.createElement("a");
      linkTitle.textContent = this.getAttribute("title");
      linkTitle.href = this.getAttribute("link-url");
  
      const newsContent = document.createElement("p");
      newsContent.textContent = this.getAttribute("contet");
  
      inft.appendChild(autor);
      inft.appendChild(linkTitle);
      inft.appendChild(newsContent);
  
      const noticee = document.createElement("div");
      noticee.setAttribute("class", "notice");
  
      const newsImage = document.createElement("img");
      newsImage.src = this.getAttribute("photo") || "imagess/luffy.jpg";
      newsImage.alt = "foto";
      noticee.appendChild(newsImage);
  
      componentRoot.appendChild(inft);
      componentRoot.appendChild(noticee);
  
      return componentRoot;
    }
  
    styles() {
      const style = document.createElement("style");
      style.textContent = `
      .card {
        
        width: 720px; 
        -webkit-box-shadow: -16px 18px 17px -10px rgba(0,0,0,0.49);
    -moz-box-shadow: -16px 18px 17px -10px rgba(0,0,0,0.49);
    box-shadow: -16px 18px 17px -10px rgba(0,0,0,0.49);
        display: flex;
        flex-direction: row;
        background: rgb(131,58,180);
    background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,0.700717787114846) 67%, rgba(252,176,69,1) 100%);
    justify-content: space-between;
    }
    
    .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
        
    }
    .info > h1{
        margin-top: 15px;
    }
    .notice >img {
        width: 150px; 
        position: relative; 
       top: 0; 
       right: 0%; 
    }
    .info > span {
        font-size: 15px;
        color: aliceblue;
    }
    .info > a {
        font-size: 25px;
        color: rgb(255, 255, 255);
        text-decoration: none;
        font: bold;
    }
    .info > p {
        color: rgb(255, 255, 255);
    }  
      `;
  
      return style;
    }
  }
  
  customElements.define("card-news", CardNews);