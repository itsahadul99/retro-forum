const showTitleContainer = document.getElementById('show-title-container');
const postContainer = document.getElementById('post-container');
const showTitle = document.getElementById('show-title');
const loadAllPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    // console.log(data.posts);
    const posts = data.posts;
    displayPost(posts)
}
const displayPost = (posts) => {
    posts.forEach(post => {
        // console.log(post);
        const postDiv = document.createElement('div');
        postDiv.className = ``;
        postDiv.innerHTML = `
        <div class="flex flex-col lg:flex-row items-start gap-5 lg:gap-10 bg-[#7D7DFC1A] p-5 lg:p-10 rounded-lg ">
            <div class="bg-white relative rounded-lg flex flex-col justify-center items-center">
                <img class ="w-16 rounded-xl" src="${post.image}" alt="">
                <div id="active-status" class="absolute ${post.isActive ? "bg-[#10B981]" : "bg-[#FF3434]"} rounded-full w-3 h-3 -top-1 -right-1"></div>
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
                        <button onclick="readButtonHandler('${post.id}')"><img src="./images/email.png" alt=""></button>
                    </div>
                </div>
            </div>
        </div>
        
        `
        postContainer.appendChild(postDiv);
        setTimeout(spinner(false), 2000)
    });
}
let count = 0;
const readButtonHandler = (id) => {
    const showCount = document.getElementById('read-count');
    count++;
    showCount.innerHTML = count;
    // console.log(id);
    showTitleHandler(id)
}
const showTitleHandler = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    // console.log(data.posts);
    const posts = data.posts;
    posts.map((post) => {
        if (id === `${post.id}`) {
            const div = document.createElement('div');
            div.className = `bg-white flex justify-between items-center rounded-xl p-5 `;
            div.innerHTML = `
            <div>
                <h1 id="show-title" class="text-sm lg:text-xl">${post.title}</h1>
            </div>
            <div class="flex gap-3 ">
                <img class="h-6" src="./images/eye.png" alt="">
                <p>${post.view_count}</p>
            </div>
            
            `
            showTitleContainer.appendChild(div);
        }
    })

}
const latestPostContainer = document.getElementById('latest-post-container');
const loadLatestPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    // console.log(data);
    data.forEach((post) => {
        // console.log(post);
        const div = document.createElement('div');
        div.className = `border-2 p-5 lg:p-10 rounded-2xl space-y-5`;
        div.innerHTML = `
            <div class="bg-[#12132D15] w-full min-h-32">
                <img src="${post.cover_image} class ="rounded-xl"/>
            </div>
            <div>
                <div class="flex justify-start items-center gap-4">
                    <img src="./images/date.png" alt="">
                    <p class="text-[#12132D99] text-sm">${post.author.posted_date ? post.author.posted_date : "No publish date"}</p>
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
                        <p class="text-[#12132D99] text-sm">${post.author.designation ? post.author.designation : "unknown"}</p>
                    </div>
                </div>
            </div>
        
        `
        latestPostContainer.appendChild(div);
    })
}

const postSearchByQuery = async (categoryName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`);
    const data = await res.json();
    const posts = data.posts;
    // console.log(data.posts);
    displayPost(posts);
}

const search = () => {
    postContainer.innerHTML = '';
    spinner(true)
    setTimeout(() => {
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        // console.log(searchField.value);
        postSearchByQuery(searchText);

    }, 2000)

}

// spinner handler 
const spinner = (isSpinner) => {
    const spinnerContainer = document.getElementById('spinner-container');
    if (isSpinner) {
        spinnerContainer.classList.remove('hidden')
    } else {
        spinnerContainer.classList.add('hidden');
    }
}


loadAllPost()
loadLatestPost();
postSearchByQuery()