import React from "react";
import ReactDOM  from "react-dom/client";

// Create a nested header element using React.createElement (h1,h2,h3 inside a div with class title)
/*const header = React.createElement(
    "div",
    {
        id: "title",
        className: 'title'
    },
    [React.createElement(
        "h1",
        {
            id: 'h1'
        },
        "h1 tag"
    ), React.createElement(
        "h2",
        {
            id: 'h2'
        },
        "h2 tag"
    ),React.createElement(
        "h3",
        {
            id: 'h3'
        },
        "h3 tag"
    )]
)*/

// create same Elememt using JSX
/*const header = (
  <div className="title">
    <h1 id="h1">Welcome to create element using JSX</h1>
    <h2 id="h2">render many elements inside</h2>
    <h3 id="h3">inside div</h3>
  </div>
)*/

/*const TitleComponent = () => {
  return <h1>Welcome to function component</h1>
}

const HeaderComponent = () => {
  return (
    <div className="title">
        <TitleComponent />
        <h2>header component</h2>
        <h3>header with JSX</h3>
    </div>
  )
}*/

const HeaderComponent = () => {
  return(
    <div>
        <div className="heading">
          <img src="https://img.icons8.com/clouds/150/null/react.png" alt="react-logo" className="logo"/>
          
          <form className="form">
            <input type="search" placeholder="Search..." className="input-search" />
            <img src="https://img.icons8.com/ios-glyphs/60/null/search--v1.png" className="search-icon"/>
          </form>
          
          <img src="https://img.icons8.com/plasticine/100/null/name.png" alt="user-icon" width="80" height="80" className="user-icon"/>
        </div>

        <div className="form-mobile">
          <input type="search" placeholder="Search..." className="input-search" />
          <img src="https://img.icons8.com/ios-glyphs/60/null/search--v1.png" className="search-icon"/>
        </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// render react element
// root.render(header)

root.render(<HeaderComponent />)
