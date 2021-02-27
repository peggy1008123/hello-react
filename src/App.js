import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
  <div className="container">
      <header className="header">
          <div className="logo_block">
              <img className="logo" src="../images/img_logo.png" alt="logo"/>
          </div>
          <nav>
              <ul className="head_nav">
                  <li className="nav_btn">平台</li>
                  <li className="nav_btn">遊戲</li>
                  <li className="nav_btn">儲值中心</li>
                  <li className="nav_btn">客服中心</li>
                  <li className="nav_btn">
                      <a href="#">
                          <div id="login_btn">
                        登入
                          </div>
                      </a>
                  </li>
              </ul>
          </nav>
      </header>
      <div className="slider">
          <div className="slider_img1">
              <div className="title"><img class="title" src="../images/img_logo.png" alt="logo"/></div>
              <div className="text">打造無數經典PC遊戲
                  <br/>家長放心、兒童開心的PC遊戲平台
                  <br/>帶給玩家最極致的遊戲體驗
              </div>
              <a href="#">
              <div className="btn_box"><span className="about">ABOUT US</span></div></a>
          </div>
      </div>
      <div className="game_body">
          <div className="game_nav">
              <div className="nav1 n1" id="nav1">
                  <div className="myshop">我的商店</div>
                  <div className="game_nav_btn"></div>
              </div>
              <div className="nav1 n2" id="nav2">
                  <div className="myshop" id="seemore">瀏覽</div>
                  <div className="game_nav_btn" id="nav_btn2"></div>
              </div>
              <div className="nav3 n3">
                  <input type="text" id="searchbox" placeholder="搜尋商店" class="search_bar"/>
                  <div className="search_btn">
                      <img src="../images/搜尋.png" alt=""/>
                  </div>
              </div>
          </div>
          <div className="freegame_container">
              <div className="hotgame_text">熱門免費遊戲</div>
              <div className="arrow left"></div>
              <div className="arrow right"></div>
                  <div className="freegame_item">
                      <div className="freegame">
                          <div className="img_freegame">
                              <img className="free" src="../images/img_freegame_1.jpg" alt=""/>
                          </div>
                          <div className="download_btn">下載遊玩</div>
                      </div>
                      <div className="freegame">
                          <div className="img_freegame">
                              <img className="free" src="../images/img_freegame_2.jpeg" alt=""/>
                          </div>
                          <div className="download_btn">下載遊玩</div>
                      </div>
                      <div className="freegame">
                          <div className="img_freegame">
                              <img className="free" src="../images/img_freegame_3.jpg" alt=""/>
                          </div>
                          <div className="download_btn">下載遊玩</div>
                      </div>
                      <div className="freegame">
                          <div className="img_freegame">
                              <img className="free" src="../images/img_freegame_4.jpg" alt=""/>
                          </div>
                          <div className="download_btn">下載遊玩</div>
                      </div>
                  </div>
          </div>
      </div>
      <div className="game_body2">
          <div className="maingamebox">
              <div className="discount_shop t1">特惠商店</div>
              <div className="seemore_btn t2">瀏覽更多</div>
          </div>
          <div className="maingame_container">
              <div className="maingame1-3">
                  <div className="maingame m1">
                      <img className="img_game" src="../images/img_maingame_1.jpg" alt=""/>
                      <div className="price_bar">
                          <div className="discount_bar">-66%</div>
                          <div className="price">NT$159</div>
                      </div>
                  </div>
                  <div className="maingame m2">
                      <img className="img_game" src="../images/img_maingame_2.jpg" alt=""/>
                      <div className="price_bar">
                          <div className="discount_bar">-25%</div>
                          <div className="price">NT$268</div>
                      </div>
                  </div>
                  <div className="maingame m3">
                      <img className="img_game" src="../images/img_maingame_3.jpg" alt=""/>
                      <div className="price_bar">
                          <div className="discount_bar">-20%</div>
                          <div className="price">NT$350</div>
                      </div>
                  </div>
                  <div className="maingame m4">
                      <img  className="img_game" src="../images/img_maingame_4.jpg" alt=""/>
                      <div className="price_bar">
                          <div className="discount_bar">-20%</div>
                          <div className="price">NT$350</div>
                      </div>
                  </div>
                  <div className="maingame m5">
                      <img className="img_game"src="../images/img_maingame_5.jpg" alt=""/>
                      <div className="price_bar">
                          <div className="discount_bar">-30%</div>
                          <div className="price">NT$299</div>
                      </div>
                  </div>
                  <div className="maingame m6">
                      <img className="img_game" src="../images/img_maingame_6.jpg" alt=""/>
                      <div className="price_bar">
                          <div className="discount_bar">-10%</div>
                          <div className="price">NT$500</div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
      <div className="other_item">
          <div className="discount_shop" id="title2">瀏覽商品</div>
          <div className="other_item_btn">
              <div className="boxa">
                  <div className="item_btn i1">新推出商品</div>
              </div>
              <div className="boxa">
                  <div className="item_btn i2">特惠商品</div>
              </div>
              <div className="boxa">
                  <div className="item_btn i3">免費遊戲</div>
              </div>
              <div className="boxa">
                  <div className="item_btn i4">依使用者標籤</div>
              </div>
          </div>
      </div>
      <div className="footer_container">
          <div className="copyright">Copyright © NTUEDTD Online. All rights reserved.</div>
          <nav className="footer_nav">
              <ul className="footer_btn">
                  <li className="foot_btn">公司介紹</li>
                  <li className="foot_btn">加入我們</li>
                  <li className="foot_btn">服務條款</li>
                  <li className="foot_btn">隱私條款</li>
              </ul>
          </nav>
          <div className="language_option">
              <select name="language" className="form">
                  　<option value="english">English(英文)</option>
                  　<option value="chinese">簡体中文</option>
                  　<option value="japaneese">日本語(日文)</option>
              </select>
          </div>
      </div>
  </div>
</div>
  );
}

export default App;
