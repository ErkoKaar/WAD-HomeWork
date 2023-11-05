

// Function to fetch and display posts
async function fetchPosts() {
    try {
        const response = await fetch("my.json"); // Fetch the local JSON file
        const data = await response.json();

        const postsContainer = document.querySelector('.posts');

        data.Posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            const postHeader = document.createElement('div');
            postHeader.className = 'post-header';

            const userPic = document.createElement('img');
            userPic.className = 'user-pic';
            userPic.src = 'log-in.png';
            userPic.alt = 'User';

            const postDate = document.createElement('span');
            postDate.className = 'post-date';
            postDate.textContent = new Date(post.create_time).toLocaleString();

            postHeader.appendChild(userPic);
            postHeader.appendChild(postDate);

            const postContent = document.createElement('div');
            postContent.className = 'post-content';

            if (post.photo_url) {
                const postImage = document.createElement('img');
                postImage.className = 'post-image';
                postImage.src = post.photo_url;
                postImage.alt = 'Post';
                postContent.appendChild(postImage);
            }

            const postText = document.createElement('p');
            postText.textContent = post.body;
            postContent.appendChild(postText);

            postElement.appendChild(postHeader);
            postElement.appendChild(postContent);

            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Call the function to fetch and display posts when the page loads
fetchPosts();

document.querySelector('.img-container img').onclick = function(event) {
    var dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
      event.preventDefault();
  };
  





