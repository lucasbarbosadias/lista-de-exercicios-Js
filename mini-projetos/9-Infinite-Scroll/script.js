const creatDate = () => {
    let d = parseInt(Math.random() * 30)
	let m = parseInt(Math.random() * 12);
	return `${d}/${m}/2021`;
}

const creatTitle = () => {
    const numTitle = parseInt(Math.random() * TITLE_NEWS.length)
    return TITLE_NEWS[numTitle]
}

const creatDesc = () => {
    const numDesc = parseInt(Math.random() * DESC_NEWS.length)
    return DESC_NEWS[numDesc]
}

const newNews = () => {
    newsElements.push(`
    <div class="news__element">        
        <img src="http://lorempixel.com/150/200/" alt="Each of the news">        
        <div class="news__txt">
            <h2 class="h2">${creatTitle()}</h2>
            <span class="news__date">${creatDate()}</span>
            <p class="news__desc">
                ${creatDesc()}
            </p>
        </div>
    </div>
    `)
    elementNews.innerHTML = newsElements
}

const loadingPage = () => {
	loading.classList.add('show');	
	setTimeout(() => {
		loading.classList.remove('show');
		
		setTimeout(() => {
			newNews();
		}, 300);
	}, 1000);
}

const init = () => {
    for (let i = 1; i <= 4; i++) {
        newNews()
    }
}

const TITLE_NEWS = [
    "Lorem ipsum mattis nostra metus ut turpis.",
    "Scelerisque quis aliquet elit donec eleifend.",
    "Tempus sodales amet auctor vestibulum erat.",
    "Malesuada magna suscipit mollis morbi.",
    "Interdum elit senectus porta sed ligula quam.",
]
const DESC_NEWS = [
    "Lorem ipsum mattis nostra metus ut turpis, gravida mattis ante primis vel lacus, gravida turpis viverra ut himenaeos. torquent vehicula laoreet sed nisl auctor porta feugiat augue gravida, felis pulvinar senectus curabitur taciti conubia aliquam gravida tortor ac.",
    "Pellentesque metus inceptos lacus scelerisque suspendisse purus eros. metus ultricies mollis tristique volutpat lobortis sapien, sollicitudin est egestas rutru eugiat dui est tortor urna. velit senectus varius posuere habitasse rhoncus urna quisque inceptos molestie eu eget platea elementum dictumst, praesent eleifend dictum consequat malesuada class sit vehicula.",
    "Scelerisque quis aliquet elit donec eleifend vel cursus, ut nunc nullam quisque scelerisque gravida maecenas metus, sed elit varius tempor netus phasellus. ut turpis pharetra ut quisque aenean placerat, tellus metus congue phasellus posuere magna ante, accumsan luctus consectetur molestie accumsan.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestiae fugit laudantium porro dicta mollitia cum corruptiplaceat dignissimos. Autem maiores cons ut placeat sapiente. Perferendis, doloremque veniam dignissimos nemo recusandae ipsa sint magni, aliquid repudiandae uia eligendi error cum!",
    "Pellentesque suscipit potenti ullamcorper dolor suscipit blandit ante, feugiat volutpat condimentum auctor lobortis hendrerit quisque, leo semper vel per scelerisque nulla.",
]

window.addEventListener('scroll', () => {	
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;	
	if(scrollTop + clientHeight >= scrollHeight - 5) {
		loadingPage();
	}
});

let elementNews = document.querySelector('.news')
const newsElements = []
const loading = document.querySelector('.loading');

init()
