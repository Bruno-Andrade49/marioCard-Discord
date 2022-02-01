"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./config.json
const config_namespaceObject = JSON.parse('{"u2":"Discord - Alura Matrix","rS":{"O":{"T":{"aD":"#57AE5B","pl":"#3F9142","RW":"#2F8132"},"O":{"Ug":"#CBD2D9","wl":"#9AA5B1","aD":"#52667A","qy":"#212931","YY":"#181F25","H":"#101418","jh":"#080A0C","M6":"#FFFFFF"}}}}');
;// CONCATENATED MODULE: external "@skynexui/components"
const components_namespaceObject = require("@skynexui/components");
;// CONCATENATED MODULE: ./pages/index.js



// JavaScript

function GlobalStyle() {
    return jsx_runtime_namespaceObject.jsx((style_default()), {
        id: "ea7e8895ba25d0c2",
        children: "*{margin:0;\npadding:0;\nbox-sizing:border-box;\nlist-style:none}\nbody{font-family:'Open Sans', sans-serif}\nhtml, body, #__next{min-height:100vh;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex:1;\n-ms-flex:1;\nflex:1}\n#__next{-webkit-flex:1;\n-ms-flex:1;\nflex:1}\n#__next>*{-webkit-flex:1;\n-ms-flex:1;\nflex:1}"
    });
}
function Title(props) {
    console.log(props.children);
    const Tag = props.tag || "h1";
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(Tag, {
                className: style_default().dynamic([
                    [
                        "c799cd66920e9864",
                        [
                            Tag,
                            config_namespaceObject.rS.O.O.aD
                        ]
                    ]
                ]),
                children: [
                    " ",
                    props.children,
                    " "
                ]
            }),
            jsx_runtime_namespaceObject.jsx((style_default()), {
                id: "c799cd66920e9864",
                dynamic: [
                    Tag,
                    config_namespaceObject.rS.O.O.aD
                ],
                children: `${Tag}.__jsx-style-dynamic-selector{color:${config_namespaceObject.rS.O.O.aD};
font-size:24px;
font=weight: 600}`
            })
        ]
    }));
}
/*function HomePage() {
    return (
        //JSX
        <div>
            <NewName>Boas vindas de volta!</NewName>
            <h2> Discord - MatrixPosts</h2>
            <Button
                iconName="github"
                label="Button Component"
            />
            <Box
                as=""
                styleSheet={{
                    backgroundColor: {
                        lg: 'purple',
                        md: 'green',
                        sm: 'blue',
                        xl: 'black',
                        xs: 'red'
                    },
                    color: 'white',
                    margin: '16px',
                    padding: '16px'
                }}
            >
                Box Component
            </Box>

        </div>


    )
}
*/ function PaginaInicial() {
    const username = 'Bruno-Andrade49';
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(GlobalStyle, {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_namespaceObject.Box, {
                styleSheet: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: config_namespaceObject.rS.O.O.aD,
                    backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/super-mario-bros-level-ending.jpg)',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundBlendMode: 'multiply'
                },
                /*#__PURE__*/ children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(components_namespaceObject.Box, {
                    styleSheet: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: {
                            xs: "column",
                            sm: "row"
                        },
                        width: "100%",
                        maxWidth: "700px",
                        borderRadius: "5px",
                        paddin: "32px",
                        margin: "16px",
                        boxShadow: "0 2px 10px 0 rgb(0 0 0  / 20%)",
                        backgroundColor: config_namespaceObject.rS.O.O.qy
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(components_namespaceObject.Box, {
                            as: "form",
                            styleSheet: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: {
                                    xs: '100%',
                                    sm: '50%'
                                },
                                textAlign: 'center',
                                marginBottom: '32px'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Title, {
                                    tag: "h2",
                                    children: "Bem vindos de volta, ao meu Discord!"
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_namespaceObject.Text, {
                                    variant: "body3",
                                    styleSheet: {
                                        marginBottom: '32px',
                                        color: config_namespaceObject.rS.O.O.wl
                                    },
                                    children: config_namespaceObject.u2
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_namespaceObject.TextField, {
                                    fullWidth: true,
                                    textFieldColors: {
                                        neutral: {
                                            textColor: config_namespaceObject.rS.O.O.Ug,
                                            mainColor: config_namespaceObject.rS.O.O.H,
                                            mainColorHighlight: config_namespaceObject.rS.O.T.pl,
                                            backgroundColor: config_namespaceObject.rS.O.O.YY
                                        }
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_namespaceObject.Button, {
                                    type: "submit",
                                    label: "Entrar",
                                    fullWidth: true,
                                    buttonColors: {
                                        contrastColor: config_namespaceObject.rS.O.O.M6,
                                        mainColor: config_namespaceObject.rS.O.T.aD,
                                        mainColorLight: config_namespaceObject.rS.O.T.aD,
                                        mainColorStrong: config_namespaceObject.rS.O.T.RW
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(components_namespaceObject.Box, {
                            styleSheet: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                maxWidth: '200px',
                                padding: '16px',
                                backgroundColor: config_namespaceObject.rS.O.O.YY,
                                border: '1px solid',
                                borderColor: config_namespaceObject.rS.O.O.jh,
                                borderRadius: '10px',
                                flex: 1,
                                minHeight: '240px',
                                position: 'relative',
                                left: '60px'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_namespaceObject.Image, {
                                    styleSheet: {
                                        borderRadius: '50%',
                                        marginBottom: '16px'
                                    },
                                    src: `https://github.com/${username}.png`
                                }),
                                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_namespaceObject.Text, {
                                    variant: "body4",
                                    styleSheet: {
                                        color: config_namespaceObject.rS.O.O.Ug,
                                        backgroundColor: config_namespaceObject.rS.O.O.H,
                                        padding: '3px 10px',
                                        borderRadius: '1000px'
                                    },
                                    children: 'Bruno Andrade'
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
}
/* harmony default export */ const pages = (PaginaInicial);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(610));
module.exports = __webpack_exports__;

})();