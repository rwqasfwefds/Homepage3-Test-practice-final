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
        <button><a href="index.html">되돌아가기</a></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>