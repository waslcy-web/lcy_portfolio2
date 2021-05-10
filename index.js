$(document).ready(function(){

	//搜索引行
	searchBar();

	//登录
	login();

	//banner流动
	fullSlider();

	//Feature-slider 商品画面流动
	featureSlider();

	//比例缩小之后增加动态图标
	menu();
});


//for-fix-menu-when-scroll
$(window).scroll(function(){

	if($(document).scrollTop() > 50){

		$('.navigation').addClass('fix-nav');

	}
	else{
		$('.navigation').removeClass('fix-nav');
	}
})


//Seach
function searchBar(){

	// For Search bar 搜索引行

	$(document).on('click','.search',function(){

		//addClass;在选择的元素上添加新的属性
		$('.search-bar').addClass('search-bar-active');
	});

	$(document).on('click','.search-cancel',function(){

		//removeClass;删除此元素的指定元素
		$('.search-bar').removeClass('search-bar-active');

	});


}

//Login-and-SignUp
function login(){

	//login-登录                  
	$(document).on('click','.user,.already-acount',function(){

		//addClass;在选择的元素上添加新的属性
		$('.form').addClass('login-active').removeClass('sign-up-active');

	});

	//sign-注册
	$(document).on('click','.sign-up-btn',function(){

		//addClass;在选择的元素上添加新的属性
		$('.form').addClass('sign-up-active').removeClass('login-active');

	});

	//cancel-取消
	$(document).on('click','.form-cancel',function(){

		//addClass;在选择的元素上添加新的属性
		$('.form').removeClass('login-active').removeClass('sign-up-active');

	});


}

//Full-slider
function fullSlider(){

    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        item:1,
        auto:true,
        slideMargin:0,
        loop:true
    }); 

}

//Feature-slider
function featureSlider(){

	 $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
           $('#autoWidth').removeClass('cS-hidden');
       } 

    });

}


//for-responsive-menu
function menu(){

	$('.toggle').click(function(){

		$('.toggle').toggleClass('active');
		$('.navigation').toggleClass('active');

	})

}
