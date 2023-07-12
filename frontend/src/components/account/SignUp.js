import React from "react";

const Signup = () => {
  return (
    <form method="POST" action=".">
      <div class="mb-3">
        <label for="username" class="form-label">
          사용자 이름
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="사용자 이름"
          name="username"
        />
      </div>
      <div class="mb-3">
        <label for="useremail" class="form-label">
          사용자 이메일
        </label>
        <input
          type="text"
          className="form-control"
          id="useremail"
          placeholder="사용자 이메일"
          name="useremail"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          비밀번호
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="비밀번호"
          name="password"
        />
      </div>
      <div class="mb-3">
        <label for="re_password" class="form-label">
          비밀번호
        </label>
        <input
          type="password"
          className="form-control"
          id="re_password"
          placeholder="비밀번호 확인"
          name="re_password"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        등록
      </button>
    </form>
  );
};

export default Signup;
