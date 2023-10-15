const khopdi = React.createElement(

    "h1", // Type of tag

    {

        id: "khopdi1",

    },   // Javascript object for defining attributes to tag

    "Written using React!" // child or children
);

console.log(khopdi);

const rootlet = ReactDOM.createRoot(

    document.getElementById("jadd")
);

rootlet.render(khopdi);