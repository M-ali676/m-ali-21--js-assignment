// function createPost() {
//   const input = document.getElementById('postInput');
//   const text = input.value.trim();
//   if (!text) {
//     alert("Please write something.");
//     return;
//   }

//   const postsArea = document.getElementById('postsArea');

//   const post = document.createElement('div');
//   post.className = 'post-card';

//   const dateTime = new Date().toLocaleString();

//   post.innerHTML = `
//     <div class="post-header">
//       <span>Ali</span>
//       <span>${dateTime}</span>
//     </div>
//     <div class="post-text">${text}</div>
//     <div class="post-actions">
//       <button class="action-btn" onclick="likePost(this)">👍 Like</button>
//       <button class="action-btn" onclick="commentPost(this)">💬 Comment</button>
//     </div>
//   `;

//   postsArea.prepend(post);
//   input.value = '';
// }

// function likePost(btn) {
//   if (btn.textContent.includes('Like')) {
//     btn.textContent = '❤ Liked';
//   } else {
//     btn.textContent = '👍 Like';
//   }
// }

// function commentPost(btn) {
//   const comment = prompt("Enter your comment:");
//   if (comment) {
//     const commentDiv = document.createElement('div');
//     commentDiv.style.marginTop = '10px';
//     commentDiv.style.fontSize = '14px';
//     commentDiv.innerHTML = <strong>You:</strong> ${comment} ;
//     btn.parentElement.appendChild(commentDiv);
//   }
// }

function createPost() {
  const input = document.getElementById("postInput");
  const content = input.value.trim();

  if (content === "") {
    alert("Please write something before posting.");
    return;
  }

  const now = new Date();
  const timeString = now.toLocaleString();

  const postHTML = `
    <div class="post">
      <div class="post-header">Ali</div>
      <div class="timestamp">${timeString}</div>
      <div class="content">${content}</div>
      <div class="actions">
        <button onclick="likePost(this)">👍 Like</button>
        <button onclick="commentPost()">💬 Comment</button>
      </div>
    </div>
  `;

  const postContainer = document.getElementById("postContainer");
  postContainer.insertAdjacentHTML("afterbegin", postHTML);

  input.value = "";
}

function likePost(btn) {
  btn.innerText = "👍 Liked";
  btn.disabled = true;
}

function commentPost() {
  alert("Comment feature coming soon!");
}
