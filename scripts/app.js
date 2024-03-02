
const postContainer = document.getElementById('post-container');
const showTitle = document.getElementById('show-title');
const showTitleContaier = document.getElementById('show-title-container')
const loadAllPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    // console.log(data.posts);
    const posts = data.posts;
    posts.forEach(post => {
        // console.log(post);
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
    // const emailButtons = document.querySelectorAll('.email-btn');
    //     for(const emailBtn of emailButtons){
    //         emailBtn.addEventListener('click', (posts) =>{
    //             console.log(posts);
    //             const div = document.createElement('div');
    //             div.className = `bg-white flex justify-between items-center rounded-xl p-5 `;

    //             // console.log(post);
    //             showTitle.innerText = ``;
    //             showTitleContaier.appendChild(div);
    //         })
    //     }
}
const latestPostContainer = document.getElementById('latest-post-container');
const loadLatestPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    // console.log(data);
    data.forEach((post) => {
        console.log(post);
        const div = document.createElement('div');
        div.className = `border-2 p-5 lg:p-10 rounded-2xl space-y-5`;
        div.innerHTML = `
                    <div class="bg-[#12132D15] w-full min-h-32">
                    <img src="${post.cover_image} class ="rounded-xl"/>
                    </div>
                    <div>
                        <div class="flex justify-start items-center gap-4">
                            <img src="./images/date.png" alt="">
                            <p class="text-[#12132D99] text-sm">${post.author.posted_date?post.author.posted_date:"No publish date"}</p>
                        </div>
                        <div>
                            <h1 class="text-black font-bold text-xl">${post.title}</h1>
                            <p class="text-[#12132D99] text-sm">${post.description}</p>
                        </div>
                        <div class="flex items-start gap-5 lg:gap-10 mt-5">
                            <div>
                                <img class ="w-16 rounded-full" src="${post.profile_image}" alt="">
                            </div>
                            <div>
                                <h1 class="font-bold text-[#12132D]">${post.author.name}</h1>
                                <p class="text-[#12132D99] text-sm">${post.author.designation?post.author.designation:"unknown"}</p>
                            </div>
                        </div>
                    </div>
        
        `
        latestPostContainer.appendChild(div);
    })
}





loadAllPost()
loadLatestPost();