const root = ReactDOM.createRoot(document.getElementById('root'));
    const heading = React.createElement('h1', {id:"heading"}, 'Hello World from React');
//     root.render(heading);


const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        React.createElement('h1', {}, "hello from h1")
    )
);
console.log(parent);
root.render(parent)