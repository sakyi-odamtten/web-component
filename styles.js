const style = new CSSStyleSheet();
style.replaceSync (`
    

    .progress {
        width: 300px; 
        height: 17px; 
        border: 1px solid #ccc; 
        border-radius: 15px; 
        overflow: hidden;
        
    }
    .fill{
        height: 100%;
        width: 100px; 
        background-color: rgb(145, 145, 212);
        border-radius: 15px;
    }
    .text1 {
        text-align: center;
        color:  rgb(183, 183, 235); 
    }
    .list {
        list-style-type: none;
        color: rgb(121, 113, 113);
    }
    .list li {
        margin-left: 0%;
        padding-left: 1px;
        margin-bottom: 23px;
        display: flex; 
        align-items: flex-start; 
    }
    .list li::before{
        content: '';
        display: inline-block;
        width: 20px; 
        height: 20px; 
        border-radius: 50%; 
        border: 2px solid rgb(151, 214, 151); 
        margin-right: 10px; 
    }
    /*.list li.completed::before {
        background-color: green; 
        background-image: linear-gradient(to bottom, transparent 50%, white 50%); 
        background-size: 2px 8px; 
        background-position: center; 
    }*/
    .line{
        border-bottom: 1px solid  #ccc ;
    }
    .grid1{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 25px;
    }
    .div1{
        border-radius: 15px;
        background-color: rgb(236, 236, 89);
        color: rgb(121, 113, 113);
        width: 110px;
        height: 40px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .div2{
        border-radius: 15px;
        background-color: rgb(151, 214, 151);
        color: rgb(121, 113, 113);
        width: 110px;
        height: 40px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .div3{
        border-radius: 15px;
        background-color: rgb(252, 198, 207);
        color: rgb(121, 113, 113);
        width: 110px;
        height: 40px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .div4{
        border-radius: 15px;
        background-color: rgb(136, 136, 201);
        color: rgb(121, 113, 113);
        width: 110px;
        height: 40px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`);

export default  style;