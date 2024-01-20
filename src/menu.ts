
const menuItems = ['ANALOG TIMER', 'DIGITAL TIMER', 'VISUAL TIMER', 'TEXT TIMER', 'CIRKLES TIMER'];

menuItems.forEach(itemText => {
    const node = document.createElement('li');
    const textnode = document.createTextNode(itemText);
    node.appendChild(textnode);
    document.getElementById('app')?.appendChild(node);

    node.classList.add('menu-container');
});





