function showNav(){$(".fullscreen-nav").animate({width:"100%"},1e3,"easeInOutSine"),$(".fullscreen-nav").css("padding","25px 25px 25px 25px"),$(".nav-wrapper").css("display","block")}function closeNav(){$(".fullscreen-nav").animate({width:"3vw"},1e3,"easeInOutSine"),$(".fullscreen-nav").css("padding","0"),$(".nav-wrapper").css("display","none")}$(function(){$(".about-title").animate({right:"0px"},1e3,"easeInOutSine"),$(".border-line").delay(200).animate({right:"0px"},1e3,"easeInOutSine"),$(".about-title").delay(2e3).animate({opacity:"0"},1600,"easeInOutSine"),$(".border-line").delay(2e3).animate({opacity:"0"},1600,"easeInOutSine"),$(".animation-container").animate({display:"none"},100)}),$("#nav-item-1").hover(function(){$("#about-nav-summary").css("opacity","1")},function(){$("#about-nav-summary").css("opacity","0")}),$("#nav-item-2").hover(function(){$("#village-nav-summary").css("opacity","1")},function(){$("#village-nav-summary").css("opacity","0")}),$("#nav-item-3").hover(function(){$("#summerFest-nav-summary").css("opacity","1")},function(){$("#summerFest-nav-summary").css("opacity","0")}),$("#nav-item-4").hover(function(){$("#poolside-nav-summary").css("opacity","1")},function(){$("#poolside-nav-summary").css("opacity","0")}),$(document).ready(function(){function n(){991<$(document).width()?($("#nav-item-1").unbind("hover"),$("#nav-item-2").unbind("hover"),$("#nav-item-3").unbind("hover"),$("#nav-item-4").unbind("hover")):($("#nav-item-1").bind("hover"),$("#nav-item-2").bind("hover"),$("#nav-item-3").bind("hover"),$("#nav-item-4").bind("hover"))}n(),$(document).resize(function(){n()})});