const menuBtn = document.getElementById('menu-btn')
const menuDrawer = document.getElementById('menu-drawer')
const screens = document.querySelectorAll('.screen')
const bottomBtn = document.getElementById('bottom-btn')
const bottomEl = document.getElementById('bottom')
const headerEl = document.getElementById('header')
const footer = document.getElementById('footer')
const menuTitles = document.querySelectorAll('.menu-titles li h2')
const serviceTitles = document.querySelectorAll('.title-container h2')
const serviceLists = document.querySelectorAll('.list')
const mobileLists = document.querySelectorAll('.mobile-list')
const titleContainer = document.querySelectorAll('.title-container')
const projectTitles = document.querySelectorAll('.projects div h3')
const projectImages = document.querySelectorAll('.img-container img')
const projectsEl = document.querySelector('.projects')
const banner = document.querySelector('.banner')
const infoTop = document.querySelector('.info-top')
const infoBottom = document.querySelector('.info-bottom')
const imagesContainer = document.querySelector('.images-container')
const nextProject = document.querySelector('.next-project')
const mainEl = document.querySelector('.main')
const containerEl = document.querySelector('.container')
const exampleContainer = document.querySelector('.example-container')
const projectItems = document.querySelector('.example-container').children
const imagesItems = document.querySelector('.images-container').children
const contactContainer = document.querySelector('.contact-container')

const colors = ['#Ec3890', '#730f9e', '#48fdb4']

const projectData = [
	{
		banner: '/img/Elsa-marie-petit/1. IMAGE_DEBUT.jpg',
		par1: "Moderniser l'identité de Maître Elsa Petit-Marie, avocat du bareau de Lyon",
		par2: 'Une identité sobre reprenant les codes de...',
		img: [
			{
				class: 'half-width',
				path1: '/img/Elsa-marie-petit/2. LOGO_1.jpg',
				path2: '/img/Elsa-marie-petit/3. IMAGE_2.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/Elsa-marie-petit/4. CARTES_VISITE.jpg',
			},
			{
				class: 'half-width',
				path1: '/img/Elsa-marie-petit/5. IMAGE_3.jpg',
				path2: '/img/Elsa-marie-petit/6. PICTO.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/Elsa-marie-petit/7. SITE_MOCKUP.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/Elsa-marie-petit/8. PAPETERIE_MOCKUP.jpg',
			},
		],
		Next: 'boucantier',
	},
	{
		banner: '/img/boucantier/1. IMAGE_DEBUT.jpg',
		par1: "Concevoir l'identité visuelle pour un concept store dédié aux savoir-faire Africains : Boncantier.</br> Ce concept store a pour but de promouvoir des nouveaux talents tout en créant un espace créatif et ludique dédié à la culture africaine.",
		par2: "Nous avons mis en place une identité inspirée des codes graphiques de l'Afrique, des couleurs faisant appel à la majorité des drapeaux des pays africains tout en créant également 6 pictogrammes pour les 6 lieux d'activités présents dans le concept store.",
		img: [
			{
				class: 'full-width',
				path1: '/img/boucantier/2. LOGO_1.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/boucantier/3. LOGO_2.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/boucantier/4. PICTOS.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/boucantier/5. AFFICHES.jpg',
			},
			{
				class: 'half-width',
				path1: '/img/boucantier/6. TOTEBAG_1.jpg',
				path2: '/img/boucantier/7. TOTEBAG_2.jpg',
			},
		],
		Next: 'pilotage soft',
	},
	{
		banner: 'img/pilotage-soft/1. IMAGE_DEBUT.jpg',
		par1: "André Manin, propriétaire de Vulcain logistique et Claude Guth, propriétaire de la société Réso proposent des services en gestion de transport et logistique ainsi qu'en restauration collective. Les deux entreprises se sont associées sous la bannière de 'Pilotage Soft' et bénéficient d'un portefeuille de compétences élargie et proposent trois logiciels complets : Pilotage de Restauration, Transport et Chargeur.",
		par2: 'This Studio a créé une identité visuelle déclinable reprenant les pricipales valeurs de Pilotage Soft, une entreprise française polyvalente qui propose des logiciels complets',
		img: [
			{
				class: 'full-width',
				path1: '/img/pilotage-soft/2. LOGOS_1.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/pilotage-soft/3. LOGOS_2.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/pilotage-soft/4. SITE_MOCKUP.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/pilotage-soft/5. AFFICHES_1.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/pilotage-soft/6. AFFICHES_2.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/pilotage-soft/7. PAPETERIE_MOCKUP.jpg',
			},
		],
		Next: "georgia o'keffe",
	},
	{
		banner: '/img/georgia-o-keeffe/1. IMAGE_DEBUT.jpg',
		par1: "Concevoir l'identité d'une exposition d'oeuvres de Georgia O'Keeffe pour le musée des beaux arts de Lyon.",
		par2: "This Studio a décidé d'exploiter de côté fleural de ses oeuvres. A son apogé artistique, Georgia O'Keeffe peignait beaucoup de fleurs. Nous avons utilisé huit éléments tirés de différents tableau pour réaliser cette identité visuelle.",
		img: [
			{
				class: 'half-width',
				path1: '/img/georgia-o-keeffe/2. LOGO_2.jpg',
				path2: 'img/georgia-o-keeffe/3. LOGO_1.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/georgia-o-keeffe/4. CARTONS_INVITATION.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/georgia-o-keeffe/5. AFFICHES.jpg',
			},
		],
		Next: 'natif body',
	},
	{
		banner: '/img/native-body/1. IMAGE_DEBUT.jpg',
		par1: 'Votre Brief ici',
		par2: 'Votre solution ici',
		img: [
			{
				class: 'full-width',
				path1: '/img/native-body/2. LOGO_1.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/native-body/3. EXPLICATION_LOGO.jpg',
			},
			{
				class: 'half-width',
				path1: '/img/native-body/4. IMAGE_1.jpg',
				path2: '/img/native-body/5. LOGO_2.jpg',
			},
			{
				class: 'full-width',
				path1: 'img/native-body/6. IMAGE_2.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/native-body/7. LOGO_3.jpg',
			},
			{
				class: 'full-width',
				path1: '/img/native-body/8. EBOOK_MOCKUP.jpg',
			},
		],
		Next: 'pilotage soft',
	},
]

let currentProject = 0
let wheelTime = 0
let index = 0
let current = true
let activeProject = 0

// Auto trigger after Animation

setTimeout(changePageDown, 100)

// Project Loader

function loadProject(currentProject) {
	const currentProjectData = projectData[currentProject]
	const currentProjectDataImg = currentProjectData.img
	banner.innerHTML = `
    <img src="${currentProjectData.banner}" alt="elsa">
    `
	infoTop.innerHTML = `
    <div class="top-left">
    <h2>Brief</h2>
    <span></span>
    </div>
    <p>${currentProjectData.par1}</p>
    `
	infoBottom.innerHTML = `
    <h2>Solutions</h2>
    <p>${currentProjectData.par2}</p>
    `
	currentProjectDataImg.forEach((img) => {
		const imgEl = document.createElement('div')
		const classEl = img.class
		imgEl.classList.add(classEl)

		if (imgEl.classList.contains('half-width') === true) {
			imgEl.innerHTML = `
                <img src="${img.path1}" alt="logo">
                <img src="${img.path2}" alt="">
            `
		} else {
			imgEl.innerHTML = `
            <img src="${img.path1}" alt="">
            `
		}

		imagesContainer.appendChild(imgEl)
	})

	nextProject.innerHTML = `
    <h3>project suivant</h3>
    <h2>${currentProjectData.Next}</h2
    `
	activeProject = currentProject

	footer.classList.add('hide')

	current = false
}

// On Project pages, display on scroll

window.addEventListener('scroll', ShowElements)

function ShowElements() {
	const triggerBottom = window.innerHeight

	Array.from(projectItems).forEach((item, idx) => {
		const itemTop = item.getBoundingClientRect().top

		if (itemTop < triggerBottom && idx <= Array.from(projectItems).length - 1) {
			item.classList.add('active')
			if (idx === 3) {
				Array.from(imagesItems).forEach((image) => {
					const imageTop = image.getBoundingClientRect().top
					if (imageTop < triggerBottom) {
						image.classList.add('active')
					}
				})
			} else {
				footer.classList.remove('hide')
			}
		}
	})
}

function resetProject() {
	Array.from(projectItems).forEach((item) => {
		item.innerHTML = ' '
		item.classList.remove('active')
	})
}

projectsEl.addEventListener('mouseenter', () => {
	current = false
})

projectsEl.addEventListener('mouseleave', () => {
	if (mainEl.classList.contains('project') === true) {
		current = false
	} else {
		current = true
	}
})

menuTitles.forEach((title, idx) => {
	title.addEventListener('click', () => {
		exampleContainer.classList.add('hide')
		contactContainer.classList.add('hide')
		mainEl.classList.remove('project')
		containerEl.classList.remove('project')
		footer.classList.add('hide')
		bottomEl.classList.remove('hide')
		resetProject()
		if (idx === menuTitles.length - 1) {
			for (i = 0; i <= screens.length - 1; i++) {
				screens[i].classList.add('hide')
			}
			contactContainer.classList.remove('hide')
			bottomEl.classList.add('hide')
		} else {
			for (j = 0; j <= screens.length - 1; j++) {
				if (j === 3) {
					screens[j].classList.remove('hide')
					screens[j].classList.remove('up')
					screens[j].classList.remove('halfup')
				} else {
					screens[j].classList.remove('hide')
					screens[j].classList.remove('up')
					screens[j].classList.remove('upper')
				}
			}

			for (h = 0; h < idx; h++) {
				screens[h].classList.add('up')
			}
		}
		menuDrawer.classList.toggle('open')
		menuBtn.classList.toggle('active')
		index = idx
		current = true
	})

	title.addEventListener('mouseover', () => {
		setColor(title)
	})

	title.addEventListener('mouseleave', () => {
		removeColor(title)
	})
})

nextProject.addEventListener('click', () => {
	if (activeProject < projectTitles.length - 1) {
		activeProject++
	}
	resetProject()
	loadProject(activeProject)

	window.scrollTo({ top: 0, behavior: 'smooth' })
})

menuBtn.addEventListener('click', () => {
	menuDrawer.classList.toggle('open')
	menuBtn.classList.toggle('active')
})

bottomBtn.addEventListener('click', () => {
	changePageDown()
	index++
})

// footer.addEventListener('click', () => {
// 	bottomEl.classList.remove('hide')
// 	footer.classList.add('hide')

// 	if (index === 4) {
// 		screens[index - 1].classList.remove('halfup')
// 	} else {
// 		screens[index - 1].classList.remove('up')
// 	}
// })

serviceTitles.forEach((title, idx) => {
	title.addEventListener('mouseover', () => {
		setColor(title)
		serviceLists[idx].classList.remove('hide')
	})
	title.addEventListener('mouseout', () => {
		removeColor(title)
		serviceLists[idx].classList.add('hide')
	})
	title.addEventListener('click', () => {
		removeActive()
		titleContainer[idx].classList.add('active')
		mobileLists[idx].classList.remove('hide')
	})
})

function removeActive() {
	for (let i = 0; i < titleContainer.length; i++) {
		titleContainer[i].classList.remove('active')
		mobileLists[i].classList.add('hide')
	}
}

projectTitles.forEach((title, idx) => {
	title.addEventListener('mouseover', () => {
		setColor(title)
		projectImages[idx].classList.remove('hide')
	})
	title.addEventListener('mouseout', () => {
		removeColor(title)
		projectImages[idx].classList.add('hide')
	})
	title.addEventListener('click', () => {
		mainEl.classList.add('project')
		containerEl.classList.add('project')
		for (i = 0; i <= screens.length - 1; i++) {
			screens[i].classList.add('hide')
		}
		exampleContainer.classList.remove('hide')
		bottomEl.classList.add('hide')
		footer.classList.remove('hide')

		loadProject(idx)

		current = false
	})
})

window.addEventListener('wheel', (e) => {
	if (wheelTime === 0) {
		wheelTime = new Date().getTime()
	} else {
		if (new Date().getTime() - wheelTime > 1000) {
			pageMove(e)
			wheelTime = 0
		}
	}
})

function pageMove(event) {
	if (current === true) {
		if (event.deltaY < 0) {
			if (index === 1) {
				index = 1
			} else {
				changePageUp()
				index--
			}
		} else if (event.deltaY > 0) {
			if (index >= screens.lenght - 1) {
				index = screens.length - 1
			} else {
				changePageDown()
				index++
			}
		}
	}
}

function changePageDown() {
	removeActive()
	if (index === 0) {
		screens[index].classList.add('up')
		bottomEl.classList.add('show')
		headerEl.classList.add('show')
		index++
	} else if (index < screens.length - 1) {
		screens[index].classList.add('up')
		bottomEl.classList.add('show')
		headerEl.classList.add('show')
	} else if (index === screens.length - 1) {
		screens[index].classList.add('halfup')
		for (i = 0; i <= screens.length - 2; i++) {
			screens[i].classList.remove('up')
			screens[i].classList.add('upper')
		}
		bottomEl.classList.add('hide')
		footer.classList.remove('hide')
	} else if (index === screens.length) {
		index = screens.length - 1
	}
}

function changePageUp() {
	const PreviousScreen = index - 1
	if (index === screens.length) {
		screens[PreviousScreen].classList.remove('halfup')
		for (i = 0; i <= screens.length - 2; i++) {
			screens[i].classList.add('up')
			screens[i].classList.remove('upper')
		}
		bottomEl.classList.remove('hide')
		footer.classList.add('hide')
	} else {
		screens[PreviousScreen].classList.remove('up')
	}
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}

function setColor(element) {
	const color = getRandomColor()
	element.style.boxShadow = `inset 0em -0.3em ${color}`
	element.previousElementSibling.style.color = color
}

function removeColor(element) {
	element.style.boxShadow = ''
	element.previousElementSibling.style.color = '#000'
}
