# BIBINO

- [BIBINO](#bibino)
  - [1. Introduce](#1-introduce)
  - [2. Features](#2-features)
- [Before get started](#before-get-started)
  - [1. Planning](#1-planning)
  - [2. Periods of Development](#2-periods-of-development)
  - [3. Discussion](#3-discussion)
- [How to install](#how-to-install)
  - [Client](#client)
  - [Client 환경변수 설정](#client-환경변수-설정)
  - [Server](#server)
  - [Client 환경변수 설정](#client-환경변수-설정-1)
- [Stack](#stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Why use?](#why-use)
    - [***React native***](#react-native)
    - [***Expo***](#expo)
    - [***Redux, thunk, toolkit***](#redux-thunk-toolkit)
    - [***Google vision api***](#google-vision-api)
    - [***Mongo db, Mongoose***](#mongo-db-mongoose)
    - [***Amazon S3***](#amazon-s3)
    - [***FUSE***](#fuse)
    - [***Eslint, Prettier***](#eslint-prettier)
- [Issue && Solution](#issue--solution)
    - [***Log-in issue with react native navigation life cycle***](#log-in-issue-with-react-native-navigation-life-cycle)
    - [***Dynamic Path local image import***](#dynamic-path-local-image-import)
    - [***React Native life cycle***](#react-native-life-cycle)
    - [***Recommendation Logic***](#recommendation-logic)
    - [***Search Logic***](#search-logic)
<br>
<br>

## 1. Introduce

비비노는 맥주의 라벨을 찍어서 맥주에 대한 정보를 보고, 평가하고, 댓글을 달 수 있는 모바일 어플리케이션입니다.
<br>
<br>

## 2. Features

<p align="center"><img src="[https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/workingImage4.png?raw=true](https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/workingImage4.png?raw=true)" width="50%" height="50%"><img src="[https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/workingImage3.png?raw=true](https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/workingImage3.png?raw=true)" width="50%" height="50%"></p>

비비노를 통해 유저들은 맥주의 사진을 찍어 맥주의 특징, 자신과 다른 유저의 별점, 코멘트와 같은 다양한 정보들을 확인할 수 있습니다. 또한 유저의 리뷰를 토대로 유저의 취향에 맞는 맥주들을 자동으로 추천해줍니다. 유저가 찍은 사진은 갤러리에 보관되어서 언제든지 다시 볼 수 있습니다.
<br>
<br>

- 추천 알고리즘을 통한 맥주 추천
- 카메라를 통한 글자 광학 인식(OCR)
- 검색 자동완성 기능
- 구글 소셜 로그인
- 유저 별점에 따른 랭킹 페이지
<br>
<br>

# Before get started

## 1. Planning

비비노는 단순한 생각에서 출발했습니다. 편의점이나 마트에 있는 수많은 맥주들을 보고 이 맥주들이 무슨 맛인지 쉽고 간편하게 알 수 있으면 좋겠다라고

편의점 냉장고에 놓여 있는 수많은 맥주들을 보면서 이 맥주가 어떤 맥주인지 쉽게 알 수 있었으면 좋겠다라고 생각했고 그 자리에서 가장 손쉬운 방법으로 확인하길 원했기에 카메라를 사용하는 모바일 어플리케이션이 좋겠다고 생각하였습니다.
<br>
<br>

## 2. Periods of Development

4/18/2021 ~ 5/1/2021
<br>
<br>

## 3. Discussion

우선 회의를 통해 기본적인 플로우와 어떤 기술 스택을 활용할 지 정하고 회의 과정에서 나오는 아이디어들을 모두 기록해서 취사선택 하였습니다. 팀원들간의 상의를 통해 어느정도 기본적인 골격이 갖추어진 후 figma와 lucid chart를 사용해서 목업을 만들고 이를 시작점으로 삼았습니다. 그 후 notion을 사용해서 각자 업무를 분담하였습니다.

업무 분담은 각자가 완전히 분할된 업무를 진행하기 보다는 유연하게 작업하였습니다. 공통적인 업무를 제외하고 개인별로 중점적으로 작업한 부분은 다음과 같습니다.
<br>
<br>

**이상엽**

- 깃, 린트와 같은 프로젝트 기본 세팅
- 리덕스 thunk, persist를 이용한 전역 상태 관리 구현
- 소셜 로그인 기능 구현

**정주형**

- figma를 사용한 ui 기본 세팅
- react native navigator와 전반적인 ux 구현
- 구글 비전 api를 이용한 맥주 스캔 기능 구현

**이원호**

- DB schema, backend flow 계획, 구현 및 테스트
- 사용자로부터 맥주후기를 수집하여 이를 바탕으로 순위를매기고 사용자의 취향에 맞춰 맥주를 추천해주는 서비스 개발
- 사용자의 취향에 따라 여러가지 기준을 충족하는 맥주를 찾을 수 있는 검색 기능을 구현

<br>
<br>

<p align="center">
<img src="[https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/implementation1.png?raw=true](https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/implementation1.png?raw=true)" width="50%" height="50%">
<img src="[https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/mockup1.png?raw=true](https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/mockup1.png?raw=true)" width="50%" height="50%">
<img src="[https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/mockup2.png?raw=true](https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/mockup2.png?raw=true)" width="50%" height="50%">
<img src="[https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/schemaDesign.png?raw=true](https://github.com/wonhoya/bibino-frontend/blob/readme/assets/pngs/schemaDesign.png?raw=true)" width="80%" height="100%">
</p>
<br>
<br>

# How to install

## Client

```
1. git clone <https://github.com/wonhoya/bibino-frontend>

2. yarn install

3. expo start

```

<br>
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
<br>
<br>

## Server

```
1. git clone <https://github.com/wonhoya/bibino-backend.git>

2. npm install

3. npm run dev(nodemon) or npm start

```
<br>
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

성능과 리소스 절약, 확장성을 고려하여 MongoDB를 사용하였습니다. 

noSQL이 ACID properties에 관해서는 SQL보다 약하긴하지만 많은 양의 unstructured data를 다룰 때엔 훨씬 빠르게 작동합니다. 그래서 처음 BIBINO를 설계할때 각 collection마다 relation이 없게 설계했기때문에 noSQL이 더 맞다고 판단했습니다.

MongoDB에서는 4.0버전 업데이트 이후에 noSQL중에서도 데이터 정합성을 위한 transaction같은 메소드가 존재하기 때문에 추후 애플리케이션을 확장할때 ACID 가 필요한 경우 RDBMS 로 migrate 하거나 별도의 db를 사용할 필요 없이 확장 가능하기 때문에 mongoDB를 선택하였습니다.

또한 차후에 앱의 사용자가 많아져서 traffic이 높아질 때를 대비하여 똑같은 쿼리를 처리하는데 있어서 빠르고 컴퓨터 리소스를 덜 잡아먹는다는 noSQL을 채택하였습니다.
<br>
<br>

### ***Amazon S3***

3가지 이유로 AWS S3를 사용하였습니다.

- Production Server 부하를 줄여줍니다.
- Binary Large Object만을 위한 별도 서버를 만들어서 관리할 필요가 없어서 유지 보수가 용이합니다.
- CDN을 사용함으로 속도 면에서 이득이 있습니다.

아마존에서 서버를 제공하고 관리해주기때문에 저희가 별도로 이미지만을 위해 데이터베이스 MongoDB와 GridFS를 통해 관리하는 것 보다 차후 확장성면이나 유지 보수 측면에서 간편해져서 이득이라 판단했습니다. 또한 아마존에서 제공하는 CloudFront로 CDN을 통해 이미지를 가져올 수 있어 속도 측면에서도 이득이라 판단했습니다.

### ***FUSE***

단순 문자 비교하는 방식으로는 어려운 스펠링의 맥주를 검색하기가 어려워 fuse 라이브러리를 통해 음성으로 단어 검색이 가능하게 구현하여 ux를 개선하고자 사용하였습니다.
<br>
<br>

### ***Eslint, Prettier***

팀 프로젝트에서 서로의 코드 스타일을 최대로 맞추어 가독성을 높이기 위해 eslint와 prettier를 사용하였습니다. 다만 에어비엔비와 같이 정해져 있는 룰을 사용하지 않고 토의를 통해 결정하였습니다.
<br>
<br>

# Issue && Solution

### ***Log-in issue with react native navigation life cycle***

처음 로그인 플로우를 계획할 때, 사용자가 두 번의 로딩 화면(1. 로그인 할 때, 2. 로그인 후 오늘의 추천 맥주 데이터 가져올 때)을 마주하는 게 UX적으로 좋지 않을거라 생각해 최초 로그인 시 오늘의 추천 맥주도 fetch해 로딩 화면을 한 번만 마주할 수 있도록 하려고 했습니다.  

하지만 로직을 완성 후 서버에 오늘의 추천 맥주 요청을 두 번 보낸다는 사실을 알게 됐습니다. 이런 불필요한 요청으로 인해 오류가 발생할 가능성을 내포하게 됐습니다.  

두 번의 요청이 발생한 이유는 navigation의 life cycle을 잘 이해하지 못하고 사용했기 때문이었습니다.  

Bibino는 사용자가 앱을 실행시켰을 때, `MainStackNavigator`에서 `SecureStore`에 서버에 데이터 요청할 때 사용하는 id token을 가지고 있는지 확인합니다. 만약 있다면 redux store에 저장 후 사용자가 앱에서 사용할 기능들의 screen을 가진 `userScreens` 객체를 stack navigator에 연결하고, 아니면 로그인을 위한 `authScreens` 객체를 연결합니다.
<br>
<br>

```jsx
const MainStackNavigator = () => {
  const isLogedIn = useSelector((state) => !!state.user.idToken);

  const authScreens = {
    Intro,
    SignIn,
  };
  const userScreens = {
    MainTab: MainTabNavigator,
    Photo,
    // ...rest components,
  };

  return (
    <Stack.Navigator headerMode={isLogedIn ? "screen" : "none"}>
      {Object.entries({
        ...(isLogedIn ? userScreens : authScreens),
      }).map(([name, component], i) => (
        <Stack.Screen
          key={i}
          name={name}
          component={component}
          options={
            isLogedIn
              ? {
                  header: (navigation) => <Header navigation={navigation} />,
                }
              : {}
          }
        />
      ))}
    </Stack.Navigator>
  );
};
```
<br>
<br>

로그인 플로우 중 사용자의 id token을 redux store와 `SecureStore`에 저장한 후 오늘의 추천 맥주 데이터를 서버에 요청하는데, 이 때 오늘의 추천 맥주에 대한 응답이 이뤄지기 전에 id token이 저장됩니다. 그러면서 unmounted된 `MainStackNavigator`에서 `useSelector`로 가져온 idToken이 업데이트 돼 re-rendering이 되고 `userScreens`가 네비게이터에 연결되고, 아직 오늘의 추천 맥주 데이터가 비어있기 때문에 `Main`컴포넌트에서는 또 다시 오늘의 추천 맥주에 대한 요청을 서버에 보냅니다.

이 문제를 해결하는 건 결국 두 번의 로딩 화면을 보여주는 것이었습니다. 로그인 플로우는 로그인 관련 요청만, 오늘의 추천 맥주는 그것이 시각적으로 보여져야 할 `Main` 컴포넌트에서 각각의 데이터를 요청해 로딩 화면이 두번 나오되, 사용자에게 현재 앱이 동작하고 있음을 시각적으로 보여줄 수 있고 나눠서 요청함으로써 응답 시간을 줄일 수 있기 때문입니다.
<br>
<br>

### ***Dynamic Path local image import***

React의 require()는 변수를 사용해서 이미지를 가져올 수 없으므로 동적으로 이미지를 가져오는 데 어려움을 겪었습니다.
<br>
<br>

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
<br>
<br>

### ***Recommendation Logic***
처음 앱을 사용할 때는 사용자에 대한 데이터가 없어서 사용자가 처음 찍은 맥주를 바탕으로 추천해주지만 사용자에 대한 데이터가 쌓여갈 수록 그와 유사한 맥주들을 추천해주는 로직을 구현하였습니다.

맥주 하나를 점으로 인식하고 두 점 사이의 거리를 찾는 공식을 사용하는 것입니다. 이런 식으로 맥주들을 나열하면 거리가 0에 가까울 수록 비슷한 맥주들이므로 사용자가 비슷하지만 다양한 맥주를 경험하도록 도와줄 수 있습니다. 현재는 맥주 추천에 이용하는 게 3가지 특징이라 3차원의 두 점 사이의 거리를 사용했지만 혹여 더 많은 특징을 사용한다할지라도 바로 적용할 수 있다는 장점이 있습니다. 그리고 두 점 사이의 거리가 0에 가까울수록 비슷한 맥주이므로 가장 비슷한 맥주들을 추천해줄 수 있습니다.

$$abs(\sqrt{(b_1-b_2)^2 + (a_1-a_2)^2 + (s_1-s_2)^2})$$

생각은 했지만 아쉽게도 구현은 못한 최적화 방법이 있는데 그 방법은  점과 점사이의 거리에서 착안한 projection을 사용한 방법입니다. mongoDB에서 지원하는 $near라는 쿼리를 이용하면 2d 평면상에서 점과 점의 거리를 구해 빠른 속도로 쿼리가 가능하여 이걸 이용해 3차원을 2차원에 투영하여 점과 점 사이의 거리를 구해서 쿼리를 이용하면 훨씬 빠른 방식으로 구현할 수 있었습니다.

<br>
<br>

### ***Search Logic***

맥주 같은 경우 이름이 무척 다양하고 여러 나라 언어로 되어있어서 사용자가 철자를 잘 기억 못하는 경우가 있습니다. 이럴 때 본인이 원하는 맥주를 찾지 못하여 나쁜 사용자 경험을 체험하는걸 방지하기 위해서 철자가 조금 틀리더라도 비슷한 키워드를 통해서 맥주를 찾을 수 있도록 자동 완성 기능을 퍼지 검색을 통해 구현했습니다. 이 로직의 경우 이미 저희 목적과 부합하는 FUSE 라이브러리를 통해 구현하였습니다.

<br>
<br>
