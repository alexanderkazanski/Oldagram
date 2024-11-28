const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function createPost(data, cloneHTMLElement) {
    // post image
    cloneHTMLElement.querySelector(".vangogh-post").src = data.post;
    
    // name
    cloneHTMLElement.querySelector(".user p").innerHTML = `<p>${data.name}<span>${data.location}</span></p>`;
    
    // name image
    cloneHTMLElement.querySelector(".user img").src = data.avatar;
    
    // likes
    cloneHTMLElement.querySelector(".likes").textContent = data.likes + " likes"
    
    // comment
    cloneHTMLElement.querySelector(".user-comment").innerHTML = `<span class="user-name">${data.username}</span> ${data.comment}`
    
    return cloneHTMLElement;
}


for (let i = 1; i < posts.length; i++) {
    const firstPost = document.getElementById("ig-post").cloneNode(true)
    const newPost = createPost(posts[i], firstPost)
    document.querySelector("body").append(newPost)
}

window.createPost = createPost;