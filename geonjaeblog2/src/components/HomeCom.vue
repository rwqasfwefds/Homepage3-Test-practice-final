<template>
  <div id="page-wrapper">
    <header id="main-header">
      <h1 class="master-title">건재를 알아보자!</h1>
    </header>

    <nav id="main">
      <div class="pull-left">
        <ul class="outer-menu">
          <li class="outer-menu-item" v-on:mouseover = 'about = true' v-on:mouseleave = 'about = false'>
            <span class="menu-title">About</span>
            <ul class="inner-menu" v-if="about">
              <li class="inner-menu-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="inner-menu-item">
                <router-link to="/register">회원가입</router-link>
              </li>
            </ul>
          </li>
          <li class="outer-menu-item" v-on:mouseover = 'infor = true' v-on:mouseleave = 'infor = false'>
            <span class="menu-title">게시판</span>
            <ul class="inner-menu" v-if="infor">
              <li class="inner-menu-item">
                <router-link to="/#">공지</router-link>
              </li>
              <li class="inner-menu-item">
                <router-link to="/#">자유 게시판</router-link>
              </li>
            </ul>
          </li>
          <li class="outer-menu-item" v-on:mouseover = 'data = true' v-on:mouseleave = 'data = false'>
            <span class="menu-title">오시는 길</span>
            <ul class="inner-menu" v-if="data">
              <li class="inner-menu-item">
                <router-link to="/#">버스</router-link>
              </li>
              <li class="inner-menu-item">
                <router-link to="/#">지하철</router-link>
              </li>
              <li class="inner-menu-item">
                <router-link to="/#">주차장</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="pull-right">
        <div class="search-bar">
          <form>
            <input type="text" class="input-search" />
            <input type="submit" class="input-search-submit" value="검색" />
          </form>
        </div>
      </div>
    </nav>

    <div id="content">
      <section id="main-section">
        <p id="clock">현재시각:<span id="current"></span></p>
        <article>
          <div id="container">
            <table>
              <tr>
                <th>순번</th>
                <th>이름</th>
                <th>ID</th>
                <th>전화번호</th>
                <th>이메일</th>
              </tr>
              <tr>
                <td>1</td>
                <td>주온</td>
                <td>wndhs123</td>
                <td>010-1234-5678</td>
                <td>wndhs@naver.com</td>
              </tr>
              <tr>
                <td>2</td>
                <td>주안</td>
                <td>wndks456</td>
                <td>010-9123-4567</td>
                <td>wndks@naver.com</td>
              </tr>
              <tr>
                <td>3</td>
                <td>주영</td>
                <td>wndud456</td>
                <td>010-8912-3456</td>
                <td>wndud@naver.com</td>
              </tr>
            </table>
          </div>
        </article>
        <article>
          <div id="container2">
            <ul>
              <li><b>주온의 취미&nbsp;</b></li>
              <li>: 농구 &nbsp;</li>
              <li>축구 &nbsp;</li>
              <li>야구 &nbsp;</li>
            </ul>

            <ul>
              <li><b>주안의 취미&nbsp;</b></li>
              <li>: 기타 치기 &nbsp;</li>
              <li>피아노 치기 &nbsp;</li>
              <li>드럼 연주</li>
            </ul>

            <ul>
              <li><b>주영의 취미&nbsp;</b></li>
              <li>: 컴퓨터 게임 &nbsp;</li>
              <li>프로그래밍 &nbsp;</li>
              <li>웹디자인 &nbsp;</li>
            </ul>
          </div>
        </article>
        <hr />
        <article>
          <h2>건재의 학창시절</h2>
          <br />
          <img src="../assets/img/judo.jpg" alt="judo_picture" />
          <p>
            일단 필자는 사진에서 보이듯이 고등학교 1학년 초까지 유도를 전공
            했었다.
          </p>
          <br />
          <p>
            초등학생때 부터 유도를 해온 필자는 초등학교 마지막 시합에서 oo중학교
            유도부 코치에게 우리 중학교에 와서 유도를 하지않겠냐는 제안을
            받았다.
          </p>
          <br />
          <p>
            그때 당시 필자는 '유도선수? 재밌겠는데?'라고 생각하며 어머니께 이
            학교에 들어가서 유도 선수로서 내 인생을 보내고 싶다고 말을 했다.
          </p>
          <br />
          <p>
            어머니는 그런 나에게 '너가 한 선택 후회하지 않겠어?'라고 되려 나에게
            질문을 했고 본인은 '응 나 열심히 할께'라고 말하며 입학이 결정
            되었다.
          </p>
          <br />
          <p>
            필자는 중학교에 입학하고 중3까지 승승장구를 하며 들뜬 마음으로
            고등학교에 입학을 하였다.
          </p>
          <br />
          <p>
            하지만 고등학교에 입학 하고 첫 시합에서 난 무릎에 부상을 입고 운동을
            그만두게 되었다.
          </p>
          <br />
          <p>
            그러고 나서 일반 고교에 전학을 갔고 그대로 쭉 다니면서 졸업을 하게
            되었다.
          </p>
        </article>
        <article>
          <h2>성인이 된 건재</h2>
          <br />
          <img
            src="../assets/img/trainer.jpg"
            width="200px"
            alt="body_picture"
          />
          <p>
            원하는 대학에 진학을 못하고 있던 와중에 몸이라도 만들어 보자 라는
            생각으로 트레이너를 잠시 한 적이 있다.
          </p>
          <br />
          <p>20세 부터 23세까지 총 3년을 트레이너 생활을 했었다.</p>
          <br />
          <p>
            트레이너 생활을 하며 사진과 같이 몸도 만들어서 바디프로필 이라는 걸
            찍고 대회도 여럿 나가며 좋은 경험을 했었다.
          </p>
          <br />
          <p>
            트레이너 생활을 하고 난 뒤 나는 다시 한번 더 대학에 가기위해 수능을
            준비했었다.
          </p>
          <br />
          <p>하지만 수능을 망치고 나는 또 원하는 대학을 가지 못 했다.</p>
          <br />
          <p>
            그러고 있는 와중에 프로그래머 라는 직업에 관심을 갖기 시작했고 현재
            프로그래밍 학원을 다니고 있는 중이다.
          </p>
        </article>
        <article>
          <h2>건재의 장단점</h2>
          <img src="../assets/img/mc.jpg" width="150px" alt="Mc_picture" />
          <p>
            이 사진은 필자가 고등학교 2학년때 돌잔치 MC를 하며 찍은 사진이다.
          </p>
          <br />
          <p>
            나는 돌잔치 mc,트레이너 등등 사람들과 많이 접촉하는 일들을 많이
            했다.
          </p>
          <br />
          <p>
            이러한 일들로 인해 나의 성격은 엄청 외향적으로 변해 다른 사람들과
            빨리 친해지며, 다른 사람들이 나에 대해 재밌는 사람이라고 말을 한다.
          </p>
          <br />
          <p>
            나의 장점은 사람들과 빨리 친해지며 친해진 사람들을 즐겁게 할 수 있는
            능력이 있다는 것이다.
          </p>
          <br />
          <p>하지만 단점도 있다.</p>
          <br />
          <p>나의 단점은 내성적이라는 것이다.</p>
          <br />
          <p>
            다들 나의 단점이 내성적이라고 하면 왜 내성적이지? 라고 생각을 많이
            한다고 한다.
          </p>
          <br />
          <p>
            위에 쓰여져 있는 나의 장점은 사실을 말하면 내가 만들어 낸, 만들어 간
            성격이다.
          </p>
          <br />
          <p>
            어렸을때 부터 나의 성격이 내성적인걸 알고 나는 이 성격을 고치기 위해
            오히려 더 사람들과 많이 만날 수 있는 일들을 찾았으며 그런 일들만
            했었다
          </p>
          <br />
          <p>
            그로인해 나는 나의 단점을 어느정도 보안을 했고, 지금도 내성적이긴
            하지만 다른사람들은 그걸 느끼지 못한다는 거에 대해 나의 단점 보안은
            성공적으로 완수했다고 생각한다.
          </p>
          <br /><br />
          <p>
            이 이야기를 통해 나는 나의 단점을 장점으로 바꿀정도의 능력과
            실행력이 되며, 나의 주변사람들을 즐겁게 할 수 있다는 장점이 있는
            사람입니다.
          </p>
          <br />
          <h3>
            결론을 말씀드리면 저와 친해지면 즐거울 일들이 많아질 것이고, 손해가
            생기는 일은 없을 것 이라고 필히 말씀드리고 싶습니다.
          </h3>
        </article>
        <hr />
      </section>

      <aside id="main-aside">
        <div class="aside-list">
          <h2>유년기</h2>
          <ul>
            <li>
              <a href="#"><h2>사진</h2></a>
            </li>
            <li>
              <a href="#"><h2>이야기</h2></a>
            </li>
          </ul>
        </div>
        <div class="aside-list">
          <h2>청소년기</h2>
          <ul>
            <li>
              <a href="#"><h2>사진</h2></a>
            </li>
            <li>
              <a href="#"><h2>학교 생활</h2></a>
            </li>
            <li>
              <a href="#"><h2>이야기</h2></a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
    <footer id="main-footer">
      <p>제작 : 주건재</p>
    </footer>
  </div>
</template>

<script>
import setCurUime from "../util/home.js";

export default {
  data() {
    return {
      about: false,
      infor: false,
      data: false,
      // 시간 변수
      resId : 0
    };
  },
  mounted() {
      this.resId = setCurUime();
  },
  beforeRouteLeave (to, from, next) {
      clearInterval(this.resId);
      next();
  },
};
</script>

<style scoped>
/* @import "../assets/css/homecom.css"; */
* { 
    margin: 0; padding: 0;
    font-family: '맑은 고딕', 'Malgun Gothic', Gothic, sans-serif;
}
a { text-decoration: none; }
li { list-style: none; }

#page-wrapper {
    background-color: white;
    margin: 0 auto; padding: 10px 20px;
    width: 1200px;
}
table {
    border-collapse: collapse;
    margin:0px auto;
}
th, tr, td {
    border: 1px solid black;
    padding: 8px;
    text-align: center;
}
th{
  background-color: lightblue;
}
tr:nth-child(2n){
  background-color: lightgray;
}
tr:nth-child(2n+1){
  background-color: none;
}
#main-header { 
    padding: 40px 50px;
    background-color: white;
    position: fixed;
    width: 1000px;
    top: 0;
 }
.master-title {
    font-size: 30px; 
    color: #181818;
    text-align: center;
}
#main {
    border-top: 1px solid #C8C8C8;
    border-bottom: 1px solid #C8C8C8;
    height: 40px;
    position: fixed;
    top: 120px;
    background-color: white;
    width: 980px;
}
.pull-left{
    float: left;
}
.outer-menu-item {
    float: left;
    position: relative;
}
.outer-menu-item:hover {
    background: black;
    color: white
}

.menu-title {
    display: block;
    height: 30px; 
    line-height: 30px;
    text-align: center;
    padding: 5px 60px;
    width: 130px;
}
.inner-menu {
    width: 100%;
    background: white;
    box-shadow: 0 2px 6px rgba(5, 5, 5, 0.9);
    z-index: 1000;
    text-align: center
}

.inner-menu-item > a {
    display: block;
    padding: 5px 10px;
    color: black
}

.inner-menu-item > a:hover {
    background: black;
    color: white;
}
/* 검색 창 */
.pull-right { 
    float:right;
}
.search-bar {
    height: 26px;
    padding: 7px;
}
.input-search {
    display: block;
    float: left;
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 15px 0 0 15px;
    width: 120px; height: 24px;
    padding: 0 0 0 10px;
    font-size: 12px;
    color: #555555;
}
.input-search-submit {
    float: left;
    width: 50px; height: 26px;
    border-radius: 0 15px 15px 0;
    border: 1px solid #CCCCCC;
}
#content { overflow: hidden; }
#main-section {
    float: left;
    width: 940px;
}
#main-aside {
    float: right;
    width: 100px;
    position: fixed;
    transform: translateX(1000px);
}
article { 
    padding: 0 10px 20px 10px;
}

.aside-list { 
    padding: 10px 0 30px 0;
 }
.aside-list li a {
    margin-left: 8px;
    font-size: 13px;
    color: #6C6C6C;
}
#container2 > ul{
    display: flex;
    justify-content: center;
}
img{
    float: left;
}
/* 현재 시각 */
#clock{
    width: 175px;
    margin: 0 auto;
    font-weight: bold;
}
#container{
    width: 1000px;
    margin: 20px auto;
}
h1{
    text-align: center;
}
#content{
    margin-top: 160px;
}

</style>