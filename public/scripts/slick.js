"use strict";$(document).ready(function(){$(".slider__feedback-control").slick({accessibility:!0,infinite:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,dots:!0})}),$(".product__show-control").slick({slidesToShow:6,infinite:!0,accessibility:!1,draggable:!1,responsive:[{breakpoint:992,settings:{slidesToShow:2,dots:!1,draggable:!0,arrows:!1}},{breakpoint:575,settings:{slidesToShow:1,dots:!1,draggable:!0,arrows:!1}}]}),$(".slick-prev").click(function(){$(".product__show-item").each(function(s){$(this).removeClass("item__active")}),$(".product__show-control .slick-active:first").addClass("item__active"),$(".product__show-control .slick-active:last").addClass("item__active")}),$(".slick-next").click(function(){$(".product__show-item").each(function(s){$(this).removeClass("item__active")}),$(".product__show-control .slick-active:first").addClass("item__active"),$(".product__show-control .slick-active:last").addClass("item__active")}),$(".slick-active:first").addClass("item__active"),$(".slick-active:last").addClass("item__active"),$(window).resize(function(){$("body").width()<992?$(".product__show-control").addClass("container"):$(".product__show-control").removeClass("container")}),$(".contact__list-control").slick({slidesToShow:6,infinite:!0,responsive:[{breakpoint:992,settings:{slidesToShow:4,dots:!1,draggable:!0,arrows:!1}},{breakpoint:575,settings:{slidesToShow:2,dots:!1,draggable:!0,arrows:!1}}]});