# LAND SEED — 공개 사이트 (베타) v0.2

부동산을 처음 접하는 사람을 위한 땅 공부 서비스 LAND SEED의 공개 웹사이트입니다.
정적 HTML/CSS로 만들었고 GitHub Pages로 게시합니다. 외부 글꼴·스크립트·분석 도구를 쓰지 않습니다.

## 구성

| 파일 | 내용 |
|---|---|
| `index.html` | 첫 화면 |
| `start.html` | 처음 가이드 (다섯 단계) |
| `glossary.html` | 용어 도감 |
| `guide-farm.html`, `guide-house.html` | 목적별 가이드 |
| `about.html` | 서비스 원칙과 출처 |
| `privacy.html` | 개인정보 안내 |
| `404.html` | 없는 페이지 (스타일을 파일 안에 둠) |
| `assets/css/site.css` | 디자인 토큰과 모든 스타일 |
| `assets/js/site.js` | 모바일 메뉴, 용어 검색 |

## 글꼴

`assets/fonts/PretendardVariable.woff2`를 넣으면 Pretendard로 보입니다([SIL OFL 1.1](https://github.com/orioncactus/pretendard)).
파일이 없으면 시스템 글꼴(Apple SD Gothic Neo, 맑은 고딕, Noto Sans KR)로 보입니다.

## 사진 출처

`assets/img/hero-*.jpg`는 Shamus7792003의 사진(위키미디어 공용,
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/))을 잘라 크기를 줄이고 촬영 정보를 지운 것입니다.
이 변형 사진도 CC BY-SA 4.0으로 이용할 수 있습니다.
원본: https://commons.wikimedia.org/wiki/File:Wanju_county_(autumn_rice_field_ready_for_harvesting_near_Gui_Lake)..JPG

## 검색 노출

베타 기간에는 `robots.txt`와 각 페이지의 `noindex` 설정으로 검색엔진 노출을 막아 두었습니다.
