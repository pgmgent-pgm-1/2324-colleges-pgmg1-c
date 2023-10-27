const $postsListElement = document.querySelector('.posts-list');
const $postDetailsElement = document.querySelector('.post-details');

function initialize () {
  console.log('1. Initalize the application!');
  generateUI();
}

function generateUI () {
  console.log('2. Generate the user interface!');
  console.log('2.1 Generate the user interface for posts list!');
  generateUIForPostsList();
}

function generateUIForPostsList () {
  $postsListElement.innerHTML = generateHTMLForBlog(blog);
  const $elems = $postsListElement.querySelectorAll('.post__listitem');
  $elems.forEach(($elem) => $elem.addEventListener('click', (ev) => {
    const id = ev.currentTarget.dataset.id;
    generateUIForPostDetails(id);
  }));
}

function generateHTMLForBlog (posts) {
  return posts.map((post, index) => `
    <li class="post__listitem" data-id="${post.id}">
      <h3 class="post__title">${post.title}</h3>
    </li>
  `).join('');
}

function generateUIForPostDetails (id) {
  const post = blog.find((post) => post.id === id);
  $postDetailsElement.innerHTML = generateHTMLForPostDetails(post);
}

function generateHTMLForPostDetails (post) {
  return `
    <article class="post">
      <h3 class="post__title">${post.title}</h3>
      <div class="post__synopsis">${post.synopsis}</div>
      <div class="post__body">${post.content}</div>
    </article>
  `;
}

initialize();