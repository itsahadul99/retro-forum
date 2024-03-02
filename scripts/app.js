
const postContainer = document.getElementById('post-container');
const loadAllPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    // console.log(data.posts);
    const posts = data.posts;
    posts.forEach(post => {
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.className = ``;
        postDiv.innerHTML = `
        <div class="flex flex-col lg:flex-row items-start gap-5 lg:gap-10 bg-[#7D7DFC1A] p-5 lg:p-10 rounded-lg ">
            <div class="bg-white relative rounded-lg flex flex-col justify-center items-center">
                <img class ="w-16 rounded-xl" src="${post.image}" alt="">
                <div class="absolute bg-green-400 rounded-full w-3 h-3 -top-2 -right-1"></div>
            </div>
            <div>
                <div class="flex gap-5 font-medium text-sm mb-3">
                    <p class="">${post.category}</p>
                    <p>Author: <span>${post.author.name}</span></p>
                </div>
                <h1 class="text-xl lg:text-2xl text-[#12132D] font-bold">${post.title}</h1>
                <p class="border-[#12132D] border-dotted border-b-2 pb-5">${post.description}</p>
                <div class="flex justify-between items-center mt-5 ">
                    <div class="flex space-x-3 lg:space-x-5">
                        <div class="flex items-center gap-2">
                            <img src="./images/message.png" alt="">
                            <p>${post.comment_count}</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <img src="./images/eye.png" alt="">
                            <p>${post.view_count}</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <img src="./images/table.png" alt="">
                            <p>${post.posted_time} min</p>
                        </div>
                    </div>
                    <div>
                        <button class = "email-btn"><img src="./images/email.png" alt=""></button>
                    </div>
                </div>
            </div>
        </div>
        
        `
        postContainer.appendChild(postDiv);
    });
}






loadAllPost()