# https://openapi.nexon.com/game/maplestory/?id=22

메이플 오픈 API는 여기 참고 

# 해야 할 일!
1. GuildPage 에 검색, 정렬이 있어야 할 듯
2. Adminpage : DB에서 길드 코드와 n주차 조회해서 데이터 불러오기


# Hennie TDOO

## 작업 편의성
    - 디렉토리 구조 정리
    - 길드 페이지 누르면 메인 페이지로 돌아가도록
## 기능    
    - 서버명 미입력시 입력하라는 alret 뜨도록
    - Nexon Open API 이용하여 캐릭터 정보 불러와서 컴포넌트에 띄우도록 ( 레벨, 직업 등 / 추후 DB에 저장된 플래그, 수로 점수까지)
    - SelectServer 선택박스 방식 외에 서버명을 직접 입력 가능하도록, 일부 입력 시 해당 문자를 가지고 있는 서버만 선택박스에 나타나도록