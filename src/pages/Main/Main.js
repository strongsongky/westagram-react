/*const commentA = document.querySelector(".com_txt");
const btn = document.querySelector(".btn");

commentA.addEventListener("keydown", a);
commentA.addEventListener("keydown", c);

function a() {
  const commentC = commentA.value.length;
  const btnColor = document.querySelector(".btn");
  if (commentC >= 0) {
    btnColor.style.color = "#5197e9";
  }
}

function b() {
  const commentB = commentA.value;
  const tagDiv = document.querySelector(".com_txt_block");
  const tagP = document.createElement("p");
  const tagSpan = document.createElement("span");

  tagSpan.innerText = "jelly_je2";
  console.log(tagSpan);
  tagP.innerHTML = commentB;
  tagP.prepend(tagSpan);
  tagDiv.appendChild(tagP);
  console.log(tagDiv);
  commentA.value = " ";
}

function c() {
  if (event.keyCode == 13) {
    b();
  }
}*/

import "./Main.scss";

function Main() {
  return (
    <div>
      <nav>
        <div id="gnb">
          <ul>
            <li className="logo">
              <h1>
                <a href=" ">logo</a>
              </h1>
              <h1>
                <a href=" ">
                  <p>westagram</p>
                </a>
              </h1>
            </li>
            <li>
              <input type="text" placeholder="검색" />
            </li>
            <li>
              <ul className="mypage">
                <li>
                  <a href=" ">나침반</a>
                </li>
                <li>
                  <a href=" ">좋아요</a>
                </li>
                <li>
                  <a href=" ">마이페이지</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="feeds">
          <article>
            <section id="top" className="pad">
              <ul>
                <li className="picture">
                  <a href="ß">
                    <img src="/images/minion.avif" alt="프로필사진" />
                  </a>
                </li>
                <li className="userId">
                  <div>
                    <a href=" ">jelly_je2</a>
                    <a href=" ">위코드</a>
                  </div>
                </li>
                <li className="more">
                  <a href="ß">더보기</a>
                </li>
              </ul>
            </section>
            <section id="img">
              <div>
                <ul>
                  <li>
                    <img src="/images/minion2.jpeg" alt="img1" />
                  </li>
                </ul>
              </div>
            </section>
            <section id="text" className="pad">
              <div id="icon">
                <ul>
                  <li>
                    <img src="/images/heart.png" alt="좋아요" />
                  </li>
                  <li>
                    <img src="/images/comment.png" alt="댓글" />
                  </li>
                  <li>
                    <img src="/images/share.png" alt="공유" />
                  </li>
                  <li>
                    <img src="/images/bookmark.png" alt="북마크" />
                  </li>
                </ul>
              </div>
              <div className="like txt">
                <p>
                  <img src="/images/minion.avif" alt="프로필사진" />
                  <span>jelly_je2</span>님 외 <span>여러 명</span>이 좋아합니다
                </p>
              </div>
              <div className="inside txt">
                <p>
                  <span>jelly_je2</span>귀여운 미니언😍
                </p>
                <div className="com_txt_block"></div>
                <p className="time">46분 전</p>
              </div>
            </section>
            <section className="comment">
              <input
                type="textarea"
                className="com_txt"
                placeholder="댓글 달기..."
              />
              <button className="btn">게시</button>
            </section>
          </article>
        </div>
        <div className="main-right">
          <div className="right-profile">
            <div className="pro_img">
              <img src="/images/minion.avif" alt="프로필 사진" />
            </div>
            <div className="pro_txt">
              <div>
                <a href=" ">jelly_je2</a>
              </div>
              <div>콩젤리</div>
            </div>
          </div>
          <div className="story right-wrap">
            <div className="story-top right-top">
              <p>스토리</p>
              <a href=" ">모두 보기</a>
            </div>
            <div className="story-scroll">
              <div className="story-in">
                <div className="story-play">
                  <div className="story-img">
                    <a href=" ">
                      <img src="/images/minion.avif" alt="프로필 이미지" />
                    </a>
                  </div>
                  <div className="story-txt">
                    <ul>
                      <li>
                        <a href=" ">nail_geois</a>
                      </li>
                      <li>
                        <span>14시간 전</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="story-in">
                <div className="story-play">
                  <div className="story-img">
                    <a href=" ">
                      <img src="/images/minion.avif" alt="프로필 이미지" />
                    </a>
                  </div>
                  <div className="story-txt">
                    <ul>
                      <li>
                        <a href=" ">wejustmusic</a>
                      </li>
                      <li>
                        <span>11시간 전</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="story-in">
                <div className="story-play">
                  <div className="story-img">
                    <a href=" ">
                      <img src="/images/minion.avif" alt="프로필 이미지" />
                    </a>
                  </div>
                  <div className="story-txt">
                    <ul>
                      <li>
                        <a href=" ">joytattoo_</a>
                      </li>
                      <li>
                        <span>11시간 전</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="story-in">
                <div className="story-play">
                  <div className="story-img">
                    <a href=" ">
                      <img src="/images/minion.avif" alt="프로필 이미지" />
                    </a>
                  </div>
                  <div className="story-txt">
                    <ul>
                      <li>
                        <a href=" ">rla_wngnl</a>
                      </li>
                      <li>
                        <span>21시간 전</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="push right-wrap">
            <div className="right-top">
              <p>회원님을 위한 추천</p>
              <a href=" ">모두 보기</a>
            </div>
            <div className="push-wrap">
              <div className="push-in">
                <div className="push-img">
                  <a href=" ">
                    <img src="/images/minion.avif" alt="프로필 이미지" />
                  </a>
                </div>
                <div className="push-txt">
                  <ul>
                    <li>
                      <a href=" ">hong._.dev</a>
                    </li>
                    <li>
                      <span>wecode_bootcamp님 외 1명이</span> 팔로우 합니다
                    </li>
                  </ul>
                  <a href=" ">팔로우</a>
                </div>
              </div>
              <div className="push-in">
                <div className="push-img">
                  <a href=" ">
                    <img src="/images/minion.avif" alt="프로필 이미지" />
                  </a>
                </div>
                <div className="push-txt">
                  <ul>
                    <li>
                      <a href=" ">js_love_du</a>
                    </li>
                    <li>
                      <span>회원님을</span> 팔로우 합니다
                    </li>
                  </ul>
                  <a href=" ">팔로우</a>
                </div>
              </div>
              <div className="push-in">
                <div className="push-img">
                  <a href=" ">
                    <img src="/images/minion.avif" alt="프로필 이미지" />
                  </a>
                </div>
                <div className="push-txt">
                  <ul>
                    <li>
                      <a href=" ">woonsangchoi</a>
                    </li>
                    <li>
                      <span>m2_ryoung님 외 1명이</span> 팔로우 합니다
                    </li>
                  </ul>
                  <a href=" ">팔로우</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div>
              <ul>
                <li>
                  <a href=" ">
                    Instagram 정보<span>&middot;</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    지원<span>&middot;</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    홍보 센터<span>&middot;</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    API<span>&middot;</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    채용 정보<span>&middot;</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    개인정보처리방침<span>&middot;</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    약관<span>&middot;</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    디렉터리<span>&middot;</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    프로필<span>&middot;</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    해시태그<span>&middot;</span>
                  </a>
                </li>
                <li>
                  <a href=" ">
                    언어<span>&middot;</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p>&copy;2022 WESTAGRAM</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
