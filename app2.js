const papa = React.createElement(

    "div",

    {
        id: "papa"
    },

    [ 
        React.createElement(

            "div",

            {
                id: "beta1"
            },

            [
                React.createElement(

                    "h1",

                    {
                        id: "beta1khopdi-1",
                    },

                    "I'm Beta1's khopdi-1"
                ),

                React.createElement(

                    "h2",

                    {
                        id: "beta1khopdi-2"
                    },

                    "I'm Beta1's khopdi-2"
                )
            ]
        ),

        React.createElement(

            "div",

            {
                id: "beta2"
            },

            [
                React.createElement(

                    "h1",

                    {
                        id: "beta2khopdi-1",
                    },

                    "I'm Beta2's khopdi-1"
                ),

                React.createElement(

                    "h2",

                    {
                        id: "beta2khopdi-2"
                    },

                    "I'm Beta2's khopdi-2"
                )
            ]
        )
    ]
);

console.log(papa);

const rootlet = ReactDOM.createRoot(

    document.getElementById("jadd")
);

rootlet.render(papa);