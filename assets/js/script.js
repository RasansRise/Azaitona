/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var NioBis = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.Animation();
				this.WideScreenSideBAr();
				this.MianSlider();
				this.videoBox();
				this.MobileMenu();
				this.searchArea();
				this.bannerParalax();
				this.projectSlide();
				this.TeamSlide();
				this.TestimonialSlide();
				this.BackgroundImage();
				this.StickyHeader();
				this.CircleChart();
				this.CirleProgress();
				this.LineChart();
				this.ServiceSlide();
				this.service2Slide();
				this.clientSlide();
				this.scrollTop();
				this.CaseTab();
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			WideScreenSideBAr: function (){
				$('.open_bar').on("click", function() {
					$('.wide_sidebar').toggleClass("wide_sidebar_open");
				});
				$('.open_bar').on('click', function () {
					$('body').toggleClass('sidebar_overlay_open');
				});
			},
			MianSlider: function (){
				jQuery('#slide_wrapper').owlCarousel({
					items: 1,
					loop: true,
					nav: false,
					dots: true,
					autoplay: false,
				});
			},
			MobileMenu: function (){

			},
			videoBox: function (){
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
			},
			searchArea: function (){
				$('.toggle-overlay').on('click', function() {
					$('.search-body').toggleClass('search-open');
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			StickyHeader: function (){
				var nav = $('.main-header');
				if ($(window).width() > 300) {
					$(window).on("scroll", function() {
						if ($(this).scrollTop() > 200) {
							nav.addClass("f-nav UpToDown");
						} else {
							nav.removeClass("f-nav UpToDown");
						}
					});
				}
			},
			bannerParalax: function (){
				$('.banner_parallax').jarallax({
					speed: 0.3,
				});
			},
			CircleChart: function (){
				if($('#chart-area').length){
					var randomScalingFactor = function() {
						return Math.round(Math.random() * 100);
					};
					var config = {
						type: 'doughnut',
						data: {
							datasets: [{
								data: [33.33,33.33,33.33],
								backgroundColor: [
								'#f3525a',
								'#007bbf',
								'#152440',
								],
								label: 'Dataset 1'
							}],
							labels: [
							'Engagement',
							'Team Members',
							'Projects Done'
							]
						},
						options: {
							responsive: true,
							legend: {
								display: false,
							},
							animation: {
								animateScale: true,
								animateRotate: true
							}
						}
					};

					window.onload = function() {
						var ctx = document.getElementById('chart-area').getContext('2d');
						window.myDoughnut = new Chart(ctx, config);
					};
				};
			},
			projectSlide: function (){
				$('#project_slide').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:true,
					center: true,
					autoplay: false,
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:2,
						},
						1000:{
							items:2,

						}
					},
				})
			},
			TeamSlide: function (){
				$('#team_slide').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: true,
					dots: false,
					autoplay: false,
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:2,
						},
						1000:{
							items:3,

						}
					},
				})
			},
			TestimonialSlide: function (){
				$('#testimonial_slide').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: true,
					dots: false,
					autoplay: false,
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:1,
						},
						1000:{
							items:2,

						}
					},
				})
			},
			CirleProgress: function (){
				if($('.circle_2, .circle').length){
					;(function() {
						var proto = $.circleProgress.defaults,
						originalDrawEmptyArc = proto.drawEmptyArc;

						proto.emptyThickness = 5; 
						proto.drawEmptyArc = function(v) {
							var oldGetThickness = this.getThickness, 
							oldThickness = this.getThickness(),
							emptyThickness = this.emptyThickness || _oldThickness.call(this),
							oldRadius = this.radius,
							delta = (oldThickness - emptyThickness) / 2;

							this.getThickness = function() {
								return emptyThickness;
							};

							this.radius = oldRadius - delta;
							this.ctx.save();
							this.ctx.translate(delta, delta);

							originalDrawEmptyArc.call(this, v);

							this.ctx.restore();
							this.getThickness = oldGetThickness;
							this.radius = oldRadius;
						};
					})();
					$('.circle').circleProgress({
						emptyThickness: 2,
						size: 210,
						thickness: 10,
						lineCap: 'round',
						fill: {
							gradient: ['#3763ec', ['#3763ec', 0.7]],
							gradientAngle: Math.PI * -0.3
						}  
					});

					$('.circle').each(function () {
						var $circle = $(this);

						var max = parseInt($circle.data('value'));
						var value = max / 100;
					  
						$circle.circleProgress({
						  value: value
						}).on('circle-animation-progress', function (event, progress) {
						  $(this)
							.find('strong')
							.html(Math.round(max * progress));
						});
					  });
					$('.circle_2').circleProgress({
						emptyThickness: 3,
						size: 210,
						thickness: 10,
						lineCap: 'round',
						emptyFill: '#fc888d',
						fill: {
							gradient: ['#ffffff', ['#ffffff', 0.7]],
							gradientAngle: Math.PI * -0.3
						}  
					});

					$('.first.circle_2').circleProgress({
						value: .92
					}).on('circle-animation-progress', function(event, progress) {
						$(this).find('strong').html(Math.round(92 * progress) + '<span>%</span>');
					});


					$('.second.circle_2').circleProgress({
						value: .5
					}).on('circle-animation-progress', function(event, progress) {
						$(this).find('strong').html(Math.round(50 * progress) + '<span>k</span>');
					});

					$('.third.circle_2').circleProgress({
						value: .83
					}).on('circle-animation-progress', function(event, progress) {
						$(this).find('strong').html(Math.round(83 * progress) + '<span>%</span>');
					});
					var el = $('.circle_2, .circle'),
					inited = false;
					el.appear({ force_process: true });

					el.on('appear', function() {
						if (!inited) {
							el.circleProgress();
							inited = true;
						}
					});
				};
			},
			LineChart: function (){
				if ($("#nio_chart").length) {

					var $chart = $("#nio_chart");
					$chart.appear();

					$(document.body).on('appear', '#nio_chart', function() {
						var current_item = $(this);

						if (!current_item.hasClass('appeared')) {
							current_item.addClass('appeared');

							var ctx = document.getElementById("nio_chart");
							var nio_chart = new Chart(ctx, {
								type: 'line',
								data: {
									labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
									datasets: [{
										label: 'Our Profit Level',
										data: [40, 50.1, 40.8, 30.8, 30.2, 20.5, 30.7, 50, 50.5, 80, 90, 100],
										lineTension: 0.1,
										backgroundColor: 'rgba(219, 6, 45, 0.5)',
										borderColor: 'rgba(219, 6, 45, 1)',
										borderCapStyle: 'butt',
										borderWidth: 1,
										PointBorderCoolor: 'rgba(219, 6, 45, 1)',
										pointBackgroundColor: 'rgba(255, 255, 255, 1)',
										pointBorderWidth: 8,
										poitHoverBackgroundColor: 'rgba(219, 6, 45, 1)',
									}]
								},
								options: {
									scales: {
										yAxes: [{
											ticks: {
												beginAtZero: true,
												fontColor: "white",
												fontSize: 12,
											},
											gridLines: {
												color: "rgba(219, 6, 45, 0.2)",
												zeroLineColor: 'rgba(219, 6, 45, 1)',
												zeroLineWidth: 5,
											},

										}],
										xAxes: [{
											ticks: {
												fontColor: "white",
												fontSize: 12,
											},
											gridLines: {
												color: "rgba(219, 6, 45, 0.2)",
												zeroLineColor: 'rgba(219, 6, 45, 1)',
												zeroLineWidth: 5,
											},
										}],
										animateScale : true,
									},
									legend: {
										display: false,
									},
									maintainAspectRatio: false,
									animation: {
										duration: 2500,
									}

								}

							});
						}                
					});
				};

				if($('#nio_chart_2').length){
					var $chart = $("#nio_chart_2");
					$chart.appear();

					$(document.body).on('appear', '#nio_chart_2', function() {
						var current_item = $(this);

						if (!current_item.hasClass('appeared')) {
							current_item.addClass('appeared');

							var ctx = document.getElementById("nio_chart_2");
							var nio_chart = new Chart(ctx, {
								type: 'line',
								data: {
									labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
									datasets: [{
										label: 'Our Profit Level',
										data: [40, 50.1, 40.8, 30.8, 30.2, 20.5, 30.7, 50, 50.5, 80, 90, 100],
										lineTension: 0.5,
										backgroundColor: '#f68187',
										borderColor: '#fff',
										borderCapStyle: 'butt',
										borderWidth: 1,
										PointBorderCoolor: 'rgba(219, 6, 45, 1)',
										pointBackgroundColor: 'rgba(255, 255, 255, 1)',
										pointBorderWidth: 0,
										poitHoverBackgroundColor: 'rgba(219, 6, 45, 1)',
									}]
								},
								options: {
									scales: {
										yAxes: [{
											ticks: {
												beginAtZero: true,
												fontColor: "white",
												fontSize: 12,
											},
											gridLines: {
												color: "rgba(219, 6, 45, 0.2)",
												zeroLineColor: '#f3525a',
												zeroLineWidth: 5,
											},

										}],
										xAxes: [{
											ticks: {
												fontColor: "white",
												fontSize: 12,
											},
											gridLines: {
												color: "rgba(219, 6, 45, 0.2)",
												zeroLineColor: '#f3525a',
												zeroLineWidth: 0,
											},
										}],
										animateScale : true,
									},
									legend: {
										display: false,
									},
									maintainAspectRatio: false,
									animation: {
										duration: 2500,
									}

								}

							});
						}                
					});
				};
			},
			ServiceSlide: function (){
				$('#service_slide').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: true,
					dots: false,
					autoplay: false,
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:2,
						},
						1000:{
							items:3,

						}
					},
				})
			},
			service2Slide: function (){
				$('#service_item2').owlCarousel({
					items:1,
					nav: true,
					margin: 0,
					dots: false,
					autoplay: false,
					smartSpeed: 1000,
					responsiveClass:true,
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
				})
			},
			clientSlide: function (){
				$('#client_slide').owlCarousel({
					margin: 30,
					loop:true,
					responsiveClass:true,
					nav: false,
					dots: false,
					autoplay: true,
					smartSpeed: 1000,
					responsive:{
						0:{items:1},
						480:{items:2},
						600:{items:3},
						800:{items:4},
						1024:{items:6}
					}
				})
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			CaseTab:  function (){
				jQuery(window).on('load', function(){
					$('.filtr-container');
					var filterizd = $('.filtr-container');

					if(filterizd.length) {
						filterizd.filterizr({

						});
						$('.filtr-button').on('click', function() {

							$('.filtr-button.filtr-active').removeClass('filtr-active');
							$(this).addClass('filtr-active');
						});
					}
				});
			},
			
		}
	}
	jQuery(document).ready(function (){
		NioBis.init();
	});

})();