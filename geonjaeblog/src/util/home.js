// $(function(){
//     $('.outer-menu-item').hover(function () {
//         $(this).find('.inner-menu').show();
//     }, function () {
//         $(this).find('.inner-menu').hide();
//     });

//     // 테이블 색상 변경
//     $('.lightblue').css('background-color', 'lightblue')
//     $('.lightgray').css('background-color', 'lightgray')

//     // 취미 클릭
//     $('.btn').click(function(event){ /* only-child는 자식이 한 놈인 태그만 찾는거 그니깐 씨발 a태그 한 새끼 밖에 없는 십새끼를 선택 */
//     $(this).siblings('li').toggle();

//     event.stopPropagation();

//     });
//     $('html').click(function(){
//         $('.nav_dropdown').hide();
//     });
// });

function home() {
    // 현재 시간
    setInterval(displayNow, 1000);

    function displayNow() {
        let now = new Date();
        let currentTime = now.toLocaleTimeString();
        document.querySelector('#current').innerHTML = currentTime;
    }

    // 이미지 크게
    let pics = document.getElementsByClassName('pic');
    let bigImg = document.getElementById('bigImg');
    let bigger = document.getElementById('bigger');
    
    for(let i = 0; i < pics.length; i++){
        pics[i].addEventListener('click',showLightBox);
    }
    
    function showLightBox(){
        let big = this.getAttribute('data-src');
        bigger.setAttribute('src', big);
        bigImg.style.display = 'block';
    }
    bigImg.onclick = function(){
        bigImg.style.display = 'none';
    }

}
export default home
