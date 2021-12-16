let postTitle = document.getElementById("post-title");
let postBody = document.getElementById("post-body");
let postForm = document.querySelector("#post-form");
let userPost = [];

postForm.addEventListener("submit", createPost);

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        let postLayout = document.getElementById('post-layout');
        userPost = data;
        let html = "";
        userPost.forEach(e => {
             html += `
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-end">
                                <h6 class="text-danger">${e.id}</h6>
                            </div>
                            <h5 class="post-title mb-4">${e.title}</h5>
                            <p class="post-body">${e.body}
                            </p>
                            <button class="btn btn-danger text-white" id="del-post"> Read more </button>    
                        </div>
                    </div>
                </div>
             `
            console.log(e);
            postLayout.innerHTML = html;
        });
    });
}

getPosts();

function createPost(e) {
    e.preventDefault();
    let pTitle = postTitle.value;
    let pBody = postTitle.value;
    console.log("Post Title", pTitle);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            title: "pTitle",
            body: "pBody",
            userId: "5"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("post", data);
        console.log(userPost)
        let postLayout = document.getElementById('post-layout');
        userPost = data;
        let html = "";
        userPost.forEach(e => {
             html += `
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-end">
                                <h6 class="text-danger">${e.id}</h6>
                            </div>
                            <h5 class="post-title mb-4">${e.title}</h5>
                            <p class="post-body">${e.body}
                            </p>
                            <button class="btn btn-danger text-white" id="del-post"> Read more </button>    
                        </div>
                    </div>
                </div>
             `
            // console.log(e);
            postLayout.innerHTML = html;
        });
    })
}