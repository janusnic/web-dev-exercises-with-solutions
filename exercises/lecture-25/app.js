
let ul = document.createElement('ul');
document.body.append(ul);

const list = ['html', 'css', 'javascript', 'react.js'];

for (let i=0; i < list.length; i++) {
    let li = document.createElement('li');
    li.textContent = list[i];
    ul.append(li);
}


const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];

let ol = document.createElement('ol');
document.body.append(ol);

listWithHref.forEach(item => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    
    for (const [key, value] of Object.entries(item)) {
        a.textContent = key;    
        a.setAttribute('href', value);    
        li.append(a);
    }
    ol.append(li); 
});

const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]


let table = document.createElement('table');
document.body.append(table);


let tr = document.createElement('tr');
let thead = document.createElement('thead');    

for (const key of Object.keys(students[0])) {
    let th = document.createElement('th');
    th.textContent = key;    
    tr.append(th);
}
thead.append(tr); 
table.append(thead); 


students.forEach(item => {
    let tr = document.createElement('tr');
    
    for (const value of Object.values(item)) {
        let td = document.createElement('td');
        td.textContent = value;    
        
        tr.append(td);
    }
    table.append(tr); 
});


