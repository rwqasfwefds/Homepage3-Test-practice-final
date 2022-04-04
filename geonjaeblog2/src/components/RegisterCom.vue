<template>
  <div>
    <h1>회원가입</h1>
    <div>
      <form>
        <fieldset>
          <table>
            <tr>
              <td>아이디</td>
              <td><input type="text" required /></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input type="password" required /></td>
            </tr>
            <tr>
              <td>이름</td>
              <td><input type="text" required /></td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>
                <input type="number" required />
              </td>
            </tr>
            <tr>
              <td>생년월일</td>
              <td><input id="datepicker" /></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td><input type="text" placeholder="abcd@naver.com" /></td>
            </tr>

            <tr>
              <td></td>
              <td><input type="submit" value="가입" /></td>
            </tr>
          </table>
        </fieldset>
        <button><router-link to="/">되돌아가기</router-link></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* @import '../assets/css/register_member.css' */
*{
    margin: 0;
    padding: 0;
}
fieldset{
    margin: 0 auto;
    border-radius: 5px;
    padding: 30px;
    background-color: lightblue;
    
}
input{
    width: 300px;
    height: 30px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    
}
form{
    width: 500px;
    height: 250px;
    position: absolute;
    left: 50%; top: 50%;
    margin-left: -250px;
    margin-top: -125px;
}
table{
    height: 300px;
}
h1{
    text-align: center;
    margin-top: 250px;
}
button{
    width: 90px;
    border-radius: 5px;
    font-size: 16px;
    float: right;
    font-weight: bold;
}
</style>