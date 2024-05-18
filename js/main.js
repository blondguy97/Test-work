"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const titles_1 = document.querySelectorAll(".accordion-item__title");
	const contents_1 = document.querySelectorAll(".accordion-item__content");

	const titles_2 = document.querySelectorAll(".advantages-item__title");
	const contents_2 = document.querySelectorAll(".advantages-item__content");

	titles_1.forEach((item) =>
		item.addEventListener("click", () => {
			const activeContent = document.querySelector(
				"#" + item.dataset.accordion,
			);

			if (activeContent.classList.contains("active")) {
				activeContent.classList.remove("active");

				item.classList.remove("active");

				activeContent.style.maxHeight = 0;
			} else {
				contents_1.forEach((element) => {
					element.classList.remove("active");
					element.style.maxHeight = 0;
				});

				titles_1.forEach((element) =>
					element.classList.remove("active"),
				);

				item.classList.add("active");

				activeContent.classList.add("active");
				activeContent.style.maxHeight =
					activeContent.scrollHeight + "px";
			}
		}),
	);

	titles_2.forEach((item) =>
		item.addEventListener("click", () => {
			const activeContent = document.querySelector(
				"#" + item.dataset.accordion,
			);

			if (activeContent.classList.contains("active")) {
				activeContent.classList.remove("active");

				item.classList.remove("active");

				activeContent.style.maxHeight = 0;
			} else {
				contents_2.forEach((element) => {
					element.classList.remove("active");
					element.style.maxHeight = 0;
				});

				titles_2.forEach((element) =>
					element.classList.remove("active"),
				);

				item.classList.add("active");

				activeContent.classList.add("active");
				activeContent.style.maxHeight =
					activeContent.scrollHeight + "px";
			}
		}),
	);

	const slider_1 = document.querySelector(".products__slider");
	const slider_2 = document.querySelector(".products__slider_2");


	const slider_3 = document.querySelector(".growth__slider");

	let swiperProducts_1 = new Swiper(slider_1, {
		slidesPerView: 2,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		spaceBetween: 20,
		centeredSlides: true,
		loop: true,
	});


	let swiperProducts_2 = new Swiper(slider_2, {
		slidesPerView: 2,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		spaceBetween: 20,
		centeredSlides: true,
		loop: true,
	});


	let swipeGrowth = new Swiper(slider_3, {
		slidesPerView: 1,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		centeredSlides: true,
		loop: true,
		spaceBetween: 20,
	});




	const tabsTitle = document.querySelectorAll(".tab__title");
	const tabsContent = document.querySelectorAll(".tab__content");

	const tabsTitle_2 = document.querySelectorAll(".tab__title_2");
	const tabsContent_2 = document.querySelectorAll(".tab__content_2");

	const tabsTitle_3 = document.querySelectorAll(".tab__title_3");
	const tabsContent_3 = document.querySelectorAll(".tab__content_3");

	tabsTitle.forEach(function (item) {
		item.addEventListener("click", function (event) {
			const tabsTitleTarget = event.target.getAttribute("data-tab");
			tabsTitle.forEach(function (element) {
				element.classList.remove("active-tab")

				tabsContent.forEach(function (element) {
					element.classList.add("hidden-tab-content")
				})
			})

			item.classList.add("active-tab");

			document.getElementById(tabsTitleTarget).classList.remove("hidden-tab-content");
		});
	});


	tabsTitle_2.forEach(function (item) {
		item.addEventListener("click", function (event) {
			const tabsTitleTarget = event.target.getAttribute("data-tab_2");
			tabsTitle_2.forEach(function (element) {
				element.classList.remove("active-tab")

				tabsContent_2.forEach(function (element) {
					element.classList.add("hidden-tab-content")
				})
			})

			item.classList.add("active-tab");

			document.getElementById(tabsTitleTarget).classList.remove("hidden-tab-content");
		});
	});

	tabsTitle_3.forEach(function (item) {
		item.addEventListener("click", function (event) {
			const tabsTitleTarget = event.target.getAttribute("data-tab_3");
			tabsTitle_3.forEach(function (element) {
				element.classList.remove("active-tab")

				tabsContent_3.forEach(function (element) {
					element.classList.add("hidden-tab-content")
				})
			})
			item.classList.add("active-tab");
			document.getElementById(tabsTitleTarget).classList.remove("hidden-tab-content");
		});
	});


	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu-mobile');

	burger.addEventListener('click', function(){
		burger.classList.toggle('active')
		menu.classList.toggle('open')
	})


});
