const posts = Array.from({ length: 50 }, (_, i) => `게시물 ${i + 1}`); // 예시 게시물 생성
const postsPerPage = 12;
let currentPage = 1;
let totalPages;

function displayPosts() {
    const postContainer = document.getElementById('posts');
    postContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    currentPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post-container';
        
        const img = document.createElement('img');
        img.className = 'post-image';
        img.src = '../../img/template/suwunhwasoung.png'; // 예시 이미지
        img.alt = post;

        postDiv.appendChild(img);

    });

    // 총 게시물 수 표시
    const totalPostsElement = document.getElementById('total-posts');
    totalPostsElement.textContent = posts.length; // 총 게시물 수를 표시
}