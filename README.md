# ABOUT
## 1. BIBINO

비비노는 맥주의 라벨을 찍어서 맥주에 대한 정보를 보고, 평가하고, 댓글을 달 수 있는 모바일 어플리케이션입니다.
<br>
<br>
## 2. 기능

<p align="center"><img src="https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/workingImage4.png?raw=true" width="50%" height="50%"><img src="https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/workingImage3.png?raw=true" width="50%" height="50%"></p>



비비노를 통해 유저들은 맥주의 사진을 찍어 맥주의 특징, 자신과 다른 유저의 별점, 코멘트와 같은 다양한 정보들을 확인할 수 있습니다. 또한 유저의 리뷰를 토대로 유저의 취향에 맞는 맥주들을 자동으로 추천해줍니다. 유저가 찍은 사진은 갤러리에 보관되어서 언제든지 다시 볼 수 있습니다. 
<br>

- 추천 알고리즘을 통한 맥주 추천
- 카메라를 통한 글자 광학 인식(OCR)
- 검색 자동완성 기능
- 구글 소셜 로그인
- 유저 별점에 따른 랭킹 페이지
<br>
<br>

# Before get started
## 1. 기획 의도

비비노는 단순한 생각에서 출발했습니다. 편의점이나 마트에 있는 수많은 맥주들을 보고 이 맥주들이 무슨 맛인지 쉽고 간편하게 알 수 있으면 좋겠다라고 

편의점 냉장고에 놓여 있는 수많은 맥주들을 보면서 이 맥주가 어떤 맥주인지 쉽게 알 수 있었으면 좋겠다라고 생각했고 그 자리에서 가장 손쉬운 방법으로 확인하길 원했기에 카메라를 사용하는 모바일 어플리케이션이 좋겠다고 생각하였습니다. 
<br>
## 2. 개발 기간

4/18/2021 ~ 5/1/2021 
<br>
<br>
## 3. 시작 전 회의
우선 회의를 통해 기본적인 플로우와 어떤 기술 스택을 활용할 지 정하고 회의 과정에서 나오는 아이디어들을 모두 기록해서 취사선택 하였습니다. 팀원들간의 상의를 통해 어느정도 기본적인 골격이 갖추어진 후 figma와 lucid chart를 사용해서 목업을 만들고 이를 시작점으로 삼았습니다. 그 후 notion을 사용해서 각자 업무를 분담하였습니다. 

업무 분담은 각자가 완전히 분할된 업무를 진행하기 보다는 유연하게 작업하였습니다. 공통적인 업무를 제외하고 개인별로 중점적으로 작업한 부분은 다음과 같습니다.

**이상엽**
- 깃, 린트와 같은 프로젝트 기본 세팅
- 리덕스 thunk, persist를 이용한 전역 상태 관리 구현
- 소셜 로그인 기능 구현

**정주형**
- figma를 사용한 ui 기본 세팅
- react native navigator와 전반적인 ux 구현
- 구글 비전 api를 이용한 맥주 스캔 기능 구현

**이원호**
- express를 사용한 백엔드 기본 세팅
- 전반적인 endpoint와 mongodb, amazon S3를 사용한 db 관리
- 추천 맥주 알고리즘 구현



<br>
<br>

<p align="center">
<img src="https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/implementation1.png?raw=true" width="50%" height="50%">
<img src="https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/mockup1.png?raw=true" width="50%" height="50%">
<img src="https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/mockup2.png?raw=true" width="50%" height="50%">
<img src="https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/schemaDesign.png?raw=true" width="80%" height="100%">
</p>



# How to install
## Client

```
1. git clone https://github.com/wonhoya/bibino-frontend

2. yarn install

3. expo start
```
<br>

## Client 환경변수 설정
.env 파일 안에 본인의 credential을 넣어 주세요
<br>
<br>

```
EXPO_CLIENT_ID = 엑스포 클라이언트 아이디
EXPO_CLIENT_PASSWORD = 엑스포 클라이언트 패스워드

IOS_CLIENT_ID = ios 클라이언트 아이디
ANDROID_CLIENT_ID = 안드로이드 클라이언트 아이디

구글 로그인
FIREBASE_API_KEY = 파이어베이스 api 키
FIREBASE_AUTH_DOMAIN = 파이어베이스 auth 도메인
FIREBASE_PROJECT_ID = 파이어베이스 프로젝트 id
FIREBASE_STORAGE_BUCKET = 파이어베이스 스토리지 버킷
FIREBASE_MESSAGING_SENDER_ID = 파이어베이스 메세징 sender id
FIREBASE_APP_ID = 파이어베이스 app 아이디
API_SERVER_URL = 백엔드 서버 url
```

## Server

```
1. git clone https://github.com/wonhoya/bibino-backend.git

2. npm install

3. npm run dev(nodemon) or npm start
```
<br>

## Client 환경변수 설정
.env 파일 안에 본인의 credential을 넣어 주세요.

```
몽고 db
DATABASE_URI=몽고 db 클러스터 URI
DATABASE_PASSWORD=몽고 db 클러스터 비밀번호

AWS_ACCESS_KEY_ID = AWS 아이디
AWS_SECRET_ACCESS_KEY = AWS 시크릿 키
GOOGLE_VISION_API_KEY=구글 클라우드 키
GOOGLE_VISION_API_URL=구글 Vision APi rest 요청 url
FIREBASE_DATABASE_URL = 파이어베이스 데이터베이스 url
PRIVATE_KEY = 파이어베이스 프라이빗 키
```

<br>
<br>
<br>

# Stack
## Frontend
React native, Expo, Redux, thunk, toolkit, Google vision api
<br>
<br>
## Backend
Mongo db, Mongoose, Google vision api, Amazon S3, FUSE
<br>
<br>

## Why use?
### ***React native***
러닝 커브가 낮고 안드로이드와 ios로 유연한 포팅이 가능해서 React native를 사용하였습니다.
<br>
<br>

### ***Expo***
React native와 같이 앱의 번들 용량이 커지고, 네이티브 모듈을 쓰지 못한다는 제약사항이 있었지만, managed work flow를 사용함으로 초기 설정이 쉽고 배포가 용이해진다는 이점이 있어서 expo를 사용하였습니다.
<br>
<br>

### ***Redux, thunk, toolkit***
상태 전역관리를 위해서 리덕스와 툴킷, thunk를 사용하였습니다. 
<br>
<br>

### ***Google vision api***
Tesseract.js 와 같은 다른 ocr 라이브러리를 사용하여 문자를 인식할 수 있었지만 한글의 인식률이 떨어져서 한글 이름 맥주 인식이 힘들 것이라 생각하였습니다. 따라서 가장 정확도가 높고 로고로도 인식이 가능한 Google vision api를 사용하였습니다.
<br>
<br>

### ***Mongo db, Mongoose***
Mongo db는 json 형태로 데이터를 관리하므로 현재 Node js의 프레임워크인 Express를 사용하는 현 앱과 호환성이 좋아 둘을 사용하였습니다.
<br>
<br>

### ***Amazon S3***
초기에는 사진을 찍어서 앱의 document 로컬 디렉토리에 저장하는 방식을 생각하였으나 용량 문제가 커질 수 있고, 유저가 다른 핸드폰에서도 자신의 정보에 접근할 수 있도록 아마존 S3에 유저의 사진을 저장하는 방식을 채택하였습니다. 
<br>
<br>

### ***FUSE***
단순 문자 비교하는 방식으로는 어려운 스펠링의 맥주를 검색하기가 어려워 fuse 라이브러리를 통해 음성으로 단어 검색이 가능하게 구현하여 ux를 개선하고자 사용하였습니다. 
<br>
<br>

### ***Eslint, Prettier***
팀 프로젝트에서 서로의 코드 스타일을 최대로 맞추어 가독성을 높이기 위해 eslint와 prettier를 사용하였습니다. 다만 에어비엔비와 같이 정해져 있는 룰을 사용하지 않고 토의를 통해 결정하였습니다. 

<br>

# Issue && Solution
### ***Dynamic Path local image import***

React의 require()는 변수를 사용해서 이미지를 가져올 수 없으므로 동적으로 이미지를 가져오는 데 어려움을 겪었습니다. 

```
export const images = [
 require("../../assets/pngs/beerSameple1.png"),
 require("../../assets/pngs/beerSameple2.png"),
 require("../../assets/pngs/beerSameple3.png"),
 require("../../assets/pngs/beerSameple4.png"),
 require("../../assets/pngs/beerSameple5.png"),
];
<Image source={require(images[index]} style={styles.image} resizeMode="cover" />
```

이러한 방식으로 동적으로 이미지를 불러 올 수 있었으나 근본적인 해결법이 아니라고 판단하였습니다. 결국 아마존 S3를 사용해서 URL을 받고 image 태그의 uri에 URL을 넣어줌으로써 동적으로 이미지를 가져오게 하였습니다. 
<br>

### ***React Native life cycle***
앱의 main, search, success 등 많은 스크린에서 맥주 상세페이지로 navigate 하고 있는데 이 과정에서 어느 스크린에서 왔는지 판단하고 거기에 따른 동작을 바꿔주는 과정에서 어려움을 겪었습니다. 
예를 들어서 사진을 찍고 분석이 성공했으면 success 스크린으로 가게 되고 다시 beer detail 스크린으로 가게 됩니다. 여기서 버그를 방지하고 사용자가 실수로 뒤로 가는 것을 방지하기 위해서 뒤로가기 제스쳐를 막고, header 버튼만으로 움직이게 하려고 시도하였습니다. 

뒤로가기 제스쳐를 막는 것은 useNavigationState 훅을 이용해서 state를 담은 배열에 접근해 구현이 가능했습니다.

```
useEffect(() => {
    if (navState.routes[navState.index - 1]?.name === "Success") {
      navigation.setOptions({
        gestureEnabled: false,
      });
    }
  }, [navigation, navState.index, navState.routes]);

navState.routes[navState.index - 1]?.name === "Success"

const navState = useNavigationState((state) => state);
```

그러나 문제는 success -> beer 페이지로 가는 흐름에서 beer페이지에서 navigation의 메소드인 popToTop으로 이동하려고 할때 에러가 발생하였습니다. 알고보니 이는 popToTop이 stack navigator의 인덱스를 초기화시키는 과정에서 아직 **unmount 되지 않은 스크린**이 동작하는 것이 문제였습니다. 이를 통해 웹과 앱의 차이에 대해서 다시 생각해 보는 계기가 되었습니다.

Consider a stack navigator with screens A and B. After navigating to A, its `componentDidMount` is called. When pushing B, its `componentDidMount` is also called, but A remains mounted on the stack and its `componentWillUnmount` is therefore not called.
[https://reactnavigation.org/docs/navigation-lifecycle](https://reactnavigation.org/docs/navigation-lifecycle)
<br>



### ***Recommendation Logic***



<br>
<br>
<br>

# TODO
### Lazy Loading
현재 어플리케이션은 eager loading으로 모든 데이터를 다 가져와서 화면에 렌더링을 하고 있습니다. 하지만 후에 사용자가 늘어난다면 로딩이 필연적으로 느려질 수 밖에 없으므로 스크롤을 통해 fetch를 추가적으로 실행해야 합니다.

<br>

### Share
맥주 상세 페이지를 스크린샷으로 찍어서 다른 사람들에게 공유할 수 있는 기능 추가해야 합니다.

<br>

### TEST
각 유닛 테스트와 테스트 라이브러리, cypress를 이용하여 end to end test까지 진행해야 합니다. 



