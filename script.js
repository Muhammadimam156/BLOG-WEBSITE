
const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// is function ki madad say post ka filter kam krta ha 
function filterPosts() {
  const searchQuery = document.getElementById('search-bar').value.toLowerCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    const title = post.getAttribute('data-title').toLowerCase();
    const content = post.getAttribute('data-content').toLowerCase();
    if (title.includes(searchQuery) || content.includes(searchQuery)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}


const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = newsletterForm.querySelector('input[type="email"]').value;
  alert(`Thank you for subscribing, ${email}!`);
  newsletterForm.reset();
});


//mongo add add comment


function addComment() {
  const commentInput = document.getElementById('comment-input');
  const commentSection = document.getElementById('comment-section');
  if (commentInput.value.trim() !== '') {
    const comment = document.createElement('div');
    comment.classList.add('comment');
    comment.innerHTML = `<p>${commentInput.value}</p>`;
    commentSection.appendChild(comment);
    commentInput.value = '';
  }
}


const blogPostsSection = document.querySelector('.blog-posts');
const postDetails = document.querySelectorAll('.post-detail');


postDetails.forEach(detail => detail.style.display = 'none');


document.querySelectorAll('.post a').forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    blogPostsSection.style.display = 'none'; // Hide blog posts
    postDetails[index].style.display = 'block'; // Show selected post detail
  });
});


document.querySelectorAll('.post-detail a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    blogPostsSection.style.display = 'grid'; // Show blog posts
    postDetails.forEach(detail => detail.style.display = 'none'); // Hide all post details
  });
});


const posts = document.querySelectorAll('.post');
posts.forEach(post => {
  const content = post.querySelector('.post-content').innerText;
  const wordCount = content.split(' ').length;
  const readingTime = Math.ceil(wordCount / 200); // 200 words per minute
  post.querySelector('.reading-time').textContent = `Estimated reading time: ${readingTime} minutes`;
});
