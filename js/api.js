var DateTime = luxon.DateTime;
const getData = async() => {
	let data = await axios.get("https://api.spacexdata.com/v4/launches");
	
	return data.data.splice(50,100);
}
document.addEventListener('DOMContentLoaded', async() => {
    const data = await getData();
	let spaceXData = data.reverse()
	let container = document.querySelector('#cardContainer')
	for (let i = 0; i < spaceXData.length; i++) {
		const e = spaceXData[i];
		// SETTING NAMES TO SPECIFIC DATA
		let link = e.links.flickr.original[0]
		let ytLink = e.links.webcast
		if(ytLink === null){continue}
		// console.log(ytLink)
		if(link === undefined){continue}
		let success = e.success
		let name = e.name
		let launch = DateTime.fromISO(e.date_local).toLocaleString({ month: 'long', day: 'numeric', year: "numeric" })
		let launchDesc = e.details
		if(launchDesc === null){continue}
		let rocketNum = e.rocket

		// FILTERING AND SORTING DATA
		if(success == true) {
			success = "Launch Status :  SUCCESS"
		}else{
			success = "Launch Status :  FAILED"
		}
		// if(launchDesc === null){
		// 	launchDesc = "There is currently no information on this launch."
		// }
		// SETTING HTML
		container.innerHTML += `
		<div class="w-[34rem] my-[4%] mx-[4%] inset-0 z-0">  
		<figure class="bg-gray-900">
			<img src="${link}" class="text-white rounded-t w-full h-96 relative">
			<figcaption class="py-7">
			<h1 class="text-3xl leading-relaxed px-5 pb-0 text-white dark:text-gray-300 ">${name}</h1>
			<h2 class="text-l  mb-4 leading-relaxed px-5 pt-0 text-white dark:text-gray-300">${launch}</h2>
			</figcaption>
		</figure>
				
		<!-- ACCORDIAN DROP DOWN -->
		
		<div x-data="{ open: false }" class=" pt-1 pb-2 items-center justify-center relative overflow-hidden ">
			<div  @click="open = ! open" class="p-4 bg-white w-full flex justify-between items-center hover:bg-gray-300">
				<div class="flex items-center gap-2"><h4 class="font-medium text-xl text-black">Read more</h4></div>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
					</svg>
				</div>
				<div x-show="open" @click.outside="open = false"  x-transition:enter="transition ease-out duration-500"
					x-transition:enter-start="opacity-0 translate-y-0"
					x-transition:enter-end="opacity-100 translate-y-0"
					x-transition:leave="transition ease-in duration-300"
					x-transition:leave-start="opacity-100 translate-y-10"
					x-transition:leave-end="opacity-0 translate-y-0" class="w-full bg-gray-800 p-4 " id="accordianModal">
				
				<!-- ACCORDIAN DATA-->
				<h1 class="text-xl mb-4  leading-relaxed text-white ">${success}</h3>

				<!-- Description -->
				<p class="leading-7 text-lg  text-gray-200">${launchDesc}</p> <br>
				<p class="text-white text-m mb-4" >Rocket Number : ${rocketNum}</p>
				<a href="${ytLink}" class="text-white text-m bg-gray-600 px-2 py-2 hover:bg-black" >View Launch</a><br>
				
				</div>
			</div>
		</div>   
		`
	}
})