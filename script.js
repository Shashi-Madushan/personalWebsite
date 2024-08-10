// Sample project data
const projects = [
    {
        photo: 'path/to/photo1.jpg',
        title: 'Project 1',
        description: 'Description for project 1',
        liveDemo: 'http://example.com/demo1',
        github: 'http://github.com/repo1'
    },
    {
        photo: 'path/to/photo2.jpg',
        title: 'Project 2',
        description: 'Description for project 2',
        liveDemo: 'http://example.com/demo2',
        github: 'http://github.com/repo2'
    }
    ,
    {
        photo: 'path/to/photo2.jpg',
        title: 'Project 2',
        description: 'Description for project 2',
        liveDemo: 'http://example.com/demo2',
        github: 'http://github.com/repo2'
    }
    
];

// Get the container element
const container = document.getElementById('card-container');

// Iterate over the project data and create cards
projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${project.photo}" alt="Project Image" class="card__image">
        <div class="card__content">
            <p class="card__title">${project.title}</p>
            <p class="card__description">${project.description}</p>
            <a href="${project.liveDemo}" class="card__button" target="_blank">Live Demo</a>
            <a href="${project.github}" class="card__button secondary" target="_blank">Source Code</a>
        </div>
    `;
    container.appendChild(card);
});
