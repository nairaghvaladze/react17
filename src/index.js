import React from "react";
import  ReactDOM  from "react-dom/client";
class App extends React.Component
{
    render(){
        const products = [
            { title: 'Cabbage', isFruit: false, id: 1 },
            { title: 'Garlic', isFruit: false, id: 2 },
            { title: 'Apple', isFruit: true, id: 3 },
          ];
          
            const fruit = products.map(product =>
              <li
                key={product.id}
                style={{
                  color: product.isFruit ? 'purple' : 'green'
                }}
              >
                {product.title}
              </li>
            );
           
            return (
              <ul>{fruit}</ul>
            );
         
    }
}
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)