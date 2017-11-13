적용법 : -uroot -p비밀번호  (데이타베이스이름)  < test.sql

설명 :
  -account : 사용자 계정 정보
    1) id : id정보
    2) pw : pw정보
    3) point : 보유 point정보
    4) createTime : 계정 생성 시간(YYYY-MM-DD HH:mm:SS)
    5) used : 사용 point누적 정보
  -post : 생성된 팁의 정보
    1) post : 내용
    2) category : 분야
    3) createTime : 생성 시간(YYYY-MM-DD HH:mm:SS)
    4) id : 고유 id
    5) price : 가격
    6) title : 제목
    7) like, disLike : 좋아요, 싫어요 정보
    8) view : 조회수
    9) salesVolume : 판매량
    10) categoryRank : 분야별 랭킹
    11) wholeRank : 전체 랭킹
    12) account_id : 생성자 id
  -comment : 팁의 댓글
    1) comment : 내용
    2) createTime : 생성 시간(YYYY-MM-DD HH:mm:SS)
    3) id : 고유 id
    4) post_id : 해당 댓글이 달린 팁의 고유 id
    5) account_id : 생성자 id
  -report : 팁 신고
    1) reportId : 신고 내용(리스트 선택형)
    2) id : 고유 id
    3) reportTime : 신고 시간(YYYY-MM-DD HH:mm:SS)
    4) post_id : 대상 팁 고유 id
    5) account_id : 신고자 id
