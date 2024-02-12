const style = new CSSStyleSheet();
style.replaceSync(`
    .container {
        background: white;
        margin: 0px 180px 0px 180px;
        width: 350px;
        height: 600px;
        padding: 20px;
    }

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
    }
    .list {
        list-style-type: circle;
    }
    .list li::maker{
        font-size: 100px;
        font-weight: bolder;
    }
`);

export default  style;