const getStorage = localStorage.getItem('postId')

    fetch('https://jsonplaceholder.typicode.com/posts/${getStorage}')
    .then(response => response.json())
    .then((data) => {
        
        let postLayout = document.getElementById("post-layout")
        let html ="";
        
            html += `
                    <div class="mt-3">
                        <div class="card">
                            <div class="card-body" id="${data.id}">
                                <h6 class="post-body text-center" id="${data.id}"></h6>
                                <h5 class="post-title mb-4" id="${data.title}"></h5>
                                <p class="post-body" id="${data.body}">
                                </p>   
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end mt-3">
                        <a href="index.html"><button class="btn btn-danger" type="submit"></butto></a>
                    </div>
                `
    
            postLayout.innerHTML= html    
               
    
    });



