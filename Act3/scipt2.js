document.addEventListener('DOMContentLoaded', function() {
    //Datos JSON integrados directamente en el archivo JS
    const jsonData = {
        "items": [
            {"name": "Andrea", "age": 30},
            {"name": "Jorge", "age": 25},
            {"name": "Luis", "age": 28},
            {"name": "Sofía", "age": 22},
            {"name": "Marta", "age": 26},
            {"name": "Carlos", "age": 32},
            {"name": "Lucía", "age": 24},
            {"name": "Manuel", "age": 29},
            {"name": "Ana", "age": 27},
            {"name": "David", "age": 31}
        ]
    };

    const container =
document.getElementById('data-container');
    jsonData.Dta.items.forEach(item => {
        const div =
document.createElement('div');
        div.textContent = 'Nombre: ${item.name}, Edad: ${item.age}';
        container.appendChild(div);
    });
});