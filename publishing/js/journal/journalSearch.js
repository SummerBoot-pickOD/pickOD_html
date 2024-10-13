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
        img.src = 'https://via.placeholder.com/300'; // 예시 이미지
        img.alt = post;

        postDiv.appendChild(img);

        // 제목을 post-container 내부에 추가
        const titleDiv = document.createElement('div');
        titleDiv.className = 'post-title'; // 클래스 추가
        titleDiv.textContent = post;

        postDiv.appendChild(titleDiv); // 제목을 이미지 하단에 추가

        postContainer.appendChild(postDiv); // 게시물 컨테이너에 추가
    });

    // 총 게시물 수 표시
    const totalPostsElement = document.getElementById('total-posts');
    totalPostsElement.textContent = posts.length; // 총 게시물 수를 표시
}

function setupPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    totalPages = Math.ceil(posts.length / postsPerPage);
    
    const createButton = (pageNum, text) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.disabled = (currentPage === pageNum);
        button.addEventListener('click', () => {
            currentPage = pageNum;
            displayPosts();
            setupPagination();
        });
        return button;
    };

    if (currentPage > 1) {
        const prevButton = createButton(Math.max(currentPage - 5, 1), '<'); // 1 이하로 내려가지 않도록 수정
        paginationContainer.appendChild(prevButton);
    }

    const startPage = Math.max(1, currentPage - 4);
    const endPage = Math.min(totalPages, currentPage + 4);

    for (let i = startPage; i <= endPage; i++) {
        const button = createButton(i, i);
        paginationContainer.appendChild(button);
    }

    if (currentPage < totalPages) {
        const nextButton = createButton(Math.min(currentPage + 5, totalPages), '>'); // 총 페이지 수 초과 방지
        paginationContainer.appendChild(nextButton);
    }
}

// 초기 표시
displayPosts();
setupPagination();